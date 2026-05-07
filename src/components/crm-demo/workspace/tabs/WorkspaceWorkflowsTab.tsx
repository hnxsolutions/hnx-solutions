"use client";

import { motion } from "framer-motion";
import { Play, Plus, Power, Trash2, Workflow } from "lucide-react";
import { useState } from "react";
import { useWorkspace } from "@/lib/workspaceContext";
import {
  workspaceWorkflowTemplates,
  type WorkspaceWorkflow,
  type WorkspaceWorkflowAction,
  type WorkspaceWorkflowCondition,
  type WorkspaceWorkflowTrigger,
} from "@/lib/workspaceState";
import { WorkflowBuilderPanel } from "@/components/crm-demo/workspace/panels/WorkflowBuilderPanel";
import {
  timeAgo,
  WorkspaceBadge,
  WorkspaceButton,
  WorkspaceEmptyState,
  WorkspaceSectionHeader,
} from "@/components/crm-demo/workspace/WorkspacePrimitives";

type WorkflowTemplateForm = {
  name: string;
  description: string;
  trigger: WorkspaceWorkflowTrigger;
  condition: WorkspaceWorkflowCondition;
  action: WorkspaceWorkflowAction;
  skipCondition: boolean;
};

export function WorkspaceWorkflowsTab({ showToast }: { showToast: (message: string) => void }) {
  const { workspace, dispatch } = useWorkspace();
  const [builderOpen, setBuilderOpen] = useState(false);
  const [editingWorkflow, setEditingWorkflow] = useState<WorkspaceWorkflow | null>(null);
  const [template, setTemplate] = useState<Partial<WorkflowTemplateForm> | null>(null);

  function openBuilder(workflow: WorkspaceWorkflow | null = null, nextTemplate: Partial<WorkflowTemplateForm> | null = null) {
    setEditingWorkflow(workflow);
    setTemplate(nextTemplate);
    setBuilderOpen(true);
  }

  if (!workspace.workflows.length) {
    return (
      <>
        <WorkspaceSectionHeader
          eyebrow="Live workflow builder"
          title="My Workflows"
          description="Create a workflow to see automation run against your workspace data."
        />
        <WorkspaceEmptyState
          icon={<Workflow className="h-6 w-6" aria-hidden="true" />}
          title="No workflows built yet."
          description="Create a workflow to see tasks, notifications, stage changes, and AI scoring happen in real time."
          primaryLabel="Create First Workflow"
          secondaryLabel="Use a Template"
          onPrimary={() => openBuilder()}
          onSecondary={() => {
            const first = workspaceWorkflowTemplates[0];
            openBuilder(null, { ...first, skipCondition: first.condition.field === "Always" });
          }}
        />
        <TemplateGrid onLoad={(nextTemplate) => openBuilder(null, nextTemplate)} />
        <WorkflowBuilderPanel open={builderOpen} workflow={editingWorkflow} template={template} onClose={() => setBuilderOpen(false)} showToast={showToast} />
      </>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <WorkspaceSectionHeader
        eyebrow="Live workflow builder"
        title={`My Workflows (${workspace.workflows.filter((workflow) => workflow.isActive).length} active)`}
        description="Build trigger -> condition -> action automations and run them against real workspace leads."
        action={
          <WorkspaceButton onClick={() => openBuilder()}>
            <Plus className="h-4 w-4" aria-hidden="true" />
            Create Workflow
          </WorkspaceButton>
        }
      />

      <div className="grid gap-4 xl:grid-cols-2">
        {workspace.workflows.map((workflow) => (
          <article key={workflow.id} className="rounded-[28px] border border-l-4 border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950" style={{ borderLeftColor: workflow.isActive ? "#2563eb" : "#94a3b8" }}>
            <div className="flex items-start justify-between gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-50 text-blue-700">
                <Workflow className="h-6 w-6" aria-hidden="true" />
              </div>
              <WorkspaceBadge tone={workflow.isActive ? "green" : "slate"}>{workflow.isActive ? "Active" : "Paused"}</WorkspaceBadge>
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{workflow.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{workflow.description}</p>
            <div className="mt-5 grid gap-3">
              <Line label="Trigger" text={`${workflow.trigger.module}: ${workflow.trigger.event.replaceAll("_", " ")}`} />
              <Line label="Condition" text={`${workflow.condition.field} ${workflow.condition.operator} ${workflow.condition.value}`} />
              <Line label="Action" text={workflow.action.type.replaceAll("_", " ")} />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <WorkspaceBadge tone="blue">Run {workflow.runCount} times</WorkspaceBadge>
              <WorkspaceBadge tone="slate">Last run: {workflow.lastRunAt ? timeAgo(workflow.lastRunAt) : "Never"}</WorkspaceBadge>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <WorkspaceButton variant="secondary" onClick={() => dispatch({ type: "RUN_WORKFLOW", payload: { workflowId: workflow.id } })}>
                <Play className="h-4 w-4" aria-hidden="true" />
                Run now
              </WorkspaceButton>
              <WorkspaceButton variant="ghost" onClick={() => openBuilder(workflow)}>Edit</WorkspaceButton>
              <WorkspaceButton
                variant="ghost"
                onClick={() => {
                  dispatch({ type: "TOGGLE_WORKFLOW", payload: { workflowId: workflow.id } });
                  showToast(`${workflow.name} ${workflow.isActive ? "paused" : "activated"}.`);
                }}
              >
                <Power className="h-4 w-4" />
                {workflow.isActive ? "Pause" : "Activate"}
              </WorkspaceButton>
              <WorkspaceButton
                variant="danger"
                onClick={() => {
                  if (window.confirm(`Delete ${workflow.name}?`)) {
                    dispatch({ type: "DELETE_WORKFLOW", payload: { workflowId: workflow.id } });
                    showToast(`${workflow.name} deleted. Undo is available.`);
                  }
                }}
              >
                <Trash2 className="h-4 w-4" />
                Delete
              </WorkspaceButton>
            </div>
          </article>
        ))}
      </div>

      {workspace.meta.lastWorkflowRun ? (
        <div className="mt-6 rounded-[28px] border border-blue-100 bg-blue-50 p-5">
          <p className="text-sm font-bold text-blue-900">Running workflow: &quot;{workspace.meta.lastWorkflowRun.workflowName}&quot;</p>
          <div className="mt-4 space-y-2">
            {workspace.meta.lastWorkflowRun.lines.map((line, index) => (
              <p key={`${line}-${index}`} className="text-sm font-semibold leading-6 text-blue-800">Done: {line}</p>
            ))}
          </div>
          <p className="mt-4 text-sm font-bold text-blue-900">Affected: {workspace.meta.lastWorkflowRun.affected} leads</p>
        </div>
      ) : null}

      <TemplateGrid onLoad={(nextTemplate) => openBuilder(null, nextTemplate)} />
      <WorkflowBuilderPanel open={builderOpen} workflow={editingWorkflow} template={template} onClose={() => setBuilderOpen(false)} showToast={showToast} />
    </motion.div>
  );
}

function Line({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">{text}</p>
    </div>
  );
}

function TemplateGrid({ onLoad }: { onLoad: (template: Partial<WorkflowTemplateForm>) => void }) {
  return (
    <div className="mt-6 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-950 dark:text-white">Workflow templates</h3>
          <p className="mt-1 text-sm text-slate-500">Load one, customize it, then save.</p>
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {workspaceWorkflowTemplates.map((template) => (
          <div key={template.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
            <p className="font-bold text-slate-950 dark:text-white">{template.name}</p>
            <p className="mt-2 text-xs font-semibold leading-5 text-slate-500">
              {template.trigger.event.replaceAll("_", " ")} {"->"} {template.action.type.replaceAll("_", " ")}
            </p>
            <button
              type="button"
              onClick={() => onLoad({ ...template, skipCondition: template.condition.field === "Always" })}
              className="mt-4 rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700"
            >
              Load Template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
