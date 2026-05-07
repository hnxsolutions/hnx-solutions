import {
  createActivity,
  createNotification,
  createWorkspaceId,
  getLeadScoreResult,
  parseWorkspaceValue,
  type WorkspaceLead,
  type WorkspaceRunReport,
  type WorkspaceState,
  type WorkspaceTaskPriority,
  type WorkspaceWorkflow,
} from "@/lib/workspaceState";

type WorkflowEventContext = {
  leadId?: string;
  eventLabel?: string;
};

function getLeadFieldValue(lead: WorkspaceLead, field: string) {
  const normalized = field.toLowerCase();
  if (normalized === "always") return "Always";
  if (normalized === "source") return lead.source;
  if (normalized === "stage") return lead.stage;
  if (normalized === "temperature") return lead.temperature;
  if (normalized === "value") return parseWorkspaceValue(lead.value).toString();
  if (normalized === "owner") return lead.owner;
  if (normalized === "ai score") return (lead.aiScore ?? 0).toString();
  if (normalized === "name") return lead.name;
  if (normalized === "need") return lead.need;
  return lead.customFields[field] ?? "";
}

export function workflowMatchesLead(workflow: WorkspaceWorkflow, lead: WorkspaceLead) {
  const { field, operator, value } = workflow.condition;
  if (!field || field === "Always" || value === "Always") return true;

  const actual = getLeadFieldValue(lead, field);
  const actualLower = actual.toLowerCase();
  const expectedLower = value.toLowerCase();

  if (operator === "equals") return actualLower === expectedLower;
  if (operator === "contains") return actualLower.includes(expectedLower);
  if (operator === "greater_than") return Number(actual) > Number(value);
  if (operator === "is_empty") return actual.trim().length === 0;
  return true;
}

function resolveOwner(configOwner: string | undefined, lead: WorkspaceLead) {
  if (!configOwner || configOwner === "Lead owner") return lead.owner || "Sales Team";
  return configOwner;
}

function resolvePriority(priority: string | undefined): WorkspaceTaskPriority {
  if (priority === "High" || priority === "Medium" || priority === "Low") return priority;
  return "Medium";
}

function executeWorkflowAction(state: WorkspaceState, workflow: WorkspaceWorkflow, lead: WorkspaceLead) {
  const at = new Date();
  const leadActivity = createActivity(
    "Workflow action",
    `workflow:${workflow.id}`,
    `${workflow.name} ran for ${lead.name}.`,
  );
  let nextLeads = state.leads.map((item) =>
    item.id === lead.id ? { ...item, activities: [leadActivity, ...item.activities] } : item,
  );
  let nextTasks = state.tasks;
  let nextNotifications = state.notifications;
  let actionLine = "Action recorded in activity log.";

  if (workflow.action.type === "create_task") {
    const titleTemplate = workflow.action.config.title || `Follow up with ${lead.name}`;
    const title = titleTemplate.includes("{lead}") ? titleTemplate.replaceAll("{lead}", lead.name) : titleTemplate;
    nextTasks = [
      {
        id: createWorkspaceId("task"),
        title,
        linkedLeadId: lead.id,
        owner: resolveOwner(workflow.action.config.owner, lead),
        priority: resolvePriority(workflow.action.config.priority),
        due: workflow.action.config.due || "Tomorrow",
        status: "Pending",
        createdBy: "workflow",
        createdAt: at,
      },
      ...nextTasks,
    ];
    nextNotifications = [
      createNotification(`Task created by workflow: ${title}`, "workflow"),
      ...nextNotifications,
    ];
    actionLine = `Step 3 done: Task created "${title}"`;
  } else if (workflow.action.type === "send_notification") {
    const message = workflow.action.config.message || `${workflow.name} matched ${lead.name}.`;
    nextNotifications = [createNotification(message, "workflow"), ...nextNotifications];
    actionLine = `Step 3 done: Notification sent "${message}"`;
  } else if (workflow.action.type === "assign_to") {
    const owner = resolveOwner(workflow.action.config.owner, lead);
    nextLeads = nextLeads.map((item) => (item.id === lead.id ? { ...item, owner } : item));
    nextNotifications = [createNotification(`${lead.name} assigned to ${owner}.`, "workflow"), ...nextNotifications];
    actionLine = `Step 3 done: Assigned lead to ${owner}`;
  } else if (workflow.action.type === "change_stage") {
    const stage = workflow.action.config.stage || workflow.action.config.newStage || lead.stage;
    nextLeads = nextLeads.map((item) => (item.id === lead.id ? { ...item, stage } : item));
    nextNotifications = [createNotification(`${lead.name} moved to ${stage}.`, "workflow"), ...nextNotifications];
    actionLine = `Step 3 done: Stage changed to ${stage}`;
  } else if (workflow.action.type === "send_whatsapp") {
    nextNotifications = [createNotification(`WhatsApp queued for ${lead.name}.`, "workflow"), ...nextNotifications];
    actionLine = `Step 3 done: WhatsApp message queued`;
  } else if (workflow.action.type === "send_email") {
    nextNotifications = [createNotification(`Email queued for ${lead.name}.`, "workflow"), ...nextNotifications];
    actionLine = `Step 3 done: Email queued`;
  } else if (workflow.action.type === "ai_score") {
    const result = getLeadScoreResult(lead);
    nextLeads = nextLeads.map((item) => (item.id === lead.id ? { ...item, aiScore: result.score } : item));
    nextNotifications = [createNotification(`AI scored ${lead.name} - ${result.score}/100.`, "ai"), ...nextNotifications];
    actionLine = `Step 3 done: AI score updated to ${result.score}/100`;
  } else if (workflow.action.type === "change_temperature") {
    const temperature = workflow.action.config.temperature;
    if (temperature === "Hot" || temperature === "Warm" || temperature === "Cold" || temperature === "New") {
      nextLeads = nextLeads.map((item) => (item.id === lead.id ? { ...item, temperature } : item));
      actionLine = `Step 3 done: Temperature changed to ${temperature}`;
    }
  } else if (workflow.action.type === "add_activity") {
    actionLine = `Step 3 done: Activity added`;
  } else if (workflow.action.type === "trigger_workflow") {
    actionLine = `Step 3 done: Linked workflow trigger queued`;
  }

  return {
    ...state,
    leads: nextLeads,
    tasks: nextTasks,
    notifications: nextNotifications,
    activityLog: [
      createActivity("Workflow ran", `workflow:${workflow.id}`, `${workflow.name} affected ${lead.name}.`),
      ...state.activityLog,
    ],
    meta: {
      ...state.meta,
      latestAiResponse: state.meta.latestAiResponse,
    },
    line: actionLine,
  };
}

