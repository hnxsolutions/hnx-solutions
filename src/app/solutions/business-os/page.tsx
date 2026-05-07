"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  CircleAlert,
  Clock3,
  Database,
  FileText,
  Home,
  Layers3,
  LineChart,
  Mail,
  MessageCircle,
  Network,
  Search,
  Settings,
  Slack,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Users,
  Workflow,
  XCircle,
  Zap,
  Headphones,
  DollarSign,
} from "lucide-react";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import { Button } from "@/components/ui/Button";

const sidebarLinks = [
  { id: "overview", label: "Overview", href: "#overview", icon: Home },
  { id: "business-chaos", label: "Business Chaos", href: "#business-chaos", icon: CircleAlert },
  { id: "one-system-solution", label: "One System Solution", href: "#one-system-solution", icon: Settings },
  { id: "central-workspace", label: "Central Workspace", href: "#central-workspace", icon: Network },
  { id: "automation-flows", label: "Automation Flows", href: "#automation-flows", icon: Workflow },
  { id: "permissions-control", label: "Permissions & Control", href: "#permissions-control", icon: ShieldCheck },
  { id: "dashboards-reporting", label: "Dashboards & Reporting", href: "#dashboards-reporting", icon: BarChart3 },
  { id: "customer-stories", label: "Customer Stories", href: "#customer-stories", icon: Sparkles },
  { id: "final-cta", label: "Final CTA", href: "#final-cta", icon: ArrowRight },
] as const;

type TabId = (typeof sidebarLinks)[number]["id"];

const hashAliases: Record<string, TabId> = {
  "ai-intelligence": "one-system-solution",
};

function getTabFromHash(hash: string): TabId | null {
  const id = hash.replace("#", "");

  if (!id) {
    return null;
  }

  const directMatch = sidebarLinks.find((item) => item.id === id);

  if (directMatch) {
    return directMatch.id;
  }

  return hashAliases[id] ?? null;
}

function scrollToTab(tab: TabId, behavior: ScrollBehavior = "auto") {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      document.getElementById(tab)?.scrollIntoView({ behavior, block: "start" });
    });
  });
}

const overviewCards = [
  {
    icon: Sparkles,
    title: "All-in-One Platform",
    text: "Unify leads, sales, support, tasks, reports, and automations in one powerful system.",
    color: "from-[#2378ff] to-[#14c8d8]",
  },
  {
    icon: BarChart3,
    title: "Real-Time Visibility",
    text: "Get a complete view of your business with live dashboards and actionable insights.",
    color: "from-[#19b76f] to-[#10b981]",
  },
  {
    icon: Zap,
    title: "Automation That Works",
    text: "Eliminate manual work and streamline operations with smart workflow automations.",
    color: "from-[#7c3aed] to-[#6366f1]",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Scalable",
    text: "Enterprise-grade security and role-based access built to scale as your business grows.",
    color: "from-[#1593b5] to-[#145cb7]",
  },
];

const modulesLeft = [
  {
    icon: Users,
    title: "Leads",
    text: "Capture, qualify & track every lead",
    iconClass: "text-[#2378ff] bg-[#eef6ff]",
  },
  {
    icon: DollarSign,
    title: "Sales",
    text: "Pipelines, deals & revenue tracking",
    iconClass: "text-[#16a34a] bg-[#ecfdf5]",
  },
  {
    icon: Headphones,
    title: "Support",
    text: "Tickets, SLAs & customer care",
    iconClass: "text-[#2563eb] bg-[#eef6ff]",
  },
];

const modulesRight = [
  {
    icon: CheckCircle2,
    title: "Tasks",
    text: "Assignments, due dates & team productivity",
    iconClass: "text-[#16a34a] bg-[#ecfdf5]",
  },
  {
    icon: BarChart3,
    title: "Reports",
    text: "Dashboards, KPIs & real-time insights",
    iconClass: "text-[#2378ff] bg-[#eef6ff]",
  },
  {
    icon: Zap,
    title: "Automations",
    text: "Workflows that save time & drive results",
    iconClass: "text-[#2378ff] bg-[#eef6ff]",
  },
];

const workCards = [
  {
    icon: Layers3,
    title: "Unified Workspace",
    text: "All your tools and data in one clean, intuitive workspace.",
    iconClass: "text-[#7c3aed]",
  },
  {
    icon: Zap,
    title: "Smart Automation",
    text: "Automate repetitive tasks and focus on what matters.",
    iconClass: "text-[#16a34a]",
  },
  {
    icon: BarChart3,
    title: "Actionable Insights",
    text: "Turn data into decisions with real-time dashboards.",
    iconClass: "text-[#7c3aed]",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    text: "Keep your team aligned with shared context and communication.",
    iconClass: "text-[#2378ff]",
  },
  {
    icon: Settings,
    title: "Customizable & Flexible",
    text: "Adapt HNX to your processes — not the other way around.",
    iconClass: "text-[#1593b5]",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    text: "From startup to enterprise, we grow with you.",
    iconClass: "text-[#7c3aed]",
  },
];

const dashboardStats = [
  ["New Leads", "128", "+18%"],
  ["Open Deals", "$320K", "+22%"],
  ["Tickets Open", "36", "+8%"],
  ["Tasks Due", "24", "+12%"],
];

const chaosSources = [
  { icon: Mail, label: "Gmail", className: "text-red-500" },
  { icon: FileText, label: "Sheets", className: "text-emerald-600" },
  { icon: Slack, label: "Slack", className: "text-fuchsia-600" },
  { icon: LineChart, label: "Portal", className: "text-blue-600" },
  { icon: Workflow, label: "HubSpot", className: "text-orange-600" },
  { icon: MessageCircle, label: "WhatsApp", className: "text-blue-600" },
];

const chaosList = [
  {
    title: "Lost Leads",
    text: "Leads fall through the cracks",
  },
  {
    title: "Duplicate Data",
    text: "Multiple versions, no single source",
  },
  {
    title: "Manual Work",
    text: "Repetitive tasks slow your team",
  },
  {
    title: "Slow Response",
    text: "Leads wait, opportunities lost",
  },
  {
    title: "No Visibility",
    text: "No real-time view of your business",
  },
  {
    title: "Missed Follow-ups",
    text: "Inconsistent communication",
  },
];

const chaosCards = [
  {
    icon: Clock3,
    title: "Wasted Time",
    text: "Teams waste hours switching between apps and searching for information.",
  },
  {
    icon: Database,
    title: "Data Inaccuracies",
    text: "Duplicated and outdated data leads to poor decisions and lost trust.",
  },
  {
    icon: DollarSign,
    title: "Higher Costs",
    text: "Pay for multiple tools you do not fully use — costing more than you think.",
  },
  {
    icon: TrendingDown,
    title: "Slower Growth",
    text: "Disconnected systems limit scalability and create hidden bottlenecks.",
  },
  {
    icon: Users,
    title: "Frustrated Teams",
    text: "Repetitive manual work reduces productivity and lowers morale.",
  },
];

const impactStats = [
  {
    icon: Clock3,
    value: "2.5 hrs/day",
    text: "Wasted per employee switching between apps",
  },
  {
    icon: Database,
    value: "30%",
    text: "Of data is duplicated or outdated",
  },
  {
    icon: DollarSign,
    value: "$15K+/month",
    text: "Average wasted spend on unused tools",
  },
  {
    icon: TrendingDown,
    value: "27%",
    text: "Of leads are lost due to slow follow-ups",
  },
];

const hiddenCosts = [
  "Teams manually copy the same information into multiple tools.",
  "Managers wait for reports instead of seeing live business performance.",
  "Customers receive delayed replies because ownership is unclear.",
  "Leads move across chats, spreadsheets, email inboxes, and ad forms without one timeline.",
];


