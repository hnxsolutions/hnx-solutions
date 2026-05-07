"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bell, Check, Sparkles } from "lucide-react";
import { useWorkspace } from "@/lib/workspaceContext";
import { timeAgo, WorkspaceBadge } from "@/components/crm-demo/workspace/WorkspacePrimitives";

export function NotificationDropdown({ open }: { open: boolean }) {
  const { workspace, dispatch } = useWorkspace();
  const notifications = workspace.notifications
    .slice()
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 20);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="absolute right-0 top-[calc(100%+0.75rem)] z-[95] w-[min(92vw,26rem)] overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] dark:border-slate-700 dark:bg-slate-950"
        >
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-3 dark:border-slate-800">
            <div>
              <p className="text-sm font-bold text-slate-950 dark:text-white">Notifications</p>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Last 20 workspace alerts</p>
            </div>
            <button
              type="button"
              onClick={() => dispatch({ type: "MARK_ALL_NOTIFICATIONS_READ" })}
              className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700"
            >
              Mark all read
            </button>
          </div>
          <div className="max-h-[28rem] overflow-y-auto p-3">
            {!notifications.length ? (
              <div className="grid place-items-center rounded-2xl border border-dashed border-slate-200 p-8 text-center">
                <Bell className="h-6 w-6 text-slate-400" aria-hidden="true" />
                <p className="mt-3 text-sm font-bold text-slate-700 dark:text-slate-200">No notifications yet</p>
              </div>
            ) : (
              <div className="space-y-2">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`rounded-2xl border p-3 transition ${
                      notification.read
                        ? "border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-900"
                        : "border-blue-100 bg-blue-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-blue-700 shadow-sm">
                        <Sparkles className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <WorkspaceBadge tone={notification.read ? "slate" : "blue"}>{notification.type}</WorkspaceBadge>
                          <span className="text-xs font-semibold text-slate-500">{timeAgo(notification.createdAt)}</span>
                        </div>
                        <p className="mt-2 text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">{notification.message}</p>
                      </div>
                      {!notification.read ? (
                        <button
                          type="button"
                          onClick={() => dispatch({ type: "MARK_NOTIFICATION_READ", payload: { id: notification.id } })}
                          className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-blue-100 bg-white text-blue-700"
                          aria-label="Mark notification read"
                        >
                          <Check className="h-4 w-4" aria-hidden="true" />
                        </button>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

