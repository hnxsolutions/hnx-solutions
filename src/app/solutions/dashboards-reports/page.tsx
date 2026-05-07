"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Database,
  Download,
  FileText,
  Filter,
  Flag,
  Gauge,
  Grid2X2,
  Home,
  Layers3,
  LineChart,
  MoreHorizontal,
  Search,
  Send,
  Settings2,
  Share2,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  Upload,
  Users,
  Zap,
} from "lucide-react";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import { Button } from "@/components/ui/Button";

type TabId =
  | "overview"
  | "executive-dashboard"
  | "sales-reporting"
  | "revenue-analytics"
  | "team-performance"
  | "custom-reports"
  | "report-builder"
  | "scheduled-reports"
  | "final-cta";

type SidebarItem = {
  id: TabId;
  label: string;
  icon: LucideIcon;
};

type Tone = "blue" | "cyan" | "green" | "purple" | "orange" | "red" | "slate";

type StatCard = {
  icon: LucideIcon;
  label: string;
  value: string;
  note: string;
  tone: Tone;
};

type FeatureCardData = {
  icon: LucideIcon;
  title: string;
  text: string;
  tone: Tone;
};

const sidebarItems: SidebarItem[] = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "executive-dashboard", label: "Executive Dashboard", icon: Grid2X2 },
  { id: "sales-reporting", label: "Sales Reporting", icon: BarChart3 },
  { id: "revenue-analytics", label: "Revenue Analytics", icon: LineChart },
  { id: "team-performance", label: "Team Performance", icon: Users },
  { id: "custom-reports", label: "Custom Reports", icon: FileText },
  { id: "report-builder", label: "Report Builder", icon: Settings2 },
  { id: "scheduled-reports", label: "Scheduled Reports", icon: Clock3 },
  { id: "final-cta", label: "Final CTA", icon: Flag },
];

const toneClasses: Record<Tone, string> = {
  blue: "bg-[#eef6ff] text-[#145cb7]",
  cyan: "bg-cyan-50 text-[#1593b5]",
  green: "bg-emerald-50 text-emerald-600",
  purple: "bg-purple-50 text-purple-600",
  orange: "bg-orange-50 text-orange-500",
  red: "bg-red-50 text-red-500",
  slate: "bg-slate-100 text-slate-600",
};

const statCards: Record<string, StatCard[]> = {
  overview: [
    { icon: Zap, label: "Real-Time Visibility", value: "24/7", note: "Live updates across every dashboard", tone: "blue" },
    { icon: Target, label: "Decision Speed", value: "3.2x", note: "Faster business decisions", tone: "cyan" },
    { icon: Share2, label: "Reports Shared", value: "486", note: "Automated stakeholder updates", tone: "purple" },
    { icon: TrendingUp, label: "Growth Insights", value: "+28%", note: "More opportunities surfaced", tone: "green" },
  ],
  executive: [
    { icon: CircleDollarSign, label: "Total Revenue", value: "$4.82M", note: "+16.2% vs last month", tone: "blue" },
    { icon: Database, label: "Pipeline Value", value: "$12.74M", note: "+12.7% vs last month", tone: "cyan" },
    { icon: Target, label: "Win Rate", value: "28.6%", note: "+3.4pp vs last month", tone: "purple" },
    { icon: Users, label: "Active Opportunities", value: "216", note: "+8.9% vs last month", tone: "blue" },
  ],
  sales: [
    { icon: Users, label: "New Leads", value: "1,248", note: "+18% vs Apr 1 – Apr 30", tone: "blue" },
    { icon: CircleDollarSign, label: "Deals Closed", value: "312", note: "+21% vs Apr 1 – Apr 30", tone: "cyan" },
    { icon: Target, label: "Win Rate", value: "28.6%", note: "+2.4pp vs Apr 1 – Apr 30", tone: "purple" },
    { icon: CircleDollarSign, label: "Avg. Deal Size", value: "$42.7K", note: "+9% vs Apr 1 – Apr 30", tone: "blue" },
  ],
  revenue: [
    { icon: CircleDollarSign, label: "Monthly Recurring Revenue", value: "$4.82M", note: "+12.4% vs Apr 2025", tone: "cyan" },
    { icon: Target, label: "Forecast Accuracy", value: "87%", note: "+6pp vs Apr 2025", tone: "blue" },
    { icon: TrendingDown, label: "Churn Impact", value: "$386K", note: "-8.7% vs Apr 2025", tone: "purple" },
    { icon: TrendingUp, label: "Net New Revenue", value: "$1.24M", note: "+15.6% vs Apr 2025", tone: "green" },
  ],
  team: [
    { icon: CheckCircle2, label: "Tasks Completed", value: "1,248", note: "+14.5% vs Apr 2025", tone: "green" },
    { icon: CalendarDays, label: "Meetings Held", value: "368", note: "+11.2% vs Apr 2025", tone: "purple" },
    { icon: Clock3, label: "Response Time", value: "2.4h", note: "-18.7% vs Apr 2025", tone: "blue" },
    { icon: Target, label: "Goal Attainment", value: "86%", note: "+9.3% vs Apr 2025", tone: "orange" },
  ],
  builder: [
    { icon: CircleDollarSign, label: "Total Revenue", value: "$4.82M", note: "+16.4% vs prior 90 days", tone: "blue" },
    { icon: BarChart3, label: "Deals Closed", value: "128", note: "+14.7% vs prior 90 days", tone: "green" },
    { icon: CircleDollarSign, label: "Avg Deal Size", value: "$37.6K", note: "+8.3% vs prior 90 days", tone: "purple" },
    { icon: Target, label: "Win Rate", value: "42%", note: "+5.2% vs prior 90 days", tone: "cyan" },
  ],
};

const overviewFeatures: FeatureCardData[] = [
  { icon: Zap, title: "Real-Time Visibility", text: "Live dashboards that keep your data always up to date.", tone: "blue" },
  { icon: Gauge, title: "Executive Clarity", text: "High-level views that highlight what matters most.", tone: "cyan" },
  { icon: Sparkles, title: "Actionable Insights", text: "Identify trends, risks, and opportunities with confidence.", tone: "green" },
  { icon: Share2, title: "Shareable Reports", text: "Deliver polished reports your team and stakeholders trust.", tone: "purple" },
];

const reportingCapabilities: FeatureCardData[] = [
  { icon: Grid2X2, title: "Executive Dashboards", text: "High-level KPIs and performance snapshots for leaders.", tone: "blue" },
  { icon: CircleDollarSign, title: "Sales & Revenue Reports", text: "Deep-dive into sales pipeline, revenue trends, and forecasts.", tone: "green" },
  { icon: Users, title: "Team Performance", text: "Track team goals, productivity, and achievement.", tone: "purple" },
  { icon: Settings2, title: "Custom & Ad-Hoc Reports", text: "Answer unique business questions with flexible filters.", tone: "cyan" },
  { icon: CalendarDays, title: "Scheduled Delivery", text: "Automate report delivery on the cadence your team needs.", tone: "orange" },
  { icon: Upload, title: "Export & Share", text: "Export to PDF, Excel, or CSV and share securely.", tone: "blue" },
];

const salesInsights = [
  ["Revenue is up 16%", "You’re ahead of goal by $680K for the month.", "green"],
  ["Win rate improved", "Your win rate increased 2.4pp compared to last month.", "purple"],
  ["Larger deal sizes", "Average deal size increased 9%, driving higher revenue per deal.", "blue"],
];

const forecastRows = [
  ["Projected Revenue", "$6.15M", ""],
  ["Commit", "$4.12M", "67%"],
  ["Best Case", "$6.15M", "100%"],
  ["Goal", "$6.50M", "95%"],
];

const teamRows = [
  ["Meera Shah", "Enterprise Account Executive", "92", "112%", "green"],
  ["Rahul Mehta", "Senior Account Executive", "86", "104%", "green"],
  ["Priya Nair", "Account Executive", "78", "95%", "blue"],
  ["Ankit Verma", "Account Executive", "72", "88%", "orange"],
  ["Sneha Iyer", "SDR", "61", "76%", "red"],
  ["Karan Kapoor", "SDR", "55", "68%", "red"],
];