function Sidebar({
  activeTab,
  onTabChange,
}: {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}) {
  return (
    <SolutionSidebar<TabId>
      title="Business OS"
      subtitle="Unified operating layer"
      icon={Network}
      items={sidebarLinks}
      activeTab={activeTab}
      onTabChange={onTabChange}
      ctaTitle="See Business OS in Action"
      ctaText="Get a personalized walkthrough of your future in HNX."
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
    <div className="sticky top-20 z-30 border-b border-[#d7e1f2] bg-white/95 px-4 py-3 shadow-sm backdrop-blur-xl lg:hidden">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {sidebarLinks.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => onTabChange(item.id)}
              aria-current={isActive ? "page" : undefined}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-extrabold transition ${
                isActive
                  ? "border-[#9fc6e6] bg-[#eef6ff] text-[#145cb7]"
                  : "border-[#d7e1f2] bg-white text-[#334766]"
              }`}
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

function OverviewCard({
  icon: Icon,
  title,
  text,
  color,
}: {
  icon: typeof Sparkles;
  title: string;
  text: string;
  color: string;
}) {
  return (
    <div className="rounded-[22px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
      <div className={`grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br ${color} text-white shadow-[0_16px_34px_rgba(20,92,183,0.18)]`}>
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-lg font-extrabold text-[#0f214f]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#465374]">{text}</p>
    </div>
  );
}

function ConnectedCard({
  icon: Icon,
  title,
  text,
  iconClass,
}: {
  icon: typeof Users;
  title: string;
  text: string;
  iconClass: string;
}) {
  return (
    <div className="relative z-10 flex items-center gap-3 rounded-2xl border border-[#d7e1f2] bg-white p-4 shadow-[0_14px_38px_rgba(15,23,42,0.07)]">
      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${iconClass}`}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <p className="text-sm font-extrabold text-[#0f214f]">{title}</p>
        <p className="mt-1 text-xs leading-5 text-[#66728f]">{text}</p>
      </div>
    </div>
  );
}

