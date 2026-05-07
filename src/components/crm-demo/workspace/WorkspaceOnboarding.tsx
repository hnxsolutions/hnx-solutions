"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Database, ShieldCheck, Workflow, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { DemoIndustry } from "@/components/crm-demo/demoData";
import { useWorkspace } from "@/lib/workspaceContext";
import { WorkspaceButton } from "@/components/crm-demo/workspace/WorkspacePrimitives";

export function WorkspaceOnboarding({
  industry,
  setActiveTab,
  showToast,
}: {
  industry: DemoIndustry;
  setActiveTab: (tab: "leads" | "workflows" | "permissions") => void;
  showToast: (message: string) => void;
}) {
  const { workspace, isWorkspaceMode, dispatch } = useWorkspace();
  const [step, setStep] = useState(1);
  const [dismissed, setDismissed] = useState(false);
  const shouldShow =
    isWorkspaceMode &&
    !dismissed &&
    (step > 1 || !workspace.meta.onboardingComplete || workspace.industryId !== industry.id || workspace.meta.onboardingChoice === null);

  useEffect(() => {
    if (workspace.industryId !== industry.id) {
      setStep(1);
      setDismissed(false);
    }
  }, [industry.id, workspace.industryId]);

  function initialize(seedMode: "example" | "scratch") {
    dispatch({ type: "INITIALIZE_WORKSPACE", payload: { industry, seedMode } });
    showToast(seedMode === "example" ? "Workspace started with example data." : "Blank workspace ready.");
    setStep(2);
  }

  function close() {
    setDismissed(true);
  }

  return (
    <AnimatePresence>
      {shouldShow ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/45 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            className="w-full max-w-2xl overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_34px_100px_rgba(15,23,42,0.28)]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">Step {step}/3</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950">
                  {step === 1 ? "Your workspace is ready" : step === 2 ? "Build your first workflow" : "Configure your roles"}
                </h2>
              </div>
              <button type="button" onClick={close} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-slate-50 text-slate-600" aria-label="Close onboarding">
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <div className="p-6">
              {step === 1 ? (
                <div>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                    <Database className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-4 leading-7 text-slate-600">
                    This is your live CRM session. Everything you create here persists for this session. Start by adding
                    your first lead, or let us pre-fill example data for {industry.name}.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <WorkspaceButton onClick={() => initialize("example")}>Start with example data</WorkspaceButton>
                    <WorkspaceButton variant="ghost" onClick={() => initialize("scratch")}>Start from scratch</WorkspaceButton>
                  </div>
                </div>
              ) : null}

              {step === 2 ? (
                <div>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-50 text-blue-700">
                    <Workflow className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-4 leading-7 text-slate-600">
                    Workflows automate your CRM. Create one now to see it fire when you add a lead.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <WorkspaceButton
                      onClick={() => {
                        setActiveTab("workflows");
                        setStep(3);
                      }}
                    >
                      Take me to Workflows
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </WorkspaceButton>
                    <WorkspaceButton variant="ghost" onClick={() => setStep(3)}>Skip for now</WorkspaceButton>
                  </div>
                </div>
              ) : null}

              {step === 3 ? (
                <div>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-4 leading-7 text-slate-600">
                    Set up who can see what in your CRM. Create a role now, or explore the workspace first.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <WorkspaceButton
                      onClick={() => {
                        setActiveTab("permissions");
                        close();
                      }}
                    >
                      Create my first role
                    </WorkspaceButton>
                    <WorkspaceButton
                      variant="ghost"
                      onClick={() => {
                        setActiveTab("leads");
                        close();
                      }}
                    >
                      Skip for now
                    </WorkspaceButton>
                  </div>
                </div>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
