"use client";

import { motion } from "framer-motion";
import { Bot, EyeOff, GripVertical, Plus, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useWorkspace } from "@/lib/workspaceContext";
import { formatWorkspaceCurrency, parseWorkspaceValue, type WorkspaceDashboardWidget } from "@/lib/workspaceState";
import {
  WorkspaceBadge,
  WorkspaceButton,
  WorkspaceSectionHeader,
} from "@/components/crm-demo/workspace/WorkspacePrimitives";

const widgetOptions: Array<Pick<WorkspaceDashboardWidget, "type" | "title" | "metric">> = [
  { type: "metric", title: "Tasks Due Today", metric: "tasks_due_today" },
  { type: "metric", title: "Roles Created", metric: "roles_created" },
  { type: "metric", title: "AI Scores", metric: "ai_scores" },
  { type: "chart", title: "Lead Source Breakdown", metric: "source_breakdown" },
  { type: "chart", title: "Temperature Distribution", metric: "temperature_distribution" },
  { type: "list", title: "Recent Activity", metric: "recent_activity" },
];

export function WorkspaceOverviewTab({ showToast, setActiveTab }: { showToast: (message: string) => void; setActiveTab: (tab: "ai" | "leads" | "build") => void }) {
  const { workspace, dispatch } = useWorkspace();
  const [editing, setEditing] = useState(false);
  const pipelineValue = workspace.leads.reduce((total, lead) => total + parseWorkspaceValue(lead.value), 0);
  const visibleWidgets = workspace.dashboardWidgets.slice().sort((a, b) => a.position - b.position).filter((widget) => widget.visible);
  const sourceBreakdown = useMemo(() => groupBy(workspace.leads.map((lead) => lead.source || "Unknown")), [workspace.leads]);
  const temperatureBreakdown = useMemo(() => groupBy(workspace.leads.map((lead) => lead.temperature)), [workspace.leads]);

  function valueForMetric(metric: string) {
    if (metric === "total_leads") return workspace.leads.length.toString();
    if (metric === "hot_leads") return workspace.leads.filter((lead) => lead.temperature === "Hot").length.toString();
    if (metric === "pipeline_value") return formatWorkspaceCurrency(pipelineValue);
    if (metric === "active_workflows") return workspace.workflows.filter((workflow) => workflow.isActive).length.toString();
    if (metric === "tasks_due_today") return workspace.tasks.filter((task) => task.due.toLowerCase().includes("today") && task.status !== "Done").length.toString();
    if (metric === "roles_created") return workspace.roles.length.toString();
    if (metric === "ai_scores") return workspace.leads.filter((lead) => lead.aiScore !== null).length.toString();
    return "-";
  }

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <WorkspaceSectionHeader
        eyebrow="Live overview"
        title={workspace.workspaceName}
        description="This dashboard reads your actual session workspace state."
        action={
          <WorkspaceButton variant={editing ? "secondary" : "ghost"} onClick={() => setEditing((value) => !value)}>
            {editing ? "Save Dashboard" : "Edit Dashboard"}
          </WorkspaceButton>
        }
      />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Total Leads", workspace.leads.length.toString()],
          ["Hot Leads", workspace.leads.filter((lead) => lead.temperature === "Hot").length.toString()],
          ["Pipeline Value", formatWorkspaceCurrency(pipelineValue)],
          ["Workflows Active", workspace.workflows.filter((workflow) => workflow.isActive).length.toString()],
        ].map(([label, value]) => (
          <motion.div key={label} whileHover={{ y: -4 }} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <p className="text-sm font-semibold text-slate-500">{label}</p>
            <p className="mt-4 text-3xl font-bold text-slate-950 dark:text-white">{value}</p>
          </motion.div>
        ))}
      </div>

      <div className="relative mt-6 overflow-hidden rounded-[28px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-5">
        <GhostCursor name="Rahul (Sales)" className="left-[12%] top-[32%]" delay={0} />
        <GhostCursor name="Priya (Manager)" className="right-[18%] top-[52%]" delay={0.8} />
        <div className="relative z-10 max-w-2xl">
          <WorkspaceBadge>Live collaboration preview</WorkspaceBadge>
          <h3 className="mt-3 text-xl font-bold text-slate-950">Your team works here together</h3>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
            These animated cursors preview how your real CRM can feel when sales and managers act on the same workspace.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 md:grid-cols-2">
          {visibleWidgets.map((widget) => (
            <div key={widget.id} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-bold text-slate-950 dark:text-white">{widget.title}</p>
                  <WorkspaceBadge tone="slate">{widget.type}</WorkspaceBadge>
                </div>
                {editing ? (
                  <div className="flex gap-1">
                    <GripVertical className="h-5 w-5 text-slate-400" aria-hidden="true" />
                    <button type="button" onClick={() => dispatch({ type: "TOGGLE_DASHBOARD_WIDGET", payload: { widgetId: widget.id } })} className="text-slate-400 hover:text-blue-700" aria-label={`Hide ${widget.title}`}>
                      <EyeOff className="h-5 w-5" />
                    </button>
                    <button type="button" onClick={() => dispatch({ type: "REMOVE_DASHBOARD_WIDGET", payload: { widgetId: widget.id } })} className="text-slate-400 hover:text-rose-700" aria-label={`Remove ${widget.title}`}>
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ) : null}
              </div>
              {widget.type === "metric" ? (
                <p className="mt-5 text-3xl font-bold text-blue-700">{valueForMetric(widget.metric)}</p>
              ) : null}
              {widget.metric === "stage_distribution" ? <MiniBars data={groupBy(workspace.leads.map((lead) => lead.stage))} /> : null}
              {widget.metric === "source_breakdown" ? <MiniBars data={sourceBreakdown} /> : null}
              {widget.metric === "temperature_distribution" ? <MiniBars data={temperatureBreakdown} /> : null}
              {widget.metric === "latest_ai" ? (
                <p className="mt-4 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
                  {workspace.meta.latestAiResponse || "Ask the AI Assistant a question to fill this widget."}
                </p>
              ) : null}
              {widget.metric === "recent_activity" ? (
                <div className="mt-4 space-y-2">
                  {workspace.activityLog.slice(0, 3).map((activity) => (
                    <p key={activity.id} className="text-sm font-semibold text-slate-600 dark:text-slate-300">{activity.action} - {activity.details}</p>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">Workspace next actions</h3>
              <p className="mt-1 text-sm text-slate-500">Everything here links to live data.</p>
            </div>
            <Bot className="h-6 w-6 text-blue-700" aria-hidden="true" />
          </div>
          <div className="mt-5 grid gap-3">
            <ActionCard label="Add another lead" onClick={() => setActiveTab("leads")} />
            <ActionCard label="Ask AI what to do next" onClick={() => setActiveTab("ai")} />
            <ActionCard label="View my CRM summary" onClick={() => setActiveTab("build")} />
          </div>
        </div>
      </div>

      {editing ? (
        <div className="mt-6 rounded-[28px] border border-blue-100 bg-blue-50 p-5">
          <h3 className="font-bold text-blue-950">Add Widget</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {widgetOptions.map((option) => (
              <button
                type="button"
                key={`${option.metric}-${option.title}`}
                onClick={() => {
                  dispatch({
                    type: "ADD_DASHBOARD_WIDGET",
                    payload: {
                      widget: {
                        id: `widget_${option.metric}_${Date.now()}`,
                        type: option.type,
                        title: option.title,
                        metric: option.metric,
                        position: workspace.dashboardWidgets.length + 1,
                        visible: true,
                      },
                    },
                  });
                  showToast(`${option.title} widget added.`);
                }}
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-2 text-sm font-bold text-blue-700"
              >
                <Plus className="h-4 w-4" />
                {option.title}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </motion.div>
  );
}

function groupBy(values: string[]) {
  return values.reduce<Record<string, number>>((acc, value) => {
    acc[value] = (acc[value] ?? 0) + 1;
    return acc;
  }, {});
}

function MiniBars({ data }: { data: Record<string, number> }) {
  const entries = Object.entries(data);
  const max = Math.max(1, ...entries.map(([, value]) => value));
  if (!entries.length) return <p className="mt-4 text-sm font-semibold text-slate-500">No data yet.</p>;
  return (
    <div className="mt-4 space-y-3">
      {entries.map(([label, value]) => (
        <div key={label}>
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>{label}</span>
            <span>{value}</span>
          </div>
          <div className="mt-1 h-2 rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-blue-600" style={{ width: `${(value / max) * 100}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function ActionCard({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
      {label}
    </button>
  );
}

function GhostCursor({ name, className, delay }: { name: string; className: string; delay: number }) {
  return (
    <motion.div
      animate={{ x: [0, 24, -12, 0], y: [0, -12, 18, 0] }}
      transition={{ duration: 6, repeat: Infinity, delay }}
      className={`absolute z-0 ${className}`}
      title="In your real CRM, your team works here together."
    >
      <div className="h-0 w-0 border-l-[12px] border-r-[3px] border-t-[18px] border-l-blue-600 border-r-transparent border-t-transparent" />
      <span className="mt-1 inline-flex rounded-full bg-slate-950 px-2 py-1 text-[11px] font-bold text-white shadow-sm">{name}</span>
    </motion.div>
  );
}