function ConnectedSystemDiagram() {
  return (
    <section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
      <h2 className="text-center text-xl font-extrabold text-[#0f214f]">
        Everything Connected. Everything in Sync.
      </h2>

      <div className="relative mt-8 grid gap-7 lg:grid-cols-[1fr_220px_1fr] lg:items-center">
        <svg
          className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[270px] w-[620px] -translate-x-1/2 -translate-y-1/2 text-[#63cef1] lg:block"
          viewBox="0 0 620 270"
          fill="none"
          aria-hidden="true"
        >
          <path d="M115 45 C185 45, 190 90, 270 90" stroke="currentColor" strokeWidth="2" />
          <path d="M115 135 C185 135, 190 135, 270 135" stroke="currentColor" strokeWidth="2" />
          <path d="M115 225 C185 225, 190 180, 270 180" stroke="currentColor" strokeWidth="2" />

          <path d="M350 90 C430 90, 435 45, 505 45" stroke="currentColor" strokeWidth="2" />
          <path d="M350 135 C430 135, 435 135, 505 135" stroke="currentColor" strokeWidth="2" />
          <path d="M350 180 C430 180, 435 225, 505 225" stroke="currentColor" strokeWidth="2" />

          <circle cx="270" cy="90" r="4" fill="currentColor" />
          <circle cx="270" cy="135" r="4" fill="currentColor" />
          <circle cx="270" cy="180" r="4" fill="currentColor" />
          <circle cx="350" cy="90" r="4" fill="currentColor" />
          <circle cx="350" cy="135" r="4" fill="currentColor" />
          <circle cx="350" cy="180" r="4" fill="currentColor" />
        </svg>

        <div className="grid gap-4">
          {modulesLeft.map((item) => (
            <ConnectedCard key={item.title} {...item} />
          ))}
        </div>

        <div className="relative mx-auto grid h-[220px] w-[220px] place-items-center rounded-full bg-[#eef6ff]">
          <div className="absolute inset-4 rounded-full border border-dashed border-[#8ad8ee]" />
          <div className="absolute inset-9 rounded-full border border-[#d7e1f2] bg-white shadow-inner" />
          <div className="relative grid h-[132px] w-[132px] place-items-center rounded-full bg-gradient-to-br from-[#0f214f] to-[#145cb7] text-white shadow-[0_25px_65px_rgba(20,92,183,0.30)]">
            <div className="text-center">
              <Network className="mx-auto h-9 w-9 text-[#8ee7f4]" aria-hidden="true" />
              <p className="mt-2 text-xl font-extrabold">HNX</p>
              <p className="text-[11px] font-semibold text-cyan-100">Business OS</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {modulesRight.map((item) => (
            <ConnectedCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({
  icon: Icon,
  title,
  text,
  iconClass,
}: {
  icon: typeof Layers3;
  title: string;
  text: string;
  iconClass: string;
}) {
  return (
    <div className="rounded-2xl border border-[#d7e1f2] bg-white p-5 shadow-[0_12px_34px_rgba(15,23,42,0.04)]">
      <Icon className={`h-6 w-6 ${iconClass}`} aria-hidden="true" />
      <h3 className="mt-4 text-sm font-extrabold text-[#0f214f]">{title}</h3>
      <p className="mt-2 text-xs leading-5 text-[#465374]">{text}</p>
    </div>
  );
}

function MiniDashboard() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-[#d7e1f2] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
      <div className="grid min-h-[370px] grid-cols-[120px_1fr]">
        <aside className="border-r border-[#d7e1f2] bg-[#f8fbff] p-4">
          <div className="flex items-center gap-2 text-sm font-extrabold text-[#0f214f]">
            <Network className="h-5 w-5 text-[#1593b5]" />
            HNX
          </div>

          <div className="mt-6 space-y-2 text-xs font-bold">
            {["Home", "Leads", "Support", "Tasks", "Reports", "Automations", "Settings"].map((item, index) => (
              <div
                key={item}
                className={`rounded-xl px-3 py-2 ${
                  index === 0 ? "bg-[#eef6ff] text-[#145cb7]" : "text-[#66728f]"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </aside>

        <div className="p-5">
          <div className="flex items-start justify-between gap-5">
            <div>
              <h3 className="text-xl font-extrabold text-[#0f214f]">Good morning, Alex! 👋</h3>
              <p className="mt-1 text-xs text-[#66728f]">
                Here’s what’s happening with your business today.
              </p>
            </div>

            <div className="flex items-center gap-4 text-[#66728f]">
              <Search className="h-4 w-4" />
              <Bell className="h-4 w-4" />
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#19b7c5] to-[#145cb7]" />
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {dashboardStats.map(([label, value, delta]) => (
              <div key={label} className="rounded-2xl border border-[#d7e1f2] bg-white p-4 shadow-sm">
                <p className="text-xs font-bold text-[#66728f]">{label}</p>
                <p className="mt-2 text-2xl font-extrabold text-[#0f214f]">{value}</p>
                <p className="mt-1 text-xs font-bold text-emerald-600">{delta} vs last 7 days</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-[#d7e1f2] bg-white p-4">
              <p className="text-sm font-extrabold text-[#0f214f]">Pipeline Overview</p>
              <svg className="mt-5 h-28 w-full" viewBox="0 0 420 120" fill="none" aria-hidden="true">
                <path
                  d="M0 90 C35 75, 54 42, 92 55 C126 67, 140 22, 178 42 C205 57, 232 66, 255 37 C281 4, 312 47, 337 40 C365 33, 383 14, 420 8"
                  stroke="#1673d1"
                  strokeWidth="4"
                />
                <path
                  d="M0 90 C35 75, 54 42, 92 55 C126 67, 140 22, 178 42 C205 57, 232 66, 255 37 C281 4, 312 47, 337 40 C365 33, 383 14, 420 8 L420 120 L0 120 Z"
                  fill="url(#lineFill)"
                />
                <defs>
                  <linearGradient id="lineFill" x1="210" y1="0" x2="210" y2="120" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#19b7c5" stopOpacity="0.26" />
                    <stop offset="1" stopColor="#19b7c5" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="rounded-2xl border border-[#d7e1f2] bg-white p-4">
              <p className="text-sm font-extrabold text-[#0f214f]">Top Performing Sources</p>

              <div className="mt-5 grid place-items-center">
                <div className="grid h-24 w-24 place-items-center rounded-full border-[14px] border-[#1673d1] border-r-[#19b7c5] border-b-[#8b5cf6] bg-white">
                  <span className="text-lg font-extrabold text-[#0f214f]">128</span>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-xs font-semibold text-[#66728f]">
                <div className="flex justify-between">
                  <span>Website</span>
                  <span>42%</span>
                </div>
                <div className="flex justify-between">
                  <span>Referral</span>
                  <span>28%</span>
                </div>
                <div className="flex justify-between">
                  <span>Paid Ads</span>
                  <span>20%</span>
                </div>
                <div className="flex justify-between">
                  <span>Other</span>
                  <span>10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppSourceIcon({
  icon: Icon,
  className = "",
}: {
  icon: typeof Mail;
  className?: string;
}) {
  return (
    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#d7e1f2] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
      <Icon className={`h-7 w-7 ${className}`} aria-hidden="true" />
    </div>
  );
}

function ChaosVisual() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[30px] bg-gradient-to-br from-white via-[#fbfdff] to-[#f8fbff] p-6">
      <div className="absolute inset-y-0 right-0 w-32 bg-[radial-gradient(circle,rgba(20,92,183,0.10)_1px,transparent_1px)] [background-size:12px_12px] opacity-70" />

      <svg
        className="pointer-events-none absolute left-[24%] top-9 hidden h-[260px] w-[650px] text-[#94a9c6] lg:block"
        viewBox="0 0 650 260"
        fill="none"
        aria-hidden="true"
      >
        <path d="M0 20 C95 20, 122 52, 210 52 C330 52, 352 88, 445 88" stroke="currentColor" strokeWidth="2" strokeDasharray="8 10" />
        <path d="M0 88 C95 88, 122 97, 210 97 C330 97, 352 118, 445 118" stroke="currentColor" strokeWidth="2" strokeDasharray="8 10" />
        <path d="M0 156 C95 156, 122 134, 210 134 C330 134, 352 152, 445 152" stroke="currentColor" strokeWidth="2" strokeDasharray="8 10" />
        <path d="M0 226 C95 226, 122 182, 210 182 C330 182, 352 192, 445 192" stroke="currentColor" strokeWidth="2" strokeDasharray="8 10" />
        <path d="M475 92 H545" stroke="currentColor" strokeWidth="3" />
        <path d="M475 136 H545" stroke="currentColor" strokeWidth="3" />
        <path d="M475 180 H545" stroke="currentColor" strokeWidth="3" />
        <path d="M535 80 L555 92 L535 104" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M535 124 L555 136 L535 148" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M535 168 L555 180 L535 192" stroke="currentColor" strokeWidth="3" fill="none" />
      </svg>

      <div className="relative grid gap-8 lg:grid-cols-[1fr_260px_170px] lg:items-center">
        <div className="grid justify-items-center gap-6 lg:justify-items-end">
          <div className="grid grid-cols-2 gap-7">
            {chaosSources.slice(0, 2).map((item) => (
              <AppSourceIcon key={item.label} icon={item.icon} className={item.className} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-7 lg:pr-10">
            {chaosSources.slice(2, 4).map((item) => (
              <AppSourceIcon key={item.label} icon={item.icon} className={item.className} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-7">
            {chaosSources.slice(4, 6).map((item) => (
              <AppSourceIcon key={item.label} icon={item.icon} className={item.className} />
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[260px] rounded-[28px] border border-[#d7e1f2] bg-white p-6 text-center shadow-[0_26px_70px_rgba(15,23,42,0.12)]">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-red-50 text-red-500">
            <CircleAlert className="h-6 w-6" aria-hidden="true" />
          </div>

          <h3 className="mt-4 text-lg font-extrabold text-red-600">Business Chaos</h3>

          <div className="mt-5 space-y-3 text-left">
            {chaosList.map((item) => (
              <div key={item.title} className="flex gap-2">
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
                <div>
                  <p className="text-xs font-extrabold text-[#0f214f]">{item.title}</p>
                  <p className="text-[11px] leading-4 text-[#66728f]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden rounded-[24px] border border-dashed border-[#c7d8ee] bg-white/60 p-6 text-center lg:block">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#eef2f7] text-2xl font-extrabold text-[#94a3b8]">
            ?
          </div>
          <p className="mt-5 text-xs font-bold leading-5 text-[#66728f]">
            Confusion, delays, and missed growth.
          </p>
        </div>
      </div>
    </div>
  );
}

function ChaosProblemCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Clock3;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[22px] border border-[#d7e1f2] bg-white p-6 shadow-[0_15px_45px_rgba(15,23,42,0.04)]">
      <div className="grid h-14 w-14 place-items-center rounded-full bg-[#f1f5fb] text-[#42618f]">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-base font-extrabold text-[#0f214f]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#465374]">{text}</p>
    </div>
  );
}

function ImpactStat({
  icon: Icon,
  value,
  text,
}: {
  icon: typeof Clock3;
  value: string;
  text: string;
}) {
  const isDanger = value.includes("$");

  return (
    <div className="group relative min-h-[210px] overflow-hidden rounded-[28px] border border-[#d7e1f2] bg-white p-7 shadow-[0_20px_55px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.11)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#19b7c5] via-[#145cb7] to-[#0f214f] opacity-0 transition group-hover:opacity-100" />

      <div
        className={`grid h-14 w-14 place-items-center rounded-2xl ${
          isDanger ? "bg-red-50 text-red-500" : "bg-[#eef6ff] text-[#145cb7]"
        }`}
      >
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>

      <div className="mt-6">
        <p
          className={`text-4xl font-extrabold tracking-[-0.04em] ${
            isDanger ? "text-red-600" : "text-[#145cb7]"
          }`}
        >
          {value}
        </p>

        <div className="mt-5 h-px w-full bg-[#d7e1f2]" />

        <p className="mt-5 text-base font-semibold leading-7 text-[#0f214f]">
          {text}
        </p>
      </div>
    </div>
  );
}

function BusinessChaosSection() {
  return (
    <section id="business-chaos" className="border-b border-[#d7e1f2] bg-white scroll-mt-24">
      <div className="mx-auto max-w-[min(95vw,1600px)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.35fr] lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#1593b5]">
              <Link href="/" className="hover:text-[#145cb7]">Solutions</Link>
              <span>/</span>
              <Link href="/solutions/business-os" className="hover:text-[#145cb7]">Business OS</Link>
              <span>/</span>
              <span className="text-[#0f214f]">Business Chaos</span>
            </div>

            <h2 className="mt-7 text-5xl font-extrabold tracking-[-0.045em] text-[#0f214f] sm:text-6xl">
              Business Chaos
            </h2>

            <p className="mt-5 text-2xl font-extrabold leading-snug text-[#0f214f]">
              Too many tools. Scattered workflows. Lost opportunities.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#465374]">
              Modern businesses rely on too many disconnected apps and manual processes. The result? Wasted time,
              frustrated teams, duplicated data, and revenue slipping through the cracks.
            </p>
          </div>

          <ChaosVisual />
        </div>

        <div className="mt-12 border-t border-[#d7e1f2] pt-10">
          <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-[#0f214f]">
            Why Tool Sprawl Hurts Your Business
          </h2>

          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {chaosCards.map((card) => (
              <ChaosProblemCard key={card.title} {...card} />
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[34px] border border-[#d7e1f2] bg-gradient-to-br from-white via-[#fbfdff] to-[#f8fbff] p-8 shadow-[0_22px_70px_rgba(15,23,42,0.06)]">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.55fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0f214f]">The Real Impact</h2>
              <p className="mt-3 text-sm leading-7 text-[#465374]">
                Disconnected tools create invisible leaks across your business — costing you time, money, and
                momentum every single day.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {impactStats.map((stat) => (
                <ImpactStat key={stat.value} {...stat} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[30px] border border-[#d7e1f2] bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <p className="text-xs font-extrabold uppercase tracking-[0.20em] text-[#1593b5]">
              Hidden cost of disconnected work
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-[#0f214f]">
              The problem is not just tools. It is the lack of one operating layer.
            </h2>
            <p className="mt-4 text-base leading-8 text-[#465374]">
              A business can have CRM, WhatsApp, spreadsheets, ad forms, accounting tools, and email — but if those
              tools do not speak to each other, your team still runs on memory, manual updates, and scattered context.
            </p>
          </section>

          <section className="rounded-[30px] border border-[#d7e1f2] bg-[#0f214f] p-7 text-white shadow-[0_22px_60px_rgba(15,33,79,0.22)]">
            <h2 className="text-2xl font-extrabold">What this creates</h2>

            <div className="mt-6 space-y-4">
              {hiddenCosts.map((item) => (
                <div key={item} className="flex gap-3">
                  <XCircle className="mt-1 h-5 w-5 shrink-0 text-red-300" aria-hidden="true" />
                  <p className="text-sm leading-7 text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-10 rounded-[30px] border border-[#d7e1f2] bg-gradient-to-br from-[#f8fbff] via-white to-[#eefcff] p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#1593b5]">
                Next: One System Solution
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-[#0f214f]">
                Replace business chaos with one connected command system.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#465374]">
                Business OS brings your teams, data, workflows, reports, and automations into one source of truth so
                every lead, task, ticket, and customer update has clear ownership.
              </p>
            </div>

            <Button href="#one-system-solution" size="lg" showArrow>
              See One System Solution
            </Button>
          </div>
        </section>
      </div>
    </section>
  );
}

function SmallValueCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Sparkles;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[22px] border border-[#d7e1f2] bg-white p-5 shadow-[0_14px_38px_rgba(15,23,42,0.04)]">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eef6ff] text-[#145cb7]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-sm font-extrabold text-[#0f214f]">{title}</h3>
      <p className="mt-2 text-xs leading-5 text-[#465374]">{text}</p>
    </div>
  );
}

function MetricBox({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="rounded-[22px] border border-[#d7e1f2] bg-white p-5 shadow-[0_14px_38px_rgba(15,23,42,0.04)]">
      <p className="text-xs font-bold text-[#66728f]">{label}</p>
      <p className="mt-3 text-2xl font-extrabold text-[#0f214f]">{value}</p>
      <p className="mt-2 text-xs font-bold text-emerald-600">↑ {delta} vs last 7 days</p>
    </div>
  );
}

function OneSystemSolutionSection() {
  const benefits = [
    { icon: Network, title: "Unified Data", text: "All business records live in one connected operating layer." },
    { icon: Workflow, title: "Connected Workflows", text: "Every lead, task, ticket, and approval moves through a clear process." },
    { icon: Bell, title: "Live Updates", text: "Status changes, reminders, and activity stay visible in real time." },
    { icon: ShieldCheck, title: "Controlled Access", text: "Roles and permissions keep data safe while teams stay productive." },
  ];

  const systemParts = [
    { title: "Leads", text: "Capture and qualify new opportunities", icon: Users },
    { title: "Sales", text: "Track pipelines, proposals, and revenue", icon: TrendingUp },
    { title: "Support", text: "Manage tickets, SLAs, and service requests", icon: Headphones },
    { title: "Tasks", text: "Assign work and monitor ownership", icon: CheckCircle2 },
    { title: "Reports", text: "See KPIs, trends, and performance", icon: BarChart3 },
    { title: "AI Layer", text: "Score, summarize, and suggest next actions", icon: Sparkles },
  ];

  return (
    <section id="one-system-solution" className="border-b border-[#d7e1f2] bg-white scroll-mt-24">
      <div className="mx-auto max-w-[min(95vw,1600px)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.25fr] lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#1593b5]">
              <Link href="/" className="hover:text-[#145cb7]">Solutions</Link>
              <span>/</span>
              <span className="text-[#0f214f]">One System Solution</span>
            </div>

            <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.22em] text-[#1593b5]">
              One System Solution
            </p>
            <h1 className="mt-4 text-5xl font-extrabold tracking-[-0.045em] text-[#0f214f] sm:text-6xl">
              One Business OS. Everything Connected.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#465374]">
              Replace scattered apps with one operating layer for leads, sales, support, tasks, approvals, dashboards,
              and AI assistance. Every team works from the same source of truth.
            </p>
          </div>

          <div className="rounded-[32px] border border-[#d7e1f2] bg-gradient-to-br from-white via-[#f8fbff] to-[#eefcff] p-7 shadow-[0_22px_70px_rgba(15,23,42,0.07)]">
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <SmallValueCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>

        <section className="mt-10 rounded-[32px] border border-[#d7e1f2] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <h2 className="text-center text-2xl font-extrabold text-[#0f214f]">One Core. Every Department Connected.</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm leading-7 text-[#465374]">
            Business OS keeps the customer journey, internal operations, reporting, and automation tied together.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {systemParts.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="rounded-[24px] border border-[#d7e1f2] bg-[#fbfdff] p-5 shadow-sm">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-[#145cb7] shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-base font-extrabold text-[#0f214f]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#465374]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[30px] border border-[#d7e1f2] bg-[#0f214f] p-8 text-white shadow-[0_24px_70px_rgba(15,33,79,0.22)]">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-cyan-200">Before</p>
            <h2 className="mt-4 text-3xl font-extrabold">Disconnected tools create operational drag.</h2>
            <div className="mt-6 space-y-4">
              {["Separate data in every department", "Manual follow-ups and task tracking", "Managers wait for reports", "No clear owner for customer updates"].map((item) => (
                <div key={item} className="flex gap-3">
                  <XCircle className="mt-1 h-5 w-5 shrink-0 text-red-300" aria-hidden="true" />
                  <p className="text-sm leading-7 text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-[#d7e1f2] bg-gradient-to-br from-[#f8fbff] to-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#1593b5]">After</p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0f214f]">One system creates speed, clarity, and control.</h2>
            <div className="mt-6 space-y-4">
              {["Every record has a single source of truth", "Automations handle repetitive actions", "Dashboards update in real time", "Teams know ownership, status, and next step"].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                  <p className="text-sm leading-7 text-[#334766]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

function CentralWorkspaceSection() {
  const commandCards = [
    { icon: Layers3, title: "One place for everything", text: "Access all tools and insights in one unified workspace." },
    { icon: Search, title: "Real-time visibility", text: "See what is happening across your business instantly." },
    { icon: Users, title: "Team alignment", text: "Keep everyone informed and working from the same source." },
    { icon: TrendingUp, title: "Faster execution", text: "Take action sooner with smart insights and automation." },
  ];

  const feedItems = [
    "Jane Cooper created a new deal",
    "Mike Ross updated a follow-up task",
    "System automation completed",
    "Sarah Lee uploaded Proposal_v2.pdf",
  ];

  const quickActions = ["Add New Lead", "Create Deal", "Schedule Task", "Send Email"];
  const taskList = ["Follow up with Beta Ltd.", "Prepare proposal for Acme Corp.", "Review contract with Globex", "Onboard new client - Umbrella Inc."];

  return (
    <section id="central-workspace" className="border-b border-[#d7e1f2] bg-white scroll-mt-24">
      <div className="mx-auto max-w-[min(95vw,1600px)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center gap-2 text-xs font-bold text-[#1593b5]">
            <Link href="/" className="hover:text-[#145cb7]">Solutions</Link>
            <span>/</span>
            <span className="text-[#0f214f]">Central Workspace</span>
          </div>
          <h1 className="mt-5 text-5xl font-extrabold tracking-[-0.045em] text-[#0f214f] sm:text-6xl">
            Your Business Command Center
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#465374]">
            A unified workspace that brings your team, data, actions, and updates together. Stay aligned, move faster,
            and focus on what drives real results.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {commandCards.map((item) => (
            <SmallValueCard key={item.title} {...item} />
          ))}
        </div>

        <section className="mt-9 overflow-hidden rounded-[32px] border border-[#d7e1f2] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <div className="grid lg:grid-cols-[190px_1fr]">
            <aside className="border-r border-[#d7e1f2] bg-[#f8fbff] p-6">
              <div className="flex items-center gap-2 text-base font-extrabold text-[#0f214f]">
                <Network className="h-6 w-6 text-[#1593b5]" />
                HNX
              </div>
              <div className="mt-8 space-y-2 text-sm font-bold">
                {["Home", "Leads", "Sales", "Support", "Tasks", "Reports", "Automations", "Settings"].map((item, index) => (
                  <div key={item} className={`rounded-2xl px-4 py-3 ${index === 0 ? "bg-[#eef6ff] text-[#145cb7]" : "text-[#66728f]"}`}>
                    {item}
                  </div>
                ))}
              </div>
            </aside>

            <div className="p-6">
              <div className="flex flex-wrap items-center gap-4">
                <p className="text-base font-extrabold text-[#0f214f]">Global Search</p>
                <div className="flex min-w-[280px] flex-1 items-center gap-3 rounded-2xl border border-[#d7e1f2] bg-[#fbfdff] px-4 py-3 text-sm text-[#66728f]">
                  <Search className="h-4 w-4" />
                  Search leads, deals, tasks, reports...
                </div>
                <button className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eef6ff] text-[#145cb7]">
                  <Zap className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 grid gap-5 xl:grid-cols-3">
                <div className="rounded-[24px] border border-[#d7e1f2] bg-white p-5 shadow-sm">
                  <h3 className="text-base font-extrabold text-[#0f214f]">Activity Feed</h3>
                  <div className="mt-4 space-y-4">
                    {feedItems.map((item, index) => (
                      <div key={item} className="flex gap-3">
                        <div className="grid h-9 w-9 place-items-center rounded-full bg-[#eef6ff] text-[#145cb7]">
                          <Users className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-[#0f214f]">{item}</p>
                          <p className="mt-1 text-xs text-[#66728f]">{index + 1}h ago</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-[#d7e1f2] bg-white p-5 shadow-sm">
                  <h3 className="text-base font-extrabold text-[#0f214f]">Quick Actions</h3>
                  <div className="mt-4 space-y-3">
                    {quickActions.map((item) => (
                      <button key={item} className="flex w-full items-center gap-3 rounded-2xl border border-[#d7e1f2] bg-[#fbfdff] px-4 py-3 text-left text-sm font-bold text-[#0f214f]">
                        <Sparkles className="h-4 w-4 text-[#145cb7]" />
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-[#d7e1f2] bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-extrabold text-[#0f214f]">My Tasks</h3>
                    <span className="rounded-full bg-[#eef6ff] px-3 py-1 text-xs font-bold text-[#145cb7]">+ New Task</span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {taskList.map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#d7e1f2] bg-white px-4 py-3">
                        <span className="h-3 w-3 rounded-full border border-[#94a3b8]" />
                        <p className="text-sm font-semibold text-[#334766]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_1fr_1.35fr]">
                <div className="rounded-[24px] border border-[#d7e1f2] bg-white p-5 shadow-sm">
                  <h3 className="text-base font-extrabold text-[#0f214f]">Notifications</h3>
                  <p className="mt-3 text-sm leading-6 text-[#465374]">New leads, deal updates, task due alerts, and approvals in one clean stream.</p>
                </div>
                <div className="rounded-[24px] border border-[#d7e1f2] bg-white p-5 shadow-sm">
                  <h3 className="text-base font-extrabold text-[#0f214f]">Recent Updates</h3>
                  <p className="mt-3 text-sm leading-6 text-[#465374]">Reports, file uploads, status changes, and team actions stay visible.</p>
                </div>
                <MiniDashboard />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

function AutomationFlowsSection() {
  const templates = [
    "New Lead Follow-Up",
    "Lead Nurture Sequence",
    "Deal Stage Advancement",
    "Task & Reminder Creation",
    "Win-Back Campaign",
  ];

  const actions = ["Send Email", "Send SMS", "Send Notification", "Assign Lead", "Create Task", "Add to Sequence", "Update Field", "Wait / Delay", "Webhook"];

  return (
    <section id="automation-flows" className="border-b border-[#d7e1f2] bg-white scroll-mt-24">
      <div className="mx-auto max-w-[min(95vw,1600px)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-start">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#1593b5]">
              <Link href="/" className="hover:text-[#145cb7]">Solutions</Link>
              <span>/</span>
              <span className="text-[#0f214f]">Automation Flows</span>
            </div>
            <h1 className="mt-5 text-5xl font-extrabold tracking-[-0.045em] text-[#0f214f] sm:text-6xl">
              Automation Flows
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#465374]">
              Build powerful workflows that run in the background, so nothing falls through the cracks. Connect events,
              conditions, and actions to streamline your process.
            </p>

            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {[
                { icon: Clock3, title: "Save Time", text: "Automate repetitive tasks and reduce busywork." },
                { icon: XCircle, title: "Reduce Manual Work", text: "Minimize errors and eliminate tedious steps." },
                { icon: Sparkles, title: "Improve Consistency", text: "Ensure every lead and customer gets the right follow-up." },
              ].map((item) => (
                <SmallValueCard key={item.title} {...item} />
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#d7e1f2] bg-gradient-to-br from-white to-[#f8fbff] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <div className="grid grid-cols-3 divide-x divide-[#d7e1f2] text-center">
              {[["Active Flows", "24", "Running smoothly"], ["Tasks Automated", "1,248", "This month"], ["Hours Saved", "86", "This month"]].map(([label, value, note]) => (
                <div key={label} className="px-3">
                  <p className="text-xs font-bold text-[#66728f]">{label}</p>
                  <p className="mt-3 text-3xl font-extrabold text-[#0f214f]">{value}</p>
                  <p className="mt-2 text-xs text-[#66728f]">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[320px_1fr]">
          <aside className="rounded-[30px] border border-[#d7e1f2] bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <h2 className="text-lg font-extrabold text-[#0f214f]">Popular Automation Templates</h2>
            <div className="mt-5 space-y-4">
              {templates.map((item, index) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-[#d7e1f2] bg-[#fbfdff] p-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#eef6ff] text-[#145cb7]">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-[#0f214f]">{item}</p>
                    <p className="mt-1 text-xs leading-5 text-[#66728f]">Ready-to-customize workflow template.</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <section className="rounded-[30px] border border-[#d7e1f2] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#d7e1f2] p-5">
              <div>
                <h2 className="text-lg font-extrabold text-[#0f214f]">Automation Flow Builder</h2>
                <p className="mt-1 text-xs text-[#66728f]">Visual builder to create powerful workflows in minutes.</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-extrabold text-emerald-700">● Flow is Active</span>
            </div>

            <div className="grid gap-6 p-6 xl:grid-cols-[1fr_180px]">
              <div className="relative rounded-[26px] border border-[#d7e1f2] bg-[radial-gradient(circle,rgba(20,92,183,0.10)_1px,transparent_1px)] p-6 [background-size:18px_18px]">
                <div className="mx-auto max-w-xl space-y-5">
                  {[["Trigger", "New Lead Created", "When a new lead is added", "bg-emerald-50 text-emerald-600"], ["Condition", "Lead Source is any of", "Website, Landing Page, Referral", "bg-[#eef6ff] text-[#145cb7]"], ["Action", "Assign Lead", "Assign to Sales Rep automatically", "bg-purple-50 text-purple-600"], ["Action", "Send Email", "Send welcome email to lead", "bg-[#eef6ff] text-[#145cb7]"], ["Exit", "Workflow Complete", "End of automation", "bg-slate-100 text-slate-600"]].map(([type, title, note, cls], index) => (
                    <div key={title} className="relative mx-auto max-w-md rounded-2xl border border-[#d7e1f2] bg-white p-4 shadow-sm">
                      {index > 0 ? <div className="absolute -top-5 left-1/2 h-5 w-px bg-[#145cb7]" /> : null}
                      <div className="flex gap-4">
                        <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${cls}`}>
                          <Workflow className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-extrabold uppercase text-[#145cb7]">{type}</p>
                          <p className="text-sm font-extrabold text-[#0f214f]">{title}</p>
                          <p className="mt-1 text-xs text-[#66728f]">{note}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="rounded-[24px] border border-[#d7e1f2] bg-[#fbfdff] p-4">
                <h3 className="text-sm font-extrabold text-[#0f214f]">Drag & Drop Actions</h3>
                <div className="mt-4 space-y-2">
                  {actions.map((item) => (
                    <div key={item} className="rounded-xl border border-[#d7e1f2] bg-white px-3 py-2 text-xs font-bold text-[#334766]">
                      {item}
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

function PermissionsControlSection() {
  const roles = [
    ["Admin", "Full system access and configuration.", "Full Access"],
    ["Manager", "Manage team, data, and performance.", "High Access"],
    ["Sales", "Manage leads, deals, and customers.", "Standard Access"],
    ["Support", "Manage tickets and customer issues.", "Limited Access"],
    ["Operations", "Manage workflows and processes.", "Custom Access"],
  ];

  const approvalSteps = ["Deal Created", "Manager Review", "Finance Review", "Final Approval"];

  return (
    <section id="permissions-control" className="border-b border-[#d7e1f2] bg-white scroll-mt-24">
      <div className="mx-auto max-w-[min(95vw,1600px)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#1593b5]">
              <Link href="/" className="hover:text-[#145cb7]">Solutions</Link>
              <span>/</span>
              <span className="text-[#0f214f]">Permissions & Control</span>
            </div>
            <h1 className="mt-5 text-5xl font-extrabold tracking-[-0.045em] text-[#0f214f] sm:text-6xl">
              Permissions & Control
            </h1>
            <p className="mt-4 text-xl font-bold text-[#0f214f]">Secure. Structured. Scalable.</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#465374]">
              Give your business complete control over who can see, edit, approve, export, and manage data.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[{ icon: ShieldCheck, title: "Secure by Design", text: "Granular permissions protect sensitive data." }, { icon: CheckCircle2, title: "Built-in Approvals", text: "Define paths and keep work moving." }, { icon: Users, title: "Team Empowerment", text: "Give every role the right access." }].map((item) => (
              <SmallValueCard key={item.title} {...item} />
            ))}
          </div>
        </div>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.25fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#1593b5]">1. Role-Based Access</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0f214f]">Give the right access to the right people.</h2>
            <div className="mt-6 space-y-3">
              {["Pre-built roles or create your own", "Module and field-level permission control", "Restrict create, edit, delete, and export", "Limit visibility by team, region, or owner", "Keep sensitive information protected"].map((item) => (
                <div key={item} className="flex gap-3 text-sm font-semibold text-[#334766]">
                  <CheckCircle2 className="h-5 w-5 text-[#1593b5]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <div className="grid gap-4 md:grid-cols-5">
              {roles.map(([role, desc, tag]) => (
                <div key={role} className="rounded-2xl border border-[#d7e1f2] bg-[#fbfdff] p-4 text-center">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#eef6ff] text-[#145cb7]">
                    <Users className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-sm font-extrabold text-[#0f214f]">{role}</p>
                  <p className="mt-2 text-xs leading-5 text-[#66728f]">{desc}</p>
                  <p className="mt-3 rounded-full bg-white px-2 py-1 text-[11px] font-bold text-[#145cb7]">{tag}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[30px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#1593b5]">2. Approval Workflows</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0f214f]">Keep every important action in check.</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-4">
            {approvalSteps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-[#d7e1f2] bg-[#fbfdff] p-5">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#eef6ff] text-[#145cb7]">
                  {index + 1}
                </div>
                <p className="mt-4 text-sm font-extrabold text-[#0f214f]">{step}</p>
                <p className="mt-1 text-xs text-[#66728f]">{index === 0 ? "Sales Rep" : index === 1 ? "Review & Approve" : index === 2 ? "Budget Check" : "Deal Approved"}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[30px] border border-[#d7e1f2] bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-extrabold text-[#0f214f]">Structured Ownership</h2>
            <div className="mt-6 space-y-4">
              {["Lead Ownership", "Deal Ownership", "Team Territories", "Sharing Rules"].map((item) => (
                <div key={item} className="flex gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#1593b5]" />
                  <div>
                    <p className="text-sm font-extrabold text-[#0f214f]">{item}</p>
                    <p className="text-xs text-[#66728f]">Define clear access and accountability.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-[#d7e1f2] bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-extrabold text-[#0f214f]">Audit Trails & Activity Logs</h2>
            <div className="mt-6 space-y-4">
              {["User actions and changes", "Record updates and comments", "Login history and access logs", "Exportable audit reports"].map((item) => (
                <div key={item} className="flex gap-3 text-sm font-semibold text-[#334766]">
                  <CheckCircle2 className="h-5 w-5 text-[#1593b5]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

function DashboardsReportingSection() {
  const metricCards = [
    ["Total Revenue", "$2.45M", "18.6%"],
    ["New Leads", "128", "16.4%"],
    ["Deals Closed", "36", "20.0%"],
    ["Win Rate", "28%", "3.2%"],
    ["Avg. Deal Size", "$68.1K", "12.7%"],
    ["Tasks Completed", "240", "14.8%"],
  ];

  return (
    <section id="dashboards-reporting" className="border-b border-[#d7e1f2] bg-white scroll-mt-24">
      <div className="mx-auto max-w-[min(95vw,1600px)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#1593b5]">
              <Link href="/" className="hover:text-[#145cb7]">Solutions</Link>
              <span>/</span>
              <span className="text-[#0f214f]">Dashboards & Reporting</span>
            </div>
            <h1 className="mt-5 text-5xl font-extrabold tracking-[-0.045em] text-[#0f214f] sm:text-6xl">
              Dashboards & Reporting
            </h1>
            <p className="mt-4 text-xl font-bold text-[#0f214f]">See everything. Understand anything. Grow faster.</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#465374]">
              Turn raw data into real-time insight with custom dashboards and reports. Track performance, spot trends,
              and make smarter decisions every day.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[{ icon: LineChart, title: "Real-Time Visibility", text: "Live data and updates keep you in control." }, { icon: Sparkles, title: "Smarter Decisions", text: "Actionable insights help you prioritize." }, { icon: Search, title: "Performance Tracking", text: "Monitor goals, teams, and growth." }].map((item) => (
              <SmallValueCard key={item.title} {...item} />
            ))}
          </div>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
          {metricCards.map(([label, value, delta]) => (
            <MetricBox key={label} label={label} value={value} delta={delta} />
          ))}
        </div>

        <div className="mt-7 grid gap-6 xl:grid-cols-[1.1fr_1fr_1fr]">
          <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <h3 className="text-lg font-extrabold text-[#0f214f]">Revenue Over Time</h3>
            <svg className="mt-6 h-56 w-full" viewBox="0 0 520 220" fill="none" aria-hidden="true">
              <path d="M0 170 C50 120, 72 80, 120 92 C170 105, 185 25, 240 56 C285 82, 300 120, 345 70 C390 18, 422 102, 468 55 C495 28, 510 18, 520 14" stroke="#2378ff" strokeWidth="5" />
              <path d="M0 170 C50 120, 72 80, 120 92 C170 105, 185 25, 240 56 C285 82, 300 120, 345 70 C390 18, 422 102, 468 55 C495 28, 510 18, 520 14 L520 220 L0 220 Z" fill="url(#revenueGradient)" />
              <defs>
                <linearGradient id="revenueGradient" x1="260" y1="0" x2="260" y2="220" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2378ff" stopOpacity="0.22" />
                  <stop offset="1" stopColor="#2378ff" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <h3 className="text-lg font-extrabold text-[#0f214f]">Pipeline Funnel</h3>
            <div className="mt-8 space-y-3">
              {[["Leads", "1,250", "w-[100%] bg-[#2378ff]"], ["Qualified", "560", "w-[78%] bg-[#4f7df5]"], ["Proposal", "210", "w-[58%] bg-[#7c3aed]"], ["Negotiation", "96", "w-[38%] bg-[#14b8a6]"], ["Closed Won", "36", "w-[22%] bg-[#22c55e]"]].map(([label, value, cls]) => (
                <div key={label}>
                  <div className="flex justify-between text-xs font-bold text-[#334766]"><span>{label}</span><span>{value}</span></div>
                  <div className={`mx-auto mt-2 h-7 rounded-lg ${cls}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <h3 className="text-lg font-extrabold text-[#0f214f]">Leads by Source</h3>
            <div className="mt-8 grid place-items-center">
              <div className="grid h-40 w-40 place-items-center rounded-full border-[26px] border-[#2378ff] border-r-[#14c8d8] border-b-[#f59e0b] bg-white">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-[#0f214f]">128</p>
                  <p className="text-xs text-[#66728f]">Total Leads</p>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-2 text-sm font-semibold text-[#334766]">
              {["Website 42%", "Referral 28%", "Paid Ads 20%", "Email 10%"].map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-7 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <h3 className="text-lg font-extrabold text-[#0f214f]">Custom Reporting</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {["Drag & Drop Builder", "Scheduled Reports", "Multi-Source Data", "Export & Share"].map((item) => (
                <div key={item} className="rounded-2xl border border-[#d7e1f2] bg-[#fbfdff] p-4 text-sm font-bold text-[#0f214f]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <h3 className="text-lg font-extrabold text-[#0f214f]">Popular Reports</h3>
            <div className="mt-5 space-y-3">
              {["Sales Performance Summary", "Lead Source Analysis", "Activity & Engagement Report"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-2xl border border-[#d7e1f2] bg-[#fbfdff] px-4 py-3">
                  <span className="text-sm font-bold text-[#0f214f]">{item}</span>
                  <span className="text-xs font-bold text-[#145cb7]">View Report</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CustomerStoriesSection() {
  const stats = [
    { value: "-65%", label: "Faster Response Time", icon: Zap },
    { value: "+47%", label: "Higher Conversion Rate", icon: TrendingUp },
    { value: "-70%", label: "Fewer Missed Leads", icon: Users },
    { value: "+3.2x", label: "Increase in Visibility", icon: Search },
  ];

  const stories = [
    ["AC", "Apex Consulting", "Professional Services", "HNX helped us cut response time in half and close more deals, faster.", "-60%", "+50%"],
    ["SF", "Summit Fitness", "Health & Wellness", "Our team finally works in sync. We have not missed a lead in 3 months.", "-72%", "+38%"],
    ["HB", "Harbor Build Co.", "Construction", "From scattered tools to one powerful system. Total game changer.", "+3.1x", "-55%"],
    ["EL", "Elevate Law Group", "Legal Services", "Our intake, follow-ups, and client experience have never been better.", "+45%", "-40%"],
  ];

  return (
    <section id="customer-stories" className="border-b border-[#d7e1f2] bg-white scroll-mt-24">
      <div className="mx-auto max-w-[min(95vw,1600px)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#1593b5]">
              <Link href="/" className="hover:text-[#145cb7]">Solutions</Link>
              <span>/</span>
              <span className="text-[#0f214f]">Customer Stories</span>
            </div>
            <h1 className="mt-5 text-5xl font-extrabold tracking-[-0.045em] text-[#0f214f] sm:text-6xl">
              Customer Stories
            </h1>
            <p className="mt-4 text-xl font-bold text-[#0f214f]">Real businesses. Real results.</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#465374]">
              See how companies use HNX Business OS to streamline operations, win more customers, and scale with confidence.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div key={stat.label} className="rounded-[24px] border border-[#d7e1f2] bg-white p-5 text-center shadow-sm">
                  <Icon className="mx-auto h-7 w-7 text-[#145cb7]" />
                  <p className="mt-4 text-2xl font-extrabold text-[#0f214f]">{stat.value}</p>
                  <p className="mt-1 text-xs font-bold text-[#66728f]">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <h2 className="mt-10 text-2xl font-extrabold text-[#0f214f]">What Our Clients Achieve</h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-4">
          {stories.map(([initials, name, type, quote, metricA, metricB]) => (
            <div key={name} className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#eef6ff] text-sm font-extrabold text-[#145cb7]">{initials}</div>
                <div>
                  <p className="text-sm font-extrabold text-[#0f214f]">{name}</p>
                  <p className="text-xs text-[#66728f]">{type}</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-[#334766]">“{quote}”</p>
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-[#d7e1f2] pt-5">
                <div>
                  <p className="text-xl font-extrabold text-[#0f214f]">{metricA}</p>
                  <p className="text-xs text-[#66728f]">Response Time</p>
                </div>
                <div>
                  <p className="text-xl font-extrabold text-[#0f214f]">{metricB}</p>
                  <p className="text-xs text-[#66728f]">Growth Result</p>
                </div>
              </div>
              <p className="mt-5 text-sm font-bold text-[#145cb7]">View Story →</p>
            </div>
          ))}
        </div>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.3fr]">
          <div className="rounded-[30px] border border-[#d7e1f2] bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-extrabold text-[#0f214f]">In Their Words</h2>
            <div className="mt-6 space-y-6">
              {["HNX gave us clarity, speed, and control. It is the best decision we have made.", "Everything we need is in one place. Our team is happier and our clients feel the difference.", "The automation alone saves us 15+ hours every week. Incredible ROI."].map((quote, index) => (
                <div key={quote} className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-[#19b7c5] to-[#145cb7]" />
                  <div>
                    <p className="text-sm leading-7 text-[#334766]">“{quote}”</p>
                    <p className="mt-2 text-xs font-extrabold text-[#0f214f]">Client {index + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-[#d7e1f2] bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-extrabold text-[#0f214f]">Success in Action</h2>
            <div className="mt-6 space-y-4">
              {stories.slice(0, 3).map(([, name, type, , metricA, metricB]) => (
                <div key={name} className="grid gap-4 rounded-2xl border border-[#d7e1f2] bg-[#fbfdff] p-4 md:grid-cols-[1fr_0.7fr_0.7fr_0.7fr]">
                  <div>
                    <p className="font-extrabold text-[#0f214f]">{name}</p>
                    <p className="text-xs text-[#66728f]">{type}</p>
                  </div>
                  <div><p className="text-xl font-extrabold text-[#0f214f]">{metricA}</p><p className="text-xs text-[#66728f]">Response Time</p></div>
                  <div><p className="text-xl font-extrabold text-[#0f214f]">{metricB}</p><p className="text-xs text-[#66728f]">Conversion</p></div>
                  <div><p className="text-xl font-extrabold text-[#0f214f]">+2.4x</p><p className="text-xs text-[#66728f]">Pipeline Growth</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-10 rounded-[30px] border border-[#d7e1f2] bg-gradient-to-br from-[#f8fbff] to-white p-8 text-center shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
          <h2 className="text-2xl font-extrabold text-[#0f214f]">Join 100+ Businesses Growing with HNX</h2>
          <p className="mt-3 text-sm text-[#465374]">From startups to enterprises, teams trust HNX Business OS to run smarter and grow faster.</p>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  const orbitItems = [
    { label: "People", icon: Users },
    { label: "Processes", icon: Settings },
    { label: "Data", icon: Database },
    { label: "Automations", icon: Zap },
    { label: "Insights", icon: TrendingUp },
  ];

  return (
    <section id="final-cta" className="bg-white scroll-mt-24">
      <div className="mx-auto max-w-[min(95vw,1600px)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#1593b5]">
              <Link href="/" className="hover:text-[#145cb7]">Solutions</Link>
              <span>/</span>
              <span className="text-[#0f214f]">Final CTA</span>
            </div>
            <h1 className="mt-7 text-5xl font-extrabold tracking-[-0.045em] text-[#0f214f] sm:text-6xl">
              Ready to Build Your Business OS?
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#465374]">
              HNX Business OS unifies your people, processes, and data in one intelligent system — so you can
              operate with clarity, move faster, and grow with control.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Button href="/#contact" size="lg" showArrow>Book a CRM Consultation</Button>
              <Button href="/crm-demo" variant="secondary" size="lg" showArrow>See Demo</Button>
            </div>
            <div className="mt-7 flex flex-wrap gap-6 text-xs font-bold text-[#465374]">
              <span>✓ No pressure. Just clarity.</span>
              <span>🔒 Secure. Private. Confidential.</span>
            </div>
          </div>

          <div className="relative mx-auto grid h-[360px] w-full max-w-[520px] place-items-center">
            <div className="absolute h-[300px] w-[300px] rounded-full border border-dashed border-[#8ad8ee]" />
            <div className="absolute h-[210px] w-[210px] rounded-full bg-[#eef6ff]" />
            <div className="grid h-[150px] w-[150px] place-items-center rounded-full bg-gradient-to-br from-[#0f214f] to-[#145cb7] text-white shadow-[0_24px_70px_rgba(15,33,79,0.28)]">
              <div className="text-center">
                <Network className="mx-auto h-10 w-10 text-cyan-100" />
                <p className="mt-2 text-2xl font-extrabold">HNX</p>
              </div>
            </div>
            {orbitItems.map((item, index) => {
              const Icon = item.icon;
              const positions = [
                "left-1/2 top-0 -translate-x-1/2",
                "left-10 top-24",
                "right-10 top-24",
                "bottom-8 left-20",
                "bottom-8 right-20",
              ];

              return (
                <div key={item.label} className={`absolute ${positions[index]} rounded-2xl border border-[#d7e1f2] bg-white px-4 py-3 text-center shadow-[0_18px_50px_rgba(15,23,42,0.08)]`}>
                  <Icon className="mx-auto h-5 w-5 text-[#145cb7]" />
                  <p className="mt-1 text-xs font-extrabold text-[#0f214f]">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <section className="mt-10 rounded-[30px] border border-[#d7e1f2] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
          <h2 className="text-center text-2xl font-extrabold text-[#0f214f]">One System. Every Advantage.</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[{ icon: Users, title: "Aligned Teams", text: "Everyone works from the same source of truth." }, { icon: Settings, title: "Smarter Operations", text: "Automate busywork and eliminate manual errors." }, { icon: Search, title: "Real-Time Visibility", text: "Make confident decisions with dashboards and insights." }, { icon: TrendingUp, title: "Scalable Growth", text: "Built to adapt as your business expands." }].map((item) => (
              <SmallValueCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[30px] border border-[#d7e1f2] bg-gradient-to-br from-[#f8fbff] to-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-extrabold text-[#0f214f]">Built Around Your Business</h2>
            <p className="mt-4 text-sm leading-7 text-[#465374]">
              We take time to understand your goals, design the right solution, and implement it with care — so you get
              a system that works today and scales for tomorrow.
            </p>
            <div className="mt-7 rounded-[26px] border border-[#d7e1f2] bg-white p-5">
              <MiniDashboard />
            </div>
          </div>

          <div className="rounded-[30px] border border-[#d7e1f2] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-extrabold text-[#0f214f]">What You Get With HNX</h2>
            <div className="mt-6 space-y-5">
              {[["Tailored Workflows", "Custom-built around your business, not the other way around."], ["Clean Implementation", "A smooth, guided setup with minimal disruption."], ["Automation-Ready", "Streamlined processes that save time and reduce errors."], ["Scalable Architecture", "A future-proof foundation designed to grow with you."]].map(([title, desc]) => (
                <div key={title} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <p className="text-sm font-extrabold text-[#0f214f]">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-[#465374]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-8 rounded-[30px] bg-gradient-to-r from-[#0f214f] via-[#145cb7] to-[#19b7c5] p-8 text-white shadow-[0_28px_80px_rgba(15,33,79,0.24)]">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="text-2xl font-extrabold">🏆 Your Business. One System. Endless Potential.</p>
              <p className="mt-2 text-sm text-cyan-50">Let’s build your Business OS — together.</p>
            </div>
            <Button href="/#contact" variant="secondary" showArrow>Book a CRM Consultation</Button>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function BusinessOSPage() {
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
    <main className="min-h-screen bg-[#f8fbff] pt-24 text-[#0f214f] sm:pt-28 lg:pt-32">
      <MobileTabBar activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="mx-auto flex max-w-[1600px]">
        <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />

        <div className="min-w-0 flex-1">
          {activeTab === "overview" ? (
            <section id="overview" className="min-w-0 flex-1 bg-white">
          <div className="mx-auto max-w-[min(95vw,1600px)] px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1593b5]">
              <Link href="/" className="hover:text-[#145cb7]">Solutions</Link>
              <span>/</span>
              <Link href="/solutions/business-os" className="hover:text-[#145cb7]">Business OS</Link>
              <span>/</span>
              <span className="text-[#0f214f]">Overview</span>
            </div>

            <div className="mt-5">
              <h1 className="text-5xl font-extrabold tracking-[-0.045em] text-[#0f214f] sm:text-6xl">
                Business OS Overview
              </h1>
              <p className="mt-4 text-xl font-bold text-[#0f214f]">
                One intelligent platform. Every critical function. Total visibility.
              </p>
              <p className="mt-3 max-w-3xl text-base leading-8 text-[#465374]">
                HNX Business OS brings your leads, sales, support, teams, workflows, reports, and AI assistance
                into one connected system — so your business can move faster, reduce manual work, and operate with
                complete clarity.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {overviewCards.map((card) => (
                <OverviewCard key={card.title} {...card} />
              ))}
            </div>

            <div className="mt-8">
              <ConnectedSystemDiagram />
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.25fr]">
              <section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                <h2 className="text-2xl font-extrabold text-[#0f214f]">Built for the Way You Work</h2>
                <p className="mt-2 text-sm leading-7 text-[#465374]">
                  Business OS is not a fixed CRM template. It adapts to your process, team structure, data, and
                  business rules.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {workCards.map((card) => (
                    <WorkCard key={card.title} {...card} />
                  ))}
                </div>
              </section>

              <section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                <h2 className="text-2xl font-extrabold text-[#0f214f]">Your Command Center</h2>
                <p className="mt-2 text-sm leading-7 text-[#465374]">
                  A single dashboard where your team can see what matters, take action quickly, and stay updated
                  without switching between disconnected tools.
                </p>

                <div className="mt-6">
                  <MiniDashboard />
                </div>
              </section>
            </div>

            <section className="mt-8 rounded-[30px] border border-[#d7e1f2] bg-gradient-to-br from-[#f8fbff] via-white to-[#eefcff] p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#1593b5]">
                    Why Business OS Matters
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-[#0f214f]">
                    Your Business Should Run from One Source of Truth
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-[#465374]">
                    When leads, tasks, customers, follow-ups, support requests, reports, and approvals live in
                    different places, teams lose time and managers lose visibility. Business OS gives every department
                    one shared operating layer — connected, automated, and always up to date.
                  </p>
                </div>

                <Button href="/#contact" size="lg" showArrow>
                  Book a CRM Consultation
                </Button>
              </div>
            </section>
          </div>
        </section>
          ) : null}

          {activeTab === "business-chaos" ? <BusinessChaosSection /> : null}

          {activeTab === "one-system-solution" ? <OneSystemSolutionSection /> : null}

          {activeTab === "central-workspace" ? <CentralWorkspaceSection /> : null}

          {activeTab === "automation-flows" ? <AutomationFlowsSection /> : null}

          {activeTab === "permissions-control" ? <PermissionsControlSection /> : null}

          {activeTab === "dashboards-reporting" ? <DashboardsReportingSection /> : null}

          {activeTab === "customer-stories" ? <CustomerStoriesSection /> : null}

          {activeTab === "final-cta" ? <FinalCtaSection /> : null}
        </div>
      </div>
    </main>
  );
}
