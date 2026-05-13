"use client";

import Link from "next/link";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Building2,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Database,
  FileText,
  Filter,
  Headphones,
  Home,
  Layers3,
  LineChart,
  Mail,
  MessageCircle,
  Network,
  Phone,
  PlayCircle,
  Rocket,
  Send,
  ShieldCheck,
  Star,
  Target,
  TrendingDown,
  TrendingUp,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";
import { CRMSolutionTabs } from "@/components/solutions/CRMSolutionTabs";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import { Button } from "@/components/ui/Button";

type TabId =
  | "overview"
  | "lead-management"
  | "deals-pipeline"
  | "customers-accounts"
  | "tasks-activities"
  | "follow-ups"
  | "customer-timeline"
  | "final-cta";

type SidebarItem = {
  id: TabId;
  label: string;
  icon: LucideIcon;
};

const sidebarItems: SidebarItem[] = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "lead-management", label: "Lead Management", icon: Users },
  { id: "deals-pipeline", label: "Deals & Pipeline", icon: Filter },
  { id: "customers-accounts", label: "Customers & Accounts", icon: Building2 },
  { id: "tasks-activities", label: "Tasks & Activities", icon: CheckCircle2 },
  { id: "follow-ups", label: "Follow-ups", icon: Bell },
  { id: "customer-timeline", label: "Customer Timeline", icon: Clock3 },
  { id: "final-cta", label: "Final CTA", icon: Star },
];

const statCards = {
  overview: [
    { icon: Users, label: "Unified Records", value: "100%", note: "Single source of truth for your data", tone: "cyan" },
    { icon: Clock3, label: "Faster Follow-ups", value: "2.6x", note: "Average improvement in response time", tone: "blue" },
    { icon: Filter, label: "Pipeline Clarity", value: "360°", note: "Full visibility across your sales pipeline", tone: "purple" },
    { icon: TrendingUp, label: "Team Productivity", value: "35%", note: "Increase in team productivity", tone: "green" },
  ],
  leads: [
    { icon: Users, label: "New Leads", value: "1,248", note: "+18% vs last month", tone: "blue" },
    { icon: Filter, label: "Qualification Rate", value: "36%", note: "+6% vs last month", tone: "purple" },
    { icon: Clock3, label: "Response Speed", value: "2.4h", note: "-24% vs last month", tone: "red" },
    { icon: TrendingUp, label: "Conversion Lift", value: "28%", note: "+12% vs last month", tone: "green" },
  ],
  deals: [
    { icon: CircleDollarSign, label: "Pipeline Value", value: "$2.45M", note: "+18% vs last month", tone: "cyan" },
    { icon: FileText, label: "Open Deals", value: "1,248", note: "+8% vs last month", tone: "blue" },
    { icon: Target, label: "Win Rate", value: "32%", note: "+3pp vs last month", tone: "purple" },
    { icon: Clock3, label: "Avg Deal Cycle", value: "38 days", note: "-5 days vs last month", tone: "orange" },
  ],
  customers: [
    { icon: FileText, label: "Active Accounts", value: "2,845", note: "+14% vs last month", tone: "blue" },
    { icon: CheckCircle2, label: "Contact Health", value: "87%", note: "+9% vs last month", tone: "green" },
    { icon: ShieldCheck, label: "Renewal Visibility", value: "$12.4M", note: "+21% vs last month", tone: "purple" },
    { icon: Users, label: "Team Adoption", value: "92%", note: "+8% vs last month", tone: "cyan" },
  ],
  tasks: [
    { icon: CalendarDays, label: "Tasks Due", value: "32", note: "+18% vs last week", tone: "blue" },
    { icon: CheckCircle2, label: "Completed This Week", value: "58", note: "+24% vs last week", tone: "green" },
    { icon: Users, label: "Meetings Logged", value: "27", note: "+12% vs last week", tone: "purple" },
    { icon: TrendingUp, label: "Team Productivity", value: "82%", note: "+16% vs last week", tone: "green" },
  ],
  followups: [
    { icon: CalendarDays, label: "Follow-ups Scheduled", value: "1,248", note: "+28% vs last month", tone: "cyan" },
    { icon: Send, label: "Response Rate", value: "24.6%", note: "+18% vs last month", tone: "purple" },
    { icon: TrendingDown, label: "Missed Follow-ups Reduced", value: "87%", note: "+35% vs last month", tone: "green" },
    { icon: Clock3, label: "Avg Response Time", value: "2.4 hrs", note: "-25% vs last month", tone: "blue" },
  ],
  timeline: [
    { icon: Workflow, label: "Interactions Logged", value: "128", note: "Total across all channels", tone: "green" },
    { icon: Clock3, label: "Avg Response Gap", value: "1h 42m", note: "Average response time", tone: "blue" },
    { icon: TrendingUp, label: "Deal Activity", value: "$780K", note: "Across 3 open deals", tone: "purple" },
    { icon: Clock3, label: "Timeline Completeness", value: "96%", note: "Comprehensive coverage", tone: "green" },
  ],
};

const toneClasses: Record<string, string> = {
  blue: "bg-[#eef6ff] text-[#145cb7]",
  cyan: "bg-cyan-50 text-[#1593b5]",
  purple: "bg-purple-50 text-purple-600",
  green: "bg-emerald-50 text-emerald-600",
  orange: "bg-orange-50 text-orange-500",
  red: "bg-red-50 text-red-500",
};

const leadSources = [
  ["Website Forms", "452", "36%", "bg-[#2378ff]"],
  ["WhatsApp", "312", "25%", "bg-[#22c55e]"],
  ["Landing Pages", "198", "16%", "bg-[#7c3aed]"],
  ["Facebook Ads", "126", "10%", "bg-[#2563eb]"],
  ["Google Ads", "94", "7%", "bg-[#f59e0b]"],
  ["Email Campaigns", "66", "5%", "bg-[#8b5cf6]"],
  ["Referrals", "42", "3%", "bg-[#ec4899]"],
];

const leadRows = [
  ["Rohan Mehta", "Website Form", "85", "Qualified", "Sarah J.", "Today, 10:30 AM"],
  ["Priya Sharma", "WhatsApp", "68", "Contacted", "David L.", "Today, 09:15 AM"],
  ["Arjun Patel", "Facebook Ads", "74", "Proposal Sent", "Michael R.", "Yesterday, 04:45 PM"],
  ["Neha Iyer", "Landing Page", "59", "New", "Anita K.", "Yesterday, 03:20 PM"],
  ["Vikram Singh", "Google Ads", "82", "Negotiation", "Sarah J.", "May 15, 02:10 PM"],
];

const pipelineColumns = [
  {
    label: "New",
    meta: "12 Deals • $285K",
    color: "border-[#2378ff]",
    deals: [
      ["Acme Corporation", "$45,000", "Sarah J.", "May 19"],
      ["Blue Horizon LLC", "$28,000", "Mike L.", "May 18"],
      ["Northwind Traders", "$32,000", "Priya K.", "May 17"],
    ],
  },
  {
    label: "Qualified",
    meta: "18 Deals • $485K",
    color: "border-[#14c8d8]",
    deals: [
      ["Summit Partners", "$65,000", "James T.", "May 20"],
      ["BrightPath Solutions", "$42,000", "Olivia R.", "May 20"],
      ["Vertex Systems", "$38,000", "Daniel M.", "May 19"],
    ],
  },
  {
    label: "Proposal",
    meta: "15 Deals • $620K",
    color: "border-[#7c3aed]",
    deals: [
      ["GlobalTech Industries", "$120,000", "Sarah J.", "May 21"],
      ["Innovate Co.", "$85,000", "Mike L.", "May 20"],
      ["SilverLine Group", "$75,000", "Priya K.", "May 19"],
    ],
  },
  {
    label: "Negotiation",
    meta: "10 Deals • $535K",
    color: "border-[#fb923c]",
    deals: [
      ["Metro EMS", "$150,000", "James T.", "May 21"],
      ["DataBridge Inc.", "$95,000", "Olivia R.", "May 20"],
    ],
  },
  {
    label: "Closed Won",
    meta: "8 Deals • $525K",
    color: "border-[#10b981]",
    deals: [
      ["Alpha Corp", "$180,000", "Sarah J.", "May 16"],
      ["Pinnacle Industries", "$120,000", "Daniel M.", "May 15"],
    ],
  },
];

