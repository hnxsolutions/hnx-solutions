"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import { demoIndustries } from "@/components/crm-demo/demoData";
import { runSingleWorkflow, runWorkflowsForEvent } from "@/lib/workspaceEngine";
import {
  createActivity,
  createDashboardWidgets,
  createLeadFromDemo,
  createNotification,
  createWorkspaceFromIndustry,
  createWorkspaceId,
  getWorkspaceProgress,
  workspaceStorageKey,
  type WorkspaceAction,
  type WorkspaceActivity,
  type WorkspaceCustomField,
  type WorkspaceDashboardWidget,
  type WorkspaceLead,
  type WorkspaceNotification,
  type WorkspacePipeline,
  type WorkspaceRole,
  type WorkspaceState,
  type WorkspaceTask,
  type WorkspaceWorkflow,
} from "@/lib/workspaceState";

type StoredWorkspaceSession = {
  workspace: WorkspaceState;
  isWorkspaceMode: boolean;
  selectedRoleId: string | null;
};

type WorkspaceContextValue = {
  workspace: WorkspaceState;
  dispatch: (action: WorkspaceAction) => void;
  isWorkspaceMode: boolean;
  setWorkspaceMode: (value: boolean) => void;
  selectedRoleId: string | null;
  setSelectedRoleId: (value: string | null) => void;
  selectedRole: WorkspaceRole | null;
  progress: ReturnType<typeof getWorkspaceProgress>;
  restoredFromSession: boolean;
  acknowledgeSessionRestore: () => void;
  canUndo: boolean;
  undoLastAction: () => void;
};

const WorkspaceContext = createContext<WorkspaceContextValue | null>(null);

function toDate(value: unknown) {
  return value instanceof Date ? value : new Date(typeof value === "string" || typeof value === "number" ? value : Date.now());
}

function reviveActivity(activity: WorkspaceActivity): WorkspaceActivity {
  return { ...activity, at: toDate(activity.at) };
}

function reviveLead(lead: WorkspaceLead): WorkspaceLead {
  return {
    ...lead,
    createdAt: toDate(lead.createdAt),
    activities: Array.isArray(lead.activities) ? lead.activities.map(reviveActivity) : [],
    customFields: lead.customFields ?? {},
  };
}

function reviveWorkflow(workflow: WorkspaceWorkflow): WorkspaceWorkflow {
  return {
    ...workflow,
    createdAt: toDate(workflow.createdAt),
    lastRunAt: workflow.lastRunAt ? toDate(workflow.lastRunAt) : null,
  };
}

function reviveTask(task: WorkspaceTask): WorkspaceTask {
  return { ...task, createdAt: toDate(task.createdAt) };
}

function reviveRole(role: WorkspaceRole): WorkspaceRole {
  return { ...role, createdAt: toDate(role.createdAt) };
}

function reviveCustomField(field: WorkspaceCustomField): WorkspaceCustomField {
  return { ...field, createdAt: toDate(field.createdAt) };
}

function reviveNotification(notification: WorkspaceNotification): WorkspaceNotification {
  return { ...notification, createdAt: toDate(notification.createdAt) };
}

function revivePipeline(pipeline: WorkspacePipeline): WorkspacePipeline {
  return {
    ...pipeline,
    createdAt: toDate(pipeline.createdAt),
    stages: Array.isArray(pipeline.stages) ? pipeline.stages : [],
  };
}

function reviveWorkspace(workspace: WorkspaceState): WorkspaceState {
  return {
    ...workspace,
    createdAt: toDate(workspace.createdAt),
    leads: Array.isArray(workspace.leads) ? workspace.leads.map(reviveLead) : [],
    roles: Array.isArray(workspace.roles) ? workspace.roles.map(reviveRole) : [],
    workflows: Array.isArray(workspace.workflows) ? workspace.workflows.map(reviveWorkflow) : [],
    tasks: Array.isArray(workspace.tasks) ? workspace.tasks.map(reviveTask) : [],
    pipelines: Array.isArray(workspace.pipelines) ? workspace.pipelines.map(revivePipeline) : [],
    customFields: Array.isArray(workspace.customFields) ? workspace.customFields.map(reviveCustomField) : [],
    notifications: Array.isArray(workspace.notifications) ? workspace.notifications.map(reviveNotification) : [],
    activityLog: Array.isArray(workspace.activityLog) ? workspace.activityLog.map(reviveActivity) : [],
    dashboardWidgets: Array.isArray(workspace.dashboardWidgets) ? workspace.dashboardWidgets : createDashboardWidgets(),
    meta: {
      onboardingComplete: workspace.meta?.onboardingComplete ?? false,
      onboardingChoice: workspace.meta?.onboardingChoice ?? null,
      dashboardConfigured: workspace.meta?.dashboardConfigured ?? false,
      latestAiResponse: workspace.meta?.latestAiResponse ?? "",
      blueprintCelebrated: workspace.meta?.blueprintCelebrated ?? false,
      lastWorkflowRun: workspace.meta?.lastWorkflowRun
        ? {
            ...workspace.meta.lastWorkflowRun,
            at: toDate(workspace.meta.lastWorkflowRun.at),
          }
        : null,
    },
  };
}

