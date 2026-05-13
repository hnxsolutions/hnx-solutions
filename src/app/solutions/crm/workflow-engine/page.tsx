"use client";

import Link from "next/link";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Boxes,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Clock3,
  Database,
  FileText,
  Filter,
  Gauge,
  GitBranch,
  Globe2,
  Home,
  Layers3,
  Mail,
  MessageCircle,
  Network,
  PlayCircle,
  Plus,
  RefreshCw,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  Shuffle,
  SlidersHorizontal,
  Sparkles,
  Target,
  TimerReset,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { CRMSolutionTabs } from "@/components/solutions/CRMSolutionTabs";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import { Button } from "@/components/ui/Button";

type TabId =
  | "overview"
  | "trigger-logic"
  | "flow-builder"
  | "automation-templates"
  | "sequences-reminders"
  | "monitoring-logs"
  | "integrations"
  | "final-cta";

type SidebarItem = {
  id: TabId;
  label: string;
  icon: LucideIcon;
  description: string;
};

const sidebarItems: SidebarItem[] = [
  {
    id: "overview",
    label: "Overview",
    icon: Home,
    description: "Automate repetitive work, reminders, assignments, and approvals across your business.",
  },
  {
    id: "trigger-logic",
    label: "Trigger Logic",
    icon: Sparkles,
    description: "Start workflows from events, conditions, CRM data, forms, and activity changes.",
  },
  {
    id: "flow-builder",
    label: "Flow Builder",
    icon: GitBranch,
    description: "Build visual workflows with triggers, conditions, branches, and actions.",
  },
  {
    id: "automation-templates",
    label: "Automation Templates",
    icon: Layers3,
    description: "Launch proven automation templates for sales, support, operations, finance, and onboarding.",
  },
  {
    id: "sequences-reminders",
    label: "Sequences & Reminders",
    icon: Bell,
    description: "Automate follow-up sequences, reminders, nudges, and timed communication.",
  },
  {
    id: "monitoring-logs",
    label: "Monitoring & Logs",
    icon: Gauge,
    description: "Track every workflow run, failure, retry, status, and performance metric.",
  },
  {
    id: "integrations",
    label: "Integrations",
    icon: Boxes,
    description: "Connect CRM data, emails, chats, forms, calendars, payments, and third-party tools.",
  },
  {
    id: "final-cta",
    label: "Final CTA",
    icon: Rocket,
    description: "Show why automation becomes the execution layer of your VisionCRM system.",
  },
];

const toneClasses: Record<string, string> = {
  blue: "bg-[#eef6ff] text-[#145cb7]",
  cyan: "bg-cyan-50 text-[#1593b5]",
  green: "bg-emerald-50 text-emerald-600",
  purple: "bg-purple-50 text-purple-600",
  orange: "bg-orange-50 text-orange-500",
  red: "bg-red-50 text-red-500",
  slate: "bg-slate-100 text-slate-600",
};

const featureCards = {
  overview: [
    {
      icon: Zap,
      title: "Smart Triggers",
      text: "Start workflows from real-time events across your CRM data.",
      tone: "cyan",
    },
    {
      icon: GitBranch,
      title: "Conditional Logic",
      text: "Route work based on rules, values, teams, stages, and timing.",
      tone: "blue",
    },
    {
      icon: PlayCircle,
      title: "Action Automation",
      text: "Send emails, create tasks, update records, and notify teams.",
      tone: "purple",
    },
    {
      icon: BarChart3,
      title: "Track Everything",
      text: "Monitor every run, status, failure, retry, and performance trend.",
      tone: "green",
    },
  ],
  trigger: [
    {
      icon: TimerReset,
      title: "Event-Based Triggers",
      text: "Start workflows when real business events happen.",
      tone: "blue",
    },
    {
      icon: SlidersHorizontal,
      title: "Multi-Condition Rules",
      text: "Combine fields, owners, stages, scores, and dates.",
      tone: "cyan",
    },
    {
      icon: Network,
      title: "Real-Time Routing",
      text: "Route and act instantly when conditions are met.",
      tone: "purple",
    },
    {
      icon: Sparkles,
      title: "Smart Evaluations",
      text: "Use dynamic values and operators for precise automation.",
      tone: "green",
    },
  ],
  builder: [
    {
      icon: GitBranch,
      title: "Drag & Drop Canvas",
      text: "Build workflows visually with an easy-to-use interface.",
      tone: "blue",
    },
    {
      icon: Boxes,
      title: "Reusable Blocks",
      text: "Save and reuse workflow components across flows.",
      tone: "cyan",
    },
    {
      icon: Shuffle,
      title: "Branching Paths",
      text: "Create conditional logic and multiple outcomes.",
      tone: "purple",
    },
    {
      icon: PlayCircle,
      title: "Live Testing",
      text: "Test workflows before publishing them.",
      tone: "green",
    },
  ],
  templates: [
    {
      icon: Rocket,
      title: "Launch Faster",
      text: "Go live in minutes with ready-made automation flows.",
      tone: "cyan",
    },
    {
      icon: ShieldCheck,
      title: "Proven Flows",
      text: "Templates based on real business processes.",
      tone: "blue",
    },
    {
      icon: SlidersHorizontal,
      title: "Easy Customization",
      text: "Tailor triggers, rules, and actions to your process.",
      tone: "purple",
    },
    {
      icon: Users,
      title: "Team-Friendly",
      text: "Built for collaboration across teams and departments.",
      tone: "green",
    },
  ],
  sequences: [
    {
      icon: Clock3,
      title: "Timed Follow-Ups",
      text: "Schedule actions at the right time with smart delays.",
      tone: "cyan",
    },
    {
      icon: Users,
      title: "Personalized Touchpoints",
      text: "Use dynamic fields to personalize every message.",
      tone: "blue",
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      text: "Notify owners and prevent tasks from slipping.",
      tone: "purple",
    },
    {
      icon: BarChart3,
      title: "Sequence Analytics",
      text: "Track completion rates, engagement, and performance.",
      tone: "green",
    },
  ],
  monitoring: [
    {
      icon: ShieldCheck,
      title: "Workflow Health",
      text: "Monitor system health and run status in real time.",
      tone: "cyan",
    },
    {
      icon: Clock3,
      title: "Run History",
      text: "Search and inspect past runs with detailed logs.",
      tone: "blue",
    },
    {
      icon: BarChart3,
      title: "Performance Metrics",
      text: "Measure execution time, throughput, and success rates.",
      tone: "green",
    },
    {
      icon: CircleAlert,
      title: "Error Visibility",
      text: "Identify failures quickly with root-cause insights.",
      tone: "red",
    },
  ],
  integrations: [
    {
      icon: Network,
      title: "Connected Systems",
      text: "Connect the tools your team already relies on.",
      tone: "purple",
    },
    {
      icon: RefreshCw,
      title: "Two-Way Sync",
      text: "Keep data in sync across platforms.",
      tone: "cyan",
    },
    {
      icon: Zap,
      title: "Trigger Sources",
      text: "Capture events from multiple business systems.",
      tone: "blue",
    },
    {
      icon: PlayCircle,
      title: "Action Destinations",
      text: "Send data and trigger action anywhere.",
      tone: "green",
    },
  ],
};

const triggerSources = [
  { icon: Network, label: "New Lead Captured", tone: "green" },
  { icon: TrendingUp, label: "Deal Stage Changed", tone: "green" },
  { icon: CircleAlert, label: "Ticket SLA Breached", tone: "red" },
  { icon: Database, label: "Payment Received", tone: "cyan" },
  { icon: FileText, label: "Form Submitted", tone: "blue" },
  { icon: Clock3, label: "Task Overdue", tone: "orange" },
];

