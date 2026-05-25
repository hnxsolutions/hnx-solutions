"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  CircleAlert,
  Database,
  GitBranch,
  Home,
  LayoutDashboard,
  MousePointerClick,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Target,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { SolutionCategoryTabs } from "@/components/solutions/shared/SolutionCategoryTabs";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import { webSaasSolutions } from "@/data/solutions/webSaasSolutions";

const knowledgeTabs = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "growth-blindness", label: "Growth Blindness", icon: CircleAlert },
  { id: "tracking-strategy", label: "Tracking Strategy", icon: Target },
  { id: "event-funnels", label: "Events & Funnels", icon: Workflow },
  { id: "source-attribution", label: "Source Attribution", icon: GitBranch },
  { id: "dashboard-reports", label: "Dashboards & Reports", icon: LayoutDashboard },
  { id: "seo-cro-insights", label: "SEO & CRO Insights", icon: SearchCheck },
  { id: "action-roadmap", label: "Action Roadmap", icon: TrendingUp },
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
    eyebrow: "Analytics & Growth Tracking",
    title: "Build analytics that tells you what to improve next.",
    intro: "Growth tracking connects traffic, sources, CTAs, forms, SEO, funnels, revenue, and CRM outcomes so the business stops guessing and starts improving with evidence.",
    cards: [
    { icon: Target, title: "Tracking Plan", text: "Define events, conversions, sources, funnels, and reporting needs.", tag: "Plan" },
    { icon: Workflow, title: "Event Setup", text: "Track CTA clicks, forms, WhatsApp, bookings, payments, demos, and downloads.", tag: "Events" },
    { icon: Database, title: "Dashboards", text: "Create views for traffic, leads, source quality, funnels, and SEO opportunities.", tag: "Reports" },
    { icon: ShieldCheck, title: "Action Roadmap", text: "Turn data into content, CRO, campaign, and product actions.", tag: "Growth" }
  ],
    metrics: [
    { label: "Visitors", value: "42.8K", note: "Tracked across pages" },
    { label: "CTA Clicks", value: "6.2K", note: "High-intent actions" },
    { label: "Leads", value: "1.2K", note: "Captured with source" },
    { label: "SEO Actions", value: "76", note: "Queries/pages to improve" }
  ],
    flow: [
    { icon: GitBranch, title: "Source", text: "User arrives from SEO, ads, social, referral, or direct traffic.", tag: "Source" },
    { icon: Home, title: "Page", text: "Page intent and content guide the journey.", tag: "Page" },
    { icon: MousePointerClick, title: "Event", text: "CTA, form, WhatsApp, booking, or payment action is tracked.", tag: "Action" },
    { icon: Database, title: "Lead Record", text: "Source and intent move into CRM or dashboard.", tag: "CRM" },
    { icon: BarChart3, title: "Report", text: "Dashboards show performance and bottlenecks.", tag: "Insight" },
    { icon: TrendingUp, title: "Improve", text: "Team updates pages, CTAs, content, and campaigns.", tag: "Growth" }
  ],
    panelTitle: "Analytics should create actions, not just charts.",
    panelText: "The system should show what is working, what is leaking, and what should change next.",
    panelPoints: ["Track meaningful events, not vanity metrics.", "Connect sources to lead quality and revenue.", "Review SEO and conversion performance together.", "Create a recurring action roadmap from data."],
  },
  {
    id: "growth-blindness",
    eyebrow: "Chapter",
    title: "Businesses stay stuck when data is scattered, shallow, or not connected to action.",
    intro: "Many teams have analytics installed but still cannot answer which pages generate leads, which campaigns produce quality, or what to improve next.",
    cards: [
    { icon: Target, title: "Business Question", text: "Define what decision the metric should support.", tag: "Decision" },
    { icon: Workflow, title: "Event Map", text: "Track actions that show intent and friction.", tag: "Events" },
    { icon: Database, title: "Attribution", text: "Connect source, campaign, page, and CTA to each lead.", tag: "Source" },
    { icon: ShieldCheck, title: "Funnel View", text: "Measure where users move and where they drop.", tag: "Funnel" },
    { icon: Bell, title: "Dashboard", text: "Make insights clear for owners and teams.", tag: "Reports" },
    { icon: BarChart3, title: "Action Task", text: "Turn every insight into a clear next action.", tag: "Action" }
  ],
    metrics: [

  ],
    flow: [

  ],
    panelTitle: "Growth tracking should support decisions.",
    panelText: "The best analytics setup makes the next improvement obvious.",
    panelPoints: ["Track only what supports decisions.", "Connect events to user intent.", "Make reports understandable for business teams.", "Convert every insight into an action."],
  },
  {
    id: "tracking-strategy",
    eyebrow: "Chapter",
    title: "Tracking strategy defines what matters before dashboards are built.",
    intro: "HNX maps business goals, conversion events, source attribution, funnel stages, CRM fields, dashboard views, and improvement cadence.",
    cards: [
    { icon: Target, title: "Business Question", text: "Define what decision the metric should support.", tag: "Decision" },
    { icon: Workflow, title: "Event Map", text: "Track actions that show intent and friction.", tag: "Events" },
    { icon: Database, title: "Attribution", text: "Connect source, campaign, page, and CTA to each lead.", tag: "Source" },
    { icon: ShieldCheck, title: "Funnel View", text: "Measure where users move and where they drop.", tag: "Funnel" },
    { icon: Bell, title: "Dashboard", text: "Make insights clear for owners and teams.", tag: "Reports" },
    { icon: BarChart3, title: "Action Task", text: "Turn every insight into a clear next action.", tag: "Action" }
  ],
    metrics: [

  ],
    flow: [

  ],
    panelTitle: "Growth tracking should support decisions.",
    panelText: "The best analytics setup makes the next improvement obvious.",
    panelPoints: ["Track only what supports decisions.", "Connect events to user intent.", "Make reports understandable for business teams.", "Convert every insight into an action."],
  },
  {
    id: "event-funnels",
    eyebrow: "Chapter",
    title: "Events and funnels reveal where users move or drop.",
    intro: "Track page view, scroll, CTA click, form start, submit, booking attempt, payment status, and follow-up outcome.",
    cards: [
    { icon: Target, title: "Business Question", text: "Define what decision the metric should support.", tag: "Decision" },
    { icon: Workflow, title: "Event Map", text: "Track actions that show intent and friction.", tag: "Events" },
    { icon: Database, title: "Attribution", text: "Connect source, campaign, page, and CTA to each lead.", tag: "Source" },
    { icon: ShieldCheck, title: "Funnel View", text: "Measure where users move and where they drop.", tag: "Funnel" },
    { icon: Bell, title: "Dashboard", text: "Make insights clear for owners and teams.", tag: "Reports" },
    { icon: BarChart3, title: "Action Task", text: "Turn every insight into a clear next action.", tag: "Action" }
  ],
    metrics: [

  ],
    flow: [
    { icon: GitBranch, title: "Source", text: "Traffic source is captured.", tag: "Source" },
    { icon: MousePointerClick, title: "Event", text: "Important action is tracked.", tag: "Event" },
    { icon: Database, title: "Lead", text: "Lead context is stored.", tag: "CRM" },
    { icon: BarChart3, title: "Report", text: "Performance is reviewed.", tag: "Report" },
    { icon: TrendingUp, title: "Improve", text: "Action is implemented.", tag: "Growth" }
  ],
    panelTitle: "Growth tracking should support decisions.",
    panelText: "The best analytics setup makes the next improvement obvious.",
    panelPoints: ["Track only what supports decisions.", "Connect events to user intent.", "Make reports understandable for business teams.", "Convert every insight into an action."],
  },
  {
    id: "source-attribution",
    eyebrow: "Chapter",
    title: "Source attribution connects traffic to business quality.",
    intro: "UTMs, referrer, page path, campaign, keyword, and CRM status show which channels create real value.",
    cards: [
    { icon: Target, title: "Business Question", text: "Define what decision the metric should support.", tag: "Decision" },
    { icon: Workflow, title: "Event Map", text: "Track actions that show intent and friction.", tag: "Events" },
    { icon: Database, title: "Attribution", text: "Connect source, campaign, page, and CTA to each lead.", tag: "Source" },
    { icon: ShieldCheck, title: "Funnel View", text: "Measure where users move and where they drop.", tag: "Funnel" },
    { icon: Bell, title: "Dashboard", text: "Make insights clear for owners and teams.", tag: "Reports" },
    { icon: BarChart3, title: "Action Task", text: "Turn every insight into a clear next action.", tag: "Action" }
  ],
    metrics: [

  ],
    flow: [
    { icon: GitBranch, title: "Source", text: "Traffic source is captured.", tag: "Source" },
    { icon: MousePointerClick, title: "Event", text: "Important action is tracked.", tag: "Event" },
    { icon: Database, title: "Lead", text: "Lead context is stored.", tag: "CRM" },
    { icon: BarChart3, title: "Report", text: "Performance is reviewed.", tag: "Report" },
    { icon: TrendingUp, title: "Improve", text: "Action is implemented.", tag: "Growth" }
  ],
    panelTitle: "Growth tracking should support decisions.",
    panelText: "The best analytics setup makes the next improvement obvious.",
    panelPoints: ["Track only what supports decisions.", "Connect events to user intent.", "Make reports understandable for business teams.", "Convert every insight into an action."],
  },
  {
    id: "dashboard-reports",
    eyebrow: "Chapter",
    title: "Dashboards and reports must serve decisions.",
    intro: "Owners need clear views for traffic, leads, funnels, source quality, SEO opportunities, and growth actions.",
    cards: [
    { icon: Target, title: "Business Question", text: "Define what decision the metric should support.", tag: "Decision" },
    { icon: Workflow, title: "Event Map", text: "Track actions that show intent and friction.", tag: "Events" },
    { icon: Database, title: "Attribution", text: "Connect source, campaign, page, and CTA to each lead.", tag: "Source" },
    { icon: ShieldCheck, title: "Funnel View", text: "Measure where users move and where they drop.", tag: "Funnel" },
    { icon: Bell, title: "Dashboard", text: "Make insights clear for owners and teams.", tag: "Reports" },
    { icon: BarChart3, title: "Action Task", text: "Turn every insight into a clear next action.", tag: "Action" }
  ],
    metrics: [
    { label: "Visitors", value: "42.8K", note: "Tracked traffic" },
    { label: "Events", value: "6.2K", note: "Intent actions" },
    { label: "Leads", value: "1.2K", note: "Captured with source" },
    { label: "Actions", value: "76", note: "Improvement tasks" }
  ],
    flow: [

  ],
    panelTitle: "Growth tracking should support decisions.",
    panelText: "The best analytics setup makes the next improvement obvious.",
    panelPoints: ["Track only what supports decisions.", "Connect events to user intent.", "Make reports understandable for business teams.", "Convert every insight into an action."],
  },
  {
    id: "seo-cro-insights",
    eyebrow: "Chapter",
    title: "SEO and CRO insights should work together.",
    intro: "Search Console data, page performance, CTA behavior, and conversion quality can guide content and UX improvements.",
    cards: [
    { icon: Target, title: "Business Question", text: "Define what decision the metric should support.", tag: "Decision" },
    { icon: Workflow, title: "Event Map", text: "Track actions that show intent and friction.", tag: "Events" },
    { icon: Database, title: "Attribution", text: "Connect source, campaign, page, and CTA to each lead.", tag: "Source" },
    { icon: ShieldCheck, title: "Funnel View", text: "Measure where users move and where they drop.", tag: "Funnel" },
    { icon: Bell, title: "Dashboard", text: "Make insights clear for owners and teams.", tag: "Reports" },
    { icon: BarChart3, title: "Action Task", text: "Turn every insight into a clear next action.", tag: "Action" }
  ],
    metrics: [
    { label: "Visitors", value: "42.8K", note: "Tracked traffic" },
    { label: "Events", value: "6.2K", note: "Intent actions" },
    { label: "Leads", value: "1.2K", note: "Captured with source" },
    { label: "Actions", value: "76", note: "Improvement tasks" }
  ],
    flow: [

  ],
    panelTitle: "Growth tracking should support decisions.",
    panelText: "The best analytics setup makes the next improvement obvious.",
    panelPoints: ["Track only what supports decisions.", "Connect events to user intent.", "Make reports understandable for business teams.", "Convert every insight into an action."],
  },
  {
    id: "action-roadmap",
    eyebrow: "Chapter",
    title: "Action roadmap turns analytics into weekly progress.",
    intro: "The team needs prioritized actions for pages, CTAs, forms, SEO, content, campaigns, and follow-up.",
    cards: [
    { icon: Target, title: "Business Question", text: "Define what decision the metric should support.", tag: "Decision" },
    { icon: Workflow, title: "Event Map", text: "Track actions that show intent and friction.", tag: "Events" },
    { icon: Database, title: "Attribution", text: "Connect source, campaign, page, and CTA to each lead.", tag: "Source" },
    { icon: ShieldCheck, title: "Funnel View", text: "Measure where users move and where they drop.", tag: "Funnel" },
    { icon: Bell, title: "Dashboard", text: "Make insights clear for owners and teams.", tag: "Reports" },
    { icon: BarChart3, title: "Action Task", text: "Turn every insight into a clear next action.", tag: "Action" }
  ],
    metrics: [

  ],
    flow: [
    { icon: GitBranch, title: "Source", text: "Traffic source is captured.", tag: "Source" },
    { icon: MousePointerClick, title: "Event", text: "Important action is tracked.", tag: "Event" },
    { icon: Database, title: "Lead", text: "Lead context is stored.", tag: "CRM" },
    { icon: BarChart3, title: "Report", text: "Performance is reviewed.", tag: "Report" },
    { icon: TrendingUp, title: "Improve", text: "Action is implemented.", tag: "Growth" }
  ],
    panelTitle: "Growth tracking should support decisions.",
    panelText: "The best analytics setup makes the next improvement obvious.",
    panelPoints: ["Track only what supports decisions.", "Connect events to user intent.", "Make reports understandable for business teams.", "Convert every insight into an action."],
  },
  {
    id: "launch-roadmap",
    eyebrow: "Chapter",
    title: "Launch roadmap makes measurement ready before traffic arrives.",
    intro: "Analytics should be planned before campaigns or launches so every important action is visible.",
    cards: [
    { icon: Target, title: "Business Question", text: "Define what decision the metric should support.", tag: "Decision" },
    { icon: Workflow, title: "Event Map", text: "Track actions that show intent and friction.", tag: "Events" },
    { icon: Database, title: "Attribution", text: "Connect source, campaign, page, and CTA to each lead.", tag: "Source" },
    { icon: ShieldCheck, title: "Funnel View", text: "Measure where users move and where they drop.", tag: "Funnel" },
    { icon: Bell, title: "Dashboard", text: "Make insights clear for owners and teams.", tag: "Reports" },
    { icon: BarChart3, title: "Action Task", text: "Turn every insight into a clear next action.", tag: "Action" }
  ],
    metrics: [
    { label: "Visitors", value: "42.8K", note: "Tracked traffic" },
    { label: "Events", value: "6.2K", note: "Intent actions" },
    { label: "Leads", value: "1.2K", note: "Captured with source" },
    { label: "Actions", value: "76", note: "Improvement tasks" }
  ],
    flow: [

  ],
    panelTitle: "Growth tracking should support decisions.",
    panelText: "The best analytics setup makes the next improvement obvious.",
    panelPoints: ["Track only what supports decisions.", "Connect events to user intent.", "Make reports understandable for business teams.", "Convert every insight into an action."],
  },
  {
    id: "final-cta",
    eyebrow: "Final CTA",
    title: "Build a growth tracking system that turns data into action.",
    intro: "HNX can set up analytics and growth dashboards for websites, SaaS products, portals, booking systems, campaigns, SEO, and CRM follow-up.",
    cards: [
    { icon: Target, title: "Business Question", text: "Define what decision the metric should support.", tag: "Decision" },
    { icon: Workflow, title: "Event Map", text: "Track actions that show intent and friction.", tag: "Events" },
    { icon: Database, title: "Attribution", text: "Connect source, campaign, page, and CTA to each lead.", tag: "Source" },
    { icon: ShieldCheck, title: "Funnel View", text: "Measure where users move and where they drop.", tag: "Funnel" },
    { icon: Bell, title: "Dashboard", text: "Make insights clear for owners and teams.", tag: "Reports" },
    { icon: BarChart3, title: "Action Task", text: "Turn every insight into a clear next action.", tag: "Action" }
  ],
    metrics: [

  ],
    flow: [

  ],
    panelTitle: "Growth tracking should support decisions.",
    panelText: "The best analytics setup makes the next improvement obvious.",
    panelPoints: ["Track only what supports decisions.", "Connect events to user intent.", "Make reports understandable for business teams.", "Convert every insight into an action."],
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
      <span className="text-[#334766]">Analytics &amp; Growth Tracking</span>
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
        <p className="text-xs font-black text-[#66728f]">Analytics & Growth Preview</p>
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[24px] bg-gradient-to-br from-[#0f214f] via-[#145cb7] to-[#19b7c5] p-6 text-white">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100">Growth Intelligence System</p>
          <h3 className="mt-4 text-4xl font-black tracking-[-0.05em]">See what is working, what is leaking, and what to improve next.</h3>
          <p className="mt-4 text-sm font-semibold leading-7 text-blue-100">
            Traffic, sources, events, forms, SEO, CRM outcomes, and dashboards become one growth system.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Events", "Funnels", "SEO", "CRM"].map((item) => (
              <p key={item} className="rounded-xl bg-white/12 px-4 py-3 text-xs font-black">{item}</p>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["42.8K", "Visitors"], ["1.2K", "Leads"], ["76", "SEO actions"]
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
              {["Event tracking", "Funnel reporting", "Source attribution", "SEO opportunities", "Action roadmap"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                  <span className="text-xs font-black text-[#0f214f]">{item}</span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#bfd7ff] bg-[#eef6ff] px-4 py-3">
            <p className="text-sm font-black text-[#145cb7]">Outcome: data → insight → action → growth improvement</p>
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
          <p className="text-xl font-black text-[#0f214f]">Growth Intelligence View</p>
          <p className="mt-1 text-sm font-semibold text-[#66728f]">Sources, events, funnels, SEO opportunities, lead quality, and next actions in one dashboard.</p>
        </div>
        <span className="rounded-full bg-[#eef6ff] px-4 py-2 text-xs font-black text-[#145cb7]">Growth ready</span>
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

export default function AnalyticsGrowthTrackingPage() {
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
          title="Analytics & Growth"
          subtitle="Tracking + Insights System"
          icon={Activity}
          items={knowledgeTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          ctaTitle="Plan Growth Tracking"
          ctaText="Connect analytics, events, SEO, CRM, funnels, dashboards, and improvement actions."
          ctaButtonText="Plan Tracking"
          ctaHref="/contact"
        />

        <div id="knowledge-content" className="min-w-0 flex-1">
          <div className="mb-5 rounded-2xl border border-[#d7e1f2] bg-white px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)] lg:hidden">
            <p className="text-xs font-bold text-[#66728f]">Analytics & Growth</p>
            <p className="text-sm font-black text-[#0f214f]">{activeLabel}</p>
          </div>

          {renderSection(activeTab, activeLabel, handleTabChange)}
        </div>
      </div>
    </main>
  );
}
