"use client";

import Link from "next/link";
import { createContext, useContext, useMemo, useState } from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  CircleAlert,
  Code2,
  CreditCard,
  Database,
  FileText,
  GitBranch,
  Grid2X2,
  Home,
  Layers3,
  LayoutDashboard,
  MessageCircle,
  MousePointerClick,
  Network,
  Rocket,
  Search,
  SearchCheck,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  XCircle,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { SolutionCategoryTabs } from "@/components/solutions/shared/SolutionCategoryTabs";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import { webSaasSolutions } from "@/data/solutions/webSaasSolutions";

const knowledgeTabs = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "digital-chaos", label: "Digital Chaos", icon: CircleAlert },
  { id: "audience-positioning", label: "Audience & Positioning", icon: Users },
  { id: "offer-messaging", label: "Offer & Messaging", icon: MessageCircle },
  { id: "architecture-map", label: "Architecture Map", icon: GitBranch },
  { id: "conversion-system", label: "Conversion System", icon: Workflow },
  { id: "seo-content-engine", label: "SEO & Content Engine", icon: SearchCheck },
  { id: "analytics-crm-handoff", label: "Analytics & CRM Handoff", icon: Database },
  { id: "implementation-roadmap", label: "Implementation Roadmap", icon: Rocket },
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
  children: React.ReactNode;
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

const BREADCRUMB_MODULE = "Digital Presence Strategy";
const ActiveLabelContext = createContext("Overview");

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
  children: React.ReactNode;
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
  visual: React.ReactNode;
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

function BlueprintVisual() {
  const nodes = [
    { icon: Users, title: "Audience", text: "Who should believe you?" },
    { icon: CreditCard, title: "Offer", text: "What are you selling?" },
    { icon: FileText, title: "Pages", text: "What should exist?" },
    { icon: SearchCheck, title: "SEO", text: "What should rank?" },
    { icon: MessageCircle, title: "Content", text: "What creates trust?" },
    { icon: Workflow, title: "Lead Flow", text: "How leads move?" },
    { icon: BarChart3, title: "Analytics", text: "What proves growth?" },
    { icon: Database, title: "CRM Handoff", text: "Where leads go next?" },
  ];

  return (
    <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.04)]">
      <div className="grid gap-5 lg:grid-cols-[1fr_210px_1fr] lg:items-center">
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

        <div className="relative mx-auto grid h-[210px] w-[210px] place-items-center rounded-full bg-[#eef6ff]">
          <div className="absolute inset-5 rounded-full border border-dashed border-[#8ad8ee]" />
          <div className="absolute inset-10 rounded-full border border-[#d7e1f2] bg-white" />
          <div className="relative grid h-[128px] w-[128px] place-items-center rounded-full bg-gradient-to-br from-[#0f214f] to-[#145cb7] text-white shadow-[0_25px_65px_rgba(20,92,183,0.30)]">
            <div className="text-center">
              <Network className="mx-auto h-8 w-8 text-[#8ee7f4]" />
              <p className="mt-2 text-xl font-black">HNX</p>
              <p className="text-[11px] font-bold text-cyan-100">Digital Blueprint</p>
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

