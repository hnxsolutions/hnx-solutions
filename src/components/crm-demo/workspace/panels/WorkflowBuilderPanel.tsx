"use client";

import { AlertTriangle, ArrowRight, Loader2, Save } from "lucide-react";
import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import {
  getSortedStages,
  workspaceActionTypes,
  workspaceConditionFields,
  workspaceConditionOperators,
  workspaceTaskPriorities,
  workspaceTriggerEvents,
  type WorkspaceWorkflow,
  type WorkspaceWorkflowAction,
  type WorkspaceWorkflowCondition,
  type WorkspaceWorkflowTrigger,
} from "@/lib/workspaceState";
import { useWorkspace } from "@/lib/workspaceContext";
import { WorkspaceButton, WorkspaceInlineHint, WorkspacePanel } from "@/components/crm-demo/workspace/WorkspacePrimitives";

type WorkflowForm = {
  name: string;
  description: string;
  trigger: WorkspaceWorkflowTrigger;
  condition: WorkspaceWorkflowCondition;
  action: WorkspaceWorkflowAction;
  skipCondition: boolean;
};

const defaultForm: WorkflowForm = {
  name: "",
  description: "",
  trigger: { event: "lead_created", module: "Leads", condition: "Always" },
  condition: { field: "Always", operator: "equals", value: "Always" },
  action: { type: "send_notification", config: { message: "New workflow matched a lead." } },
  skipCondition: true,
};

function formFromWorkflow(workflow: WorkspaceWorkflow | null): WorkflowForm {
  if (!workflow) return defaultForm;
  return {
    name: workflow.name,
    description: workflow.description,
    trigger: workflow.trigger,
    condition: workflow.condition,
    action: workflow.action,
    skipCondition: workflow.condition.field === "Always",
  };
}

