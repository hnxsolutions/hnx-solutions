"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import * as Lucide from "lucide-react";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import { SolutionCategoryTabs } from "@/components/solutions/shared/SolutionCategoryTabs";
import type { SolutionPageData } from "@/data/solutions/types";

type LucideIcon = Lucide.LucideIcon;
type CardCopy = { title: string; text: string; tag: string };
type MetricItem = { label: string; value: string; note: string };
type FlowItem = { icon: LucideIcon; title: string; text: string };
type SectionContent = { title: string; intro: string; cards: CardCopy[]; metrics: MetricItem[]; flow: FlowItem[]; implementationTitle: string; implementationText: string; implementationPoints: string[]; visualTitle: string; visualRows: string[] };
type Seed = { focus: string; problem: string; automation: string; control: string; integration: string; fallback: string; metric: string; visualRows: string[] };

const MODULE_NAME = "AI Sales Agent";
const SIDEBAR_TITLE = "AI Sales Agent";
const SIDEBAR_SUBTITLE = "24/7 lead response";

function tabSolution(slug: string, label: string, href: string, icon: SolutionPageData["icon"]): SolutionPageData {
  return { slug, label, href, icon, eyebrow: label, headline: label, description: `${label} solution by HNX.`, problem: "", solution: "", impact: "", stats: [], problems: [], flow: [], modules: [], process: [], useCases: [], preview: { title: label, subtitle: "", metrics: [], rows: [] }, ctaTitle: label, ctaText: "" };
}

const aiAutomationSolutions: readonly SolutionPageData[] = [
  tabSolution("automation-strategy", "Automation Strategy", "/solutions/ai-automation/automation-strategy", "Sparkles"),
  tabSolution("workflow-automation", "Workflow Automation", "/solutions/ai-automation/workflow-automation", "Workflow"),
  tabSolution("ai-sales-agent", "AI Sales Agent", "/solutions/ai-automation/ai-sales-agent", "Bot"),
  tabSolution("ai-support-agent", "AI Support Agent", "/solutions/ai-automation/ai-support-agent", "Headphones"),
  tabSolution("whatsapp-email-automation", "WhatsApp / Email Automation", "/solutions/ai-automation/whatsapp-email-automation", "MessageCircle"),
  tabSolution("lead-scoring-crm-automation", "Lead Scoring & CRM Automation", "/solutions/ai-automation/lead-scoring-crm-automation", "BarChart3"),
  tabSolution("document-report-automation", "Document / Report Automation", "/solutions/ai-automation/document-report-automation", "FileText"),
  tabSolution("automation-analytics-improvements", "Automation Analytics & Improvements", "/solutions/ai-automation/automation-analytics-improvements", "Activity"),
];

const knowledgeTabs = [
  { id: "overview", label: "Overview", icon: Lucide.Home },
  { id: "sales-response-gap", label: "Sales Response Gap", icon: Lucide.Clock3 },
  { id: "lead-capture-flow", label: "Lead Capture Flow", icon: Lucide.MousePointerClick },
  { id: "qualification-logic", label: "Qualification Logic", icon: Lucide.SearchCheck },
  { id: "conversation-scripts", label: "Conversation Scripts", icon: Lucide.MessageCircle },
  { id: "crm-handoff", label: "CRM Handoff", icon: Lucide.Network },
  { id: "follow-up-sequences", label: "Follow-up Sequences", icon: Lucide.Send },
  { id: "human-takeover", label: "Human Takeover", icon: Lucide.Users },
  { id: "sales-analytics", label: "Sales Analytics", icon: Lucide.BarChart3 },
  { id: "final-cta", label: "Final CTA", icon: Lucide.ArrowRight },
] as const;