const logicConditions = [
  { icon: Settings, label: "Industry = Healthcare", tone: "blue" },
  { icon: Database, label: "Deal Value > $5,000", tone: "cyan" },
  { icon: Users, label: "Owner = Sales Team", tone: "blue" },
  { icon: Globe2, label: "Region = North", tone: "blue" },
];

const outputActions = [
  { icon: Bell, label: "Notify Team", tone: "purple" },
  { icon: CheckCircle2, label: "Create Task", tone: "purple" },
  { icon: ArrowRight, label: "Move Deal", tone: "purple" },
  { icon: PlayCircle, label: "Start Sequence", tone: "purple" },
];

const templateCards = [
  {
    icon: Network,
    title: "Lead Qualification & Routing",
    team: "Sales",
    tone: "green",
    steps: ["New Lead Created", "Score ≥ 50", "Route to Rep"],
  },
  {
    icon: Users,
    title: "Customer Onboarding Flow",
    team: "Operations",
    tone: "blue",
    steps: ["Customer Signed Up", "Plan = Paid", "Create Tasks"],
  },
  {
    icon: ShieldCheck,
    title: "Deal Approval Sequence",
    team: "Sales",
    tone: "green",
    steps: ["Deal Stage = Proposal", "Amount > $10,000", "Notify Stakeholders"],
  },
  {
    icon: FileText,
    title: "Invoice Reminder Flow",
    team: "Finance",
    tone: "purple",
    steps: ["Invoice Overdue", "Days > 3", "Send Reminder"],
  },
  {
    icon: Target,
    title: "Re-engagement Campaign",
    team: "Marketing",
    tone: "red",
    steps: ["No Activity > 30 Days", "Lead Score > 30", "Send Email"],
  },
  {
    icon: CircleAlert,
    title: "Support Escalation Workflow",
    team: "Support",
    tone: "orange",
    steps: ["Ticket Priority = High", "No Response 2+ Hours", "Escalate"],
  },
  {
    icon: TrendingUp,
    title: "Trial-to-Demo Follow-Up",
    team: "Sales",
    tone: "green",
    steps: ["Trial Started 7 Days Ago", "No Demo Booked", "Book Demo"],
  },
];

const sequences = [
  {
    title: "New Lead Follow-Up",
    tone: "green",
    steps: ["Day 0 — Send Email", "Day 2 — Create Task", "Day 5 — WhatsApp Reminder", "Mark as Hot Lead"],
  },
  {
    title: "Proposal Reminder",
    tone: "blue",
    steps: ["Day 0 — Send Email", "Day 3 — WhatsApp Reminder", "Day 7 — Notify Owner"],
  },
  {
    title: "Meeting Reminder",
    tone: "purple",
    steps: ["Day -1 — Send Email", "Day -1 (2 hrs) — WhatsApp Reminder", "Day 0 — Create Task"],
  },
  {
    title: "Renewal Reminder",
    tone: "cyan",
    steps: ["Day -30 — Send Email", "Day -15 — Notify Owner", "Day -7 — WhatsApp Reminder"],
  },
  {
    title: "Payment Reminder",
    tone: "orange",
    steps: ["Day 1 — Send Email", "Day 3 — WhatsApp Reminder", "Day 7 — Notify Owner"],
  },
  {
    title: "Customer Re-engagement",
    tone: "red",
    steps: ["Day 0 — Send Email", "Day 7 — Create Task", "Day 14 — WhatsApp Nudge", "Mark as Hot Lead"],
  },
];

const monitoringRows = [
  ["Invoice Reminder & Follow-Up", "System Scheduler", "May 11, 2025 9:41 AM", "00:01:12", "Success"],
  ["Deal Approval Process", "John Doe", "May 11, 2025 9:39 AM", "00:02:08", "Pending"],
  ["Customer Onboarding", "Sarah Smith", "May 11, 2025 9:37 AM", "00:03:45", "Failed"],
  ["Slack Notification", "System Webhook", "May 11, 2025 9:35 AM", "00:00:18", "Success"],
  ["Data Sync & Enrichment", "Michael Lee", "May 11, 2025 9:33 AM", "00:04:51", "Failed"],
  ["Lead Assignment", "System Scheduler", "May 11, 2025 9:30 AM", "00:00:44", "Skipped"],
];

const integrationSources = [
  { icon: Mail, label: "Email", text: "New email received", tone: "blue" },
  { icon: CalendarDays, label: "Calendar", text: "Event created", tone: "purple" },
  { icon: FileText, label: "Forms", text: "Form submitted", tone: "green" },
  { icon: MessageCircle, label: "Chat", text: "New message", tone: "cyan" },
  { icon: Network, label: "Webhooks", text: "Inbound webhook", tone: "red" },
];

const integrationDestinations = [
  { icon: Database, label: "Payment Gateway", text: "Process payments", tone: "cyan" },
  { icon: Layers3, label: "ERP", text: "Sync business data", tone: "blue" },
  { icon: Bell, label: "Helpdesk", text: "Create or update tickets", tone: "cyan" },
  { icon: FileText, label: "Docs", text: "Create documents", tone: "blue" },
  { icon: Network, label: "Webhooks", text: "Send outbound data", tone: "red" },
];

function Shell({
  activeTab,
  onTabChange,
  children,
}: {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  children: React.ReactNode;
}) {
  const active = sidebarItems.find((item) => item.id === activeTab) ?? sidebarItems[0];

  return (
    <main className="min-h-screen bg-[#f8fbff] text-[#0f214f]">
      <CRMSolutionTabs />

      <div className="mx-auto flex max-w-[min(92vw,1440px)] pt-14">
        <SolutionSidebar<TabId>
          title="Workflow Engine"
          subtitle="Automation layer"
          icon={Workflow}
          items={sidebarItems}
          activeTab={activeTab}
          onTabChange={onTabChange}
          ctaTitle="Ready to automate smarter?"
          ctaText={active.description}
          ctaButtonText="Book a Demo"
        />

        <div className="min-w-0 flex-1 bg-white">{children}</div>
      </div>
    </main>
  );
}

function PageSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-w-0 flex-1 bg-white">
      <div className="mx-auto max-w-[min(92vw,1440px)] px-5 py-10 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">{children}</div>
    </section>
  );
}

function Breadcrumb({ current }: { current: string }) {
  return (
    <div className="flex items-center gap-2 text-xs font-bold text-[#145cb7]">
      <Link href="/" className="hover:text-[#1593b5]">
        Solutions
      </Link>
      <span>/</span>
      <Link href="/solutions/workflow-engine" className="hover:text-[#1593b5]">
        Workflow Engine
      </Link>
      <span>/</span>
      <span className="text-[#145cb7]">{current}</span>
    </div>
  );
}

function IconBubble({ icon: Icon, tone = "blue" }: { icon: LucideIcon; tone?: string }) {
  return (
    <div className={`grid h-12 w-12 place-items-center rounded-2xl ${toneClasses[tone]}`}>
      <Icon className="h-5 w-5" aria-hidden="true" />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  text,
  tone = "blue",
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  tone?: string;
}) {
  return (
    <div className="rounded-[20px] border border-[#d7e1f2] bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.04)]">
      <div className="flex items-start gap-4">
        <IconBubble icon={icon} tone={tone} />
        <div>
          <h3 className="text-sm font-extrabold text-[#0f214f]">{title}</h3>
          <p className="mt-2 text-xs leading-5 text-[#465374]">{text}</p>
        </div>
      </div>
    </div>
  );
}

