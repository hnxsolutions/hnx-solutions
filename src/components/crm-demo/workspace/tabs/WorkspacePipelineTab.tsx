"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUp, Kanban, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useWorkspace } from "@/lib/workspaceContext";
import {
  formatWorkspaceCurrency,
  getPrimaryPipeline,
  getSortedStages,
  parseWorkspaceValue,
  workspaceStageColors,
} from "@/lib/workspaceState";
import {
  WorkspaceBadge,
  WorkspaceButton,
  WorkspaceEmptyState,
  WorkspaceSectionHeader,
} from "@/components/crm-demo/workspace/WorkspacePrimitives";

export function WorkspacePipelineTab({ showToast }: { showToast: (message: string) => void }) {
  const { workspace, dispatch } = useWorkspace();
  const pipeline = getPrimaryPipeline(workspace);
  const stages = getSortedStages(workspace);
  const [stageName, setStageName] = useState("Proposal Review");
  const [stageColor, setStageColor] = useState(workspaceStageColors[0]);

  if (!pipeline) {
    return (
      <WorkspaceEmptyState
        icon={<Kanban className="h-6 w-6" aria-hidden="true" />}
        title="No pipeline configured."
        description="Start a workspace from an industry to get editable pipeline stages."
        primaryLabel="Refresh workspace"
        onPrimary={() => window.location.reload()}
      />
    );
  }

  function addStage() {
    if (!stageName.trim() || !pipeline) return;
    dispatch({
      type: "ADD_PIPELINE_STAGE",
      payload: {
        pipelineId: pipeline.id,
        stage: {
          name: stageName.trim(),
          color: stageColor,
          automations: [],
          order: stages.length + 1,
        },
      },
    });
    showToast(`Pipeline stage added - ${stageName.trim()}`);
    setStageName("");
  }

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <WorkspaceSectionHeader
        eyebrow="Live pipeline"
        title={pipeline.name}
        description="Pipeline columns reflect workspace leads. Move actions update state and trigger stage workflows."
      />

      <div className="mb-5 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr_auto] lg:items-end">
          <label>
            <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Stage name</span>
            <input
              value={stageName}
              onChange={(event) => setStageName(event.target.value)}
              className="h-11 w-full rounded-full border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </label>
          <div>
            <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Stage color</span>
            <div className="flex flex-wrap gap-2">
              {workspaceStageColors.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setStageColor(color)}
                  className={`h-9 w-9 rounded-full border-4 ${stageColor === color ? "border-slate-950" : "border-white"}`}
                  style={{ backgroundColor: color }}
                  aria-label={`Use stage color ${color}`}
                />
              ))}
            </div>
          </div>
          <WorkspaceButton onClick={addStage} disabled={!stageName.trim()}>
            <Plus className="h-4 w-4" aria-hidden="true" />
            Add stage
          </WorkspaceButton>
        </div>
      </div>

      <div className="no-scrollbar flex gap-4 overflow-x-auto pb-4">
        {stages.map((stage, index) => {
          const stageLeads = workspace.leads.filter((lead) => lead.stage === stage.name);
          const value = stageLeads.reduce((total, lead) => total + parseWorkspaceValue(lead.value), 0);
          const nextStage = stages[index + 1];
          return (
            <div key={stage.id} className="w-80 shrink-0 rounded-[26px] border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold text-slate-950 dark:text-white">{stage.name}</h3>
                  <p className="mt-1 text-xs font-bold text-slate-500">
                    {stageLeads.length} leads · {formatWorkspaceCurrency(value)}
                  </p>
                </div>
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: stage.color }} />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => dispatch({ type: "REORDER_PIPELINE_STAGE", payload: { pipelineId: pipeline.id, stageId: stage.id, direction: "up" } })}
                  className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 bg-white text-slate-600"
                  aria-label={`Move ${stage.name} left`}
                >
                  <ArrowUp className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => dispatch({ type: "REORDER_PIPELINE_STAGE", payload: { pipelineId: pipeline.id, stageId: stage.id, direction: "down" } })}
                  className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 bg-white text-slate-600"
                  aria-label={`Move ${stage.name} right`}
                >
                  <ArrowDown className="h-3.5 w-3.5" />
                </button>
                {stages.length > 1 ? (
                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm(`Remove ${stage.name}? Leads in this stage move to the previous stage.`)) {
                        dispatch({ type: "REMOVE_PIPELINE_STAGE", payload: { pipelineId: pipeline.id, stageId: stage.id } });
                        showToast(`${stage.name} removed. Undo is available.`);
                      }
                    }}
                    className="grid h-8 w-8 place-items-center rounded-full border border-rose-200 bg-rose-50 text-rose-600"
                    aria-label={`Remove ${stage.name}`}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                ) : null}
              </div>
              <div className="mt-4 space-y-3">
                {stageLeads.length ? (
                  stageLeads.map((lead) => (
                    <div key={lead.id} className="rounded-2xl border border-l-4 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950" style={{ borderLeftColor: stage.color }}>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-bold text-slate-950 dark:text-white">{lead.name}</p>
                          <p className="mt-1 text-sm text-slate-500">{lead.need}</p>
                        </div>
                        <WorkspaceBadge tone={lead.temperature === "Hot" ? "rose" : "blue"}>{lead.temperature}</WorkspaceBadge>
                      </div>
                      <p className="mt-3 text-sm font-bold text-blue-700">{lead.value || "No value set"}</p>
                      {nextStage ? (
                        <button
                          type="button"
                          onClick={() => {
                            dispatch({ type: "MOVE_LEAD_STAGE", payload: { leadId: lead.id, newStage: nextStage.name } });
                            showToast(`Moved to ${nextStage.name} stage.`);
                          }}
                          className="mt-4 rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700"
                        >
                          Move to {nextStage.name}
                        </button>
                      ) : null}
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-5 text-center text-sm font-semibold text-slate-500 dark:border-slate-700 dark:bg-slate-950">
                    No leads in this stage.
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