export function WorkflowBuilderPanel({
  open,
  workflow,
  template,
  onClose,
  showToast,
}: {
  open: boolean;
  workflow: WorkspaceWorkflow | null;
  template: Partial<WorkflowForm> | null;
  onClose: () => void;
  showToast: (message: string) => void;
}) {
  const { workspace, dispatch } = useWorkspace();
  const [form, setForm] = useState<WorkflowForm>(() => ({ ...formFromWorkflow(workflow), ...template }));
  const [submitting, setSubmitting] = useState(false);
  const stages = getSortedStages(workspace);
  const conflict = useMemo(
    () =>
      workspace.workflows.find(
        (item) =>
          item.id !== workflow?.id &&
          item.trigger.event === form.trigger.event &&
          item.condition.field === form.condition.field &&
          item.condition.operator === form.condition.operator &&
          item.condition.value === form.condition.value,
      ),
    [form.condition.field, form.condition.operator, form.condition.value, form.trigger.event, workflow?.id, workspace.workflows],
  );

  useEffect(() => {
    if (open) {
      setForm({ ...formFromWorkflow(workflow), ...template });
      setSubmitting(false);
    }
  }, [open, template, workflow]);

  function setActionType(type: string) {
    const defaults: Record<string, Record<string, string>> = {
      send_notification: { message: "Workflow matched a lead." },
      create_task: { title: "Follow up with {lead}", owner: "Lead owner", priority: "High", due: "Tomorrow" },
      assign_to: { owner: workspace.roles[0]?.name ?? "Sales Team" },
      change_stage: { stage: stages[1]?.name ?? stages[0]?.name ?? "Contacted" },
      send_whatsapp: { phoneField: "phone", message: "Hi {lead}, following up on your enquiry." },
      send_email: { emailField: "email", subject: "Following up", body: "Hi {lead}, checking in on your request." },
      ai_score: {},
      change_temperature: { temperature: "Hot" },
      add_activity: { message: "Workflow added an activity." },
      trigger_workflow: { workflowId: workspace.workflows[0]?.id ?? "" },
    };
    setForm((current) => ({ ...current, action: { type, config: defaults[type] ?? {} } }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim()) return;
    setSubmitting(true);
    window.setTimeout(() => {
      const payload = {
        name: form.name.trim(),
        description: form.description.trim(),
        trigger: form.trigger,
        condition: form.skipCondition ? { field: "Always", operator: "equals", value: "Always" } : form.condition,
        action: form.action,
        isActive: true,
      };
      if (workflow) {
        dispatch({ type: "UPDATE_WORKFLOW", payload: { workflowId: workflow.id, updates: payload } });
        showToast(`Workflow updated - ${payload.name}`);
      } else {
        dispatch({ type: "CREATE_WORKFLOW", payload });
        showToast(`Workflow created - ${payload.name}`);
      }
      setSubmitting(false);
      onClose();
    }, 420);
  }

  return (
    <WorkspacePanel
      open={open}
      onClose={onClose}
      title={workflow ? "Edit workflow" : "Create workflow"}
      description="Build a real trigger, condition, and action that can run against workspace leads."
    >
      <form onSubmit={submit} className="space-y-5">
        <div className="grid gap-4">
          <TextField label="Workflow name" value={form.name} onChange={(value) => setForm((current) => ({ ...current, name: value }))} />
          <label>
            <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Description</span>
            <textarea
              value={form.description}
              onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))}
              rows={3}
              className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </label>
        </div>

        {conflict ? (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-bold leading-6 text-amber-800">
            <span className="inline-flex gap-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              This workflow may conflict with &quot;{conflict.name}&quot;. Both will run.
            </span>
          </div>
        ) : null}

        <div className="grid gap-4 xl:grid-cols-3">
          <StepCard step="Step 1" title="Trigger">
            <SelectField
              label="Event"
              value={form.trigger.event}
              options={workspaceTriggerEvents.map((event) => event.value)}
              labels={Object.fromEntries(workspaceTriggerEvents.map((event) => [event.value, event.label]))}
              onChange={(value) => {
                const trigger = workspaceTriggerEvents.find((event) => event.value === value);
                setForm((current) => ({
                  ...current,
                  trigger: { event: value, module: trigger?.module ?? "Leads", condition: trigger?.label ?? "" },
                }));
              }}
            />
            <TextField label="Module" value={form.trigger.module} onChange={(value) => setForm((current) => ({ ...current, trigger: { ...current.trigger, module: value } }))} />
          </StepCard>

          <StepCard step="Step 2" title="Condition">
            <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
              <input
                type="checkbox"
                checked={form.skipCondition}
                onChange={(event) => setForm((current) => ({ ...current, skipCondition: event.target.checked }))}
                className="h-4 w-4 accent-blue-600"
              />
              Skip condition
            </label>
            {!form.skipCondition ? (
              <>
                <SelectField label="Field" value={form.condition.field} options={workspaceConditionFields} onChange={(value) => setForm((current) => ({ ...current, condition: { ...current.condition, field: value } }))} />
                <SelectField label="Operator" value={form.condition.operator} options={workspaceConditionOperators} onChange={(value) => setForm((current) => ({ ...current, condition: { ...current.condition, operator: value } }))} />
                <TextField label="Value" value={form.condition.value} onChange={(value) => setForm((current) => ({ ...current, condition: { ...current.condition, value } }))} />
              </>
            ) : (
              <WorkspaceInlineHint>Always run this action when the trigger fires.</WorkspaceInlineHint>
            )}
          </StepCard>

          <StepCard step="Step 3" title="Action">
            <SelectField
              label="Action type"
              value={form.action.type}
              options={workspaceActionTypes.map((action) => action.value)}
              labels={Object.fromEntries(workspaceActionTypes.map((action) => [action.value, action.label]))}
              onChange={setActionType}
            />
            <ActionConfigFields
              action={form.action}
              stages={stages.map((stage) => stage.name)}
              owners={workspace.roles.map((role) => role.name)}
              workflows={workspace.workflows}
              onChange={(config) => setForm((current) => ({ ...current, action: { ...current.action, config } }))}
            />
          </StepCard>
        </div>

        <div className="sticky bottom-0 -mx-5 border-t border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-950">
          <WorkspaceButton type="submit" disabled={submitting || !form.name.trim()} className="w-full">
            {submitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Save className="h-4 w-4" aria-hidden="true" />}
            Save Workflow
          </WorkspaceButton>
        </div>
      </form>
    </WorkspacePanel>
  );
}