function PageHeader({
  current,
  title,
  subtitle,
  features,
}: {
  current: string;
  title: string;
  subtitle: string;
  features?: Array<{ icon: LucideIcon; title: string; text: string; tone?: string }>;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-start">
      <div>
        <Breadcrumb current={current} />
        <h1 className="mt-5 text-5xl font-extrabold tracking-[-0.045em] text-[#0f214f] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[#465374]">{subtitle}</p>
      </div>

      <div className="relative hidden min-h-[150px] lg:block">
        <div className="absolute right-8 top-1 h-32 w-32 rounded-full bg-[#eef6ff]" />
        <div className="absolute right-0 top-0 grid h-32 w-32 place-items-center rounded-[28px] border border-[#d7e1f2] bg-white text-[#1593b5] shadow-[18px_18px_0_rgba(20,184,204,0.14)]">
          <Workflow className="h-14 w-14" />
        </div>
        <div className="absolute right-20 top-0 h-36 w-36 bg-[radial-gradient(circle,#cbd5e1_1px,transparent_1px)] [background-size:12px_12px]" />
      </div>

      {features ? (
        <div className="lg:col-span-2 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function FlowNode({
  icon: Icon,
  label,
  tone = "blue",
  className = "",
}: {
  icon: LucideIcon;
  label: string;
  tone?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 rounded-xl border border-[#d7e1f2] bg-white px-4 py-3 shadow-sm ${className}`}>
      <div className={`grid h-8 w-8 place-items-center rounded-lg ${toneClasses[tone]}`}>
        <Icon className="h-4 w-4" />
      </div>
      <span className="text-sm font-bold text-[#0f214f]">{label}</span>
    </div>
  );
}

function OverviewFlowPanel() {
  return (
    <section className="mt-8 rounded-[30px] border border-[#d7e1f2] bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <div className="grid gap-7 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-center">
        <div className="rounded-[22px] border border-emerald-200 bg-emerald-50/40 p-5">
          <div className="flex items-center gap-3 text-emerald-700">
            <Network className="h-5 w-5" />
            <p className="font-extrabold">Trigger</p>
          </div>
          <div className="mt-4 rounded-xl border border-[#d7e1f2] bg-white p-4">
            <p className="font-extrabold text-[#0f214f]">New Deal Created</p>
            <p className="mt-2 text-sm text-[#66728f]">Pipeline: Sales Pipeline</p>
          </div>
        </div>

        <div className="relative rounded-[22px] border border-[#94bfff] bg-[#f8fbff] p-5">
          <div className="absolute -left-7 top-1/2 hidden h-px w-7 bg-[#145cb7] lg:block" />
          <div className="flex items-center gap-3 text-[#145cb7]">
            <Filter className="h-5 w-5" />
            <p className="font-extrabold">Conditions</p>
          </div>
          <div className="mt-4 rounded-xl border border-[#d7e1f2] bg-white p-4 text-sm font-semibold text-[#334766]">
            <p>Deal Amount is greater than $10,000</p>
            <p className="my-3 border-t border-[#edf2f7] pt-3 text-center text-xs text-[#66728f]">AND</p>
            <p>Deal Stage is Proposal</p>
          </div>
        </div>

        <div className="relative rounded-[22px] border border-purple-200 bg-purple-50/40 p-5">
          <div className="absolute -left-7 top-1/2 hidden h-px w-7 bg-[#145cb7] lg:block" />
          <div className="flex items-center gap-3 text-purple-700">
            <Zap className="h-5 w-5" />
            <p className="font-extrabold">Actions</p>
          </div>
          <div className="mt-4 space-y-3">
            <FlowNode icon={CalendarDays} label="Create Task for Sales Rep" tone="blue" />
            <FlowNode icon={Mail} label="Send Approval Email" tone="blue" />
            <FlowNode icon={Database} label="Update Deal Stage" tone="blue" />
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute -left-7 top-1/2 hidden h-px w-7 border-t border-dashed border-[#66728f] lg:block" />
          <div className="grid h-20 w-20 place-items-center rounded-full border border-[#8ad8ee] bg-[#f8fbff] text-[#1593b5]">
            <CheckCircle2 className="h-9 w-9" />
          </div>
          <p className="absolute top-[92px] w-28 text-center text-sm font-semibold text-[#66728f]">Workflow Complete</p>
        </div>
      </div>
    </section>
  );
}

function OverviewPage() {
  return (
    <PageSection>
      <PageHeader
        current="Overview"
        title="Workflow Engine"
        subtitle="Automate repetitive work, reminders, assignments, and approvals across your entire business. Turn your CRM data into actions that happen automatically."
        features={featureCards.overview}
      />

      <OverviewFlowPanel />

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_0.9fr_0.7fr]">
        <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-[#0f214f]">Popular Automations</h2>
            <Link href="/#contact" className="text-xs font-bold text-[#145cb7]">View all templates →</Link>
          </div>
          <div className="mt-5 space-y-3">
            {["New Lead Follow-Up Sequence", "Deal Qualification & Routing", "Customer Onboarding Flow", "Invoice Reminder & Follow-Up"].map((item, index) => (
              <div key={item} className="flex items-center justify-between rounded-xl border border-[#d7e1f2] bg-white px-4 py-3">
                <div className="flex items-center gap-3">
                  <Network className={`h-4 w-4 ${index % 2 ? "text-[#145cb7]" : "text-[#1593b5]"}`} />
                  <span className="text-sm font-bold text-[#0f214f]">{item}</span>
                </div>
                <ChevronRight className="h-4 w-4 text-[#66728f]" />
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
          <h2 className="text-xl font-extrabold text-[#0f214f]">Built for Faster Execution</h2>
          <div className="mt-5 space-y-4 text-sm font-semibold text-[#334766]">
            {[
              "Drag-and-drop builder for any team",
              "Real-time runs with instant feedback",
              "Reusable components and templates",
              "Enterprise-grade security and reliability",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#145cb7]" />
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[26px] border border-[#d7e1f2] bg-gradient-to-br from-white to-[#eef6ff] p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
          <Sparkles className="h-6 w-6 text-[#145cb7]" />
          <h2 className="mt-4 text-xl font-extrabold text-[#0f214f]">Pro tip</h2>
          <p className="mt-3 text-sm leading-7 text-[#465374]">
            Start with a template and customize it to match your process. This keeps your automation fast, clean, and scalable.
          </p>
          <Link href="/#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#145cb7]">
            Explore templates <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>

      <FlowBuilderPreview compact />
    </PageSection>
  );
}

function TriggerLogicPage() {
  return (
    <PageSection>
      <PageHeader
        current="Trigger Logic"
        title="Trigger Logic"
        subtitle="Workflows start from events and conditions across your CRM data, forms, meetings, tickets, payments, and activity — so the right things happen at the right time."
        features={featureCards.trigger}
      />

      <section className="mt-8 rounded-[30px] border border-[#d7e1f2] bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <div className="grid gap-7 lg:grid-cols-[1fr_1fr_1fr] lg:items-center">
          <div>
            <h3 className="mb-5 text-center text-sm font-extrabold text-emerald-600">Trigger Sources</h3>
            <div className="space-y-3">
              {triggerSources.map((source) => (
                <FlowNode key={source.label} icon={source.icon} label={source.label} tone={source.tone} className="border-emerald-200 bg-emerald-50/25" />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-center text-sm font-extrabold text-[#145cb7]">Logic Conditions</h3>
            <div className="space-y-4">
              {logicConditions.map((condition) => (
                <FlowNode key={condition.label} icon={condition.icon} label={condition.label} tone={condition.tone} className="border-[#b8d4ff] bg-[#f8fbff]" />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-center text-sm font-extrabold text-purple-600">Output Actions</h3>
            <div className="space-y-4">
              {outputActions.map((action) => (
                <FlowNode key={action.label} icon={action.icon} label={action.label} tone={action.tone} className="border-purple-200 bg-purple-50/25" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_1.15fr]">
        <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-[#0f214f]">Trigger Categories</h2>
            <Link href="/#contact" className="text-xs font-bold text-[#145cb7]">View all →</Link>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {([
              [Users, "CRM Events", "Leads, deals, accounts, and opportunities", "12"],
              [Mail, "Engagement", "Emails, calls, meetings, and conversations", "18"],
              [Bell, "Support", "Tickets, SLAs and customer issues", "10"],
              [FileText, "Forms & Web", "Form submissions and website activity", "9"],
              [Database, "Payments", "Transactions, invoices and refunds", "7"],
              [CheckCircle2, "Tasks & Activity", "Tasks, reminders and team activity", "8"],
            ] as Array<[LucideIcon, string, string, string]>).map(([Icon, title, text, count]) => (
              <div key={title} className="rounded-2xl border border-[#d7e1f2] p-5">
                <div className="flex items-center justify-between">
                  <IconBubble icon={Icon} tone="blue" />
                  <span className="rounded-lg bg-[#eef6ff] px-2 py-1 text-xs font-extrabold text-[#145cb7]">{count}</span>
                </div>
                <p className="mt-4 text-sm font-extrabold text-[#0f214f]">{title}</p>
                <p className="mt-2 text-xs leading-5 text-[#465374]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-[#0f214f]">Real-World Conditions & Examples</h2>
            <Link href="/#contact" className="text-xs font-bold text-[#145cb7]">View examples →</Link>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#d7e1f2] p-5">
              <h3 className="text-sm font-extrabold text-[#0f214f]">Example Conditions</h3>
              <div className="mt-4 space-y-3">
                {["Lead Score > 70", "Deal Stage = Proposal", "Last Activity > 7 days ago", "Email Opened = True", "Company Size > 100"].map((item) => (
                  <FlowNode key={item} icon={CheckCircle2} label={item} tone="blue" />
                ))}
                <button className="w-full rounded-xl border border-[#d7e1f2] py-3 text-sm font-extrabold text-[#145cb7]">+ Add Condition</button>
              </div>
            </div>

            <div className="rounded-2xl border border-[#d7e1f2] p-5">
              <h3 className="text-sm font-extrabold text-[#0f214f]">Example Event Sources</h3>
              <div className="mt-4 space-y-3">
                {["New Lead Captured", "Deal Stage Changed", "Ticket SLA Breached", "Form Submitted", "Payment Received"].map((item, index) => (
                  <FlowNode key={item} icon={[Network, TrendingUp, CircleAlert, FileText, Database][index]} label={item} tone={index === 2 ? "red" : "green"} />
                ))}
                <button className="w-full rounded-xl border border-[#d7e1f2] py-3 text-sm font-extrabold text-[#145cb7]">+ Add Event Source</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageSection>
  );
}

function FlowBuilderPreview({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`${compact ? "mt-8" : "mt-8"} overflow-hidden rounded-[30px] border border-[#d7e1f2] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.05)]`}>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#d7e1f2] px-6 py-4">
        <div className="flex items-center gap-4">
          <Link href="/solutions/workflow-engine" className="text-xs font-extrabold text-[#66728f]">← Back to Workflows</Link>
          <h2 className="text-base font-extrabold text-[#0f214f]">Lead Onboarding Workflow</h2>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#66728f]">Draft</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-extrabold text-emerald-600">✓ Saved</span>
          <button className="rounded-xl border border-[#d7e1f2] px-4 py-2 text-xs font-extrabold text-[#145cb7]">Test Run</button>
          <button className="rounded-xl bg-[#145cb7] px-4 py-2 text-xs font-extrabold text-white">Publish</button>
        </div>
      </div>

      <div className="grid min-h-[470px] lg:grid-cols-[210px_1fr_260px]">
        <aside className="border-r border-[#d7e1f2] bg-[#fbfdff] p-5">
          <h3 className="text-sm font-extrabold text-[#0f214f]">Components</h3>
          <div className="mt-4 rounded-xl border border-[#d7e1f2] bg-white px-3 py-2 text-xs text-[#66728f]">Search components</div>

          <div className="mt-5 space-y-3">
            {[
              ["TRIGGERS", "New Lead Created", Network],
              ["CONDITIONS", "Condition", Filter],
              ["CONDITIONS", "Check Segment", SlidersHorizontal],
              ["ACTIONS", "Assign Owner", Users],
              ["ACTIONS", "Send Email", Mail],
              ["ACTIONS", "Create Task", CheckCircle2],
              ["ACTIONS", "Add Tag", Sparkles],
              ["ACTIONS", "Notify Slack", Bell],
              ["ACTIONS", "Start Sequence", PlayCircle],
            ].map(([section, label, Icon], index) => (
              <div key={`${section}-${label}`} className={index === 0 || index === 1 || index === 3 ? "pt-2" : ""}>
                {index === 0 || index === 1 || index === 3 ? <p className="mb-2 text-[10px] font-extrabold text-[#66728f]">{section as string}</p> : null}
                <div className="flex items-center gap-2 rounded-xl border border-[#d7e1f2] bg-white px-3 py-2 text-xs font-bold text-[#334766]">
                  <Icon className="h-3.5 w-3.5 text-[#145cb7]" />
                  {label as string}
                </div>
              </div>
            ))}
          </div>
        </aside>

        <div className="relative bg-[radial-gradient(circle,#d7e1f2_1px,transparent_1px)] p-8 [background-size:16px_16px]">
          <div className="mx-auto max-w-2xl">
            <BuilderNode tone="green" icon={Network} title="Trigger" subtitle="New Lead Created" meta="Pipeline: Sales Pipeline" />
            <Connector />
            <BuilderNode tone="purple" icon={Filter} title="Condition" subtitle="Lead Source = Website" meta="If source matches website" />
            <SplitConnector />
            <div className="grid gap-7 md:grid-cols-2">
              <Branch label="Yes" />
              <Branch label="No" red />
            </div>
          </div>
        </div>

        <aside className="border-l border-[#d7e1f2] bg-[#fbfdff] p-5">
          <h3 className="text-sm font-extrabold text-[#0f214f]">Action Library</h3>
          <div className="mt-4 rounded-xl border border-[#d7e1f2] bg-white px-3 py-2 text-xs text-[#66728f]">Search actions</div>
          <div className="mt-4 flex gap-2 text-[10px] font-bold text-[#66728f]">
            <span className="rounded-lg bg-[#eef6ff] px-2 py-1 text-[#145cb7]">All</span>
            <span>Popular</span>
            <span>Communications</span>
          </div>

          <div className="mt-5 space-y-4">
            <ActionGroup title="COMMUNICATIONS" items={["Send Email", "Send SMS", "Notify Slack", "Send In-App Message"]} />
            <ActionGroup title="DATA & CRM" items={["Assign Owner", "Create Task", "Update Field", "Add Tag", "Add to Campaign"]} />
            <ActionGroup title="AUTOMATIONS" items={["Start Sequence", "Webhook", "Wait / Delay"]} />
          </div>
        </aside>
      </div>
    </section>
  );
}

function BuilderNode({
  icon: Icon,
  title,
  subtitle,
  meta,
  tone,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  meta: string;
  tone: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[300px] rounded-2xl border bg-white p-4 shadow-sm ${
      tone === "green" ? "border-emerald-300" : "border-purple-300"
    }`}>
      <div className="flex items-start gap-3">
        <IconBubble icon={Icon} tone={tone} />
        <div>
          <p className={`text-xs font-extrabold ${tone === "green" ? "text-emerald-600" : "text-purple-600"}`}>{title}</p>
          <p className="mt-1 text-sm font-extrabold text-[#0f214f]">{subtitle}</p>
          <p className="mt-1 text-xs text-[#66728f]">{meta}</p>
        </div>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="mx-auto flex h-10 w-px items-center justify-center bg-[#145cb7]">
      <span className="grid h-3 w-3 place-items-center rounded-full bg-[#145cb7]" />
    </div>
  );
}

function SplitConnector() {
  return (
    <div className="relative mx-auto h-20 max-w-[520px]">
      <div className="absolute left-1/2 top-0 h-8 w-px bg-[#145cb7]" />
      <div className="absolute left-[25%] right-[25%] top-8 h-px bg-[#145cb7]" />
      <div className="absolute left-[25%] top-8 h-12 w-px bg-[#145cb7]" />
      <div className="absolute right-[25%] top-8 h-12 w-px bg-[#145cb7]" />
    </div>
  );
}

function Branch({ label, red = false }: { label: string; red?: boolean }) {
  const items = red
    ? [
        ["Add Tag", "Tag: Offline Source", Sparkles],
        ["Notify Slack", "Channel: #new-leads", Bell],
        ["Start Lead Nurture Sequence", "Sequence: Nurture - General", PlayCircle],
      ]
    : [
        ["Assign Owner", "Round Robin", Users],
        ["Send Welcome Email", "Template: Welcome Aboard", Mail],
        ["Create Follow-Up Task", "Call lead in 2 days", CheckCircle2],
      ];

  return (
    <div>
      <div className={`mx-auto mb-3 w-fit rounded-full px-3 py-1 text-xs font-extrabold ${red ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-600"}`}>
        {label}
      </div>
      <div className="space-y-4">
        {items.map(([title, subtitle, Icon], index) => (
          <div key={title as string}>
            {index > 0 ? <Connector /> : null}
            <BuilderNode icon={Icon as LucideIcon} title="Action" subtitle={title as string} meta={subtitle as string} tone={red ? "purple" : "blue"} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ActionGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-2 text-[10px] font-extrabold text-[#66728f]">{title}</p>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2 rounded-xl border border-[#d7e1f2] bg-white px-3 py-2 text-xs font-bold text-[#334766]">
            <Plus className="h-3.5 w-3.5 text-[#145cb7]" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function FlowBuilderPage() {
  return (
    <PageSection>
      <PageHeader
        current="Flow Builder"
        title="Flow Builder"
        subtitle="Design powerful workflows with an intuitive drag-and-drop canvas — built for business teams, not developers."
        features={featureCards.builder}
      />

      <FlowBuilderPreview />

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {[
          ["Reusable Components", "Save time by reusing proven workflow blocks across your automations.", ["Lead Qualification Check — 12 uses", "Nurture Email Series — 8 uses"]],
          ["Builder Benefits", "Accelerate automation with pre-built blocks and validation.", ["Maintain consistency across workflows", "Reduce errors with validation and testing", "Empower non-technical teams to build"]],
          ["Best Practices", "Keep workflows clean, reliable, and measurable.", ["Keep workflows single-purpose", "Use clear naming for steps and branches", "Test with real data before publishing", "Monitor performance and iterate"]],
        ].map(([title, text, list]) => (
          <section key={title as string} className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
            <h2 className="text-xl font-extrabold text-[#0f214f]">{title as string}</h2>
            <p className="mt-3 text-sm leading-6 text-[#465374]">{text as string}</p>
            <div className="mt-5 space-y-3 text-sm font-semibold text-[#334766]">
              {(list as string[]).map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#145cb7]" />
                  {item}
                </div>
              ))}
            </div>
            <Link href="/#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#145cb7]">
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        ))}
      </div>
    </PageSection>
  );
}

function AutomationTemplatesPage() {
  return (
    <PageSection>
      <PageHeader
        current="Automation Templates"
        title="Automation Templates"
        subtitle="Ready-made workflow templates for sales, support, onboarding, reminders, approvals, and renewals. Launch in minutes and customize as your business grows."
        features={featureCards.templates}
      />

      <section className="mt-8 rounded-[30px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex min-w-[220px] flex-1 items-center gap-3 rounded-xl border border-[#d7e1f2] px-4 py-3 text-sm text-[#66728f]">
            <Search className="h-4 w-4" />
            Search templates...
          </div>
          {["Category", "Team", "Industry", "Template Status", "Sort by: Popular"].map((filter) => (
            <button key={filter} className="rounded-xl border border-[#d7e1f2] px-4 py-3 text-sm font-bold text-[#334766]">{filter}</button>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {templateCards.slice(0, 3).map((template) => (
            <TemplateCard key={template.title} {...template} />
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-4">
          {templateCards.slice(3).map((template) => (
            <TemplateCard key={template.title} {...template} />
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[30px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-[#0f214f]">Popular by Team</h2>
          <Link href="/#contact" className="text-sm font-extrabold text-[#145cb7]">View all templates →</Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Sales", Users, ["Lead Qualification & Routing", "Deal Approval Sequence", "Trial-to-Demo Follow-Up"]],
            ["Support", CircleAlert, ["Support Escalation Workflow", "Ticket Closure & Feedback", "SLA Breach Notification"]],
            ["Operations", Settings, ["Customer Onboarding Flow", "Task Assignment & Tracking", "Internal Approval Flow"]],
            ["Finance", Database, ["Invoice Reminder Flow", "Payment Collection Workflow", "Renewal & Subscription Alert"]],
          ].map(([team, Icon, items]) => (
            <div key={team as string} className="rounded-[24px] border border-[#d7e1f2] bg-white p-6">
              <IconBubble icon={Icon as LucideIcon} tone={(team as string) === "Sales" ? "green" : (team as string) === "Support" ? "orange" : (team as string) === "Operations" ? "blue" : "purple"} />
              <h3 className="mt-4 text-lg font-extrabold text-[#0f214f]">{team as string}</h3>
              <div className="mt-4 space-y-3 text-sm font-semibold text-[#334766]">
                {(items as string[]).map((item) => (
                  <div key={item} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#145cb7]" />
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#145cb7]">
                View all {team as string} templates <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </PageSection>
  );
}

function TemplateCard({
  icon,
  title,
  team,
  tone,
  steps,
}: {
  icon: LucideIcon;
  title: string;
  team: string;
  tone: string;
  steps: string[];
}) {
  const Icon = icon;
  return (
    <article className="rounded-[24px] border border-[#d7e1f2] bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <IconBubble icon={Icon} tone={tone} />
          <div>
            <h3 className="text-base font-extrabold text-[#0f214f]">{title}</h3>
            <span className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-bold ${toneClasses[tone]}`}>{team}</span>
          </div>
        </div>
        <span className="text-[#66728f]">•••</span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {steps.map((step, index) => (
          <div key={step} className="rounded-xl border border-[#d7e1f2] bg-[#fbfdff] p-3">
            <p className="text-[10px] font-extrabold text-[#145cb7]">{index === 0 ? "Trigger" : index === 1 ? "Conditions" : "Actions"}</p>
            <p className="mt-2 text-[11px] font-semibold leading-4 text-[#334766]">{step}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold">
        {["Trigger", "Conditions", "Actions"].map((tag, index) => (
          <span key={tag} className={`rounded-lg px-2 py-1 ${index === 0 ? "bg-emerald-50 text-emerald-600" : index === 1 ? "bg-[#eef6ff] text-[#145cb7]" : "bg-purple-50 text-purple-600"}`}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function SequencesRemindersPage() {
  return (
    <PageSection>
      <PageHeader
        current="Sequences & Reminders"
        title="Sequences & Reminders"
        subtitle="Automate reminder flows, follow-up sequences, nudges, and timed communication logic to keep every opportunity moving."
        features={featureCards.sequences}
      />

      <section className="mt-8 rounded-[30px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <h2 className="text-xl font-extrabold text-[#0f214f]">Sample Follow-Up Sequences</h2>
        <p className="mt-2 text-sm text-[#66728f]">Pre-built sequences that keep your conversations on track.</p>

        <div className="mt-6 grid gap-5 xl:grid-cols-6">
          {sequences.map((sequence, index) => (
            <div key={sequence.title} className={`relative rounded-[24px] border bg-white p-5 shadow-sm ${
              sequence.tone === "green" ? "border-emerald-200 bg-emerald-50/20" :
              sequence.tone === "blue" ? "border-blue-200 bg-blue-50/20" :
              sequence.tone === "purple" ? "border-purple-200 bg-purple-50/20" :
              sequence.tone === "cyan" ? "border-cyan-200 bg-cyan-50/20" :
              sequence.tone === "orange" ? "border-orange-200 bg-orange-50/20" :
              "border-red-200 bg-red-50/20"
            }`}>
              {index > 0 ? <div className="absolute -left-5 top-12 hidden h-px w-5 border-t border-dashed border-[#145cb7] xl:block" /> : null}
              <div className={`flex items-center gap-2 text-xs font-extrabold ${toneClasses[sequence.tone].replace("bg-", "text-").replace("50", "600")}`}>
                <IconBubble icon={[Users, Mail, CalendarDays, RefreshCw, Database, Users][index]} tone={sequence.tone} />
              </div>
              <h3 className="mt-4 text-sm font-extrabold text-[#0f214f]">{index + 1}. {sequence.title}</h3>
              <div className="mt-4 space-y-3">
                {sequence.steps.map((step) => (
                  <div key={step} className="rounded-xl border border-[#d7e1f2] bg-white px-3 py-2 text-[11px] font-semibold text-[#334766]">
                    {step}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-[#0f214f]">Active Sequences</h2>
            <Link href="/#contact" className="text-sm font-extrabold text-[#145cb7]">View all sequences →</Link>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead>
                <tr className="text-xs text-[#66728f]">
                  {["Sequence Name", "Active", "Completed", "Completion Rate", "Status"].map((head) => (
                    <th key={head} className="border-b border-[#d7e1f2] px-4 py-3 font-extrabold">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["New Lead Follow-Up", "1,248", "842", "67.5%", "Active"],
                  ["Proposal Reminder", "632", "415", "65.7%", "Active"],
                  ["Meeting Reminder", "921", "756", "82.1%", "Active"],
                  ["Renewal Reminder", "358", "273", "76.3%", "Active"],
                  ["Payment Reminder", "487", "289", "59.3%", "Active"],
                  ["Customer Re-engagement", "1,135", "403", "35.5%", "Active"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-[#edf2f7]">
                    {row.map((cell, index) => (
                      <td key={`${row[0]}-${index}`} className="px-4 py-3 font-semibold text-[#334766]">
                        {index === 4 ? <span className="text-emerald-600">● {cell}</span> : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-[#0f214f]">Reminder Templates</h2>
            <Link href="/#contact" className="text-sm font-extrabold text-[#145cb7]">View all templates →</Link>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead>
                <tr className="text-xs text-[#66728f]">
                  {["Template Name", "Use Case", "Channel", "Last Updated"].map((head) => (
                    <th key={head} className="border-b border-[#d7e1f2] px-4 py-3 font-extrabold">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Follow-Up Email", "General Follow-Up", "Email", "May 8, 2025"],
                  ["WhatsApp Nudge", "Quick Reminder", "WhatsApp", "May 6, 2025"],
                  ["Meeting Reminder Email", "Meeting / Appointment", "Email", "May 5, 2025"],
                  ["Payment Overdue Notice", "Payments", "Email", "May 2, 2025"],
                  ["Renewal Reminder", "Renewals", "Email", "Apr 29, 2025"],
                  ["Re-engagement Nudge", "Re-engagement", "WhatsApp", "Apr 25, 2025"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-[#edf2f7]">
                    <td className="px-4 py-3 font-bold text-[#0f214f]">{row[0]}</td>
                    <td className="px-4 py-3 text-[#334766]">{row[1]}</td>
                    <td className="px-4 py-3"><span className="rounded-lg bg-[#eef6ff] px-2 py-1 text-xs font-bold text-[#145cb7]">{row[2]}</span></td>
                    <td className="px-4 py-3 text-[#66728f]">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </PageSection>
  );
}

function MonitoringLogsPage() {
  return (
    <PageSection>
      <PageHeader
        current="Monitoring & Logs"
        title="Monitoring & Logs"
        subtitle="Gain full visibility into every workflow run, log, status, and failure so you can ensure reliability and act fast."
        features={featureCards.monitoring}
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {[
          ["Total Runs", "12,842", "↑ 18.6% vs last 7 days", TrendingUp, "cyan"],
          ["Success Rate", "96.42%", "↑ 2.7% vs last 7 days", ShieldCheck, "green"],
          ["Failed Runs", "421", "↓ 8.4% vs last 7 days", CircleAlert, "red"],
          ["Avg. Duration", "00:01:42", "↓ 6.1% vs last 7 days", Clock3, "purple"],
          ["Active Workflows", "128", "↑ 12% vs last 7 days", Network, "cyan"],
        ].map(([label, value, delta, Icon, tone]) => (
          <div key={label as string} className="rounded-[22px] border border-[#d7e1f2] bg-white p-5 shadow-[0_16px_44px_rgba(15,23,42,0.05)]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-bold text-[#66728f]">{label as string}</p>
                <p className="mt-2 text-3xl font-extrabold text-[#0f214f]">{value as string}</p>
                <p className={`mt-2 text-xs font-bold ${(delta as string).startsWith("↓") && label !== "Failed Runs" ? "text-red-500" : "text-emerald-600"}`}>
                  {delta as string}
                </p>
              </div>
              <IconBubble icon={Icon as LucideIcon} tone={tone as string} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr_0.78fr]">
        <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-extrabold text-[#0f214f]">Workflow Runs Over Time</h2>
            <div className="flex gap-2">
              <span className="rounded-lg border border-[#d7e1f2] px-3 py-1 text-xs font-bold">7D</span>
              <span className="rounded-lg border border-[#d7e1f2] px-3 py-1 text-xs font-bold">Daily</span>
            </div>
          </div>
          <svg className="mt-5 h-56 w-full" viewBox="0 0 520 220" fill="none">
            <path d="M0 180 C60 170 65 165 110 168 C150 171 170 145 215 152 C260 160 280 132 330 142 C375 150 400 110 445 120 C480 128 500 80 520 92" stroke="#22c55e" strokeWidth="4" />
            <path d="M0 208 C70 203 105 205 150 200 C210 193 230 210 290 195 C350 180 395 210 450 190 C480 180 500 205 520 198" stroke="#ef4444" strokeWidth="3" />
            {[40, 120, 210, 300, 390, 480].map((x) => (
              <line key={x} x1={x} y1="20" x2={x} y2="210" stroke="#edf2f7" strokeWidth="1" />
            ))}
          </svg>
        </section>

        <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
          <h2 className="text-lg font-extrabold text-[#0f214f]">Run Status Distribution</h2>
          <div className="mt-8 grid place-items-center">
            <div className="grid h-44 w-44 place-items-center rounded-full border-[28px] border-emerald-500 border-r-red-500 border-b-orange-400 border-l-slate-300">
              <div className="text-center">
                <p className="text-2xl font-extrabold text-[#0f214f]">12,842</p>
                <p className="text-xs text-[#66728f]">Total Runs</p>
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-2 text-sm font-semibold text-[#334766]">
            {["Success 12,365 (96.42%)", "Failed 421 (3.28%)", "Pending 34 (0.26%)", "Skipped 22 (0.17%)"].map((item, index) => (
              <div key={item} className="flex justify-between">
                <span className="flex items-center gap-2"><span className={`h-3 w-3 rounded ${["bg-emerald-500", "bg-red-500", "bg-orange-400", "bg-slate-300"][index]}`} />{item.split(" ")[0]}</span>
                <span>{item.replace(item.split(" ")[0] + " ", "")}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-extrabold text-[#0f214f]">Active Alerts (4)</h2>
            <Link href="/#contact" className="text-xs font-bold text-[#145cb7]">View all</Link>
          </div>

          <div className="mt-5 space-y-4">
            {[
              ["High failure rate detected", "Workflow: Invoice Reminder", "2m ago", "red"],
              ["Workflow run delay", "Workflow: Deal Approval", "6m ago", "orange"],
              ["Integration timeout", "Workflow: Slack Notification", "15m ago", "orange"],
              ["Retry limit reached", "Workflow: Data Sync", "32m ago", "orange"],
            ].map(([title, text, time, tone]) => (
              <div key={title} className="flex gap-3">
                <IconBubble icon={tone === "red" ? CircleAlert : TimerReset} tone={tone} />
                <div className="flex-1">
                  <div className="flex justify-between gap-3">
                    <p className="text-sm font-extrabold text-[#0f214f]">{title}</p>
                    <span className="text-xs text-[#66728f]">{time}</span>
                  </div>
                  <p className="mt-1 text-xs text-[#66728f]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-lg font-extrabold text-[#0f214f]">Recent Workflow Runs</h2>
          <div className="flex gap-2">
            <span className="rounded-xl border border-[#d7e1f2] px-4 py-2 text-xs text-[#66728f]">Search runs...</span>
            <span className="rounded-xl border border-[#d7e1f2] px-4 py-2 text-xs font-bold">Filters</span>
          </div>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[860px] text-left text-sm">
            <thead>
              <tr className="text-xs text-[#66728f]">
                {["Workflow Name", "Triggered By", "Start Time", "Duration", "Status", "Logs"].map((head) => (
                  <th key={head} className="border-b border-[#d7e1f2] px-4 py-3 font-extrabold">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {monitoringRows.map((row) => (
                <tr key={row[0]} className="border-b border-[#edf2f7]">
                  <td className="px-4 py-3 font-bold text-[#0f214f]">{row[0]}</td>
                  <td className="px-4 py-3 text-[#334766]">{row[1]}</td>
                  <td className="px-4 py-3 text-[#66728f]">{row[2]}</td>
                  <td className="px-4 py-3 text-[#334766]">{row[3]}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-lg px-2 py-1 text-xs font-bold ${
                      row[4] === "Success" ? "bg-emerald-50 text-emerald-600" :
                      row[4] === "Failed" ? "bg-red-50 text-red-600" :
                      row[4] === "Pending" ? "bg-orange-50 text-orange-600" :
                      "bg-slate-100 text-slate-600"
                    }`}>{row[4]}</span>
                  </td>
                  <td className="px-4 py-3 text-sm font-bold text-[#145cb7]">View</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {[
          ["Top Failure Reasons", ["Timeout / No Response — 156", "Validation Error — 98", "Integration Error — 72", "Permission Denied — 45", "Other — 50"]],
          ["Retry Rules Overview", ["Automatic Retry (3 attempts) — 68 workflows", "Exponential Backoff — 42 workflows", "Immediate Retry (2 attempts) — 17 workflows", "Manual Retry Only — 9 workflows"]],
          ["Most Active Automations", ["Invoice Reminder & Follow-Up — 2,342 runs", "Deal Approval Process — 1,876 runs", "Customer Onboarding — 1,523 runs", "Lead Assignment — 1,217 runs", "Data Sync & Enrichment — 1,102 runs"]],
        ].map(([title, items]) => (
          <section key={title as string} className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-extrabold text-[#0f214f]">{title as string}</h2>
              <Link href="/#contact" className="text-xs font-bold text-[#145cb7]">View all</Link>
            </div>
            <div className="mt-5 space-y-3 text-sm font-semibold text-[#334766]">
              {(items as string[]).map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#145cb7]" />
                  {item}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageSection>
  );
}

function IntegrationsPage() {
  return (
    <PageSection>
      <PageHeader
        current="Integrations"
        title="Integrations"
        subtitle="Connect the Workflow Engine with your CRM data, email, chat, forms, calendars, payments, and the tools your team uses every day."
        features={featureCards.integrations}
      />

      <section className="mt-8 rounded-[30px] border border-[#d7e1f2] bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <div className="grid gap-7 lg:grid-cols-[1fr_260px_1fr] lg:items-center">
          <div>
            <h3 className="mb-5 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-[#66728f]">Trigger Sources</h3>
            <div className="space-y-3">
              {integrationSources.map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-[#d7e1f2] bg-white p-4">
                  <IconBubble icon={item.icon} tone={item.tone} />
                  <div>
                    <p className="text-sm font-extrabold text-[#0f214f]">{item.label}</p>
                    <p className="text-xs text-[#66728f]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto grid h-[250px] w-[250px] place-items-center">
            <div className="absolute inset-5 rounded-full border border-dashed border-[#8ad8ee]" />
            <div className="grid h-[150px] w-[150px] place-items-center rounded-[28px] border border-[#d7e1f2] bg-white text-[#1593b5] shadow-[18px_18px_0_rgba(20,184,204,0.14)]">
              <Workflow className="h-14 w-14" />
            </div>
            <div className="absolute bottom-0 text-center">
              <p className="text-xl font-extrabold text-[#0f214f]">HNX</p>
              <p className="text-base font-extrabold text-[#0f214f]">Workflow Engine</p>
              <p className="mt-2 rounded-full bg-[#eef6ff] px-4 py-1 text-xs font-bold text-[#145cb7]">Automate • Orchestrate • Scale</p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-[#66728f]">Action Destinations</h3>
            <div className="space-y-3">
              {integrationDestinations.map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-[#d7e1f2] bg-white p-4">
                  <IconBubble icon={item.icon} tone={item.tone} />
                  <div>
                    <p className="text-sm font-extrabold text-[#0f214f]">{item.label}</p>
                    <p className="text-xs text-[#66728f]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[30px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xl font-extrabold text-[#0f214f]">Integration Marketplace</h2>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl border border-[#d7e1f2] px-4 py-2 text-xs font-bold">All Categories</button>
            <button className="rounded-xl border border-[#d7e1f2] px-4 py-2 text-xs font-bold text-[#66728f]">Search integrations...</button>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {[
            ["Email Service", "Send and receive emails", "Connected", Mail, "blue"],
            ["Calendar", "Sync events and schedules", "Connected", CalendarDays, "orange"],
            ["CRM", "Sync leads and contacts", "Not Connected", Layers3, "purple"],
            ["Payment Gateway", "Process payments securely", "Connected", Database, "blue"],
            ["Helpdesk", "Manage support tickets", "Not Connected", Bell, "purple"],
          ].map(([title, text, status, Icon, tone]) => (
            <article key={title as string} className="rounded-[24px] border border-[#d7e1f2] bg-white p-5">
              <IconBubble icon={Icon as LucideIcon} tone={tone as string} />
              <h3 className="mt-4 text-base font-extrabold text-[#0f214f]">{title as string}</h3>
              <p className="mt-2 text-xs text-[#66728f]">{text as string}</p>
              <span className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-bold ${status === "Connected" ? "bg-emerald-50 text-emerald-600" : "bg-purple-50 text-purple-600"}`}>
                ✓ {status as string}
              </span>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 rounded-xl border border-[#d7e1f2] py-2 text-xs font-bold text-[#145cb7]">{status === "Connected" ? "Configure" : "Connect"}</button>
                <button className="rounded-xl border border-[#d7e1f2] px-3 text-xs font-bold text-[#66728f]">•••</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[30px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-[#0f214f]">Popular Integration Use Cases</h2>
          <Link href="/#contact" className="text-sm font-extrabold text-[#145cb7]">View all use cases →</Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            [Users, "Lead Capture Sync", "Capture new leads from forms and sync them to your CRM automatically.", "green"],
            [Bell, "Approval Notifications", "Notify approvers in chat or email when approvals are pending.", "purple"],
            [FileText, "Invoice Reminders", "Send payment reminders and sync status with accounting.", "blue"],
            [Bell, "Support Escalation", "Create tickets and alert the right team when issues meet conditions.", "red"],
          ].map(([Icon, title, text, tone]) => (
            <FeatureCard key={title as string} icon={Icon as LucideIcon} title={title as string} text={text as string} tone={tone as string} />
          ))}
        </div>
      </section>
    </PageSection>
  );
}

function FinalCtaPage() {
  const orbitItems = [
    { icon: Sparkles, label: "Triggers", pos: "left-0 top-8" },
    { icon: Filter, label: "Conditions", pos: "left-[-18px] top-32" },
    { icon: Zap, label: "Actions", pos: "left-5 bottom-20" },
    { icon: Layers3, label: "Templates", pos: "right-0 top-8" },
    { icon: Bell, label: "Reminders", pos: "right-[-24px] top-32" },
    { icon: BarChart3, label: "Monitoring", pos: "right-8 bottom-20" },
  ];

  return (
    <PageSection>
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <Breadcrumb current="Final CTA" />
          <h1 className="mt-6 text-5xl font-extrabold tracking-[-0.045em] text-[#0f214f] sm:text-6xl">
            Ready to Automate the Work Your Team Repeats Every Day?
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#465374]">
            HNX Workflow Engine turns CRM events into intelligent actions — helping your team follow up faster,
            route work automatically, reduce manual effort, and build a business that runs with discipline.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Button href="/#contact" size="lg" showArrow>
              Book a CRM Consultation
            </Button>
            <Button href="/crm-demo" variant="secondary" size="lg" showArrow>
              See Demo
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-6 text-xs font-bold text-[#66728f]">
            <span>✓ Automate repetitive work</span>
            <span>✓ Reduce missed follow-ups</span>
            <span>✓ Scale operations cleanly</span>
          </div>
        </div>

        <div className="relative mx-auto grid h-[380px] w-full max-w-[560px] place-items-center">
          <div className="absolute h-[300px] w-[300px] rounded-full border border-dashed border-[#8ad8ee]" />
          <div className="absolute h-[220px] w-[220px] rounded-full border border-[#b8dcff]" />
          <div className="grid h-[160px] w-[160px] place-items-center rounded-[32px] border border-[#d7e1f2] bg-white text-[#1593b5] shadow-[20px_20px_0_rgba(20,184,204,0.14)]">
            <div className="text-center">
              <Workflow className="mx-auto h-12 w-12" />
              <p className="mt-3 text-xl font-extrabold text-[#0f214f]">Workflow</p>
              <p className="text-sm font-bold text-[#66728f]">Engine</p>
            </div>
          </div>

          {orbitItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className={`absolute ${item.pos} flex items-center gap-3 rounded-2xl border border-[#d7e1f2] bg-white px-5 py-3 shadow-[0_16px_44px_rgba(15,23,42,0.07)]`}>
                <Icon className="h-5 w-5 text-[#145cb7]" />
                <span className="text-sm font-extrabold text-[#0f214f]">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <section className="mt-8 rounded-[28px] border border-[#d7e1f2] bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <h2 className="text-center text-2xl font-extrabold text-[#0f214f]">One Automation Layer. Every Execution Advantage.</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            { icon: Zap, title: "Faster Execution", text: "Automate assignments, reminders, approvals, and updates.", tone: "cyan" },
            { icon: CheckCircle2, title: "Fewer Manual Errors", text: "Standardize repetitive work and reduce missed steps.", tone: "green" },
            { icon: BarChart3, title: "Measured Performance", text: "Track every workflow run, result, and bottleneck.", tone: "blue" },
            { icon: TrendingUp, title: "Scalable Operations", text: "Build processes that work even as your business grows.", tone: "purple" },
          ].map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[30px] bg-gradient-to-r from-[#0f214f] via-[#145cb7] to-[#19b7c5] p-8 text-white shadow-[0_28px_80px_rgba(15,33,79,0.24)]">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="grid h-24 w-24 place-items-center rounded-full border border-white/30">
              <Rocket className="h-12 w-12" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold">Your CRM Should Not Just Store Data. It Should Act.</h2>
              <p className="mt-2 max-w-xl text-sm leading-7 text-cyan-50">
                Let’s build workflow automation around your exact business process — from lead capture to follow-ups, approvals, reminders, and reporting.
              </p>
            </div>
          </div>
          <Button href="/#contact" variant="secondary" size="lg" showArrow>
            Book a CRM Consultation
          </Button>
        </div>
      </section>
    </PageSection>
  );
}

export default function WorkflowEnginePage() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewPage />;
      case "trigger-logic":
        return <TriggerLogicPage />;
      case "flow-builder":
        return <FlowBuilderPage />;
      case "automation-templates":
        return <AutomationTemplatesPage />;
      case "sequences-reminders":
        return <SequencesRemindersPage />;
      case "monitoring-logs":
        return <MonitoringLogsPage />;
      case "integrations":
        return <IntegrationsPage />;
      case "final-cta":
        return <FinalCtaPage />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <Shell activeTab={activeTab} onTabChange={setActiveTab}>
      {renderActiveTab()}
    </Shell>
  );
}