function ChaosVisual() {
  const chaos = [
    { icon: FileText, title: "Random Pages", text: "Pages exist but do not support one journey." },
    { icon: MessageCircle, title: "Weak Messaging", text: "Visitors do not understand why to trust you." },
    { icon: MousePointerClick, title: "No Clear CTA", text: "Users do not know what action to take." },
    { icon: Grid2X2, title: "Scattered Tools", text: "Website, WhatsApp, CRM, forms, and reports are disconnected." },
    { icon: Search, title: "No SEO Structure", text: "Pages are not planned around search intent." },
    { icon: Users, title: "Leads Not Connected", text: "Submissions are not routed into follow-up." },
  ];

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-red-100 bg-gradient-to-br from-white via-[#fffafa] to-[#fff7f7] p-6">
      <div className="grid gap-5 xl:grid-cols-[1fr_260px_1fr] xl:items-center">
        <div className="grid gap-4">
          {chaos.slice(0, 3).map((item) => (
            <KnowledgeCard key={item.title} item={{ ...item, tag: "Friction" }} />
          ))}
        </div>

        <div className="rounded-[28px] border border-red-200 bg-white p-6 text-center shadow-[0_26px_70px_rgba(185,28,28,0.10)]">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-red-50 text-red-500">
            <CircleAlert className="h-7 w-7" />
          </div>
          <h3 className="mt-4 text-xl font-black text-red-700">Digital Presence Chaos</h3>
          <p className="mt-3 text-sm font-semibold leading-6 text-[#52627d]">
            Design is visible, but the system behind the design is disconnected.
          </p>
          <div className="mt-5 space-y-3 text-left">
            {["Lost Trust", "Lost Leads", "Lost SEO Growth", "Lost Decisions"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-500" />
                <p className="text-sm font-black text-[#0f214f]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {chaos.slice(3).map((item) => (
            <KnowledgeCard key={item.title} item={{ ...item, tag: "Leakage" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FunnelVisual() {
  const steps = [
    ["Visitor", "12.8K"],
    ["CTA Click", "1.9K"],
    ["Form Start", "620"],
    ["Lead Submit", "312"],
    ["Qualified", "168"],
    ["Customer", "46"],
  ];

  const stepWidths = ["w-full", "w-[82%]", "w-[64%]", "w-[48%]", "w-[34%]", "w-[22%]"];

  return (
    <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6">
      <p className="text-lg font-black text-[#0f214f]">Conversion Funnel Preview</p>
      <div className="mt-5 space-y-3">
        {steps.map(([label, value], index) => (
          <div key={label} className="grid grid-cols-[1fr_76px] items-center gap-3 text-sm">
            <div className="rounded-xl bg-[#eef6ff] p-1">
              <div
                className={cx("rounded-lg bg-[#0b6ffb] px-4 py-2 font-black text-white", stepWidths[index])}
              >
                {label}
              </div>
            </div>
            <p className="text-right font-black text-[#0f214f]">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsDashboard() {
  return (
    <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.04)]">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-xl font-black text-[#0f214f]">Analytics + CRM Handoff Dashboard</p>
          <p className="mt-1 text-sm font-semibold text-[#66728f]">Source, intent, owner, status, and next action in one view.</p>
        </div>
        <span className="rounded-full bg-[#eef6ff] px-4 py-2 text-xs font-black text-[#145cb7]">Live Growth View</span>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "New Leads", value: "312", note: "Captured this month" },
          { label: "Qualified", value: "168", note: "Ready for follow-up" },
          { label: "WhatsApp Leads", value: "92", note: "Tracked by page/source" },
          { label: "Due Today", value: "28", note: "Follow-ups pending" },
        ].map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mt-6 grid gap-5 xl:grid-cols-[1fr_0.85fr]">
        <div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-5">
          <p className="text-sm font-black text-[#0f214f]">Lead Handoff Path</p>
          <div className="mt-5 grid gap-3 md:grid-cols-5">
            {[
              ["Website", Home],
              ["Form / WhatsApp", MessageCircle],
              ["Source + Intent", Target],
              ["CRM / Dashboard", Database],
              ["Follow-up", Workflow],
            ].map(([label, Icon], index) => {
              const TypedIcon = Icon as LucideIcon;
              return (
                <div key={label as string} className="relative rounded-xl bg-white p-4 text-center">
                  <IconShell icon={TypedIcon} className="mx-auto h-10 w-10 rounded-xl" />
                  <p className="mt-3 text-xs font-black text-[#0f214f]">{label as string}</p>
                  {index < 4 ? <ArrowRight className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[#2378ff] md:block" /> : null}
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-5">
          <p className="text-sm font-black text-[#0f214f]">Source Quality</p>
          <div className="mt-4 grid items-center gap-4 sm:grid-cols-[150px_1fr]">
            <div className="relative mx-auto h-32 w-32 rounded-full bg-[conic-gradient(#0b6ffb_0_41%,#3b82f6_41%_69%,#60a5fa_69%_86%,#93c5fd_86%_100%)]">
              <div className="absolute inset-8 grid place-items-center rounded-full bg-white">
                <span className="text-xl font-black text-[#0f214f]">312</span>
              </div>
            </div>
            <div className="space-y-2 text-xs font-semibold text-[#66728f]">
              {["Organic Search 41%", "Direct 28%", "Referral 17%", "Paid Search 9%", "Social 6%"].map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OverviewSection({ setActiveTab }: { setActiveTab: (tab: TabId) => void }) {
  return (
    <ChapterShell
      eyebrow="Digital Presence Strategy"
      title="Plan your complete digital presence before you build."
      intro="Most businesses start directly with design or development. HNX starts with the system behind the website: who the business serves, what the offer means, what pages are needed, how visitors convert, how leads move into follow-up, and how growth will be measured."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: Target, title: "Strategy First", text: "Before UI starts, audience, offer, page structure, SEO, conversion paths, and tracking are clear.", tag: "Foundation" },
          { icon: Workflow, title: "Conversion Ready", text: "Every visitor gets a planned path toward inquiry, booking, payment, signup, demo, or follow-up.", tag: "Journey" },
          { icon: Database, title: "CRM Connected", text: "Leads do not stay inside forms. They move into owner, status, source, and next-action workflows.", tag: "Operations" },
          { icon: BarChart3, title: "Growth Visible", text: "Analytics, SEO opportunities, source quality, CTA actions, and improvement priorities are measurable.", tag: "Growth" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <BlueprintVisual />

      <SplitPanel
        title="This is not a normal website planning exercise."
        text="The goal is to create a business-ready digital operating plan. Your public website, SaaS modules, landing pages, client portal, admin dashboard, booking/payment flow, SEO, analytics, and CRM handoff should be planned as one connected system."
        points={[
          "Your team knows what to build first and why.",
          "Every page has a role in trust, education, conversion, or follow-up.",
          "Future modules like portals, dashboards, SaaS features, bookings, and payments fit into the same architecture.",
          "The site can be measured after launch instead of judged only by visual appearance.",
        ]}
        visual={<FunnelVisual />}
      />

      <div className="flex flex-col gap-3 rounded-[28px] bg-[#075edb] p-6 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-black">Start from the knowledge map.</p>
          <p className="mt-2 text-sm font-semibold text-blue-100">
            First understand the chaos, then build the blueprint.
          </p>
        </div>
        <SecondaryButton onClick={() => setActiveTab("digital-chaos")}>Open Digital Chaos</SecondaryButton>
      </div>
    </ChapterShell>
  );
}

function DigitalChaosSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 01"
      title="Digital chaos is the hidden reason websites do not convert."
      intro="Digital chaos happens when a business has many digital assets but no connected strategy. The website exists, forms exist, WhatsApp exists, analytics exists, and maybe a CRM exists — but the complete journey is not planned."
    >
      <ChaosVisual />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          { icon: FileText, title: "Random Pages", text: "The homepage says one thing, service pages say another, and landing pages do not support the sales path. Pages are created as isolated assets instead of a journey.", tag: "Page Chaos" },
          { icon: MessageCircle, title: "Weak Messaging", text: "Visitors cannot quickly understand what the business does, who it helps, why it is different, and why they should trust it.", tag: "Trust Gap" },
          { icon: MousePointerClick, title: "No Clear CTA Flow", text: "The user reads the page but does not know the next step: call, WhatsApp, book, request a quote, download, or create an account.", tag: "Action Gap" },
          { icon: Grid2X2, title: "Scattered Tools", text: "Forms, WhatsApp, email, CRM, payments, spreadsheets, and analytics are disconnected. Manual follow-up becomes the business process.", tag: "Tool Gap" },
          { icon: SearchCheck, title: "No SEO Structure", text: "Pages are not planned around real search intent, keyword themes, FAQs, schema, internal links, or content clusters.", tag: "Visibility Gap" },
          { icon: Users, title: "Leads Not Connected", text: "A lead may submit a form, but source, status, owner, follow-up, and next action are not tracked properly.", tag: "Follow-up Gap" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {[
          { label: "Traffic", value: "12.8K", note: "Visitors but no clear conversion system" },
          { label: "Clear Leads", value: "312", note: "Only a small portion is structured" },
          { label: "Unknown Source", value: "46%", note: "Leads without reliable attribution" },
          { label: "Missed Follow-ups", value: "28%", note: "No owner/status/reminder discipline" },
          { label: "SEO Pages Without Intent", value: "18", note: "Pages exist but do not support demand" },
        ].map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <SplitPanel
        title="The business cost is bigger than poor design."
        text="A website can look good and still leak trust, leads, SEO value, follow-up discipline, and management clarity. The solution is not just a redesign; it is a connected digital presence strategy."
        points={[
          "Lost trust because the message and proof are unclear.",
          "Lost leads because the CTA path is weak.",
          "Lost follow-up because leads are not assigned or tracked.",
          "Lost decisions because analytics does not become action.",
        ]}
        visual={
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Lost Trust", "Visitors leave before understanding your value."],
              ["Lost Leads", "Interested users do not convert."],
              ["Lost SEO Growth", "Content does not compound over time."],
              ["Lost Decisions", "Teams guess what to improve next."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <p className="font-black text-red-700">{title}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#52627d]">{text}</p>
              </div>
            ))}
          </div>
        }
      />
    </ChapterShell>
  );
}

function AudiencePositioningSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 02"
      title="Audience clarity decides how the entire digital system should speak."
      intro="Before pages are designed, HNX identifies who the business should attract, what those users care about, what pain they are trying to solve, what objections they have, and what proof they need before they act."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          { icon: Users, title: "Primary Audience", text: "The main buyer, user, or decision maker the platform should convert. This audience controls the page hierarchy and CTA language.", tag: "Who" },
          { icon: Network, title: "Secondary Audience", text: "Influencers, team members, partners, operations users, or support users who affect decisions or ongoing adoption.", tag: "Influence" },
          { icon: CircleAlert, title: "Pain Points", text: "The visible problems and hidden business costs the user is trying to remove.", tag: "Pain" },
          { icon: Zap, title: "Buying Triggers", text: "The events that make users search, compare, inquire, book, pay, or request a demo.", tag: "Trigger" },
          { icon: ShieldCheck, title: "Trust Needs", text: "Proof, process, screenshots, certifications, guarantees, reviews, or clarity required before conversion.", tag: "Trust" },
          { icon: MessageCircle, title: "Objections", text: "The questions and doubts that stop users from taking action if the website does not answer them.", tag: "Friction" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <SplitPanel
        title="Positioning turns a generic website into a specific business system."
        text="A strong digital presence clearly explains who the business helps, what problem it solves, what result it creates, why it is different, and why the user should act now."
        points={[
          "Who we help: define the exact buyer/user segment.",
          "What problem we solve: show visible and hidden pain.",
          "What result we create: sell the business outcome, not only features.",
          "Why HNX is different: explain the system-first approach.",
        ]}
        visual={
          <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6">
            <p className="text-lg font-black text-[#0f214f]">Positioning Framework</p>
            <div className="mt-5 space-y-4">
              {[
                ["Who", "The exact segment"],
                ["Pain", "The problem they feel"],
                ["Result", "The outcome they want"],
                ["Proof", "Why they should trust"],
                ["Action", "What to do next"],
              ].map(([title, text], index) => (
                <div key={title} className="flex items-center gap-4">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#eef6ff] text-sm font-black text-[#145cb7]">{index + 1}</span>
                  <div>
                    <p className="text-sm font-black text-[#0f214f]">{title}</p>
                    <p className="text-xs font-semibold text-[#66728f]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {[
          {
            title: "Healthcare example",
            rows: ["Audience: patients, clinics, hospitals, distributors", "Pain: unclear service discovery and slow inquiry response", "Trust: certifications, process, product/service clarity", "Path: service page → trust section → inquiry → CRM"],
          },
          {
            title: "SaaS example",
            rows: ["Audience: founders, teams, product users", "Pain: unclear value and weak onboarding", "Trust: workflow demo, use cases, dashboard preview", "Path: landing page → demo request → CRM → onboarding"],
          },
        ].map((item) => (
          <div key={item.title} className="rounded-[24px] border border-[#d7e1f2] bg-[#f8fbff] p-6">
            <p className="text-xl font-black text-[#0f214f]">{item.title}</p>
            <div className="mt-4 space-y-3">
              {item.rows.map((row) => (
                <div key={row} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <p className="text-sm font-semibold leading-6 text-[#465374]">{row}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ChapterShell>
  );
}

function OfferMessagingSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 03"
      title="Your offer is how users understand the value of what you sell."
      intro="HNX converts raw services, products, SaaS features, or workflows into clear messaging that answers: what is this, who is it for, what problem does it solve, why should I trust it, and what should I do next?"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          { icon: Home, title: "Hero Message", text: "The first screen should explain the promise in seconds and make the right user feel they are in the correct place.", tag: "First Screen" },
          { icon: CircleAlert, title: "Problem Statement", text: "Show the user that the business understands their current pain and the cost of staying where they are.", tag: "Pain" },
          { icon: Sparkles, title: "Solution Explanation", text: "Explain what the service, product, workflow, platform, or system actually does in plain business language.", tag: "Clarity" },
          { icon: ShieldCheck, title: "Proof Layer", text: "Add credibility through outcomes, testimonials, numbers, screenshots, process, certifications, or case signals.", tag: "Trust" },
          { icon: MessageCircle, title: "Objection Handling", text: "Answer doubts before they stop conversion: cost, complexity, timeline, trust, support, or technical risk.", tag: "Confidence" },
          { icon: MousePointerClick, title: "CTA Clarity", text: "Tell the user the exact next action: book a call, request quote, start demo, WhatsApp, book, or pay.", tag: "Action" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-[24px] border border-red-200 bg-red-50 p-6">
          <p className="text-lg font-black text-red-700">Weak messaging</p>
          <p className="mt-4 text-2xl font-black tracking-[-0.03em] text-[#0f214f]">“We provide web development services.”</p>
          <p className="mt-4 text-sm font-semibold leading-6 text-[#52627d]">
            This says what the business sells, but not why it matters, what outcome it creates, or why the user should trust it.
          </p>
        </div>
        <div className="rounded-[24px] border border-emerald-200 bg-emerald-50 p-6">
          <p className="text-lg font-black text-emerald-700">Strong messaging</p>
          <p className="mt-4 text-2xl font-black tracking-[-0.03em] text-[#0f214f]">
            “We build connected digital systems that turn your website, forms, dashboards, payments, and analytics into one growth engine.”
          </p>
          <p className="mt-4 text-sm font-semibold leading-6 text-[#52627d]">
            This explains value, system thinking, business outcome, and strategic difference.
          </p>
        </div>
      </div>

      <SplitPanel
        title="Messaging should move in a sequence."
        text="A strong page does not throw random content at the user. It moves from pain to promise to proof to process to CTA."
        points={[
          "Pain: your website gets traffic but not enough qualified leads.",
          "Promise: create a connected digital presence strategy.",
          "Proof: pages, conversion flow, SEO plan, CRM handoff, and tracking.",
          "Process: discover, position, architect, connect, measure.",
        ]}
        visual={
          <div className="grid gap-3">
            {["Pain", "Promise", "Proof", "Process", "CTA"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#d7e1f2] bg-white p-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#eef6ff] text-sm font-black text-[#145cb7]">{index + 1}</span>
                <p className="text-lg font-black text-[#0f214f]">{item}</p>
                {index < 4 ? <ArrowRight className="ml-auto h-5 w-5 text-[#2378ff]" /> : null}
              </div>
            ))}
          </div>
        }
      />
    </ChapterShell>
  );
}

function ArchitectureMapSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 04"
      title="Digital architecture defines what should exist and how everything connects."
      intro="HNX maps the complete structure before development: public website, service pages, landing pages, client portal, admin dashboard, SaaS platform, booking/payment flows, CRM handoff, and analytics."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: Home, title: "Homepage", text: "The main trust and positioning page with story, proof, services, and primary CTA.", tag: "Visibility" },
          { icon: FileText, title: "Service Pages", text: "Detailed explanation of what the business provides, who it helps, and how to act.", tag: "Education" },
          { icon: Layers3, title: "Industry Pages", text: "Specific pages for vertical audiences so each user feels the business understands their market.", tag: "Relevance" },
          { icon: Target, title: "Landing Pages", text: "Campaign or offer-specific conversion pages for ads, SEO, launches, and lead magnets.", tag: "Campaigns" },
          { icon: ShieldCheck, title: "Client Portal", text: "Secure login area for customers or clients to view documents, requests, status, and support.", tag: "Self-service" },
          { icon: LayoutDashboard, title: "Admin Dashboard", text: "Internal control room for leads, content, users, reports, workflows, and exceptions.", tag: "Operations" },
          { icon: Network, title: "SaaS Platform", text: "Accounts, roles, billing, workflows, usage, dashboards, and product analytics.", tag: "Product" },
          { icon: CreditCard, title: "Booking & Payment", text: "Slot booking, order booking, checkout, confirmation, receipts, reminders, and revenue view.", tag: "Revenue" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <div className="rounded-[28px] border border-[#d7e1f2] bg-[#f8fbff] p-6">
        <p className="text-xl font-black text-[#0f214f]">Connected Architecture Flow</p>
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {[
            ["Public Website", Home],
            ["Service / Industry / Landing Pages", FileText],
            ["Forms / WhatsApp / Booking / Payment", Send],
            ["CRM / Admin Dashboard", Database],
            ["Follow-up / Reports / Growth Actions", BarChart3],
          ].map(([label, Icon], index) => {
            const TypedIcon = Icon as LucideIcon;
            return (
              <div key={label as string} className="relative rounded-2xl bg-white p-5 text-center shadow-sm">
                <IconShell icon={TypedIcon} className="mx-auto" />
                <p className="mt-4 text-sm font-black text-[#0f214f]">{label as string}</p>
                {index < 4 ? <ArrowRight className="absolute -right-4 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-[#2378ff] md:block" /> : null}
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {[
          ["Phase 1", "Public Visibility", "Homepage, services, contact, SEO structure."],
          ["Phase 2", "Conversion System", "Forms, WhatsApp, landing pages, tracking, CRM handoff."],
          ["Phase 3", "Operations Layer", "Client portal, admin dashboard, bookings, payments."],
          ["Phase 4", "SaaS/Product Layer", "Accounts, billing, subscriptions, workflows."],
          ["Phase 5", "Growth Layer", "Analytics, SEO roadmap, CRO, campaign dashboards."],
        ].map(([phase, title, text]) => (
          <div key={phase} className="rounded-[22px] border border-[#d7e1f2] bg-white p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#145cb7]">{phase}</p>
            <p className="mt-3 text-lg font-black text-[#0f214f]">{title}</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#52627d]">{text}</p>
          </div>
        ))}
      </div>
    </ChapterShell>
  );
}

function ConversionSystemSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 05"
      title="A website should not only inform. It should guide."
      intro="HNX maps the full conversion journey from first visit to qualified lead, booking, payment, demo request, or signup. Every page section should move the user one step closer to action."
    >
      <div className="overflow-x-auto rounded-[28px] border border-[#d7e1f2] bg-[#f8fbff] p-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex min-w-max items-stretch gap-4">
          {[
            { icon: Users, title: "Visitor", text: "User comes from Google, ads, social, referral, WhatsApp, or direct visit.", tag: "Traffic" },
            { icon: ShieldCheck, title: "Trust", text: "The page builds credibility with design, message, proof, process, and clarity.", tag: "Trust" },
            { icon: Target, title: "Offer Fit", text: "The user finds the relevant service, industry, product, or solution.", tag: "Fit" },
            { icon: MousePointerClick, title: "CTA", text: "The page gives a clear action: call, WhatsApp, book, request quote, or signup.", tag: "Action" },
            { icon: MessageCircle, title: "Capture", text: "The system captures the lead through form, WhatsApp, booking, payment, or account.", tag: "Lead" },
            { icon: Database, title: "CRM", text: "The lead enters a system with source, owner, status, and next action.", tag: "System" },
            { icon: Workflow, title: "Follow-up", text: "The team responds, qualifies, reminds, nurtures, and closes.", tag: "Close" },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="relative flex w-[235px] shrink-0">
                <div className="flex min-h-[285px] w-full flex-col rounded-[24px] border border-[#d7e1f2] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.045)]">
                  <div className="flex items-start justify-between gap-4">
                    <IconShell icon={Icon} className="h-12 w-12" />
                    <span className="rounded-full bg-[#eef6ff] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#145cb7]">
                      {item.tag}
                    </span>
                  </div>

                  <p className="mt-5 text-xl font-black tracking-[-0.03em] text-[#0f214f]">{item.title}</p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[#52627d]">{item.text}</p>

                  <div className="mt-auto pt-5">
                    <div className="h-1.5 rounded-full bg-[#eef6ff]">
                      <div
                        className={cx(
                          "h-1.5 rounded-full bg-[#2378ff]",
                          ["w-full", "w-[90%]", "w-[80%]", "w-[70%]", "w-[60%]", "w-1/2"][index] ?? "w-1/2"
                        )}
                      />
                    </div>
                  </div>
                </div>

                {index < 6 ? (
                  <span className="absolute -right-6 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#bfd7ff] bg-white text-[#2378ff] shadow-[0_10px_20px_rgba(15,23,42,0.08)] md:flex">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {[
          { icon: MousePointerClick, title: "Primary CTA", text: "The main action the user should take.", tag: "Main Path" },
          { icon: Send, title: "Secondary CTA", text: "A softer action like view demo, download guide, or explore process.", tag: "Soft Path" },
          { icon: ShieldCheck, title: "Trust Triggers", text: "Testimonials, numbers, certifications, screenshots, guarantees, and proof.", tag: "Proof" },
          { icon: Zap, title: "Friction Reducers", text: "Short forms, clear steps, fast loading, mobile UX, visible contact routes.", tag: "Ease" },
          { icon: Bell, title: "Follow-up Triggers", text: "Email, WhatsApp, CRM task, admin notification, booking reminder.", tag: "Next Action" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <FunnelVisual />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "CTA Clicks", value: "1.9K", note: "Micro-conversions tracked" },
          { label: "Form Starts", value: "620", note: "Intent begins here" },
          { label: "Lead Submissions", value: "312", note: "Captured enquiries" },
          { label: "Conversion Rate", value: "2.43%", note: "Improvement baseline" },
        ].map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>
    </ChapterShell>
  );
}

function SeoContentEngineSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 06"
      title="SEO should guide structure before development begins."
      intro="HNX plans search-ready pages, keyword themes, internal links, FAQs, schema opportunities, content clusters, and blog direction so the site can earn visibility over time."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: SearchCheck, title: "Keyword Themes", text: "Group search demand by service, problem, industry, location, and buying intent.", tag: "Demand" },
          { icon: Target, title: "Page Intent Mapping", text: "Define whether each page is commercial, informational, local, comparison, or conversion-focused.", tag: "Intent" },
          { icon: FileText, title: "Metadata Direction", text: "Create title and description frameworks for every core page.", tag: "SERP" },
          { icon: Search, title: "FAQ & Schema", text: "Plan questions and structured data that support rich result eligibility.", tag: "Rich Results" },
          { icon: GitBranch, title: "Internal Linking", text: "Connect pages naturally so authority and user flow move through the site.", tag: "Authority" },
          { icon: FileText, title: "Content Roadmap", text: "Plan blogs, guides, landing pages, resources, and comparison content around demand.", tag: "Publishing" },
          { icon: Target, title: "Local / Service SEO", text: "Map local visibility, service pages, city pages, and Google Business Profile signals.", tag: "Local" },
          { icon: BarChart3, title: "SEO Review Loop", text: "Use Search Console, analytics, indexation, and page data to improve content over time.", tag: "Growth" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <SplitPanel
        title="Search Demand → Page Plan → Content Sections → Schema → Internal Links → Analytics Review"
        text="SEO becomes powerful when the website architecture supports search intent from the start. Every important page should have a target, structure, FAQ logic, internal link path, and measurement plan."
        points={[
          "Commercial pages target buying intent.",
          "Informational pages support trust and discovery.",
          "Internal links connect related pages into clusters.",
          "Analytics reviews reveal which pages need improvement.",
        ]}
        visual={
          <div className="space-y-3">
            {["Search Demand", "Page Plan", "Content Sections", "Schema", "Internal Links", "Analytics Review"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#eef6ff] text-sm font-black text-[#145cb7]">{index + 1}</span>
                <p className="font-black text-[#0f214f]">{item}</p>
              </div>
            ))}
          </div>
        }
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {[
          { label: "SEO Pages Planned", value: "24", note: "Core search pages" },
          { label: "Keyword Clusters", value: "14", note: "Demand themes" },
          { label: "FAQ Blocks", value: "38", note: "Rich answer opportunities" },
          { label: "Internal Links", value: "72", note: "Authority and UX paths" },
          { label: "Roadmap", value: "90d", note: "Content execution plan" },
        ].map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>
    </ChapterShell>
  );
}

function AnalyticsCrmHandoffSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 07"
      title="A lead is only useful when the business knows what happens next."
      intro="HNX plans analytics and CRM handoff so website activity becomes business action. Every important click, source, form, booking, and payment signal should be captured, assigned, tracked, and improved."
    >
      <AnalyticsDashboard />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: Activity, title: "Tracking Events", text: "Page views, CTA clicks, WhatsApp clicks, form starts, submissions, booking starts, payment attempts, and downloads.", tag: "Events" },
          { icon: Database, title: "Lead Record", text: "Name, phone/email, source page, campaign/UTM, service interest, message, status, priority, and owner.", tag: "CRM" },
          { icon: Workflow, title: "Follow-up Logic", text: "Assigned owner, next follow-up date, reminders, communication history, and conversion outcome.", tag: "Ops" },
          { icon: BarChart3, title: "Decision Dashboard", text: "Top sources, conversion quality, due follow-ups, stuck leads, SEO opportunities, and next growth actions.", tag: "Insights" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <div className="rounded-[28px] border border-[#d7e1f2] bg-[#f8fbff] p-6">
        <p className="text-xl font-black text-[#0f214f]">CRM handoff fields to plan before build</p>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Lead name",
            "Phone/email",
            "Source page",
            "Campaign/UTM",
            "Service interest",
            "Message/request",
            "Lead status",
            "Assigned owner",
            "Priority",
            "Next follow-up date",
            "Communication history",
            "Conversion outcome",
          ].map((field) => (
            <div key={field} className="rounded-xl bg-white px-4 py-3 text-sm font-black text-[#145cb7]">
              {field}
            </div>
          ))}
        </div>
      </div>
    </ChapterShell>
  );
}

function ImplementationRoadmapSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 08"
      title="The strategy becomes a practical execution roadmap."
      intro="Digital Presence Strategy is not a document that sits unused. It becomes the roadmap for design, development, launch, and growth so the business knows what to build first, what can come later, and what should be measured."
    >
      <div className="grid gap-5 xl:grid-cols-5">
        {[
          { icon: SearchCheck, title: "Discovery", days: "Days 1–30", text: "Business model, audience, offer, competitors, existing assets, SEO gaps, conversion issues, and growth goals.", deliverable: "Strategy brief, audience map, problem map, positioning notes." },
          { icon: GitBranch, title: "Architecture", days: "Days 31–60", text: "Sitemap, page hierarchy, conversion journey, SEO structure, content sections, CRM handoff, and analytics plan.", deliverable: "Digital Presence Blueprint." },
          { icon: Code2, title: "Build Priority", days: "Days 61–90", text: "Prioritize homepage, core service pages, landing pages, forms, tracking, CRM handoff, and launch-critical assets.", deliverable: "Build-ready execution plan." },
          { icon: Rocket, title: "Launch", days: "Days 91–110", text: "Design, development, QA, performance checks, form testing, SEO checks, analytics validation, and deployment.", deliverable: "Live digital system." },
          { icon: BarChart3, title: "Growth Tracking", days: "Days 111+", text: "Review traffic, leads, CTA clicks, form conversion, SEO pages, source quality, and growth actions.", deliverable: "Monthly growth dashboard." },
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
              <p className="mt-5 text-sm font-black text-[#145cb7]">Deliverable:</p>
              <p className="mt-1 text-sm font-semibold leading-6 text-[#465374]">{step.deliverable}</p>
              {index < 4 ? <ArrowRight className="absolute -right-5 top-1/2 z-20 hidden h-6 w-6 -translate-y-1/2 text-[#2378ff] xl:block" /> : null}
            </div>
          );
        })}
      </div>

      <SplitPanel
        title="Every phase answers a business question."
        text="This keeps the client educated and makes the solution feel complete. The user should understand that HNX is not guessing; every phase has a business role."
        points={[
          "Discovery answers: who are we building for?",
          "Architecture answers: what should exist and connect?",
          "Build Priority answers: what should launch first?",
          "Growth Tracking answers: what should improve after launch?",
        ]}
        visual={
          <div className="grid gap-4">
            {[
              ["Discovery", "Who are we building for?"],
              ["Architecture", "How should the system work?"],
              ["Build Priority", "What should launch first?"],
              ["Growth Tracking", "What improves next?"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white p-5">
                <p className="font-black text-[#0f214f]">{title}</p>
                <p className="mt-2 text-sm font-semibold text-[#52627d]">{text}</p>
              </div>
            ))}
          </div>
        }
      />
    </ChapterShell>
  );
}

function FinalCtaSection() {
  return (
    <ChapterShell
      eyebrow="Final CTA"
      title="Do not start with random pages. Start with a complete digital presence strategy."
      intro="HNX helps you understand what to build, why to build it, how it should convert, how leads should be handled, and how growth should be tracked after launch."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          { icon: SearchCheck, title: "Digital Presence Audit", text: "Understand what is missing, duplicated, weak, disconnected, or underperforming in the current setup.", tag: "Audit" },
          { icon: Users, title: "Audience & Positioning Map", text: "Clarify who you serve, why they should trust you, and what message should guide the full experience.", tag: "Strategy" },
          { icon: GitBranch, title: "Website/SaaS Architecture", text: "Plan pages, modules, portal, dashboard, booking/payment paths, and SaaS product layers.", tag: "Structure" },
          { icon: Workflow, title: "Conversion Journey", text: "Define visitor-to-lead paths with CTA logic, capture routes, friction reducers, and follow-up triggers.", tag: "Conversion" },
          { icon: Search, title: "SEO & Content Plan", text: "Map keyword themes, page intent, metadata, FAQ/schema, internal links, and content roadmap.", tag: "Visibility" },
          { icon: Database, title: "Analytics & CRM Handoff", text: "Connect events, source data, lead ownership, status, reminders, and growth dashboards.", tag: "Operations" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <div className="overflow-hidden rounded-[32px] bg-[#075edb] p-8 text-white shadow-[0_22px_60px_rgba(7,94,219,0.28)]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">Ready to build your digital growth engine?</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em]">Book a strategy call and get clarity before spending on design, development, SEO, or campaigns.</h2>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-blue-100">
              No generic website plan. No random design-first approach. No disconnected tools. Only a clear digital system built around visibility, trust, conversion, operations, and growth.
            </p>
          </div>
          <div className="rounded-[24px] border border-white/20 bg-white/10 p-5">
            <div className="grid gap-3">
              <Link href="/contact" className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 text-sm font-black text-[#075edb]">
                Book Strategy Call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/solutions/web-saas/business-website" className="flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-4 text-sm font-black text-white">
                Explore Business Website Module <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-100">
              <CheckCircle2 className="h-4 w-4" /> System clarity before development.
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
    case "digital-chaos":
      return <DigitalChaosSection />;
    case "audience-positioning":
      return <AudiencePositioningSection />;
    case "offer-messaging":
      return <OfferMessagingSection />;
    case "architecture-map":
      return <ArchitectureMapSection />;
    case "conversion-system":
      return <ConversionSystemSection />;
    case "seo-content-engine":
      return <SeoContentEngineSection />;
    case "analytics-crm-handoff":
      return <AnalyticsCrmHandoffSection />;
    case "implementation-roadmap":
      return <ImplementationRoadmapSection />;
    case "final-cta":
      return <FinalCtaSection />;
    default:
      return <OverviewSection setActiveTab={setActiveTab} />;
  }
}

export default function DigitalPresenceStrategyClient() {
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
    window.requestAnimationFrame(() => {
      const element = document.getElementById("knowledge-content");

      if (!element) {
        return;
      }

      const stickyOffset = window.innerWidth >= 1024 ? 190 : 170;
      const top = element.getBoundingClientRect().top + window.scrollY - stickyOffset;

      window.scrollTo({
        top: Math.max(top, 0),
        behavior: "smooth",
      });
    });
  };

  return (
    <main className="min-h-screen bg-[#f8fbff] pt-[70px] text-[#0f214f]">
      <SolutionCategoryTabs category="web-saas" solutions={webSaasSolutions} />
      <MobileTabs activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="mx-auto flex w-full max-w-[min(92vw,1440px)] items-start gap-0">
        <SolutionSidebar<TabId>
          title="Digital Presence"
          subtitle="Strategy Knowledge System"
          icon={Rocket}
          items={knowledgeTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          ctaTitle="Plan Your Digital System"
          ctaText="Get a structured blueprint before you spend on design, development, SEO, or campaigns."
          ctaButtonText="Book Strategy Call"
          ctaHref="/contact"
        />

        <div id="knowledge-content" className="min-w-0 flex-1 scroll-mt-32 bg-white">
          <div className="mb-5 rounded-2xl border border-[#d7e1f2] bg-white px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)] lg:hidden">
            <p className="text-xs font-bold text-[#66728f]">Digital Presence Strategy</p>
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
