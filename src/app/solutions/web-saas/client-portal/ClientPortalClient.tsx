"use client";

import Link from "next/link";
import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  CircleAlert,
  Clock3,
  Database,
  FileCheck2,
  FileText,
  FolderOpen,
  Gauge,
  GitBranch,
  Home,
  KeyRound,
  LayoutDashboard,
  LockKeyhole,
  MessageCircle,
  MousePointerClick,
  Rocket,
  SearchCheck,
  Send,
  Settings,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TicketCheck,
  TrendingUp,
  UploadCloud,
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
  { id: "client-chaos", label: "Client Chaos", icon: CircleAlert },
  { id: "portal-strategy", label: "Portal Strategy", icon: Target },
  { id: "user-access", label: "User Access", icon: LockKeyhole },
  { id: "request-workflows", label: "Request Workflows", icon: Workflow },
  { id: "documents-updates", label: "Documents & Updates", icon: FolderOpen },
  { id: "communication-hub", label: "Communication Hub", icon: MessageCircle },
  { id: "admin-operations", label: "Admin Operations", icon: LayoutDashboard },
  { id: "launch-growth", label: "Launch & Growth", icon: Rocket },
  { id: "final-cta", label: "Final CTA", icon: ArrowRight },
] as const;

type TabId = (typeof knowledgeTabs)[number]["id"];

type CardItem = {
  icon: LucideIcon;
  title: string;
  text: string;
  tag?: string;
};

type MetricItem = {
  label: string;
  value: string;
  note: string;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function getTabFromHash(hash: string): TabId | null {
  const id = hash.replace("#", "");
  return knowledgeTabs.find((item) => item.id === id)?.id ?? null;
}

const BREADCRUMB_MODULE = "Client Portal";
const ActiveLabelContext = createContext("Overview");

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

function Breadcrumb() {
  const activeLabel = useContext(ActiveLabelContext);

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
      <span className="text-[#334766]">{BREADCRUMB_MODULE}</span>
      <span className="text-[#9aa7bd]">/</span>
      <span className="text-[#0f214f]">{activeLabel}</span>
    </nav>
  );
}

function ChapterShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-[#d7e1f2] bg-white px-5 py-10 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <Breadcrumb />
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
            {item.tag ? (
              <span className="rounded-full bg-[#eef6ff] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#145cb7]">
                {item.tag}
              </span>
            ) : null}
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
  visual,
}: {
  title: string;
  text: string;
  points: string[];
  visual: ReactNode;
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
      {visual}
    </div>
  );
}

