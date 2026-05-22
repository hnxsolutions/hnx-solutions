"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  CircleAlert,
  Code2,
  Database,
  FileText,
  Gauge,
  GitBranch,
  Globe2,
  Home,
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
  Smartphone,
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
  { id: "website-gap", label: "Website Gap", icon: CircleAlert },
  { id: "trust-positioning", label: "Trust & Positioning", icon: ShieldCheck },
  { id: "page-system", label: "Page System", icon: GitBranch },
  { id: "design-experience", label: "Design Experience", icon: Palette },
  { id: "lead-capture", label: "Lead Capture", icon: Send },
  { id: "seo-performance", label: "SEO & Performance", icon: SearchCheck },
  { id: "launch-handoff", label: "Launch & Handoff", icon: Rocket },
  { id: "growth-improvement", label: "Growth Improvement", icon: TrendingUp },
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

function scrollToKnowledge() {
  window.requestAnimationFrame(() => {
    document.getElementById("knowledge-content")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
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

function PrimaryLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0b6ffb] px-6 py-3 text-sm font-extrabold text-white shadow-[0_16px_32px_rgba(11,111,251,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(11,111,251,0.28)]"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
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

function WebsiteBlueprintVisual() {
  const nodes = [
    { icon: Home, title: "Homepage", text: "Main trust and positioning story" },
    { icon: FileText, title: "Service Pages", text: "Detailed offer pages" },
    { icon: Users, title: "Audience Paths", text: "Buyer-specific journeys" },
    { icon: ShieldCheck, title: "Proof", text: "Credibility and trust signals" },
    { icon: MousePointerClick, title: "CTA Flow", text: "Clear next actions" },
    { icon: Send, title: "Lead Capture", text: "Forms, WhatsApp, calls" },
    { icon: SearchCheck, title: "SEO Base", text: "Metadata, intent, links" },
    { icon: BarChart3, title: "Analytics", text: "Events and lead quality" },
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
              <Globe2 className="mx-auto h-8 w-8 text-[#8ee7f4]" />
              <p className="mt-2 text-xl font-black">Website</p>
              <p className="text-[11px] font-bold text-cyan-100">Trust Engine</p>
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

function WebsitePreviewWindow() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-[#d7e1f2] bg-white shadow-[0_20px_55px_rgba(15,23,42,0.08)]">
      <div className="flex items-center justify-between border-b border-[#d7e1f2] bg-[#f8fbff] px-5 py-4">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <p className="text-xs font-black text-[#66728f]">Business Website Preview</p>
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[24px] bg-gradient-to-br from-[#0f214f] via-[#145cb7] to-[#19b7c5] p-6 text-white">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100">Premium Business Website</p>
          <h3 className="mt-4 text-4xl font-black tracking-[-0.05em]">A website that explains, proves, and converts.</h3>
          <p className="mt-4 text-sm font-semibold leading-7 text-blue-100">
            Built around clarity, trust, speed, SEO, and lead capture — not just visual appearance.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Hero clarity", "Service depth", "Trust proof", "Lead flow"].map((item) => (
              <p key={item} className="rounded-xl bg-white/12 px-4 py-3 text-xs font-black">{item}</p>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["95+", "Speed target"],
              ["3x", "CTA paths"],
              ["100%", "Mobile ready"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
                <p className="text-2xl font-black text-[#145cb7]">{value}</p>
                <p className="mt-1 text-xs font-bold text-[#66728f]">{label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
            <p className="text-sm font-black text-[#0f214f]">Page sections planned</p>
            <div className="mt-4 space-y-2">
              {["Hero + CTA", "Services + industry fit", "Proof + testimonials", "Process + FAQs", "Contact + lead routing"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                  <span className="text-xs font-black text-[#0f214f]">{item}</span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#bfd7ff] bg-[#eef6ff] px-4 py-3">
            <p className="text-sm font-black text-[#145cb7]">Outcome: trust → enquiry → follow-up → growth</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WebsiteGapVisual() {
  const gaps = [
    { icon: Sparkles, title: "Weak First Impression", text: "The first screen does not explain value fast enough." },
    { icon: Send, title: "Low Enquiry Conversion", text: "CTAs and forms are not placed around buyer intent." },
    { icon: Smartphone, title: "Poor Mobile Experience", text: "Spacing, tap targets, and content flow break on small screens." },
    { icon: SearchCheck, title: "Thin SEO Structure", text: "Service pages lack hierarchy, metadata, and internal links." },
    { icon: ShieldCheck, title: "Missing Proof", text: "Trust signals are weak, hidden, or not tied to buyer doubts." },
    { icon: BarChart3, title: "No Measurement", text: "The business cannot see which pages produce leads." },
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
          <h3 className="mt-4 text-xl font-black text-red-700">Website Trust Gap</h3>
          <p className="mt-3 text-sm font-semibold leading-6 text-[#52627d]">
            The website may exist, but it does not create enough trust, clarity, or action.
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

function LeadJourneyVisual() {
  const steps = [
    { icon: Globe2, title: "Visitor", text: "Search, ad, referral, social, or direct visit." },
    { icon: ShieldCheck, title: "Trust", text: "Clear design, proof, and positioning." },
    { icon: FileText, title: "Service Fit", text: "The right page answers their problem." },
    { icon: MousePointerClick, title: "CTA", text: "Call, WhatsApp, quote, demo, or form." },
    { icon: Send, title: "Lead Capture", text: "Source and intent are captured." },
    { icon: Database, title: "Handoff", text: "Lead goes to email, CRM, or dashboard." },
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

function PerformanceDashboard() {
  return (
    <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.04)]">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-xl font-black text-[#0f214f]">Website Performance View</p>
          <p className="mt-1 text-sm font-semibold text-[#66728f]">
            Leads, sources, forms, page quality, speed, SEO, and improvement actions.
          </p>
        </div>
        <span className="rounded-full bg-[#eef6ff] px-4 py-2 text-xs font-black text-[#145cb7]">Launch-ready dashboard</span>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Page Speed", value: "95+", note: "Performance target" },
          { label: "Form Leads", value: "148", note: "This month" },
          { label: "Top Page", value: "Services", note: "42% lead share" },
          { label: "SEO Checks", value: "96%", note: "Technical readiness" },
        ].map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mt-6 grid gap-5 xl:grid-cols-[1fr_0.85fr]">
        <div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-5">
          <p className="text-sm font-black text-[#0f214f]">Lead Quality Funnel</p>
          <div className="mt-5 space-y-3">
            {[
              ["Visitors", "12.8K", "w-full"],
              ["CTA Clicks", "1.9K", "w-[78%]"],
              ["Form Starts", "620", "w-[54%]"],
              ["Qualified Leads", "148", "w-[36%]"],
              ["Consultations", "46", "w-[24%]"],
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
          <p className="text-sm font-black text-[#0f214f]">Improvement Actions</p>
          <div className="mt-4 space-y-3">
            {[
              ["Improve hero CTA", "High impact"],
              ["Add FAQ schema", "SEO"],
              ["Shorten form fields", "CRO"],
              ["Compress hero media", "Speed"],
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
      eyebrow="Business Website"
      title="Build a premium business website that earns trust and enquiries."
      intro="A business website should not be only a design project. It should explain the business clearly, build trust quickly, guide users toward action, support SEO visibility, and send every enquiry into a structured follow-up path."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: ShieldCheck, title: "Trust First", text: "The first screen, proof sections, service clarity, and design quality should make the user feel confident.", tag: "Credibility" },
          { icon: FileText, title: "Service Clarity", text: "Every service page should explain what you do, who it helps, what result it creates, and why it matters.", tag: "Understanding" },
          { icon: Send, title: "Lead Ready", text: "Calls, WhatsApp, forms, quote requests, and consultation CTAs should be easy to find and track.", tag: "Conversion" },
          { icon: SearchCheck, title: "SEO Prepared", text: "Metadata, headings, internal links, FAQ sections, schema direction, and speed should be planned from the start.", tag: "Visibility" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <WebsitePreviewWindow />
      <WebsiteBlueprintVisual />

      <SplitPanel
        title="This website is built like a business asset."
        text="Instead of creating random sections, HNX plans the website around trust, search intent, user journey, lead capture, and measurement."
        points={[
          "Homepage explains the business and directs users into the right path.",
          "Service pages educate, handle objections, and guide the user toward contact.",
          "Forms and CTA actions capture source and intent for better follow-up.",
          "Analytics and SEO foundations help the website improve after launch.",
        ]}
        visual={<LeadJourneyVisual />}
      />

      <div className="flex flex-col gap-3 rounded-[28px] bg-[#075edb] p-6 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-black">First understand the gap, then build the website.</p>
          <p className="mt-2 text-sm font-semibold text-blue-100">
            The next chapter shows why many websites look fine but still fail to create enough business.
          </p>
        </div>
        <SecondaryButton onClick={() => setActiveTab("website-gap")}>Open Website Gap</SecondaryButton>
      </div>
    </ChapterShell>
  );
}

function WebsiteGapSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 01"
      title="Most websites fail before the user reaches the contact form."
      intro="The problem is not always that the website looks old. The deeper problem is that the website does not explain the offer clearly, does not build enough trust, does not guide the user through a journey, and does not connect enquiries to business follow-up."
    >
      <WebsiteGapVisual />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          { icon: Sparkles, title: "Weak First Impression", text: "Users judge credibility in seconds. If the hero section does not make the business feel clear, serious, and relevant, the user leaves.", tag: "Trust" },
          { icon: FileText, title: "Confusing Service Content", text: "Many websites list services but do not explain the problem, process, proof, pricing direction, or what action to take.", tag: "Clarity" },
          { icon: MousePointerClick, title: "Hidden CTAs", text: "Visitors read the site but do not see a clear next step. CTA placement, wording, and repetition are usually weak.", tag: "Action" },
          { icon: Smartphone, title: "Mobile Friction", text: "The mobile version often has cramped spacing, poor hierarchy, slow media, and weak form usability.", tag: "UX" },
          { icon: Search, title: "No Search Intent", text: "Pages are created around company language instead of what users are searching for.", tag: "SEO" },
          { icon: BarChart3, title: "No Learning Loop", text: "The business cannot see which sections, CTAs, sources, or service pages are producing real leads.", tag: "Data" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {[
          { label: "Bounce Risk", value: "42%", note: "Users leave when first-screen clarity is weak" },
          { label: "Hidden CTAs", value: "3+", note: "Actions exist but are not placed strategically" },
          { label: "Mobile Issues", value: "18", note: "Common spacing, speed, and tap issues" },
          { label: "SEO Gaps", value: "24", note: "Metadata, heading, and content opportunities" },
          { label: "Unknown Leads", value: "31%", note: "Enquiries without page/source context" },
        ].map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <SplitPanel
        title="A redesign alone does not solve the problem."
        text="If the page strategy remains weak, the new website may look better but still fail to convert. The website needs a business-backed structure."
        points={[
          "Trust has to be designed into the first screen.",
          "Services need deeper explanation and proof.",
          "Every page needs a next action and measurement point.",
          "SEO and analytics should be part of the build, not afterthoughts.",
        ]}
        visual={<PerformanceDashboard />}
      />
    </ChapterShell>
  );
}

function TrustPositioningSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 02"
      title="Trust and positioning decide whether visitors take the business seriously."
      intro="A premium business website must explain what the company does, who it serves, why the offer matters, what proof exists, and why the user should act now. HNX shapes this message before UI design begins."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          { icon: Target, title: "Positioning Statement", text: "Define the business in one clear promise: who you help, what problem you solve, and what outcome you create.", tag: "Message" },
          { icon: Users, title: "Audience Fit", text: "Shape content around the actual buyer: their pain, decision criteria, doubts, and trust requirements.", tag: "Audience" },
          { icon: ShieldCheck, title: "Proof System", text: "Use testimonials, case studies, certifications, process, numbers, screenshots, and quality signals to create confidence.", tag: "Proof" },
          { icon: Lightbulb, title: "Objection Handling", text: "Answer doubts about quality, timeline, support, cost, experience, reliability, and implementation before they stop conversion.", tag: "Friction" },
          { icon: FileText, title: "Service Narrative", text: "Show the problem, solution, process, inclusions, outcomes, FAQs, and next step for every key service.", tag: "Story" },
          { icon: Sparkles, title: "Premium Perception", text: "Visual hierarchy, spacing, typography, imagery, and interaction details should match the value of the offer.", tag: "Design" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-[24px] border border-red-200 bg-red-50 p-6">
          <p className="text-lg font-black text-red-700">Weak website message</p>
          <p className="mt-4 text-2xl font-black tracking-[-0.03em] text-[#0f214f]">“We provide quality services for all your business needs.”</p>
          <p className="mt-4 text-sm font-semibold leading-6 text-[#52627d]">
            This is generic. It does not tell the user who the business helps, what specific result it creates, or why the user should trust it.
          </p>
        </div>
        <div className="rounded-[24px] border border-emerald-200 bg-emerald-50 p-6">
          <p className="text-lg font-black text-emerald-700">Strong website message</p>
          <p className="mt-4 text-2xl font-black tracking-[-0.03em] text-[#0f214f]">
            “We build fast, premium business websites that explain your services clearly, earn trust, and turn visitors into qualified enquiries.”
          </p>
          <p className="mt-4 text-sm font-semibold leading-6 text-[#52627d]">
            This explains audience, result, business value, and conversion intent.
          </p>
        </div>
      </div>

      <SplitPanel
        title="Trust follows a sequence."
        text="The website should move the user from immediate clarity to proof, then from confidence to action."
        points={[
          "First screen: say what you do and who it helps.",
          "Problem section: show that you understand the user's situation.",
          "Proof section: reduce doubt with evidence.",
          "CTA section: make the next step feel safe and obvious.",
        ]}
        visual={
          <div className="grid gap-3">
            {["Clarity", "Relevance", "Proof", "Confidence", "Action"].map((item, index) => (
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

function PageSystemSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 03"
      title="A business website is a page system, not a collection of sections."
      intro="HNX plans how the homepage, service pages, industry pages, contact page, FAQs, blogs, case studies, and conversion sections work together so users can understand, compare, trust, and enquire."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: Home, title: "Homepage", text: "The primary narrative: who you are, what you do, who you help, why trust you, and where to go next.", tag: "Core" },
          { icon: FileText, title: "Service Pages", text: "Deep pages for each key offer with problem, solution, process, outcomes, FAQs, and CTA.", tag: "Revenue" },
          { icon: Users, title: "Industry Pages", text: "Pages that speak to specific markets so users feel the website understands their business context.", tag: "Relevance" },
          { icon: ShieldCheck, title: "Proof Pages", text: "Case studies, testimonials, portfolio, compliance, certifications, and success examples.", tag: "Trust" },
          { icon: MessageCircle, title: "Contact Page", text: "A conversion page with clear contact paths, form logic, WhatsApp/call options, and expectation setting.", tag: "Lead" },
          { icon: Search, title: "Blog / Resources", text: "Educational content that supports SEO, buyer education, internal links, and long-term trust.", tag: "SEO" },
          { icon: LayoutDashboard, title: "Admin Ready", text: "Content structure can be prepared for easy updates and future dashboard/content controls.", tag: "Ops" },
          { icon: BarChart3, title: "Analytics Layer", text: "Each page has events and conversion points so the business knows what performs.", tag: "Data" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <div className="rounded-[28px] border border-[#d7e1f2] bg-[#f8fbff] p-6">
        <p className="text-xl font-black text-[#0f214f]">Website structure flow</p>
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {[
            ["Homepage", Home],
            ["Service / Industry Pages", FileText],
            ["Proof / FAQs / Process", ShieldCheck],
            ["Contact / WhatsApp / Form", Send],
            ["CRM / Email / Dashboard", Database],
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

      <SplitPanel
        title="Every page needs a business role."
        text="A page should either create trust, explain an offer, answer search intent, capture leads, handle objections, or support follow-up."
        points={[
          "Homepage creates the first trust and directs journeys.",
          "Service pages turn interest into understanding.",
          "Proof pages reduce doubt and improve conversion.",
          "Contact paths capture lead intent and source context.",
        ]}
        visual={<WebsiteBlueprintVisual />}
      />
    </ChapterShell>
  );
}

function DesignExperienceSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 04"
      title="Premium UI is not decoration. It is trust, clarity, and speed."
      intro="The visual experience should make the business feel credible and easy to understand. HNX designs websites with clear hierarchy, polished sections, responsive layouts, fast interactions, and clean content pacing."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          { icon: Palette, title: "Visual Hierarchy", text: "Headlines, sections, cards, CTAs, icons, and spacing guide users through the page without confusion.", tag: "UI" },
          { icon: Smartphone, title: "Mobile-first Layout", text: "The mobile website should feel designed, not squeezed. CTAs, forms, cards, and menus must be usable.", tag: "Mobile" },
          { icon: Gauge, title: "Speed Perception", text: "Optimized images, clean components, and lightweight interactions make the website feel faster and more premium.", tag: "Speed" },
          { icon: Sparkles, title: "Micro-interactions", text: "Subtle hover states, transitions, active tabs, and scroll cues make the site feel modern without becoming flashy.", tag: "Polish" },
          { icon: ShieldCheck, title: "Trust Layouts", text: "Proof sections, testimonial cards, badges, process cards, and FAQ blocks are placed around buyer hesitation.", tag: "Trust" },
          { icon: FileText, title: "Readable Content", text: "Users should be able to scan the page, understand the offer, and decide the next step quickly.", tag: "Content" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <WebsitePreviewWindow />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Hero Clarity", value: "3s", note: "User should understand value quickly" },
          { label: "Mobile UX", value: "100%", note: "Responsive layout across screens" },
          { label: "Visual System", value: "Reusable", note: "Cards, CTAs, sections, icons" },
          { label: "Interaction Style", value: "Subtle", note: "Professional motion and hover states" },
        ].map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <SplitPanel
        title="The site should feel premium without becoming crowded."
        text="The best business websites use whitespace, strong typography, clear section rhythm, and focused cards. They do not overload the user with random animations or too many competing visual elements."
        points={[
          "Use one clear primary CTA per major section.",
          "Keep cards readable and spacing consistent.",
          "Use visuals to explain value, not only to decorate.",
          "Keep the brand style consistent across pages.",
        ]}
        visual={
          <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6">
            <p className="text-lg font-black text-[#0f214f]">Design checklist</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {["Clear heading scale", "Consistent spacing", "Premium cards", "Readable mobile", "Trust sections", "CTA rhythm", "Accessible contrast", "Fast media"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl bg-[#f8fbff] px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span className="text-xs font-black text-[#0f214f]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        }
      />
    </ChapterShell>
  );
}

function LeadCaptureSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 05"
      title="The website should turn interest into structured enquiries."
      intro="A premium business website needs planned conversion routes: primary CTA, secondary CTA, forms, WhatsApp, phone calls, quote requests, consultation booking, and follow-up routing."
    >
      <LeadJourneyVisual />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {[
          { icon: MousePointerClick, title: "Primary CTA", text: "The main action: book a consultation, request a quote, call, or start a project discussion.", tag: "Main" },
          { icon: FileText, title: "Secondary CTA", text: "A softer action like view services, explore process, see portfolio, or read case studies.", tag: "Soft" },
          { icon: Send, title: "Lead Form", text: "Short, relevant, mobile-friendly forms with only the fields needed for follow-up.", tag: "Form" },
          { icon: MessageCircle, title: "WhatsApp / Call", text: "Fast contact paths for users who want immediate conversation.", tag: "Direct" },
          { icon: Database, title: "Lead Routing", text: "Source, service interest, message, and contact details routed to email, CRM, or dashboard.", tag: "Ops" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <PerformanceDashboard />

      <SplitPanel
        title="A form is not the full lead system."
        text="The lead system includes CTA placement, friction control, field design, thank-you states, source capture, notifications, and follow-up ownership."
        points={[
          "Every lead should include where it came from.",
          "Every CTA should have an event that can be tracked.",
          "Every form should have a confirmation or next-step state.",
          "Every enquiry should reach the right team member quickly.",
        ]}
        visual={
          <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6">
            <p className="text-lg font-black text-[#0f214f]">Lead record example</p>
            <div className="mt-5 space-y-3">
              {[
                ["Name", "Amit Sharma"],
                ["Source Page", "/services/web-development"],
                ["Interest", "Business Website"],
                ["CTA", "Book Consultation"],
                ["Status", "New Lead"],
                ["Owner", "Sales Team"],
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
    </ChapterShell>
  );
}

function SeoPerformanceSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 06"
      title="SEO and performance should be built into the website foundation."
      intro="A business website should launch with clean metadata, proper heading hierarchy, internal links, fast loading, responsive behavior, accessible structure, and analytics events. This makes the site easier to rank, easier to use, and easier to improve."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: SearchCheck, title: "Metadata System", text: "Title tags, descriptions, canonical logic, open graph, and page-level metadata prepared for core pages.", tag: "SEO" },
          { icon: FileText, title: "Heading Hierarchy", text: "H1, H2, H3 sections planned around user understanding and search intent.", tag: "Structure" },
          { icon: GitBranch, title: "Internal Links", text: "Homepage, service pages, industry pages, blogs, and contact pages connected naturally.", tag: "Authority" },
          { icon: Gauge, title: "Performance", text: "Fast loading through optimized assets, clean components, responsive images, and controlled scripts.", tag: "Speed" },
          { icon: Smartphone, title: "Responsive QA", text: "Desktop, tablet, and mobile layouts tested for spacing, hierarchy, tap targets, and readability.", tag: "UX" },
          { icon: ShieldCheck, title: "Accessibility Base", text: "Readable contrast, semantic structure, alt text direction, labels, and keyboard-friendly patterns.", tag: "A11y" },
          { icon: BarChart3, title: "Analytics Events", text: "Track CTA clicks, form starts, submissions, WhatsApp clicks, and key page actions.", tag: "Data" },
          { icon: Activity, title: "Improvement Loop", text: "Use real page and lead data to improve content, CTAs, and sections after launch.", tag: "Growth" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <SplitPanel
        title="Search-ready does not mean keyword stuffing."
        text="It means every important page has a purpose, clean structure, helpful content, clear metadata, FAQ opportunities, internal links, and measurable user actions."
        points={[
          "Service pages target commercial search intent.",
          "FAQ sections answer buyer objections and long-tail questions.",
          "Internal links guide users and strengthen content clusters.",
          "Tracking reveals which pages need content or CTA improvements.",
        ]}
        visual={
          <div className="grid gap-3">
            {["Keyword Theme", "Page Intent", "Section Structure", "FAQ / Schema", "Internal Links", "Analytics Review"].map((item, index) => (
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
          { label: "Page Speed", value: "95+", note: "Performance target" },
          { label: "Core Pages", value: "8-12", note: "Typical first launch structure" },
          { label: "FAQ Blocks", value: "12+", note: "Buyer questions planned" },
          { label: "CTA Events", value: "10+", note: "Conversion actions tracked" },
          { label: "SEO Checks", value: "96%", note: "Technical readiness target" },
        ].map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>
    </ChapterShell>
  );
}

function LaunchHandoffSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 07"
      title="Launch should be controlled, tested, and easy to hand over."
      intro="A business website should not be launched casually. HNX prepares QA, responsive checks, form testing, tracking validation, SEO review, deployment, content handoff, and client guidance."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: FileText, title: "Content Freeze", text: "Final copy, service details, CTAs, FAQs, testimonials, and proof assets confirmed before launch.", tag: "Content" },
          { icon: Smartphone, title: "Responsive QA", text: "Layouts checked across desktop, tablet, and mobile screens for visual and functional quality.", tag: "QA" },
          { icon: Send, title: "Form Testing", text: "Every form, WhatsApp link, mail action, phone link, and thank-you state tested properly.", tag: "Leads" },
          { icon: SearchCheck, title: "SEO Review", text: "Metadata, sitemap, robots, headings, canonical logic, alt text direction, and index readiness checked.", tag: "SEO" },
          { icon: Gauge, title: "Performance Pass", text: "Images, fonts, scripts, layout shifts, and load behavior reviewed before go-live.", tag: "Speed" },
          { icon: BarChart3, title: "Analytics Validation", text: "CTA clicks, form submits, source capture, and conversion events checked after deployment.", tag: "Tracking" },
          { icon: LayoutDashboard, title: "Admin / Update Guide", text: "Client receives guidance on what can be updated and how changes should be requested or managed.", tag: "Handoff" },
          { icon: Rocket, title: "Go-live Support", text: "DNS, deployment, crawl checks, form delivery, and post-launch monitoring supported.", tag: "Launch" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-4">
        {[
          { icon: FileText, title: "Pre-launch", text: "Content, assets, URLs, forms, and SEO setup are confirmed.", deliverable: "Launch checklist" },
          { icon: Code2, title: "Technical QA", text: "Responsive UI, speed, accessibility, metadata, and tracking are tested.", deliverable: "QA report" },
          { icon: Rocket, title: "Deployment", text: "Domain, hosting, SSL, sitemap, forms, and analytics are verified.", deliverable: "Live website" },
          { icon: BarChart3, title: "Post-launch", text: "Monitor leads, traffic, page issues, indexing, and improvement actions.", deliverable: "Growth baseline" },
        ].map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.title} className="relative rounded-[24px] border border-[#d7e1f2] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.045)]">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#eef6ff] text-sm font-black text-[#145cb7]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <IconShell icon={Icon} className="mt-6 h-16 w-16" />
              <p className="mt-6 text-xl font-black text-[#0f214f]">{step.title}</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-[#52627d]">{step.text}</p>
              <p className="mt-5 text-sm font-black text-[#145cb7]">Deliverable: {step.deliverable}</p>
              {index < 3 ? <ArrowRight className="absolute -right-5 top-1/2 z-20 hidden h-6 w-6 -translate-y-1/2 text-[#2378ff] xl:block" /> : null}
            </div>
          );
        })}
      </div>

      <PerformanceDashboard />
    </ChapterShell>
  );
}

function GrowthImprovementSection() {
  return (
    <ChapterShell
      eyebrow="Chapter 08"
      title="A website should improve after launch, not stay frozen."
      intro="After launch, the website becomes a measurable growth asset. HNX plans tracking and review points so the business can improve service pages, CTAs, SEO content, form conversion, speed, and lead quality."
    >
      <PerformanceDashboard />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: BarChart3, title: "Lead Quality Review", text: "Review which pages, sources, and CTAs produce the best enquiries.", tag: "Leads" },
          { icon: Search, title: "Search Console Review", text: "Use impressions, clicks, CTR, and position data to improve pages and content.", tag: "SEO" },
          { icon: MousePointerClick, title: "CTA Optimization", text: "Improve button copy, placement, repetition, and destination based on user actions.", tag: "CRO" },
          { icon: FileText, title: "Content Refresh", text: "Update service pages, FAQs, proof, case studies, and blogs based on demand and performance.", tag: "Content" },
          { icon: Gauge, title: "Performance Monitoring", text: "Watch speed, Core Web Vitals direction, media weight, and mobile usability.", tag: "Speed" },
          { icon: Users, title: "User Behavior", text: "Review drop-offs, scroll depth, forms, and navigation patterns to remove friction.", tag: "UX" },
          { icon: Database, title: "CRM Feedback", text: "Use sales/follow-up feedback to improve page messaging and lead qualification.", tag: "Sales" },
          { icon: TrendingUp, title: "Growth Roadmap", text: "Turn insights into monthly improvements, new pages, SEO work, and campaign destinations.", tag: "Roadmap" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <SplitPanel
        title="The website becomes a continuous business system."
        text="Every month, the business can review what is working, what is leaking, and what should be improved next."
        points={[
          "Improve pages that get impressions but low clicks.",
          "Improve CTAs that get visits but low form starts.",
          "Create new pages for high-intent search demand.",
          "Refresh trust sections when sales objections repeat.",
        ]}
        visual={
          <div className="grid gap-3">
            {["Measure", "Diagnose", "Improve", "Publish", "Review"].map((item, index) => (
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

function FinalCtaSection() {
  return (
    <ChapterShell
      eyebrow="Final CTA"
      title="Build a business website that feels premium and works as a lead system."
      intro="HNX can turn your website into a structured trust engine: clear messaging, premium UI, service pages, lead capture, SEO base, analytics, launch support, and improvement roadmap."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          { icon: SearchCheck, title: "Website Audit", text: "Understand what is weak in clarity, trust, service structure, CTAs, SEO, speed, and mobile experience.", tag: "Audit" },
          { icon: Target, title: "Positioning & Message", text: "Clarify who you serve, what result you create, and why visitors should choose your business.", tag: "Strategy" },
          { icon: GitBranch, title: "Page Architecture", text: "Plan homepage, services, industry pages, proof, FAQs, contact flow, and future content.", tag: "Structure" },
          { icon: Palette, title: "Premium UI Design", text: "Design a professional, responsive, brand-consistent experience with clear hierarchy.", tag: "Design" },
          { icon: Send, title: "Lead Capture Flow", text: "Forms, WhatsApp, calls, quotes, consultation CTAs, notifications, and source capture.", tag: "Conversion" },
          { icon: BarChart3, title: "Tracking & Growth", text: "Analytics events, SEO checks, performance baseline, and post-launch improvement actions.", tag: "Growth" },
        ].map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <div className="overflow-hidden rounded-[32px] bg-[#075edb] p-8 text-white shadow-[0_22px_60px_rgba(7,94,219,0.28)]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">Ready for a better business website?</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em]">
              Build a website that explains your business clearly, earns trust, and turns visitors into enquiries.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-blue-100">
              No random section design. No generic template feel. No disconnected forms. A complete business website system built around trust, visibility, conversion, and growth.
            </p>
          </div>
          <div className="rounded-[24px] border border-white/20 bg-white/10 p-5">
            <div className="grid gap-3">
              <Link href="/contact" className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 text-sm font-black text-[#075edb]">
                Book Website Strategy Call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/solutions/web-saas/landing-pages" className="flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-4 text-sm font-black text-white">
                Explore Landing Pages Module <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-100">
              <CheckCircle2 className="h-4 w-4" /> Premium design + conversion structure.
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
    case "website-gap":
      return <WebsiteGapSection />;
    case "trust-positioning":
      return <TrustPositioningSection />;
    case "page-system":
      return <PageSystemSection />;
    case "design-experience":
      return <DesignExperienceSection />;
    case "lead-capture":
      return <LeadCaptureSection />;
    case "seo-performance":
      return <SeoPerformanceSection />;
    case "launch-handoff":
      return <LaunchHandoffSection />;
    case "growth-improvement":
      return <GrowthImprovementSection />;
    case "final-cta":
      return <FinalCtaSection />;
    default:
      return <OverviewSection setActiveTab={setActiveTab} />;
  }
}

export default function BusinessWebsitePage() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  useEffect(() => {
    const currentTab = getTabFromHash(window.location.hash);

    if (currentTab) {
      setActiveTab(currentTab);
    }
  }, []);

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
          title="Business Website"
          subtitle="Trust + Lead System"
          icon={Code2}
          items={knowledgeTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          ctaTitle="Build a Better Website"
          ctaText="Plan messaging, pages, proof, forms, SEO, analytics, and launch before development starts."
          ctaButtonText="Book Website Call"
          ctaHref="/contact"
        />

        <div id="knowledge-content" className="min-w-0 flex-1">
          <div className="mb-5 rounded-2xl border border-[#d7e1f2] bg-white px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)] lg:hidden">
            <p className="text-xs font-bold text-[#66728f]">Business Website</p>
            <p className="text-sm font-black text-[#0f214f]">{activeLabel}</p>
          </div>

          {renderSection(activeTab, handleTabChange)}
        </div>
      </div>
    </main>
  );
}
