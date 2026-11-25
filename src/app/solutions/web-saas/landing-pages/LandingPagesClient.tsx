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
  Database,
  FileText,
  Gauge,
  GitBranch,
  Home,
  Layers3,
  LayoutDashboard,
  Lightbulb,
  Mail,
  MessageCircle,
  MousePointerClick,
  Palette,
  Rocket,
  Search,
  SearchCheck,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { SolutionCategoryTabs } from "@/components/solutions/shared/SolutionCategoryTabs";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import { webSaasSolutions } from "@/data/solutions/webSaasSolutions";

const knowledgeTabs = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "campaign-gap", label: "Campaign Gap", icon: CircleAlert },
  { id: "offer-strategy", label: "Offer Strategy", icon: Target },
  { id: "page-structure", label: "Page Structure", icon: Layers3 },
  { id: "conversion-copy", label: "Conversion Copy", icon: MessageCircle },
  { id: "lead-form-flow", label: "Lead Form Flow", icon: Send },
  { id: "trust-proof", label: "Trust & Proof", icon: ShieldCheck },
  { id: "tracking-optimization", label: "Tracking & Optimization", icon: BarChart3 },
  { id: "launch-roadmap", label: "Launch Roadmap", icon: Rocket },
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

const BREADCRUMB_MODULE = "Landing Pages";
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

