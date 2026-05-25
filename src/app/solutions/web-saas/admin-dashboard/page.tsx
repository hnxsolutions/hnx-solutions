"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  CircleAlert,
  Database,
  Home,
  LayoutDashboard,
  LockKeyhole,
  Rocket,
  ShieldCheck,
  Target,
  UserCheck,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { SolutionCategoryTabs } from "@/components/solutions/shared/SolutionCategoryTabs";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import { webSaasSolutions } from "@/data/solutions/webSaasSolutions";

const knowledgeTabs = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "ops-chaos", label: "Operations Chaos", icon: CircleAlert },
  { id: "dashboard-strategy", label: "Dashboard Strategy", icon: Target },
  { id: "roles-access", label: "Roles & Access", icon: LockKeyhole },
  { id: "data-kpis", label: "Data & KPIs", icon: BarChart3 },
  { id: "workflow-controls", label: "Workflow Controls", icon: Workflow },
  { id: "reports-alerts", label: "Reports & Alerts", icon: Bell },
  { id: "security-qa", label: "Security & QA", icon: ShieldCheck },
  { id: "launch-roadmap", label: "Launch Roadmap", icon: Rocket },
  { id: "final-cta", label: "Final CTA", icon: ArrowRight }
] as const;

type TabId = (typeof knowledgeTabs)[number]["id"];

type CardItem = {
  icon: LucideIcon;
  title: string;
  text: string;
  tag: string;
};

type MetricItem = {
  label: string;
  value: string;
  note: string;
};

type SectionItem = {
  id: TabId;
  eyebrow: string;
  title: string;
  intro: string;
  cards: CardItem[];
  metrics: MetricItem[];
  flow: CardItem[];
  panelTitle: string;
  panelText: string;
  panelPoints: string[];
};