type TabId = (typeof knowledgeTabs)[number]["id"];
const cardIcons: LucideIcon[] = [Lucide.Bot, Lucide.Settings, Lucide.ShieldCheck, Lucide.Network, Lucide.Users, Lucide.BarChart3];
const sectionSeeds: Record<TabId, Seed> = {
  "overview": { focus: "AI sales agent operating model", problem: "Leads arrive after hours, from multiple pages, and with different levels of intent.", automation: "The agent greets, explains, qualifies, recommends next action, and captures structured sales data.", control: "Sales leaders can tune scripts, qualification questions, routing, and human takeover rules.", integration: "Website forms, CRM, calendars, WhatsApp, email, and analytics can be connected as needed.", fallback: "High-value, confused, or sensitive conversations move to sales teams with transcript context.", metric: "Lead quality, response time, booking rate, and follow-up outcomes are measured.", visualRows: ["Overview trigger or input", "AI and rule decision layer", "Admin control and human fallback", "Integration and data update", "Metrics and improvement review"] },
  "sales-response-gap": { focus: "slow or missed lead response", problem: "Potential buyers often ask questions when the team is unavailable or busy.", automation: "The agent gives immediate, controlled answers while collecting the details sales needs.", control: "Managers decide what the agent may say about pricing, fit, timelines, and next steps.", integration: "Lead channels connect so website, WhatsApp, and CRM activity does not scatter.", fallback: "A human takes over when the lead is enterprise, urgent, angry, or outside scripted scope.", metric: "Missed chats, first response time, and consultation conversion show the gap closing.", visualRows: ["Sales Response Gap trigger or input", "AI and rule decision layer", "Admin control and human fallback", "Integration and data update", "Metrics and improvement review"] },
  "lead-capture-flow": { focus: "structured lead capture", problem: "Lead forms often collect too little context or ask for too much too early.", automation: "The agent captures name, contact, company, need, budget range, timeline, source, and consent conversationally.", control: "Admins mark required fields and decide when partial leads should still enter CRM.", integration: "Captured fields sync to CRM, sheets, email alerts, or booking tools.", fallback: "If the lead refuses details, the agent can still offer a helpful next step or human route.", metric: "Capture completion, drop-off, and field quality are tracked.", visualRows: ["Lead Capture Flow trigger or input", "AI and rule decision layer", "Admin control and human fallback", "Integration and data update", "Metrics and improvement review"] },
  "qualification-logic": { focus: "lead fit and priority scoring", problem: "Sales teams waste time when every inquiry appears equally urgent.", automation: "The agent checks need, service fit, location, timeline, budget, authority, and urgency before routing.", control: "Scoring thresholds decide hot, warm, nurture, or disqualified paths.", integration: "Scores can sync to CRM stages, tags, owners, and task priority.", fallback: "Unclear fit can be sent to a human for quick review instead of rejection.", metric: "Qualification accuracy and booked-call quality are reviewed after launch.", visualRows: ["Qualification Logic trigger or input", "AI and rule decision layer", "Admin control and human fallback", "Integration and data update", "Metrics and improvement review"] },
  "conversation-scripts": { focus: "controlled sales conversations", problem: "AI should not invent offers, pricing, timelines, or commitments.", automation: "HNX builds scripts from approved services, FAQs, proof points, objections, policies, and booking logic.", control: "Admins update approved answers, banned topics, escalation phrases, and tone rules.", integration: "Scripts can draw from website content, CRM data, knowledge base, and pricing guidance.", fallback: "The agent hands off when a question needs negotiation or custom commercial judgment.", metric: "Script gaps, unanswered questions, and escalation reasons improve the knowledge base.", visualRows: ["Conversation Scripts trigger or input", "AI and rule decision layer", "Admin control and human fallback", "Integration and data update", "Metrics and improvement review"] },
  "crm-handoff": { focus: "CRM routing and owner assignment", problem: "A good chat is wasted if sales teams never receive clean context.", automation: "The agent creates or updates lead records with transcript, fields, score, source, and recommended next action.", control: "Routing rules assign owner by service, geography, value, language, or availability.", integration: "CRM, calendars, email alerts, and dashboards receive the same structured record.", fallback: "Sales can take over with context instead of asking the lead to repeat everything.", metric: "Handoff speed, owner response, and stage movement become visible.", visualRows: ["CRM Handoff trigger or input", "AI and rule decision layer", "Admin control and human fallback", "Integration and data update", "Metrics and improvement review"] },
  "follow-up-sequences": { focus: "responsible sales follow-up", problem: "Many leads go cold because follow-up depends on memory.", automation: "The agent or automation schedules polite reminders based on inquiry type, quote status, booking intent, and consent.", control: "Managers control frequency, templates, stop conditions, and owner notifications.", integration: "Email, WhatsApp, CRM tasks, and calendar reminders coordinate around the same lead state.", fallback: "Human sales reps handle negotiation, objections, and high-value follow-up.", metric: "Reply rate, meeting booked, stale lead recovery, and opt-out rate are tracked.", visualRows: ["Follow-up Sequences trigger or input", "AI and rule decision layer", "Admin control and human fallback", "Integration and data update", "Metrics and improvement review"] },
  "human-takeover": { focus: "safe sales escalation", problem: "AI should know when to stop and bring in a person.", automation: "Handoff rules trigger for high deal value, complex scope, angry tone, pricing negotiation, or low confidence.", control: "Sales reps receive transcript, profile, score, source, and suggested next step.", integration: "CRM owner, Slack or email alerts, and calendar booking can be connected.", fallback: "The lead sees a clear handover message instead of a broken conversation.", metric: "Escalation rate and sales acceptance show whether the handoff rules are healthy.", visualRows: ["Human Takeover trigger or input", "AI and rule decision layer", "Admin control and human fallback", "Integration and data update", "Metrics and improvement review"] },
  "sales-analytics": { focus: "sales agent performance tracking", problem: "Without analytics, the agent can sound active while pipeline quality remains unclear.", automation: "HNX tracks conversation starts, captured leads, qualification score, booking rate, handoff rate, and follow-up outcomes.", control: "Dashboards help leaders tune scripts, sources, scoring rules, and sales response SLAs.", integration: "CRM revenue, channel source, and campaign data can connect to agent analytics.", fallback: "Human review flags bad answers, low-quality leads, and missed escalation moments.", metric: "Metrics guide whether to improve scripts, routes, offers, or source targeting.", visualRows: ["Sales Analytics trigger or input", "AI and rule decision layer", "Admin control and human fallback", "Integration and data update", "Metrics and improvement review"] },
  "final-cta": { focus: "AI sales agent delivery", problem: "A sales agent should be launched as part of the sales system, not as a novelty widget.", automation: "HNX plans scripts, qualification, CRM routing, follow-ups, takeover, analytics, and improvement cycles.", control: "Sales teams retain control over promises, pricing, priority, and ownership.", integration: "The build connects to the tools required to move leads forward.", fallback: "Human fallback is built into the launch plan.", metric: "Performance data guides version updates after real conversations.", visualRows: ["Final CTA trigger or input", "AI and rule decision layer", "Admin control and human fallback", "Integration and data update", "Metrics and improvement review"] },
};

