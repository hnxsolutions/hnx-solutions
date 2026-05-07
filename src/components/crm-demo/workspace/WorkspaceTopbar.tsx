"use client";

import { Bot, Bell, RotateCcw, Search } from "lucide-react";
import { useState } from "react";
import type { DemoIndustry, IndustryId } from "@/components/crm-demo/demoData";
import { demoIndustries } from "@/components/crm-demo/demoData";
import { useWorkspace } from "@/lib/workspaceContext";
import { NotificationDropdown } from "@/components/crm-demo/workspace/panels/NotificationDropdown";

export function WorkspaceTopbar({
  industry,
  selectedIndustryId,
  setSelectedIndustryId,
  search,
  setSearch,
  setActiveTab,
}: {
  industry: DemoIndustry;
  selectedIndustryId: IndustryId;
  setSelectedIndustryId: (industryId: IndustryId) => void;
  search: string;
  setSearch: (value: string) => void;
  setActiveTab: (tab: "ai") => void;
}) {
  const { workspace, selectedRole, canUndo, undoLastAction } = useWorkspace();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const unread = workspace.notifications.filter((notification) => !notification.read).length;

  return (
    <div className="border-b border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-950 sm:px-5">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-600 px-3 py-2 text-xs font-bold text-white">
            <span className="h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_0_4px_rgba(34,211,238,0.22)]" />
            Live Workspace
          </div>
          <div className="rounded-full border border-cyan-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            {industry.name}
          </div>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-300">
            {workspace.leads.length} leads · {workspace.workflows.length} workflows · {workspace.roles.length} roles
          </p>
          {selectedRole ? (
            <p className="rounded-full border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-bold text-amber-700">
              Viewing as: {selectedRole.name}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <label className="relative min-w-0 md:w-72">
            <span className="sr-only">Search live workspace</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search your workspace..."
              className="h-11 w-full rounded-full border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </label>
          <select
            value={selectedIndustryId}
            onChange={(event) => setSelectedIndustryId(event.target.value as IndustryId)}
            className="h-11 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            aria-label="Switch industry"
          >
            {demoIndustries.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          {canUndo ? (
            <button
              type="button"
              onClick={undoLastAction}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 text-sm font-bold text-amber-700"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Undo
            </button>
          ) : null}
          <div className="relative">
            <button
              type="button"
              onClick={() => setNotificationsOpen((open) => !open)}
              className="relative grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-cyan-200 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              aria-label="Open notifications"
            >
              <Bell className="h-4 w-4" aria-hidden="true" />
              {unread ? (
                <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-rose-600 px-1 text-[10px] font-bold text-white">
                  {unread}
                </span>
              ) : null}
            </button>
            <NotificationDropdown open={notificationsOpen} />
          </div>
          <button
            type="button"
            onClick={() => setActiveTab("ai")}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 text-sm font-bold text-blue-700 transition hover:bg-cyan-50"
          >
            <Bot className="h-4 w-4" aria-hidden="true" />
            AI Assistant
          </button>
        </div>
      </div>
    </div>
  );
}