const accountRows = [
  ["Acme Corporation", "Enterprise", "87", "$250,000", "May 12, 2025", "Sarah"],
  ["Globex Industries", "Enterprise", "74", "$180,000", "Aug 28, 2025", "Olivia"],
  ["Initech Solutions", "Mid-Market", "62", "$75,000", "Jun 15, 2025", "James"],
  ["Umbrella Corp", "Enterprise", "92", "$320,000", "Sep 5, 2025", "Michael"],
  ["Soylent Corp", "Mid-Market", "45", "$40,000", "Apr 22, 2025", "Sarah"],
];

const taskColumns = [
  {
    title: "Today",
    count: 7,
    items: [
      ["Call with Acme Corp", "Sarah Johnson", "9:00 AM", "Call"],
      ["Demo for BlueSky Ltd.", "Michael Brown", "11:00 AM", "Meeting"],
      ["Follow up with TechNova", "Emily Davis", "1:30 PM", "Follow-up"],
      ["Prepare proposal for Orion", "James Wilson", "3:00 PM", "Task"],
    ],
  },
  {
    title: "Upcoming",
    count: 10,
    items: [
      ["Quarterly Review - Apex Inc.", "Daniel Lee", "May 16", "Meeting"],
      ["Send pricing to Greenfield", "Olivia Martin", "May 17", "Follow-up"],
      ["Discovery Call - Vertex Co.", "Chris Patel", "May 18", "Call"],
      ["Check-in with Northwind", "Laura Chen", "May 20", "Task"],
    ],
  },
  {
    title: "Overdue",
    count: 4,
    danger: true,
    items: [
      ["Follow up with Summit Co.", "Sarah Johnson", "May 10", "Overdue"],
      ["Send contract to Beacon", "Michael Brown", "May 9", "Overdue"],
      ["Call back - Redwood Ltd.", "Emily Davis", "May 8", "Overdue"],
      ["Update proposal for Nova", "James Wilson", "May 7", "Overdue"],
    ],
  },
  {
    title: "Completed",
    count: 15,
    success: true,
    items: [
      ["Intro call with Delta Co.", "", "May 12", "Done"],
      ["Demo for BrightPath", "", "May 12", "Done"],
      ["Follow up with Zenith", "", "May 11", "Done"],
      ["Send deck to Horizon", "", "May 10", "Done"],
    ],
  },
];

const timelineEvents = [
  {
    date: "May 12, 2024",
    time: "10:24 AM",
    icon: Users,
    color: "bg-[#1593b5]",
    title: "Lead Captured",
    text: "Lead captured via Website Form: Enterprise Demo Request",
    meta: "Source: Website • Campaign: Q2 Demand Gen",
    owner: "System",
  },
  {
    date: "May 12, 2024",
    time: "10:32 AM",
    icon: Phone,
    color: "bg-[#145cb7]",
    title: "Call Logged",
    text: "Initial discovery call with Alex Johnson",
    meta: "Duration: 24m 15s • Outcome: Interested",
    owner: "Sarah Johnson",
  },
  {
    date: "May 13, 2024",
    time: "2:00 PM",
    icon: CalendarDays,
    color: "bg-[#7c3aed]",
    title: "Meeting Scheduled",
    text: "Product Demo scheduled",
    meta: "May 15, 2024 at 11:00 AM • With: Alex Johnson, Sarah Johnson",
    owner: "Sarah Johnson",
  },
  {
    date: "May 15, 2024",
    time: "11:45 AM",
    icon: FileText,
    color: "bg-[#2378ff]",
    title: "Proposal Sent",
    text: "Enterprise Plan proposal sent via email",
    meta: "Value: $145,000 • Expires: May 29, 2024",
    owner: "Sarah Johnson",
  },
  {
    date: "May 17, 2024",
    time: "9:12 AM",
    icon: Send,
    color: "bg-[#7c3aed]",
    title: "Follow-up Sent",
    text: "Follow-up email sent after proposal",
    meta: "Subject: Following up on our proposal",
    owner: "Sarah Johnson",
  },
  {
    date: "May 20, 2024",
    time: "4:05 PM",
    icon: TrendingUp,
    color: "bg-[#1593b5]",
    title: "Deal Update",
    text: "Deal stage changed from Proposal to Negotiation",
    meta: "Deal Value: $145,000 • Probability: 70%",
    owner: "Sarah Johnson",
  },
  {
    date: "May 21, 2024",
    time: "1:30 PM",
    icon: MessageCircle,
    color: "bg-[#f59e0b]",
    title: "Note Added",
    text: "Customer requested custom integration details",
    meta: "Note added by Sarah Johnson",
    owner: "Sarah Johnson",
  },
  {
    date: "May 22, 2024",
    time: "10:18 AM",
    icon: CheckCircle2,
    color: "bg-[#10b981]",
    title: "Ticket Resolved",
    text: "Support ticket #TK-2451 resolved",
    meta: "Issue: API rate limit configuration • Resolution time: 1h 15m",
    owner: "Support Team",
  },
];

function Shell({
  activeTab,
  onTabChange,
  children,
}: {
  activeTab: TabId;
  onTabChange: (id: TabId) => void;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#f8fbff] text-[#0f214f]">
      <CRMSolutionTabs />

      <div className="mx-auto flex max-w-[min(92vw,1440px)] pt-14">
        <SolutionSidebar<TabId>
          title="CRM Core"
          subtitle="Sales and customer workspace"
          icon={Network}
          items={sidebarItems}
          activeTab={activeTab}
          onTabChange={onTabChange}
          ctaTitle="Book a CRM Consultation"
          ctaText="See how CRM Core can streamline your sales process and grow your business."
          ctaButtonText="Book a Consultation"
          ctaItems={["Personalized walkthrough", "Tailored to your business", "No commitment"]}
        />

        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </main>
  );
}

function Breadcrumb({ current }: { current: string }) {
  return (
    <div className="flex items-center gap-2 text-xs font-bold text-[#145cb7]">
      <Link href="/" className="hover:text-[#1593b5]">
        Solutions
      </Link>
      <span>/</span>
      <Link href="/solutions/crm/crmcore" className="hover:text-[#1593b5]">
        CRM Core
      </Link>
      <span>/</span>
      <span className="text-[#66728f]">{current}</span>
    </div>
  );
}

function PageSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-w-0 flex-1 bg-white">
      <div className="mx-auto max-w-[min(92vw,1440px)] px-5 py-10 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">{children}</div>
    </section>
  );
}

