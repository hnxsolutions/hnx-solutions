import type { DemoIndustry, DemoLead, DemoWorkflow } from "@/components/crm-demo/demoData";

export type WorkspaceTemperature = "Hot" | "Warm" | "Cold" | "New";
export type WorkspaceTaskPriority = "High" | "Medium" | "Low";
export type WorkspaceTaskStatus = "Pending" | "In Progress" | "Done" | "Overdue";
export type WorkspaceCreatedBy = "user" | "workflow" | "ai";
export type WorkspaceCustomFieldType = "text" | "number" | "dropdown" | "date" | "user" | "status" | "currency";
export type WorkspaceNotificationType = "workflow" | "ai" | "system" | "user";
export type WorkspaceDashboardWidgetType = "metric" | "chart" | "list" | "ai_insight";
export type WorkspaceSeedMode = "example" | "scratch";

export type WorkspaceActivity = {
  id: string;
  action: string;
  by: string;
  at: Date;
  details: string;
};

export type WorkspaceLead = {
  id: string;
  name: string;
  organization: string;
  phone: string;
  email: string;
  source: string;
  stage: string;
  owner: string;
  value: string;
  temperature: WorkspaceTemperature;
  need: string;
  note: string;
  aiScore: number | null;
  createdAt: Date;
  activities: WorkspaceActivity[];
  customFields: Record<string, string>;
};

export type WorkspaceRole = {
  id: string;
  name: string;
  description: string;
  permissions: Record<string, Record<string, boolean>>;
  color: string;
  createdAt: Date;
};

export type WorkspaceWorkflowTrigger = {
  event: string;
  module: string;
  condition: string;
};

export type WorkspaceWorkflowCondition = {
  field: string;
  operator: string;
  value: string;
};

export type WorkspaceWorkflowAction = {
  type: string;
  config: Record<string, string>;
};

export type WorkspaceWorkflow = {
  id: string;
  name: string;
  description: string;
  trigger: WorkspaceWorkflowTrigger;
  condition: WorkspaceWorkflowCondition;
  action: WorkspaceWorkflowAction;
  isActive: boolean;
  runCount: number;
  lastRunAt: Date | null;
  createdAt: Date;
};

export type WorkspaceTask = {
  id: string;
  title: string;
  linkedLeadId: string | null;
  owner: string;
  priority: WorkspaceTaskPriority;
  due: string;
  status: WorkspaceTaskStatus;
  createdBy: WorkspaceCreatedBy;
  createdAt: Date;
};

export type WorkspacePipelineStage = {
  id: string;
  name: string;
  color: string;
  automations: string[];
  order: number;
};

export type WorkspacePipeline = {
  id: string;
  name: string;
  stages: WorkspacePipelineStage[];
  createdAt: Date;
};

export type WorkspaceCustomField = {
  id: string;
  module: string;
  name: string;
  type: WorkspaceCustomFieldType;
  options: string[];
  required: boolean;
  createdAt: Date;
};

export type WorkspaceNotification = {
  id: string;
  message: string;
  type: WorkspaceNotificationType;
  read: boolean;
  createdAt: Date;
};

export type WorkspaceDashboardWidget = {
  id: string;
  type: WorkspaceDashboardWidgetType;
  title: string;
  metric: string;
  position: number;
  visible: boolean;
};

export type WorkspaceRunReport = {
  workflowName: string;
  affected: number;
  lines: string[];
  at: Date;
};

export type WorkspaceMeta = {
  onboardingComplete: boolean;
  onboardingChoice: WorkspaceSeedMode | null;
  dashboardConfigured: boolean;
  latestAiResponse: string;
  blueprintCelebrated: boolean;
  lastWorkflowRun: WorkspaceRunReport | null;
};

export type WorkspaceState = {
  industryId: string;
  workspaceName: string;
  createdAt: Date;
  leads: WorkspaceLead[];
  roles: WorkspaceRole[];
  workflows: WorkspaceWorkflow[];
  tasks: WorkspaceTask[];
  pipelines: WorkspacePipeline[];
  customFields: WorkspaceCustomField[];
  notifications: WorkspaceNotification[];
  activityLog: WorkspaceActivity[];
  dashboardWidgets: WorkspaceDashboardWidget[];
  stats: {
    totalLeadsCreated: number;
    workflowsRun: number;
    tasksCompleted: number;
    aiQueriesAsked: number;
    rolesCreated: number;
  };
  meta: WorkspaceMeta;
};