const sections: SectionItem[] = [
  {
    id: "overview",
    eyebrow: "Admin Dashboard",
    title: "Build an admin dashboard that gives your team control over operations.",
    intro: "An admin dashboard should not be a table dump. It should help the team manage users, leads, bookings, payments, content, workflows, reports, alerts, and exceptions from one operating view.",
    cards: [
    { icon: Target, title: "Control Room", text: "Manage users, records, workflows, content, payments, and reports in one place.", tag: "Control" },
    { icon: Workflow, title: "Role Access", text: "Owners, managers, finance, support, and admins get the right controls.", tag: "RBAC" },
    { icon: Database, title: "Workflow Actions", text: "Approve, assign, update, export, notify, and resolve without developer dependency.", tag: "Actions" },
    { icon: ShieldCheck, title: "Reports & Alerts", text: "Surface KPIs, overdue work, failed payments, workload, and exceptions.", tag: "Insights" }
  ],
    metrics: [
    { label: "Open Items", value: "128", note: "Records waiting for action" },
    { label: "Overdue", value: "17", note: "Tasks past target time" },
    { label: "Failed Payments", value: "6", note: "Exceptions needing review" },
    { label: "Team Load", value: "82%", note: "Current operating capacity" }
  ],
    flow: [
    { icon: Database, title: "Data Enters", text: "Leads, users, payments, requests, bookings, and content flow into the system.", tag: "Input" },
    { icon: LayoutDashboard, title: "Admin View", text: "Dashboard shows status, owner, priority, and next action.", tag: "View" },
    { icon: UserCheck, title: "Assign", text: "Team members get ownership and due context.", tag: "Owner" },
    { icon: Workflow, title: "Action", text: "Admins approve, update, notify, export, or resolve.", tag: "Control" },
    { icon: Bell, title: "Alert", text: "Exceptions and due items trigger notifications.", tag: "Signal" },
    { icon: BarChart3, title: "Report", text: "Owners see KPIs and opportunities.", tag: "Insight" }
  ],
    panelTitle: "The dashboard becomes a daily control room.",
    panelText: "It should help the team act faster, not just look at charts.",
    panelPoints: ["Admins see what needs attention first.", "Teams can assign and resolve work faster.", "Owners get KPIs and bottlenecks.", "Important changes are auditable."],
  },
  {
    id: "ops-chaos",
    eyebrow: "Chapter 01",
    title: "Operations become slow when teams have no control room.",
    intro: "Without an admin dashboard, business operations depend on spreadsheets, manual checks, developer access, disconnected tools, and unclear ownership.",
    cards: [
    { icon: Target, title: "Scattered Data", text: "Leads, users, orders, payments, and requests are spread across different systems.", tag: "Data" },
    { icon: Workflow, title: "Manual Updates", text: "Teams depend on developers or database access for everyday changes.", tag: "Manual" },
    { icon: Database, title: "No Ownership", text: "Records do not clearly show owner, status, priority, or next action.", tag: "Owner" },
    { icon: ShieldCheck, title: "Hidden Exceptions", text: "Failed payments, stuck bookings, overdue tasks, and support issues are not surfaced.", tag: "Risk" },
    { icon: Bell, title: "Weak Reporting", text: "Owners cannot see revenue, usage, team workload, or growth trends clearly.", tag: "Reports" },
    { icon: BarChart3, title: "No Audit Trail", text: "Important changes happen without history, accountability, or review.", tag: "Audit" }
  ],
    metrics: [
    { label: "Manual Checks", value: "42", note: "Recurring operational checks" },
    { label: "Hidden Issues", value: "17", note: "Items found late" },
    { label: "Data Sources", value: "6", note: "Disconnected systems" },
    { label: "Report Delay", value: "3d", note: "Lag before decisions" }
  ],
    flow: [

  ],
    panelTitle: "The hidden cost is operational leakage.",
    panelText: "When the admin side is weak, the product may work for users but becomes hard for the business to operate.",
    panelPoints: ["Managers cannot see what needs attention.", "Teams waste time searching for records.", "Errors stay hidden until clients complain.", "Growth decisions are made without reliable data."],
  },
  {
    id: "dashboard-strategy",
    eyebrow: "Chapter 02",
    title: "Dashboard strategy decides what admins should control and what they should only monitor.",
    intro: "Before building screens, HNX maps admin roles, data models, workflows, actions, permissions, reports, alerts, and operating priorities.",
    cards: [
    { icon: Target, title: "Admin Goals", text: "Define what the dashboard must help the team control each day.", tag: "Goal" },
    { icon: Workflow, title: "Data Model", text: "Map users, records, statuses, sources, payments, requests, and relationships.", tag: "Data" },
    { icon: Database, title: "Action Rules", text: "Decide what can be created, edited, approved, assigned, exported, or deleted.", tag: "Actions" },
    { icon: ShieldCheck, title: "Role Matrix", text: "Separate owner, manager, admin, support, finance, and viewer access.", tag: "Roles" },
    { icon: Bell, title: "Alert Logic", text: "Surface failed, overdue, high-priority, and abnormal items automatically.", tag: "Alerts" },
    { icon: BarChart3, title: "Reporting Needs", text: "Define KPIs, filters, exports, and daily operating views.", tag: "Reports" }
  ],
    metrics: [

  ],
    flow: [
    { icon: Target, title: "Goal", text: "Define what operations need control.", tag: "Strategy" },
    { icon: Database, title: "Data", text: "Map records and relationships.", tag: "Model" },
    { icon: LockKeyhole, title: "Roles", text: "Set permissions and action boundaries.", tag: "Access" },
    { icon: Bell, title: "Alerts", text: "Surface exceptions and due items.", tag: "Signal" },
    { icon: BarChart3, title: "Reports", text: "Create practical dashboards.", tag: "Insight" }
  ],
    panelTitle: "A dashboard is only useful when it reflects operations.",
    panelText: "Strategy makes the dashboard practical for daily team usage.",
    panelPoints: ["Define who uses the dashboard and why.", "Prioritize daily actions over decorative charts.", "Design filters and bulk actions for speed.", "Keep reporting tied to real decisions."],
  },
  {
    id: "roles-access",
    eyebrow: "Chapter",
    title: "label makes the admin dashboard safer and more useful.",
    intro: "This chapter defines the screens, rules, actions, permissions, and reporting needed for label in a real operations dashboard.",
    cards: [
    { icon: Target, title: "Screen Design", text: "Show only the fields and actions this role needs.", tag: "UX" },
    { icon: Workflow, title: "Permission Rules", text: "Define safe actions, restricted actions, and approval paths.", tag: "Access" },
    { icon: Database, title: "Data Quality", text: "Keep required fields, statuses, and history reliable.", tag: "Data" },
    { icon: ShieldCheck, title: "Bulk Actions", text: "Allow safe updates, assignments, exports, and notifications.", tag: "Speed" },
    { icon: Bell, title: "Exception Handling", text: "Surface failed, overdue, blocked, and abnormal records.", tag: "Alerts" },
    { icon: BarChart3, title: "Audit History", text: "Track important changes and who performed them.", tag: "Audit" }
  ],
    metrics: [

  ],
    flow: [

  ],
    panelTitle: "label should reduce admin effort.",
    panelText: "The goal is faster action, clearer ownership, and safer operations.",
    panelPoints: ["Keep actions simple and safe.", "Make status and ownership visible.", "Track important changes.", "Document the operating process."],
  },
  {
    id: "data-kpis",
    eyebrow: "Chapter",
    title: "label makes the admin dashboard safer and more useful.",
    intro: "This chapter defines the screens, rules, actions, permissions, and reporting needed for label in a real operations dashboard.",
    cards: [
    { icon: Target, title: "Screen Design", text: "Show only the fields and actions this role needs.", tag: "UX" },
    { icon: Workflow, title: "Permission Rules", text: "Define safe actions, restricted actions, and approval paths.", tag: "Access" },
    { icon: Database, title: "Data Quality", text: "Keep required fields, statuses, and history reliable.", tag: "Data" },
    { icon: ShieldCheck, title: "Bulk Actions", text: "Allow safe updates, assignments, exports, and notifications.", tag: "Speed" },
    { icon: Bell, title: "Exception Handling", text: "Surface failed, overdue, blocked, and abnormal records.", tag: "Alerts" },
    { icon: BarChart3, title: "Audit History", text: "Track important changes and who performed them.", tag: "Audit" }
  ],
    metrics: [

  ],
    flow: [

  ],
    panelTitle: "label should reduce admin effort.",
    panelText: "The goal is faster action, clearer ownership, and safer operations.",
    panelPoints: ["Keep actions simple and safe.", "Make status and ownership visible.", "Track important changes.", "Document the operating process."],
  },
  {
    id: "workflow-controls",
    eyebrow: "Chapter",
    title: "label makes the admin dashboard safer and more useful.",
    intro: "This chapter defines the screens, rules, actions, permissions, and reporting needed for label in a real operations dashboard.",
    cards: [
    { icon: Target, title: "Screen Design", text: "Show only the fields and actions this role needs.", tag: "UX" },
    { icon: Workflow, title: "Permission Rules", text: "Define safe actions, restricted actions, and approval paths.", tag: "Access" },
    { icon: Database, title: "Data Quality", text: "Keep required fields, statuses, and history reliable.", tag: "Data" },
    { icon: ShieldCheck, title: "Bulk Actions", text: "Allow safe updates, assignments, exports, and notifications.", tag: "Speed" },
    { icon: Bell, title: "Exception Handling", text: "Surface failed, overdue, blocked, and abnormal records.", tag: "Alerts" },
    { icon: BarChart3, title: "Audit History", text: "Track important changes and who performed them.", tag: "Audit" }
  ],
    metrics: [

  ],
    flow: [

  ],
    panelTitle: "label should reduce admin effort.",
    panelText: "The goal is faster action, clearer ownership, and safer operations.",
    panelPoints: ["Keep actions simple and safe.", "Make status and ownership visible.", "Track important changes.", "Document the operating process."],
  },
  {
    id: "reports-alerts",
    eyebrow: "Chapter",
    title: "label makes the admin dashboard safer and more useful.",
    intro: "This chapter defines the screens, rules, actions, permissions, and reporting needed for label in a real operations dashboard.",
    cards: [
    { icon: Target, title: "Screen Design", text: "Show only the fields and actions this role needs.", tag: "UX" },
    { icon: Workflow, title: "Permission Rules", text: "Define safe actions, restricted actions, and approval paths.", tag: "Access" },
    { icon: Database, title: "Data Quality", text: "Keep required fields, statuses, and history reliable.", tag: "Data" },
    { icon: ShieldCheck, title: "Bulk Actions", text: "Allow safe updates, assignments, exports, and notifications.", tag: "Speed" },
    { icon: Bell, title: "Exception Handling", text: "Surface failed, overdue, blocked, and abnormal records.", tag: "Alerts" },
    { icon: BarChart3, title: "Audit History", text: "Track important changes and who performed them.", tag: "Audit" }
  ],
    metrics: [

  ],
    flow: [

  ],
    panelTitle: "label should reduce admin effort.",
    panelText: "The goal is faster action, clearer ownership, and safer operations.",
    panelPoints: ["Keep actions simple and safe.", "Make status and ownership visible.", "Track important changes.", "Document the operating process."],
  },
  {
    id: "security-qa",
    eyebrow: "Chapter",
    title: "label makes the admin dashboard safer and more useful.",
    intro: "This chapter defines the screens, rules, actions, permissions, and reporting needed for label in a real operations dashboard.",
    cards: [
    { icon: Target, title: "Screen Design", text: "Show only the fields and actions this role needs.", tag: "UX" },
    { icon: Workflow, title: "Permission Rules", text: "Define safe actions, restricted actions, and approval paths.", tag: "Access" },
    { icon: Database, title: "Data Quality", text: "Keep required fields, statuses, and history reliable.", tag: "Data" },
    { icon: ShieldCheck, title: "Bulk Actions", text: "Allow safe updates, assignments, exports, and notifications.", tag: "Speed" },
    { icon: Bell, title: "Exception Handling", text: "Surface failed, overdue, blocked, and abnormal records.", tag: "Alerts" },
    { icon: BarChart3, title: "Audit History", text: "Track important changes and who performed them.", tag: "Audit" }
  ],
    metrics: [

  ],
    flow: [

  ],
    panelTitle: "label should reduce admin effort.",
    panelText: "The goal is faster action, clearer ownership, and safer operations.",
    panelPoints: ["Keep actions simple and safe.", "Make status and ownership visible.", "Track important changes.", "Document the operating process."],
  },
  {
    id: "launch-roadmap",
    eyebrow: "Chapter",
    title: "label makes the admin dashboard safer and more useful.",
    intro: "This chapter defines the screens, rules, actions, permissions, and reporting needed for label in a real operations dashboard.",
    cards: [
    { icon: Target, title: "Screen Design", text: "Show only the fields and actions this role needs.", tag: "UX" },
    { icon: Workflow, title: "Permission Rules", text: "Define safe actions, restricted actions, and approval paths.", tag: "Access" },
    { icon: Database, title: "Data Quality", text: "Keep required fields, statuses, and history reliable.", tag: "Data" },
    { icon: ShieldCheck, title: "Bulk Actions", text: "Allow safe updates, assignments, exports, and notifications.", tag: "Speed" },
    { icon: Bell, title: "Exception Handling", text: "Surface failed, overdue, blocked, and abnormal records.", tag: "Alerts" },
    { icon: BarChart3, title: "Audit History", text: "Track important changes and who performed them.", tag: "Audit" }
  ],
    metrics: [

  ],
    flow: [

  ],
    panelTitle: "label should reduce admin effort.",
    panelText: "The goal is faster action, clearer ownership, and safer operations.",
    panelPoints: ["Keep actions simple and safe.", "Make status and ownership visible.", "Track important changes.", "Document the operating process."],
  },
  {
    id: "final-cta",
    eyebrow: "Chapter",
    title: "label makes the admin dashboard safer and more useful.",
    intro: "This chapter defines the screens, rules, actions, permissions, and reporting needed for label in a real operations dashboard.",
    cards: [
    { icon: Target, title: "Screen Design", text: "Show only the fields and actions this role needs.", tag: "UX" },
    { icon: Workflow, title: "Permission Rules", text: "Define safe actions, restricted actions, and approval paths.", tag: "Access" },
    { icon: Database, title: "Data Quality", text: "Keep required fields, statuses, and history reliable.", tag: "Data" },
    { icon: ShieldCheck, title: "Bulk Actions", text: "Allow safe updates, assignments, exports, and notifications.", tag: "Speed" },
    { icon: Bell, title: "Exception Handling", text: "Surface failed, overdue, blocked, and abnormal records.", tag: "Alerts" },
    { icon: BarChart3, title: "Audit History", text: "Track important changes and who performed them.", tag: "Audit" }
  ],
    metrics: [

  ],
    flow: [

  ],
    panelTitle: "label should reduce admin effort.",
    panelText: "The goal is faster action, clearer ownership, and safer operations.",
    panelPoints: ["Keep actions simple and safe.", "Make status and ownership visible.", "Track important changes.", "Document the operating process."],
  }
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function getTabFromHash(hash: string): TabId | null {
  const id = hash.replace("#", "");
  return knowledgeTabs.find((item) => item.id === id)?.id ?? null;
}

function scrollToKnowledge() {
  window.requestAnimationFrame(() => {
    const element = document.getElementById("knowledge-content");
    if (!element) return;

    const stickyOffset = window.innerWidth >= 1024 ? 190 : 170;
    const top = element.getBoundingClientRect().top + window.scrollY - stickyOffset;

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: "smooth",
    });
  });
}