const topAccounts = [
  ["Acme Corporation", "Enterprise", "$245K", "+18%", "up"],
  ["Globex Corporation", "Enterprise", "$180K", "+24%", "up"],
  ["Stark Industries", "Mid-Market", "$92K", "+12%", "up"],
  ["Wayne Enterprises", "Mid-Market", "$78K", "+7%", "up"],
  ["Initech", "SMB", "$64K", "+15%", "up"],
];

const savedTemplates = [
  ["Sales Performance Report", "Tracks revenue, deals, and team performance.", "Default"],
  ["Pipeline Health Overview", "Monitors pipeline stages and deal progression.", ""],
  ["Team Activity Summary", "Analyzes team activity and productivity.", ""],
];

const scheduleRows = [
  ["Sales Performance Report", "Daily at 8:00 AM", true],
  ["Pipeline Health Overview", "Weekly on Monday", true],
  ["Team Activity Summary", "Monthly on 1st", false],
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function IconTile({ icon: Icon, tone = "blue", className = "" }: { icon: LucideIcon; tone?: Tone; className?: string }) {
  return (
    <div className={cx("grid h-12 w-12 shrink-0 place-items-center rounded-2xl", toneClasses[tone], className)}>
      <Icon className="h-5 w-5" aria-hidden="true" />
    </div>
  );
}

function Shell({
  activeTab,
  onTabChange,
  children,
}: {
  activeTab: TabId;
  onTabChange: (id: TabId) => void;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#f8fbff] pt-24 text-[#0f214f] sm:pt-28 lg:pt-32">

      <div className="mx-auto flex max-w-[1600px]">
        <SolutionSidebar<TabId>
          title="Dashboards & Reports"
          subtitle="Live analytics workspace"
          icon={BarChart3}
          items={sidebarItems}
          activeTab={activeTab}
          onTabChange={onTabChange}
          ctaTitle="Turn data into decisions faster."
          ctaText="Build live dashboards, scheduled reports, and executive-ready analytics around your actual workflow."
          ctaButtonText="Explore Dashboards"
          ctaItems={["Live business visibility", "Custom report builder", "Automated report delivery"]}
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
      <Link href="/solutions/dashboards-reports" className="hover:text-[#1593b5]">
        Dashboards & Reports
      </Link>
      <span>/</span>
      <span className="text-[#66728f]">{current}</span>
    </div>
  );
}

function PageSection({ children }: { children: ReactNode }) {
  return (
    <section className="min-w-0 flex-1 bg-white">
      <div className="mx-auto max-w-[min(95vw,1600px)] px-4 py-10 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

function PageHeader({
  current,
  title,
  subtitle,
  actions,
}: {
  current: string;
  title: string;
  subtitle: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-5">
      <div>
        <Breadcrumb current={current} />
        <h1 className="mt-5 text-5xl font-extrabold tracking-[-0.045em] text-[#0f214f] sm:text-6xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[#465374]">{subtitle}</p>
      </div>
      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </div>
  );
}

function StatGrid({ stats }: { stats: StatCard[] }) {
  return (
    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCardView key={stat.label} stat={stat} />
      ))}
    </div>
  );
}