function LandingPagePreviewWindow() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-[#d7e1f2] bg-white shadow-[0_20px_55px_rgba(15,23,42,0.08)]">
      <div className="flex items-center justify-between border-b border-[#d7e1f2] bg-[#f8fbff] px-5 py-4">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <p className="text-xs font-black text-[#66728f]">Landing Page Preview</p>
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[24px] bg-gradient-to-br from-[#0f214f] via-[#145cb7] to-[#7c3aed] p-6 text-white">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100">Campaign Landing Page</p>
          <h3 className="mt-4 text-4xl font-black tracking-[-0.05em]">Convert one focused offer into qualified leads.</h3>
          <p className="mt-4 text-sm font-semibold leading-7 text-blue-100">
            One audience, one offer, one page path, one strong CTA, one measurable conversion goal.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Offer match", "Trust proof", "Lead form", "Tracking"].map((item) => (
              <p key={item} className="rounded-xl bg-white/12 px-4 py-3 text-xs font-black">{item}</p>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["1", "Primary offer"],
              ["3", "Trust blocks"],
              ["100%", "CTA focus"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
                <p className="text-2xl font-black text-[#145cb7]">{value}</p>
                <p className="mt-1 text-xs font-bold text-[#66728f]">{label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
            <p className="text-sm font-black text-[#0f214f]">Conversion sections</p>
            <div className="mt-4 space-y-2">
              {["Hero + offer promise", "Problem + urgency", "Benefits + outcomes", "Proof + FAQs", "Lead form + thank-you path"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                  <span className="text-xs font-black text-[#0f214f]">{item}</span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#bfd7ff] bg-[#eef6ff] px-4 py-3">
            <p className="text-sm font-black text-[#145cb7]">Outcome: campaign traffic → trust → form submit → follow-up</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CampaignGapVisual() {
  const gaps = [
    { icon: Target, title: "Unclear Offer", text: "The page does not quickly explain the exact offer and result." },
    { icon: Users, title: "Wrong Audience Fit", text: "Traffic arrives, but the page does not match user intent." },
    { icon: MessageCircle, title: "Weak Copy", text: "The page describes features instead of creating desire and clarity." },
    { icon: ShieldCheck, title: "Missing Proof", text: "Visitors hesitate because proof, guarantees, and credibility are weak." },
    { icon: Send, title: "Form Friction", text: "Too many fields or unclear next steps reduce submissions." },
    { icon: BarChart3, title: "No Tracking", text: "Campaign clicks happen, but quality and conversion path are not measured." },
  ];

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-red-100 bg-gradient-to-br from-white via-[#fffafa] to-[#fff7f7] p-6">
      <div className="grid gap-5 xl:grid-cols-[1fr_260px_1fr] xl:items-center">
        <div className="grid gap-4">
          {gaps.slice(0, 3).map((item) => (
            <KnowledgeCard key={item.title} item={{ ...item, tag: "Leak" }} />
          ))}
        </div>

        <div className="rounded-[28px] border border-red-200 bg-white p-6 text-center shadow-[0_26px_70px_rgba(185,28,28,0.10)]">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-red-50 text-red-500">
            <CircleAlert className="h-7 w-7" />
          </div>
          <h3 className="mt-4 text-xl font-black text-red-700">Campaign Leakage</h3>
          <p className="mt-3 text-sm font-semibold leading-6 text-[#52627d]">
            Ad traffic, social traffic, or SEO traffic lands on a page that is not focused enough to convert.
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

function LandingBlueprintVisual() {
  const nodes = [
    { icon: Target, title: "Offer", text: "One clear promise" },
    { icon: Users, title: "Audience", text: "One target segment" },
    { icon: MessageCircle, title: "Copy", text: "Pain, promise, proof" },
    { icon: ShieldCheck, title: "Trust", text: "Proof and objections" },
    { icon: MousePointerClick, title: "CTA", text: "One primary action" },
    { icon: Send, title: "Form", text: "Low-friction capture" },
    { icon: Database, title: "Handoff", text: "Lead route and source" },
    { icon: BarChart3, title: "Optimize", text: "Track and improve" },
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
              <LayoutDashboard className="mx-auto h-8 w-8 text-[#8ee7f4]" />
              <p className="mt-2 text-xl font-black">Landing</p>
              <p className="text-[11px] font-bold text-cyan-100">Conversion Page</p>
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

function ConversionJourneyVisual() {
  const steps = [
    { icon: Target, title: "Campaign Source", text: "Ads, social, email, SEO, influencer, or direct campaign traffic." },
    { icon: MessageCircle, title: "Offer Match", text: "The page headline matches the promise that brought the user in." },
    { icon: ShieldCheck, title: "Trust Layer", text: "Proof, outcomes, screenshots, testimonials, or guarantee reduce doubt." },
    { icon: MousePointerClick, title: "CTA Decision", text: "The user sees one clear action repeated through the page." },
    { icon: Send, title: "Lead Submit", text: "The form captures only what is needed to qualify and follow up." },
    { icon: Database, title: "CRM Handoff", text: "Source, campaign, offer, status, and next action are passed forward." },
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

function LandingAnalyticsDashboard() {
  return (
    <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.04)]">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-xl font-black text-[#0f214f]">Landing Page Performance View</p>
          <p className="mt-1 text-sm font-semibold text-[#66728f]">
            Campaign traffic, CTA clicks, form starts, conversion rate, source quality, and next optimization actions.
          </p>
        </div>
        <span className="rounded-full bg-[#eef6ff] px-4 py-2 text-xs font-black text-[#145cb7]">Optimization-ready</span>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Campaign Visits", value: "8.4K", note: "Traffic sent to focused pages" },
          { label: "CTA Clicks", value: "1.6K", note: "Primary action engagement" },
          { label: "Leads", value: "428", note: "Captured from page forms" },
          { label: "Conversion", value: "5.1%", note: "Lead submit rate" },
        ].map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mt-6 grid gap-5 xl:grid-cols-[1fr_0.85fr]">
        <div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-5">
          <p className="text-sm font-black text-[#0f214f]">Campaign Funnel</p>
          <div className="mt-5 space-y-3">
            {[
              ["Page Views", "8.4K", "w-full"],
              ["Scroll 50%", "4.9K", "w-[76%]"],
              ["CTA Clicks", "1.6K", "w-[58%]"],
              ["Form Starts", "860", "w-[42%]"],
              ["Lead Submit", "428", "w-[30%]"],
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
          <p className="text-sm font-black text-[#0f214f]">Optimization Actions</p>
          <div className="mt-4 space-y-3">
            {[
              ["Test shorter hero headline", "Copy"],
              ["Move proof above form", "CRO"],
              ["Reduce form fields", "Form"],
              ["Add exit-intent CTA", "Lead"],
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
      eyebrow="Landing Pages"
      title="Build campaign landing pages that convert focused traffic into leads."
      intro="A landing page should not behave like a normal website page. It should focus one audience, one offer, one message, one conversion goal, and one measurable follow-up path."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: Target, title: "One Offer Focus", text: "Every landing page should be built around one offer or campaign promise, not multiple service distractions.", tag: "Focus" },
          { icon: Users, title: "Audience Match", text: "The headline, proof, benefits, and CTA should match the traffic source and buyer intent.", tag: "Fit" },
          { icon: Send, title: "Lead Ready", text: "Forms, WhatsApp, calls, demo requests, downloads, and thank-you paths should be planned before launch.", tag: "Capture" },
          { icon: BarChart3, title: "Optimization Ready", text: "Every landing page should track source, CTA clicks, form starts, leads, and conversion rate.", tag: "Growth" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <LandingPagePreviewWindow />
      <LandingBlueprintVisual />

      <SplitPanel
        title="A landing page is a campaign conversion machine."
        text="The page should remove distractions, answer the user's strongest doubts, and make one action feel obvious and safe."
        points={[
          "Match the campaign message in the first screen.",
          "Explain the offer through benefits, proof, and urgency.",
          "Reduce form friction and make the next step clear.",
          "Track every important action so the campaign can improve.",
        ]}
        visual={<ConversionJourneyVisual />}
      />

      <div className="flex flex-col gap-3 rounded-[28px] bg-[#075edb] p-6 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-black">First find the campaign leak.</p>
          <p className="mt-2 text-sm font-semibold text-blue-100">
            The next chapter shows why landing pages fail even when campaigns bring traffic.
          </p>
        </div>
        <SecondaryButton onClick={() => setActiveTab("campaign-gap")}>Open Campaign Gap</SecondaryButton>
      </div>
    </ChapterShell>
  );
}

function CampaignGapSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 01"
      title="Campaigns fail when the landing page does not match the promise."
      intro="Most paid or organic campaigns do not fail only because of traffic quality. They fail because the page after the click does not match user expectation, does not build enough confidence, or asks for action before trust is created."
    >
      <CampaignGapVisual />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          { icon: Target, title: "Offer Confusion", text: "The page tries to explain too many things, so the visitor cannot understand what the main offer is.", tag: "Focus" },
          { icon: Users, title: "Traffic Mismatch", text: "Ad copy, keyword intent, or social hook says one thing, but the landing page says something broader.", tag: "Intent" },
          { icon: MessageCircle, title: "Weak Sales Copy", text: "The page describes features but does not show urgency, outcome, proof, or why the offer matters now.", tag: "Copy" },
          { icon: ShieldCheck, title: "Trust Gap", text: "Visitors hesitate because proof, testimonials, screenshots, numbers, guarantees, or risk reducers are missing.", tag: "Proof" },
          { icon: Send, title: "Form Friction", text: "Long forms, unclear submit buttons, missing privacy notes, and poor mobile form UX reduce submissions.", tag: "Form" },
          { icon: BarChart3, title: "Blind Campaigns", text: "Without tracking, the business sees spend and traffic but not which sections or sources created leads.", tag: "Data" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {[
          { label: "Ad Clicks", value: "8.4K", note: "Traffic arrives with expectations" },
          { label: "Bounce Risk", value: "38%", note: "Users leave when message match is weak" },
          { label: "Form Drop-off", value: "49%", note: "Too much friction before submission" },
          { label: "Unknown Source", value: "26%", note: "Leads without reliable campaign attribution" },
          { label: "Unclear CTA", value: "3+", note: "Multiple actions competing for attention" },
        ].map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <SplitPanel
        title="The real leak is usually after the click."
        text="A campaign can bring users to the page, but the landing page must complete the persuasion, proof, and conversion job."
        points={[
          "The first screen must match the ad or keyword promise.",
          "The page must explain the offer before asking for details.",
          "The CTA must be repeated without creating distraction.",
          "The thank-you and follow-up path must be ready before launch.",
        ]}
        visual={<LandingAnalyticsDashboard />}
      />
    </ChapterShell>
  );
}

function OfferStrategySection() {
  return (
    <ChapterShell
      eyebrow="Chapter 02"
      title="The offer strategy decides whether the landing page has a reason to convert."
      intro="Before design starts, HNX clarifies the landing page offer: who it is for, what pain it solves, what result it promises, what proof supports it, and what action should happen next."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          { icon: Target, title: "One Campaign Goal", text: "Define whether the page is for consultation booking, quote request, demo signup, lead magnet, waitlist, purchase, or event registration.", tag: "Goal" },
          { icon: Users, title: "Audience Segment", text: "Write for a specific user group, stage of awareness, source, location, industry, or use case.", tag: "Audience" },
          { icon: CircleAlert, title: "Pain Trigger", text: "Explain the urgent problem that made the user click the campaign in the first place.", tag: "Pain" },
          { icon: Sparkles, title: "Outcome Promise", text: "Show the result the user can expect, not only the features of the service or product.", tag: "Promise" },
          { icon: ShieldCheck, title: "Risk Reversal", text: "Reduce hesitation with privacy notes, guarantees, consultation clarity, proof, or low-commitment CTA.", tag: "Trust" },
          { icon: MousePointerClick, title: "CTA Decision", text: "Choose one primary conversion action and make every section support that action.", tag: "Action" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-[24px] border border-red-200 bg-red-50 p-6">
          <p className="text-lg font-black text-red-700">Weak offer</p>
          <p className="mt-4 text-2xl font-black tracking-[-0.03em] text-[#0f214f]">“Get our services today.”</p>
          <p className="mt-4 text-sm font-semibold leading-6 text-[#52627d]">
            This does not explain what the offer is, who it helps, what result it creates, or why the user should act.
          </p>
        </div>
        <div className="rounded-[24px] border border-emerald-200 bg-emerald-50 p-6">
          <p className="text-lg font-black text-emerald-700">Strong offer</p>
          <p className="mt-4 text-2xl font-black tracking-[-0.03em] text-[#0f214f]">
            “Book a 30-minute website conversion audit and get a clear action plan to improve enquiries.”
          </p>
          <p className="mt-4 text-sm font-semibold leading-6 text-[#52627d]">
            This is specific, low-friction, outcome-based, and easy to understand.
          </p>
        </div>
      </div>

      <SplitPanel
        title="Offer strategy should answer five questions."
        text="A landing page becomes easier to design and write once the offer is sharp."
        points={[
          "Who exactly is this page for?",
          "What pain or desire brought the visitor here?",
          "What result does the offer promise?",
          "What proof makes the promise believable?",
          "What action should the user take now?",
        ]}
        visual={
          <div className="grid gap-3">
            {["Audience", "Pain", "Promise", "Proof", "Action"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#eef6ff] text-sm font-black text-[#145cb7]">{index + 1}</span>
                <p className="font-black text-[#0f214f]">{item}</p>
                {index < 4 ? <ArrowRight className="ml-auto h-5 w-5 text-[#2378ff]" /> : null}
              </div>
            ))}
          </div>
        }
      />
    </ChapterShell>
  );
}

function PageStructureSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 03"
      title="Landing page structure should move users from attention to action."
      intro="A strong landing page is not random sections. It is a planned persuasion sequence: attention, relevance, pain, solution, proof, offer, FAQ, form, and follow-up expectation."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: Home, title: "Hero Section", text: "Campaign match, core promise, audience fit, CTA, and trust cue in the first screen.", tag: "Attention" },
          { icon: CircleAlert, title: "Problem Section", text: "Show the pain, cost, delay, risk, or missed opportunity the user wants to fix.", tag: "Pain" },
          { icon: Sparkles, title: "Solution Section", text: "Explain how the offer solves the problem and why this path is better.", tag: "Solution" },
          { icon: CheckCircle2, title: "Benefits Section", text: "Turn features into outcomes the user can understand and care about.", tag: "Value" },
          { icon: ShieldCheck, title: "Proof Section", text: "Use testimonials, case numbers, screenshots, logos, process, or guarantee.", tag: "Trust" },
          { icon: MessageCircle, title: "FAQ Section", text: "Answer doubts before they stop the user from submitting the form.", tag: "Objections" },
          { icon: Send, title: "Lead Form", text: "Capture the right details with minimum friction and clear expectation.", tag: "Capture" },
          { icon: BarChart3, title: "Tracking Layer", text: "Track CTA clicks, form starts, submits, scroll depth, and campaign source.", tag: "Data" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <div className="rounded-[28px] border border-[#d7e1f2] bg-[#f8fbff] p-6">
        <p className="text-xl font-black text-[#0f214f]">Landing page flow</p>
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {[
            ["Hook", Target],
            ["Problem", CircleAlert],
            ["Offer", Sparkles],
            ["Proof", ShieldCheck],
            ["Form", Send],
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

      <LandingPagePreviewWindow />
    </ChapterShell>
  );
}

function ConversionCopySection() {
  return (
    <ChapterShell
      eyebrow="Chapter 04"
      title="Conversion copy should sell the next action, not just describe the offer."
      intro="Landing page copy must be clear, specific, persuasive, and action-oriented. It should connect the user's pain with the offer and make the next step feel safe."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          { icon: MessageCircle, title: "Headline Match", text: "The headline should reflect the ad, keyword, or source promise so visitors feel they landed in the right place.", tag: "Match" },
          { icon: CircleAlert, title: "Pain Language", text: "Use the user's real problem language, not internal company terms.", tag: "Pain" },
          { icon: Sparkles, title: "Benefit Translation", text: "Turn every feature into a business result, emotional gain, time saving, or risk reduction.", tag: "Value" },
          { icon: ShieldCheck, title: "Proof Copy", text: "Make testimonials, numbers, case examples, and process claims easy to believe.", tag: "Proof" },
          { icon: Lightbulb, title: "Objection Handling", text: "Handle doubts around time, cost, trust, complexity, quality, and what happens after submission.", tag: "Doubt" },
          { icon: MousePointerClick, title: "CTA Microcopy", text: "Button and form text should explain the action clearly and reduce perceived commitment.", tag: "CTA" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-[24px] border border-red-200 bg-red-50 p-6">
          <p className="text-lg font-black text-red-700">Weak copy</p>
          <p className="mt-4 text-2xl font-black tracking-[-0.03em] text-[#0f214f]">“Submit your details and our team will contact you.”</p>
          <p className="mt-4 text-sm font-semibold leading-6 text-[#52627d]">
            This does not explain why the user should submit or what they will receive.
          </p>
        </div>
        <div className="rounded-[24px] border border-emerald-200 bg-emerald-50 p-6">
          <p className="text-lg font-black text-emerald-700">Strong copy</p>
          <p className="mt-4 text-2xl font-black tracking-[-0.03em] text-[#0f214f]">
            “Get a clear landing page audit with conversion leaks, offer gaps, and next actions.”
          </p>
          <p className="mt-4 text-sm font-semibold leading-6 text-[#52627d]">
            This makes the value of submitting the form clear.
          </p>
        </div>
      </div>

      <SplitPanel
        title="The copy sequence should create momentum."
        text="The user should never feel lost. Every section should answer the next likely question."
        points={[
          "Why am I here?",
          "Is this relevant to my problem?",
          "Can I trust this business?",
          "What do I get if I submit?",
        ]}
        visual={
          <div className="grid gap-3">
            {["Hook", "Pain", "Promise", "Proof", "CTA"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#eef6ff] text-sm font-black text-[#145cb7]">{index + 1}</span>
                <p className="font-black text-[#0f214f]">{item}</p>
              </div>
            ))}
          </div>
        }
      />
    </ChapterShell>
  );
}

function LeadFormFlowSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 05"
      title="The form should feel easy, useful, and worth completing."
      intro="Lead capture is not only a form component. It includes CTA placement, form fields, privacy reassurance, thank-you state, lead routing, notifications, CRM handoff, and follow-up timing."
    >
      <ConversionJourneyVisual />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {[
          { icon: MousePointerClick, title: "CTA Placement", text: "Place CTAs after value, proof, and objection-handling sections, not only at the top.", tag: "Action" },
          { icon: FileText, title: "Field Strategy", text: "Ask only the details needed to qualify and follow up properly.", tag: "Fields" },
          { icon: ShieldCheck, title: "Privacy Note", text: "Explain that details are safe and used only for follow-up.", tag: "Trust" },
          { icon: Mail, title: "Notification", text: "Send lead details to email, CRM, admin dashboard, or automation workflow.", tag: "Alert" },
          { icon: Database, title: "Source Capture", text: "Capture campaign, page, CTA, and UTM data to measure lead quality.", tag: "Data" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <SplitPanel
        title="A lead submit should start a follow-up system."
        text="After the user submits, the system should know where the lead came from, what offer they responded to, and what should happen next."
        points={[
          "Show a clear thank-you state.",
          "Send the lead to the correct team member or CRM.",
          "Store campaign source and landing page context.",
          "Trigger reminder or follow-up actions when needed.",
        ]}
        visual={
          <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6">
            <p className="text-lg font-black text-[#0f214f]">Lead record example</p>
            <div className="mt-5 space-y-3">
              {[
                ["Name", "Priya Sharma"],
                ["Campaign", "Website Audit"],
                ["Page", "/landing/website-audit"],
                ["CTA", "Get Audit Plan"],
                ["Status", "New Lead"],
                ["Next Step", "Call within 24 hrs"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-xl bg-[#f8fbff] px-4 py-3">
                  <p className="text-xs font-bold text-[#66728f]">{label}</p>
                  <p className="text-xs font-black text-[#0f214f]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <LandingAnalyticsDashboard />
    </ChapterShell>
  );
}

function TrustProofSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 06"
      title="Trust proof should appear before the user starts doubting."
      intro="Landing pages usually ask users to act quickly. To make that possible, the page needs clear proof, confidence builders, and risk reducers placed near key decision moments."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: ShieldCheck, title: "Testimonials", text: "Short proof from real customers or representative use cases.", tag: "Social Proof" },
          { icon: BarChart3, title: "Numbers", text: "Metrics such as leads, speed, cost savings, conversion improvements, or delivery timelines.", tag: "Evidence" },
          { icon: LayoutDashboard, title: "Screenshots", text: "Show dashboard, workflow, reports, before/after, or deliverable previews.", tag: "Visual Proof" },
          { icon: FileText, title: "Process", text: "Explain the steps so the user knows what happens after submitting.", tag: "Clarity" },
          { icon: CheckCircle2, title: "Inclusions", text: "Show exactly what the user receives, so the offer feels concrete.", tag: "Value" },
          { icon: Bell, title: "Response Promise", text: "Set expectation for response time or follow-up method.", tag: "Assurance" },
          { icon: ShieldCheck, title: "Risk Reducer", text: "Use no-obligation, privacy, guarantee, free audit, or consultation clarity.", tag: "Safety" },
          { icon: MessageCircle, title: "FAQs", text: "Answer doubts around cost, time, delivery, setup, and support.", tag: "Objections" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {[
          ["Before proof", "Visitors compare, doubt, and leave before submitting."],
          ["During proof", "The page shows evidence exactly where hesitation appears."],
          ["After proof", "The CTA feels safer because the user understands value and next steps."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-[24px] border border-[#d7e1f2] bg-[#f8fbff] p-6">
            <p className="text-xl font-black text-[#0f214f]">{title}</p>
            <p className="mt-3 text-sm font-semibold leading-6 text-[#52627d]">{text}</p>
          </div>
        ))}
      </div>

      <SplitPanel
        title="Proof should support the CTA."
        text="The user should see proof before every important decision point, especially before the form."
        points={[
          "Place proof near the first CTA.",
          "Place process clarity before the form.",
          "Place FAQs near the bottom CTA.",
          "Place privacy and response promise near form submission.",
        ]}
        visual={<LandingPagePreviewWindow />}
      />
    </ChapterShell>
  );
}

function TrackingOptimizationSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 07"
      title="Landing pages should be measured and improved after launch."
      intro="The first landing page version is only the starting point. HNX prepares tracking so campaign traffic, CTA clicks, form starts, submit rate, source quality, and optimization actions are visible."
    >
      <LandingAnalyticsDashboard />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: Activity, title: "Event Tracking", text: "Track page view, scroll, CTA click, form start, form submit, WhatsApp click, call click, and download.", tag: "Events" },
          { icon: Target, title: "Source Quality", text: "Compare leads from ads, SEO, email, social, referral, and retargeting.", tag: "Source" },
          { icon: MousePointerClick, title: "CTA Testing", text: "Test CTA wording, placement, contrast, repetition, and destination.", tag: "CRO" },
          { icon: FileText, title: "Copy Testing", text: "Test headline, proof order, benefit language, FAQ depth, and form promise.", tag: "Copy" },
          { icon: Send, title: "Form Testing", text: "Test field count, multi-step vs single-step, privacy note, and button microcopy.", tag: "Form" },
          { icon: Gauge, title: "Speed Review", text: "Watch media weight, script load, layout shift, and mobile performance.", tag: "Speed" },
          { icon: Database, title: "CRM Feedback", text: "Use sales feedback to see whether leads are qualified or the page attracts the wrong users.", tag: "Sales" },
          { icon: TrendingUp, title: "Iteration Plan", text: "Turn data into weekly or monthly improvements instead of guessing.", tag: "Growth" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <SplitPanel
        title="Optimization is a loop, not a one-time fix."
        text="Every campaign should teach what message, proof, form, and source produce better leads."
        points={[
          "Measure what users do before submitting.",
          "Find which traffic sources create qualified leads.",
          "Improve the section where users hesitate.",
          "Refresh proof and CTA language based on lead quality.",
        ]}
        visual={
          <div className="grid gap-3">
            {["Measure", "Diagnose", "Test", "Improve", "Scale"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#eef6ff] text-sm font-black text-[#145cb7]">{index + 1}</span>
                <p className="font-black text-[#0f214f]">{item}</p>
                {index < 4 ? <ArrowRight className="ml-auto h-5 w-5 text-[#2378ff]" /> : null}
              </div>
            ))}
          </div>
        }
      />
    </ChapterShell>
  );
}

function LaunchRoadmapSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 08"
      title="Landing pages should launch with campaign, form, and tracking readiness."
      intro="A landing page launch includes offer confirmation, copy, design, responsive QA, form routing, tracking validation, campaign URL setup, thank-you path, and first optimization plan."
    >
      <div className="grid gap-5 xl:grid-cols-5">
        {[
          { icon: Target, title: "Offer Setup", days: "Step 01", text: "Define offer, audience, source, promise, CTA, and conversion goal.", deliverable: "Offer brief" },
          { icon: MessageCircle, title: "Copy & Wireframe", days: "Step 02", text: "Plan headline, sections, proof, CTA flow, FAQ, and form logic.", deliverable: "Landing blueprint" },
          { icon: Palette, title: "Design & Build", days: "Step 03", text: "Create responsive UI, visual proof blocks, form states, and thank-you flow.", deliverable: "Landing page" },
          { icon: BarChart3, title: "Tracking Setup", days: "Step 04", text: "Add events, UTM structure, source capture, CRM/email routing, and reporting.", deliverable: "Tracking map" },
          { icon: Rocket, title: "Launch & Improve", days: "Step 05", text: "Launch, validate traffic, monitor submissions, and optimize weak points.", deliverable: "Optimization plan" },
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
        title="The launch should make improvement easy."
        text="Landing pages are made for campaigns, so launch readiness must include source tracking, form delivery, and conversion review."
        points={[
          "UTM and campaign naming planned before traffic starts.",
          "Form notifications tested before launch.",
          "Thank-you page or state confirms next step.",
          "First optimization review planned after campaign data arrives.",
        ]}
        visual={<LandingAnalyticsDashboard />}
      />
    </ChapterShell>
  );
}

function FinalCtaSection() {
  return (
    <ChapterShell
      eyebrow="Final CTA"
      title="Launch landing pages that turn campaign attention into qualified leads."
      intro="HNX can help you build focused landing pages for ads, launches, SEO offers, lead magnets, demos, consultations, bookings, and product campaigns."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          { icon: Target, title: "Campaign Offer Strategy", text: "Clarify the exact offer, audience, promise, CTA, and expected conversion.", tag: "Strategy" },
          { icon: MessageCircle, title: "Conversion Copy", text: "Write the page around pain, benefits, proof, objections, and action.", tag: "Copy" },
          { icon: Layers3, title: "Landing Page Structure", text: "Plan hero, problem, solution, proof, FAQ, form, and thank-you flow.", tag: "Structure" },
          { icon: Palette, title: "Premium UI Design", text: "Create a polished responsive page with strong hierarchy and campaign-focused visuals.", tag: "Design" },
          { icon: Send, title: "Lead Form & Handoff", text: "Connect forms, WhatsApp, calls, email, CRM, source capture, and follow-up.", tag: "Leads" },
          { icon: BarChart3, title: "Tracking & CRO", text: "Measure CTA clicks, form starts, submissions, source quality, and optimization actions.", tag: "Growth" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <div className="overflow-hidden rounded-[32px] bg-[#075edb] p-8 text-white shadow-[0_22px_60px_rgba(7,94,219,0.28)]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">Ready for campaign pages that convert?</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em]">
              Build focused landing pages with clear offers, strong proof, low-friction forms, and measurable conversion data.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-blue-100">
              No generic page layout. No scattered CTAs. No blind campaigns. A complete landing page system built around offer clarity, conversion, tracking, and improvement.
            </p>
          </div>
          <div className="rounded-[24px] border border-white/20 bg-white/10 p-5">
            <div className="grid gap-3">
              <Link href="/contact" className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 text-sm font-black text-[#075edb]">
                Build My Landing Page <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/solutions/web-saas/client-portal" className="flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-4 text-sm font-black text-white">
                Explore Client Portal Module <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-100">
              <CheckCircle2 className="h-4 w-4" /> Campaign traffic deserves a focused page.
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
    case "campaign-gap":
      return <CampaignGapSection />;
    case "offer-strategy":
      return <OfferStrategySection />;
    case "page-structure":
      return <PageStructureSection />;
    case "conversion-copy":
      return <ConversionCopySection />;
    case "lead-form-flow":
      return <LeadFormFlowSection />;
    case "trust-proof":
      return <TrustProofSection />;
    case "tracking-optimization":
      return <TrackingOptimizationSection />;
    case "launch-roadmap":
      return <LaunchRoadmapSection />;
    case "final-cta":
      return <FinalCtaSection />;
    default:
      return <OverviewSection setActiveTab={setActiveTab} />;
  }
}

export default function LandingPagesClient() {
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
          title="Landing Pages"
          subtitle="Campaign Conversion System"
          icon={LayoutDashboard}
          items={knowledgeTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          ctaTitle="Build Campaign Pages"
          ctaText="Plan offer, copy, proof, form, tracking, and optimization before sending campaign traffic."
          ctaButtonText="Plan Landing Page"
          ctaHref="/contact"
        />

        <div id="knowledge-content" className="min-w-0 flex-1">
          <div className="mb-5 rounded-2xl border border-[#d7e1f2] bg-white px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)] lg:hidden">
            <p className="text-xs font-bold text-[#66728f]">Landing Pages</p>
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