export type WorkspaceAction =
  | { type: "INITIALIZE_WORKSPACE"; payload: { industry: DemoIndustry; seedMode: WorkspaceSeedMode } }
  | { type: "SET_WORKSPACE_NAME"; payload: { name: string } }
  | { type: "ADD_LEAD"; payload: Omit<WorkspaceLead, "id" | "createdAt" | "activities" | "aiScore"> }
  | { type: "IMPORT_DEMO_LEADS"; payload: { industry: DemoIndustry } }
  | { type: "UPDATE_LEAD"; payload: { id: string; updates: Partial<WorkspaceLead> } }
  | { type: "DELETE_LEAD"; payload: { id: string } }
  | { type: "MOVE_LEAD_STAGE"; payload: { leadId: string; newStage: string } }
  | { type: "AI_SCORE_LEAD"; payload: { leadId: string; score: number; reasons: string[] } }
  | { type: "CREATE_ROLE"; payload: Omit<WorkspaceRole, "id" | "createdAt"> }
  | { type: "DELETE_ROLE"; payload: { roleId: string } }
  | { type: "UPDATE_ROLE_PERMISSION"; payload: { roleId: string; module: string; action: string; value: boolean } }
  | { type: "CREATE_WORKFLOW"; payload: Omit<WorkspaceWorkflow, "id" | "createdAt" | "runCount" | "lastRunAt"> }
  | { type: "UPDATE_WORKFLOW"; payload: { workflowId: string; updates: Partial<WorkspaceWorkflow> } }
  | { type: "DELETE_WORKFLOW"; payload: { workflowId: string } }
  | { type: "RUN_WORKFLOW"; payload: { workflowId: string } }
  | { type: "TOGGLE_WORKFLOW"; payload: { workflowId: string } }
  | { type: "CREATE_TASK"; payload: Omit<WorkspaceTask, "id" | "createdAt"> }
  | { type: "COMPLETE_TASK"; payload: { taskId: string } }
  | { type: "ADD_PIPELINE_STAGE"; payload: { pipelineId: string; stage: Omit<WorkspacePipelineStage, "id"> } }
  | { type: "UPDATE_PIPELINE_STAGE"; payload: { pipelineId: string; stageId: string; updates: Partial<WorkspacePipelineStage> } }
  | { type: "REMOVE_PIPELINE_STAGE"; payload: { pipelineId: string; stageId: string } }
  | { type: "REORDER_PIPELINE_STAGE"; payload: { pipelineId: string; stageId: string; direction: "up" | "down" } }
  | { type: "ADD_CUSTOM_FIELD"; payload: Omit<WorkspaceCustomField, "id" | "createdAt"> }
  | { type: "ADD_DASHBOARD_WIDGET"; payload: { widget: WorkspaceDashboardWidget } }
  | { type: "REMOVE_DASHBOARD_WIDGET"; payload: { widgetId: string } }
  | { type: "TOGGLE_DASHBOARD_WIDGET"; payload: { widgetId: string } }
  | { type: "LOG_AI_QUERY"; payload: { query: string; response: string } }
  | { type: "ADD_NOTIFICATION"; payload: { message: string; type: WorkspaceNotificationType } }
  | { type: "MARK_NOTIFICATION_READ"; payload: { id: string } }
  | { type: "MARK_ALL_NOTIFICATIONS_READ" }
  | { type: "MARK_BLUEPRINT_CELEBRATED" }
  | { type: "RESTORE_WORKSPACE"; payload: WorkspaceState }
  | { type: "RESET_WORKSPACE" };

export const workspaceStorageKey = "goorg_workspace_session";

export const workspacePermissionModules = [
  "Leads",
  "Pipeline",
  "Customers",
  "Tasks",
  "Tickets",
  "Workflows",
  "Reports",
  "AI Assistant",
  "Settings",
  "Users",
  "Custom Fields",
  "Audit Log",
  "Data Export",
] as const;

export const workspacePermissionActions = ["View", "Create", "Edit", "Delete", "Export", "Approve", "Manage"] as const;

export const roleTemplateNames = ["Owner", "Admin", "Manager", "Sales User", "Support", "Operations", "Custom"] as const;
export type RoleTemplateName = (typeof roleTemplateNames)[number];

export const workspaceRoleColors = ["#2563eb", "#0891b2", "#16a34a", "#f59e0b", "#7c3aed", "#e11d48"];
export const workspaceStageColors = ["#2563eb", "#0891b2", "#16a34a", "#f59e0b", "#7c3aed", "#e11d48", "#475569", "#0d9488"];

