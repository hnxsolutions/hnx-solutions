"use client";

import { motion } from "framer-motion";
import { Bot, Loader2, Send, Sparkles } from "lucide-react";
import { useState, type FormEvent } from "react";
import type { DemoIndustry } from "@/components/crm-demo/demoData";
import { useWorkspace } from "@/lib/workspaceContext";
import {
  buildLocalAiResponse,
  createFollowUpPlan,
  getTopPriorityLead,
  suggestWorkspaceWorkflows,
  type WorkspaceChatMessage,
} from "@/lib/workspaceAI";
import { getLeadScoreResult, workspaceWorkflowTemplates } from "@/lib/workspaceState";
import {
  WorkspaceBadge,
  WorkspaceButton,
  WorkspaceInlineHint,
  WorkspaceSectionHeader,
} from "@/components/crm-demo/workspace/WorkspacePrimitives";

export function WorkspaceAITab({ industry, showToast }: { industry: DemoIndustry; showToast: (message: string) => void }) {
  const { workspace, dispatch } = useWorkspace();
  const [messages, setMessages] = useState<WorkspaceChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: `I am reading your live ${industry.name} workspace. Add leads, roles, and workflows, then ask what to do next.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  function submitQuery(query: string) {
    if (!query.trim()) return;
    const userMessage: WorkspaceChatMessage = { id: `user_${Date.now()}`, role: "user", content: query.trim() };
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setLoading(true);
    window.setTimeout(() => {
      const response = buildLocalAiResponse(workspace, industry, query);
      const assistantMessage: WorkspaceChatMessage = { id: `ai_${Date.now()}`, role: "assistant", content: response };
      setMessages((current) => [...current, assistantMessage]);
      dispatch({ type: "LOG_AI_QUERY", payload: { query, response } });
      if (query.toLowerCase().includes("follow") && workspace.leads.length) {
        const lead = getTopPriorityLead(workspace);
        if (lead) {
          dispatch({
            type: "CREATE_TASK",
            payload: {
              title: `AI follow-up: ${lead.name}`,
              linkedLeadId: lead.id,
              owner: lead.owner || "Sales Team",
              priority: "High",
              due: "Today",
              status: "Pending",
              createdBy: "ai",
            },
          });
        }
      }
      setLoading(false);
    }, 650);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitQuery(input);
  }

  function scoreAllLeads() {
    workspace.leads.forEach((lead) => {
      const result = getLeadScoreResult(lead);
      dispatch({ type: "AI_SCORE_LEAD", payload: { leadId: lead.id, score: result.score, reasons: result.reasons } });
    });
    showToast(`AI scored ${workspace.leads.length} leads.`);
  }

  function createPlan() {
    const plan = createFollowUpPlan(workspace);
    plan.forEach((item) => {
      dispatch({
        type: "CREATE_TASK",
        payload: {
          title: item.title,
          linkedLeadId: item.lead.id,
          owner: item.lead.owner || "Sales Team",
          priority: item.priority === "High" ? "High" : "Medium",
          due: item.due,
          status: "Pending",
          createdBy: "ai",
        },
      });
    });
    showToast(`AI created ${plan.length} follow-up tasks.`);
  }

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <WorkspaceSectionHeader
        eyebrow="Local AI assistant"
        title="AI that reads your live workspace"
        description="No API calls are made. Responses and actions are deterministic simulations based on your session data."
      />

      {workspace.leads.length >= 3 ? (
        <div className="mb-5">
          <WorkspaceInlineHint>
            Based on your leads, I suggest creating a &quot;Follow up in 48 hours&quot; workflow.{" "}
            <button
              type="button"
              onClick={() => {
                const template = workspaceWorkflowTemplates[0];
                dispatch({
                  type: "CREATE_WORKFLOW",
                  payload: {
                    name: "Follow up in 48 hours",
                    description: "AI suggested workflow based on your live lead volume.",
                    trigger: template.trigger,
                    condition: template.condition,
                    action: { type: "create_task", config: { title: "Follow up in 48 hours", owner: "Lead owner", priority: "Medium", due: "In 2 days" } },
                    isActive: true,
                  },
                });
                showToast("AI suggested workflow created.");
              }}
              className="font-extrabold underline"
            >
              Create it
            </button>
          </WorkspaceInlineHint>
        </div>
      ) : null}

      <div className="grid gap-5 xl:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-blue-700" aria-hidden="true" />
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">Quick actions</h3>
          </div>
          <div className="mt-4 grid gap-3">
            <QuickButton label="Score all my leads" onClick={scoreAllLeads} disabled={!workspace.leads.length} />
            <QuickButton label="Suggest my top priority lead" onClick={() => submitQuery("Suggest my top priority lead")} />
            <QuickButton label="Create a follow-up plan" onClick={createPlan} disabled={!workspace.leads.length} />
            <QuickButton
              label="What workflows should I set up?"
              onClick={() => {
                const suggestions = suggestWorkspaceWorkflows(workspace, industry);
                submitQuery(`What workflows should I set up? ${suggestions.map((item) => item.name).join(", ")}`);
              }}
            />
            <QuickButton label="Analyze my pipeline" onClick={() => submitQuery("Analyze my pipeline")} />
            <QuickButton label="Draft a WhatsApp message" onClick={() => submitQuery("Draft a WhatsApp message")} />
          </div>
          <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-4">
            <WorkspaceBadge tone="blue">Powered by local workspace AI</WorkspaceBadge>
            <p className="mt-3 text-sm font-semibold leading-6 text-blue-800">
              Context: {workspace.leads.length} leads · {workspace.workflows.filter((workflow) => workflow.isActive).length} active workflows · {workspace.tasks.filter((task) => task.status !== "Done").length} open tasks
            </p>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-4 text-white shadow-[0_28px_90px_rgba(15,23,42,0.18)]">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300/[0.12] text-cyan-100">
                <Bot className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold">HNX AI Assistant</h3>
                <p className="text-sm text-slate-400">Your real workspace data</p>
              </div>
            </div>
            <WorkspaceBadge tone="green">Local AI</WorkspaceBadge>
          </div>

          <div className="mt-5 max-h-[31rem] space-y-4 overflow-y-auto pr-1">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[92%] rounded-3xl px-4 py-3 text-sm font-semibold leading-6 ${
                  message.role === "user"
                    ? "ml-auto rounded-br-md bg-blue-600 text-white"
                    : "rounded-bl-md border border-white/10 bg-white/[0.07] text-slate-100"
                }`}
              >
                {message.content}
              </div>
            ))}
            {loading ? (
              <div className="inline-flex items-center gap-3 rounded-3xl rounded-bl-md border border-white/10 bg-white/[0.07] px-4 py-3 text-sm font-semibold text-cyan-100">
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                AI analyzing workspace data...
              </div>
            ) : null}
          </div>

          <form onSubmit={onSubmit} className="mt-5 flex gap-2">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about your leads, workflows, roles..."
              className="h-12 min-w-0 flex-1 rounded-full border border-white/10 bg-white/[0.08] px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
            />
            <button type="submit" disabled={loading || !input.trim()} className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue-600 text-white disabled:opacity-60" aria-label="Send message">
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

function QuickButton({ label, onClick, disabled = false }: { label: string; onClick: () => void; disabled?: boolean }) {
  return (
    <WorkspaceButton variant="ghost" onClick={onClick} disabled={disabled} className="justify-start">
      {label}
    </WorkspaceButton>
  );
}