function IconShell({
  icon: Icon,
  className,
}: {
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#eef6ff] text-[#2378ff] ring-1 ring-[#bfd7ff]",
        className
      )}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}


function SecondaryButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c8d7ea] bg-white px-6 py-3 text-sm font-extrabold text-[#0f214f] shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition hover:border-[#145cb7] hover:text-[#145cb7]"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </button>
  );
}

function MobileTabs({
  activeTab,
  onTabChange,
}: {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}) {
  return (
    <div className="sticky top-[136px] z-30 border-b border-[#d7e1f2] bg-white/95 px-4 py-3 shadow-sm backdrop-blur-xl lg:hidden">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {knowledgeTabs.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onTabChange(item.id)}
              className={cx(
                "flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-extrabold transition",
                isActive
                  ? "border-[#9fc6e6] bg-[#eef6ff] text-[#145cb7]"
                  : "border-[#d7e1f2] bg-white text-[#334766]"
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

function Breadcrumb({
  currentLabel,
}: {
  currentLabel: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-3 text-sm font-extrabold">
      <Link href="/solutions" className="text-[#0891b2] transition hover:text-[#145cb7]">
        Solutions
      </Link>
      <span className="text-[#9aa7bd]">/</span>
      <Link href="/solutions/web-saas" className="text-[#0891b2] transition hover:text-[#145cb7]">
        Web &amp; SaaS
      </Link>
      <span className="text-[#9aa7bd]">/</span>
      <span className="text-[#334766]">Admin Dashboard</span>
      <span className="text-[#9aa7bd]">/</span>
      <span className="text-[#0f214f]">{currentLabel}</span>
    </nav>
  );
}

function ChapterShell({
  eyebrow,
  title,
  intro,
  currentLabel,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  currentLabel: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-[#d7e1f2] bg-white px-5 py-10 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <Breadcrumb currentLabel={currentLabel} />
      <div className="max-w-5xl">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#145cb7]">{eyebrow}</p>
        <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-[-0.06em] text-[#0f214f] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-4xl text-base font-semibold leading-8 text-[#52627d] sm:text-lg">
          {intro}
        </p>
      </div>
      <div className="mt-10 space-y-8">{children}</div>
    </section>
  );
}

function KnowledgeCard({ item }: { item: CardItem }) {
  const Icon = item.icon;

  return (
    <div className="rounded-[24px] border border-[#d7e1f2] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.045)]">
      <div className="flex items-start gap-4">
        <IconShell icon={Icon} />
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-black tracking-[-0.02em] text-[#0f214f]">{item.title}</h3>
            <span className="rounded-full bg-[#eef6ff] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#145cb7]">
              {item.tag}
            </span>
          </div>
          <p className="mt-2 text-sm font-semibold leading-6 text-[#52627d]">{item.text}</p>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ metric }: { metric: MetricItem }) {
  return (
    <div className="rounded-[22px] border border-[#d7e1f2] bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.045)]">
      <p className="text-xs font-black uppercase tracking-[0.15em] text-[#66728f]">{metric.label}</p>
      <p className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#0f214f]">{metric.value}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-[#52627d]">{metric.note}</p>
      <svg viewBox="0 0 220 36" className="mt-3 h-9 w-full text-[#2378ff]" aria-hidden="true">
        <path
          d="M2 28 L18 24 L34 27 L50 22 L66 25 L82 17 L98 18 L114 14 L130 17 L146 10 L162 13 L178 8 L194 12 L218 7"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
      </svg>
    </div>
  );
}

function SplitPanel({
  title,
  text,
  points,
}: {
  title: string;
  text: string;
  points: string[];
}) {
  return (
    <div className="grid gap-6 rounded-[28px] border border-[#d7e1f2] bg-[#f8fbff] p-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <h2 className="text-2xl font-black tracking-[-0.035em] text-[#0f214f]">{title}</h2>
        <p className="mt-4 text-sm font-semibold leading-7 text-[#52627d]">{text}</p>
        <div className="mt-5 space-y-3">
          {points.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <p className="text-sm font-semibold leading-6 text-[#465374]">{point}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6">
        <p className="text-lg font-black text-[#0f214f]">Operating map</p>
        <div className="mt-5 space-y-3">
          {points.map((point, index) => (
            <div key={point} className="flex items-center gap-3 rounded-2xl bg-[#f8fbff] p-4">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#eef6ff] text-sm font-black text-[#145cb7]">
                {index + 1}
              </span>
              <p className="text-sm font-semibold leading-6 text-[#52627d]">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PreviewWindow() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-[#d7e1f2] bg-white shadow-[0_20px_55px_rgba(15,23,42,0.08)]">
      <div className="flex items-center justify-between border-b border-[#d7e1f2] bg-[#f8fbff] px-5 py-4">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <p className="text-xs font-black text-[#66728f]">Admin Dashboard Preview</p>
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[24px] bg-gradient-to-br from-[#0f214f] via-[#145cb7] to-[#19b7c5] p-6 text-white">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100">Operations Control Room</p>
          <h3 className="mt-4 text-4xl font-black tracking-[-0.05em]">Give your team one place to manage the business.</h3>
          <p className="mt-4 text-sm font-semibold leading-7 text-blue-100">
            Users, records, workflows, payments, reports, alerts, and exceptions become visible and actionable.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Users", "Workflows", "Reports", "Alerts"].map((item) => (
              <p key={item} className="rounded-xl bg-white/12 px-4 py-3 text-xs font-black">{item}</p>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["128", "Open items"], ["17", "Overdue"], ["96%", "Data health"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
                <p className="text-2xl font-black text-[#145cb7]">{value}</p>
                <p className="mt-1 text-xs font-bold text-[#66728f]">{label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
            <p className="text-sm font-black text-[#0f214f]">Core modules</p>
            <div className="mt-4 space-y-2">
              {["Users and roles", "Records and statuses", "Reports and KPIs", "Workflow actions", "Alerts and audit history"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                  <span className="text-xs font-black text-[#0f214f]">{item}</span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#bfd7ff] bg-[#eef6ff] px-4 py-3">
            <p className="text-sm font-black text-[#145cb7]">Outcome: data → action → team control → operational clarity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowVisual({ items }: { items: CardItem[] }) {
  return (
    <div className="overflow-x-auto rounded-[28px] border border-[#d7e1f2] bg-[#f8fbff] p-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex min-w-max items-stretch gap-4">
        {items.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.title} className="relative flex w-[235px] shrink-0">
              <div className="flex min-h-[250px] w-full flex-col rounded-[24px] border border-[#d7e1f2] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.045)]">
                <div className="flex items-start justify-between gap-4">
                  <IconShell icon={Icon} className="h-12 w-12" />
                  <span className="rounded-full bg-[#eef6ff] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#145cb7]">
                    Step {index + 1}
                  </span>
                </div>
                <p className="mt-5 text-xl font-black tracking-[-0.03em] text-[#0f214f]">{step.title}</p>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#52627d]">{step.text}</p>
              </div>

              {index < items.length - 1 ? (
                <span className="absolute -right-6 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#bfd7ff] bg-white text-[#2378ff] shadow-[0_10px_20px_rgba(15,23,42,0.08)] md:flex">
                  <ArrowRight className="h-4 w-4" />
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AnalyticsDashboard({ metrics }: { metrics: MetricItem[] }) {
  return (
    <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.04)]">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-xl font-black text-[#0f214f]">Admin Operations View</p>
          <p className="mt-1 text-sm font-semibold text-[#66728f]">Records, alerts, team workload, exceptions, and performance in one dashboard.</p>
        </div>
        <span className="rounded-full bg-[#eef6ff] px-4 py-2 text-xs font-black text-[#145cb7]">Ops ready</span>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.slice(0, 4).map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>
    </div>
  );
}

function ContentSection({
  section,
  activeLabel,
  setActiveTab,
}: {
  section: SectionItem;
  activeLabel: string;
  setActiveTab: (tab: TabId) => void;
}) {
  const sectionIndex = knowledgeTabs.findIndex((tab) => tab.id === section.id);
  const nextTab = knowledgeTabs[sectionIndex + 1]?.id;

  return (
    <ChapterShell eyebrow={section.eyebrow} title={section.title} intro={section.intro} currentLabel={activeLabel}>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {section.cards.slice(0, 4).map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      {section.id === "overview" ? <PreviewWindow /> : null}

      {section.flow.length ? <FlowVisual items={section.flow} /> : null}

      {section.cards.length > 4 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {section.cards.slice(4).map((item) => (
            <KnowledgeCard key={item.title} item={item} />
          ))}
        </div>
      ) : null}

      {section.metrics.length ? <AnalyticsDashboard metrics={section.metrics} /> : null}

      {section.panelTitle ? (
        <SplitPanel
          title={section.panelTitle}
          text={section.panelText}
          points={section.panelPoints}
        />
      ) : null}

      {nextTab ? (
        <div className="flex flex-col gap-3 rounded-[28px] bg-[#075edb] p-6 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xl font-black">Continue the journey.</p>
            <p className="mt-2 text-sm font-semibold text-blue-100">
              Open the next knowledge chapter to understand the complete solution system.
            </p>
          </div>
          <SecondaryButton onClick={() => setActiveTab(nextTab)}>Open Next Chapter</SecondaryButton>
        </div>
      ) : null}
    </ChapterShell>
  );
}

function renderSection(activeTab: TabId, activeLabel: string, setActiveTab: (tab: TabId) => void) {
  const section = sections.find((item) => item.id === activeTab) ?? sections[0];

  return <ContentSection section={section} activeLabel={activeLabel} setActiveTab={setActiveTab} />;
}

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<TabId>(() => {
    if (typeof window === "undefined") {
      return "overview";
    }

    return getTabFromHash(window.location.hash) ?? "overview";
  });

  const activeLabel = useMemo(
    () => knowledgeTabs.find((item) => item.id === activeTab)?.label ?? "Overview",
    [activeTab]
  );

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
    window.history.replaceState(null, "", `#${tab}`);
    scrollToKnowledge();
  };

  return (
    <main className="min-h-screen bg-[#f8fbff] text-[#0f214f]">
      <SolutionCategoryTabs category="web-saas" solutions={webSaasSolutions} />
      <MobileTabs activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="mx-auto flex max-w-[min(92vw,1440px)] pt-14">
        <SolutionSidebar<TabId>
          title="Admin Dashboard"
          subtitle="Operations Control Room"
          icon={LayoutDashboard}
          items={knowledgeTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          ctaTitle="Build Admin Dashboard"
          ctaText="Create one control room for users, workflows, records, reports, alerts, and operational actions."
          ctaButtonText="Plan Dashboard"
          ctaHref="/contact"
        />

        <div id="knowledge-content" className="min-w-0 flex-1">
          <div className="mb-5 rounded-2xl border border-[#d7e1f2] bg-white px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)] lg:hidden">
            <p className="text-xs font-bold text-[#66728f]">Admin Dashboard</p>
            <p className="text-sm font-black text-[#0f214f]">{activeLabel}</p>
          </div>

          {renderSection(activeTab, activeLabel, handleTabChange)}
        </div>
      </div>
    </main>
  );
}
