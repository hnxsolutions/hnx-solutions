"use client";

import { motion } from "framer-motion";
import { Bot, ClipboardList, Edit3, Loader2, Plus, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import type { DemoIndustry } from "@/components/crm-demo/demoData";
import { useWorkspace } from "@/lib/workspaceContext";
import { getLeadScoreResult, type WorkspaceLead } from "@/lib/workspaceState";
import { AddLeadPanel } from "@/components/crm-demo/workspace/panels/AddLeadPanel";
import { AIScorePanel } from "@/components/crm-demo/workspace/panels/AIScorePanel";
import {
  WorkspaceBadge,
  WorkspaceButton,
  WorkspaceEmptyState,
  WorkspaceSectionHeader,
} from "@/components/crm-demo/workspace/WorkspacePrimitives";

export function WorkspaceLeadsTab({
  industry,
  search,
  showToast,
}: {
  industry: DemoIndustry;
  search: string;
  showToast: (message: string) => void;
}) {
  const { workspace, dispatch } = useWorkspace();
  const [panelOpen, setPanelOpen] = useState(false);
  const [editingLead, setEditingLead] = useState<WorkspaceLead | null>(null);
  const [scoringLeadId, setScoringLeadId] = useState<string | null>(null);
  const [scorePanelLead, setScorePanelLead] = useState<WorkspaceLead | null>(null);
  const [scoreDetails, setScoreDetails] = useState<{ score: number; reasons: string[]; recommendedAction: string } | null>(null);

  const filteredLeads = useMemo(
    () =>
      workspace.leads.filter((lead) =>
        [lead.name, lead.organization, lead.source, lead.need, lead.stage, lead.owner]
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase()),
      ),
    [search, workspace.leads],
  );

  function openCreate() {
    setEditingLead(null);
    setPanelOpen(true);
  }

  function openEdit(lead: WorkspaceLead) {
    setEditingLead(lead);
    setPanelOpen(true);
  }

  function scoreLead(lead: WorkspaceLead) {
    setScoringLeadId(lead.id);
    window.setTimeout(() => {
      const result = getLeadScoreResult(lead);
      dispatch({ type: "AI_SCORE_LEAD", payload: { leadId: lead.id, score: result.score, reasons: result.reasons } });
      setScorePanelLead({ ...lead, aiScore: result.score });
      setScoreDetails(result);
      setScoringLeadId(null);
      showToast(`AI scored ${lead.name} - ${result.score}/100.`);
    }, 1500);
  }

  if (!workspace.leads.length) {
    return (
      <>
        <WorkspaceSectionHeader
          eyebrow="Live lead management"
          title={industry.labels.leads}
          description="Every lead you create appears across the live workspace immediately."
        />
        <WorkspaceEmptyState
          icon={<ClipboardList className="h-6 w-6" aria-hidden="true" />}
          title="No leads yet in your workspace."
          description="Start by adding your first lead to see how the CRM manages contacts, scoring, workflows, tasks, and notifications."
          primaryLabel="Add First Lead"
          secondaryLabel="Import from Demo Data"
          onPrimary={openCreate}
          onSecondary={() => {
            dispatch({ type: "IMPORT_DEMO_LEADS", payload: { industry } });
            showToast("Demo leads imported into your workspace.");
          }}
        />
        <AddLeadPanel open={panelOpen} lead={editingLead} onClose={() => setPanelOpen(false)} industry={industry} showToast={showToast} />
      </>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <WorkspaceSectionHeader
        eyebrow="Live lead management"
        title={industry.labels.leads}
        description="Add, edit, score, and delete real workspace leads. Workflow triggers fire from this table."
        action={
          <WorkspaceButton onClick={openCreate}>
            <Plus className="h-4 w-4" aria-hidden="true" />
            Add Lead
          </WorkspaceButton>
        }
      />

      <div className="hidden overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950 md:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:bg-slate-900">
            <tr>
              <th className="px-4 py-4">Name</th>
              <th className="px-4 py-4">Need</th>
              <th className="px-4 py-4">Source</th>
              <th className="px-4 py-4">Value</th>
              <th className="px-4 py-4">Stage</th>
              <th className="px-4 py-4">Owner</th>
              <th className="px-4 py-4">Score</th>
              <th className="px-4 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {filteredLeads.map((lead) => (
              <tr key={lead.id} onClick={() => openEdit(lead)} className="cursor-pointer border-l-4 border-blue-400 transition hover:bg-cyan-50/70 dark:hover:bg-slate-900">
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="font-bold text-slate-950 dark:text-white">{lead.name}</p>
                      <p className="mt-1 text-xs text-slate-500">{lead.organization}</p>
                    </div>
                    <WorkspaceBadge>Yours</WorkspaceBadge>
                  </div>
                </td>
                <td className="px-4 py-4 font-medium text-slate-700 dark:text-slate-200">{lead.need}</td>
                <td className="px-4 py-4 text-slate-600 dark:text-slate-300">{lead.source}</td>
                <td className="px-4 py-4 font-bold text-slate-950 dark:text-white">{lead.value}</td>
                <td className="px-4 py-4"><WorkspaceBadge>{lead.stage}</WorkspaceBadge></td>
                <td className="px-4 py-4 text-slate-600 dark:text-slate-300">{lead.owner}</td>
                <td className="px-4 py-4">
                  <WorkspaceBadge tone={lead.temperature === "Hot" ? "rose" : lead.temperature === "Warm" ? "amber" : "blue"}>
                    {lead.aiScore ? `${lead.aiScore}/100` : lead.temperature}
                  </WorkspaceBadge>
                </td>
                <td className="px-4 py-4">
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        scoreLead(lead);
                      }}
                      className="inline-flex h-9 items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 text-xs font-bold text-blue-700"
                    >
                      {scoringLeadId === lead.id ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Bot className="h-3.5 w-3.5" />}
                      AI Score
                    </button>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        openEdit(lead);
                      }}
                      className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-600"
                      aria-label={`Edit ${lead.name}`}
                    >
                      <Edit3 className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        if (window.confirm(`Delete ${lead.name}?`)) {
                          dispatch({ type: "DELETE_LEAD", payload: { id: lead.id } });
                          showToast(`${lead.name} deleted. Undo is available.`);
                        }
                      }}
                      className="grid h-9 w-9 place-items-center rounded-full border border-rose-200 bg-rose-50 text-rose-600"
                      aria-label={`Delete ${lead.name}`}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 md:hidden">
        {filteredLeads.map((lead) => (
          <div key={lead.id} className="rounded-[24px] border border-l-4 border-blue-400 border-slate-200 bg-white p-5 text-left shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-950 dark:text-white">{lead.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{lead.organization}</p>
              </div>
              <WorkspaceBadge tone={lead.temperature === "Hot" ? "rose" : "blue"}>{lead.aiScore ? `${lead.aiScore}/100` : lead.temperature}</WorkspaceBadge>
            </div>
            <div className="mt-4 grid gap-2 text-sm text-slate-600 dark:text-slate-300">
              <p><span className="font-bold text-slate-800 dark:text-slate-100">Need:</span> {lead.need}</p>
              <p><span className="font-bold text-slate-800 dark:text-slate-100">Stage:</span> {lead.stage}</p>
              <p><span className="font-bold text-slate-800 dark:text-slate-100">Owner:</span> {lead.owner}</p>
            </div>
            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                <WorkspaceButton variant="secondary" onClick={() => openEdit(lead)}>
                  Edit
                </WorkspaceButton>
                <WorkspaceButton
                  variant="secondary"
                  onClick={() => scoreLead(lead)}
                  disabled={scoringLeadId === lead.id}
                >
                  {scoringLeadId === lead.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <Bot className="h-4 w-4" />}
                  AI Score
                </WorkspaceButton>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AddLeadPanel open={panelOpen} lead={editingLead} onClose={() => setPanelOpen(false)} industry={industry} showToast={showToast} />
      <AIScorePanel
        open={Boolean(scorePanelLead && scoreDetails)}
        lead={scorePanelLead}
        score={scoreDetails?.score ?? null}
        reasons={scoreDetails?.reasons ?? []}
        recommendedAction={scoreDetails?.recommendedAction ?? ""}
        onClose={() => {
          setScorePanelLead(null);
          setScoreDetails(null);
        }}
      />
    </motion.div>
  );
}