function PortalPreviewWindow() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-[#d7e1f2] bg-white shadow-[0_20px_55px_rgba(15,23,42,0.08)]">
      <div className="flex items-center justify-between border-b border-[#d7e1f2] bg-[#f8fbff] px-5 py-4">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <p className="text-xs font-black text-[#66728f]">Client Portal Preview</p>
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-[220px_1fr]">
        <aside className="rounded-[24px] bg-[#0f214f] p-5 text-white">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/12">
              <LockKeyhole className="h-5 w-5 text-cyan-200" />
            </span>
            <div>
              <p className="text-sm font-black">Client Area</p>
              <p className="text-[11px] font-semibold text-blue-100">Secure workspace</p>
            </div>
          </div>

          <div className="mt-7 space-y-2">
            {["Dashboard", "Requests", "Documents", "Messages", "Invoices", "Support"].map((item, index) => (
              <div
                key={item}
                className={cx(
                  "rounded-xl px-4 py-3 text-xs font-black",
                  index === 0 ? "bg-white text-[#145cb7]" : "bg-white/8 text-blue-100"
                )}
              >
                {item}
              </div>
            ))}
          </div>
        </aside>

        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["12", "Open requests"],
              ["28", "Shared files"],
              ["4", "Pending approvals"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
                <p className="text-2xl font-black text-[#145cb7]">{value}</p>
                <p className="mt-1 text-xs font-bold text-[#66728f]">{label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
            <p className="text-sm font-black text-[#0f214f]">Latest client activity</p>
            <div className="mt-4 space-y-2">
              {[
                ["Website content updated", "Approved"],
                ["New support request", "In review"],
                ["Invoice uploaded", "Pending payment"],
                ["Project milestone", "Completed"],
              ].map(([title, status]) => (
                <div key={title} className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                  <span className="text-xs font-black text-[#0f214f]">{title}</span>
                  <span className="rounded-md bg-[#eef6ff] px-2 py-1 text-[10px] font-black text-[#145cb7]">
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#bfd7ff] bg-[#eef6ff] px-4 py-3">
            <p className="text-sm font-black text-[#145cb7]">Outcome: client requests → team action → status updates → clear history</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PortalChaosVisual() {
  const gaps = [
    { icon: MessageCircle, title: "Scattered Communication", text: "Requests are spread across WhatsApp, email, calls, and team chats." },
    { icon: FolderOpen, title: "Lost Documents", text: "Files, approvals, and versions are hard to find later." },
    { icon: Clock3, title: "No Status Visibility", text: "Clients keep asking what is pending, approved, or completed." },
    { icon: TicketCheck, title: "Untracked Requests", text: "Support and service requests do not have priority, owner, or due date." },
    { icon: UserCheck, title: "Manual Follow-up", text: "Team members manually remind clients and internally chase tasks." },
    { icon: BarChart3, title: "No Client Insights", text: "The business cannot see client activity, delays, repeated requests, or support load." },
  ];

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-red-100 bg-gradient-to-br from-white via-[#fffafa] to-[#fff7f7] p-6">
      <div className="grid gap-5 xl:grid-cols-[1fr_260px_1fr] xl:items-center">
        <div className="grid gap-4">
          {gaps.slice(0, 3).map((item) => (
            <KnowledgeCard key={item.title} item={{ ...item, tag: "Friction" }} />
          ))}
        </div>

        <div className="rounded-[28px] border border-red-200 bg-white p-6 text-center shadow-[0_26px_70px_rgba(185,28,28,0.10)]">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-red-50 text-red-500">
            <CircleAlert className="h-7 w-7" />
          </div>
          <h3 className="mt-4 text-xl font-black text-red-700">Client Service Chaos</h3>
          <p className="mt-3 text-sm font-semibold leading-6 text-[#52627d]">
            The business delivers work, but client communication and operations are not centralized.
          </p>
        </div>

        <div className="grid gap-4">
          {gaps.slice(3).map((item) => (
            <KnowledgeCard key={item.title} item={{ ...item, tag: "Risk" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PortalBlueprintVisual() {
  const nodes = [
    { icon: LockKeyhole, title: "Login", text: "Secure client access" },
    { icon: Users, title: "Roles", text: "Client/team permissions" },
    { icon: TicketCheck, title: "Requests", text: "Structured tasks" },
    { icon: FolderOpen, title: "Documents", text: "Files and versions" },
    { icon: MessageCircle, title: "Messages", text: "Contextual updates" },
    { icon: FileCheck2, title: "Approvals", text: "Clear decisions" },
    { icon: Bell, title: "Notifications", text: "Reminders and alerts" },
    { icon: BarChart3, title: "Reports", text: "Activity and SLA view" },
  ];

  return (
    <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.04)]">
      <div className="grid gap-5 lg:grid-cols-[1fr_220px_1fr] lg:items-center">
        <div className="space-y-3">
          {nodes.slice(0, 4).map((node) => (
            <div key={node.title} className="flex items-center gap-3 rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-3">
              <IconShell icon={node.icon} className="h-10 w-10 rounded-xl" />
              <div>
                <p className="text-sm font-black text-[#145cb7]">{node.title}</p>
                <p className="text-xs font-semibold text-[#66728f]">{node.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mx-auto grid h-[220px] w-[220px] place-items-center rounded-full bg-[#eef6ff]">
          <div className="absolute inset-5 rounded-full border border-dashed border-[#8ad8ee]" />
          <div className="absolute inset-10 rounded-full border border-[#d7e1f2] bg-white" />
          <div className="relative grid h-[132px] w-[132px] place-items-center rounded-full bg-gradient-to-br from-[#0f214f] to-[#145cb7] text-white shadow-[0_25px_65px_rgba(20,92,183,0.30)]">
            <div className="text-center">
              <LockKeyhole className="mx-auto h-8 w-8 text-[#8ee7f4]" />
              <p className="mt-2 text-xl font-black">Portal</p>
              <p className="text-[11px] font-bold text-cyan-100">Client OS</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {nodes.slice(4).map((node) => (
            <div key={node.title} className="flex items-center gap-3 rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-3">
              <IconShell icon={node.icon} className="h-10 w-10 rounded-xl" />
              <div>
                <p className="text-sm font-black text-[#145cb7]">{node.title}</p>
                <p className="text-xs font-semibold text-[#66728f]">{node.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PortalJourneyVisual() {
  const steps = [
    { icon: LockKeyhole, title: "Client Login", text: "Client enters a secure branded workspace." },
    { icon: Home, title: "Dashboard", text: "They see requests, files, updates, payments, and next actions." },
    { icon: TicketCheck, title: "New Request", text: "Request type, priority, details, and files are submitted." },
    { icon: UserCheck, title: "Team Assignment", text: "Admin assigns owner, status, due date, and internal notes." },
    { icon: Bell, title: "Client Update", text: "Client receives status change, message, or approval request." },
    { icon: BarChart3, title: "Activity History", text: "The business sees workload, response time, and client engagement." },
  ];

  return (
    <div className="overflow-x-auto rounded-[28px] border border-[#d7e1f2] bg-[#f8fbff] p-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex min-w-max items-stretch gap-4">
        {steps.map((step, index) => {
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

              {index < steps.length - 1 ? (
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

function PortalOperationsDashboard() {
  return (
    <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.04)]">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-xl font-black text-[#0f214f]">Client Portal Operations View</p>
          <p className="mt-1 text-sm font-semibold text-[#66728f]">
            Requests, approvals, files, client activity, response time, and team workload in one admin view.
          </p>
        </div>
        <span className="rounded-full bg-[#eef6ff] px-4 py-2 text-xs font-black text-[#145cb7]">Client Ops Ready</span>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Open Requests", value: "42", note: "Across all active clients" },
          { label: "Pending Approvals", value: "11", note: "Waiting for client decision" },
          { label: "Avg Response", value: "3.2h", note: "Team reply baseline" },
          { label: "Files Shared", value: "186", note: "Documents in portal" },
        ].map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mt-6 grid gap-5 xl:grid-cols-[1fr_0.85fr]">
        <div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-5">
          <p className="text-sm font-black text-[#0f214f]">Request Status Board</p>
          <div className="mt-5 space-y-3">
            {[
              ["New", "12", "w-[46%]"],
              ["In Review", "18", "w-[68%]"],
              ["Waiting Client", "11", "w-[42%]"],
              ["Completed", "39", "w-full"],
              ["Blocked", "3", "w-[20%]"],
            ].map(([label, value, width]) => (
              <div key={label} className="grid grid-cols-[1fr_72px] items-center gap-3">
                <div className="rounded-xl bg-white p-1">
                  <div className={`${width} rounded-lg bg-[#0b6ffb] px-4 py-2 text-xs font-black text-white`}>
                    {label}
                  </div>
                </div>
                <p className="text-right text-sm font-black text-[#0f214f]">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-5">
          <p className="text-sm font-black text-[#0f214f]">Next Admin Actions</p>
          <div className="mt-4 space-y-3">
            {[
              ["Assign 5 unowned requests", "Owner"],
              ["Send 3 approval reminders", "Client"],
              ["Review overdue tickets", "SLA"],
              ["Archive completed files", "Docs"],
            ].map(([action, tag]) => (
              <div key={action} className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                <p className="text-xs font-black text-[#0f214f]">{action}</p>
                <span className="rounded-md bg-[#eef6ff] px-2 py-1 text-[10px] font-black text-[#145cb7]">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function OverviewSection({ setActiveTab }: { setActiveTab: (tab: TabId) => void }) {
  return (
    <ChapterShell
      eyebrow="Client Portal"
      title="Give clients a secure workspace instead of scattered communication."
      intro="A client portal turns requests, files, approvals, messages, invoices, support, and project updates into one organized digital workspace. It improves transparency for clients and gives the business a structured operating system for client service."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: LockKeyhole, title: "Secure Access", text: "Clients log in to a branded area with role-based access, protected files, and personal activity history.", tag: "Access" },
          { icon: TicketCheck, title: "Request System", text: "Support, service, project, document, and change requests become structured tickets with owner and status.", tag: "Workflow" },
          { icon: FolderOpen, title: "Document Hub", text: "Files, approvals, invoices, reports, and deliverables live in one searchable client workspace.", tag: "Files" },
          { icon: BarChart3, title: "Operational Visibility", text: "Admins can see activity, response time, pending approvals, workload, and client health.", tag: "Ops" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <PortalPreviewWindow />
      <PortalBlueprintVisual />

      <SplitPanel
        title="A client portal is not just a login page."
        text="It is the controlled layer between your team and your clients. It reduces manual follow-up, organizes service delivery, and makes every client interaction easier to track."
        points={[
          "Clients know what is pending, approved, uploaded, or completed.",
          "Teams know request owner, priority, due date, and next action.",
          "Files and approvals stop getting lost in WhatsApp and email.",
          "The business can measure response time, support volume, and client activity.",
        ]}
        visual={<PortalJourneyVisual />}
      />

      <div className="flex flex-col gap-3 rounded-[28px] bg-[#075edb] p-6 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-black">First identify the client-service chaos.</p>
          <p className="mt-2 text-sm font-semibold text-blue-100">
            The next chapter shows why client communication becomes hard to scale without a portal.
          </p>
        </div>
        <SecondaryButton onClick={() => setActiveTab("client-chaos")}>Open Client Chaos</SecondaryButton>
      </div>
    </ChapterShell>
  );
}

function ClientChaosSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 01"
      title="Client service breaks when communication, files, and requests are scattered."
      intro="As a business grows, WhatsApp messages, emails, calls, spreadsheets, shared drives, and manual reminders start creating confusion. Clients ask for updates repeatedly, teams miss context, and managers do not get a clear operations view."
    >
      <PortalChaosVisual />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          { icon: MessageCircle, title: "Multiple Channels", text: "Requests come through WhatsApp, email, phone, forms, and team chats without one official record.", tag: "Communication" },
          { icon: FolderOpen, title: "File Confusion", text: "Clients and teams lose track of the latest version, uploaded proof, invoices, reports, or signed documents.", tag: "Documents" },
          { icon: Clock3, title: "Update Pressure", text: "Clients keep asking for status because there is no self-serve progress view.", tag: "Status" },
          { icon: TicketCheck, title: "No Request Ownership", text: "Requests are received, but no clear owner, due date, priority, or escalation path exists.", tag: "Workflow" },
          { icon: Bell, title: "Manual Reminders", text: "Follow-ups depend on memory instead of system reminders and notification rules.", tag: "Reminders" },
          { icon: BarChart3, title: "No Operations Data", text: "The business cannot see workload, repeated issues, response time, or client satisfaction signals.", tag: "Data" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {[
          { label: "Client Requests", value: "42", note: "Open requests without central visibility" },
          { label: "Approval Delays", value: "11", note: "Pending client-side decisions" },
          { label: "Lost Context", value: "28%", note: "Requests missing history or file link" },
          { label: "Manual Follow-ups", value: "17", note: "Reminders handled outside system" },
          { label: "Avg Response", value: "3.2h", note: "Baseline to improve after portal launch" },
        ].map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <SplitPanel
        title="The real cost is operational leakage."
        text="The client may still receive service, but the business loses time, clarity, accountability, and client confidence."
        points={[
          "Team members repeat context because history is scattered.",
          "Clients feel uncertain because status is not visible.",
          "Managers cannot measure response quality or workload.",
          "Files and approvals slow down delivery when they are not organized.",
        ]}
        visual={<PortalOperationsDashboard />}
      />
    </ChapterShell>
  );
}

function PortalStrategySection() {
  return (
    <ChapterShell
      eyebrow="Chapter 02"
      title="Portal strategy defines what clients should see and what your team should control."
      intro="Before building screens, HNX maps the client journey, internal operations, roles, request types, document flow, approval steps, notifications, and reporting needs."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          { icon: Target, title: "Portal Objective", text: "Define whether the portal is for support, project updates, client onboarding, files, payments, reports, or service requests.", tag: "Goal" },
          { icon: Users, title: "Client Types", text: "Map different client roles: owner, manager, finance user, team member, viewer, or approver.", tag: "Users" },
          { icon: Workflow, title: "Service Flow", text: "Define how requests move from submitted to assigned, in progress, waiting, approved, and completed.", tag: "Process" },
          { icon: FolderOpen, title: "Document Logic", text: "Plan what can be uploaded, downloaded, approved, versioned, or restricted by role.", tag: "Files" },
          { icon: Bell, title: "Notification Rules", text: "Decide which events trigger email, in-app, WhatsApp, or admin notifications.", tag: "Alerts" },
          { icon: BarChart3, title: "Success Metrics", text: "Track response time, request volume, overdue items, pending approvals, and client activity.", tag: "Metrics" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <SplitPanel
        title="The portal should match your service model."
        text="A healthcare portal, event portal, real-estate portal, SaaS customer portal, and agency client portal do not need the same modules. The strategy decides the right experience."
        points={[
          "What does the client need to do repeatedly?",
          "What does the client need to see without asking your team?",
          "What should only admins be allowed to manage?",
          "Which manual follow-ups should the portal automate?",
        ]}
        visual={<PortalBlueprintVisual />}
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-[24px] border border-red-200 bg-red-50 p-6">
          <p className="text-lg font-black text-red-700">Weak portal idea</p>
          <p className="mt-4 text-2xl font-black tracking-[-0.03em] text-[#0f214f]">“Give clients a login to see files.”</p>
          <p className="mt-4 text-sm font-semibold leading-6 text-[#52627d]">
            This solves only one small part. It does not manage requests, approvals, status, communication, and operations.
          </p>
        </div>
        <div className="rounded-[24px] border border-emerald-200 bg-emerald-50 p-6">
          <p className="text-lg font-black text-emerald-700">Strong portal idea</p>
          <p className="mt-4 text-2xl font-black tracking-[-0.03em] text-[#0f214f]">
            “Give every client a secure workspace to request work, track status, approve files, message the team, and view documents.”
          </p>
          <p className="mt-4 text-sm font-semibold leading-6 text-[#52627d]">
            This creates operational value for both client and internal team.
          </p>
        </div>
      </div>
    </ChapterShell>
  );
}

function UserAccessSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 03"
      title="Client portals need secure access, roles, and permission boundaries."
      intro="Every client portal needs clear rules for who can log in, what they can see, what they can upload, what they can approve, and what admins can control."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: LockKeyhole, title: "Authentication", text: "Email/password, magic link, OTP, OAuth, or invite-based access depending on the portal use case.", tag: "Login" },
          { icon: KeyRound, title: "Role Permissions", text: "Client owner, client member, finance user, approver, viewer, admin, manager, and support agent permissions.", tag: "RBAC" },
          { icon: UserCheck, title: "Client Workspace", text: "Each client sees only their own requests, documents, invoices, approvals, and messages.", tag: "Tenant" },
          { icon: ShieldCheck, title: "Data Protection", text: "Sensitive files and messages need access control, audit history, and safe download rules.", tag: "Security" },
          { icon: UploadCloud, title: "Upload Controls", text: "File type, size, folder, ownership, visibility, and approval rules should be defined.", tag: "Files" },
          { icon: Bell, title: "Invite Flow", text: "Admins can invite users, resend invites, deactivate access, and manage client-side team members.", tag: "Access" },
          { icon: Activity, title: "Audit Trail", text: "Track who uploaded, viewed, approved, changed status, or commented on an item.", tag: "History" },
          { icon: Smartphone, title: "Mobile Access", text: "Clients should be able to check updates, upload files, and reply from mobile comfortably.", tag: "Mobile" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <div className="rounded-[28px] border border-[#d7e1f2] bg-[#f8fbff] p-6">
        <p className="text-xl font-black text-[#0f214f]">Permission map example</p>
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {[
            ["Client Owner", "Approve, upload, invite, view billing"],
            ["Client Member", "Create requests and comment"],
            ["Approver", "Approve files and milestones"],
            ["Admin", "Manage everything"],
            ["Support Agent", "Handle assigned requests"],
          ].map(([role, access]) => (
            <div key={role} className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm font-black text-[#145cb7]">{role}</p>
              <p className="mt-3 text-xs font-semibold leading-5 text-[#52627d]">{access}</p>
            </div>
          ))}
        </div>
      </div>

      <SplitPanel
        title="Access control protects both client trust and business operations."
        text="The portal should feel simple to clients, but the permission logic behind it needs to be carefully designed."
        points={[
          "Clients should never see another client's data.",
          "Approvals should be restricted to authorized users.",
          "Admins should be able to revoke access quickly.",
          "Audit history should reduce disputes and confusion.",
        ]}
        visual={<PortalPreviewWindow />}
      />
    </ChapterShell>
  );
}

function RequestWorkflowsSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 04"
      title="Request workflows turn client work into a controlled process."
      intro="Instead of receiving vague messages, your portal can guide clients to submit structured requests with category, details, priority, attachments, approval needs, and due-date context."
    >
      <PortalJourneyVisual />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: TicketCheck, title: "Request Types", text: "Support ticket, service request, project change, document request, approval request, billing query, or onboarding task.", tag: "Type" },
          { icon: FileText, title: "Smart Forms", text: "Each request type can ask different fields so the team gets the right information upfront.", tag: "Input" },
          { icon: Target, title: "Priority Logic", text: "Low, normal, high, urgent, SLA-based, or subscription-based priority can guide team response.", tag: "Priority" },
          { icon: UserCheck, title: "Assignment", text: "Requests can be assigned to owner, department, team queue, or automation rule.", tag: "Owner" },
          { icon: Clock3, title: "Status Flow", text: "New, assigned, in progress, waiting client, pending approval, completed, reopened, or blocked.", tag: "Status" },
          { icon: Bell, title: "Reminders", text: "Due dates and client-side pending actions can trigger notifications.", tag: "Alerts" },
          { icon: MessageCircle, title: "Context Comments", text: "Discussion stays attached to the request instead of getting lost in chat apps.", tag: "Context" },
          { icon: BarChart3, title: "Workflow Reporting", text: "Admins can measure volume, delays, overdue work, and repeated issue types.", tag: "Data" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <SplitPanel
        title="Good workflows reduce back-and-forth."
        text="When the portal asks the right questions, your team starts with the right context and clients understand what happens next."
        points={[
          "Create request templates for common needs.",
          "Attach files and notes directly to the request.",
          "Show status and expected next step to clients.",
          "Escalate overdue or urgent work automatically.",
        ]}
        visual={<PortalOperationsDashboard />}
      />
    </ChapterShell>
  );
}

function DocumentsUpdatesSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 05"
      title="Documents, files, approvals, and updates need one organized home."
      intro="A client portal should make it easy to upload, share, approve, download, version, and find important documents without digging through old messages or email threads."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: FolderOpen, title: "Document Library", text: "Organize files by client, project, category, status, date, or request.", tag: "Library" },
          { icon: UploadCloud, title: "Client Uploads", text: "Clients can submit required documents, references, approvals, or supporting files.", tag: "Upload" },
          { icon: FileCheck2, title: "Approval Flow", text: "Mark documents as pending review, approved, rejected, revised, or final.", tag: "Approval" },
          { icon: Activity, title: "Version History", text: "Keep track of updated files, old versions, changes, and final deliverables.", tag: "Version" },
          { icon: ShieldCheck, title: "Secure Access", text: "Documents should respect client workspace, role, and visibility rules.", tag: "Security" },
          { icon: Bell, title: "Upload Notifications", text: "Notify admins or clients when a file is uploaded, approved, or needs revision.", tag: "Alerts" },
          { icon: SearchCheck, title: "Search & Filter", text: "Clients and admins should quickly find the right document or status.", tag: "Find" },
          { icon: Database, title: "Storage Strategy", text: "Plan where files live, how they are named, and how they are archived.", tag: "Storage" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <SplitPanel
        title="A document hub should reduce dependency on manual messages."
        text="Clients should know which documents are required, which are approved, and which need action."
        points={[
          "Use clear statuses for each document.",
          "Connect documents to requests or projects.",
          "Notify the right person when action is needed.",
          "Keep final files separated from drafts and references.",
        ]}
        visual={
          <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6">
            <p className="text-lg font-black text-[#0f214f]">Document status board</p>
            <div className="mt-5 space-y-3">
              {[
                ["Agreement.pdf", "Approved"],
                ["Brand-assets.zip", "Received"],
                ["Invoice-May.pdf", "Pending payment"],
                ["Homepage-copy.docx", "Needs revision"],
                ["Launch-report.pdf", "Final"],
              ].map(([file, status]) => (
                <div key={file} className="flex items-center justify-between rounded-xl bg-[#f8fbff] px-4 py-3">
                  <p className="text-xs font-black text-[#0f214f]">{file}</p>
                  <span className="rounded-md bg-[#eef6ff] px-2 py-1 text-[10px] font-black text-[#145cb7]">{status}</span>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <PortalPreviewWindow />
    </ChapterShell>
  );
}

function CommunicationHubSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 06"
      title="Communication becomes clearer when messages stay attached to context."
      intro="Instead of discussing everything in separate channels, a portal can attach messages to requests, documents, projects, invoices, approvals, and support tickets."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: MessageCircle, title: "Context Threads", text: "Messages stay connected to a request, document, project, or approval.", tag: "Context" },
          { icon: Users, title: "Client-Team Discussion", text: "Clients and team members can comment without mixing unrelated topics.", tag: "Conversation" },
          { icon: Bell, title: "Smart Notifications", text: "Notify only the people who need to respond or approve.", tag: "Alerts" },
          { icon: FileText, title: "Decision History", text: "Approvals, comments, changes, and final decisions remain visible later.", tag: "History" },
          { icon: Clock3, title: "Response Expectations", text: "Set expected reply time, status, or next step for common requests.", tag: "SLA" },
          { icon: ShieldCheck, title: "Private Notes", text: "Admins can keep internal notes separate from client-facing updates.", tag: "Internal" },
          { icon: Send, title: "Email Bridge", text: "Important portal updates can also send email notifications.", tag: "Email" },
          { icon: Smartphone, title: "Mobile-friendly Replies", text: "Clients should reply or approve quickly from mobile.", tag: "Mobile" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <SplitPanel
        title="Communication should reduce confusion, not create more noise."
        text="The portal should separate update notifications from real discussion and keep each message attached to its work item."
        points={[
          "Request comments stay inside that request.",
          "Document feedback stays attached to that document.",
          "Internal notes stay hidden from clients.",
          "Notifications should be useful, not overwhelming.",
        ]}
        visual={
          <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6">
            <p className="text-lg font-black text-[#0f214f]">Request thread example</p>
            <div className="mt-5 space-y-3">
              {[
                ["Client", "Uploaded revised content file."],
                ["Admin", "Assigned to design team."],
                ["Designer", "Need approval on hero section."],
                ["Client", "Approved. Please proceed."],
              ].map(([role, message]) => (
                <div key={`${role}-${message}`} className="rounded-2xl bg-[#f8fbff] p-4">
                  <p className="text-xs font-black text-[#145cb7]">{role}</p>
                  <p className="mt-1 text-sm font-semibold text-[#52627d]">{message}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <PortalOperationsDashboard />
    </ChapterShell>
  );
}

function AdminOperationsSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 07"
      title="The admin side turns the portal into a client operations control room."
      intro="A client portal only works if the internal team has a strong admin view. Admins need to manage clients, users, requests, files, statuses, notifications, permissions, reports, and escalation rules."
    >
      <PortalOperationsDashboard />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: Users, title: "Client Management", text: "Create client accounts, manage teams, invite users, deactivate users, and control workspace settings.", tag: "Clients" },
          { icon: TicketCheck, title: "Request Queue", text: "View new, assigned, overdue, blocked, waiting client, and completed requests.", tag: "Queue" },
          { icon: UserCheck, title: "Team Assignment", text: "Assign work to team members, departments, or service queues.", tag: "Owner" },
          { icon: Settings, title: "Workflow Rules", text: "Configure statuses, priorities, request types, notifications, and approval steps.", tag: "Rules" },
          { icon: FolderOpen, title: "File Controls", text: "Manage client documents, visibility, folders, versions, and archive rules.", tag: "Files" },
          { icon: Bell, title: "Notification Center", text: "Send reminders, updates, overdue alerts, and client action prompts.", tag: "Alerts" },
          { icon: BarChart3, title: "Reports", text: "Track response time, request volume, workload, overdue work, and client activity.", tag: "Reports" },
          { icon: Gauge, title: "Service Health", text: "See which clients are active, stuck, delayed, or needing follow-up.", tag: "Health" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <SplitPanel
        title="Client experience depends on internal control."
        text="The client only sees a clean portal if the admin system behind it is well designed."
        points={[
          "Admins need a fast view of what needs attention.",
          "Work should be assignable and measurable.",
          "Notifications should prevent stuck requests.",
          "Reports should reveal service quality and bottlenecks.",
        ]}
        visual={<PortalPreviewWindow />}
      />
    </ChapterShell>
  );
}

function LaunchGrowthSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 08"
      title="A client portal should launch with onboarding, support, and improvement planning."
      intro="Portal launch is not only deployment. It includes client onboarding, permissions setup, request templates, document structure, notification testing, admin training, and post-launch improvement based on real usage."
    >
      <div className="grid gap-5 xl:grid-cols-5">
        {[
          { icon: Target, title: "Discovery", days: "Step 01", text: "Map client types, service workflows, documents, requests, approvals, and admin needs.", deliverable: "Portal strategy" },
          { icon: GitBranch, title: "Architecture", days: "Step 02", text: "Plan modules, roles, permissions, request statuses, notifications, and data structure.", deliverable: "Portal blueprint" },
          { icon: Settings, title: "Build", days: "Step 03", text: "Develop login, dashboards, request forms, files, messages, admin controls, and reports.", deliverable: "Working portal" },
          { icon: ShieldCheck, title: "QA & Onboarding", days: "Step 04", text: "Test access, files, forms, notifications, mobile UX, and train team/client users.", deliverable: "Launch-ready portal" },
          { icon: TrendingUp, title: "Improve", days: "Step 05", text: "Review client usage, response time, stuck items, request volume, and user feedback.", deliverable: "Growth roadmap" },
        ].map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.title} className="relative rounded-[24px] border border-[#d7e1f2] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.045)]">
              <div className="flex items-center justify-between">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#eef6ff] text-sm font-black text-[#145cb7]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs font-black text-[#66728f]">{step.days}</span>
              </div>
              <IconShell icon={Icon} className="mt-6 h-16 w-16" />
              <p className="mt-6 text-xl font-black text-[#0f214f]">{step.title}</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-[#52627d]">{step.text}</p>
              <p className="mt-5 text-sm font-black text-[#145cb7]">Deliverable: {step.deliverable}</p>
              {index < 4 ? <ArrowRight className="absolute -right-5 top-1/2 z-20 hidden h-6 w-6 -translate-y-1/2 text-[#2378ff] xl:block" /> : null}
            </div>
          );
        })}
      </div>

      <SplitPanel
        title="Portal success improves after real client usage."
        text="Once clients and teams start using it, the portal can be improved with better request templates, faster response paths, automation, and reports."
        points={[
          "Review which request types are repeated most often.",
          "Improve forms where clients submit incomplete information.",
          "Automate reminders for stuck approvals or overdue tasks.",
          "Add reports for client health, workload, and response quality.",
        ]}
        visual={<PortalOperationsDashboard />}
      />
    </ChapterShell>
  );
}

function FinalCtaSection() {
  return (
    <ChapterShell
      eyebrow="Final CTA"
      title="Build a client portal that makes your business easier to work with."
      intro="HNX can help you create a secure portal where clients submit requests, upload files, approve work, track progress, communicate with your team, and stay informed without manual follow-up."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          { icon: Target, title: "Portal Strategy", text: "Clarify users, roles, request types, documents, approvals, notifications, and admin needs.", tag: "Strategy" },
          { icon: LockKeyhole, title: "Secure Login", text: "Build protected client workspaces with role-based access and account management.", tag: "Access" },
          { icon: TicketCheck, title: "Request System", text: "Create structured request workflows with status, priority, owner, files, and comments.", tag: "Workflow" },
          { icon: FolderOpen, title: "Document Hub", text: "Organize files, uploads, approvals, invoices, reports, and deliverables in one place.", tag: "Files" },
          { icon: LayoutDashboard, title: "Admin Dashboard", text: "Give your team control over clients, requests, notifications, reports, and service health.", tag: "Admin" },
          { icon: BarChart3, title: "Tracking & Growth", text: "Measure activity, response time, workload, pending approvals, and client engagement.", tag: "Growth" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <div className="overflow-hidden rounded-[32px] bg-[#075edb] p-8 text-white shadow-[0_22px_60px_rgba(7,94,219,0.28)]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">Ready for a secure client workspace?</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em]">
              Replace scattered client communication with a portal that organizes requests, files, approvals, messages, and operations.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-blue-100">
              No disconnected WhatsApp follow-ups. No lost files. No unclear request status. A structured client portal built around transparency, service quality, and operational control.
            </p>
          </div>
          <div className="rounded-[24px] border border-white/20 bg-white/10 p-5">
            <div className="grid gap-3">
              <Link href="/contact" className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 text-sm font-black text-[#075edb]">
                Plan My Client Portal <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/solutions/web-saas/admin-dashboard" className="flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-4 text-sm font-black text-white">
                Explore Admin Dashboard Module <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-100">
              <CheckCircle2 className="h-4 w-4" /> Client experience + admin control.
            </p>
          </div>
        </div>
      </div>
    </ChapterShell>
  );
}

function renderSection(activeTab: TabId, setActiveTab: (tab: TabId) => void) {
  switch (activeTab) {
    case "overview":
      return <OverviewSection setActiveTab={setActiveTab} />;
    case "client-chaos":
      return <ClientChaosSection />;
    case "portal-strategy":
      return <PortalStrategySection />;
    case "user-access":
      return <UserAccessSection />;
    case "request-workflows":
      return <RequestWorkflowsSection />;
    case "documents-updates":
      return <DocumentsUpdatesSection />;
    case "communication-hub":
      return <CommunicationHubSection />;
    case "admin-operations":
      return <AdminOperationsSection />;
    case "launch-growth":
      return <LaunchGrowthSection />;
    case "final-cta":
      return <FinalCtaSection />;
    default:
      return <OverviewSection setActiveTab={setActiveTab} />;
  }
}

export default function ClientPortalClient() {
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
          title="Client Portal"
          subtitle="Secure Client Workspace"
          icon={ShieldCheck}
          items={knowledgeTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          ctaTitle="Plan Client Portal"
          ctaText="Create a secure portal for requests, files, approvals, updates, and client communication."
          ctaButtonText="Plan Portal"
          ctaHref="/contact"
        />

        <div id="knowledge-content" className="min-w-0 flex-1">
          <div className="mb-5 rounded-2xl border border-[#d7e1f2] bg-white px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)] lg:hidden">
            <p className="text-xs font-bold text-[#66728f]">Client Portal</p>
            <p className="text-sm font-black text-[#0f214f]">{activeLabel}</p>
          </div>

          <ActiveLabelContext.Provider value={activeLabel}>
            {renderSection(activeTab, handleTabChange)}
          </ActiveLabelContext.Provider>
        </div>
      </div>
    </main>
  );
}