export const workspaceLeadSources = ["Website", "WhatsApp", "Facebook Ad", "Referral", "Walk-in", "Cold Call", "Other"];
export const workspaceTemperatures: WorkspaceTemperature[] = ["Hot", "Warm", "Cold", "New"];
export const workspaceTaskPriorities: WorkspaceTaskPriority[] = ["High", "Medium", "Low"];

export const workspaceTriggerEvents = [
  { label: "Lead is created", value: "lead_created", module: "Leads" },
  { label: "Lead stage is changed", value: "stage_changed", module: "Leads" },
  { label: "Lead AI score updated", value: "ai_score_updated", module: "Leads" },
  { label: "Task is created", value: "task_created", module: "Tasks" },
  { label: "Task becomes overdue", value: "task_overdue", module: "Tasks" },
  { label: "Task is completed", value: "task_completed", module: "Tasks" },
  { label: "Ticket is opened", value: "ticket_opened", module: "Tickets" },
  { label: "Ticket is escalated", value: "ticket_escalated", module: "Tickets" },
  { label: "Custom field value changes", value: "custom_field_changed", module: "Custom Fields" },
  { label: "Record is updated", value: "record_updated", module: "Records" },
  { label: "Form submission received", value: "form_submission", module: "Forms" },
  { label: "Every day at 9am", value: "daily_9am", module: "Time" },
  { label: "X days after stage change", value: "days_after_stage_change", module: "Time" },
] as const;

export const workspaceConditionFields = ["Always", "Source", "Stage", "Temperature", "Value", "Owner", "AI Score", "Name", "Need"];
export const workspaceConditionOperators = ["equals", "greater_than", "contains", "is_empty"];

export const workspaceActionTypes = [
  { label: "Send in-app notification", value: "send_notification" },
  { label: "Create task", value: "create_task" },
  { label: "Assign lead to", value: "assign_to" },
  { label: "Change lead stage", value: "change_stage" },
  { label: "Send WhatsApp", value: "send_whatsapp" },
  { label: "Send email", value: "send_email" },
  { label: "Ask AI to score lead", value: "ai_score" },
  { label: "Change lead temperature", value: "change_temperature" },
  { label: "Add activity log entry", value: "add_activity" },
  { label: "Trigger another workflow", value: "trigger_workflow" },
] as const;

export const workspaceWorkflowTemplates: Array<{
  name: string;
  description: string;
  trigger: WorkspaceWorkflowTrigger;
  condition: WorkspaceWorkflowCondition;
  action: WorkspaceWorkflowAction;
}> = [
  {
    name: "Welcome new lead",
    description: "Create an immediate call task whenever a new lead enters the CRM.",
    trigger: { event: "lead_created", module: "Leads", condition: "Always" },
    condition: { field: "Always", operator: "equals", value: "Always" },
    action: { type: "create_task", config: { title: "Call within 24hrs", owner: "Sales Team", priority: "High", due: "Tomorrow" } },
  },
  {
    name: "Hot lead alert",
    description: "Notify the owner when AI scoring finds a lead above 80.",
    trigger: { event: "ai_score_updated", module: "Leads", condition: "AI Score > 80" },
    condition: { field: "AI Score", operator: "greater_than", value: "80" },
    action: { type: "send_notification", config: { message: "Hot lead detected. Call this lead now." } },
  },
  {
    name: "Follow-up reminder",
    description: "Create a follow-up task after a lead reaches Contacted.",
    trigger: { event: "stage_changed", module: "Leads", condition: "Stage = Contacted" },
    condition: { field: "Stage", operator: "equals", value: "Contacted" },
    action: { type: "create_task", config: { title: "Follow up in 3 days", owner: "Lead owner", priority: "Medium", due: "In 3 days" } },
  },
  {
    name: "Lost lead recovery",
    description: "Ask a manager to review leads marked Cold.",
    trigger: { event: "stage_changed", module: "Leads", condition: "Temperature = Cold" },
    condition: { field: "Temperature", operator: "equals", value: "Cold" },
    action: { type: "send_notification", config: { message: "Review this cold lead for recovery." } },
  },
  {
    name: "WhatsApp lead priority",
    description: "Treat WhatsApp inquiries as high intent.",
    trigger: { event: "lead_created", module: "Leads", condition: "Source = WhatsApp" },
    condition: { field: "Source", operator: "equals", value: "WhatsApp" },
    action: { type: "change_temperature", config: { temperature: "Hot" } },
  },
  {
    name: "New lead assignment",
    description: "Assign every new lead to the available sales user.",
    trigger: { event: "lead_created", module: "Leads", condition: "Always" },
    condition: { field: "Always", operator: "equals", value: "Always" },
    action: { type: "assign_to", config: { owner: "Sales Team" } },
  },
];