function StepCard({ step, title, children }: { step: string; title: string; children: ReactNode }) {
  return (
    <div className="relative rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">{step}</p>
          <h3 className="mt-1 font-bold text-slate-950 dark:text-white">{title}</h3>
        </div>
        <ArrowRight className="hidden h-4 w-4 text-blue-300 xl:block" aria-hidden="true" />
      </div>
      <div className="grid gap-3">{children}</div>
    </div>
  );
}

function TextField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label>
      <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  options,
  labels,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  labels?: Record<string, string>;
  onChange: (value: string) => void;
}) {
  return (
    <label>
      <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-bold text-slate-700 outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {labels?.[option] ?? option}
          </option>
        ))}
      </select>
    </label>
  );
}

function ActionConfigFields({
  action,
  stages,
  owners,
  workflows,
  onChange,
}: {
  action: WorkspaceWorkflowAction;
  stages: string[];
  owners: string[];
  workflows: WorkspaceWorkflow[];
  onChange: (config: Record<string, string>) => void;
}) {
  function setConfig(key: string, value: string) {
    onChange({ ...action.config, [key]: value });
  }

  if (action.type === "create_task") {
    return (
      <>
        <TextField label="Title" value={action.config.title ?? ""} onChange={(value) => setConfig("title", value)} />
        <SelectField label="Owner" value={action.config.owner ?? "Lead owner"} options={["Lead owner", ...owners, "Sales Team"]} onChange={(value) => setConfig("owner", value)} />
        <SelectField label="Priority" value={action.config.priority ?? "Medium"} options={workspaceTaskPriorities} onChange={(value) => setConfig("priority", value)} />
        <TextField label="Due" value={action.config.due ?? "Tomorrow"} onChange={(value) => setConfig("due", value)} />
      </>
    );
  }

  if (action.type === "send_notification") {
    return <TextField label="Message text" value={action.config.message ?? ""} onChange={(value) => setConfig("message", value)} />;
  }

  if (action.type === "assign_to") {
    return <SelectField label="User/role" value={action.config.owner ?? "Sales Team"} options={[...owners, "Sales Team"]} onChange={(value) => setConfig("owner", value)} />;
  }

  if (action.type === "change_stage") {
    return <SelectField label="New stage" value={action.config.stage ?? stages[0] ?? ""} options={stages} onChange={(value) => setConfig("stage", value)} />;
  }

  if (action.type === "change_temperature") {
    return <SelectField label="New temperature" value={action.config.temperature ?? "Hot"} options={["Hot", "Warm", "Cold", "New"]} onChange={(value) => setConfig("temperature", value)} />;
  }

  if (action.type === "send_whatsapp") {
    return (
      <>
        <TextField label="Phone field" value={action.config.phoneField ?? "phone"} onChange={(value) => setConfig("phoneField", value)} />
        <TextField label="Message template" value={action.config.message ?? ""} onChange={(value) => setConfig("message", value)} />
      </>
    );
  }

  if (action.type === "send_email") {
    return (
      <>
        <TextField label="Email field" value={action.config.emailField ?? "email"} onChange={(value) => setConfig("emailField", value)} />
        <TextField label="Subject" value={action.config.subject ?? ""} onChange={(value) => setConfig("subject", value)} />
        <TextField label="Body" value={action.config.body ?? ""} onChange={(value) => setConfig("body", value)} />
      </>
    );
  }

  if (action.type === "trigger_workflow") {
    return <SelectField label="Workflow" value={action.config.workflowId ?? ""} options={workflows.map((workflow) => workflow.id)} labels={Object.fromEntries(workflows.map((workflow) => [workflow.id, workflow.name]))} onChange={(value) => setConfig("workflowId", value)} />;
  }

  if (action.type === "add_activity") {
    return <TextField label="Log message" value={action.config.message ?? ""} onChange={(value) => setConfig("message", value)} />;
  }

  return <WorkspaceInlineHint>No extra configuration is needed for this action.</WorkspaceInlineHint>;
}
