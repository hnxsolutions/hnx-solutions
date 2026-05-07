import type { DemoIndustry } from "@/components/crm-demo/demoData";
import {
  formatWorkspaceCurrency,
  getLeadScoreResult,
  parseWorkspaceValue,
  type WorkspaceLead,
  type WorkspaceState,
} from "@/lib/workspaceState";

export type WorkspaceChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function getTopPriorityLead(workspace: WorkspaceState) {
  return workspace.leads
    .slice()
    .sort((a, b) => {
      const scoreA = a.aiScore ?? getLeadScoreResult(a).score;
      const scoreB = b.aiScore ?? getLeadScoreResult(b).score;
      return scoreB - scoreA || parseWorkspaceValue(b.value) - parseWorkspaceValue(a.value);
    })[0];
}

export function getPipelineAnalysis(workspace: WorkspaceState) {
  const stageCounts = workspace.leads.reduce<Record<string, number>>((acc, lead) => {
    acc[lead.stage] = (acc[lead.stage] ?? 0) + 1;
    return acc;
  }, {});
  const pipelineValue = workspace.leads.reduce((total, lead) => total + parseWorkspaceValue(lead.value), 0);
  const hottest = workspace.leads.filter((lead) => lead.temperature === "Hot").length;
  const crowdedStage = Object.entries(stageCounts).sort(([, a], [, b]) => b - a)[0];

  return {
    stageCounts,
    pipelineValue,
    hottest,
    crowdedStage,
  };
}

export function suggestWorkspaceWorkflows(workspace: WorkspaceState, industry: DemoIndustry) {
  const hasWhatsApp = workspace.leads.some((lead) => lead.source.toLowerCase().includes("whatsapp"));
  const hasHot = workspace.leads.some((lead) => lead.temperature === "Hot" || (lead.aiScore ?? 0) > 80);
  const defaultStage = workspace.pipelines[0]?.stages.slice().sort((a, b) => a.order - b.order)[1]?.name ?? "Contacted";

  return [
    {
      name: hasWhatsApp ? "Auto-prioritize WhatsApp leads" : "Welcome every new lead",
      reason: hasWhatsApp
        ? "You already have WhatsApp leads, so fast owner assignment matters."
        : `New ${industry.labels.leads.toLowerCase()} should get a first follow-up task automatically.`,
    },
    {
      name: hasHot ? "Hot lead manager alert" : "AI score every new lead",
      reason: hasHot
        ? "Hot leads should immediately create a manager-visible notification."
        : "Scoring each lead keeps your team focused on the best opportunities.",
    },
    {
      name: `${defaultStage} follow-up reminder`,
      reason: `When a lead reaches ${defaultStage}, create a task before it goes stale.`,
    },
  ];
}

function formatLeadLine(lead: WorkspaceLead) {
  const score = lead.aiScore ?? getLeadScoreResult(lead).score;
  return `${lead.name} from ${lead.organization || "Unknown"} is ${lead.temperature}, worth ${lead.value || "unvalued"}, in ${lead.stage}, score ${score}/100.`;
}

export function buildLocalAiResponse(workspace: WorkspaceState, industry: DemoIndustry, query: string) {
  const lower = query.toLowerCase();
  const topLead = getTopPriorityLead(workspace);
  const analysis = getPipelineAnalysis(workspace);
  const activeWorkflows = workspace.workflows.filter((workflow) => workflow.isActive);

  if (!workspace.leads.length && lower.includes("lead")) {
    return `You do not have workspace leads yet. Add one ${industry.labels.leads.toLowerCase().replace(" / ", " or ")} record, then I can prioritize it and suggest workflows from real data.`;
  }

  if (lower.includes("score")) {
    if (!topLead) return "Add a lead first, then I can score it and explain the next best action.";
    const result = getLeadScoreResult(topLead);
    return `${topLead.name} should be scored first. My deterministic workspace score is ${result.score}/100 because ${result.reasons[0].toLowerCase()} ${result.recommendedAction}`;
  }

  if (lower.includes("priority") || lower.includes("follow") || lower.includes("today")) {
    if (!topLead) return "Your follow-up plan is empty because the workspace has no leads yet.";
    return `Start with ${topLead.name}. ${formatLeadLine(topLead)} Create a high-priority follow-up task today, then review any warm leads in ${analysis.crowdedStage?.[0] ?? "your busiest stage"}.`;
  }

  if (lower.includes("workflow") || lower.includes("automation")) {
    const suggestions = suggestWorkspaceWorkflows(workspace, industry);
    return `I would set up ${suggestions[0].name}, ${suggestions[1].name}, and ${suggestions[2].name}. These match your current ${workspace.leads.length} leads and ${activeWorkflows.length} active workflows.`;
  }

  if (lower.includes("pipeline") || lower.includes("value") || lower.includes("stage")) {
    return `Your live pipeline has ${workspace.leads.length} leads worth ${formatWorkspaceCurrency(analysis.pipelineValue)}. The busiest stage is ${analysis.crowdedStage?.[0] ?? "not set yet"}, and ${analysis.hottest} leads are Hot, so focus follow-ups there first.`;
  }

  if (lower.includes("role") || lower.includes("permission")) {
    const roleNames = workspace.roles.map((role) => role.name).join(", ");
    return roleNames
      ? `You have ${workspace.roles.length} custom role${workspace.roles.length === 1 ? "" : "s"}: ${roleNames}. Test the most restricted role next so locked tabs and exports match your real team design.`
      : "No roles are configured yet. Create a Sales User role first, then test the workspace as that role to confirm restricted tabs are locked.";
  }

  if (lower.includes("whatsapp")) {
    if (!topLead) return "Add a lead first and I can draft a WhatsApp follow-up from its actual stage and need.";
    return `Hi ${topLead.name}, thanks for your interest in ${topLead.need || industry.name}. I can walk you through the next step and answer questions today. Would a quick call work?`;
  }

  return `Your ${workspace.workspaceName} currently has ${workspace.leads.length} leads, ${activeWorkflows.length} active workflows, ${workspace.roles.length} roles, and ${workspace.tasks.filter((task) => task.status !== "Done").length} open tasks. The next best action is ${topLead ? `follow up with ${topLead.name}` : "add your first lead"} and connect that action to a workflow.`;
}