const preview = {
  label: "AI Sales Console",
  eyebrow: "Lead capture to CRM handoff",
  headline: "Respond, qualify, and route sales leads around the clock.",
  text: "The agent explains services, answers buying questions, captures details, books calls, updates CRM, and escalates qualified conversations to humans.",
  pills: ["Conversation console", "Qualification funnel", "CRM handoff", "Follow-up queue"],
  stats: [["24/7", "Response window"], ["60s", "Target first reply"], ["8", "Qualification fields"]],
  rows: ["Lead source captured", "Intent and budget checked", "Consultation suggested", "CRM owner assigned", "Follow-up sequence scheduled"],
  outcome: "Outcome: faster lead response with cleaner sales handoff",
};

function makeSection(label: string, seed: Seed): SectionContent {
  return {
    title: `${label}: ${seed.focus} with controls, data, and human fallback.`,
    intro: `${MODULE_NAME} uses this chapter to turn ${seed.focus} into a practical business system. HNX maps the current delay, defines AI and rule-based responsibilities, connects the right tools, keeps people in control, and measures whether the automation improves real work.`,
    cards: [
      { title: `${label} operating reality`, text: seed.problem, tag: "Problem" },
      { title: `${label} automation logic`, text: seed.automation, tag: "Logic" },
      { title: `${label} business control`, text: seed.control, tag: "Control" },
      { title: `${label} integration layer`, text: seed.integration, tag: "Integration" },
      { title: `${label} human fallback`, text: seed.fallback, tag: "Fallback" },
      { title: `${label} measurement loop`, text: seed.metric, tag: "Metrics" },
    ],
    metrics: [
      { label: "Manual load", value: "Mapped", note: `${label} has a before-and-after baseline.` },
      { label: "Control", value: "Visible", note: "Owners, statuses, permissions, and override paths are clear." },
      { label: "Exceptions", value: "Tracked", note: "Failed, unclear, and escalated cases become reviewable." },
      { label: "Improvement", value: "Ongoing", note: "Launch data guides the next automation refinement." },
    ],
    flow: [
      { icon: Lucide.SearchCheck, title: "Discover", text: `HNX maps ${seed.focus}, current owners, work volume, and delay points before automation starts.` },
      { icon: Lucide.Settings, title: "Apply rules", text: "The system checks data, policy, intent, priority, eligibility, and the correct next action." },
      { icon: Lucide.Users, title: "Route safely", text: "Automation completes the safe steps and routes unclear, high-value, or sensitive cases to people." },
      { icon: Lucide.BarChart3, title: "Measure", text: "Dashboards show outcomes, time saved, exceptions, quality, and the next improvement opportunity." },
    ],
    implementationTitle: `HNX builds ${label.toLowerCase()} as controlled automation, not blind activity.`,
    implementationText: `This implementation defines how ${seed.focus} should move through triggers, AI support, deterministic rules, connected systems, human fallback, and reporting. The goal is automation the business can explain, manage, and improve.`,
    implementationPoints: [
      `Document the current ${seed.focus} process and where manual delay appears.`,
      "Define exactly what AI handles, what rules handle, and when humans take over.",
      "Connect only the systems needed for reliable execution, audit, and reporting.",
      "Review launch metrics and exception patterns before expanding the automation.",
    ],
    visualTitle: `${label} implementation map`,
    visualRows: seed.visualRows,
  };
}

