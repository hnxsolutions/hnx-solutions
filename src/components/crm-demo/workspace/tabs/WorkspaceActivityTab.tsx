"use client";

import { motion } from "framer-motion";
import { Activity, Bot, User, Workflow } from "lucide-react";
import { useWorkspace } from "@/lib/workspaceContext";
import { WorkspaceEmptyState, WorkspaceSectionHeader, timeAgo, WorkspaceBadge } from "@/components/crm-demo/workspace/WorkspacePrimitives";

export function WorkspaceActivityTab() {
  const { workspace } = useWorkspace();

  if (!workspace.activityLog.length) {
    return (
      <>
        <WorkspaceSectionHeader
          eyebrow="Global activity"
          title="Activity Log"
          description="Every meaningful workspace action appears here in chronological order."
        />
        <WorkspaceEmptyState
          icon={<Activity className="h-6 w-6" aria-hidden="true" />}
          title="No activity yet."
          description="Create a lead, role, workflow, task, or AI score to populate the timeline."
          primaryLabel="Open Leads"
          onPrimary={() => undefined}
        />
      </>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <WorkspaceSectionHeader
        eyebrow="Global activity"
        title="Activity Log"
        description="A traceable timeline of user, workflow, AI, and system actions in this session."
      />
      <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="space-y-4">
          {workspace.activityLog.map((activity) => (
            <div key={activity.id} className="relative flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
              <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-600 text-white">
                {activity.by.startsWith("workflow") ? <Workflow className="h-4 w-4" /> : activity.by === "ai" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-bold text-slate-950 dark:text-white">{activity.action}</p>
                  <WorkspaceBadge tone={activity.by === "ai" ? "blue" : activity.by.startsWith("workflow") ? "green" : "slate"}>{activity.by}</WorkspaceBadge>
                  <span className="text-xs font-semibold text-slate-500">{timeAgo(activity.at)}</span>
                </div>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">{activity.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

