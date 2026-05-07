"use client";

import { motion } from "framer-motion";
import { CalendarDays, Check, Plus } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useWorkspace } from "@/lib/workspaceContext";
import { workspaceTaskPriorities, type WorkspaceTaskPriority } from "@/lib/workspaceState";
import {
  WorkspaceBadge,
  WorkspaceButton,
  WorkspaceEmptyState,
  WorkspaceSectionHeader,
} from "@/components/crm-demo/workspace/WorkspacePrimitives";

export function WorkspaceTasksTab({ showToast }: { showToast: (message: string) => void }) {
  const { workspace, dispatch } = useWorkspace();
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("Sales Team");
  const [priority, setPriority] = useState<WorkspaceTaskPriority>("Medium");
  const [due, setDue] = useState("Tomorrow");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!title.trim()) return;
    dispatch({
      type: "CREATE_TASK",
      payload: {
        title: title.trim(),
        linkedLeadId: null,
        owner,
        priority,
        due,
        status: "Pending",
        createdBy: "user",
      },
    });
    showToast(`Task created - ${title.trim()}`);
    setTitle("");
  }

  if (!workspace.tasks.length) {
    return (
      <>
        <WorkspaceSectionHeader
          eyebrow="Live task execution"
          title="Tasks and follow-ups"
          description="Tasks can be created manually, by workflows, or by local AI quick actions."
        />
        <WorkspaceEmptyState
          icon={<CalendarDays className="h-6 w-6" aria-hidden="true" />}
          title="No tasks yet."
          description="Create a task manually, or add a workflow that creates tasks automatically when leads are added."
          primaryLabel="Create Task"
          onPrimary={() => {
            dispatch({
              type: "CREATE_TASK",
              payload: {
                title: "Call first workspace lead",
                linkedLeadId: workspace.leads[0]?.id ?? null,
                owner: workspace.leads[0]?.owner ?? "Sales Team",
                priority: "High",
                due: "Today",
                status: "Pending",
                createdBy: "user",
              },
            });
            showToast("Starter task created.");
          }}
        />
      </>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <WorkspaceSectionHeader
        eyebrow="Live task execution"
        title="Tasks and follow-ups"
        description="Complete tasks to update session stats and activity logs."
      />

      <form onSubmit={submit} className="mb-5 grid gap-3 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950 lg:grid-cols-[1fr_0.6fr_0.5fr_0.5fr_auto] lg:items-end">
        <label>
          <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Task title</span>
          <input value={title} onChange={(event) => setTitle(event.target.value)} className="h-11 w-full rounded-full border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
        </label>
        <label>
          <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Owner</span>
          <input value={owner} onChange={(event) => setOwner(event.target.value)} className="h-11 w-full rounded-full border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
        </label>
        <label>
          <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Priority</span>
          <select value={priority} onChange={(event) => setPriority(event.target.value as WorkspaceTaskPriority)} className="h-11 w-full rounded-full border border-slate-200 bg-slate-50 px-4 text-sm font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
            {workspaceTaskPriorities.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <label>
          <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Due</span>
          <input value={due} onChange={(event) => setDue(event.target.value)} className="h-11 w-full rounded-full border border-slate-200 bg-slate-50 px-4 text-sm outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
        </label>
        <WorkspaceButton type="submit" disabled={!title.trim()}>
          <Plus className="h-4 w-4" />
          Add
        </WorkspaceButton>
      </form>

      <div className="grid gap-4 xl:grid-cols-2">
        {workspace.tasks.map((task) => {
          const lead = workspace.leads.find((item) => item.id === task.linkedLeadId);
          return (
            <div key={task.id} className={`rounded-[24px] border border-l-4 bg-white p-5 shadow-sm transition ${task.status === "Done" ? "border-emerald-200 opacity-70" : "border-slate-200"} dark:border-slate-800 dark:bg-slate-950`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className={`font-bold text-slate-950 dark:text-white ${task.status === "Done" ? "line-through" : ""}`}>{task.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">Owner: {task.owner}</p>
                  {lead ? <p className="mt-1 text-xs font-bold text-blue-700">Linked lead: {lead.name}</p> : null}
                </div>
                <WorkspaceBadge tone={task.priority === "High" ? "rose" : task.priority === "Medium" ? "amber" : "blue"}>{task.priority}</WorkspaceBadge>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <WorkspaceBadge tone="slate">{task.due}</WorkspaceBadge>
                <WorkspaceBadge tone={task.status === "Done" ? "green" : "blue"}>{task.status}</WorkspaceBadge>
                <WorkspaceBadge tone="slate">Created by {task.createdBy}</WorkspaceBadge>
              </div>
              {task.status !== "Done" ? (
                <button
                  type="button"
                  onClick={() => {
                    dispatch({ type: "COMPLETE_TASK", payload: { taskId: task.id } });
                    showToast(`Task completed - ${task.title}`);
                  }}
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-700"
                >
                  <Check className="h-4 w-4" />
                  Complete task
                </button>
              ) : null}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