export function createWorkspaceId(prefix: string) {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `${prefix}_${crypto.randomUUID()}`;
  }
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;
}

export function normalizeTemperature(temperature: DemoLead["temperature"] | string): WorkspaceTemperature {
  if (temperature === "Hot" || temperature === "High") return "Hot";
  if (temperature === "Warm" || temperature === "Medium") return "Warm";
  if (temperature === "Cold") return "Cold";
  return "New";
}

export function parseWorkspaceValue(value: string) {
  const lower = value.toLowerCase();
  const numeric = Number(value.replace(/[^0-9.]/g, ""));
  if (Number.isNaN(numeric)) return 0;
  if (lower.includes("cr")) return numeric * 10000000;
  if (lower.includes("l")) return numeric * 100000;
  if (lower.includes("k")) return numeric * 1000;
  return numeric;
}

export function formatWorkspaceCurrency(value: number) {
  if (value >= 10000000) return `Rs. ${(value / 10000000).toFixed(1)}Cr`;
  if (value >= 100000) return `Rs. ${(value / 100000).toFixed(1)}L`;
  if (value >= 1000) return `Rs. ${(value / 1000).toFixed(0)}K`;
  return `Rs. ${value.toLocaleString("en-IN")}`;
}

export function createActivity(action: string, by: string, details: string): WorkspaceActivity {
  return {
    id: createWorkspaceId("act"),
    action,
    by,
    at: new Date(),
    details,
  };
}

export function createNotification(message: string, type: WorkspaceNotificationType): WorkspaceNotification {
  return {
    id: createWorkspaceId("ntf"),
    message,
    type,
    read: false,
    createdAt: new Date(),
  };
}

export function createDashboardWidgets(): WorkspaceDashboardWidget[] {
  return [
    { id: "widget_total_leads", type: "metric", title: "Total Leads", metric: "total_leads", position: 1, visible: true },
    { id: "widget_hot_leads", type: "metric", title: "Hot Leads", metric: "hot_leads", position: 2, visible: true },
    { id: "widget_pipeline_value", type: "metric", title: "Pipeline Value", metric: "pipeline_value", position: 3, visible: true },
    { id: "widget_active_workflows", type: "metric", title: "Workflows Active", metric: "active_workflows", position: 4, visible: true },
    { id: "widget_stage_distribution", type: "chart", title: "Pipeline Stage Distribution", metric: "stage_distribution", position: 5, visible: true },
    { id: "widget_ai_insight", type: "ai_insight", title: "Latest AI Insight", metric: "latest_ai", position: 6, visible: true },
  ];
}

export function createPermissionTemplate(template: RoleTemplateName): Record<string, Record<string, boolean>> {
  const permissions: Record<string, Record<string, boolean>> = {};

  workspacePermissionModules.forEach((moduleName) => {
    permissions[moduleName] = {};
    workspacePermissionActions.forEach((action) => {
      permissions[moduleName][action] = false;
    });
  });

  function allow(moduleNames: string[], actions: string[]) {
    moduleNames.forEach((moduleName) => {
      actions.forEach((action) => {
        if (permissions[moduleName]?.[action] !== undefined) {
          permissions[moduleName][action] = true;
        }
      });
    });
  }

  if (template === "Owner") {
    workspacePermissionModules.forEach((moduleName) => allow([moduleName], [...workspacePermissionActions]));
  } else if (template === "Admin") {
    workspacePermissionModules.forEach((moduleName) => allow([moduleName], [...workspacePermissionActions]));
    permissions.Users.Delete = false;
  } else if (template === "Manager") {
    allow([...workspacePermissionModules], ["View"]);
    allow(["Leads", "Pipeline", "Customers", "Tasks", "Tickets", "Workflows", "Reports", "AI Assistant", "Custom Fields", "Audit Log"], ["Create", "Edit", "Approve"]);
    allow(["Reports", "Data Export"], ["Export"]);
  } else if (template === "Sales User") {
    allow(["Leads"], ["View", "Create", "Edit"]);
    allow(["Pipeline"], ["View", "Edit"]);
    allow(["Tasks"], ["View", "Create", "Edit", "Delete", "Manage"]);
    allow(["AI Assistant"], ["View"]);
  } else if (template === "Support") {
    allow(["Tickets"], ["View", "Create", "Edit", "Delete", "Manage"]);
    allow(["Customers"], ["View"]);
    allow(["Tasks"], ["View", "Create"]);
  } else if (template === "Operations") {
    allow(["Tasks", "Customers", "Tickets", "Pipeline"], ["View", "Create", "Edit"]);
    allow(["Reports"], ["View"]);
  }

  return permissions;
}