const sections = Object.fromEntries(knowledgeTabs.map((tab) => [tab.id, makeSection(tab.label, sectionSeeds[tab.id])])) as Record<TabId, SectionContent>;

function cx(...classes: Array<string | false | null | undefined>) { return classes.filter(Boolean).join(" "); }
function getTabFromHash(hash: string): TabId | null { const id = hash.replace("#", ""); return knowledgeTabs.find((item) => item.id === id)?.id ?? null; }
function scrollToKnowledge() { window.requestAnimationFrame(() => { const element = document.getElementById("knowledge-content"); if (!element) return; const stickyOffset = window.innerWidth >= 1024 ? 190 : 170; const top = element.getBoundingClientRect().top + window.scrollY - stickyOffset; window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" }); }); }
function IconShell({ icon: Icon, className }: { icon: LucideIcon; className?: string }) { return <span className={cx("grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#eef6ff] text-[#2378ff] ring-1 ring-[#bfd7ff]", className)}><Icon className="h-5 w-5" aria-hidden="true" /></span>; }

function MobileTabs({ activeTab, onTabChange }: { activeTab: TabId; onTabChange: (tab: TabId) => void }) {
  return <div className="sticky top-[136px] z-30 border-b border-[#d7e1f2] bg-white/95 px-4 py-3 shadow-sm backdrop-blur-xl lg:hidden"><div className="flex gap-2 overflow-x-auto pb-1">{knowledgeTabs.map((item) => { const Icon = item.icon; const isActive = activeTab === item.id; return <button key={item.id} type="button" onClick={() => onTabChange(item.id)} className={cx("flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-extrabold transition", isActive ? "border-[#9fc6e6] bg-[#eef6ff] text-[#145cb7]" : "border-[#d7e1f2] bg-white text-[#334766]")}><Icon className="h-4 w-4" aria-hidden="true" />{item.label}</button>; })}</div></div>;
}

function Breadcrumb({ activeLabel }: { activeLabel: string }) {
  return <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-3 text-sm font-extrabold"><Link href="/solutions" className="text-[#0891b2] transition hover:text-[#145cb7]">Solutions</Link><span className="text-[#9aa7bd]">/</span><Link href="/solutions/ai-automation/automation-strategy" className="text-[#0891b2] transition hover:text-[#145cb7]">AI Automation</Link><span className="text-[#9aa7bd]">/</span><span className="text-[#334766]">{MODULE_NAME}</span><span className="text-[#9aa7bd]">/</span><span className="text-[#0f214f]">{activeLabel}</span></nav>;
}

function ChapterShell({ activeLabel, title, intro, children }: { activeLabel: string; title: string; intro: string; children: ReactNode }) {
  return <section className="border-b border-[#d7e1f2] bg-white px-5 py-10 sm:px-6 lg:px-8 xl:px-10 2xl:px-12"><Breadcrumb activeLabel={activeLabel} /><div className="max-w-5xl"><p className="text-xs font-black uppercase tracking-[0.22em] text-[#7c3aed]">{MODULE_NAME}</p><h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-[-0.06em] text-[#0f214f] sm:text-6xl">{title}</h1><p className="mt-5 max-w-4xl text-base font-semibold leading-8 text-[#52627d] sm:text-lg">{intro}</p></div><div className="mt-10 space-y-8">{children}</div></section>;
}

function KnowledgeCard({ item, index }: { item: CardCopy; index: number }) { const Icon = cardIcons[index % cardIcons.length]; return <div className="rounded-[24px] border border-[#d7e1f2] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.045)]"><div className="flex items-start gap-4"><IconShell icon={Icon} /><div><div className="flex flex-wrap items-center gap-2"><h3 className="text-lg font-black tracking-[-0.02em] text-[#0f214f]">{item.title}</h3><span className="rounded-full bg-[#f3efff] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#6d28d9]">{item.tag}</span></div><p className="mt-2 text-sm font-semibold leading-6 text-[#52627d]">{item.text}</p></div></div></div>; }
function MetricCard({ metric }: { metric: MetricItem }) { return <div className="rounded-[22px] border border-[#d7e1f2] bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.045)]"><p className="text-xs font-black uppercase tracking-[0.15em] text-[#66728f]">{metric.label}</p><p className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#0f214f]">{metric.value}</p><p className="mt-2 text-sm font-semibold leading-6 text-[#52627d]">{metric.note}</p><svg viewBox="0 0 220 36" className="mt-3 h-9 w-full text-[#7c3aed]" aria-hidden="true"><path d="M2 28 L18 24 L34 27 L50 22 L66 25 L82 17 L98 18 L114 14 L130 17 L146 10 L162 13 L178 8 L194 12 L218 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" /></svg></div>; }

function PreviewWindow() {
  return <div className="overflow-hidden rounded-[28px] border border-[#d7e1f2] bg-white shadow-[0_20px_55px_rgba(15,23,42,0.08)]"><div className="flex items-center justify-between border-b border-[#d7e1f2] bg-[#f8fbff] px-5 py-4"><div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-400" /><span className="h-3 w-3 rounded-full bg-green-400" /></div><p className="text-xs font-black text-[#66728f]">{preview.label}</p></div><div className="grid gap-5 p-5 lg:grid-cols-[0.95fr_1.05fr]"><div className="rounded-[24px] bg-gradient-to-br from-[#0f214f] via-[#6d28d9] to-[#19b7c5] p-6 text-white"><p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100">{preview.eyebrow}</p><h3 className="mt-4 text-4xl font-black tracking-[-0.05em]">{preview.headline}</h3><p className="mt-4 text-sm font-semibold leading-7 text-blue-100">{preview.text}</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{preview.pills.map((item) => <p key={item} className="rounded-xl bg-white/12 px-4 py-3 text-xs font-black">{item}</p>)}</div></div><div className="space-y-4"><div className="grid gap-4 sm:grid-cols-3">{preview.stats.map(([value, label]) => <div key={label} className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4"><p className="text-2xl font-black text-[#6d28d9]">{value}</p><p className="mt-1 text-xs font-bold text-[#66728f]">{label}</p></div>)}</div><div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4"><p className="text-sm font-black text-[#0f214f]">Control layers</p><div className="mt-4 space-y-2">{preview.rows.map((item) => <div key={item} className="flex items-center justify-between rounded-xl bg-white px-4 py-3"><span className="text-xs font-black text-[#0f214f]">{item}</span><Lucide.CheckCircle2 className="h-4 w-4 text-emerald-600" /></div>)}</div></div><div className="rounded-2xl border border-[#c4b5fd] bg-[#f3efff] px-4 py-3"><p className="text-sm font-black text-[#6d28d9]">{preview.outcome}</p></div></div></div></div>;
}

function FlowVisual({ items }: { items: FlowItem[] }) { return <div className="overflow-x-auto rounded-[28px] border border-[#d7e1f2] bg-[#f8fbff] p-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"><div className="flex min-w-max items-stretch gap-4">{items.map((item, index) => { const Icon = item.icon; return <div key={item.title} className="relative flex w-[235px] shrink-0"><div className="flex min-h-[245px] w-full flex-col rounded-[24px] border border-[#d7e1f2] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.045)]"><div className="flex items-start justify-between gap-4"><IconShell icon={Icon} className="h-12 w-12" /><span className="rounded-full bg-[#f3efff] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#6d28d9]">Step {index + 1}</span></div><p className="mt-5 text-xl font-black tracking-[-0.03em] text-[#0f214f]">{item.title}</p><p className="mt-3 text-sm font-semibold leading-6 text-[#52627d]">{item.text}</p></div>{index < items.length - 1 ? <span className="absolute -right-6 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#bfd7ff] bg-white text-[#2378ff] shadow-[0_10px_20px_rgba(15,23,42,0.08)] md:flex"><Lucide.ArrowRight className="h-4 w-4" /></span> : null}</div>; })}</div></div>; }
function ImplementationMap({ title, rows }: { title: string; rows: string[] }) { return <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.04)]"><div className="flex items-center justify-between gap-4"><p className="text-lg font-black text-[#0f214f]">{title}</p><span className="rounded-full bg-[#eef6ff] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#145cb7]">HNX Map</span></div><div className="mt-5 space-y-3">{rows.map((row, index) => <div key={row} className="flex items-center gap-3 rounded-2xl bg-[#f8fbff] p-4"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-sm font-black text-[#6d28d9] ring-1 ring-[#c4b5fd]">{index + 1}</span><p className="text-sm font-black text-[#0f214f]">{row}</p></div>)}</div></div>; }
function ChapterInsightPanel({ section }: { section: SectionContent }) { return <div className="grid gap-5 rounded-[28px] border border-[#d7e1f2] bg-[#f8fbff] p-6 lg:grid-cols-[1fr_1fr]"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-[#6d28d9]">HNX Build Lens</p><h2 className="mt-3 text-2xl font-black tracking-[-0.035em] text-[#0f214f]">{section.implementationTitle}</h2><p className="mt-4 text-sm font-semibold leading-7 text-[#52627d]">{section.implementationText}</p></div><div className="grid gap-3 sm:grid-cols-2">{section.visualRows.slice(0, 4).map((row, index) => <div key={row} className="rounded-2xl border border-[#d7e1f2] bg-white p-4 shadow-[0_12px_26px_rgba(15,23,42,0.035)]"><p className="text-xs font-black uppercase tracking-[0.14em] text-[#145cb7]">Checkpoint {index + 1}</p><p className="mt-2 text-sm font-black leading-6 text-[#0f214f]">{row}</p></div>)}</div></div>; }
function SplitPanel({ title, text, points, visual }: { title: string; text: string; points: string[]; visual: ReactNode }) { return <div className="grid gap-6 rounded-[28px] border border-[#d7e1f2] bg-[#f8fbff] p-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><h2 className="text-2xl font-black tracking-[-0.035em] text-[#0f214f]">{title}</h2><p className="mt-4 text-sm font-semibold leading-7 text-[#52627d]">{text}</p><div className="mt-5 space-y-3">{points.map((point) => <div key={point} className="flex items-start gap-3"><Lucide.CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" /><p className="text-sm font-semibold leading-6 text-[#465374]">{point}</p></div>)}</div></div>{visual}</div>; }

function SectionFooter({ activeTab, onTabChange }: { activeTab: TabId; onTabChange: (tab: TabId) => void }) { const activeIndex = knowledgeTabs.findIndex((item) => item.id === activeTab); const nextTab = knowledgeTabs[activeIndex + 1]; if (!nextTab) return <div className="flex flex-col gap-3 rounded-[28px] bg-[#075edb] p-6 text-white sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xl font-black">Ready to build this AI automation system?</p><p className="mt-2 text-sm font-semibold text-blue-100">Plan the workflow, controls, integrations, analytics, and human fallback before launch.</p></div><Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-[#075edb]">Book Sales Agent Call <Lucide.ArrowRight className="h-4 w-4" /></Link></div>; return <div className="flex justify-end"><button type="button" onClick={() => onTabChange(nextTab.id)} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c8d7ea] bg-white px-6 py-3 text-sm font-extrabold text-[#0f214f] shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition hover:border-[#145cb7] hover:text-[#145cb7]">Continue to {nextTab.label} <Lucide.ArrowRight className="h-4 w-4" /></button></div>; }
function SectionRenderer({ activeTab, onTabChange }: { activeTab: TabId; onTabChange: (tab: TabId) => void }) { const section = sections[activeTab]; const activeLabel = knowledgeTabs.find((item) => item.id === activeTab)?.label ?? "Overview"; return <ChapterShell activeLabel={activeLabel} title={section.title} intro={section.intro}>{activeTab === "overview" ? <PreviewWindow /> : null}<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{section.cards.map((item, index) => <KnowledgeCard key={item.title} item={item} index={index} />)}</div><ChapterInsightPanel section={section} /><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{section.metrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}</div><FlowVisual items={section.flow} /><SplitPanel title={section.implementationTitle} text={section.implementationText} points={section.implementationPoints} visual={<ImplementationMap title={section.visualTitle} rows={section.visualRows} />} /><SectionFooter activeTab={activeTab} onTabChange={onTabChange} /></ChapterShell>; }

export default function AiSalesAgentPage() {
  const [activeTab, setActiveTab] = useState<TabId>(() => { if (typeof window === "undefined") return "overview"; return getTabFromHash(window.location.hash) ?? "overview"; });
  const activeLabel = useMemo(() => knowledgeTabs.find((item) => item.id === activeTab)?.label ?? "Overview", [activeTab]);
  const handleTabChange = (tab: TabId) => { setActiveTab(tab); window.history.replaceState(null, "", `#${tab}`); scrollToKnowledge(); };
  return <main className="min-h-screen bg-[#f8fbff] text-[#0f214f]"><SolutionCategoryTabs category="ai-automation" solutions={aiAutomationSolutions} /><MobileTabs activeTab={activeTab} onTabChange={handleTabChange} /><div className="mx-auto flex max-w-[min(92vw,1440px)] pt-14"><SolutionSidebar<TabId> title={SIDEBAR_TITLE} subtitle={SIDEBAR_SUBTITLE} icon={Lucide.Bot} items={knowledgeTabs} activeTab={activeTab} onTabChange={handleTabChange} ctaTitle="Plan Sales Agent" ctaText="Capture, qualify, route, follow up, and measure leads with safe human takeover." ctaButtonText="Book Sales Agent Call" ctaHref="/contact" /><div id="knowledge-content" className="min-w-0 flex-1"><div className="mb-5 rounded-2xl border border-[#d7e1f2] bg-white px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)] lg:hidden"><p className="text-xs font-bold text-[#66728f]">{MODULE_NAME}</p><p className="text-sm font-black text-[#0f214f]">{activeLabel}</p></div><SectionRenderer activeTab={activeTab} onTabChange={handleTabChange} /></div></div></main>;
}
