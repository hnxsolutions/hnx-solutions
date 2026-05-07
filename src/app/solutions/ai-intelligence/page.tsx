"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  Bot,
  Brain,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Clock3,
  Database,
  FileText,
  Flag,
  Gauge,
  Grid2X2,
  Lightbulb,
  LineChart,
  Mail,
  MessageCircle,
  Network,
  Phone,
  Radio,
  RefreshCw,
  Send,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  UserRound,
  Users,
  WandSparkles,
  Workflow,
  Zap,
} from "lucide-react";

type TabId =
  | "overview"
  | "lead-scoring"
  | "predictive-insights"
  | "next-best-actions"
  | "smart-messaging"
  | "opportunity-signals"
  | "ai-copilot"
  | "final-cta";

type Tone = "blue" | "cyan" | "green" | "purple" | "orange" | "red" | "slate" | "navy";

type NavItem = {
  id: TabId;
  label: string;
  icon: LucideIcon;
  helper: string;
};

const navItems: NavItem[] = [
  { id: "overview", label: "Overview", icon: Grid2X2, helper: "AI Intelligence overview" },
  { id: "lead-scoring", label: "Lead Scoring", icon: Target, helper: "Score and route best leads" },
  { id: "predictive-insights", label: "Predictive Insights", icon: LineChart, helper: "Forecast, risk, and growth" },
  { id: "next-best-actions", label: "Next-Best Actions", icon: WandSparkles, helper: "AI-recommended actions" },
  { id: "smart-messaging", label: "Smart Messaging", icon: MessageCircle, helper: "Drafts, replies, and outreach" },
  { id: "opportunity-signals", label: "Opportunity Signals", icon: Radio, helper: "Revenue and account signals" },
  { id: "ai-copilot", label: "AI Copilot", icon: Bot, helper: "Ask, summarize, and act" },
  { id: "final-cta", label: "Final CTA", icon: Flag, helper: "Turn AI into execution" },
];

const tone = {
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  cyan: "bg-cyan-50 text-cyan-700 border-cyan-100",
  green: "bg-emerald-50 text-emerald-700 border-emerald-100",
  purple: "bg-violet-50 text-violet-700 border-violet-100",
  orange: "bg-orange-50 text-orange-700 border-orange-100",
  red: "bg-rose-50 text-rose-700 border-rose-100",
  slate: "bg-slate-100 text-slate-700 border-slate-200",
  navy: "bg-[#eaf3ff] text-[#0f3c87] border-[#cfe1ff]",
};

const overviewCapabilities = [
  { icon: Target, title: "Smarter Prioritization", text: "Focus on the leads and deals most likely to convert.", tone: "blue" as Tone },
  { icon: TrendingUp, title: "Predict with Confidence", text: "AI models forecast outcomes so you can plan ahead.", tone: "cyan" as Tone },
  { icon: Zap, title: "Take the Right Actions", text: "Get AI-recommended actions tailored to every record.", tone: "purple" as Tone },
  { icon: MessageCircle, title: "Engage Intelligently", text: "Personalize communications that drive responses.", tone: "blue" as Tone },
];

const overviewMetricCards = [
  { label: "Leads Scored", value: "1,248", delta: "+18%", tone: "blue" as Tone },
  { label: "High-Intent Leads", value: "312", delta: "+21%", tone: "green" as Tone },
  { label: "Predicted Revenue", value: "$4.82M", delta: "+16%", tone: "cyan" as Tone },
  { label: "Accuracy", value: "87%", delta: "+9%", tone: "purple" as Tone },
];

const topAiLeads = [
  ["Acme Corporation", "96"],
  ["BluePeak Solutions", "92"],
  ["Vertex Analytics", "89"],
  ["Northbridge Group", "87"],
  ["Summit Technologies", "85"],
];

const scoredLeads = [
  ["Acme Corporation", "Lisa Patel", "92", "Hot", "78%", "Software", "James Lee"],
  ["BrightPath Inc.", "Michael Chen", "86", "Hot", "65%", "Technology", "Sarah Kim"],
  ["Northwind Traders", "Daniel Murray", "72", "Warm", "45%", "Manufacturing", "Alex Morgan"],
  ["Summit Partners", "Rachel Green", "58", "Warm", "32%", "Consulting", "Taylor Brooks"],
  ["BlueStone Co.", "Kevin Johnson", "34", "Cold", "16%", "Real Estate", "Jordan Ellis"],
];

const predictiveCompanies = [
  ["Umbrella Corp", "Enterprise Plan • $250K", "82%", "High", "green"],
  ["Stark Industries", "Pro Plan • $185K", "64%", "Medium", "blue"],
  ["Wayne Enterprises", "Enterprise Plan • $420K", "41%", "Medium", "orange"],
  ["Initech", "Pro Plan • $95K", "18%", "Low", "red"],
];

const churnCompanies = [
  ["Oscorp", "Enterprise Plan", "92%", "High", "red"],
  ["Hooli", "Pro Plan", "74%", "High", "red"],
  ["Massive Dynamic", "Enterprise Plan", "45%", "Medium", "orange"],
  ["Globex Corporation", "Pro Plan", "28%", "Low", "green"],
];

const actionRows = [
  ["Acme Corporation", "Enterprise Plan • $120,000", "92", "High", "Call today", "High intent signal detected from pricing page visits."],
  ["Stripe", "Growth Plan • $68,500", "78", "High", "Send proposal reminder", "Proposal viewed 3x in the last 2 days."],
  ["Solaris Inc.", "Professional Plan • $35,000", "48", "Medium", "Schedule demo", "Lead engaged with key features and case studies."],
  ["Vertex Systems", "Trial • $0", "26", "Low", "Escalate approval", "Champion requested manager involvement."],
  ["Lumen Analytics", "Enterprise Plan • $210,000", "88", "High", "Add to nurture sequence", "No activity in 10 days. Re-engage with content."],
];

const conversations = [
  ["Rahul Mehta", "Hi, we’re looking to streamline our sales...", "10:24 AM", "whatsapp"],
  ["Priya Nair", "Can you share more details on pricing?", "Yesterday", "email"],
  ["Ankit Verma", "We’re evaluating a few CRM options.", "Yesterday", "linkedin"],
  ["Sneha Iyer", "Thanks! Let’s set up a quick call.", "May 12", "chat"],
];

const messagePerformance = [
  ["Open Rate Uplift", "28%", "+8.6%"],
  ["Reply Rate", "18.7%", "+4.3%"],
  ["Sequence Conversion", "12.4%", "+3.1%"],
];

const copilotPrompts = [
  "Show at-risk deals",
  "Summarize today’s pipeline",
  "Which leads should I call first?",
];

const riskDealRows = [
  ["Acme Corp – Expansion", "$120,000", "Proposal", "High"],
  ["Northstar – New Logo", "$85,000", "Negotiation", "High"],
  ["Summit Co. – Renewal", "$60,000", "Proposal", "Medium"],
  ["Brighton Ltd. – Add-on", "$45,000", "Qualification", "Medium"],
  ["Evergreen – Renewal", "$75,000", "Negotiation", "Low"],
  ["BluePeak – Implementation", "$30,000", "Qualification", "Low"],
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function IconTile({ icon: Icon, t = "blue", className = "" }: { icon: LucideIcon; t?: Tone; className?: string }) {
  return (
    <div className={cx("grid h-12 w-12 shrink-0 place-items-center rounded-2xl border shadow-sm", tone[t], className)}>
      <Icon className="h-5 w-5" />
    </div>
  );
}

function SmallBadge({ children, t = "blue" }: { children: ReactNode; t?: Tone }) {
  return <span className={cx("rounded-full border px-2.5 py-1 text-[11px] font-bold", tone[t])}>{children}</span>;
}

function FeatureCard({ icon, title, text, t = "blue" }: { icon: LucideIcon; title: string; text: string; t?: Tone }) {
  return (
    <div className="rounded-[18px] border border-[#d7e2f2] bg-white p-5 shadow-[0_14px_45px_rgba(8,31,84,0.04)]">
      <div className="flex items-center gap-4">
        <IconTile icon={icon} t={t} />
        <div>
          <h3 className="text-[15px] font-extrabold text-[#061b49]">{title}</h3>
          <p className="mt-1.5 text-sm leading-6 text-[#607096]">{text}</p>
        </div>
      </div>
    </div>
  );
}

function getTabFromHash(hash: string): TabId | null {
  const id = hash.replace("#", "");

  if (!id) {
    return null;
  }

  const directMatch = navItems.find((item) => item.id === id);

  return directMatch ? directMatch.id : null;
}

function scrollToTab(tab: TabId, behavior: ScrollBehavior = "auto") {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      document.getElementById(tab)?.scrollIntoView({ behavior, block: "start" });
    });
  });
}