export function createWorkspaceRole(
  name: string,
  description: string,
  template: RoleTemplateName,
  color: string,
): WorkspaceRole {
  return {
    id: createWorkspaceId("role"),
    name,
    description,
    permissions: createPermissionTemplate(template),
    color,
    createdAt: new Date(),
  };
}

export function createPipelineFromIndustry(industry: DemoIndustry): WorkspacePipeline {
  const stages = industry.pipelineStages.slice(0, 7).map((stage, index) => ({
    id: createWorkspaceId("stage"),
    name: stage,
    color: workspaceStageColors[index % workspaceStageColors.length],
    automations: [],
    order: index + 1,
  }));

  return {
    id: createWorkspaceId("pipe"),
    name: `${industry.name} Pipeline`,
    stages,
    createdAt: new Date(),
  };
}

export function createLeadFromDemo(lead: DemoLead, index: number): WorkspaceLead {
  const activity = createActivity("Lead imported", "user", `${lead.name} was imported from demo data.`);

  return {
    id: createWorkspaceId("lead"),
    name: lead.name,
    organization: lead.organization,
    phone: `+91 98765 43${(210 + index).toString().slice(-3)}`,
    email: `${lead.name.toLowerCase().replace(/[^a-z0-9]+/g, ".").replace(/^\.+|\.+$/g, "")}@example.com`,
    source: lead.source,
    stage: lead.stage,
    owner: lead.owner,
    value: lead.value,
    temperature: normalizeTemperature(lead.temperature),
    need: lead.need,
    note: lead.note,
    aiScore: null,
    createdAt: new Date(),
    activities: [activity],
    customFields: {},
  };
}

export function createWorkflowFromDemo(workflow: DemoWorkflow): WorkspaceWorkflow {
  return {
    id: createWorkspaceId("workflow"),
    name: workflow.title,
    description: workflow.action,
    trigger: {
      event: workflow.trigger.toLowerCase().includes("stage") || workflow.trigger.toLowerCase().includes("proposal")
        ? "stage_changed"
        : "lead_created",
      module: "Leads",
      condition: workflow.condition,
    },
    condition: { field: "Always", operator: "equals", value: "Always" },
    action: { type: "create_task", config: { title: workflow.action.slice(0, 64), owner: "Lead owner", priority: "Medium", due: "Tomorrow" } },
    isActive: workflow.active,
    runCount: 0,
    lastRunAt: null,
    createdAt: new Date(),
  };
}

export function createWorkspaceFromIndustry(industry: DemoIndustry, seedMode: WorkspaceSeedMode): WorkspaceState {
  const pipeline = createPipelineFromIndustry(industry);
  const leads = seedMode === "example" ? industry.leads.slice(0, 3).map(createLeadFromDemo) : [];
  const role =
    seedMode === "example"
      ? [createWorkspaceRole(industry.roleUserLabel || "Sales Executive", `Can manage assigned ${industry.labels.leads.toLowerCase()} and tasks.`, "Sales User", workspaceRoleColors[0])]
      : [];
  const workflow =
    seedMode === "example"
      ? [
          {
            ...createWorkflowFromDemo(industry.workflows[0] ?? { title: "Welcome new lead", trigger: "New lead is created", condition: "Always", action: "Create follow-up task", active: true }),
            name: "Welcome new lead",
            description: "Create an immediate follow-up task whenever a new lead is added.",
            trigger: { event: "lead_created", module: "Leads", condition: "Always" },
            condition: { field: "Always", operator: "equals", value: "Always" },
            action: { type: "create_task", config: { title: "Call within 24hrs", owner: "Lead owner", priority: "High", due: "Tomorrow" } },
            isActive: true,
          },
        ]
      : [];

  const activityLog = [
    createActivity(
      "Workspace initialized",
      "system",
      seedMode === "example" ? `${industry.name} workspace started with example data.` : `${industry.name} workspace started from scratch.`,
    ),
  ];

  return {
    industryId: industry.id,
    workspaceName: `My ${industry.name}`,
    createdAt: new Date(),
    leads,
    roles: role,
    workflows: workflow,
    tasks: [],
    pipelines: [pipeline],
    customFields: [],
    notifications: [
      createNotification(
        seedMode === "example" ? "Workspace ready with example leads, one role, and one workflow." : "Blank workspace ready. Add your first lead to begin.",
        "system",
      ),
    ],
    activityLog,
    dashboardWidgets: createDashboardWidgets(),
    stats: {
      totalLeadsCreated: leads.length,
      workflowsRun: 0,
      tasksCompleted: 0,
      aiQueriesAsked: 0,
      rolesCreated: role.length,
    },
    meta: {
      onboardingComplete: true,
      onboardingChoice: seedMode,
      dashboardConfigured: false,
      latestAiResponse: "",
      blueprintCelebrated: false,
      lastWorkflowRun: null,
    },
  };
}

