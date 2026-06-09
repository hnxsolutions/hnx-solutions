"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Database, Eye, Lock, Sparkles } from "lucide-react";
import type { DemoIndustry } from "@/components/crm-demo/demoData";
import { useWorkspace } from "@/lib/workspaceContext";

export function WorkspaceModeToggle({ industry }: { industry: DemoIndustry }) {
  const { isWorkspaceMode, setWorkspaceMode, workspace } = useWorkspace();

  return (
    <div className="mt-8 rounded-[30px] border border-slate-200 bg-white/[0.92] p-5 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mb-5">
        <div className="mb-4 flex items-center gap-2">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-violet-600 text-sm font-bold text-white shadow-[0_8px_20px_rgba(109,40,217,0.24)]">
            3
          </span>
          <span className="text-sm font-bold uppercase tracking-[0.08em] text-slate-950 dark:text-white">
            Choose Your Experience (Mode Selector)
          </span>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">How would you like to explore?</h2>
          <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
            Both modes are 100% free. No credit card. No signup.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
        <button
          type="button"
          onClick={() => setWorkspaceMode(false)}
          aria-label={`Preview ${industry.name}`}
          className={`relative overflow-hidden rounded-[24px] border p-5 text-left transition ${
            !isWorkspaceMode
              ? "border-violet-300 bg-violet-50 text-violet-950 ring-4 ring-violet-100"
              : "border-slate-200 bg-white text-slate-700 hover:border-violet-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          }`}
        >
          {!isWorkspaceMode ? <motion.span layoutId="workspace-mode-pill" className="absolute inset-0 rounded-[24px] ring-2 ring-violet-300" /> : null}
          <span className="relative block text-center">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-violet-100 text-violet-700 shadow-sm">
              <Eye className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="mt-4 block">
              <span className="block text-xl font-bold">Preview CRM</span>
              <span className="mt-1 block text-sm leading-6 opacity-75">
                Explore pre-filled industry data and see how everything works.
              </span>
            </span>
            <span className="mt-5 grid gap-2 text-left">
              {["Real industry data", "All features unlocked", "Perfect for quick demo"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 text-xs font-bold">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </span>
            <span className={`mt-5 grid h-8 place-items-center rounded-lg text-sm font-bold ${!isWorkspaceMode ? "bg-violet-600 text-white" : "border border-violet-200 text-violet-700"}`}>
              {!isWorkspaceMode ? <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> : "Preview Now"}
            </span>
          </span>
        </button>

        <button
          type="button"
          onClick={() => setWorkspaceMode(true)}
          aria-label={`Try ${industry.name} yourself`}
          className={`relative overflow-hidden rounded-[24px] border p-5 text-left transition ${
            isWorkspaceMode
              ? "border-emerald-300 bg-emerald-50 text-emerald-950 ring-4 ring-emerald-100"
              : "border-slate-200 bg-white text-slate-700 hover:border-emerald-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          }`}
        >
          {isWorkspaceMode ? <motion.span layoutId="workspace-mode-pill" className="absolute inset-0 rounded-[24px] ring-2 ring-emerald-400" /> : null}
          <span className="relative block text-center">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-700 shadow-sm">
              <Database className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="mt-4 block">
              <span className="block text-xl font-bold">Try It Yourself</span>
              <span className="mt-1 block text-sm leading-6 opacity-75">
                Create your own leads, workflows, roles, and dashboard in this browser.
              </span>
            </span>
            <span className="mt-5 grid gap-2 text-left">
              {["Create your own leads", "Build workflows", "Test role permissions"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 text-xs font-bold">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </span>
            <span className={`mt-5 grid h-8 place-items-center rounded-lg text-sm font-bold ${isWorkspaceMode ? "bg-emerald-600 text-white" : "border border-emerald-200 text-emerald-700"}`}>
              {isWorkspaceMode ? <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> : "Try Now"}
            </span>
          </span>
        </button>
      </div>

      <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs font-semibold text-slate-500 dark:text-slate-400">
        <Lock className="h-3.5 w-3.5" aria-hidden="true" />
        Your data is private and stays only in this browser.
      </p>

      {isWorkspaceMode ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 rounded-2xl border border-blue-200 bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-sm"
        >
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            You are now in Try It Yourself mode. Everything you build here is real in this session. Current workspace:{" "}
            {workspace.leads.length} leads - {workspace.workflows.length} workflows - {workspace.roles.length} roles
          </span>
        </motion.div>
      ) : null}
    </div>
  );
}