function updateWorkflowStats(state: WorkspaceState, workflowIds: string[], report: WorkspaceRunReport) {
  const idSet = new Set(workflowIds);
  return {
    ...state,
    workflows: state.workflows.map((workflow) =>
      idSet.has(workflow.id)
        ? { ...workflow, runCount: workflow.runCount + 1, lastRunAt: report.at }
        : workflow,
    ),
    stats: {
      ...state.stats,
      workflowsRun: state.stats.workflowsRun + workflowIds.length,
    },
    notifications: [
      createNotification(`Workflow ran: ${report.workflowName} - ${report.affected} leads affected.`, "workflow"),
      ...state.notifications,
    ].slice(0, 40),
    meta: {
      ...state.meta,
      lastWorkflowRun: report,
    },
  };
}

export function runWorkflowsForEvent(
  state: WorkspaceState,
  event: string,
  context: WorkflowEventContext = {},
) {
  const workflows = state.workflows.filter((workflow) => workflow.isActive && workflow.trigger.event === event);
  if (!workflows.length) return state;

  let nextState = state;
  const affectedWorkflowIds: string[] = [];
  const lines: string[] = [];
  let affected = 0;

  workflows.forEach((workflow) => {
    const candidates = context.leadId
      ? nextState.leads.filter((lead) => lead.id === context.leadId)
      : nextState.leads;
    const matchingLeads = candidates.filter((lead) => workflowMatchesLead(workflow, lead));

    lines.push(`Step 1 fired: ${context.eventLabel ?? workflow.trigger.event}`);
    lines.push(
      matchingLeads.length
        ? `Step 2 passed: ${workflow.condition.field} ${workflow.condition.operator} ${workflow.condition.value}`
        : `Step 2 found no matching leads for ${workflow.name}`,
    );

    matchingLeads.forEach((lead) => {
      const actionResult = executeWorkflowAction(nextState, workflow, lead);
      nextState = actionResult;
      lines.push(actionResult.line);
      affected += 1;
    });

    if (matchingLeads.length) {
      affectedWorkflowIds.push(workflow.id);
    }
  });

  if (!affectedWorkflowIds.length) {
    return {
      ...nextState,
      meta: {
        ...nextState.meta,
        lastWorkflowRun: {
          workflowName: workflows.map((workflow) => workflow.name).join(", "),
          affected: 0,
          lines,
          at: new Date(),
        },
      },
    };
  }

  return updateWorkflowStats(nextState, affectedWorkflowIds, {
    workflowName: workflows.map((workflow) => workflow.name).join(", "),
    affected,
    lines,
    at: new Date(),
  });
}

export function runSingleWorkflow(state: WorkspaceState, workflowId: string) {
  const workflow = state.workflows.find((item) => item.id === workflowId);
  if (!workflow) return state;

  const matchingLeads = state.leads.filter((lead) => workflowMatchesLead(workflow, lead));
  let nextState = state;
  const lines = [
    `Running workflow: "${workflow.name}"`,
    `Step 1 fired: Manual run`,
    matchingLeads.length
      ? `Step 2 passed on ${matchingLeads.length} lead${matchingLeads.length === 1 ? "" : "s"}`
      : "Step 2 found no matching leads",
  ];

  matchingLeads.forEach((lead) => {
    const actionResult = executeWorkflowAction(nextState, workflow, lead);
    nextState = actionResult;
    lines.push(actionResult.line);
  });

  return updateWorkflowStats(nextState, [workflow.id], {
    workflowName: workflow.name,
    affected: matchingLeads.length,
    lines,
    at: new Date(),
  });
}

