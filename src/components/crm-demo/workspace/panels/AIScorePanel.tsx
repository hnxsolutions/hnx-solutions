"use client";

import { Bot, CheckCircle2, Target } from "lucide-react";
import type { WorkspaceLead } from "@/lib/workspaceState";
import { WorkspaceBadge, WorkspacePanel } from "@/components/crm-demo/workspace/WorkspacePrimitives";

export function AIScorePanel({
  open,
  lead,
  score,
  reasons,
  recommendedAction,
  onClose,
}: {
  open: boolean;
  lead: WorkspaceLead | null;
  score: number | null;
  reasons: string[];
  recommendedAction: string;
  onClose: () => void;
}) {
  return (
    <WorkspacePanel
      open={open}
      onClose={onClose}
      title={lead ? `AI score: ${lead.name}` : "AI score"}
      description="Deterministic workspace scoring based on source, temperature, value, and stage."
    >
      {lead && score !== null ? (
        <div className="space-y-5">
          <div className="rounded-[28px] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 text-center">
            <div className="mx-auto grid h-32 w-32 place-items-center rounded-full border-[10px] border-blue-200 bg-white shadow-inner">
              <div>
                <p className="text-4xl font-bold text-blue-700">{score}</p>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">/100</p>
              </div>
            </div>
            <div className="mt-5 flex justify-center">
              <WorkspaceBadge tone={score >= 80 ? "green" : score >= 60 ? "amber" : "rose"}>
                {score >= 80 ? "High priority" : score >= 60 ? "Needs follow-up" : "Nurture"}
              </WorkspaceBadge>
            </div>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <div className="flex items-center gap-3">
              <Bot className="h-5 w-5 text-blue-700" aria-hidden="true" />
              <h3 className="font-bold text-slate-950 dark:text-white">Why this score?</h3>
            </div>
            <div className="mt-4 space-y-3">
              {reasons.map((reason) => (
                <div key={reason} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3 text-sm font-semibold leading-6 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  {reason}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-blue-100 bg-blue-50 p-5">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-blue-700" aria-hidden="true" />
              <h3 className="font-bold text-blue-900">Recommended action</h3>
            </div>
            <p className="mt-3 text-sm font-semibold leading-7 text-blue-800">{recommendedAction}</p>
          </div>
        </div>
      ) : null}
    </WorkspacePanel>
  );
}

