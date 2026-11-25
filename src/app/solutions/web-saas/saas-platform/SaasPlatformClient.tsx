"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  CircleAlert,
  CreditCard,
  Database,
  Home,
  Layers3,
  LayoutDashboard,
  Rocket,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { SolutionCategoryTabs } from "@/components/solutions/shared/SolutionCategoryTabs";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import { webSaasSolutions } from "@/data/solutions/webSaasSolutions";

const knowledgeTabs = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "product-chaos", label: "Product Chaos", icon: CircleAlert },
  { id: "saas-strategy", label: "SaaS Strategy", icon: Target },
  { id: "user-accounts", label: "User Accounts", icon: Users },
  { id: "core-workflows", label: "Core Workflows", icon: Workflow },
  { id: "billing-plans", label: "Billing & Plans", icon: CreditCard },
  { id: "admin-console", label: "Admin Console", icon: LayoutDashboard },
  { id: "analytics-scaling", label: "Analytics & Scaling", icon: BarChart3 },
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
    eyebrow: "SaaS Platform",
    title: "Build a SaaS platform as a complete product system, not just screens.",
    intro: "A SaaS platform needs accounts, roles, onboarding, core workflows, billing, admin controls, analytics, support paths, and scaling logic planned together.",
    cards: [
    { icon: Target, title: "Product Strategy", text: "Clarify users, use cases, product workflow, pricing, and adoption journey.", tag: "Strategy" },
    { icon: Workflow, title: "User Accounts", text: "Secure login, workspace, roles, onboarding, and account settings.", tag: "Access" },
    { icon: Database, title: "Core Product Flow", text: "The main product action must be repeatable, measurable, and easy to understand.", tag: "Product" },
    { icon: ShieldCheck, title: "Billing & Growth", text: "Trials, plans, upgrades, usage limits, invoices, and retention signals are planned from start.", tag: "Revenue" }
  ],
    metrics: [
    { label: "Active Users", value: "2.8K", note: "Users active this month" },
    { label: "Activation", value: "64%", note: "Reached first value" },
    { label: "Trial \u2192 Paid", value: "18%", note: "Conversion baseline" },
    { label: "Churn Risk", value: "9%", note: "Accounts needing attention" }
  ],
    flow: [
    { icon: Users, title: "Signup", text: "User creates account and workspace.", tag: "Access" },
    { icon: Rocket, title: "Onboarding", text: "User reaches first value quickly.", tag: "Activation" },
    { icon: Workflow, title: "Core Use", text: "Main workflow becomes repeatable.", tag: "Product" },
    { icon: CreditCard, title: "Plan", text: "User selects trial, tier, or upgrade.", tag: "Revenue" },
    { icon: LayoutDashboard, title: "Admin", text: "Team manages users and support.", tag: "Ops" },
    { icon: BarChart3, title: "Improve", text: "Usage data guides roadmap.", tag: "Growth" }
  ],
    panelTitle: "A SaaS platform is a business model in software.",
    panelText: "The product needs to support adoption, payment, retention, support, analytics, and scaling together.",
    panelPoints: ["Define the main user workflow before adding extra features.", "Design onboarding around first value.", "Plan pricing and usage limits early.", "Give admins controls for support and growth."],
  },
  {
    id: "product-chaos",
    eyebrow: "Chapter 01",
    title: "SaaS products fail when product, billing, onboarding, and operations are not planned together.",
    intro: "A SaaS idea can look good in UI but still fail if users do not activate, workflows are unclear, plans are confusing, and admins cannot support the product.",
    cards: [
    { icon: Target, title: "Weak Onboarding", text: "Users sign up but do not reach first value quickly.", tag: "Activation" },
    { icon: Workflow, title: "Unclear Workflow", text: "The core product action is not obvious or repeatable.", tag: "Product" },
    { icon: Database, title: "Plan Confusion", text: "Pricing tiers, limits, trial rules, and upgrades are unclear.", tag: "Billing" },
    { icon: ShieldCheck, title: "No Admin Control", text: "Support and product teams cannot manage accounts or issues easily.", tag: "Admin" },
    { icon: Bell, title: "Poor Usage Data", text: "The business cannot see retention, feature adoption, or churn risk.", tag: "Analytics" },
    { icon: BarChart3, title: "Scaling Risk", text: "Permissions, data isolation, and performance are not ready for growth.", tag: "Scale" }
  ],
    metrics: [
    { label: "Drop-off", value: "36%", note: "Users not completing onboarding" },
    { label: "Support Load", value: "128", note: "Monthly unresolved issues" },
    { label: "Plan Questions", value: "42", note: "Pricing confusion signals" },
    { label: "Feature Adoption", value: "51%", note: "Core workflow usage" }
  ],
    flow: [

  ],
    panelTitle: "The SaaS risk is not only code complexity.",
    panelText: "The deeper risk is unclear product value, weak adoption, missing admin control, and no usage intelligence.",
    panelPoints: ["Users need to understand value fast.", "Pricing must match real product value.", "Support teams need admin controls.", "Usage data should guide roadmap decisions."],
  },
  {
    id: "saas-strategy",
    eyebrow: "Chapter 02",
    title: "SaaS strategy defines the product model before development starts.",
    intro: "HNX maps target users, jobs-to-be-done, onboarding steps, feature hierarchy, plans, permissions, admin needs, and analytics before building.",
    cards: [
    { icon: Target, title: "User Segments", text: "Define buyer, admin, end-user, viewer, manager, and support roles.", tag: "Users" },
    { icon: Workflow, title: "Core Use Case", text: "Identify the workflow that delivers the main product value.", tag: "Core" },
    { icon: Database, title: "Activation Path", text: "Map signup to first successful action.", tag: "Activation" },
    { icon: ShieldCheck, title: "Plan Model", text: "Define free trial, paid tiers, limits, upgrades, and billing rules.", tag: "Pricing" },
    { icon: Bell, title: "Admin Needs", text: "Plan support, user management, billing oversight, and moderation.", tag: "Admin" },
    { icon: BarChart3, title: "Growth Metrics", text: "Track activation, usage, retention, churn risk, and expansion signals.", tag: "Metrics" }
  ],
    metrics: [

  ],
    flow: [
    { icon: Target, title: "Model", text: "Choose product, users, and monetization.", tag: "Strategy" },
    { icon: Users, title: "Roles", text: "Map user types and permissions.", tag: "Access" },
    { icon: Workflow, title: "Core Flow", text: "Design the repeated value action.", tag: "Product" },
    { icon: CreditCard, title: "Plans", text: "Shape trial and paid tiers.", tag: "Revenue" },
    { icon: BarChart3, title: "Metrics", text: "Define activation and retention data.", tag: "Growth" }
  ],
    panelTitle: "SaaS planning makes the build safer.",
    panelText: "A SaaS build is safer when product, revenue, and operations are designed together.",
    panelPoints: ["Start with the core workflow, not feature overload.", "Design onboarding before adding dashboards.", "Plan billing and limits early.", "Track product usage from the first release."],
  },
  {
    id: "user-accounts",
    eyebrow: "Chapter 3",
    title: "User accounts define identity, workspace access, and trust.",
    intro: "Secure login, onboarding, roles, workspace membership, profile settings, and account states create the foundation of the SaaS platform.",
    cards: [
    { icon: Target, title: "Role Rules", text: "Define what each user type can see and do.", tag: "Access" },
    { icon: Workflow, title: "Data Model", text: "Store account, workspace, plan, usage, and activity correctly.", tag: "Data" },
    { icon: Database, title: "User Experience", text: "Keep the flow simple and focused on first value.", tag: "UX" },
    { icon: ShieldCheck, title: "Admin Control", text: "Give the internal team safe controls for support.", tag: "Admin" },
    { icon: Bell, title: "Notifications", text: "Guide users with useful alerts, not noise.", tag: "Notify" },
    { icon: BarChart3, title: "Reporting", text: "Track usage, friction, and growth signals.", tag: "Reports" }
  ],
    metrics: [

  ],
    flow: [

  ],
    panelTitle: "This layer should support adoption and operations.",
    panelText: "The SaaS should stay understandable for users and manageable for the business.",
    panelPoints: ["Keep user value clear.", "Separate admin and user concerns.", "Track adoption and friction points.", "Design for support and future scaling."],
  },
  {
    id: "core-workflows",
    eyebrow: "Chapter 4",
    title: "Core workflows decide whether users keep using the SaaS.",
    intro: "The main product workflow should be easy, fast, valuable, repeatable, and measurable.",
    cards: [
    { icon: Target, title: "Role Rules", text: "Define what each user type can see and do.", tag: "Access" },
    { icon: Workflow, title: "Data Model", text: "Store account, workspace, plan, usage, and activity correctly.", tag: "Data" },
    { icon: Database, title: "User Experience", text: "Keep the flow simple and focused on first value.", tag: "UX" },
    { icon: ShieldCheck, title: "Admin Control", text: "Give the internal team safe controls for support.", tag: "Admin" },
    { icon: Bell, title: "Notifications", text: "Guide users with useful alerts, not noise.", tag: "Notify" },
    { icon: BarChart3, title: "Reporting", text: "Track usage, friction, and growth signals.", tag: "Reports" }
  ],
    metrics: [

  ],
    flow: [
    { icon: Users, title: "Start", text: "User begins this workflow.", tag: "Input" },
    { icon: Workflow, title: "Action", text: "System handles the business rule.", tag: "Process" },
    { icon: Database, title: "Record", text: "Data and history are saved.", tag: "Data" },
    { icon: Bell, title: "Notify", text: "User or admin gets next step.", tag: "Signal" },
    { icon: BarChart3, title: "Measure", text: "Usage is tracked for improvement.", tag: "Insight" }
  ],
    panelTitle: "This layer should support adoption and operations.",
    panelText: "The SaaS should stay understandable for users and manageable for the business.",
    panelPoints: ["Keep user value clear.", "Separate admin and user concerns.", "Track adoption and friction points.", "Design for support and future scaling."],
  },
  {
    id: "billing-plans",
    eyebrow: "Chapter 5",
    title: "Billing and plans turn product value into revenue.",
    intro: "Trials, subscriptions, invoices, upgrades, limits, and cancellations must be clear and reliable.",
    cards: [
    { icon: Target, title: "Role Rules", text: "Define what each user type can see and do.", tag: "Access" },
    { icon: Workflow, title: "Data Model", text: "Store account, workspace, plan, usage, and activity correctly.", tag: "Data" },
    { icon: Database, title: "User Experience", text: "Keep the flow simple and focused on first value.", tag: "UX" },
    { icon: ShieldCheck, title: "Admin Control", text: "Give the internal team safe controls for support.", tag: "Admin" },
    { icon: Bell, title: "Notifications", text: "Guide users with useful alerts, not noise.", tag: "Notify" },
    { icon: BarChart3, title: "Reporting", text: "Track usage, friction, and growth signals.", tag: "Reports" }
  ],
    metrics: [

  ],
    flow: [
    { icon: Users, title: "Start", text: "User begins this workflow.", tag: "Input" },
    { icon: Workflow, title: "Action", text: "System handles the business rule.", tag: "Process" },
    { icon: Database, title: "Record", text: "Data and history are saved.", tag: "Data" },
    { icon: Bell, title: "Notify", text: "User or admin gets next step.", tag: "Signal" },
    { icon: BarChart3, title: "Measure", text: "Usage is tracked for improvement.", tag: "Insight" }
  ],
    panelTitle: "This layer should support adoption and operations.",
    panelText: "The SaaS should stay understandable for users and manageable for the business.",
    panelPoints: ["Keep user value clear.", "Separate admin and user concerns.", "Track adoption and friction points.", "Design for support and future scaling."],
  },
  {
    id: "admin-console",
    eyebrow: "Chapter 6",
    title: "The admin console keeps the SaaS manageable after launch.",
    intro: "Admins need user management, billing visibility, issue control, content settings, and operational reports.",
    cards: [
    { icon: Target, title: "Role Rules", text: "Define what each user type can see and do.", tag: "Access" },
    { icon: Workflow, title: "Data Model", text: "Store account, workspace, plan, usage, and activity correctly.", tag: "Data" },
    { icon: Database, title: "User Experience", text: "Keep the flow simple and focused on first value.", tag: "UX" },
    { icon: ShieldCheck, title: "Admin Control", text: "Give the internal team safe controls for support.", tag: "Admin" },
    { icon: Bell, title: "Notifications", text: "Guide users with useful alerts, not noise.", tag: "Notify" },
    { icon: BarChart3, title: "Reporting", text: "Track usage, friction, and growth signals.", tag: "Reports" }
  ],
    metrics: [
    { label: "Usage", value: "2.8K", note: "Active usage signal" },
    { label: "Activation", value: "64%", note: "Current conversion" },
    { label: "Support", value: "128", note: "Open support load" },
    { label: "Growth", value: "18%", note: "Expansion opportunity" }
  ],
    flow: [

  ],
    panelTitle: "This layer should support adoption and operations.",
    panelText: "The SaaS should stay understandable for users and manageable for the business.",
    panelPoints: ["Keep user value clear.", "Separate admin and user concerns.", "Track adoption and friction points.", "Design for support and future scaling."],
  },
  {
    id: "analytics-scaling",
    eyebrow: "Chapter 7",
    title: "Analytics and scaling show what to improve next.",
    intro: "Usage, activation, retention, performance, support volume, and churn risk should guide product decisions.",
    cards: [
    { icon: Target, title: "Role Rules", text: "Define what each user type can see and do.", tag: "Access" },
    { icon: Workflow, title: "Data Model", text: "Store account, workspace, plan, usage, and activity correctly.", tag: "Data" },
    { icon: Database, title: "User Experience", text: "Keep the flow simple and focused on first value.", tag: "UX" },
    { icon: ShieldCheck, title: "Admin Control", text: "Give the internal team safe controls for support.", tag: "Admin" },
    { icon: Bell, title: "Notifications", text: "Guide users with useful alerts, not noise.", tag: "Notify" },
    { icon: BarChart3, title: "Reporting", text: "Track usage, friction, and growth signals.", tag: "Reports" }
  ],
    metrics: [
    { label: "Usage", value: "2.8K", note: "Active usage signal" },
    { label: "Activation", value: "64%", note: "Current conversion" },
    { label: "Support", value: "128", note: "Open support load" },
    { label: "Growth", value: "18%", note: "Expansion opportunity" }
  ],
    flow: [

  ],
    panelTitle: "This layer should support adoption and operations.",
    panelText: "The SaaS should stay understandable for users and manageable for the business.",
    panelPoints: ["Keep user value clear.", "Separate admin and user concerns.", "Track adoption and friction points.", "Design for support and future scaling."],
  },
  {
    id: "launch-roadmap",
    eyebrow: "Chapter 8",
    title: "Launch roadmap takes SaaS from MVP to product growth.",
    intro: "A SaaS launch needs onboarding QA, billing checks, admin training, feedback loops, and post-launch improvements.",
    cards: [
    { icon: Target, title: "Role Rules", text: "Define what each user type can see and do.", tag: "Access" },
    { icon: Workflow, title: "Data Model", text: "Store account, workspace, plan, usage, and activity correctly.", tag: "Data" },
    { icon: Database, title: "User Experience", text: "Keep the flow simple and focused on first value.", tag: "UX" },
    { icon: ShieldCheck, title: "Admin Control", text: "Give the internal team safe controls for support.", tag: "Admin" },
    { icon: Bell, title: "Notifications", text: "Guide users with useful alerts, not noise.", tag: "Notify" },
    { icon: BarChart3, title: "Reporting", text: "Track usage, friction, and growth signals.", tag: "Reports" }
  ],
    metrics: [
    { label: "Usage", value: "2.8K", note: "Active usage signal" },
    { label: "Activation", value: "64%", note: "Current conversion" },
    { label: "Support", value: "128", note: "Open support load" },
    { label: "Growth", value: "18%", note: "Expansion opportunity" }
  ],
    flow: [

  ],
    panelTitle: "This layer should support adoption and operations.",
    panelText: "The SaaS should stay understandable for users and manageable for the business.",
    panelPoints: ["Keep user value clear.", "Separate admin and user concerns.", "Track adoption and friction points.", "Design for support and future scaling."],
  },
  {
    id: "final-cta",
    eyebrow: "Final CTA",
    title: "Build a SaaS platform users can adopt, pay for, and keep using.",
    intro: "HNX can help design and build SaaS products with user accounts, workflows, subscriptions, admin controls, analytics, and launch support.",
    cards: [
    { icon: Target, title: "Role Rules", text: "Define what each user type can see and do.", tag: "Access" },
    { icon: Workflow, title: "Data Model", text: "Store account, workspace, plan, usage, and activity correctly.", tag: "Data" },
    { icon: Database, title: "User Experience", text: "Keep the flow simple and focused on first value.", tag: "UX" },
    { icon: ShieldCheck, title: "Admin Control", text: "Give the internal team safe controls for support.", tag: "Admin" },
    { icon: Bell, title: "Notifications", text: "Guide users with useful alerts, not noise.", tag: "Notify" },
    { icon: BarChart3, title: "Reporting", text: "Track usage, friction, and growth signals.", tag: "Reports" }
  ],
    metrics: [

  ],
    flow: [

  ],
    panelTitle: "This layer should support adoption and operations.",
    panelText: "The SaaS should stay understandable for users and manageable for the business.",
    panelPoints: ["Keep user value clear.", "Separate admin and user concerns.", "Track adoption and friction points.", "Design for support and future scaling."],
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
      <span className="text-[#334766]">SaaS Platform</span>
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
        <p className="text-xs font-black text-[#66728f]">SaaS Platform Preview</p>
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[24px] bg-gradient-to-br from-[#0f214f] via-[#145cb7] to-[#19b7c5] p-6 text-white">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100">Product Operating System</p>
          <h3 className="mt-4 text-4xl font-black tracking-[-0.05em]">Build a product users can adopt, pay for, and keep using.</h3>
          <p className="mt-4 text-sm font-semibold leading-7 text-blue-100">
            User accounts, onboarding, workflows, billing, admin controls, and analytics work as one product system.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Onboarding", "Workflows", "Billing", "Analytics"].map((item) => (
              <p key={item} className="rounded-xl bg-white/12 px-4 py-3 text-xs font-black">{item}</p>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["64%", "Activation"], ["18%", "Trial to paid"], ["9%", "Churn risk"]
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
              {["User accounts", "Core workflows", "Plans and billing", "Admin console", "Usage analytics"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                  <span className="text-xs font-black text-[#0f214f]">{item}</span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#bfd7ff] bg-[#eef6ff] px-4 py-3">
            <p className="text-sm font-black text-[#145cb7]">Outcome: signup → activation → paid usage → retention</p>
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
          <p className="text-xl font-black text-[#0f214f]">SaaS Growth View</p>
          <p className="mt-1 text-sm font-semibold text-[#66728f]">Activation, usage, billing, retention, churn risk, and product opportunities in one place.</p>
        </div>
        <span className="rounded-full bg-[#eef6ff] px-4 py-2 text-xs font-black text-[#145cb7]">SaaS ready</span>
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

export default function SaasPlatformClient() {
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
          title="SaaS Platform"
          subtitle="Product + Revenue System"
          icon={Layers3}
          items={knowledgeTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          ctaTitle="Plan SaaS Platform"
          ctaText="Design user accounts, workflows, subscriptions, admin controls, analytics, and launch strategy."
          ctaButtonText="Plan SaaS"
          ctaHref="/contact"
        />

        <div id="knowledge-content" className="min-w-0 flex-1">
          <div className="mb-5 rounded-2xl border border-[#d7e1f2] bg-white px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)] lg:hidden">
            <p className="text-xs font-bold text-[#66728f]">SaaS Platform</p>
            <p className="text-sm font-black text-[#0f214f]">{activeLabel}</p>
          </div>

          {renderSection(activeTab, activeLabel, handleTabChange)}
        </div>
      </div>
    </main>
  );
}