function Sidebar({
  activeTab,
  onTabChange,
}: {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}) {
  const activeItem = navItems.find((item) => item.id === activeTab) ?? navItems[0];

  return (
    <SolutionSidebar<TabId>
      title="AI Intelligence"
      subtitle="Predictive CRM assistant"
      icon={Brain}
      items={navItems}
      activeTab={activeTab}
      onTabChange={onTabChange}
      ctaTitle={activeTab === "final-cta" ? "Turn AI into action" : "See AI Intelligence in Action"}
      ctaText={activeItem.helper}
      ctaButtonText="Book a CRM Consultation"
    />
  );
}

function MobileTabBar({
  activeTab,
  onTabChange,
}: {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}) {
  return (
    <div className="sticky top-20 z-30 border-b border-[#d7e2f2] bg-white/95 px-4 py-3 shadow-sm backdrop-blur-xl lg:hidden">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onTabChange(item.id)}
              aria-current={isActive ? "page" : undefined}
              className={cx(
                "flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-extrabold transition",
                isActive
                  ? "border-[#9fc6e6] bg-[#eef6ff] text-[#145cb7]"
                  : "border-[#d7e2f2] bg-white text-[#334766]"
              )}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SolutionShell({
  activeTab,
  onTabChange,
  children,
}: {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#f8fbff] pt-24 text-[#0f214f] sm:pt-28 lg:pt-32">
      <MobileTabBar activeTab={activeTab} onTabChange={onTabChange} />

      <div className="mx-auto flex max-w-[1600px]">
        <Sidebar activeTab={activeTab} onTabChange={onTabChange} />

        <div className="min-w-0 flex-1">
          <section id={activeTab} className="min-w-0 flex-1 bg-white scroll-mt-24">
            <div className="mx-auto max-w-[min(95vw,1600px)] px-4 py-10 sm:px-6 lg:px-8">
              {children}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function Header({
  title,
  subtitle,
  crumb,
  badge,
  icon,
}: {
  title: string;
  subtitle: string;
  crumb: string;
  badge?: string;
  icon?: LucideIcon;
}) {
  const Icon = icon;
  return (
    <header className="mb-7">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-[#0a65d8]">
          <Link href="/">Solutions</Link>
          <span className="text-[#9aa8c2]">/</span>
          <Link href="/solutions/ai-intelligence">AI Intelligence</Link>
          <span className="text-[#9aa8c2]">/</span>
          <span className="text-[#061b49]">{crumb}</span>
        </div>
        {badge ? (
          <span className="hidden rounded-xl border border-[#d7e2f2] bg-[#f8fbff] px-4 py-2 text-xs font-bold text-[#0969da] md:inline-flex">
            {badge}
          </span>
        ) : null}
      </div>

      <div className="flex items-start gap-5">
        {Icon ? (
          <div className="mt-2 hidden h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#eef6ff] text-[#0969da] sm:grid">
            <Icon className="h-7 w-7" />
          </div>
        ) : null}
        <div>
          <h1 className="text-5xl font-black tracking-[-0.06em] text-[#061b49] md:text-6xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#607096]">{subtitle}</p>
        </div>
      </div>
    </header>
  );
}

function OverviewPage() {
  return (
    <>
      <Header
        title="AI Intelligence Overview"
        crumb="Overview"
        badge="✣ Powered by HNX AI"
        subtitle="Turn data into decisions with AI that scores leads, surfaces smart insights, predicts outcomes, and prescribes next-best actions."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {overviewCapabilities.map((item) => (
          <FeatureCard key={item.title} icon={item.icon} title={item.title} text={item.text} t={item.tone} />
        ))}
      </section>

      <section className="mt-5 overflow-hidden rounded-[26px] border border-[#d7e2f2] bg-[#061b49] shadow-[0_22px_70px_rgba(8,31,84,0.14)]">
        <div className="relative min-h-[235px] bg-[radial-gradient(circle_at_50%_50%,rgba(24,195,255,0.34),transparent_24%),linear-gradient(90deg,#061b49_0%,#09265c_52%,#061b49_100%)] p-8 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle,#42d8ff_1px,transparent_1px)] opacity-20 [background-size:22px_22px]" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_260px_1fr]">
            <div className="space-y-5">
              <AiDarkNode icon={Users} title="Lead Scoring" text="Score and rank leads by conversion likelihood." />
              <AiDarkNode icon={TrendingUp} title="Forecasting" text="Predict deal outcomes and revenue impacts." />
            </div>

            <div className="relative mx-auto grid h-[210px] w-[210px] place-items-center">
              <div className="absolute inset-0 rounded-full border border-cyan-300/30" />
              <div className="absolute inset-6 rounded-full border border-dashed border-cyan-300/40" />
              <div className="grid h-[145px] w-[145px] place-items-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#2fe6ff,transparent_32%),linear-gradient(145deg,#0b58c8,#061b49)] shadow-[0_0_50px_rgba(47,230,255,0.35)]">
                <div className="text-center">
                  <Brain className="mx-auto h-12 w-12 text-cyan-100" />
                  <p className="mt-1 text-5xl font-black">AI</p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <AiDarkNode icon={CheckCircle2} title="Smart Actions" text="Recommend next-best actions for every record." right />
              <AiDarkNode icon={MessageCircle} title="Messaging" text="Craft and time messages that get more replies." right />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 grid gap-5 xl:grid-cols-[0.88fr_1.12fr]">
        <div className="rounded-[26px] border border-[#d7e2f2] bg-white p-5 shadow-sm">
          <h2 className="text-lg font-black text-[#061b49]">AI Capabilities That Drive Results</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Target, title: "Lead Scoring", text: "Rank leads by likelihood to convert.", tone: "blue" as Tone },
              { icon: Activity, title: "Deal Health", text: "Assess deal risk and health in real time.", tone: "cyan" as Tone },
              { icon: ShieldCheck, title: "Churn Signals", text: "Identify at-risk accounts before it’s too late.", tone: "green" as Tone },
              { icon: Sparkles, title: "Recommendations", text: "AI-suggested actions for better outcomes.", tone: "purple" as Tone },
              { icon: Bell, title: "Priority Alerts", text: "Surface what needs your attention now.", tone: "orange" as Tone },
              { icon: Settings, title: "Automation Suggestions", text: "Discover tasks AI can automate for you.", tone: "blue" as Tone },
            ].map((item) => (
              <div key={item.title} className="rounded-[18px] border border-[#d7e2f2] p-5">
                <IconTile icon={item.icon} t={item.tone} />
                <p className="mt-4 text-sm font-black text-[#061b49]">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-[#607096]">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-[#edf2fb] pt-4 text-xs font-bold text-[#607096]">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#0969da]" /> Built on secure, compliant AI models with your data always protected.</span>
            <Link href="/#contact" className="text-[#0969da]">Learn more →</Link>
          </div>
        </div>

        <div className="rounded-[26px] border border-[#d7e2f2] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-[#061b49]">AI Intelligence Dashboard</h2>
            <button className="rounded-xl border border-[#d7e2f2] px-3 py-2 text-xs font-bold text-[#607096]">This Month</button>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {overviewMetricCards.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[#d7e2f2] p-4">
                <p className="text-xs font-bold text-[#607096]">{item.label}</p>
                <p className="mt-2 text-2xl font-black text-[#061b49]">{item.value}</p>
                <p className="mt-1 text-xs font-bold text-emerald-600">{item.delta} vs last month</p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-4 xl:grid-cols-[1fr_0.78fr_0.78fr]">
            <div className="rounded-2xl border border-[#d7e2f2] p-4">
              <p className="text-sm font-black text-[#061b49]">AI Predicted Revenue</p>
              <MiniLineChart />
            </div>
            <div className="rounded-2xl border border-[#d7e2f2] p-4">
              <p className="text-sm font-black text-[#061b49]">Top Leads by AI Score</p>
              <div className="mt-3 space-y-2">
                {topAiLeads.map(([lead, score], i) => (
                  <div key={lead} className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#334766]">{i + 1}. {lead}</span>
                    <span className="grid h-7 w-7 place-items-center rounded-full border border-emerald-200 text-[11px] font-black text-emerald-600">{score}</span>
                  </div>
                ))}
              </div>
              <Link href="/#contact" className="mt-4 inline-block text-xs font-black text-[#0969da]">View all leads →</Link>
            </div>
            <div className="rounded-2xl border border-[#d7e2f2] p-4">
              <p className="text-sm font-black text-[#061b49]">AI Insights</p>
              <div className="mt-3 space-y-3">
                <InsightChip title="High conversion trend" text="Marketing leads are 2.4x more likely to convert." t="green" />
                <InsightChip title="At-risk deals detected" text="7 deals totaling $1.2M show signs of slipping." t="purple" />
                <InsightChip title="Action recommended" text="Follow up with 23 leads overdue for engagement." t="blue" />
              </div>
              <Link href="/#contact" className="mt-4 inline-block text-xs font-black text-[#0969da]">View all insights →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AiDarkNode({ icon: Icon, title, text, right = false }: { icon: LucideIcon; title: string; text: string; right?: boolean }) {
  return (
    <div className={cx("rounded-2xl border border-cyan-300/20 bg-white/8 p-4 backdrop-blur-sm", right && "text-left")}>
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-400/15 text-cyan-200">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="font-black text-white">{title}</p>
          <p className="mt-1 text-sm leading-5 text-blue-100">{text}</p>
        </div>
      </div>
    </div>
  );
}

function InsightChip({ title, text, t }: { title: string; text: string; t: Tone }) {
  return (
    <div className="rounded-xl border border-[#d7e2f2] bg-[#fbfdff] p-3">
      <div className="flex gap-3">
        <Sparkles className={cx("mt-0.5 h-4 w-4", t === "green" ? "text-emerald-600" : t === "purple" ? "text-violet-600" : "text-blue-600")} />
        <div>
          <p className="text-xs font-black text-[#061b49]">{title}</p>
          <p className="mt-1 text-[11px] leading-4 text-[#607096]">{text}</p>
        </div>
      </div>
    </div>
  );
}

function MiniLineChart({ color = "#1665ff" }: { color?: string }) {
  return (
    <svg className="mt-4 h-40 w-full" viewBox="0 0 360 160" fill="none">
      {[32, 64, 96, 128].map((y) => <line key={y} x1="0" y1={y} x2="360" y2={y} stroke="#edf2fb" />)}
      <path d="M6 130 C35 98 54 112 78 80 C102 50 126 72 154 42 C181 13 211 37 235 22 C263 5 288 36 315 25 C337 17 348 23 354 17" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M6 145 C35 126 54 132 78 112 C102 92 126 104 154 82 C181 59 211 81 235 63 C263 41 288 62 315 52 C337 45 348 52 354 44" stroke="#1eb7c7" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function LeadScoringPage() {
  return (
    <>
      <Header
        title="AI Lead Scoring"
        crumb="Lead Scoring"
        subtitle="Score leads automatically based on behavior, fit, activity, and intent so your team focuses on the opportunities most likely to convert."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <FeatureCard icon={Zap} title="Real-Time Scoring" text="Scores update instantly as leads engage and interact." t="blue" />
        <FeatureCard icon={Target} title="Fit + Intent Signals" text="Combines firmographic fit with buying intent signals." t="cyan" />
        <FeatureCard icon={Workflow} title="Priority Routing" text="Automatically routes hot leads to the right owner." t="blue" />
        <FeatureCard icon={Users} title="Team Visibility" text="See top leads, trends, and conversion drivers." t="cyan" />
      </section>

      <div className="mt-6 grid gap-5 xl:grid-cols-[1.25fr_0.78fr]">
        <section className="rounded-[26px] border border-[#d7e2f2] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-[#061b49]">Top Leads by AI Score</h2>
            <button className="rounded-xl border border-[#d7e2f2] px-3 py-2 text-xs font-bold text-[#607096]">All Open Leads</button>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="text-xs text-[#607096]">
                <tr>{["#", "Lead", "AI Score", "Tier", "Predicted Conversion", "Industry", "Recommended Owner"].map((h) => <th key={h} className="border-b border-[#d7e2f2] px-3 py-3 font-black">{h}</th>)}</tr>
              </thead>
              <tbody>
                {scoredLeads.map((row, i) => (
                  <tr key={row[0]} className="border-b border-[#edf2fb]">
                    <td className="px-3 py-4 font-bold text-[#607096]">{i + 1}</td>
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-3">
                        <div className="grid h-8 w-8 place-items-center rounded-full bg-[#eef6ff] text-xs font-black text-[#0969da]">{row[0][0]}</div>
                        <div><p className="font-black text-[#061b49]">{row[0]}</p><p className="text-xs text-[#607096]">{row[1]}</p></div>
                      </div>
                    </td>
                    <td className="px-3 py-4"><ScoreCircle score={row[2]} tier={row[3]} /></td>
                    <td className="px-3 py-4"><TierBadge tier={row[3]} /></td>
                    <td className="px-3 py-4 font-bold text-[#061b49]">{row[4]} <span className={row[3] === "Cold" ? "text-rose-500" : "text-emerald-600"}>{row[3] === "Cold" ? "↓" : "↑"}</span></td>
                    <td className="px-3 py-4 text-[#435172]">{row[5]}</td>
                    <td className="px-3 py-4"><div className="flex items-center gap-2"><div className="h-7 w-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600" /><span className="font-bold text-[#435172]">{row[6]}</span></div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link href="/#contact" className="mt-5 block text-center text-sm font-black text-[#0969da]">View all leads →</Link>
        </section>

        <div className="grid gap-5">
          <section className="rounded-[26px] border border-[#d7e2f2] bg-white p-5 shadow-sm">
            <h2 className="text-lg font-black text-[#061b49]">AI Lead Score Distribution</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-[180px_1fr] xl:grid-cols-1 2xl:grid-cols-[180px_1fr]">
              <Donut value="64" label="Average Score" />
              <div className="space-y-4 self-center">
                <Legend color="bg-[#1eb7c7]" label="Hot (70-100)" value="32%" />
                <Legend color="bg-[#f5c545]" label="Warm (40-69)" value="41%" />
                <Legend color="bg-[#2c7dda]" label="Cold (0-39)" value="27%" />
              </div>
            </div>
          </section>

          <section className="rounded-[26px] border border-[#d7e2f2] bg-white p-5 shadow-sm">
            <h2 className="text-lg font-black text-[#061b49]">Conversion Probability Funnel</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-[190px_1fr] xl:grid-cols-1 2xl:grid-cols-[190px_1fr]">
              <Funnel />
              <div className="space-y-3 text-sm font-semibold text-[#607096]">
                {["All Leads 1,234", "Scored Leads 876 (71%)", "Marketing Qualified 432 (35%)", "Sales Qualified 198 (16%)", "Won (Predicted) 64 (5%)"].map((item) => (
                  <p key={item} className="flex justify-between border-b border-[#edf2fb] pb-2"><span>{item.replace(/\s[\d(].*/, "")}</span><span>{item.match(/[\d,]+.*$/)?.[0]}</span></p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.25fr_0.78fr]">
        <section className="rounded-[26px] border border-[#d7e2f2] bg-white p-5 shadow-sm">
          <h2 className="text-lg font-black text-[#061b49]">How AI Lead Scoring Works</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {[
              [BarChart3, "Behavioral Signals", "Tracks actions like email opens, link clicks, page views, and downloads."],
              [Network, "Profile Fit", "Evaluates company size, industry, role, budget fit, and location alignment."],
              [MessageCircle, "Engagement", "Measures response rates, meeting bookings, and two-way conversations."],
              [Clock3, "Recent Activity", "Weights recency and frequency to surface active in-market leads."],
            ].map(([Icon, title, text], i) => (
              <div key={title as string} className="relative rounded-2xl border border-[#d7e2f2] p-5">
                {i > 0 ? <ArrowRight className="absolute -left-5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[#9aa8c2] md:block" /> : null}
                <IconTile icon={Icon as LucideIcon} t="blue" />
                <p className="mt-4 text-sm font-black text-[#061b49]">{title as string}</p>
                <p className="mt-2 text-xs leading-5 text-[#607096]">{text as string}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[26px] border border-[#d7e2f2] bg-white p-5 shadow-sm">
          <h2 className="text-lg font-black text-[#061b49]">Leads to Call Today</h2>
          <p className="mt-1 text-sm text-[#607096]">AI recommends these leads for outreach today.</p>
          <div className="mt-4 space-y-4">
            {scoredLeads.slice(0, 3).map((row) => (
              <div key={row[0]} className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[#eef6ff] text-xs font-black text-[#0969da]">{row[0][0]}</div>
                  <div><p className="text-sm font-black text-[#061b49]">{row[0]}</p><p className="text-xs text-[#607096]">{row[1]} • {row[6]}</p></div>
                </div>
                <ScoreCircle score={row[2]} tier={row[3]} small />
                <button className="rounded-xl border border-[#d7e2f2] px-3 py-2 text-xs font-black text-[#0969da]"><Phone className="mr-1 inline h-3 w-3" />Call</button>
              </div>
            ))}
          </div>
          <Link href="/#contact" className="mt-5 inline-block text-sm font-black text-[#0969da]">View full list →</Link>
        </section>
      </div>
    </>
  );
}

function ScoreCircle({ score, tier, small = false }: { score: string; tier: string; small?: boolean }) {
  const color = tier === "Hot" ? "border-emerald-400 text-emerald-700" : tier === "Warm" ? "border-amber-400 text-amber-700" : "border-blue-400 text-blue-700";
  return <span className={cx("grid rounded-full border-2 bg-white font-black", color, small ? "h-10 w-10 text-sm" : "h-12 w-12 text-base")}>{score}</span>;
}

function TierBadge({ tier }: { tier: string }) {
  const t: Tone = tier === "Hot" ? "red" : tier === "Warm" ? "orange" : "blue";
  return <SmallBadge t={t}>{tier}</SmallBadge>;
}

function Donut({ value, label }: { value: string; label: string }) {
  return (
    <div className="grid h-[180px] w-[180px] place-items-center rounded-full border-[24px] border-[#1eb7c7] border-b-[#f5c545] border-l-[#2c7dda] bg-white">
      <div className="text-center">
        <p className="text-4xl font-black text-[#061b49]">{value}</p>
        <p className="text-sm font-semibold text-[#607096]">{label}</p>
      </div>
    </div>
  );
}

function Legend({ color, label, value }: { color: string; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="flex items-center gap-2 font-semibold text-[#607096]"><span className={cx("h-3 w-3 rounded-full", color)} />{label}</span>
      <span className="font-black text-[#061b49]">{value}</span>
    </div>
  );
}

function Funnel() {
  return (
    <div className="flex h-40 flex-col items-center justify-center gap-1">
      {["w-44 bg-blue-600", "w-36 bg-blue-500", "w-28 bg-cyan-500", "w-20 bg-teal-500", "w-12 bg-emerald-500"].map((cls, i) => (
        <div key={i} className={cx("h-7 [clip-path:polygon(10%_0,90%_0,75%_100%,25%_100%)]", cls)} />
      ))}
    </div>
  );
}

function PredictiveInsightsPage() {
  return (
    <>
      <Header
        title="Predictive Insights"
        crumb="Predictive Insights"
        subtitle="Understand future revenue, churn risks, pipeline health, and deal probabilities."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["Forecast Accuracy", "87%", "+6% vs last 30 days", Target, "cyan"],
          ["At-Risk Deals", "23", "▼ 8% vs last 30 days", ShieldCheck, "red"],
          ["Revenue Confidence", "$4.2M", "▲ 9% vs last 30 days", BarChart3, "blue"],
          ["Opportunity Velocity", "1.6x", "▲ 12% vs last 30 days", Zap, "cyan"],
        ].map(([label, value, delta, Icon, t]) => (
          <div key={label as string} className="rounded-[20px] border border-[#d7e2f2] bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div><p className="text-sm font-bold text-[#607096]">{label as string}</p><p className="mt-4 text-4xl font-black text-[#061b49]">{value as string}</p><p className="mt-3 text-sm font-bold text-emerald-600">{delta as string}</p></div>
              <IconTile icon={Icon as LucideIcon} t={t as Tone} />
            </div>
          </div>
        ))}
      </section>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.25fr_0.92fr_0.92fr]">
        <section className="rounded-[22px] border border-[#d7e2f2] bg-white p-5 shadow-sm">
          <div className="flex justify-between">
            <div><h2 className="text-lg font-black text-[#061b49]">Revenue Forecast</h2><p className="mt-6 text-3xl font-black text-[#061b49]">$12.8M <span className="ml-2 text-sm font-bold text-emerald-600">▲ 11%</span></p></div>
            <button className="h-fit rounded-xl border border-[#d7e2f2] px-3 py-2 text-xs font-bold text-[#607096]">Next 6 Months</button>
          </div>
          <RevenueForecastChart />
        </section>

        <PredictionList title="Deal Probability" items={predictiveCompanies} />
        <PredictionList title="Churn Risk" items={churnCompanies} />
      </div>

      <section className="mt-5 grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-[22px] border border-[#d7e2f2] bg-white p-5 shadow-sm">
          <h2 className="text-lg font-black text-[#061b49]">Smart Insights</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
              <div className="flex items-center gap-4"><IconTile icon={CircleAlert} t="red" /><div><p className="font-black text-rose-700">3 deals likely to slip</p><p className="mt-1 text-sm text-rose-700/80">These deals show rising risk factors and may miss the current close date.</p></div><ArrowRight className="ml-auto h-5 w-5 text-rose-700" /></div>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex items-center gap-4"><IconTile icon={TrendingUp} t="green" /><div><p className="font-black text-emerald-700">2 accounts show expansion potential</p><p className="mt-1 text-sm text-emerald-700/80">Usage and engagement trends suggest strong upsell opportunity.</p></div><ArrowRight className="ml-auto h-5 w-5 text-emerald-700" /></div>
            </div>
          </div>
        </div>
        <div className="rounded-[22px] border border-[#d7e2f2] bg-white p-5 shadow-sm">
          <div className="flex justify-between"><h2 className="text-lg font-black text-[#061b49]">Model Health</h2><Link href="/#contact" className="text-xs font-black text-[#0969da]">Learn more</Link></div>
          <p className="mt-7 text-sm font-bold text-[#607096]">Model</p>
          <p className="text-xl font-black text-emerald-600">Good</p>
          <div className="mt-8 flex justify-between text-sm font-bold text-[#607096]"><span>Last trained<br/><b className="text-[#061b49]">2 hours ago</b></span><span>Data Coverage<br/><b className="text-[#061b49]">98%</b></span></div>
          <div className="mt-4 h-3 rounded-full bg-[#edf2fb]"><div className="h-full w-[98%] rounded-full bg-[#19b7c5]" /></div>
        </div>
      </section>

      <section className="mt-5">
        <h2 className="mb-4 text-xl font-black text-[#061b49]">What the AI sees</h2>
        <div className="grid gap-5 xl:grid-cols-3">
          <WhatAiSees icon={LineChart} title="Trend Detection" text="AI analyzes patterns across your pipeline, engagement, and historical data to detect meaningful trends early." t="blue" />
          <WhatAiSees icon={CircleAlert} title="Anomaly Spotting" text="Unusual changes are flagged so you can act before they impact your forecast or customer relationships." t="purple" />
          <WhatAiSees icon={Gauge} title="Forecast Confidence" text="Confidence scores reflect data quality, pipeline coverage, and historical accuracy to help you plan with certainty." t="cyan" chart />
        </div>
      </section>
    </>
  );
}

function RevenueForecastChart() {
  return (
    <svg className="mt-6 h-[260px] w-full" viewBox="0 0 620 260" fill="none">
      {[50, 100, 150, 200].map((y) => <line key={y} x1="0" y1={y} x2="620" y2={y} stroke="#edf2fb" />)}
      <path d="M10 205 C45 184 64 194 100 165 C137 137 167 146 196 112 C225 79 260 93 291 66 C326 33 367 58 398 40" stroke="#1665ff" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M398 40 C455 28 510 16 610 4" stroke="#1665ff" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="9 9" />
      <path d="M398 75 C455 60 510 48 610 32" stroke="#8a97ad" strokeWidth="3" fill="none" strokeDasharray="5 6" />
      <path d="M398 95 C455 90 510 78 610 66" stroke="#ff4365" strokeWidth="3" fill="none" strokeDasharray="5 6" />
      <circle cx="398" cy="40" r="7" fill="#1665ff" />
      <text x="0" y="246" fill="#607096" fontSize="12">May</text>
      <text x="105" y="246" fill="#607096" fontSize="12">Jun</text>
      <text x="220" y="246" fill="#607096" fontSize="12">Jul</text>
      <text x="340" y="246" fill="#607096" fontSize="12">Aug</text>
      <text x="460" y="246" fill="#607096" fontSize="12">Sep</text>
      <text x="575" y="246" fill="#607096" fontSize="12">Oct</text>
    </svg>
  );
}

function PredictionList({ title, items }: { title: string; items: string[][] }) {
  return (
    <section className="rounded-[22px] border border-[#d7e2f2] bg-white p-5 shadow-sm">
      <div className="flex justify-between"><h2 className="text-lg font-black text-[#061b49]">{title}</h2><Link href="/#contact" className="text-xs font-black text-[#0969da]">View all</Link></div>
      <div className="mt-4 space-y-3">
        {items.map(([name, plan, score, tier, color]) => (
          <div key={name} className="flex items-center justify-between gap-3 rounded-2xl border border-[#d7e2f2] p-3">
            <div className="flex items-center gap-3"><div className={cx("grid h-11 w-11 place-items-center rounded-full text-xs font-black text-white", color === "red" ? "bg-rose-600" : color === "orange" ? "bg-orange-500" : color === "green" ? "bg-emerald-500" : "bg-blue-600")}>{name[0]}</div><div><p className="font-black text-[#061b49]">{name}</p><p className="text-xs text-[#607096]">{plan}</p></div></div>
            <div className="text-right"><p className={cx("text-2xl font-black", color === "red" ? "text-rose-600" : color === "orange" ? "text-orange-500" : color === "green" ? "text-emerald-600" : "text-blue-600")}>{score}</p><p className={cx("text-xs font-bold", color === "red" ? "text-rose-600" : color === "orange" ? "text-orange-500" : color === "green" ? "text-emerald-600" : "text-blue-600")}>{tier}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhatAiSees({ icon, title, text, t, chart }: { icon: LucideIcon; title: string; text: string; t: Tone; chart?: boolean }) {
  return (
    <div className="rounded-[22px] border border-[#d7e2f2] bg-white p-5 shadow-sm">
      <div className="flex gap-4">
        <IconTile icon={icon} t={t} />
        <div>
          <p className="text-lg font-black text-[#0969da]">{title}</p>
          <p className="mt-2 text-sm leading-6 text-[#435172]">{text}</p>
        </div>
      </div>
      {chart ? (
        <div className="mt-5 grid place-items-center">
          <div className="grid h-32 w-32 place-items-center rounded-full border-[16px] border-[#19b7c5] border-l-[#edf2fb] bg-white text-3xl font-black text-[#061b49]">87%</div>
        </div>
      ) : (
        <MiniLineChart color={t === "purple" ? "#8b5cf6" : "#1665ff"} />
      )}
    </div>
  );
}

function NextBestActionsPage() {
  return (
    <>
      <Header
        title="Next-Best Actions"
        crumb="Next-Best Actions"
        icon={Sparkles}
        subtitle="AI recommends the best follow-up, task, sequence, or outreach for each lead, deal, or account—so your team always takes the right next step."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <FeatureCard icon={Star} title="Action Recommendations" text="AI suggests the most impactful action for every record." t="blue" />
        <FeatureCard icon={MessageCircle} title="Follow-Up Guidance" text="Get timing, context, and messaging guidance." t="green" />
        <FeatureCard icon={Zap} title="Priority Nudges" text="Focus on what matters most with urgency indicators." t="orange" />
        <FeatureCard icon={FileText} title="Smart Playbooks" text="AI leverages your playbooks and past success." t="purple" />
      </section>

      <section className="mt-5 rounded-[26px] border border-[#d7e2f2] bg-white p-5 shadow-sm">
        <div className="flex justify-between"><h2 className="text-lg font-black text-[#061b49]">AI Recommendations Board</h2><button className="rounded-xl border border-[#d7e2f2] px-4 py-2 text-xs font-bold text-[#607096]">Filters</button></div>
        <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_1.4fr]">
          <div className="rounded-[22px] border border-[#d7e2f2] p-4">
            <h3 className="mb-3 text-sm font-black text-[#061b49]">Leads, Deals & Accounts</h3>
            <div className="space-y-2">
              {actionRows.map((row, i) => (
                <div key={row[0]} className="flex items-center justify-between gap-3 rounded-2xl border border-[#edf2fb] p-3">
                  <div className="flex items-center gap-3"><div className={cx("grid h-10 w-10 place-items-center rounded-full text-xs font-black text-white", ["bg-blue-500","bg-violet-500","bg-orange-500","bg-teal-500","bg-slate-800"][i])}>{row[0][0]}</div><div><p className="font-black text-[#061b49]">{row[0]}</p><p className="text-xs text-[#607096]">{row[1]}</p></div></div>
                  <div className="text-right"><p className="text-[11px] text-[#607096]">Engagement Score</p><p className="font-black text-[#061b49]">{row[2]} <TierBadge tier={row[3]} /></p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[22px] border border-[#d7e2f2] p-4">
            <h3 className="mb-3 text-sm font-black text-[#061b49]">AI-Suggested Next Action</h3>
            <div className="space-y-2">
              {actionRows.map((row, i) => (
                <div key={row[4]} className="flex items-center justify-between gap-4 rounded-2xl border border-[#edf2fb] p-3">
                  <IconTile icon={[Phone, Mail, CalendarDays, UserRound, Send][i]} t={["green","blue","purple","orange","cyan"][i] as Tone} />
                  <div className="flex-1"><p className="font-black text-[#061b49]">{row[4]}</p><p className="text-xs text-[#607096]">{row[5]}</p></div>
                  <div className="text-right"><p className="text-xs text-[#607096]">Confidence</p><p className="font-black text-[#061b49]">{["92%","86%","74%","65%","60%"][i]}</p></div>
                  <SmallBadge t={row[3] === "High" ? "red" : row[3] === "Medium" ? "orange" : "blue"}>{row[3]}</SmallBadge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 rounded-[26px] border border-[#d7e2f2] bg-white p-5 shadow-sm">
        <div className="flex justify-between"><h2 className="text-lg font-black text-[#061b49]">Today&apos;s AI Recommendations</h2><button className="rounded-xl border border-[#d7e2f2] px-4 py-2 text-xs font-bold text-[#0969da]">View All (12)</button></div>
        <div className="mt-5 space-y-3">
          {actionRows.map((row, i) => (
            <div key={row[0]} className="grid items-center gap-4 rounded-2xl border border-[#edf2fb] p-3 md:grid-cols-[80px_1fr_1.2fr_80px_60px_24px]">
              <p className="text-sm font-bold text-[#607096]">{["9:00 AM","10:30 AM","1:00 PM","3:30 PM","4:45 PM"][i]}</p>
              <div className="flex items-center gap-3"><IconTile icon={[Phone, Mail, CalendarDays, UserRound, Send][i]} t={["green","blue","purple","orange","cyan"][i] as Tone} className="h-10 w-10" /><div><p className="font-black text-[#061b49]">{row[4]} {row[0]}</p><p className="text-xs text-[#607096]">{row[1]}</p></div></div>
              <p className="text-sm text-[#607096]">{row[5]}</p>
              <TierBadge tier={row[3]} />
              <p className="font-black text-[#061b49]">{["92%","86%","74%","65%","60%"][i]}</p>
              <ChevronRight className="h-5 w-5 text-[#9aa8c2]" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function SmartMessagingPage() {
  return (
    <>
      <Header
        title="Smart Messaging"
        crumb="Smart Messaging"
        subtitle="AI-generated replies, follow-ups, and outreach suggestions that help your team communicate the right way—every time. Context-aware, personalized, and on-brand."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <FeatureCard icon={WandSparkles} title="Personalized Replies" text="AI crafts replies tailored to each lead’s context." t="cyan" />
        <FeatureCard icon={Target} title="Context-Aware Outreach" text="Messages that reflect lead behavior and intent." t="blue" />
        <FeatureCard icon={Send} title="Multi-Channel Drafting" text="Draft across email, WhatsApp, SMS, and LinkedIn." t="cyan" />
        <FeatureCard icon={BarChart3} title="Engagement Optimization" text="Improve replies and conversions with AI-driven insights." t="cyan" />
      </section>

      <div className="mt-5 grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <section className="overflow-hidden rounded-[26px] border border-[#d7e2f2] bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-[#d7e2f2] p-5">
            <h2 className="text-lg font-black text-[#061b49]">Conversations</h2>
            <button className="rounded-xl border border-[#d7e2f2] px-3 py-2 text-xs font-bold text-[#607096]">All Channels</button>
          </div>
          <div className="grid min-h-[455px] md:grid-cols-[270px_1fr]">
            <div className="border-r border-[#d7e2f2]">
              <div className="flex gap-4 border-b border-[#d7e2f2] px-5 py-3 text-xs font-black text-[#607096]">
                <span className="text-[#0969da]">Inbox 12</span><span>All 42</span><span>Unread 5</span>
              </div>
              {conversations.map((c, i) => (
                <div key={c[0]} className={cx("border-b border-[#edf2fb] p-4", i === 0 && "bg-[#f0f7ff]")}>
                  <div className="flex gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 text-xs font-black text-white">{c[0].split(" ").map(s => s[0]).join("")}</div>
                    <div className="min-w-0 flex-1"><div className="flex justify-between gap-2"><p className="truncate font-black text-[#061b49]">{c[0]}</p><span className="text-xs text-[#607096]">{c[2]}</span></div><p className="mt-1 text-sm leading-5 text-[#607096]">{c[1]}</p></div>
                  </div>
                </div>
              ))}
              <Link href="/#contact" className="block p-5 text-sm font-black text-[#0969da]">View all conversations →</Link>
            </div>
            <div className="p-5">
              <div className="flex gap-3"><div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 text-xs font-black text-white">RM</div><div><p className="font-black text-[#061b49]">Rahul Mehta</p><p className="text-xs text-[#607096]">VP Sales • TechNova Inc.</p></div></div>
              <div className="mt-6 max-w-sm rounded-2xl bg-emerald-50 p-4 text-sm leading-6 text-[#173e2a]">Hi, we’re looking to streamline our sales process and improve team productivity. Do you offer a solution for mid-market SaaS companies?</div>
              <div className="ml-auto mt-5 max-w-sm rounded-2xl bg-[#f1f5fb] p-4 text-sm leading-6 text-[#334766]">Yes Rahul, HNX is built exactly for that. I can share how our platform helps teams like yours close more deals, faster.</div>
              <div className="mt-5 inline-flex rounded-2xl bg-[#f1f5fb] px-4 py-2 text-[#9aa8c2]">•••</div>
            </div>
          </div>
        </section>

        <section className="rounded-[26px] border border-[#d7e2f2] bg-white p-5 shadow-sm">
          <div className="flex justify-between"><h2 className="text-lg font-black text-[#061b49]">AI Composer</h2><button className="text-sm font-black text-[#0969da]">Generate New</button></div>
          <div className="mt-5 flex gap-7 border-b border-[#d7e2f2] text-sm font-bold text-[#607096]"><span className="border-b-2 border-[#0969da] pb-3 text-[#0969da]">Email</span><span>WhatsApp</span><span>LinkedIn</span><span>SMS</span></div>
          <div className="mt-5 grid gap-6 xl:grid-cols-[1fr_260px]">
            <div>
              <p className="mb-3 text-sm font-black text-[#061b49]">Suggested Subject Lines</p>
              {["Ideas to streamline your sales process", "Helping TechNova close more deals, faster", "Quick thought on improving team productivity"].map((item, i) => (
                <label key={item} className={cx("mb-3 flex items-center gap-3 rounded-xl border p-3 text-sm font-semibold", i === 0 ? "border-[#0969da] bg-[#f6fbff] text-[#061b49]" : "border-[#d7e2f2] text-[#607096]")}>
                  <span className={cx("h-4 w-4 rounded-full border-2", i === 0 ? "border-[#0969da] bg-[#0969da]" : "border-[#9aa8c2]")} />
                  {item}
                </label>
              ))}
              <div className="mt-4 rounded-2xl border border-[#d7e2f2] p-4">
                <div className="flex justify-between"><p className="font-black text-[#061b49]">Draft Reply</p><button className="rounded-lg border border-[#d7e2f2] px-3 py-1 text-xs font-black text-[#0969da]">Use this draft</button></div>
                <p className="mt-4 text-sm leading-7 text-[#334766]">Hi Rahul,<br/><br/>Thanks for reaching out! HNX helps mid-market SaaS teams like TechNova streamline sales processes, boost team productivity, and close deals faster.<br/><br/>Would love to share a quick overview. Are you open to a short call?<br/><br/>Best,<br/>Meera</p>
                <p className="mt-2 text-right text-xs text-[#607096]">256 / 600</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2"><SmallBadge t="blue">Professional</SmallBadge><SmallBadge t="slate">Friendly</SmallBadge><SmallBadge t="slate">Urgent</SmallBadge><SmallBadge t="slate">Short Reply</SmallBadge></div>
            </div>
            <div>
              <p className="mb-4 text-sm font-black text-[#061b49]">Key Talking Points</p>
              <div className="space-y-4">
                {["Streamline sales workflows", "Increase team productivity", "Improve visibility & pipeline health", "Faster deal closures", "Built for mid-market SaaS teams"].map((item) => (
                  <p key={item} className="flex gap-3 text-sm font-semibold leading-6 text-[#435172]"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />{item}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-5 rounded-[26px] border border-[#d7e2f2] bg-white p-5 shadow-sm">
        <div className="flex items-center gap-5"><h2 className="text-lg font-black text-[#061b49]">Messaging Performance</h2><button className="rounded-xl border border-[#d7e2f2] px-3 py-2 text-xs font-bold text-[#607096]">Last 30 Days</button></div>
        <div className="mt-5 grid gap-4 xl:grid-cols-[1fr_1fr_1fr_1.75fr]">
          {messagePerformance.map(([label, value, delta]) => (
            <div key={label} className="rounded-2xl border border-[#d7e2f2] p-5">
              <p className="text-sm font-black text-[#061b49]">{label}</p>
              <p className="mt-5 text-3xl font-black text-[#061b49]">{value} <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs text-emerald-600">{delta}</span></p>
              <MiniSpark />
              <p className="text-xs text-[#607096]">vs previous 30 days</p>
            </div>
          ))}
          <div className="rounded-2xl border border-[#d7e2f2] p-5">
            <div className="flex justify-between"><p className="font-black text-[#061b49]">Top-Performing Templates</p><Link href="/#contact" className="text-xs font-black text-[#0969da]">View all →</Link></div>
            {["Follow-up – Value Highlight", "Meeting Request – Solution Fit", "Post Demo – Next Steps"].map((item, i) => (
              <div key={item} className="mt-4 flex items-center justify-between border-b border-[#edf2fb] pb-3"><span className="font-semibold text-[#435172]">{i + 1}. {item}</span><SmallBadge t="green">{["18.2%","15.7%","14.3%"][i]}</SmallBadge></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function MiniSpark() {
  return (
    <svg className="my-4 h-14 w-full" viewBox="0 0 200 55" fill="none">
      <path d="M0 42 C15 33 22 47 35 30 C50 10 64 39 78 24 C92 8 105 42 120 28 C140 8 155 33 170 16 C184 3 190 23 200 12" stroke="#1665ff" strokeWidth="3" fill="none" />
    </svg>
  );
}

function OpportunitySignalsPage() {
  return (
    <>
      <Header
        title="Opportunity Signals"
        crumb="Opportunity Signals"
        subtitle="Identify revenue opportunities, account risk, buying intent, engagement changes, and hidden pipeline signals from your CRM activity."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <FeatureCard icon={TrendingUp} title="Growth Signals" text="Find accounts showing expansion or upsell potential." t="green" />
        <FeatureCard icon={CircleAlert} title="Risk Signals" text="Catch stalled deals and unhealthy accounts early." t="red" />
        <FeatureCard icon={Radio} title="Intent Signals" text="Track visits, replies, meetings, and decision-maker activity." t="cyan" />
        <FeatureCard icon={Workflow} title="Signal Automation" text="Turn signals into tasks, alerts, and workflows." t="purple" />
      </section>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-[26px] border border-[#d7e2f2] bg-white p-5 shadow-sm">
          <h2 className="text-lg font-black text-[#061b49]">Signal Radar</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              ["Pricing page spike", "12 accounts viewed pricing in the last 24 hours.", "High", "green", TrendingUp],
              ["Decision-maker active", "5 senior contacts opened proposal documents.", "High", "blue", Users],
              ["Deal silence detected", "8 deals have no activity in 7+ days.", "Medium", "orange", Clock3],
              ["Support friction rising", "3 accounts show unresolved support patterns.", "High", "red", CircleAlert],
              ["Renewal opportunity", "4 customers show strong usage before renewal.", "Medium", "cyan", RefreshCw],
              ["Competitor mention", "2 conversations mention competitor evaluation.", "Medium", "purple", MessageCircle],
            ].map(([title, text, priority, t, Icon]) => (
              <div key={title as string} className="rounded-2xl border border-[#d7e2f2] p-5">
                <div className="flex items-start justify-between gap-4">
                  <IconTile icon={Icon as LucideIcon} t={t as Tone} />
                  <SmallBadge t={priority === "High" ? "red" : "orange"}>{priority as string}</SmallBadge>
                </div>
                <p className="mt-4 font-black text-[#061b49]">{title as string}</p>
                <p className="mt-2 text-sm leading-6 text-[#607096]">{text as string}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[26px] border border-[#d7e2f2] bg-white p-5 shadow-sm">
          <h2 className="text-lg font-black text-[#061b49]">Signal Strength</h2>
          <div className="mt-6 grid place-items-center">
            <Donut value="78" label="Signal Score" />
          </div>
          <div className="mt-6 space-y-4">
            <Legend color="bg-emerald-500" label="Growth signals" value="38%" />
            <Legend color="bg-blue-500" label="Intent signals" value="29%" />
            <Legend color="bg-orange-500" label="Risk signals" value="21%" />
            <Legend color="bg-violet-500" label="Support signals" value="12%" />
          </div>
          <div className="mt-6 rounded-2xl border border-[#d7e2f2] bg-[#f8fbff] p-4">
            <p className="text-sm font-black text-[#061b49]">AI Summary</p>
            <p className="mt-2 text-sm leading-6 text-[#607096]">Your pipeline has strong buying signals this week, but 8 stalled deals need immediate follow-up.</p>
          </div>
        </section>
      </div>
    </>
  );
}

function AICopilotPage() {
  return (
    <>
      <Header
        title="AI Copilot"
        crumb="AI Copilot"
        subtitle="Ask questions, get summaries, surface insights, and take action—all from a unified assistant that knows your business."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <FeatureCard icon={MessageCircle} title="Ask Anything" text="Natural language Q&A across your CRM data." t="cyan" />
        <FeatureCard icon={FileText} title="Summaries & Answers" text="Instant summaries, key takeaways, and trends." t="cyan" />
        <FeatureCard icon={Sparkles} title="Actionable Suggestions" text="AI recommends next steps you can take with confidence." t="cyan" />
        <FeatureCard icon={Database} title="CRM Context" text="Secure, real-time context from your CRM." t="cyan" />
      </section>

      <section className="mt-5 grid gap-5 rounded-[26px] border border-[#d7e2f2] bg-white p-5 shadow-sm xl:grid-cols-[0.82fr_1.38fr_0.7fr]">
        <div className="rounded-[22px] bg-[#f8fbff] p-5">
          <div className="flex items-center gap-3"><Sparkles className="h-5 w-5 text-[#0969da]" /><h2 className="font-black text-[#061b49]">AI Copilot</h2></div>
          <div className="mt-6 w-fit rounded-2xl border border-[#d7e2f2] bg-white px-4 py-3 text-sm font-semibold text-[#435172]">👋 Hi Alex, how can I help you today?</div>
          <div className="mt-7 space-y-4">
            {copilotPrompts.map((item) => (
              <button key={item} className="flex w-full items-center justify-between rounded-2xl border border-[#d7e2f2] bg-white px-4 py-4 text-sm font-black text-[#0969da] shadow-sm">
                <span className="flex items-center gap-3"><Sparkles className="h-4 w-4" />{item}</span><ArrowRight className="h-4 w-4" />
              </button>
            ))}
          </div>
          <div className="mt-32 rounded-2xl border border-[#0969da] bg-white p-4 text-sm text-[#607096]">Ask a question or give a command...<Send className="float-right h-5 w-5 text-[#607096]" /></div>
          <p className="mt-4 text-xs font-semibold text-[#607096]">Shield AI Copilot uses your CRM data. <Link href="/#contact" className="text-[#0969da]">Learn more</Link></p>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl border border-cyan-100 bg-cyan-50 px-4 py-3 text-sm font-black text-[#0969da]">Show at-risk deals</div>
          <div className="rounded-[22px] border border-[#d7e2f2] p-5">
            <p className="mb-4 flex gap-3 text-sm font-semibold text-[#435172]"><Sparkles className="h-4 w-4 text-[#0969da]" />Here are 6 at-risk deals that need attention.</p>
            <div className="mx-auto max-w-[540px] rounded-2xl border border-[#d7e2f2] p-4">
              <h3 className="mb-3 text-sm font-black text-[#061b49]">At-Risk Deals</h3>
              <table className="w-full text-left text-xs">
                <thead className="text-[#607096]"><tr>{["Deal", "Amount", "Stage", "Risk Score"].map(h => <th key={h} className="py-2 font-black">{h}</th>)}</tr></thead>
                <tbody>
                  {riskDealRows.map(row => (
                    <tr key={row[0]} className="border-t border-[#edf2fb]">
                      <td className="py-2 font-bold text-[#435172]">{row[0]}</td>
                      <td className="py-2 text-[#435172]">{row[1]}</td>
                      <td className="py-2 text-[#435172]">{row[2]}</td>
                      <td className="py-2"><SmallBadge t={row[3] === "High" ? "red" : row[3] === "Medium" ? "orange" : "green"}>{row[3]}</SmallBadge></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Link href="/#contact" className="mt-3 inline-block text-xs font-black text-[#0969da]">View all at-risk deals →</Link>
            </div>
          </div>

          <div className="rounded-[22px] border border-[#d7e2f2] p-5">
            <h3 className="mb-4 text-sm font-black text-[#061b49]">Recommended actions</h3>
            {["Follow up with Acme Corp – proposal overdue", "Engage Northstar – no activity in 12 days", "Review Summit Co. – discount > 15%"].map((item, i) => (
              <div key={item} className="mb-3 flex items-center justify-between rounded-xl border border-[#edf2fb] px-3 py-2 text-sm font-semibold text-[#435172]"><span className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" />{item}</span><button className="rounded-lg bg-cyan-50 px-2 py-1 text-xs font-black text-[#0969da]">{["Create Task","Start Sequence","Open Deal"][i]}</button></div>
            ))}
          </div>
          <div className="rounded-2xl border border-[#d7e2f2] p-4 text-sm text-[#607096]">Ask a follow-up...<Send className="float-right h-5 w-5" /></div>
        </div>

        <div className="space-y-4">
          <SidePrompt title="Quick prompts" items={["Pipeline summary", "Top deals by close date", "Leads with no activity", "Deals closing this month", "Activities I need to do"]} />
          <SidePrompt title="Saved prompts" items={["Weekly Exec Summary", "At-Risk Deals Report", "Top Performers", "New Logo Opportunities"]} />
          <SidePrompt title="One-click actions" items={["Create Task", "Update Deal", "Start Sequence"]} />
        </div>
      </section>

      <section className="mt-5 rounded-[26px] border border-cyan-100 bg-gradient-to-r from-cyan-50 to-blue-50 p-7">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-6"><IconTile icon={Sparkles} t="cyan" className="h-20 w-20 rounded-full" /><div><h2 className="text-3xl font-black text-[#061b49]">Turn AI from insight into execution.</h2><p className="mt-2 text-lg text-[#607096]">AI Copilot doesn’t just show you what’s happening—it helps you do something about it.</p></div></div>
          <div className="space-y-2 text-sm font-bold text-[#435172]">{["Save time with instant answers", "Focus on what drives revenue", "Act with confidence"].map(x => <p key={x}>✓ {x}</p>)}</div>
          <Link href="/#contact" className="rounded-full bg-gradient-to-r from-[#1665ff] to-[#19b7c5] px-7 py-4 font-black text-white shadow-lg">See AI in Action →</Link>
        </div>
      </section>
    </>
  );
}

function SidePrompt({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[18px] border border-[#d7e2f2] bg-white p-4">
      <h3 className="font-black text-[#061b49]">{title}</h3>
      <div className="mt-3 space-y-2">
        {items.map(item => <p key={item} className="flex gap-2 text-xs font-semibold text-[#435172]"><Sparkles className="h-3.5 w-3.5 text-[#0969da]" />{item}</p>)}
      </div>
      <Link href="/#contact" className="mt-3 inline-block text-xs font-black text-[#0969da]">View all →</Link>
    </div>
  );
}

function FinalCtaPage() {
  return (
    <>
      <Header
        title="Ready to Put AI Inside Your CRM?"
        crumb="Final CTA"
        subtitle="HNX AI Intelligence helps your team score leads, forecast outcomes, write better messages, act faster, and turn CRM data into execution."
      />

      <section className="rounded-[30px] border border-[#d7e2f2] bg-white p-8 shadow-sm">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-black tracking-[-0.04em] text-[#061b49]">AI that works where your team works.</h2>
            <p className="mt-4 text-lg leading-8 text-[#607096]">
              Built around your VisionCRM system, AI Intelligence connects leads, deals, customers, messages, workflows, reports, and user activity into one practical decision layer.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/#contact" className="rounded-full bg-gradient-to-r from-[#1665ff] to-[#19b7c5] px-7 py-4 font-black text-white shadow-lg">Book a CRM Consultation →</Link>
              <Link href="/crm-demo" className="rounded-full border border-[#d7e2f2] bg-white px-7 py-4 font-black text-[#061b49]">See Demo</Link>
            </div>
          </div>
          <div className="relative mx-auto grid h-[360px] w-full max-w-[560px] place-items-center">
            <div className="absolute h-[290px] w-[290px] rounded-full border border-dashed border-[#8ad8ee]" />
            <div className="absolute h-[210px] w-[210px] rounded-full border border-[#b8dcff]" />
            <div className="grid h-[150px] w-[150px] place-items-center rounded-[36px] border border-[#d7e2f2] bg-white text-[#1593b5] shadow-[20px_20px_0_rgba(20,184,204,0.14)]">
              <div className="text-center"><Brain className="mx-auto h-12 w-12" /><p className="mt-3 text-xl font-black text-[#061b49]">AI</p><p className="text-sm font-bold text-[#607096]">Intelligence</p></div>
            </div>
            {[
              [Target, "Lead Scoring", "left-0 top-8"],
              [TrendingUp, "Predictions", "left-[-18px] top-32"],
              [MessageCircle, "Messaging", "left-5 bottom-20"],
              [Lightbulb, "Actions", "right-0 top-8"],
              [Bell, "Alerts", "right-[-24px] top-32"],
              [BarChart3, "Reports", "right-8 bottom-20"],
            ].map(([Icon, label, pos]) => (
              <div key={label as string} className={cx("absolute flex items-center gap-3 rounded-2xl border border-[#d7e2f2] bg-white px-5 py-3 shadow-[0_16px_44px_rgba(15,23,42,0.07)]", pos as string)}>
                <Icon className="h-5 w-5 text-[#0969da]" />
                <span className="text-sm font-black text-[#061b49]">{label as string}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-[30px] bg-gradient-to-r from-[#061b49] via-[#0d4fb3] to-[#19b7c5] p-8 text-white shadow-[0_28px_80px_rgba(15,33,79,0.24)]">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="grid h-24 w-24 place-items-center rounded-full border border-white/30"><Brain className="h-12 w-12" /></div>
            <div><h2 className="text-3xl font-black">Your CRM should not just store data. It should think with you.</h2><p className="mt-2 max-w-xl text-sm leading-7 text-cyan-50">Let’s build AI Intelligence around your exact business process.</p></div>
          </div>
          <Link href="/#contact" className="rounded-full bg-white px-7 py-4 font-black text-[#061b49]">Book a CRM Consultation →</Link>
        </div>
      </section>
    </>
  );
}

export default function AIIntelligencePage() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  useEffect(() => {
    const syncTabWithHash = () => {
      const tab = getTabFromHash(window.location.hash);

      if (tab) {
        setActiveTab(tab);
        scrollToTab(tab);
      }
    };

    const handleHashLinkClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest("a") : null;

      if (!(target instanceof HTMLAnchorElement)) {
        return;
      }

      const url = new URL(target.href);

      if (url.pathname !== window.location.pathname) {
        return;
      }

      const tab = getTabFromHash(url.hash);

      if (tab) {
        setActiveTab(tab);
        scrollToTab(tab, "smooth");
      }
    };

    syncTabWithHash();
    window.addEventListener("hashchange", syncTabWithHash);
    window.addEventListener("popstate", syncTabWithHash);
    document.addEventListener("click", handleHashLinkClick);

    return () => {
      window.removeEventListener("hashchange", syncTabWithHash);
      window.removeEventListener("popstate", syncTabWithHash);
      document.removeEventListener("click", handleHashLinkClick);
    };
  }, []);

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
    window.history.pushState(null, "", `#${tab}`);
    scrollToTab(tab, "smooth");
  };

  return (
    <SolutionShell activeTab={activeTab} onTabChange={handleTabChange}>
      {activeTab === "overview" ? <OverviewPage /> : null}
      {activeTab === "lead-scoring" ? <LeadScoringPage /> : null}
      {activeTab === "predictive-insights" ? <PredictiveInsightsPage /> : null}
      {activeTab === "next-best-actions" ? <NextBestActionsPage /> : null}
      {activeTab === "smart-messaging" ? <SmartMessagingPage /> : null}
      {activeTab === "opportunity-signals" ? <OpportunitySignalsPage /> : null}
      {activeTab === "ai-copilot" ? <AICopilotPage /> : null}
      {activeTab === "final-cta" ? <FinalCtaPage /> : null}
    </SolutionShell>
  );
}