export function getLeadScoreResult(lead: WorkspaceLead) {
  const hash = Array.from(lead.name + lead.organization).reduce((total, char) => total + char.charCodeAt(0), 0);
  const ranges: Record<WorkspaceTemperature, [number, number]> = {
    Hot: [75, 92],
    Warm: [45, 74],
    Cold: [15, 44],
    New: [55, 70],
  };
  const [min, max] = ranges[lead.temperature];
  const score = min + (hash % (max - min + 1));
  const value = parseWorkspaceValue(lead.value);
  const reasons = [
    `${lead.source || "Unknown"} source ${lead.source === "Referral" || lead.source === "WhatsApp" ? "usually converts quickly" : "needs structured follow-up"}.`,
    `${lead.temperature} temperature puts this lead in the ${score >= 75 ? "priority" : score >= 50 ? "watch" : "nurture"} lane.`,
    value >= 200000 ? "High deal value deserves manager visibility." : "Deal value is moderate, so speed and qualification matter most.",
  ];
  const recommendedAction =
    score >= 80
      ? "Call now and move this lead to the next committed stage."
      : score >= 60
        ? "Send a focused follow-up and schedule the next task."
        : "Add to nurture and ask one qualifying question before spending more sales time.";

  return { score, reasons, recommendedAction };
}

export function getPrimaryPipeline(workspace: WorkspaceState) {
  return workspace.pipelines[0];
}

export function getSortedStages(workspace: WorkspaceState) {
  return (getPrimaryPipeline(workspace)?.stages ?? []).slice().sort((a, b) => a.order - b.order);
}

export function getWorkspaceProgress(workspace: WorkspaceState) {
  const steps = [
    { key: "industry", label: "Industry selected", complete: Boolean(workspace.industryId) },
    { key: "lead", label: "First lead added", complete: workspace.leads.length > 0 },
    { key: "role", label: "Role created", complete: workspace.roles.length > 0 },
    { key: "workflow", label: "Workflow built", complete: workspace.workflows.length > 0 },
    { key: "dashboard", label: "Dashboard configured", complete: workspace.meta.dashboardConfigured },
    { key: "ai", label: "AI used", complete: workspace.stats.aiQueriesAsked > 0 || workspace.leads.some((lead) => lead.aiScore !== null) },
  ];
  const completeCount = steps.filter((step) => step.complete).length;
  return {
    percent: Math.round((completeCount / steps.length) * 100),
    steps,
  };
}

export function getModuleForTab(tab: string) {
  const map: Record<string, string> = {
    overview: "Reports",
    leads: "Leads",
    pipeline: "Pipeline",
    records: "Customers",
    tasks: "Tasks",
    tickets: "Tickets",
    workflows: "Workflows",
    permissions: "Users",
    reports: "Reports",
    ai: "AI Assistant",
    advanced: "Settings",
    roi: "Reports",
    build: "Custom Fields",
    activity: "Audit Log",
  };
  return map[tab] ?? "Reports";
}

export function canRoleViewTab(role: WorkspaceRole | null, tab: string) {
  if (!role) return true;
  const moduleName = getModuleForTab(tab);
  return role.permissions[moduleName]?.View ?? false;
}

export function getPermissionSummary(role: WorkspaceRole) {
  const modulesViewed = Object.entries(role.permissions).filter(([, actions]) => actions.View).length;
  const exports = Object.entries(role.permissions).filter(([, actions]) => actions.Export).length;
  const canDelete = Object.values(role.permissions).some((actions) => actions.Delete);
  return `Can view ${modulesViewed} modules · Can export ${exports} · ${canDelete ? "Can delete selected data" : "Cannot delete"}`;
}