function addActivityAndNotification(
  state: WorkspaceState,
  activity: WorkspaceActivity,
  notification?: WorkspaceNotification,
) {
  return {
    ...state,
    activityLog: [activity, ...state.activityLog].slice(0, 80),
    notifications: notification ? [notification, ...state.notifications].slice(0, 40) : state.notifications,
  };
}

function workspaceReducer(state: WorkspaceState, action: WorkspaceAction): WorkspaceState {
  if (action.type === "INITIALIZE_WORKSPACE") {
    return createWorkspaceFromIndustry(action.payload.industry, action.payload.seedMode);
  }

  if (action.type === "RESTORE_WORKSPACE") {
    return reviveWorkspace(action.payload);
  }

  if (action.type === "SET_WORKSPACE_NAME") {
    return addActivityAndNotification(
      { ...state, workspaceName: action.payload.name },
      createActivity("Workspace renamed", "user", `Workspace renamed to ${action.payload.name}.`),
    );
  }

  if (action.type === "ADD_LEAD") {
    const leadActivity = createActivity("Lead created", "user", "Lead created by user.");
    const lead: WorkspaceLead = {
      ...action.payload,
      id: createWorkspaceId("lead"),
      createdAt: new Date(),
      aiScore: null,
      activities: [leadActivity],
    };
    const nextState = addActivityAndNotification(
      {
        ...state,
        leads: [lead, ...state.leads],
        stats: {
          ...state.stats,
          totalLeadsCreated: state.stats.totalLeadsCreated + 1,
        },
      },
      createActivity("Lead created", "user", `${lead.name} from ${lead.organization || "Unknown organization"} was added.`),
      createNotification(`New lead added: ${lead.name}`, "user"),
    );
    return runWorkflowsForEvent(nextState, "lead_created", { leadId: lead.id, eventLabel: "Lead created event" });
  }

  if (action.type === "IMPORT_DEMO_LEADS") {
    const imported = action.payload.industry.leads.slice(0, 3).map(createLeadFromDemo);
    return addActivityAndNotification(
      {
        ...state,
        leads: [...imported, ...state.leads],
        stats: {
          ...state.stats,
          totalLeadsCreated: state.stats.totalLeadsCreated + imported.length,
        },
      },
      createActivity("Demo leads imported", "user", `${imported.length} example leads were added to the workspace.`),
      createNotification(`${imported.length} demo leads imported into your workspace.`, "system"),
    );
  }

  if (action.type === "UPDATE_LEAD") {
    const lead = state.leads.find((item) => item.id === action.payload.id);
    return addActivityAndNotification(
      {
        ...state,
        leads: state.leads.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                ...action.payload.updates,
                activities: [
                  createActivity("Lead updated", "user", `${item.name} was updated.`),
                  ...item.activities,
                ],
              }
            : item,
        ),
      },
      createActivity("Lead updated", "user", `${lead?.name ?? "Lead"} was updated.`),
    );
  }

  if (action.type === "DELETE_LEAD") {
    const lead = state.leads.find((item) => item.id === action.payload.id);
    return addActivityAndNotification(
      {
        ...state,
        leads: state.leads.filter((item) => item.id !== action.payload.id),
        tasks: state.tasks.map((task) => (task.linkedLeadId === action.payload.id ? { ...task, linkedLeadId: null } : task)),
      },
      createActivity("Lead deleted", "user", `${lead?.name ?? "A lead"} was deleted.`),
      createNotification(`${lead?.name ?? "Lead"} deleted. Undo is available briefly.`, "user"),
    );
  }

  if (action.type === "MOVE_LEAD_STAGE") {
    const lead = state.leads.find((item) => item.id === action.payload.leadId);
    const nextState = addActivityAndNotification(
      {
        ...state,
        leads: state.leads.map((item) =>
          item.id === action.payload.leadId
            ? {
                ...item,
                stage: action.payload.newStage,
                activities: [
                  createActivity("Stage changed", "user", `${item.name} moved to ${action.payload.newStage}.`),
                  ...item.activities,
                ],
              }
            : item,
        ),
      },
      createActivity("Stage changed", "user", `${lead?.name ?? "Lead"} moved to ${action.payload.newStage}.`),
      createNotification(`Moved to ${action.payload.newStage} stage.`, "user"),
    );
    return runWorkflowsForEvent(nextState, "stage_changed", { leadId: action.payload.leadId, eventLabel: "Stage changed event" });
  }

  if (action.type === "AI_SCORE_LEAD") {
    const lead = state.leads.find((item) => item.id === action.payload.leadId);
    const nextState = addActivityAndNotification(
      {
        ...state,
        leads: state.leads.map((item) =>
          item.id === action.payload.leadId
            ? {
                ...item,
                aiScore: action.payload.score,
                activities: [
                  createActivity("AI scored lead", "ai", `AI scored ${item.name} - ${action.payload.score}/100. ${action.payload.reasons.join(" ")}`),
                  ...item.activities,
                ],
              }
            : item,
        ),
      },
      createActivity("AI scored lead", "ai", `AI scored ${lead?.name ?? "lead"} - ${action.payload.score}/100.`),
      createNotification(`AI scored ${lead?.name ?? "lead"} - ${action.payload.score}/100.`, "ai"),
    );
    return runWorkflowsForEvent(nextState, "ai_score_updated", { leadId: action.payload.leadId, eventLabel: "AI score updated event" });
  }

  if (action.type === "CREATE_ROLE") {
    const role: WorkspaceRole = {
      ...action.payload,
      id: createWorkspaceId("role"),
      createdAt: new Date(),
    };
    return addActivityAndNotification(
      {
        ...state,
        roles: [role, ...state.roles],
        stats: {
          ...state.stats,
          rolesCreated: state.stats.rolesCreated + 1,
        },
      },
      createActivity("Role created", "user", `${role.name} role was created.`),
      createNotification(`New role created: ${role.name}`, "user"),
    );
  }

  if (action.type === "DELETE_ROLE") {
    const role = state.roles.find((item) => item.id === action.payload.roleId);
    return addActivityAndNotification(
      {
        ...state,
        roles: state.roles.filter((item) => item.id !== action.payload.roleId),
      },
      createActivity("Role deleted", "user", `${role?.name ?? "Role"} was deleted.`),
      createNotification(`${role?.name ?? "Role"} deleted. Undo is available briefly.`, "user"),
    );
  }

  if (action.type === "UPDATE_ROLE_PERMISSION") {
    return {
      ...state,
      roles: state.roles.map((role) =>
        role.id === action.payload.roleId
          ? {
              ...role,
              permissions: {
                ...role.permissions,
                [action.payload.module]: {
                  ...role.permissions[action.payload.module],
                  [action.payload.action]: action.payload.value,
                },
              },
            }
          : role,
      ),
    };
  }

  if (action.type === "CREATE_WORKFLOW") {
    const workflow: WorkspaceWorkflow = {
      ...action.payload,
      id: createWorkspaceId("workflow"),
      runCount: 0,
      lastRunAt: null,
      createdAt: new Date(),
    };
    return addActivityAndNotification(
      {
        ...state,
        workflows: [workflow, ...state.workflows],
      },
      createActivity("Workflow created", "user", `${workflow.name} workflow was created.`),
      createNotification(`Workflow created: ${workflow.name}`, "workflow"),
    );
  }

  if (action.type === "UPDATE_WORKFLOW") {
    const workflow = state.workflows.find((item) => item.id === action.payload.workflowId);
    return addActivityAndNotification(
      {
        ...state,
        workflows: state.workflows.map((item) =>
          item.id === action.payload.workflowId ? { ...item, ...action.payload.updates } : item,
        ),
      },
      createActivity("Workflow updated", "user", `${workflow?.name ?? "Workflow"} was updated.`),
    );
  }

  if (action.type === "DELETE_WORKFLOW") {
    const workflow = state.workflows.find((item) => item.id === action.payload.workflowId);
    return addActivityAndNotification(
      {
        ...state,
        workflows: state.workflows.filter((item) => item.id !== action.payload.workflowId),
        pipelines: state.pipelines.map((pipeline) => ({
          ...pipeline,
          stages: pipeline.stages.map((stage) => ({
            ...stage,
            automations: stage.automations.filter((id) => id !== action.payload.workflowId),
          })),
        })),
      },
      createActivity("Workflow deleted", "user", `${workflow?.name ?? "Workflow"} was deleted.`),
      createNotification(`${workflow?.name ?? "Workflow"} deleted. Undo is available briefly.`, "workflow"),
    );
  }

  if (action.type === "RUN_WORKFLOW") {
    return runSingleWorkflow(state, action.payload.workflowId);
  }

  if (action.type === "TOGGLE_WORKFLOW") {
    const workflow = state.workflows.find((item) => item.id === action.payload.workflowId);
    return addActivityAndNotification(
      {
        ...state,
        workflows: state.workflows.map((item) =>
          item.id === action.payload.workflowId ? { ...item, isActive: !item.isActive } : item,
        ),
      },
      createActivity("Workflow toggled", "user", `${workflow?.name ?? "Workflow"} was ${workflow?.isActive ? "paused" : "activated"}.`),
    );
  }

  if (action.type === "CREATE_TASK") {
    const task: WorkspaceTask = {
      ...action.payload,
      id: createWorkspaceId("task"),
      createdAt: new Date(),
    };
    return addActivityAndNotification(
      {
        ...state,
        tasks: [task, ...state.tasks],
      },
      createActivity("Task created", task.createdBy, `${task.title} was created.`),
      createNotification(`Task created: ${task.title}`, task.createdBy === "workflow" ? "workflow" : task.createdBy),
    );
  }

  if (action.type === "COMPLETE_TASK") {
    const task = state.tasks.find((item) => item.id === action.payload.taskId);
    return addActivityAndNotification(
      {
        ...state,
        tasks: state.tasks.map((item) => (item.id === action.payload.taskId ? { ...item, status: "Done" } : item)),
        stats: {
          ...state.stats,
          tasksCompleted: state.stats.tasksCompleted + 1,
        },
      },
      createActivity("Task completed", "user", `${task?.title ?? "Task"} was completed.`),
      createNotification(`Task completed: ${task?.title ?? "Task"}`, "user"),
    );
  }

  if (action.type === "ADD_PIPELINE_STAGE") {
    return addActivityAndNotification(
      {
        ...state,
        pipelines: state.pipelines.map((pipeline) =>
          pipeline.id === action.payload.pipelineId
            ? {
                ...pipeline,
                stages: [
                  ...pipeline.stages,
                  {
                    ...action.payload.stage,
                    id: createWorkspaceId("stage"),
                  },
                ],
              }
            : pipeline,
        ),
      },
      createActivity("Pipeline stage added", "user", `${action.payload.stage.name} stage was added.`),
      createNotification(`Pipeline stage added: ${action.payload.stage.name}`, "system"),
    );
  }

  if (action.type === "UPDATE_PIPELINE_STAGE") {
    return {
      ...state,
      pipelines: state.pipelines.map((pipeline) =>
        pipeline.id === action.payload.pipelineId
          ? {
              ...pipeline,
              stages: pipeline.stages.map((stage) =>
                stage.id === action.payload.stageId ? { ...stage, ...action.payload.updates } : stage,
              ),
            }
          : pipeline,
      ),
    };
  }

  if (action.type === "REMOVE_PIPELINE_STAGE") {
    const pipeline = state.pipelines.find((item) => item.id === action.payload.pipelineId);
    const stage = pipeline?.stages.find((item) => item.id === action.payload.stageId);
    const sortedStages = (pipeline?.stages ?? []).slice().sort((a, b) => a.order - b.order);
    const stageIndex = sortedStages.findIndex((item) => item.id === action.payload.stageId);
    const fallbackStage = sortedStages[Math.max(0, stageIndex - 1)] ?? sortedStages[0];

    return addActivityAndNotification(
      {
        ...state,
        leads: state.leads.map((lead) =>
          stage && lead.stage === stage.name && fallbackStage ? { ...lead, stage: fallbackStage.name } : lead,
        ),
        pipelines: state.pipelines.map((item) =>
          item.id === action.payload.pipelineId
            ? { ...item, stages: item.stages.filter((current) => current.id !== action.payload.stageId) }
            : item,
        ),
      },
      createActivity("Pipeline stage removed", "user", `${stage?.name ?? "Stage"} was removed.`),
      createNotification(`${stage?.name ?? "Stage"} removed. Leads moved to the previous stage.`, "system"),
    );
  }

  if (action.type === "REORDER_PIPELINE_STAGE") {
    return {
      ...state,
      pipelines: state.pipelines.map((pipeline) => {
        if (pipeline.id !== action.payload.pipelineId) return pipeline;
        const sorted = pipeline.stages.slice().sort((a, b) => a.order - b.order);
        const currentIndex = sorted.findIndex((stage) => stage.id === action.payload.stageId);
        const swapIndex = action.payload.direction === "up" ? currentIndex - 1 : currentIndex + 1;
        if (currentIndex < 0 || swapIndex < 0 || swapIndex >= sorted.length) return pipeline;
        const current = sorted[currentIndex];
        const swap = sorted[swapIndex];
        return {
          ...pipeline,
          stages: pipeline.stages.map((stage) => {
            if (stage.id === current.id) return { ...stage, order: swap.order };
            if (stage.id === swap.id) return { ...stage, order: current.order };
            return stage;
          }),
        };
      }),
    };
  }

  if (action.type === "ADD_CUSTOM_FIELD") {
    const field: WorkspaceCustomField = {
      ...action.payload,
      id: createWorkspaceId("field"),
      createdAt: new Date(),
    };
    return addActivityAndNotification(
      {
        ...state,
        customFields: [field, ...state.customFields],
      },
      createActivity("Custom field added", "user", `${field.name} was added to ${field.module}.`),
      createNotification(`Custom field added: ${field.name}`, "system"),
    );
  }

  if (action.type === "ADD_DASHBOARD_WIDGET") {
    const widget: WorkspaceDashboardWidget = {
      ...action.payload.widget,
      id: action.payload.widget.id || createWorkspaceId("widget"),
    };
    return addActivityAndNotification(
      {
        ...state,
        dashboardWidgets: [...state.dashboardWidgets, widget],
        meta: {
          ...state.meta,
          dashboardConfigured: true,
        },
      },
      createActivity("Dashboard configured", "user", `${widget.title} widget was added.`),
    );
  }

  if (action.type === "REMOVE_DASHBOARD_WIDGET") {
    return {
      ...state,
      dashboardWidgets: state.dashboardWidgets.filter((widget) => widget.id !== action.payload.widgetId),
      meta: {
        ...state.meta,
        dashboardConfigured: true,
      },
    };
  }

  if (action.type === "TOGGLE_DASHBOARD_WIDGET") {
    return {
      ...state,
      dashboardWidgets: state.dashboardWidgets.map((widget) =>
        widget.id === action.payload.widgetId ? { ...widget, visible: !widget.visible } : widget,
      ),
      meta: {
        ...state.meta,
        dashboardConfigured: true,
      },
    };
  }

  if (action.type === "LOG_AI_QUERY") {
    return addActivityAndNotification(
      {
        ...state,
        stats: {
          ...state.stats,
          aiQueriesAsked: state.stats.aiQueriesAsked + 1,
        },
        meta: {
          ...state.meta,
          latestAiResponse: action.payload.response,
        },
      },
      createActivity("AI query asked", "ai", `${action.payload.query} -> ${action.payload.response}`),
    );
  }

  if (action.type === "ADD_NOTIFICATION") {
    return {
      ...state,
      notifications: [createNotification(action.payload.message, action.payload.type), ...state.notifications].slice(0, 40),
    };
  }

  if (action.type === "MARK_NOTIFICATION_READ") {
    return {
      ...state,
      notifications: state.notifications.map((item) =>
        item.id === action.payload.id ? { ...item, read: true } : item,
      ),
    };
  }

  if (action.type === "MARK_ALL_NOTIFICATIONS_READ") {
    return {
      ...state,
      notifications: state.notifications.map((item) => ({ ...item, read: true })),
    };
  }

  if (action.type === "MARK_BLUEPRINT_CELEBRATED") {
    return {
      ...state,
      meta: {
        ...state.meta,
        blueprintCelebrated: true,
      },
    };
  }

  if (action.type === "RESET_WORKSPACE") {
    return {
      ...state,
      leads: [],
      roles: [],
      workflows: [],
      tasks: [],
      customFields: [],
      notifications: [createNotification("Workspace reset for this session.", "system")],
      activityLog: [createActivity("Workspace reset", "user", "Workspace data was cleared.")],
      dashboardWidgets: createDashboardWidgets(),
      stats: {
        totalLeadsCreated: 0,
        workflowsRun: 0,
        tasksCompleted: 0,
        aiQueriesAsked: 0,
        rolesCreated: 0,
      },
      meta: {
        ...state.meta,
        dashboardConfigured: false,
        latestAiResponse: "",
        blueprintCelebrated: false,
        lastWorkflowRun: null,
      },
    };
  }

  return state;
}

