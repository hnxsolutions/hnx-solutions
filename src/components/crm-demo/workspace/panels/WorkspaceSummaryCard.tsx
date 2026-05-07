"use client";

import { Download, MessageSquare, Phone } from "lucide-react";
import type { DemoIndustry } from "@/components/crm-demo/demoData";
import { useWorkspace } from "@/lib/workspaceContext";
import { buildWorkspaceSummary, buildWorkspaceSummaryHtml } from "@/lib/workspaceAI";
import { WorkspaceBadge, WorkspaceButton } from "@/components/crm-demo/workspace/WorkspacePrimitives";

export function WorkspaceSummaryCard({ industry, showToast }: { industry: DemoIndustry; showToast: (message: string) => void }) {
  const { workspace } = useWorkspace();
  const summary = buildWorkspaceSummary(workspace, industry);

  function downloadSummary() {
    const html = buildWorkspaceSummaryHtml(workspace, industry);
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${workspace.workspaceName.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-summary.html`;
    link.click();
    URL.revokeObjectURL(url);
    showToast("Workspace summary downloaded.");
  }

  return (
    <div className="overflow-hidden rounded-[30px] border border-blue-100 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.10)] dark:border-slate-800 dark:bg-slate-950">
      <div className="border-b border-blue-100 bg-blue-600 p-6 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.26em] text-blue-100">{summary.title}</p>
        <h3 className="mt-3 text-3xl font-bold">{workspace.workspaceName}</h3>
        <p className="mt-2 text-sm font-semibold text-blue-50">Industry: {summary.industry} · Session built on: {summary.builtOn}</p>
      </div>
      <div className="grid gap-6 p-6 lg:grid-cols-2">
        <SummaryBlock title="What You Built" items={summary.built} />
        <SummaryBlock title="Your Workflows" items={summary.workflows.length ? summary.workflows : ["No active workflows yet."]} ordered />
        <SummaryBlock title="Your Roles" items={summary.roles.length ? summary.roles : ["No custom roles yet."]} />
        <SummaryBlock title="Recommended Next Steps" items={summary.nextSteps} />
      </div>
      <div className="border-t border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <WorkspaceBadge tone="blue">AI queries: {summary.aiQueries}</WorkspaceBadge>
            <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">Get this built for your real business.</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <WorkspaceButton variant="secondary" onClick={() => window.open("https://wa.me/", "_blank")}>
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </WorkspaceButton>
            <WorkspaceButton variant="ghost" onClick={() => window.open("/contact", "_blank")}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              Book a call
            </WorkspaceButton>
            <WorkspaceButton onClick={downloadSummary}>
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Summary
            </WorkspaceButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryBlock({ title, items, ordered = false }: { title: string; items: string[]; ordered?: boolean }) {
  const ListTag = ordered ? "ol" : "ul";
  return (
    <section>
      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">{title}</h4>
      <ListTag className={`mt-3 space-y-2 text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200 ${ordered ? "list-decimal pl-5" : ""}`}>
        {items.map((item) => (
          <li key={item} className={ordered ? "" : "flex gap-2"}>
            {ordered ? null : <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />}
            <span>{item}</span>
          </li>
        ))}
      </ListTag>
    </section>
  );
}