function StatCardView({ stat }: { stat: StatCard }) {
  const Icon = stat.icon;

  return (
    <div className="rounded-[22px] border border-[#d7e1f2] bg-white p-5 shadow-[0_16px_44px_rgba(15,23,42,0.05)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold text-[#334766]">{stat.label}</p>
          <p className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-[#0f214f]">{stat.value}</p>
          <p className={cx("mt-2 text-xs font-bold", stat.note.startsWith("-") ? "text-red-500" : "text-emerald-600")}>{stat.note}</p>
        </div>
        <div className={cx("grid h-12 w-12 place-items-center rounded-full", toneClasses[stat.tone])}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
      <MiniSparkline tone={stat.tone} />
    </div>
  );
}

function FeatureCard({ data }: { data: FeatureCardData }) {
  const Icon = data.icon;

  return (
    <div className="rounded-[20px] border border-[#d7e1f2] bg-white p-5 shadow-[0_12px_34px_rgba(15,23,42,0.04)]">
      <div className="flex items-center gap-4">
        <IconTile icon={Icon} tone={data.tone} />
        <div>
          <h3 className="text-sm font-extrabold text-[#0f214f]">{data.title}</h3>
          <p className="mt-1.5 text-xs leading-5 text-[#465374]">{data.text}</p>
        </div>
      </div>
    </div>
  );
}

function MiniSparkline({ tone = "blue" }: { tone?: Tone }) {
  const stroke = {
    blue: "#2378ff",
    cyan: "#14c8d8",
    green: "#10b981",
    purple: "#7c3aed",
    orange: "#f59e0b",
    red: "#ef4444",
    slate: "#64748b",
  }[tone];

  return (
    <svg className="mt-4 h-10 w-full" viewBox="0 0 160 42" fill="none" aria-hidden="true">
      <path d="M3 32 C18 24 25 35 40 20 C56 5 68 29 82 17 C98 4 112 25 126 13 C139 3 149 10 157 8" stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function LineChartPanel({
  title,
  subtitle,
  height = "h-[300px]",
  forecast = false,
}: {
  title: string;
  subtitle?: string;
  height?: string;
  forecast?: boolean;
}) {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-extrabold text-[#0f214f]">{title}</h2>
          {subtitle ? <p className="mt-1 text-xs font-semibold text-[#66728f]">{subtitle}</p> : null}
        </div>
        <div className="flex gap-2">
          <button className="rounded-xl border border-[#d7e1f2] px-3 py-2 text-xs font-bold text-[#334766]">This Year</button>
          <button className="rounded-xl border border-[#d7e1f2] px-3 py-2 text-xs font-bold text-[#334766]">Monthly</button>
          <button className="grid h-9 w-9 place-items-center rounded-xl border border-[#d7e1f2] text-[#334766]">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

      <svg className={cx("mt-5 w-full", height)} viewBox="0 0 760 300" fill="none">
        {[50, 100, 150, 200, 250].map((y) => (
          <line key={y} x1="0" x2="760" y1={y} y2={y} stroke="#e9eef7" strokeDasharray="5 5" />
        ))}
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((label, i) => (
          <text key={label} x={20 + i * 62} y="290" fontSize="11" fill="#66728f">
            {label}
          </text>
        ))}
        <path d="M5 250 C40 238 60 225 95 210 C130 198 150 190 185 185 C222 180 245 140 275 130 C313 118 332 100 370 92 C408 84 430 70 465 65 C510 59 545 48 580 30" stroke="#2378ff" strokeWidth="4" fill="none" strokeLinecap="round" />
        {forecast ? (
          <>
            <path d="M580 30 C630 18 685 12 745 0" stroke="#2378ff" strokeWidth="3" strokeDasharray="8 8" />
            <path d="M580 70 C630 64 685 46 745 38" stroke="#8aa0c1" strokeWidth="2.5" strokeDasharray="5 7" />
            <path d="M580 105 C630 100 685 86 745 76" stroke="#ff4365" strokeWidth="2.5" strokeDasharray="5 7" />
          </>
        ) : null}
        <circle cx="580" cy="30" r="7" fill="#2378ff" />
        <g>
          <rect x="520" y="118" width="108" height="76" rx="14" fill="white" stroke="#d7e1f2" />
          <text x="540" y="140" fontSize="11" fontWeight="700" fill="#66728f">Aug 2025</text>
          <text x="540" y="164" fontSize="18" fontWeight="800" fill="#0f214f">$4.28M</text>
          <text x="540" y="184" fontSize="11" fontWeight="700" fill="#10b981">▲ 18.7% vs Jul</text>
        </g>
      </svg>
    </div>
  );
}

function DonutChart({
  value,
  label,
  legend,
}: {
  value: string;
  label: string;
  legend: Array<[string, string, string]>;
}) {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h2 className="text-lg font-extrabold text-[#0f214f]">{label}</h2>
      <div className="mt-5 grid gap-6 md:grid-cols-[180px_1fr] md:items-center">
        <div className="grid h-40 w-40 place-items-center rounded-full border-[22px] border-[#2378ff] border-r-[#14c8d8] border-b-[#10b981] border-l-[#f59e0b] bg-white">
          <div className="text-center">
            <p className="text-3xl font-extrabold text-[#0f214f]">{value}</p>
            <p className="text-xs font-bold text-[#66728f]">Total</p>
          </div>
        </div>
        <div className="space-y-3">
          {legend.map(([name, percent, count]) => (
            <div key={name} className="flex items-center justify-between gap-3 text-sm">
              <span className="font-semibold text-[#334766]">{name}</span>
              <span className="font-extrabold text-[#0f214f]">{percent}</span>
              <span className="text-[#66728f]">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FunnelChart({ title = "Pipeline Snapshot" }: { title?: string }) {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h2 className="text-lg font-extrabold text-[#0f214f]">{title}</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-[220px_1fr] md:items-center">
        <div className="space-y-2">
          {[
            "w-full bg-[#2378ff]",
            "w-[84%] bg-[#14c8d8]",
            "w-[66%] bg-[#10b981]",
            "w-[47%] bg-[#f59e0b]",
            "w-[28%] bg-red-500",
          ].map((cls, i) => (
            <div key={i} className={cx("mx-auto h-10 [clip-path:polygon(8%_0,92%_0,78%_100%,22%_100%)]", cls)} />
          ))}
        </div>
        <div className="space-y-3 text-sm">
          {[
            ["Prospecting", "$3.21M", "68 (31%)"],
            ["Qualification", "$2.94M", "54 (25%)"],
            ["Proposal", "$2.27M", "41 (19%)"],
            ["Negotiation", "$1.62M", "29 (13%)"],
            ["Closed Won", "$2.70M", "24 (12%)"],
          ].map(([stage, value, deals]) => (
            <div key={stage} className="grid grid-cols-3 border-b border-[#edf2f7] pb-2">
              <span className="font-semibold text-[#465374]">{stage}</span>
              <span className="font-extrabold text-[#0f214f]">{value}</span>
              <span className="text-[#66728f]">{deals}</span>
            </div>
          ))}
          <div className="grid grid-cols-3 pt-2 text-base font-extrabold text-[#0f214f]">
            <span>Total Pipeline</span>
            <span>$12.74M</span>
            <span>216</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function InsightList({ title, items }: { title: string; items: Array<[string, string, Tone]> }) {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h2 className="text-lg font-extrabold text-[#0f214f]">{title}</h2>
      <div className="mt-5 space-y-4">
        {items.map(([headline, text, tone]) => (
          <div key={headline} className="flex items-start gap-4 rounded-2xl border border-[#d7e1f2] p-4">
            <IconTile icon={tone === "green" ? TrendingUp : tone === "red" ? TrendingDown : Sparkles} tone={tone} className="h-10 w-10 rounded-xl" />
            <div>
              <p className={cx("text-sm font-extrabold", tone === "green" ? "text-emerald-600" : tone === "red" ? "text-red-500" : "text-[#145cb7]")}>{headline}</p>
              <p className="mt-1 text-xs leading-5 text-[#465374]">{text}</p>
            </div>
            <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-[#66728f]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function OverviewPage() {
  return (
    <PageSection>
      <PageHeader
        current="Overview"
        title="Dashboards & Reports Overview"
        subtitle="Turn live data into clarity and action. Monitor performance, uncover opportunities, and share insights that drive growth."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {overviewFeatures.map((item) => (
          <FeatureCard key={item.title} data={item} />
        ))}
      </div>

      <StatGrid stats={[
        { icon: CircleDollarSign, label: "Total Revenue", value: "$4.82M", note: "+16.2% vs last 30 days", tone: "blue" },
        { icon: CheckCircle2, label: "Closed Deals", value: "312", note: "+12.1% vs last 30 days", tone: "green" },
        { icon: Target, label: "Win Rate", value: "28.6%", note: "+4.3% vs last 30 days", tone: "purple" },
        { icon: CircleDollarSign, label: "Avg Deal Size", value: "$15.4K", note: "+8.7% vs last 30 days", tone: "cyan" },
      ]} />

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.45fr_0.85fr]">
        <LineChartPanel title="Revenue Over Time" subtitle="Actual Revenue vs Forecast" forecast />
        <div className="grid gap-6">
          <DonutChart
            value="1,248"
            label="Leads by Source"
            legend={[
              ["Website", "42%", "523"],
              ["Referral", "24%", "299"],
              ["Paid Search", "18%", "224"],
              ["Social Media", "10%", "125"],
              ["Other", "6%", "77"],
            ]}
          />
          <InsightList
            title="Insights at a Glance"
            items={[
              ["Revenue is trending up 16.2%", "Compared to the last 30 days.", "green"],
              ["3 opportunities decreased engagement", "Follow up before the deal goes cold.", "orange"],
              ["Top source: Website", "Website generated 42% of all leads.", "blue"],
            ]}
          />
        </div>
      </div>

      <section className="mt-6 rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <h2 className="text-xl font-extrabold text-[#0f214f]">Reporting Capabilities</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {reportingCapabilities.map((item) => (
            <FeatureCard key={item.title} data={item} />
          ))}
        </div>
      </section>
    </PageSection>
  );
}

function ExecutiveDashboardPage() {
  return (
    <PageSection>
      <PageHeader
        current="Executive Dashboard"
        title="Executive Dashboard"
        subtitle="High-level visibility into key performance metrics, pipeline health, and business outcomes—so you can lead with confidence."
        actions={
          <>
            <button className="inline-flex items-center gap-2 rounded-xl border border-[#d7e1f2] bg-white px-4 py-3 text-xs font-bold text-[#334766]"><CalendarDays className="h-4 w-4" /> May 1 – May 31, 2025</button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-[#d7e1f2] bg-white px-4 py-3 text-xs font-bold text-[#334766]"><Filter className="h-4 w-4" /> Filters</button>
          </>
        }
      />

      <StatGrid stats={statCards.executive} />

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.8fr_0.8fr]">
        <LineChartPanel title="Revenue Over Time" subtitle="Actual Revenue • Forecast • Target" forecast />
        <PerformanceSummary />
        <InsightList
          title="Key Insights"
          items={[
            ["Revenue is up 16.2%", "Driven by strong mid-market wins.", "blue"],
            ["Win rate improved by 3.4pp", "Better qualification and follow-up.", "cyan"],
            ["Enterprise pipeline grew 18%", "Keep momentum with key accounts.", "orange"],
          ]}
        />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.72fr_0.72fr]">
        <FunnelChart />
        <HealthScore />
        <AlertsPanel />
      </div>

      <section className="mt-6 rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-[#0f214f]">Department Performance</h2>
          <Link href="/#contact" className="text-xs font-extrabold text-[#145cb7]">View department report →</Link>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Sales", "$3.24M", "+17.8%", Users, "blue"],
            ["Marketing", "$2.11M", "+12.4%", Send, "cyan"],
            ["Support", "94%", "+4.2pp", Bell, "purple"],
            ["Operations", "87%", "+6.1pp", Settings2, "orange"],
          ].map(([label, value, note, Icon, tone]) => (
            <div key={label as string} className="rounded-[22px] border border-[#d7e1f2] p-5">
              <IconTile icon={Icon as LucideIcon} tone={tone as Tone} />
              <p className="mt-4 text-sm font-extrabold text-[#0f214f]">{label as string}</p>
              <p className="mt-2 text-3xl font-extrabold text-[#0f214f]">{value as string}</p>
              <p className="mt-1 text-xs font-bold text-emerald-600">{note as string} vs last month</p>
              <MiniSparkline tone={tone as Tone} />
            </div>
          ))}
        </div>
      </section>
    </PageSection>
  );
}

function PerformanceSummary() {
  const rows = [
    ["New Opportunities", "312", "+14.1%", "green"],
    ["Won Opportunities", "92", "+18.3%", "green"],
    ["Lost Opportunities", "28", "-10.2%", "red"],
    ["Avg. Deal Size", "$52.4K", "+8.7%", "green"],
    ["Sales Cycle Length", "36 days", "-2 days", "green"],
  ];

  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h2 className="text-lg font-extrabold text-[#0f214f]">Performance Summary</h2>
      <div className="mt-5 space-y-4">
        {rows.map(([label, value, delta, tone]) => (
          <div key={label} className="flex items-center justify-between border-b border-[#edf2f7] pb-3 text-sm">
            <span className="font-semibold text-[#465374]">{label}</span>
            <span className="font-extrabold text-[#0f214f]">{value}</span>
            <span className={cx("text-xs font-bold", tone === "red" ? "text-red-500" : "text-emerald-600")}>{delta}</span>
          </div>
        ))}
      </div>
      <Link href="/#contact" className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold text-[#145cb7]">
        View full performance report <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function HealthScore() {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 text-center shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h2 className="text-left text-lg font-extrabold text-[#0f214f]">Business Health Score</h2>
      <div className="mx-auto mt-7 grid h-40 w-40 place-items-center rounded-full border-[24px] border-[#14c8d8] border-l-[#f59e0b] border-b-[#10b981] bg-white">
        <div>
          <p className="text-5xl font-extrabold text-[#0f214f]">84</p>
          <p className="font-bold text-[#66728f]">Healthy</p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3 text-xs font-bold text-[#465374]">
        <span>Trend<br /><b className="text-emerald-600">+6 pts</b></span>
        <span>Industry<br /><b className="text-emerald-600">+12 pts</b></span>
        <span>Confidence<br /><b className="text-emerald-600">High</b></span>
      </div>
    </div>
  );
}

function AlertsPanel() {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h2 className="text-lg font-extrabold text-[#0f214f]">Alerts</h2>
      <div className="mt-5 space-y-4">
        {[
          ["3 deals at risk of slipping", "Need attention this week", "red"],
          ["2 forecasts below target", "Review and take action", "orange"],
          ["1 report scheduled", "Q2 Executive Summary tomorrow", "blue"],
        ].map(([title, text, tone]) => (
          <div key={title} className="flex gap-3">
            <IconTile icon={tone === "red" ? TrendingDown : tone === "orange" ? Bell : CalendarDays} tone={tone as Tone} className="h-10 w-10 rounded-xl" />
            <div>
              <p className={cx("text-sm font-extrabold", tone === "red" ? "text-red-600" : tone === "orange" ? "text-orange-500" : "text-[#145cb7]")}>{title}</p>
              <p className="text-xs text-[#66728f]">{text}</p>
            </div>
          </div>
        ))}
      </div>
      <Link href="/#contact" className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold text-[#145cb7]">
        View all alerts <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function SalesReportingPage() {
  return (
    <PageSection>
      <PageHeader
        current="Sales Reporting"
        title="Sales Reporting"
        subtitle="Track sales performance, analyze pipeline health, and uncover insights that drive revenue growth and team productivity."
        actions={
          <>
            <button className="inline-flex items-center gap-2 rounded-xl border border-[#d7e1f2] bg-white px-4 py-3 text-xs font-bold text-[#334766]"><CalendarDays className="h-4 w-4" /> May 1 – May 31, 2025</button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-[#d7e1f2] bg-white px-4 py-3 text-xs font-bold text-[#334766]"><Filter className="h-4 w-4" /> Filters</button>
            <button className="grid h-10 w-10 place-items-center rounded-xl border border-[#d7e1f2] bg-white text-[#334766]"><MoreHorizontal className="h-4 w-4" /></button>
          </>
        }
      />

      <StatGrid stats={statCards.sales} />

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_1.05fr_0.82fr]">
        <LineChartPanel title="Sales Trend" subtitle="Actual Revenue vs Goal" height="h-[250px]" forecast />
        <FunnelChart title="Pipeline by Stage" />
        <div className="grid gap-6">
          <InsightList title="Sales Insights" items={salesInsights as Array<[string, string, Tone]>} />
          <ForecastSummary />
        </div>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_1fr]">
        <QuotaChart />
        <TopPerformingReps />
      </div>

      <section className="mt-6 rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <div className="flex justify-between">
          <h2 className="text-xl font-extrabold text-[#0f214f]">Popular Sales Reports</h2>
          <Link href="/#contact" className="text-xs font-extrabold text-[#145cb7]">View all reports →</Link>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            [FileText, "Pipeline Report", "Analyze pipeline health and track opportunities by stage."],
            [Filter, "Conversion Report", "Track conversion rates across stages and identify bottlenecks."],
            [Gauge, "Territory Report", "Compare performance across regions and territories."],
            [BarChart3, "Forecast Report", "Review forecast accuracy and project future revenue."],
          ].map(([Icon, title, text]) => (
            <FeatureCard key={title as string} data={{ icon: Icon as LucideIcon, title: title as string, text: text as string, tone: "blue" }} />
          ))}
        </div>
      </section>
    </PageSection>
  );
}

function ForecastSummary() {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h2 className="text-lg font-extrabold text-[#0f214f]">Forecast Summary</h2>
      <div className="mt-5 space-y-4">
        {forecastRows.map(([label, value, percent]) => (
          <div key={label} className="flex items-center justify-between border-b border-[#edf2f7] pb-3 text-sm">
            <span className="font-semibold text-[#465374]">{label}</span>
            <span className="font-extrabold text-[#0f214f]">{value}</span>
            <span className="text-xs font-bold text-[#66728f]">{percent}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 h-3 rounded-full bg-[#edf2f7]">
        <div className="h-full w-[95%] rounded-full bg-[#2378ff]" />
      </div>
      <Link href="/#contact" className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold text-[#145cb7]">
        View full forecast <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function QuotaChart() {
  const reps = ["Alex", "Sarah", "James", "Priya", "Michael", "Daniel"];
  const values = [128, 112, 95, 88, 76, 62];

  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-extrabold text-[#0f214f]">Quota Attainment by Rep</h2>
        <button className="rounded-xl border border-[#d7e1f2] px-3 py-2 text-xs font-bold text-[#334766]">This Month</button>
      </div>
      <div className="mt-6 flex h-56 items-end gap-5 border-b border-l border-[#d7e1f2] px-4">
        {values.map((value, i) => (
          <div key={reps[i]} className="flex flex-1 flex-col items-center justify-end gap-3">
            <span className="text-xs font-extrabold text-[#2378ff]">{value}%</span>
            <div className="w-full rounded-t-xl bg-[#2378ff]" style={{ height: `${Math.max(value, 18)}%` }} />
            <span className="text-[10px] font-semibold text-[#66728f]">{reps[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TopPerformingReps() {
  const rows = [
    ["Alex Morgan", "26", "$1.24M", "32%", "128%"],
    ["Sarah Kim", "21", "$980K", "29%", "112%"],
    ["James Lee", "18", "$860K", "27%", "95%"],
    ["Priya Nair", "16", "$720K", "24%", "88%"],
    ["Michael Chen", "14", "$640K", "22%", "76%"],
  ];

  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-extrabold text-[#0f214f]">Top Performing Reps</h2>
        <button className="rounded-xl border border-[#d7e1f2] px-3 py-2 text-xs font-bold text-[#334766]">This Month</button>
      </div>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-xs">
          <thead className="text-[#66728f]">
            <tr>{["#", "Rep", "Deals Closed", "Revenue", "Win Rate", "Attainment"].map((head) => <th key={head} className="border-b border-[#d7e1f2] px-3 py-3">{head}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row[0]} className="border-b border-[#edf2f7]">
                <td className="px-3 py-3 font-bold">{index + 1}</td>
                <td className="px-3 py-3 font-extrabold text-[#0f214f]">{row[0]}</td>
                <td className="px-3 py-3">{row[1]}</td>
                <td className="px-3 py-3 font-bold">{row[2]}</td>
                <td className="px-3 py-3">{row[3]}</td>
                <td className="px-3 py-3"><span className="rounded-full bg-emerald-50 px-2 py-1 font-extrabold text-emerald-600">{row[4]}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link href="/#contact" className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold text-[#145cb7]">
        View all reps <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function RevenueAnalyticsPage() {
  return (
    <PageSection>
      <PageHeader
        current="Revenue Analytics"
        title="Revenue Analytics"
        subtitle="Track revenue health, forecast accuracy, and trend performance across your pipeline, segments, and time horizons."
        actions={
          <>
            <button className="inline-flex items-center gap-2 rounded-xl border border-[#d7e1f2] bg-white px-4 py-3 text-xs font-bold text-[#334766]"><CalendarDays className="h-4 w-4" /> May 1 – May 31, 2025</button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-[#d7e1f2] bg-white px-4 py-3 text-xs font-bold text-[#334766]"><Filter className="h-4 w-4" /> Filters</button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-[#d7e1f2] bg-white px-4 py-3 text-xs font-bold text-[#334766]"><Download className="h-4 w-4" /> Export</button>
          </>
        }
      />

      <StatGrid stats={statCards.revenue} />

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_1fr_0.72fr]">
        <LineChartPanel title="Revenue Forecast" subtitle="Committed • Best Case • Pipeline • Downside" forecast />
        <CohortTable />
        <div className="grid gap-6">
          <GaugePanel title="Forecast Confidence" value="87%" label="High" />
          <RiskRevenue />
          <GoalProgress />
        </div>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <DonutChart
          value="$4.82M"
          label="Revenue by Segment"
          legend={[
            ["Enterprise", "45%", "$2.18M"],
            ["Mid-Market", "28%", "$1.36M"],
            ["SMB", "17%", "$0.82M"],
            ["Strategic", "10%", "$0.46M"],
          ]}
        />
        <TopRevenueAccounts />
      </div>

      <section className="mt-6 rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0f214f]"><Sparkles className="h-5 w-5 text-[#145cb7]" /> Revenue Intelligence</h2>
        <div className="mt-5 grid gap-4 xl:grid-cols-3">
          <FeatureCard data={{ icon: TrendingUp, title: "Strong Upsell Momentum", text: "2 enterprise accounts are expanding. Total expansion potential is $420K in the next 90 days.", tone: "green" }} />
          <FeatureCard data={{ icon: TrendingDown, title: "At-Risk Deals Need Attention", text: "8 deals worth $425K are at high risk due to inactivity or competitor pressure.", tone: "purple" }} />
          <FeatureCard data={{ icon: Target, title: "Forecast on Track", text: "Your committed forecast is within 3% of goal with high confidence.", tone: "green" }} />
        </div>
      </section>
    </PageSection>
  );
}

function CohortTable() {
  const rows = [
    ["May ’25", "98%", "92%", "86%", "79%", "72%", "65%"],
    ["Apr ’25", "97%", "90%", "83%", "76%", "69%", "62%"],
    ["Mar ’25", "96%", "88%", "81%", "73%", "66%", "59%"],
    ["Feb ’25", "95%", "86%", "78%", "70%", "63%", "56%"],
    ["Jan ’25", "94%", "84%", "76%", "67%", "60%", "52%"],
  ];

  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-extrabold text-[#0f214f]">Revenue Cohort Retention</h2>
        <button className="rounded-xl border border-[#d7e1f2] px-3 py-2 text-xs font-bold text-[#334766]">Based on Close Date</button>
      </div>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[500px] text-center text-sm">
          <thead className="text-xs text-[#66728f]">
            <tr>{["Cohort", "M+1", "M+2", "M+3", "M+4", "M+5", "M+6"].map((h) => <th key={h} className="border-b border-[#d7e1f2] px-3 py-3">{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-b border-[#edf2f7]">
                {row.map((cell, i) => <td key={`${row[0]}-${cell}-${i}`} className={cx("px-3 py-3 font-bold", i === 0 ? "text-[#0f214f]" : "bg-[#eaf6ff] text-[#145cb7]")}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function GaugePanel({ title, value, label }: { title: string; value: string; label: string }) {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h2 className="text-lg font-extrabold text-[#0f214f]">{title}</h2>
      <p className="mt-4 text-xl font-extrabold text-emerald-600">{label}</p>
      <p className="mt-1 text-sm font-semibold text-[#66728f]">Overall forecast confidence</p>
      <div className="mx-auto mt-5 grid h-36 w-36 place-items-center rounded-t-full border-[16px] border-[#14c8d8] border-b-[#edf2f7] bg-white">
        <p className="text-3xl font-extrabold text-[#0f214f]">{value}</p>
      </div>
      <p className="mt-4 text-xs font-bold text-emerald-600">▲ 6pp vs last month</p>
    </div>
  );
}

function RiskRevenue() {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h2 className="text-lg font-extrabold text-[#0f214f]">At-Risk Revenue</h2>
      <p className="mt-4 text-3xl font-extrabold text-[#0f214f]">$1.02M <span className="text-sm text-[#66728f]">21 deals</span></p>
      <div className="mt-5 space-y-3 text-sm">
        {[
          ["High Risk", "$425K", "8 deals", "red"],
          ["Medium Risk", "$372K", "9 deals", "orange"],
          ["Low Risk", "$223K", "4 deals", "green"],
        ].map(([risk, value, deals, tone]) => (
          <div key={risk} className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2 font-semibold text-[#334766]"><span className={cx("h-2.5 w-2.5 rounded-full", tone === "red" ? "bg-red-500" : tone === "orange" ? "bg-orange-400" : "bg-emerald-500")} />{risk}</span>
            <span className="font-extrabold text-[#0f214f]">{value}</span>
            <span className="text-[#66728f]">{deals}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GoalProgress() {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <div className="flex justify-between">
        <h2 className="text-lg font-extrabold text-[#0f214f]">Goal Progress</h2>
        <Link href="/#contact" className="text-xs font-extrabold text-[#145cb7]">View goal</Link>
      </div>
      <p className="mt-4 text-xs font-bold text-[#66728f]">May 2025</p>
      <p className="mt-1 text-3xl font-extrabold text-[#0f214f]">$4.82M <span className="text-sm text-[#66728f]">/ $6.00M</span></p>
      <div className="mt-4 h-3 rounded-full bg-[#edf2f7]">
        <div className="h-full w-[80%] rounded-full bg-[#14c8d8]" />
      </div>
      <p className="mt-3 text-xs font-bold text-emerald-600">▲ 12% vs Apr 2025</p>
    </div>
  );
}

function TopRevenueAccounts() {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h2 className="text-lg font-extrabold text-[#0f214f]">Top Revenue Accounts</h2>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[620px] text-left text-xs">
          <thead className="text-[#66728f]">
            <tr>{["Account", "Segment", "MRR", "Growth", "Trend"].map((h) => <th key={h} className="border-b border-[#d7e1f2] px-3 py-3">{h}</th>)}</tr>
          </thead>
          <tbody>
            {topAccounts.map((row) => (
              <tr key={row[0]} className="border-b border-[#edf2f7]">
                <td className="px-3 py-3 font-extrabold text-[#0f214f]">{row[0]}</td>
                <td className="px-3 py-3 text-[#465374]">{row[1]}</td>
                <td className="px-3 py-3 font-bold text-[#0f214f]">{row[2]}</td>
                <td className="px-3 py-3 font-bold text-emerald-600">{row[3]}</td>
                <td className="px-3 py-3"><MiniSparkline tone="cyan" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link href="/#contact" className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold text-[#145cb7]">
        View all accounts <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function TeamPerformancePage() {
  return (
    <PageSection>
      <PageHeader
        current="Team Performance"
        title="Team Performance"
        subtitle="Gain visibility into rep, team, and manager performance to drive accountability, recognize wins, and take action where it matters most."
        actions={
          <>
            <button className="inline-flex items-center gap-2 rounded-xl border border-[#d7e1f2] bg-white px-4 py-3 text-xs font-bold text-[#334766]"><CalendarDays className="h-4 w-4" /> May 1 – May 31, 2025</button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-[#d7e1f2] bg-white px-4 py-3 text-xs font-bold text-[#334766]"><Filter className="h-4 w-4" /> Filters</button>
          </>
        }
      />

      <StatGrid stats={statCards.team} />

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.9fr_0.9fr]">
        <TeamLeaderboard />
        <PerformanceTrend />
        <TeamCategoryChart />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_1fr]">
        <CoachingOpportunities />
        <RecognitionPanel />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_0.9fr_1fr]">
        <KpiScorecards />
        <DonutChart
          value="1,248"
          label="Activity Mix"
          legend={[
            ["Calls", "38.6%", "482"],
            ["Emails", "25.0%", "312"],
            ["Meetings", "19.1%", "238"],
            ["Tasks", "10.3%", "128"],
            ["Other", "7.1%", "88"],
          ]}
        />
        <RecognitionPanel compact />
      </div>
    </PageSection>
  );
}

function TeamLeaderboard() {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-extrabold text-[#0f214f]">Team Leaderboard</h2>
        <button className="rounded-xl border border-[#d7e1f2] px-3 py-2 text-xs font-bold text-[#334766]">All Teams</button>
      </div>
      <div className="mt-5 space-y-4">
        {teamRows.map(([name, role, score, goal, tone], i) => (
          <div key={name} className="grid grid-cols-[32px_1fr_48px_56px_70px] items-center gap-3 text-xs">
            <span className="font-bold text-[#66728f]">{i + 1}</span>
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#14c8d8] to-[#145cb7] text-[10px] font-extrabold text-white">{name.split(" ").map((x) => x[0]).join("")}</div>
              <div><p className="font-extrabold text-[#0f214f]">{name}</p><p className="text-[#66728f]">{role}</p></div>
            </div>
            <span className={cx("rounded-full px-2 py-1 text-center font-extrabold", toneClasses[tone as Tone])}>{score}</span>
            <span className={cx("font-extrabold", tone === "red" ? "text-red-500" : tone === "orange" ? "text-orange-500" : "text-emerald-600")}>{goal}</span>
            <MiniSparkline tone={tone as Tone} />
          </div>
        ))}
      </div>
      <Link href="/#contact" className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold text-[#145cb7]">
        View full leaderboard <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function PerformanceTrend() {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-extrabold text-[#0f214f]">Performance Trend</h2>
        <button className="rounded-xl border border-[#d7e1f2] px-3 py-2 text-xs font-bold text-[#334766]">Last 30 Days</button>
      </div>
      <MiniMultiLineChart />
      <Link href="/#contact" className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold text-[#145cb7]">
        View trend analysis <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function TeamCategoryChart() {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-extrabold text-[#0f214f]">Team Performance by Category</h2>
        <button className="rounded-xl border border-[#d7e1f2] px-3 py-2 text-xs font-bold text-[#334766]">All Teams</button>
      </div>
      <div className="mt-7 flex h-56 items-end gap-7 border-b border-l border-[#d7e1f2] px-5">
        {["Enterprise", "Mid-Market", "SMB", "SDR"].map((label, i) => (
          <div key={label} className="flex flex-1 flex-col items-center justify-end gap-2">
            <div className="flex w-12 flex-col overflow-hidden rounded-t-xl">
              <span className="h-10 bg-orange-400" />
              <span className="h-12 bg-purple-500" />
              <span className="h-14 bg-[#2378ff]" />
              <span className={cx("bg-emerald-500", i === 0 ? "h-16" : i === 1 ? "h-14" : "h-12")} />
            </div>
            <span className="text-[10px] font-semibold text-[#66728f]">{label}</span>
          </div>
        ))}
      </div>
      <Link href="/#contact" className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold text-[#145cb7]">
        View detailed breakdown <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function MiniMultiLineChart() {
  return (
    <svg className="mt-6 h-52 w-full" viewBox="0 0 420 220" fill="none">
      {[45, 90, 135, 180].map((y) => <line key={y} x1="0" x2="420" y1={y} y2={y} stroke="#edf2f7" />)}
      <path d="M6 180 C35 150 55 142 82 125 C120 100 145 112 174 82 C213 45 243 68 278 45 C330 15 360 40 414 20" stroke="#14c8d8" strokeWidth="4" fill="none" />
      <path d="M6 195 C40 168 65 160 96 145 C130 128 160 136 198 105 C240 72 260 95 300 78 C342 55 370 68 414 48" stroke="#2378ff" strokeWidth="4" fill="none" />
      <path d="M6 205 C40 190 74 175 105 166 C148 152 188 151 220 132 C270 103 314 118 358 88 C380 73 396 78 414 70" stroke="#8aa0c1" strokeWidth="3" strokeDasharray="5 6" fill="none" />
    </svg>
  );
}

function CoachingOpportunities() {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-extrabold text-[#0f214f]">Top Coaching Opportunities</h2>
        <Link href="/#contact" className="text-xs font-extrabold text-[#145cb7]">View all insights →</Link>
      </div>
      <div className="mt-5 space-y-3">
        {[
          ["Response time is above target for 3 team members.", "Faster follow-up improves conversion by 23%.", "High Impact", "red"],
          ["Activity levels are low for 2 SDRs.", "Increasing daily outreach can boost pipeline.", "Medium Impact", "orange"],
          ["3 reps are behind on goal attainment.", "Focus on key accounts and next steps.", "High Impact", "purple"],
        ].map(([title, text, badge, tone]) => (
          <div key={title} className="grid gap-4 rounded-2xl border border-[#d7e1f2] p-4 md:grid-cols-[1fr_auto_auto] md:items-center">
            <div>
              <p className="text-sm font-extrabold text-[#0f214f]">{title}</p>
              <p className="mt-1 text-xs text-[#66728f]">{text}</p>
            </div>
            <span className={cx("rounded-full px-3 py-1 text-xs font-bold", toneClasses[tone as Tone])}>{badge}</span>
            <button className="rounded-xl border border-[#d7e1f2] px-3 py-2 text-xs font-bold text-[#145cb7]">Review</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function KpiScorecards() {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h2 className="text-lg font-extrabold text-[#0f214f]">KPI Scorecards</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-4">
        {[
          ["Overall KPI Score", "78", "+8.2%"],
          ["Activity Score", "71", "+6.5%"],
          ["Engagement Score", "74", "+9.1%"],
          ["Goal Score", "86", "+10.3%"],
        ].map(([label, value, note]) => (
          <div key={label} className="rounded-2xl border border-[#d7e1f2] p-4">
            <p className="text-xs font-bold text-[#66728f]">{label}</p>
            <p className="mt-3 text-3xl font-extrabold text-[#0f214f]">{value}</p>
            <p className="mt-1 text-xs font-bold text-emerald-600">{note} vs last month</p>
            <MiniSparkline tone="blue" />
          </div>
        ))}
      </div>
    </div>
  );
}

function RecognitionPanel({ compact = false }: { compact?: boolean }) {
  const rows = [
    ["Meera Shah", "Highest KPI Score", "92"],
    ["Rahul Mehta", "Most Meetings Held", "48"],
    ["Priya Nair", "Top Goal Attainment", "112%"],
  ];

  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-extrabold text-[#0f214f]">Recognition & Highlights</h2>
        {!compact ? <button className="rounded-xl border border-[#d7e1f2] px-3 py-2 text-xs font-bold text-[#334766]">This Month</button> : null}
      </div>
      <div className="mt-5 space-y-4">
        {rows.map(([name, reason, score], i) => (
          <div key={name} className="flex items-center justify-between gap-4 rounded-2xl border border-[#d7e1f2] p-3">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-orange-50 text-orange-500">🏆</span>
              <div>
                <p className="text-sm font-extrabold text-[#0f214f]">{name}</p>
                <p className="text-xs text-[#66728f]">{reason}</p>
              </div>
            </div>
            <span className={cx("rounded-full px-3 py-1 text-xs font-extrabold", i === 0 ? "bg-emerald-50 text-emerald-600" : "bg-[#eef6ff] text-[#145cb7]")}>{score}</span>
          </div>
        ))}
      </div>
      <Link href="/#contact" className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold text-[#145cb7]">
        View all recognition <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function CustomReportsPage() {
  return (
    <PageSection>
      <PageHeader
        current="Custom Reports"
        title="Custom Reports"
        subtitle="Create focused reports around your exact business questions — sales, support, operations, activity, revenue, and custom CRM fields."
      />

      <section className="mt-8 rounded-[30px] border border-[#d7e1f2] bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            [Filter, "Flexible Filters", "Filter by source, rep, stage, region, date, team, or custom fields.", "blue"],
            [Layers3, "Saved Views", "Save recurring views for managers, sales teams, and leadership.", "cyan"],
            [Database, "Multi-Source Data", "Combine CRM, sales, support, marketing, and external data.", "green"],
            [Share2, "Stakeholder Sharing", "Share live views or export polished PDFs and spreadsheets.", "purple"],
          ].map(([Icon, title, text, tone]) => (
            <FeatureCard key={title as string} data={{ icon: Icon as LucideIcon, title: title as string, text: text as string, tone: tone as Tone }} />
          ))}
        </div>
      </section>

      <div className="mt-6 grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <ReportTemplateList />
        <CustomReportPreview />
      </div>
    </PageSection>
  );
}

function ReportTemplateList() {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <div className="flex justify-between">
        <h2 className="text-lg font-extrabold text-[#0f214f]">Saved Report Templates</h2>
        <Link href="/#contact" className="text-xs font-extrabold text-[#145cb7]">View all →</Link>
      </div>
      <div className="mt-5 space-y-4">
        {savedTemplates.map(([title, text, badge]) => (
          <div key={title} className="flex items-center justify-between gap-4 rounded-2xl border border-[#d7e1f2] p-4">
            <div className="flex items-center gap-3">
              <IconTile icon={FileText} tone="blue" className="h-10 w-10 rounded-xl" />
              <div>
                <p className="text-sm font-extrabold text-[#0f214f]">{title}</p>
                <p className="text-xs text-[#66728f]">{text}</p>
              </div>
            </div>
            {badge ? <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">{badge}</span> : <MoreHorizontal className="h-4 w-4 text-[#66728f]" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function CustomReportPreview() {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-extrabold text-[#0f214f]">Custom Report Preview</h2>
          <p className="mt-1 text-xs text-[#66728f]">Revenue by team, stage, owner, and source.</p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-xl border border-[#d7e1f2] px-3 py-2 text-xs font-bold">Save</button>
          <button className="rounded-xl bg-[#145cb7] px-3 py-2 text-xs font-bold text-white">Run Report</button>
        </div>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-4">
        {statCards.builder.map((stat) => <StatCardView key={stat.label} stat={stat} />)}
      </div>
      <div className="mt-5 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <LineChartPanel title="Revenue Over Time" subtitle="This Period vs Prior Period" height="h-[220px]" forecast />
        <HorizontalBarChart title="Revenue by Deal Stage" />
      </div>
    </div>
  );
}

function ReportBuilderPage() {
  return (
    <PageSection>
      <PageHeader
        current="Report Builder"
        title="Report Builder"
        subtitle="Create custom reports in minutes — no code required."
        actions={
          <>
            <button className="rounded-xl border border-[#d7e1f2] bg-white px-4 py-3 text-xs font-bold text-[#334766]">Save</button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-[#d7e1f2] bg-white px-4 py-3 text-xs font-bold text-[#334766]">Sales Performance Report <ChevronDown className="h-4 w-4" /></button>
            <button className="rounded-xl bg-[#145cb7] px-4 py-3 text-xs font-bold text-white">Run Report</button>
          </>
        }
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          [Settings2, "Drag & Drop Builder", "Add, filter, and organize fields with ease.", "purple"],
          [FileText, "Saved Templates", "Start from pre-built templates or save your own.", "purple"],
          [Database, "Multi-Source Data", "Combine data from CRM, sales, and external sources.", "purple"],
          [Share2, "Export & Share", "Export, schedule, and share reports in one click.", "blue"],
        ].map(([Icon, title, text, tone]) => (
          <FeatureCard key={title as string} data={{ icon: Icon as LucideIcon, title: title as string, text: text as string, tone: tone as Tone }} />
        ))}
      </div>

      <section className="mt-6 grid gap-0 overflow-hidden rounded-[28px] border border-[#d7e1f2] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.05)] xl:grid-cols-[240px_1fr_260px]">
        <BuilderSidebar />
        <BuilderCanvas />
        <BuilderProperties />
      </section>

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <ReportTemplateList />
        <ScheduledDeliveryPanel />
        <ExportSharePanel />
      </div>
    </PageSection>
  );
}

function BuilderSidebar() {
  return (
    <aside className="border-r border-[#d7e1f2] p-5">
      <h2 className="text-sm font-extrabold text-[#0f214f]">Data Sources</h2>
      <button className="mt-3 w-full rounded-xl border border-[#d7e1f2] px-3 py-2 text-left text-xs font-bold text-[#334766]">CRM + Sales Data</button>
      <div className="mt-3 flex items-center gap-2 rounded-xl border border-[#d7e1f2] px-3 py-2 text-xs text-[#66728f]">
        <Search className="h-4 w-4" /> Search fields...
      </div>
      <div className="mt-5 flex gap-5 text-xs font-bold">
        <span className="text-[#145cb7]">All Fields</span>
        <span className="text-[#66728f]">Favorites</span>
      </div>
      <div className="mt-5 space-y-5">
        {[
          ["Sales", ["Deal Name", "Deal Owner", "Account Name", "Close Date", "Stage", "Amount", "Probability", "Deal Type"]],
          ["Accounts", ["Company Size", "Industry", "Location"]],
          ["Contacts", ["Contact Name", "Role", "Email"]],
          ["Activities", ["Calls", "Meetings", "Tasks"]],
          ["Custom Fields", ["Region", "Plan", "Segment"]],
        ].map(([group, fields]) => (
          <div key={group as string}>
            <p className="text-xs font-extrabold text-[#0f214f]">{group as string}</p>
            <div className="mt-2 space-y-2">
              {(fields as string[]).map((field) => (
                <p key={field} className="flex items-center gap-2 text-xs font-semibold text-[#465374]">
                  <span className="grid h-5 w-5 place-items-center rounded bg-[#eef6ff] text-[#145cb7]">▣</span>
                  {field}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full rounded-xl border border-[#d7e1f2] px-3 py-2 text-xs font-extrabold text-[#145cb7]">+ Add Calculation Field</button>
    </aside>
  );
}

function BuilderCanvas() {
  return (
    <div className="p-5">
      <div className="flex flex-wrap gap-2">
        {["Close Date: Last 90 Days", "Deal Type: is any value", "Owner: is any value", "+ Add filter"].map((filter) => (
          <span key={filter} className="rounded-lg bg-[#eef6ff] px-3 py-2 text-xs font-bold text-[#145cb7]">{filter}</span>
        ))}
      </div>
      <StatGrid stats={statCards.builder} />
      <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_0.9fr]">
        <LineChartPanel title="Revenue Over Time" subtitle="This Period vs Prior Period" height="h-[230px]" forecast />
        <HorizontalBarChart title="Revenue by Deal Stage" />
      </div>
      <TopDealsTable />
    </div>
  );
}

function BuilderProperties() {
  return (
    <aside className="border-l border-[#d7e1f2] p-5">
      <h2 className="text-sm font-extrabold text-[#0f214f]">Chart Properties</h2>
      <div className="mt-4 space-y-5">
        {[
          ["Chart", "Line Chart"],
          ["X-Axis", "Close Date"],
          ["Y-Axis (Left)", "Sum of Amount"],
          ["Compare To", "Prior Period"],
          ["Breakdown by", "Add a field"],
        ].map(([label, value]) => (
          <div key={label}>
            <p className="mb-2 text-xs font-extrabold text-[#334766]">{label}</p>
            <button className="flex w-full items-center justify-between rounded-xl border border-[#d7e1f2] px-3 py-2 text-left text-xs font-bold text-[#465374]">{value}<ChevronDown className="h-4 w-4" /></button>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-xs font-extrabold text-[#334766]">Show data points</p>
        <span className="relative h-6 w-11 rounded-full bg-[#145cb7]"><span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white" /></span>
      </div>
      <button className="mt-5 text-xs font-extrabold text-[#0f214f]">› Advanced Options</button>
    </aside>
  );
}

function HorizontalBarChart({ title }: { title: string }) {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h2 className="text-lg font-extrabold text-[#0f214f]">{title}</h2>
      <div className="mt-6 space-y-4">
        {[
          ["Closed Won", "$2.45M", "100%"],
          ["Proposal", "$1.22M", "58%"],
          ["Negotiation", "$0.78M", "42%"],
          ["Qualification", "$0.23M", "20%"],
          ["Discovery", "$0.14M", "14%"],
        ].map(([label, value, width]) => (
          <div key={label} className="grid grid-cols-[120px_1fr_70px] items-center gap-4 text-xs">
            <span className="font-semibold text-[#465374]">{label}</span>
            <div className="h-4 rounded-full bg-[#edf2f7]"><div className="h-full rounded-full bg-[#2378ff]" style={{ width }} /></div>
            <span className="font-bold text-[#0f214f]">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TopDealsTable() {
  const rows = [
    ["Acme Corp – Expansion", "Acme Corporation", "James Lee", "Closed Won", "Jun 20, 2025", "$520,000"],
    ["Northwind – New Logo", "Northwind Traders", "Sarah Kim", "Proposal", "Jul 10, 2025", "$285,000"],
    ["BluePeak – Implementation", "BluePeak Solutions", "Alex Morgan", "Negotiation", "Jul 22, 2025", "$210,000"],
    ["Stark Industries – Upgrade", "Stark Industries", "Taylor Brooks", "Closed Won", "Jun 18, 2025", "$185,000"],
    ["Globex – Renewal", "Globex Corporation", "Jordan Ellis", "Qualification", "Jul 5, 2025", "$142,000"],
  ];

  return (
    <div className="mt-5 rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h2 className="text-lg font-extrabold text-[#0f214f]">Top Performing Deals</h2>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-xs">
          <thead className="text-[#66728f]">
            <tr>{["Deal Name", "Account Name", "Owner", "Stage", "Close Date", "Amount"].map((h) => <th key={h} className="border-b border-[#d7e1f2] px-3 py-3">{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-b border-[#edf2f7]">
                {row.map((cell, i) => <td key={`${row[0]}-${i}`} className={cx("px-3 py-3", i === 0 || i === 5 ? "font-extrabold text-[#0f214f]" : "font-semibold text-[#465374]")}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ScheduledDeliveryPanel() {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <div className="flex justify-between">
        <h2 className="text-lg font-extrabold text-[#0f214f]">Scheduled Delivery</h2>
        <Link href="/#contact" className="text-xs font-extrabold text-[#145cb7]">Manage all →</Link>
      </div>
      <div className="mt-5 space-y-4">
        {scheduleRows.map(([title, cadence, enabled]) => (
          <div key={title as string} className="flex items-center justify-between rounded-2xl border border-[#d7e1f2] p-4">
            <div className="flex items-center gap-3"><IconTile icon={CalendarDays} tone="blue" className="h-10 w-10 rounded-xl" /><div><p className="text-sm font-extrabold text-[#0f214f]">{title as string}</p><p className="text-xs text-[#66728f]">{cadence as string}</p></div></div>
            <span className={cx("relative h-6 w-11 rounded-full", enabled ? "bg-[#145cb7]" : "bg-[#cbd5e1]")}><span className={cx("absolute top-1 h-4 w-4 rounded-full bg-white", enabled ? "right-1" : "left-1")} /></span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExportSharePanel() {
  return (
    <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
      <h2 className="text-lg font-extrabold text-[#0f214f]">Export & Share</h2>
      <div className="mt-5 space-y-3">
        {[
          [Download, "Export to Excel", "Download .xlsx file"],
          [Download, "Export to PDF", "Download .pdf file"],
          [Share2, "Share Report", "Send a shareable link"],
          [Grid2X2, "Connect to Dashboard", "Add to existing dashboard"],
        ].map(([Icon, title, text]) => (
          <div key={title as string} className="flex items-center gap-3 rounded-2xl border border-[#d7e1f2] p-4">
            <IconTile icon={Icon as LucideIcon} tone="blue" className="h-10 w-10 rounded-xl" />
            <div><p className="text-sm font-extrabold text-[#0f214f]">{title as string}</p><p className="text-xs text-[#66728f]">{text as string}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScheduledReportsPage() {
  return (
    <PageSection>
      <PageHeader
        current="Scheduled Reports"
        title="Scheduled Reports"
        subtitle="Automate report delivery for leaders, managers, sales reps, and stakeholders — daily, weekly, monthly, or event-based."
      />

      <section className="mt-8 grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <ScheduledDeliveryPanel />
        <div className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
          <h2 className="text-lg font-extrabold text-[#0f214f]">Delivery Channels</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              [Bell, "In-App Notification", "Notify team inside CRM."],
              [Send, "Email Digest", "Send scheduled email summaries."],
              [Download, "PDF Attachment", "Attach polished PDF reports."],
              [Share2, "Secure Link", "Share password-safe live reports."],
            ].map(([Icon, title, text]) => (
              <FeatureCard key={title as string} data={{ icon: Icon as LucideIcon, title: title as string, text: text as string, tone: "blue" }} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <h2 className="text-xl font-extrabold text-[#0f214f]">Scheduled Report Calendar</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-7">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
            <div key={day} className="min-h-[170px] rounded-2xl border border-[#d7e1f2] bg-[#fbfdff] p-4">
              <p className="text-sm font-extrabold text-[#0f214f]">{day}</p>
              <div className="mt-4 space-y-2">
                {i < 5 ? (
                  <>
                    <span className="block rounded-xl bg-[#eef6ff] px-3 py-2 text-xs font-bold text-[#145cb7]">Sales Summary</span>
                    {i % 2 === 0 ? <span className="block rounded-xl bg-cyan-50 px-3 py-2 text-xs font-bold text-[#1593b5]">Pipeline Health</span> : null}
                    {i === 4 ? <span className="block rounded-xl bg-purple-50 px-3 py-2 text-xs font-bold text-purple-600">Exec Weekly</span> : null}
                  </>
                ) : (
                  <span className="text-xs text-[#66728f]">No scheduled reports</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageSection>
  );
}

function FinalCTAPage() {
  return (
    <PageSection>
      <section className="overflow-hidden rounded-[34px] border border-[#d7e1f2] bg-white p-8 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Breadcrumb current="Final CTA" />
            <h1 className="mt-5 text-5xl font-extrabold tracking-[-0.045em] text-[#0f214f] sm:text-6xl">
              See every number. Understand every move.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#465374]">
              HNX Dashboards & Reports turns your CRM data into a live decision layer — revenue, sales, teams, pipeline, activity, forecasts, and custom reports in one place.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Button href="/#contact" size="lg" showArrow>
                Book a CRM Consultation
              </Button>
              <Button href="/crm-demo" variant="secondary" size="lg" showArrow>
                View CRM Systems
              </Button>
            </div>
          </div>

          <div className="relative min-h-[360px] rounded-[30px] border border-[#d7e1f2] bg-gradient-to-br from-[#f8fbff] to-[#eafcff] p-7">
            <div className="absolute left-10 top-12 rounded-[22px] border border-[#d7e1f2] bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
              <p className="text-xs font-bold text-[#66728f]">Revenue</p>
              <p className="mt-2 text-3xl font-extrabold text-[#0f214f]">$4.82M</p>
              <MiniSparkline tone="blue" />
            </div>
            <div className="absolute right-8 top-20 rounded-[22px] border border-[#d7e1f2] bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
              <p className="text-xs font-bold text-[#66728f]">Win Rate</p>
              <p className="mt-2 text-3xl font-extrabold text-[#0f214f]">28.6%</p>
              <MiniSparkline tone="purple" />
            </div>
            <div className="absolute bottom-10 left-1/2 grid h-40 w-40 -translate-x-1/2 place-items-center rounded-full border-[24px] border-[#14c8d8] border-r-[#2378ff] border-b-[#10b981] border-l-[#f59e0b] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
              <div className="text-center">
                <BarChart3 className="mx-auto h-8 w-8 text-[#145cb7]" />
                <p className="mt-1 text-xl font-extrabold text-[#0f214f]">Live</p>
                <p className="text-xs font-bold text-[#66728f]">Reports</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageSection>
  );
}

export default function DashboardsReportsPage() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const renderPage = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewPage />;
      case "executive-dashboard":
        return <ExecutiveDashboardPage />;
      case "sales-reporting":
        return <SalesReportingPage />;
      case "revenue-analytics":
        return <RevenueAnalyticsPage />;
      case "team-performance":
        return <TeamPerformancePage />;
      case "custom-reports":
        return <CustomReportsPage />;
      case "report-builder":
        return <ReportBuilderPage />;
      case "scheduled-reports":
        return <ScheduledReportsPage />;
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