function readStoredSession() {
  try {
    const raw = window.sessionStorage.getItem(workspaceStorageKey);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredWorkspaceSession;
    if (!parsed.workspace || typeof parsed.isWorkspaceMode !== "boolean") return null;
    return {
      workspace: reviveWorkspace(parsed.workspace),
      isWorkspaceMode: parsed.isWorkspaceMode,
      selectedRoleId: parsed.selectedRoleId ?? null,
    };
  } catch {
    return null;
  }
}

const initialIndustry = demoIndustries[0];
const initialWorkspace = {
  ...createWorkspaceFromIndustry(initialIndustry, "scratch"),
  meta: {
    ...createWorkspaceFromIndustry(initialIndustry, "scratch").meta,
    onboardingComplete: false,
    onboardingChoice: null,
  },
};

export function WorkspaceProvider({ children }: { children: ReactNode }) {
  const [workspace, baseDispatch] = useReducer(
    workspaceReducer,
    initialWorkspace,
  );
  const [isWorkspaceMode, setWorkspaceModeState] = useState(false);
  const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null);
  const [restoredFromSession, setRestoredFromSession] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [undoSnapshot, setUndoSnapshot] = useState<WorkspaceState | null>(null);

  useEffect(() => {
    const stored = readStoredSession();
    if (stored) {
      baseDispatch({ type: "RESTORE_WORKSPACE", payload: stored.workspace });
      setWorkspaceModeState(stored.isWorkspaceMode);
      setSelectedRoleId(stored.selectedRoleId);
      setRestoredFromSession(true);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      const stored: StoredWorkspaceSession = {
        workspace,
        isWorkspaceMode,
        selectedRoleId,
      };
      window.sessionStorage.setItem(workspaceStorageKey, JSON.stringify(stored));
    } catch {
      // Session storage is a convenience layer, not required for the workspace.
    }
  }, [hydrated, isWorkspaceMode, selectedRoleId, workspace]);

  const dispatch = useCallback(
    (action: WorkspaceAction) => {
      const undoable = new Set<WorkspaceAction["type"]>([
        "DELETE_LEAD",
        "DELETE_ROLE",
        "DELETE_WORKFLOW",
        "REMOVE_PIPELINE_STAGE",
        "RESET_WORKSPACE",
      ]);

      if (undoable.has(action.type)) {
        setUndoSnapshot(workspace);
        window.setTimeout(() => setUndoSnapshot(null), 5000);
      }
      baseDispatch(action);
    },
    [workspace],
  );

  const selectedRole = useMemo(
    () => workspace.roles.find((role) => role.id === selectedRoleId) ?? null,
    [selectedRoleId, workspace.roles],
  );

  const progress = useMemo(() => getWorkspaceProgress(workspace), [workspace]);

  const setWorkspaceMode = useCallback((value: boolean) => {
    setWorkspaceModeState(value);
  }, []);

  const acknowledgeSessionRestore = useCallback(() => {
    setRestoredFromSession(false);
  }, []);

  const undoLastAction = useCallback(() => {
    if (!undoSnapshot) return;
    baseDispatch({ type: "RESTORE_WORKSPACE", payload: undoSnapshot });
    setUndoSnapshot(null);
  }, [undoSnapshot]);

  const value = useMemo<WorkspaceContextValue>(
    () => ({
      workspace,
      dispatch,
      isWorkspaceMode,
      setWorkspaceMode,
      selectedRoleId,
      setSelectedRoleId,
      selectedRole,
      progress,
      restoredFromSession,
      acknowledgeSessionRestore,
      canUndo: Boolean(undoSnapshot),
      undoLastAction,
    }),
    [
      acknowledgeSessionRestore,
      dispatch,
      isWorkspaceMode,
      progress,
      restoredFromSession,
      selectedRole,
      selectedRoleId,
      setWorkspaceMode,
      undoLastAction,
      undoSnapshot,
      workspace,
    ],
  );

  return <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>;
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);
  if (!context) {
    throw new Error("useWorkspace must be used inside WorkspaceProvider");
  }
  return context;
}
