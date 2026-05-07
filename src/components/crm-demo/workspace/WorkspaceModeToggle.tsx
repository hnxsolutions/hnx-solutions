"use client";

import { motion } from "framer-motion";
import { Database, LayoutDashboard, Sparkles } from "lucide-react";
import type { DemoIndustry } from "@/components/crm-demo/demoData";
import { useWorkspace } from "@/lib/workspaceContext";

export function WorkspaceModeToggle({ industry }: { industry: DemoIndustry }) {
  const { isWorkspaceMode, setWorkspaceMode, workspace } = useWorkspace();

  return (
    <div className="mt-10 rounded-[30px] border border-blue-100 bg-white/90 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="grid gap-3 md:grid-cols-2">
        <button
          type="button"
          onClick={() => setWorkspaceMode(false)}
          className={`relative overflow-hidden rounded-[22px] border p-5 text-left transition ${
            !isWorkspaceMode
              ? "border-emerald-200 bg-emerald-50 text-emerald-950"
              : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          }`}
        >
          {!isWorkspaceMode ? <motion.span layoutId="workspace-mode-pill" className="absolute inset-0 rounded-[22px] ring-2 ring-emerald-300" /> : null}
          <span className="relative flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm">
              <LayoutDashboard className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-bold">Demo Mode</span>
              <span className="mt-1 block text-sm leading-6 opacity-75">Explore pre-built {industry.name} data.</span>
            </span>
          </span>
        </button>

        <button
          type="button"
          onClick={() => setWorkspaceMode(true)}
          className={`relative overflow-hidden rounded-[22px] border p-5 text-left transition ${
            isWorkspaceMode
              ? "border-blue-300 bg-blue-50 text-blue-950"
              : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          }`}
        >
          {isWorkspaceMode ? <motion.span layoutId="workspace-mode-pill" className="absolute inset-0 rounded-[22px] ring-2 ring-blue-400" /> : null}
          <span className="relative flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-700 shadow-sm">
              <Database className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-bold">Live Workspace Mode</span>
              <span className="mt-1 block text-sm leading-6 opacity-75">Build your own CRM live in this browser session.</span>
            </span>
          </span>
        </button>
      </div>

      {isWorkspaceMode ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 rounded-2xl border border-blue-200 bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-sm"
        >
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            You are now in Live Workspace Mode — everything you build here is real in this session. Current workspace:
            {" "}
            {workspace.leads.length} leads · {workspace.workflows.length} workflows · {workspace.roles.length} roles
          </span>
        </motion.div>
      ) : null}
    </div>
  );
}