export function createFollowUpPlan(workspace: WorkspaceState) {
  return workspace.leads
    .slice()
    .sort((a, b) => (b.aiScore ?? getLeadScoreResult(b).score) - (a.aiScore ?? getLeadScoreResult(a).score))
    .slice(0, 3)
    .map((lead, index) => ({
      lead,
      title: `${index + 1}. Follow up with ${lead.name}`,
      priority: index === 0 ? "High" : "Medium",
      due: index === 0 ? "Today" : "Tomorrow",
    }));
}

export function buildWorkspaceSummary(workspace: WorkspaceState, industry: DemoIndustry) {
  const hot = workspace.leads.filter((lead) => lead.temperature === "Hot").length;
  const warm = workspace.leads.filter((lead) => lead.temperature === "Warm").length;
  const cold = workspace.leads.filter((lead) => lead.temperature === "Cold").length;
  const activeWorkflows = workspace.workflows.filter((workflow) => workflow.isActive);
  const pipeline = workspace.pipelines[0];
  const nextSteps = suggestWorkspaceWorkflows(workspace, industry)
    .map((item) => item.reason)
    .slice(0, 3);

  return {
    title: "YOUR hnxCrm CRM SUMMARY",
    industry: industry.name,
    builtOn: new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short" }).format(new Date()),
    built: [
      `${workspace.leads.length} leads added (${hot} Hot, ${warm} Warm, ${cold} Cold)`,
      `${activeWorkflows.length} workflow automations active`,
      `${workspace.roles.length} custom roles created`,
      `${workspace.customFields.length} custom fields added`,
      `${pipeline ? `1 pipeline configured (${pipeline.stages.length} stages)` : "No pipeline configured"}`,
    ],
    workflows: activeWorkflows.map((workflow) => `${workflow.name} -> ${workflow.action.type.replaceAll("_", " ")}`),
    roles: workspace.roles.map((role) => `${role.name} - ${role.description}`),
    aiQueries: workspace.stats.aiQueriesAsked,
    nextSteps,
  };
}

export function buildWorkspaceSummaryHtml(workspace: WorkspaceState, industry: DemoIndustry) {
  const summary = buildWorkspaceSummary(workspace, industry);
  const list = (items: string[]) => items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>${escapeHtml(workspace.workspaceName)} Summary</title>
    <style>
      body { font-family: Inter, Arial, sans-serif; background: #f8fbff; color: #0f172a; margin: 0; padding: 40px; }
      main { max-width: 860px; margin: 0 auto; background: #fff; border: 1px solid #d7e1f2; border-radius: 24px; padding: 34px; box-shadow: 0 24px 80px rgba(15,23,42,.10); }
      h1 { color: #145cb7; letter-spacing: .08em; font-size: 16px; }
      h2 { font-size: 30px; margin: 8px 0 0; }
      section { margin-top: 28px; }
      h3 { font-size: 15px; color: #145cb7; text-transform: uppercase; letter-spacing: .12em; }
      li { margin: 8px 0; line-height: 1.55; }
      .cta { margin-top: 30px; padding: 20px; border-radius: 18px; background: #eff6ff; font-weight: 800; color: #145cb7; }
    </style>
  </head>
  <body>
    <main>
      <h1>${summary.title}</h1>
      <h2>${escapeHtml(workspace.workspaceName)}</h2>
      <p>Industry: ${escapeHtml(summary.industry)} · Session built on: ${escapeHtml(summary.builtOn)}</p>
      <section><h3>What You Built</h3><ul>${list(summary.built)}</ul></section>
      <section><h3>Your Workflows</h3><ol>${list(summary.workflows.length ? summary.workflows : ["No active workflows yet."])}</ol></section>
      <section><h3>Your Roles</h3><ul>${list(summary.roles.length ? summary.roles : ["No custom roles yet."])}</ul></section>
      <section><h3>Recommended Next Steps</h3><ul>${list(summary.nextSteps)}</ul></section>
      <p class="cta">Get this built for your real business -> WhatsApp hnxCrm or book a call.</p>
    </main>
  </body>
</html>`;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
