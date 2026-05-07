"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, PartyPopper } from "lucide-react";
import { useEffect, useState } from "react";
import { useWorkspace } from "@/lib/workspaceContext";
import { WorkspaceButton } from "@/components/crm-demo/workspace/WorkspacePrimitives";

export function WorkspaceProgressBar({ setActiveTab }: { setActiveTab: (tab: "build") => void }) {
  const { progress, workspace, dispatch } = useWorkspace();
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    if (progress.percent === 100 && !workspace.meta.blueprintCelebrated) {
      setCelebrate(true);
    }
  }, [progress.percent, workspace.meta.blueprintCelebrated]);

  return (
    <>
      <div className="mb-5 rounded-[24px] border border-blue-100 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold text-slate-950 dark:text-white">Your CRM setup: {progress.percent}% complete</p>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <motion.div className="h-full rounded-full bg-blue-600" animate={{ width: `${progress.percent}%` }} />
            </div>
          </div>
          {progress.percent === 100 ? (
            <WorkspaceButton onClick={() => setActiveTab("build")}>Generate My CRM Blueprint</WorkspaceButton>
          ) : null}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {progress.steps.map((step) => (
            <span
              key={step.key}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold ${
                step.complete ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-slate-50 text-slate-500"
              }`}
            >
              {step.complete ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <span className="h-2 w-2 rounded-full border border-current" />}
              {step.label}
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {celebrate ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] grid place-items-center bg-blue-950/70 px-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.94 }}
              className="w-full max-w-xl rounded-[32px] border border-white/20 bg-white p-8 text-center shadow-[0_34px_100px_rgba(15,23,42,0.34)]"
            >
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-blue-600 text-white">
                <PartyPopper className="h-8 w-8" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-3xl font-bold text-slate-950">Your CRM blueprint is ready!</h2>
              <p className="mx-auto mt-3 max-w-md leading-7 text-slate-600">
                You built enough live CRM structure to generate a summary your team can actually review.
              </p>
              <div className="mt-6 flex justify-center">
                <WorkspaceButton
                  onClick={() => {
                    dispatch({ type: "MARK_BLUEPRINT_CELEBRATED" });
                    setCelebrate(false);
                    setActiveTab("build");
                  }}
                >
                  View My CRM Summary
                </WorkspaceButton>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