function HeaderGrid({
  current,
  title,
  subtitle,
  stats,
}: {
  current: string;
  title: string;
  subtitle: string;
  stats: Array<{ icon: LucideIcon; label: string; value: string; note: string; tone: string }>;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.98fr] lg:items-start">
      <div>
        <Breadcrumb current={current} />
        <h1 className="mt-5 text-5xl font-extrabold tracking-[-0.045em] text-[#0f214f] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[#465374]">{subtitle}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-[22px] border border-[#d7e1f2] bg-white p-5 text-center shadow-[0_16px_44px_rgba(15,23,42,0.05)]"
            >
              <div className={`mx-auto grid h-12 w-12 place-items-center rounded-full ${toneClasses[stat.tone]}`}>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="mt-4 text-xs font-bold text-[#334766]">{stat.label}</p>
              <p className="mt-2 text-4xl font-extrabold tracking-[-0.04em] text-[#0f214f]">{stat.value}</p>
              <p className={`mt-2 text-xs font-bold ${stat.tone === "red" ? "text-red-500" : "text-emerald-600"}`}>
                {stat.note}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MiniFeature({
  icon: Icon,
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
    <div className="rounded-[20px] border border-[#d7e1f2] bg-white p-5 shadow-[0_12px_34px_rgba(15,23,42,0.04)]">
      <div className={`grid h-12 w-12 place-items-center rounded-2xl ${toneClasses[tone]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-sm font-extrabold text-[#0f214f]">{title}</h3>
      <p className="mt-2 text-xs leading-5 text-[#465374]">{text}</p>
    </div>
  );
}

function CoreNode({
  icon: Icon,
  title,
  text,
  tone,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  tone: string;
}) {
  return (
    <div className="relative z-10 flex items-center gap-4 rounded-[20px] border border-[#d7e1f2] bg-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
      <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${toneClasses[tone]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-extrabold text-[#0f214f]">{title}</p>
        <p className="mt-1 text-xs leading-5 text-[#66728f]">{text}</p>
      </div>
    </div>
  );
}

function CRMCoreDiagram() {
  const left = [
    { icon: Users, title: "Leads", text: "Capture, qualify, and manage leads", tone: "cyan" },
    { icon: MessageCircle, title: "Deals", text: "Track opportunities and close deals", tone: "blue" },
    { icon: Building2, title: "Customers", text: "Manage accounts and customer relationships", tone: "blue" },
  ];

  const right = [
    { icon: CheckCircle2, title: "Tasks", text: "Create tasks and stay organized", tone: "cyan" },
    { icon: Bell, title: "Follow-ups", text: "Automate and never miss a follow-up", tone: "purple" },
    { icon: FileText, title: "Notes", text: "Add notes and keep information handy", tone: "blue" },
  ];

  return (
    <section className="mt-8 rounded-[30px] border border-[#d7e1f2] bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <div className="relative grid gap-7 lg:grid-cols-[1fr_260px_1fr] lg:items-center">
        <svg className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[270px] w-[780px] -translate-x-1/2 -translate-y-1/2 text-[#61c9ee] lg:block" viewBox="0 0 780 270" fill="none" aria-hidden="true">
          <path d="M125 45 H240 C280 45 280 85 320 85" stroke="currentColor" strokeWidth="2" />
          <path d="M125 135 H320" stroke="currentColor" strokeWidth="2" />
          <path d="M125 225 H240 C280 225 280 185 320 185" stroke="currentColor" strokeWidth="2" />
          <path d="M460 85 C500 85 500 45 540 45 H655" stroke="currentColor" strokeWidth="2" />
          <path d="M460 135 H655" stroke="currentColor" strokeWidth="2" />
          <path d="M460 185 C500 185 500 225 540 225 H655" stroke="currentColor" strokeWidth="2" />
          {[320, 460].map((x) => [85, 135, 185].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="currentColor" />))}
        </svg>

        <div className="grid gap-4">
          {left.map((item) => (
            <CoreNode key={item.title} {...item} />
          ))}
        </div>

        <div className="relative mx-auto grid h-[250px] w-[250px] place-items-center rounded-full bg-[#f8fbff]">
          <div className="absolute inset-2 rounded-full border border-dashed border-[#8ad8ee]" />
          <div className="absolute inset-8 rounded-full border border-[#b8dcff]" />
          <div className="grid h-[150px] w-[150px] place-items-center rounded-full border border-[#8bb7ff] bg-white shadow-[0_22px_65px_rgba(20,92,183,0.14)]">
            <div className="text-center">
              <Network className="mx-auto h-8 w-8 text-[#145cb7]" />
              <p className="mt-2 text-lg font-extrabold text-[#0f214f]">HNX</p>
              <p className="mt-1 text-xl font-extrabold text-[#0f214f]">CRM Core</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {right.map((item) => (
            <CoreNode key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="overflow-hidden rounded-[26px] border border-[#d7e1f2] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.09)]">
      <div className="grid min-h-[390px] grid-cols-[135px_1fr]">
        <aside className="bg-[#071f52] p-5 text-white">
          <div className="flex items-center gap-2 text-sm font-extrabold">
            <Network className="h-5 w-5 text-cyan-200" />
            HNX
          </div>
          <div className="mt-7 space-y-2 text-xs font-bold">
            {["Dashboard", "Leads", "Deals", "Customers", "Tasks", "Activities", "Follow-ups", "Reports", "Settings"].map((item, index) => (
              <div key={item} className={`rounded-xl px-3 py-2 ${index === 0 ? "bg-[#2378ff]" : "text-blue-100"}`}>
                {item}
              </div>
            ))}
          </div>
          <div className="mt-16 flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#19b7c5] to-[#145cb7]" />
            <div>
              <p className="text-[11px] font-bold">Sarah Johnson</p>
              <p className="text-[10px] text-blue-200">Sales Manager</p>
            </div>
          </div>
        </aside>

        <div className="p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-extrabold text-[#0f214f]">Dashboard</h3>
            <span className="rounded-xl border border-[#d7e1f2] px-3 py-2 text-xs font-bold text-[#66728f]">May 12 - May 18, 2024</span>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["Total Leads", "1,248", "+16%"],
              ["Open Deals", "$2.45M", "+22%"],
              ["Deals Won", "$780K", "+18%"],
              ["Tasks Due", "32", "-8%"],
            ].map(([label, value, delta]) => (
              <div key={label} className="rounded-2xl border border-[#d7e1f2] bg-white p-4">
                <p className="text-xs font-bold text-[#66728f]">{label}</p>
                <p className="mt-2 text-2xl font-extrabold text-[#0f214f]">{value}</p>
                <p className={`mt-1 text-xs font-bold ${delta.startsWith("-") ? "text-red-500" : "text-emerald-600"}`}>{delta} vs last week</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.85fr]">
            <div className="rounded-2xl border border-[#d7e1f2] p-4">
              <p className="text-sm font-extrabold text-[#0f214f]">Pipeline Overview</p>
              <div className="mt-5 flex h-36 items-end gap-5 border-b border-l border-[#d7e1f2] px-4">
                {[260, 300, 284, 196, 142, 96].map((h, index) => (
                  <div key={index} className="flex flex-1 flex-col items-center justify-end gap-2">
                    <div className="w-full rounded-t-xl bg-linear-to-t from-[#145cb7] to-[#38bdf8]" style={{ height: `${h / 4}px` }} />
                    <span className="text-[10px] font-semibold text-[#66728f]">{["New", "Qualified", "Proposal", "Negotiation", "Closed", "Won"][index]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#d7e1f2] p-4">
              <p className="text-sm font-extrabold text-[#0f214f]">Deals by Source</p>
              <div className="mt-5 grid place-items-center">
                <div className="grid h-32 w-32 place-items-center rounded-full border-[18px] border-[#2378ff] border-r-[#14c8d8] border-b-[#8b5cf6] border-l-[#dbeafe] bg-white">
                  <div className="text-center">
                    <p className="text-2xl font-extrabold">1,248</p>
                    <p className="text-[10px] font-bold text-[#66728f]">Total</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#d7e1f2] p-4">
              <p className="text-sm font-extrabold text-[#0f214f]">Recent Activities</p>
              <div className="mt-3 space-y-3 text-xs text-[#465374]">
                {["Call with Acme Corp", "Demo with BlueSky Ltd.", "Follow-up with TechNova"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#7c3aed]" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#d7e1f2] p-4">
              <p className="text-sm font-extrabold text-[#0f214f]">My Tasks</p>
              <div className="mt-3 space-y-3 text-xs text-[#465374]">
                {["Follow up with 5 leads", "Prepare proposal", "Demo for BlueSky Ltd.", "Update deal notes"].map((item) => (
                  <label key={item} className="flex items-center gap-3">
                    <input type="checkbox" className="h-4 w-4 rounded border-[#d7e1f2]" readOnly />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* PAGES */

function OverviewPage() {
  return (
    <PageSection>
      <HeaderGrid
        current="Overview"
        title="CRM Core Overview"
        subtitle="One organized system for leads, deals, customers, tasks, and follow-ups. HNX CRM Systems Core centralizes your entire front-office operation in one connected workspace."
        stats={statCards.overview}
      />

      <CRMCoreDiagram />

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.35fr]">
        <section className="rounded-[30px] border border-[#d7e1f2] bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
          <h2 className="text-2xl font-extrabold text-[#0f214f]">Built for Daily Sales Work</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[
              [Target, "Capture More Leads", "Multi-channel lead capture with instant logging.", "cyan"],
              [Filter, "Qualify with Confidence", "Score, segment, and prioritize high-potential leads.", "blue"],
              [Layers3, "Manage Your Pipeline", "Visualize deals and move them forward with clarity.", "blue"],
              [Users, "Strengthen Relationships", "Centralize customer data and interaction history.", "purple"],
              [Bell, "Stay on Top", "Automated reminders and follow-ups that drive results.", "green"],
              [BarChart3, "Measure What Matters", "Track activities and performance with real-time insights.", "green"],
            ].map(([Icon, title, text, tone]) => (
              <MiniFeature key={title as string} icon={Icon as LucideIcon} title={title as string} text={text as string} tone={tone as string} />
            ))}
          </div>
          <Link href="#lead-management" className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#145cb7]">
            Explore all CRM Core features <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        <DashboardPreview />
      </div>
    </PageSection>
  );
}

function LeadManagementPage() {
  return (
    <PageSection>
      <HeaderGrid
        current="Lead Management"
        title="Lead Management"
        subtitle="Capture, qualify, assign, and convert leads from every source in one organized system."
        stats={statCards.leads}
      />

      <div className="mt-8 grid gap-6 xl:grid-cols-[0.9fr_1.25fr]">
        <section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
          <h2 className="text-xl font-extrabold text-[#0f214f]">Lead Capture Flow</h2>

          <div className="mt-5 grid gap-5 lg:grid-cols-[190px_1fr]">
            <div>
              <p className="text-xs font-extrabold text-[#334766]">Lead Sources</p>
              <div className="mt-4 space-y-3">
                {leadSources.map(([source, value, , color]) => (
                  <div key={source} className="flex items-center gap-3">
                    <span className={`grid h-8 w-8 place-items-center rounded-xl text-white ${color}`}>
                      <span className="text-xs font-black">{source[0]}</span>
                    </span>
                    <p className="flex-1 text-xs font-bold text-[#0f214f]">{source}</p>
                    <p className="text-xs font-bold text-[#145cb7]">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative space-y-4">
              {([
                ["Lead Captured", "Leads enter the system from multiple sources", "1,290 this month", Users],
                ["Auto Enrichment", "We enrich leads with company & contact data", "98% enriched", Database],
                ["Qualification", "Score, grade and prioritize high-potential leads", "Qualified 463", Star],
                ["Assignment", "Assign to the right rep based on rules", "Assigned 428", UserCheck],
                ["Nurture / Follow-up", "Engage leads until they are ready to buy", "In progress 231", Send],
                ["Converted", "Win deals and grow customer relationships", "Converted 187", CheckCircle2],
              ] as Array<[string, string, string, LucideIcon]>).map(([title, text, badge, Icon], index) => (
                <div key={title} className="relative flex items-center gap-4 rounded-2xl border border-[#d7e1f2] bg-white p-4 shadow-sm">
                  {index > 0 ? <span className="absolute -top-4 left-8 h-4 w-px bg-[#145cb7]" /> : null}
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#eef6ff] text-[#145cb7]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-extrabold text-[#0f214f]">{title}</p>
                    <p className="text-xs text-[#66728f]">{text}</p>
                  </div>
                  <span className="rounded-full bg-[#f8fbff] px-3 py-1 text-[11px] font-bold text-[#66728f]">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
          <h2 className="text-xl font-extrabold text-[#0f214f]">Lead Qualification Overview</h2>
          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#d7e1f2] p-5">
              <p className="text-xs font-bold text-[#66728f]">Average Lead Score</p>
              <p className="mt-4 text-5xl font-extrabold text-[#0f214f]">72<span className="text-2xl text-[#66728f]">/100</span></p>
              <span className="mt-4 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">High Quality</span>
            </div>

            <div className="rounded-2xl border border-[#d7e1f2] p-5">
              <p className="text-xs font-bold text-[#66728f]">Leads by Source</p>
              <div className="mt-4 space-y-3">
                {leadSources.slice(0, 5).map(([source, value, percent]) => (
                  <div key={source}>
                    <div className="flex justify-between text-xs font-bold text-[#334766]"><span>{source}</span><span>{value} ({percent})</span></div>
                    <div className="mt-2 h-2 rounded-full bg-[#eef2f7]"><div className="h-full rounded-full bg-[#2378ff]" style={{ width: percent }} /></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#d7e1f2] p-5">
              <p className="text-xs font-bold text-[#66728f]">Leads by Stage</p>
              <div className="mt-4 space-y-3 text-sm font-semibold text-[#334766]">
                {["New 517", "Contacted 236", "Qualified 214", "Proposal Sent 142", "Negotiation 98", "Converted 187"].map((item, index) => (
                  <div key={item} className="flex items-center gap-3"><span className={`h-2 w-2 rounded-full ${["bg-[#2378ff]", "bg-[#14c8d8]", "bg-[#7c3aed]", "bg-[#f59e0b]", "bg-[#fb7185]", "bg-[#10b981]"][index]}`} />{item}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-[#d7e1f2] p-5">
            <p className="text-sm font-extrabold text-[#0f214f]">Assignment Rules</p>
            <div className="mt-4 grid gap-4 md:grid-cols-4">
              {[
                [Target, "Territory Based", "Assign by state and city"],
                [Workflow, "Round Robin", "Distribute leads evenly"],
                [Users, "Workload Based", "Assign based on workload"],
                [Star, "Score Based", "High score leads go to senior reps"],
              ].map(([Icon, title, text]) => (
                <MiniFeature key={title as string} icon={Icon as LucideIcon} title={title as string} text={text as string} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="mt-8 rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <h2 className="text-xl font-extrabold text-[#0f214f]">Recent Leads</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="text-xs text-[#66728f]">
              <tr>
                {["Lead", "Source", "Score", "Stage", "Owner", "Added", "Actions"].map((head) => (
                  <th key={head} className="border-b border-[#d7e1f2] px-4 py-3 font-extrabold">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leadRows.map((row) => (
                <tr key={row[0]} className="border-b border-[#edf2f7]">
                  <td className="px-4 py-3 font-bold text-[#0f214f]">{row[0]}</td>
                  <td className="px-4 py-3 text-[#465374]">{row[1]}</td>
                  <td className="px-4 py-3"><span className="rounded-lg bg-emerald-50 px-2 py-1 font-bold text-emerald-600">{row[2]}</span></td>
                  <td className="px-4 py-3"><span className="rounded-lg bg-[#eef6ff] px-2 py-1 font-bold text-[#145cb7]">{row[3]}</span></td>
                  <td className="px-4 py-3 text-[#465374]">{row[4]}</td>
                  <td className="px-4 py-3 text-[#465374]">{row[5]}</td>
                  <td className="px-4 py-3"><button className="rounded-lg border border-[#d7e1f2] px-3 py-1 font-bold text-[#145cb7]">...</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PageSection>
  );
}

function DealsPipelinePage() {
  return (
    <PageSection>
      <HeaderGrid
        current="Deals & Pipeline"
        title="Deals & Pipeline"
        subtitle="Move opportunities from inquiry to close with a clear visual pipeline that keeps your team focused and your forecast accurate."
        stats={statCards.deals}
      />

      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_280px]">
        <section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-xl font-extrabold text-[#0f214f]">Sales Pipeline</h2>
            <div className="flex gap-2">
              <button className="rounded-xl border border-[#d7e1f2] px-4 py-2 text-xs font-bold text-[#334766]">All Pipelines</button>
              <button className="rounded-xl border border-[#d7e1f2] px-4 py-2 text-xs font-bold text-[#334766]">Filters</button>
              <button className="rounded-xl bg-[#145cb7] px-4 py-2 text-xs font-bold text-white">+ New Deal</button>
            </div>
          </div>

          <div className="mt-5 grid gap-4 xl:grid-cols-5">
            {pipelineColumns.map((column) => (
              <div key={column.label} className={`rounded-[22px] border border-[#d7e1f2] bg-[#fbfdff] p-4 shadow-sm ${column.color} border-t-4`}>
                <p className="font-extrabold text-[#0f214f]">{column.label}</p>
                <p className="mt-1 text-xs font-bold text-[#66728f]">{column.meta}</p>
                <div className="mt-4 space-y-3">
                  {column.deals.map(([name, amount, owner, date]) => (
                    <div key={name} className="rounded-2xl border border-[#d7e1f2] bg-white p-3">
                      <p className="text-sm font-extrabold text-[#0f214f]">{name}</p>
                      <p className="mt-1 text-xs font-bold text-[#145cb7]">{amount}</p>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-[#66728f]">
                        <span>{owner}</span>
                        <span>{date}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-center text-xs font-bold text-[#145cb7]">+ more deals</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-[#0f214f]">Revenue Forecast</h2>
            <button className="rounded-xl border border-[#d7e1f2] px-3 py-2 text-xs font-bold text-[#334766]">This Quarter</button>
          </div>
          <p className="mt-8 text-xs font-bold text-[#66728f]">Weighted Pipeline</p>
          <p className="mt-3 text-4xl font-extrabold text-[#0f214f]">$1.28M</p>
          <p className="mt-2 text-xs font-bold text-emerald-600">↑ 14% vs last quarter</p>
          <div className="mt-8 grid place-items-center">
            <div className="grid h-36 w-36 place-items-center rounded-full border-[22px] border-[#2378ff] border-l-[#dbeafe] bg-white">
              <div className="text-center"><p className="text-2xl font-extrabold">52%</p><p className="text-xs text-[#66728f]">of goal</p></div>
            </div>
          </div>
          <div className="mt-7 space-y-3 text-sm font-semibold text-[#334766]">
            {["Best Case $1.92M", "Commit $1.28M", "Pipeline $2.45M", "Goal $2.50M"].map((item) => (
              <div key={item} className="flex justify-between"><span>{item.split(" ")[0]} {item.split(" ")[1]}</span><span>{item.split(" ").at(-1)}</span></div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-8 rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <h2 className="text-xl font-extrabold text-[#0f214f]">Pipeline Built for Action</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {[
            [Workflow, "Stage Movement", "Drag & drop deals across stages."],
            [Target, "Probability Scoring", "Automatically calculate weighted value."],
            [UserCheck, "Deal Ownership", "Clear owner with reminders."],
            [CheckCircle2, "Next Steps", "Track next steps and due dates."],
            [ShieldCheck, "Approval Checkpoints", "Control discounts and contracts."],
            [BarChart3, "Forecast Accuracy", "Historical win rates improve forecasts."],
          ].map(([Icon, title, text]) => <MiniFeature key={title as string} icon={Icon as LucideIcon} title={title as string} text={text as string} />)}
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-4">
        <MiniChartCard title="Pipeline Funnel" />
        <MiniTableCard title="Top Deals" />
        <MiniTableCard title="Team Performance" />
        <MiniLineCard title="Revenue Trend" />
      </div>
    </PageSection>
  );
}

function MiniChartCard({ title }: { title: string }) {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h3 className="text-lg font-extrabold text-[#0f214f]">{title}</h3>
      <div className="mt-7 space-y-3">
        {["bg-[#2378ff] w-full", "bg-[#14c8d8] w-[80%]", "bg-[#7c3aed] w-[62%]", "bg-[#fb923c] w-[46%]", "bg-[#10b981] w-[30%]"].map((cls) => (
          <div key={cls} className={`${cls} mx-auto h-8 rounded-lg`} />
        ))}
      </div>
      <p className="mt-6 text-right text-xl font-extrabold text-[#0f214f]">$2.45M</p>
    </div>
  );
}

function MiniTableCard({ title }: { title: string }) {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h3 className="text-lg font-extrabold text-[#0f214f]">{title}</h3>
      <div className="mt-5 space-y-4">
        {["Metro EMS", "GlobalTech Industries", "Alpha Corp", "Innovate Co."].map((item, index) => (
          <div key={item} className="flex items-center justify-between gap-3 text-sm">
            <span className="font-bold text-[#0f214f]">{item}</span>
            <span className="text-[#66728f]">{["$150,000", "$120,000", "$180,000", "$85,000"][index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniLineCard({ title }: { title: string }) {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h3 className="text-lg font-extrabold text-[#0f214f]">{title}</h3>
      <svg className="mt-8 h-40 w-full" viewBox="0 0 320 150" fill="none">
        <path d="M0 125 C35 118 50 70 85 80 C124 90 135 55 165 58 C210 62 215 38 250 35 C280 31 300 15 320 12" stroke="#14c8d8" strokeWidth="4" />
        <path d="M0 130 C45 115 58 102 80 82 C112 52 132 78 160 62 C220 27 240 15 320 8" stroke="#7c3aed" strokeWidth="3" strokeDasharray="7 7" />
      </svg>
    </div>
  );
}

function CustomersAccountsPage() {
  return (
    <PageSection>
      <HeaderGrid
        current="Customers & Accounts"
        title="Customers & Accounts"
        subtitle="Centralize every account, contact, and relationship in one comprehensive customer record."
        stats={statCards.customers}
      />

      <section className="mt-8 rounded-[30px] border border-[#d7e1f2] bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <div className="grid gap-6 xl:grid-cols-[1fr_1.35fr_1fr] xl:items-center">
          <div className="space-y-5">
            <AccountSideCard icon={Building2} title="Company Details" lines={["Acme Corporation", "Enterprise • Technology", "acme.com • San Francisco, CA", "Customer since May 2021"]} />
            <AccountSideCard icon={Users} title="Contacts (8)" lines={["Emily Carter", "VP of Customer Success", "emily.carter@acme.com", "+7 more contacts"]} />
            <AccountSideCard icon={CircleDollarSign} title="Open Deals (2)" lines={["Enterprise Renewal 2024", "$125,000 • Renewal", "Expansion: Data Platform", "$85,000 • Upsell"]} />
          </div>

          <div className="rounded-[30px] border border-[#d7e1f2] bg-[#fbfdff] p-7 text-center shadow-inner">
            <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[#0f214f] text-2xl font-extrabold text-white">ACME</div>
            <h2 className="mt-5 text-3xl font-extrabold text-[#0f214f]">Acme Corporation</h2>
            <p className="mt-2 text-sm font-semibold text-[#66728f]">Enterprise • Technology • San Francisco, CA</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {["Tier 1", "High Value", "Strategic"].map((tag) => (
                <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#145cb7] shadow-sm">{tag}</span>
              ))}
            </div>

            <div className="mt-7 grid gap-4 rounded-2xl border border-[#d7e1f2] bg-white p-5 text-left md:grid-cols-3">
              {[["Customer Since", "May 12, 2021"], ["Account Owner", "Sarah Johnson"], ["ARR", "$250,000"]].map(([label, value]) => (
                <div key={label}><p className="text-xs font-bold text-[#66728f]">{label}</p><p className="mt-2 text-sm font-extrabold text-[#0f214f]">{value}</p></div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-[#d7e1f2] bg-white p-5 text-left">
              <p className="text-sm font-extrabold text-[#0f214f]">Health Score</p>
              <div className="mt-4 flex items-center gap-5">
                <div className="grid h-28 w-28 place-items-center rounded-full border-[12px] border-emerald-500 border-r-[#e2e8f0]">
                  <div className="text-center"><p className="text-2xl font-extrabold text-[#0f214f]">87</p><p className="text-xs text-emerald-600">Healthy</p></div>
                </div>
                <div className="space-y-2 text-sm text-[#334766]">
                  {["Strong product usage", "Executive engagement", "Open support tickets", "Upcoming renewal in 45 days"].map((item, index) => (
                    <div key={item} className="flex items-center gap-2"><CheckCircle2 className={`h-4 w-4 ${index === 2 ? "text-orange-500" : "text-emerald-600"}`} />{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <AccountSideCard icon={CalendarDays} title="Recent Activities" lines={["May 12  QBR Meeting Completed", "May 8  Product Training Session", "May 2  Renewal Discussion Started", "View all activities"]} />
            <AccountSideCard icon={Headphones} title="Support Notes (3)" lines={["May 10  SSO issue resolved", "May 3  API rate limit question", "Apr 28  Feature request", "View all notes"]} />
            <AccountSideCard icon={LineChart} title="Relationship Health" lines={["Communication • High", "Product Usage • High", "Satisfaction • High", "Renewal Risk • Medium"]} />
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <h2 className="text-xl font-extrabold text-[#0f214f]">A Complete Customer View</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {[
            [Network, "Account Hierarchy", "Parent-child relationships and subsidiaries"],
            [Users, "Contact Roles", "Map stakeholders and decision makers"],
            [Clock3, "Interaction History", "Calls, emails, meetings, and touchpoints"],
            [FileText, "Notes", "Capture key notes and customer insights"],
            [FileText, "Files & Documents", "Contracts, proposals, and shared files"],
            [Users, "Segmentation", "Group customers by attributes and behavior"],
          ].map(([Icon, title, text]) => <MiniFeature key={title as string} icon={Icon as LucideIcon} title={title as string} text={text as string} />)}
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.8fr_0.8fr]">
        <CustomerTable />
        <RecentCommunication />
        <AccountDistribution />
      </div>
    </PageSection>
  );
}

function AccountSideCard({ icon: Icon, title, lines }: { icon: LucideIcon; title: string; lines: string[] }) {
  return (
    <div className="rounded-[22px] border border-[#d7e1f2] bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
      <div className="flex gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#eef6ff] text-[#145cb7]"><Icon className="h-5 w-5" /></div>
        <div>
          <p className="text-sm font-extrabold text-[#145cb7]">{title}</p>
          <div className="mt-3 space-y-2 text-xs font-semibold text-[#465374]">
            {lines.map((line) => <p key={line}>{line}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomerTable() {
  return (
    <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h3 className="text-lg font-extrabold text-[#0f214f]">All Customers (2,845)</h3>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[620px] text-left text-xs">
          <thead className="text-[#66728f]">
            <tr>{["Account Name", "Type", "Health", "ARR", "Renewal Date", "Owner"].map((h) => <th key={h} className="border-b border-[#d7e1f2] px-3 py-3">{h}</th>)}</tr>
          </thead>
          <tbody>
            {accountRows.map((row) => (
              <tr key={row[0]} className="border-b border-[#edf2f7]">
                {row.map((cell, index) => (
                  <td key={`${row[0]}-${index}`} className="px-3 py-3 font-semibold text-[#334766]">
                    {index === 2 ? <span className="rounded-lg bg-emerald-50 px-2 py-1 font-bold text-emerald-600">{cell}</span> : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function RecentCommunication() {
  return (
    <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h3 className="text-lg font-extrabold text-[#0f214f]">Recent Communication</h3>
      <div className="mt-5 space-y-5">
        {["QBR Meeting Completed", "Email: Renewal Follow-up", "Product Training Session", "Phone Call: Expansion Discussion"].map((item, index) => (
          <div key={item} className="flex gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#eef6ff] text-[#145cb7]">{[CalendarDays, Mail, PlayCircle, Phone].map((Icon, i) => i === index ? <Icon key={item} className="h-4 w-4" /> : null)}</span>
            <div><p className="text-sm font-extrabold text-[#0f214f]">{item}</p><p className="text-xs text-[#66728f]">Sarah Johnson • {index + 1}:25 PM</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AccountDistribution() {
  return (
    <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h3 className="text-lg font-extrabold text-[#0f214f]">Account Distribution</h3>
      <div className="mt-6 grid place-items-center">
        <div className="grid h-36 w-36 place-items-center rounded-full border-[22px] border-[#2378ff] border-r-[#14c8d8] border-b-[#10b981] border-l-[#dbeafe] bg-white">
          <div className="text-center"><p className="text-xl font-extrabold">2,845</p><p className="text-xs text-[#66728f]">Accounts</p></div>
        </div>
      </div>
      <div className="mt-5 space-y-2 text-sm font-semibold text-[#334766]">
        {["Enterprise 28%", "Mid-Market 34%", "Small Business 22%", "Startup 10%", "Other 6%"].map((item) => <p key={item}>{item}</p>)}
      </div>
    </section>
  );
}

function TasksActivitiesPage() {
  return (
    <PageSection>
      <HeaderGrid
        current="Tasks & Activities"
        title="Tasks & Activities"
        subtitle="Stay on top of calls, meetings, follow-ups, and daily execution so nothing falls through the cracks."
        stats={statCards.tasks}
      />

      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_320px]">
        <section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-xl font-extrabold text-[#0f214f]">Tasks Workspace</h2>
            <div className="flex gap-2"><button className="rounded-xl border border-[#d7e1f2] px-4 py-2 text-xs font-bold">All Users</button><button className="rounded-xl bg-[#145cb7] px-4 py-2 text-xs font-bold text-white">+ New Task</button></div>
          </div>
          <div className="mt-5 grid gap-4 xl:grid-cols-4">
            {taskColumns.map((col) => (
              <div key={col.title} className="rounded-[22px] border border-[#d7e1f2] bg-[#fbfdff] p-4">
                <div className="flex items-center justify-between">
                  <p className={`font-extrabold ${col.danger ? "text-red-600" : col.success ? "text-emerald-600" : "text-[#0f214f]"}`}>{col.title}</p>
                  <span className="rounded-lg bg-[#eef6ff] px-2 py-1 text-xs font-bold text-[#145cb7]">{col.count}</span>
                </div>
                <div className="mt-4 space-y-3">
                  {col.items.map(([title, owner, time, tag]) => (
                    <div key={title} className="rounded-2xl border border-[#d7e1f2] bg-white p-3">
                      <div className="flex justify-between gap-3"><p className="text-sm font-extrabold text-[#0f214f]">{title}</p><span className="text-xs text-[#66728f]">{time}</span></div>
                      <div className="mt-2 flex items-center justify-between text-xs"><span className="text-[#66728f]">{owner}</span><span className={`rounded-lg px-2 py-1 font-bold ${col.danger ? "bg-red-50 text-red-600" : col.success ? "bg-emerald-50 text-emerald-600" : "bg-[#eef6ff] text-[#145cb7]"}`}>{tag}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <ActivityFeed />
          <TodaySchedule />
        </aside>
      </div>

      <section className="mt-8 rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <h2 className="text-xl font-extrabold text-[#0f214f]">Stay Organized Without Busywork</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {[
            [Users, "Assign & Delegate", "Assign tasks to the right people."],
            [CalendarDays, "Due Dates & Priority", "Set dates and track what matters."],
            [PlayCircle, "Log Meetings", "Log meetings with notes and steps."],
            [Clock3, "Activity History", "See actions and interactions."],
            [Bell, "Smart Reminders", "Get reminders so you never miss follow-up."],
            [FileText, "Add Notes & Files", "Attach documents to any task."],
          ].map(([Icon, title, text]) => <MiniFeature key={title as string} icon={Icon as LucideIcon} title={title as string} text={text as string} />)}
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr_1fr]">
        <DonutPanel title="Task Completion Overview" value="58%" />
        <TeamActivityTable />
        <RecentInteractions />
      </div>
    </PageSection>
  );
}

function ActivityFeed() {
  return (
    <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h3 className="text-lg font-extrabold text-[#0f214f]">Activity Feed</h3>
      <div className="mt-5 space-y-5">
        {["Sarah Johnson completed follow up", "Michael Brown logged a meeting", "Emily Davis added a note", "James Wilson created a task"].map((item) => (
          <div key={item} className="flex gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#eef6ff] text-[#145cb7]"><Users className="h-4 w-4" /></span>
            <div><p className="text-sm font-bold text-[#0f214f]">{item}</p><p className="text-xs text-[#66728f]">Today, 10:30 AM</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TodaySchedule() {
  return (
    <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h3 className="text-lg font-extrabold text-[#0f214f]">Today’s Schedule</h3>
      <div className="mt-5 space-y-4">
        {["9:00 AM Call with Acme Corp", "11:00 AM Demo for BlueSky Ltd.", "1:30 PM Follow up with TechNova", "3:00 PM Prepare proposal"].map((item, index) => (
          <div key={item} className="flex gap-3 text-sm font-semibold text-[#334766]"><span className={`mt-1 h-2 w-2 rounded-full ${["bg-[#2378ff]", "bg-[#14c8d8]", "bg-[#7c3aed]", "bg-[#f59e0b]"][index]}`} />{item}</div>
        ))}
      </div>
    </section>
  );
}

function DonutPanel({ title, value }: { title: string; value: string }) {
  return (
    <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h3 className="text-lg font-extrabold text-[#0f214f]">{title}</h3>
      <div className="mt-7 grid place-items-center">
        <div className="grid h-36 w-36 place-items-center rounded-full border-[22px] border-[#2378ff] border-r-[#14c8d8] border-b-[#f59e0b] border-l-[#fb7185]">
          <div className="text-center"><p className="text-3xl font-extrabold">{value}</p><p className="text-xs text-[#66728f]">Completed</p></div>
        </div>
      </div>
    </section>
  );
}

function TeamActivityTable() {
  return (
    <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h3 className="text-lg font-extrabold text-[#0f214f]">Team Activity</h3>
      <div className="mt-5 space-y-3">
        {["Sarah Johnson", "Michael Brown", "Emily Davis", "James Wilson", "Olivia Martin"].map((name, index) => (
          <div key={name} className="grid grid-cols-[1fr_60px_60px_80px] items-center gap-3 text-sm">
            <span className="font-bold text-[#0f214f]">{name}</span>
            <span>{[18, 14, 11, 15, 12][index]}</span>
            <span className={index === 2 ? "text-red-500" : "text-[#334766]"}>{[6, 5, 7, 4, 5][index]}</span>
            <div className="h-2 rounded-full bg-[#eef2f7]"><div className="h-full rounded-full bg-emerald-500" style={{ width: `${[90, 78, 69, 88, 75][index]}%` }} /></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RecentInteractions() {
  return (
    <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h3 className="text-lg font-extrabold text-[#0f214f]">Recent Interactions</h3>
      <div className="mt-5 space-y-4">
        {["Call with Acme Corp", "Demo with BlueSky Ltd.", "Note added to TechNova", "Follow up with Greenfield Co."].map((item, index) => (
          <div key={item} className="flex items-center justify-between text-sm">
            <span className="font-bold text-[#0f214f]">{item}</span>
            <span className="rounded-lg bg-[#eef6ff] px-2 py-1 text-xs font-bold text-[#145cb7]">{["Call", "Meeting", "Note", "Follow-up"][index]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FollowUpsPage() {
  return (
    <PageSection>
      <HeaderGrid
        current="Follow-ups"
        title="Follow-ups"
        subtitle="Automate reminders, outreach, and next steps so no lead or customer goes cold."
        stats={statCards.followups}
      />

      <div className="mt-8 grid gap-6 xl:grid-cols-[0.8fr_1.3fr_0.85fr]">
        <FollowupTemplates />
        <FollowupSequence />
        <FollowupRules />
      </div>

      <section className="mt-8 rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <h2 className="text-xl font-extrabold text-[#0f214f]">Never Miss the Next Step</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {[
            [Mail, "Email Reminders", "Automated follow-up emails sent at the right time."],
            [MessageCircle, "WhatsApp Nudges", "Reach leads on WhatsApp with timely nudges."],
            [Bell, "Owner Notifications", "Notify owners about due and overdue follow-ups."],
            [Clock3, "SLA Timers", "Set SLAs for first response and follow-up."],
            [CalendarDays, "Smart Scheduling", "Schedule based on behavior and lead score."],
            [TrendingDown, "Overdue Alerts", "Get alerts when follow-ups are overdue."],
          ].map(([Icon, title, text]) => <MiniFeature key={title as string} icon={Icon as LucideIcon} title={title as string} text={text as string} />)}
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_0.8fr_1fr]">
        <MiniLineCard title="Outreach Timeline" />
        <Leaderboard />
        <EngagementTrend />
      </div>
    </PageSection>
  );
}

function FollowupTemplates() {
  return (
    <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h3 className="text-lg font-extrabold text-[#0f214f]">Message Templates</h3>
      <div className="mt-5 space-y-4">
        {([
          [Mail, "First Outreach", "Hi {name}, I came across your company...", "Email"],
          [MessageCircle, "Reminder", "Just following up on my previous message...", "WhatsApp"],
          [Mail, "Nurture", "Sharing a resource that might help...", "Email"],
          [MessageCircle, "Re-engage", "Quick check-in — are you still interested...", "WhatsApp"],
        ] as Array<[LucideIcon, string, string, string]>).map(([Icon, title, text, tag]) => (
          <div key={title} className="flex gap-3 rounded-2xl border border-[#d7e1f2] p-4">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#eef6ff] text-[#145cb7]"><Icon className="h-5 w-5" /></span>
            <div className="flex-1"><p className="text-sm font-extrabold text-[#0f214f]">{title}</p><p className="text-xs text-[#66728f]">{text}</p></div>
            <span className="h-fit rounded-lg bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-600">{tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FollowupSequence() {
  const steps = [
    ["1", "New Lead", "Lead enters the system", "Instant"],
    ["2", "First Contact", "Send welcome email", "Day 0"],
    ["3", "Reminder", "Automated reminder", "Day 2"],
    ["4", "Nurture", "Share valuable resource", "Day 5"],
    ["5", "Re-engage", "Check-in message", "Day 10"],
    ["6", "Closed", "Mark as closed / converted", "Variable"],
  ];

  return (
    <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <div className="flex justify-between"><h3 className="text-lg font-extrabold text-[#0f214f]">Follow-up Sequence</h3><button className="rounded-xl border border-[#d7e1f2] px-3 py-2 text-xs font-bold">Edit Sequence</button></div>
      <div className="mt-5 space-y-4">
        {steps.map(([num, title, text, day], index) => (
          <div key={title} className="relative flex items-center gap-4">
            {index > 0 ? <span className="absolute -top-4 left-5 h-4 w-px bg-[#d7e1f2]" /> : null}
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#1593b5] text-sm font-extrabold text-white">{num}</span>
            <div className="flex-1 border-b border-[#edf2f7] pb-3"><p className="font-extrabold text-[#0f214f]">{title}</p><p className="text-xs text-[#66728f]">{text}</p></div>
            <span className="text-xs font-bold text-[#66728f]">{day}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FollowupRules() {
  return (
    <div className="space-y-6">
      <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <h3 className="text-lg font-extrabold text-[#0f214f]">Reminder Rules</h3>
        <div className="mt-5 space-y-4">
          {["Business Hours Only", "Skip on Response", "Max 5 Attempts"].map((item) => (
            <div key={item} className="flex items-center justify-between gap-4">
              <div><p className="text-sm font-extrabold text-[#0f214f]">{item}</p><p className="text-xs text-[#66728f]">Active automation rule</p></div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">Active</span>
            </div>
          ))}
        </div>
      </section>
      <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <h3 className="text-lg font-extrabold text-[#0f214f]">Follow-up Health</h3>
        <div className="mt-5 space-y-3">
          {["On Track 812", "Due Today 156", "Overdue 94", "No Upcoming 186"].map((item, index) => (
            <div key={item}>
              <div className="flex justify-between text-xs font-bold text-[#334766]"><span>{item}</span></div>
              <div className="mt-2 h-2 rounded-full bg-[#eef2f7]"><div className={`h-full rounded-full ${index < 2 ? "bg-emerald-500" : "bg-red-500"}`} style={{ width: `${[65, 12, 8, 15][index]}%` }} /></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Leaderboard() {
  return (
    <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h3 className="text-lg font-extrabold text-[#0f214f]">Follow-up Leaderboard</h3>
      <div className="mt-5 space-y-4">
        {["Sarah Johnson", "Michael Chen", "Priya Sharma"].map((name, index) => (
          <div key={name} className="grid grid-cols-[32px_1fr_70px_70px] items-center gap-3 text-sm">
            <span className="font-extrabold text-[#145cb7]">{index + 1}</span>
            <span className="font-bold text-[#0f214f]">{name}</span>
            <span>{[142, 118, 104][index]}</span>
            <span>{["38.2%", "31.6%", "27.9%"][index]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function EngagementTrend() {
  return (
    <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h3 className="text-lg font-extrabold text-[#0f214f]">Engagement Trend</h3>
      <svg className="mt-7 h-44 w-full" viewBox="0 0 360 160" fill="none">
        <path d="M0 100 C35 60, 60 50, 95 72 C140 95, 165 25, 200 50 C240 82, 270 56, 310 65 C332 70, 350 44, 360 42" stroke="#14c8d8" strokeWidth="4" />
        <path d="M0 130 C45 100, 70 95, 105 110 C150 122, 170 78, 210 90 C250 102, 280 80, 320 92 C340 98, 350 80, 360 75" stroke="#2378ff" strokeWidth="3" />
        <path d="M0 148 C55 140, 90 135, 120 142 C175 155, 190 122, 230 130 C270 138, 300 122, 360 118" stroke="#7c3aed" strokeWidth="3" />
      </svg>
    </section>
  );
}

function CustomerTimelinePage() {
  return (
    <PageSection>
      <HeaderGrid
        current="Customer Timeline"
        title="Customer Timeline"
        subtitle="See every touchpoint, update, meeting, note, and deal event in chronological order."
        stats={statCards.timeline}
      />

      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_390px]">
        <section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
          <div className="space-y-4">
            {timelineEvents.map((event) => {
              const Icon = event.icon;
              return (
                <div key={`${event.date}-${event.title}`} className="grid grid-cols-[120px_56px_1fr] gap-4">
                  <div className="text-right text-xs font-semibold text-[#465374]"><p>{event.date}</p><p className="mt-1">{event.time}</p></div>
                  <div className="relative flex justify-center">
                    <span className={`z-10 grid h-11 w-11 place-items-center rounded-full text-white ${event.color}`}><Icon className="h-5 w-5" /></span>
                    <span className="absolute bottom-[-24px] top-11 w-px bg-[#d7e1f2]" />
                  </div>
                  <div className="rounded-2xl border border-[#d7e1f2] bg-white p-4">
                    <div className="flex justify-between gap-4"><p className="font-extrabold text-[#0f214f]">{event.title}</p><span className="text-xs font-bold text-[#66728f]">{event.owner}</span></div>
                    <p className="mt-2 text-sm text-[#334766]">{event.text}</p>
                    <p className="mt-1 text-xs text-[#66728f]">{event.meta}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <aside className="space-y-6">
          <section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-[#145cb7] text-xl font-extrabold text-white">AJ</div>
              <div><h3 className="text-xl font-extrabold text-[#0f214f]">Alex Johnson</h3><p className="text-sm text-[#66728f]">VP of Operations, Acme Corp</p><p className="text-xs text-[#66728f]">alex.johnson@acmecorp.com</p></div>
            </div>

            <div className="mt-7 rounded-2xl border border-[#d7e1f2] p-5">
              <p className="font-extrabold text-[#0f214f]">Relationship Health</p>
              <div className="mt-6 grid place-items-center">
                <div className="grid h-36 w-36 place-items-center rounded-full border-[16px] border-emerald-500 border-r-[#e2e8f0]">
                  <div className="text-center"><p className="text-3xl font-extrabold">92</p><p className="text-xs text-[#66728f]">out of 100</p></div>
                </div>
              </div>
              <div className="mt-5 space-y-2 text-sm text-[#334766]">
                {["Responsive customer", "High engagement", "On track with milestones", "No open critical issues"].map((item) => (
                  <p key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" />{item}</p>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#d7e1f2] p-5">
              <p className="font-extrabold text-[#0f214f]">Open Deals (3)</p>
              <div className="mt-4 space-y-3 text-sm">
                {["Enterprise Plan $145,000", "Professional Services $35,000", "Training & Onboarding $12,000"].map((item, index) => (
                  <div key={item} className="flex justify-between"><span>{item}</span><span>{[70, 40, 20][index]}%</span></div>
                ))}
              </div>
              <div className="mt-4 border-t border-[#d7e1f2] pt-4 text-right text-lg font-extrabold text-[#0f214f]">$192,000</div>
            </div>
          </section>
        </aside>
      </div>

      <section className="mt-8 rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <h2 className="text-xl font-extrabold text-[#0f214f]">Every Interaction in Context</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {[
            [MessageCircle, "Notes", "All notes and internal comments"],
            [FileText, "Files", "Proposals, docs & attachments"],
            [Phone, "Calls", "Call logs & recordings"],
            [Mail, "Emails", "Sent & received emails"],
            [CalendarDays, "Meetings", "Scheduled & completed"],
            [Users, "Ownership Changes", "Handoffs & assignments"],
          ].map(([Icon, title, text]) => <MiniFeature key={title as string} icon={Icon as LucideIcon} title={title as string} text={text as string} />)}
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.05fr_1.2fr]">
        <TimelineFilters />
        <EngagementTrend />
        <RecentTouchpoints />
      </div>
    </PageSection>
  );
}

function TimelineFilters() {
  return (
    <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h3 className="text-lg font-extrabold text-[#0f214f]">Timeline Filters</h3>
      <div className="mt-5 grid gap-3">
        {["Date Range", "Activity Type", "Users", "Channels"].map((label) => (
          <label key={label} className="text-xs font-bold text-[#66728f]">
            {label}
            <div className="mt-2 rounded-xl border border-[#d7e1f2] px-3 py-2 text-[#334766]">All {label}</div>
          </label>
        ))}
        <button className="mt-2 rounded-xl bg-[#145cb7] px-4 py-3 text-sm font-bold text-white">Apply Filters</button>
      </div>
    </section>
  );
}

function RecentTouchpoints() {
  return (
    <section className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h3 className="text-lg font-extrabold text-[#0f214f]">Recent Customer Touchpoints</h3>
      <div className="mt-5 space-y-4">
        {["Follow-up email sent", "Deal stage updated", "Note added", "Ticket resolved", "Call logged"].map((item, index) => (
          <div key={item} className="grid grid-cols-[1fr_120px_80px] text-sm">
            <span className="font-bold text-[#0f214f]">{item}</span>
            <span className="text-[#66728f]">Sarah Johnson</span>
            <span className="text-[#66728f]">May {12 + index}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCTAPage() {
  const orbitItems = [
    { label: "Leads", icon: Users, pos: "left-0 top-5" },
    { label: "Deals", icon: MessageCircle, pos: "left-[-30px] top-28" },
    { label: "Customers", icon: Building2, pos: "left-0 bottom-20" },
    { label: "Tasks", icon: CheckCircle2, pos: "right-0 top-5" },
    { label: "Follow-ups", icon: Bell, pos: "right-[-30px] top-32" },
    { label: "Reporting", icon: BarChart3, pos: "right-8 bottom-16" },
  ];

  return (
    <PageSection>
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <Breadcrumb current="Final CTA" />
          <h1 className="mt-6 text-5xl font-extrabold tracking-[-0.045em] text-[#0f214f] sm:text-6xl">
            Ready to Build Your CRM Core?
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#465374]">
            Turn lead capture, pipeline, customer management, and follow-ups into one connected system — so your team can
            close more deals and build stronger customer relationships.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Button href="/#contact" size="lg" showArrow>Book a CRM Consultation</Button>
            <Button href="/crm-demo" variant="secondary" size="lg" showArrow>See Demo</Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-6 text-xs font-bold text-[#66728f]">
            <span>✓ No commitment</span>
            <span>✓ Personalized walkthrough</span>
            <span>✓ See results faster</span>
          </div>
        </div>

        <div className="relative mx-auto grid h-[380px] w-full max-w-[560px] place-items-center">
          <div className="absolute h-[290px] w-[290px] rounded-full border border-dashed border-[#8ad8ee]" />
          <div className="absolute h-[210px] w-[210px] rounded-full border border-[#b8dcff]" />
          <div className="grid h-[160px] w-[160px] place-items-center rounded-full border border-[#8bb7ff] bg-white shadow-[0_22px_70px_rgba(20,92,183,0.15)]">
            <div className="text-center"><Network className="mx-auto h-8 w-8 text-[#145cb7]" /><p className="mt-2 text-lg font-extrabold">HNX</p><p className="text-xl font-extrabold">CRM Core</p></div>
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
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [ShieldCheck, "Tailored to Your Workflow", "Configured to match how your team works best."],
            [CheckCircle2, "Clean Implementation", "Fast, guided setup with minimal disruption."],
            [TrendingUp, "Built for Scalable Growth", "Start smart, scale seamlessly as you grow."],
          ].map(([Icon, title, text]) => <MiniFeature key={title as string} icon={Icon as LucideIcon} title={title as string} text={text as string} />)}
        </div>
      </section>

      <section className="mt-8 rounded-[28px] border border-[#d7e1f2] bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            [Users, "Capture More Leads", "Centralize and qualify leads across every channel."],
            [Filter, "Close More Deals", "Visualize your pipeline and move opportunities forward."],
            [Users, "Delight Your Customers", "Manage relationships and stay connected at every step."],
            [BarChart3, "Drive Better Results", "Get real-time insights that power confident decisions."],
          ].map(([Icon, title, text]) => <MiniFeature key={title as string} icon={Icon as LucideIcon} title={title as string} text={text as string} />)}
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1fr]">
        <section className="rounded-[28px] border border-[#d7e1f2] bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
          <h2 className="text-2xl font-extrabold text-[#0f214f]">Built Around Your Business</h2>
          <p className="mt-3 text-sm leading-7 text-[#465374]">
            A CRM Core that fits the way your team works — simple to use, powerful at scale.
          </p>
          <div className="mt-6"><DashboardPreview /></div>
        </section>

        <section className="rounded-[28px] border border-[#d7e1f2] bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
          <h2 className="text-2xl font-extrabold text-[#0f214f]">What You Get With HNX</h2>
          <div className="mt-6 space-y-5">
            {[
              "All-in-one CRM Core for leads, deals, customers, tasks & follow-ups",
              "Custom pipelines, stages, and fields built for your process",
              "Automation that saves time and keeps your team focused",
              "Real-time dashboards and reports for smarter decisions",
              "Seamless integrations with the tools you already use",
              "Expert support and onboarding every step of the way",
            ].map((item) => (
              <div key={item} className="flex gap-3 text-sm font-semibold text-[#334766]">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1593b5]" /> {item}
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-8 rounded-[30px] bg-gradient-to-r from-[#0f214f] via-[#145cb7] to-[#19b7c5] p-8 text-white shadow-[0_28px_80px_rgba(15,33,79,0.24)]">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="grid h-24 w-24 place-items-center rounded-full border border-white/30">
              <Rocket className="h-12 w-12" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold">Let’s Build Your Competitive Advantage</h2>
              <p className="mt-2 max-w-xl text-sm leading-7 text-cyan-50">
                See HNX CRM Systems Core in action and discover how we can help your team work smarter, close more deals, and grow together.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/#contact" variant="secondary" size="lg" showArrow>Book a CRM Consultation</Button>
            <Button href="/crm-demo" variant="secondary" size="lg" showArrow>See Demo</Button>
          </div>
        </div>
      </section>
    </PageSection>
  );
}

export default function CRMCorePage() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const renderPage = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewPage />;
      case "lead-management":
        return <LeadManagementPage />;
      case "deals-pipeline":
        return <DealsPipelinePage />;
      case "customers-accounts":
        return <CustomersAccountsPage />;
      case "tasks-activities":
        return <TasksActivitiesPage />;
      case "follow-ups":
        return <FollowUpsPage />;
      case "customer-timeline":
        return <CustomerTimelinePage />;
      case "final-cta":
        return <FinalCTAPage />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <Shell activeTab={activeTab} onTabChange={setActiveTab}>
      {renderPage()}
    </Shell>
  );
}
