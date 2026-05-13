import type { ServiceItem } from "@/data/services";
import type { ReactNode } from "react";
import {
  BarChart3,
  Bot,
  Boxes,
  CheckCircle2,
  Cloud,
  Code2,
  Headphones,
  LayoutDashboard,
  Layers3,
  Network,
  Palette,
  Rocket,
  SearchCheck,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type ServiceHeroVisualProps = {
  service: ServiceItem;
};

type MetricTile = {
  label: string;
  value: string;
  icon: LucideIcon;
};

const visualMetrics: Record<ServiceItem["visualType"], MetricTile[]> = {
  website: [
    { label: "Page Speed", value: "98", icon: Rocket },
    { label: "SEO Ready", value: "A+", icon: SearchCheck },
    { label: "Lead Forms", value: "Live", icon: LayoutDashboard },
    { label: "Mobile", value: "100%", icon: Smartphone },
  ],
  saas: [
    { label: "MRR", value: "INR 4.2L", icon: BarChart3 },
    { label: "Users", value: "1.8K", icon: Network },
    { label: "Billing", value: "Auto", icon: Layers3 },
    { label: "Roles", value: "Secure", icon: ShieldCheck },
  ],
  mobile: [
    { label: "iOS + Android", value: "Ready", icon: Smartphone },
    { label: "Payments", value: "Built-in", icon: Layers3 },
    { label: "Push", value: "Live", icon: Rocket },
    { label: "Backend", value: "Synced", icon: ServerCog },
  ],
  crm: [
    { label: "Leads", value: "428", icon: Network },
    { label: "Tasks", value: "64", icon: CheckCircle2 },
    { label: "Reports", value: "Live", icon: BarChart3 },
    { label: "AI Insight", value: "On", icon: Bot },
  ],
  ai: [
    { label: "Lead Score", value: "91%", icon: Sparkles },
    { label: "Replies", value: "Drafted", icon: Bot },
    { label: "Docs", value: "Summarized", icon: LayoutDashboard },
    { label: "Triggers", value: "Active", icon: Workflow },
  ],
  workflow: [
    { label: "Trigger", value: "Captured", icon: Workflow },
    { label: "Condition", value: "Matched", icon: CheckCircle2 },
    { label: "Action", value: "Queued", icon: Rocket },
    { label: "Alerts", value: "Sent", icon: Layers3 },
  ],
  api: [
    { label: "REST", value: "API", icon: Code2 },
    { label: "Auth", value: "Secure", icon: ShieldCheck },
    { label: "DB", value: "Linked", icon: ServerCog },
    { label: "Hooks", value: "Ready", icon: Network },
  ],
  integration: [
    { label: "CRM", value: "Center", icon: Network },
    { label: "WhatsApp", value: "Synced", icon: Smartphone },
    { label: "Payments", value: "Linked", icon: Layers3 },
    { label: "Reports", value: "Live", icon: BarChart3 },
  ],
  devops: [
    { label: "Build", value: "Pass", icon: Code2 },
    { label: "Tests", value: "Green", icon: CheckCircle2 },
    { label: "Deploy", value: "Auto", icon: Rocket },
    { label: "Uptime", value: "99.9%", icon: BarChart3 },
  ],
  cloud: [
    { label: "App", value: "Scaled", icon: Cloud },
    { label: "Database", value: "Safe", icon: ServerCog },
    { label: "Storage", value: "Ready", icon: Boxes },
    { label: "Monitor", value: "Live", icon: BarChart3 },
  ],
  support: [
    { label: "Tickets", value: "12", icon: Headphones },
    { label: "Uptime", value: "99.9%", icon: BarChart3 },
    { label: "Fixes", value: "Tracked", icon: Wrench },
    { label: "Updates", value: "Planned", icon: CheckCircle2 },
  ],
  security: [
    { label: "Access", value: "Roles", icon: ShieldCheck },
    { label: "Blocked", value: "248", icon: CheckCircle2 },
    { label: "Audit", value: "Live", icon: LayoutDashboard },
    { label: "API", value: "Protected", icon: ServerCog },
  ],
  design: [
    { label: "Wireframes", value: "Mapped", icon: LayoutDashboard },
    { label: "Palette", value: "System", icon: Palette },
    { label: "Mobile", value: "Screens", icon: Smartphone },
    { label: "Prototype", value: "Ready", icon: Sparkles },
  ],
  landing: [
    { label: "CTA", value: "Hero", icon: Rocket },
    { label: "Lead Form", value: "Ready", icon: LayoutDashboard },
    { label: "Conversion", value: "98%", icon: BarChart3 },
    { label: "Trust", value: "Badges", icon: ShieldCheck },
  ],
  seo: [
    { label: "Indexing", value: "Clean", icon: SearchCheck },
    { label: "Schema", value: "Valid", icon: CheckCircle2 },
    { label: "Traffic", value: "+42%", icon: BarChart3 },
    { label: "Tracking", value: "Live", icon: LayoutDashboard },
  ],
  brand: [
    { label: "Logo", value: "Kit", icon: Sparkles },
    { label: "Colors", value: "System", icon: Palette },
    { label: "Type", value: "Guide", icon: LayoutDashboard },
    { label: "Social", value: "Ready", icon: Smartphone },
  ],
};

function Frame({
  service,
  title,
  children,
  className = "",
}: {
  service: ServiceItem;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/86 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.18)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/80 dark:shadow-[0_30px_90px_rgba(0,0,0,0.42)] ${className}`}
    >
      <div className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-linear-to-br ${service.accent} opacity-20 blur-3xl`} />
      <div className="relative flex items-center justify-between border-b border-slate-200/80 px-3 pb-3 dark:border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <p className="hidden text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 sm:block">
          {title}
        </p>
        <span className={`h-8 w-8 rounded-xl bg-linear-to-br ${service.accent} shadow-[0_12px_32px_rgba(37,99,235,0.2)]`} />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

function MetricGrid({ service, compact = false }: { service: ServiceItem; compact?: boolean }) {
  const metrics = visualMetrics[service.visualType];

  return (
    <div className={`grid gap-3 ${compact ? "grid-cols-2" : "grid-cols-2 xl:grid-cols-4"}`}>
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div
            key={metric.label}
            className="rounded-2xl border border-slate-200/80 bg-white/78 p-3 shadow-[0_12px_30px_rgba(15,23,42,0.07)] dark:border-white/10 dark:bg-white/7"
          >
            <div className="flex items-center justify-between gap-3">
              <span className={`grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br ${service.accent} text-white`}>
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-black text-slate-950 dark:text-white">{metric.value}</span>
            </div>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
              {metric.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function MiniChart({ service, bars = [46, 62, 55, 78, 68, 88, 74] }: { service: ServiceItem; bars?: number[] }) {
  return (
    <div className="flex h-32 items-end gap-2 rounded-2xl border border-slate-200/80 bg-slate-50/90 p-4 dark:border-white/10 dark:bg-white/5">
      {bars.map((height, index) => (
        <span
          key={`${height}-${index}`}
          className={`flex-1 rounded-t-xl bg-linear-to-t ${service.accent} shadow-[0_10px_24px_rgba(37,99,235,0.16)]`}
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

function ProgressRows({ service, rows }: { service: ServiceItem; rows: string[] }) {
  return (
    <div className="space-y-3">
      {rows.map((row, index) => (
        <div key={row} className="rounded-2xl border border-slate-200/80 bg-white/76 p-3 dark:border-white/10 dark:bg-white/7">
          <div className="flex items-center gap-3">
            <span className={`h-9 w-9 rounded-xl bg-linear-to-br ${service.accent} ${index > 0 ? "opacity-80" : ""}`} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-bold text-slate-900 dark:text-white">{row}</p>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                <span
                  className={`block h-full rounded-full bg-linear-to-r ${service.accent}`}
                  style={{ width: `${88 - index * 10}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function WebsiteVisual({ service }: ServiceHeroVisualProps) {
  const heroImageUrl =
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85";

  const websiteMetrics: Array<[string, string, LucideIcon]> = [
    ["Page Speed", "98", Rocket],
    ["SEO Ready", "A+", SearchCheck],
    ["Lead Forms", "Live", LayoutDashboard],
    ["Mobile", "100%", Smartphone],
  ];

  return (
    <div className="relative mx-auto w-full max-w-[880px]">
      <div
        className={`pointer-events-none absolute -left-8 top-10 h-72 w-72 rounded-full bg-linear-to-br ${service.accent} opacity-18 blur-3xl`}
      />
      <div className="pointer-events-none absolute -right-8 bottom-10 h-72 w-72 rounded-full bg-blue-500/12 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2.1rem] border border-white/70 bg-white/90 p-3 shadow-[0_34px_110px_rgba(15,23,42,0.18)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/90">
        <div className="overflow-hidden rounded-[1.7rem] border border-slate-200/80 bg-white dark:border-white/10 dark:bg-[#070b18]">
          <div className="flex items-center gap-2 border-b border-slate-200/80 bg-slate-50 px-5 py-4 dark:border-white/10 dark:bg-white/5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />

            <div className="mx-auto hidden h-8 w-72 rounded-full bg-white px-4 text-center text-xs font-black leading-8 text-slate-400 shadow-inner dark:bg-slate-900/90 dark:text-slate-500 sm:block">
              hnxsolutions.com
            </div>

            <span
              className={`hidden h-8 w-8 rounded-xl bg-linear-to-br ${service.accent} shadow-[0_12px_30px_rgba(37,99,235,0.22)] sm:block`}
            />
          </div>

          <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative z-10 p-6 sm:p-8 lg:p-9">
              <div className="mb-8 flex items-center justify-between gap-5">
                <div className="text-xl font-black text-slate-950 dark:text-white">
                  HNX <span className="text-blue-600">Solutions</span>
                </div>

                <div className="hidden items-center gap-5 text-xs font-black text-slate-500 dark:text-slate-400 sm:flex">
                  <span className="text-blue-600">Home</span>
                  <span>Services</span>
                  <span>Work</span>
                  <span>Contact</span>
                </div>
              </div>

              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-xs font-black text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                Digital Solutions That Drive Growth
              </span>

              <h3 className="mt-6 max-w-md text-3xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                Building digital experiences that drive real business outcomes.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
                We design and develop high-performance websites that are fast,
                secure, SEO-ready, and built to convert qualified visitors.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-[0_14px_32px_rgba(37,99,235,0.22)]">
                  Explore Services
                </span>
                <span className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-white">
                  Case Studies
                </span>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["98", "Speed"],
                  ["A+", "SEO"],
                  ["100%", "Mobile"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <p className="text-2xl font-black text-slate-950 dark:text-white">
                      {value}
                    </p>
                    <p className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-400">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="relative min-h-[390px] bg-cover bg-center lg:min-h-[520px]"
              style={{ backgroundImage: `url(${heroImageUrl})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-slate-950/10 via-transparent to-white/15 dark:from-slate-950/35 dark:via-slate-950/20 dark:to-[#070b18]/20" />

              <div className="absolute right-5 top-5 rounded-[1.4rem] border border-white/70 bg-white/90 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  Visitors
                </p>
                <div className="mt-2 flex items-end gap-2">
                  <p className="text-2xl font-black text-slate-950 dark:text-white">
                    12.5K
                  </p>
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-black text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300">
                    ▲ 24.6%
                  </span>
                </div>
                <div className="mt-3 h-10 w-36 rounded-xl bg-blue-50 dark:bg-white/5">
                  <svg viewBox="0 0 150 42" className="h-full w-full">
                    <path
                      d="M4 32 C18 18, 26 30, 40 20 C56 10, 66 28, 82 18 C98 8, 108 24, 124 12 C136 4, 142 16, 148 10"
                      fill="none"
                      stroke="#2563eb"
                      strokeLinecap="round"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-white/70 bg-white/90 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      Lead Form
                    </p>
                    <p className="mt-1 text-lg font-black text-slate-950 dark:text-white">
                      42 enquiries captured
                    </p>
                  </div>
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br ${service.accent} text-white`}
                  >
                    <LayoutDashboard className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {websiteMetrics.map(([label, value, Icon]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_12px_30px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br ${service.accent} text-white`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-black text-slate-950 dark:text-white">
                  {value}
                </span>
              </div>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function SaasVisual({ service }: ServiceHeroVisualProps) {
  return (
    <Frame service={service} title="SaaS Revenue Dashboard">
      <div className="grid gap-4 p-4 lg:grid-cols-[0.32fr_1fr]">
        <aside className="hidden rounded-[1.4rem] border border-slate-200/80 bg-slate-950 p-4 text-white lg:block">
          <div className={`mb-5 h-10 w-10 rounded-2xl bg-linear-to-br ${service.accent}`} />
          {["Dashboard", "Billing", "Users", "Reports", "Settings"].map((item, index) => (
            <div key={item} className={`mb-2 rounded-xl px-3 py-2 text-xs font-bold ${index === 0 ? "bg-white/15" : "text-white/55"}`}>
              {item}
            </div>
          ))}
        </aside>
        <div className="space-y-4">
          <MetricGrid service={service} />
          <div className="grid gap-4 lg:grid-cols-[1fr_0.48fr]">
            <MiniChart service={service} bars={[35, 48, 42, 66, 58, 84, 78, 94]} />
            <div className="rounded-2xl border border-slate-200/80 bg-white/76 p-4 dark:border-white/10 dark:bg-white/7">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Subscriptions</p>
              <div className="mt-4 space-y-3">
                {["Pro plan", "Team plan", "Enterprise"].map((plan, index) => (
                  <div key={plan} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 dark:bg-white/7">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">{plan}</span>
                    <span className={`h-2 rounded-full bg-linear-to-r ${service.accent}`} style={{ width: `${34 + index * 18}px` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function MobileVisual({ service }: ServiceHeroVisualProps) {
  const screens = ["Onboarding", "Dashboard", "Booking"];

  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-white/70 bg-white/72 p-5 shadow-[0_30px_90px_rgba(15,23,42,0.18)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/80">
      <div className={`absolute -right-20 top-10 h-72 w-72 rounded-full bg-linear-to-br ${service.accent} opacity-20 blur-3xl`} />
      {screens.map((title, index) => (
        <div
          key={title}
          className={`absolute top-14 w-[38%] min-w-[150px] max-w-[205px] rounded-[2.2rem] border-[8px] border-slate-950 bg-white p-3 shadow-[0_30px_70px_rgba(15,23,42,0.24)] dark:border-slate-800 dark:bg-slate-950 ${
            index === 0 ? "left-4 rotate-[-8deg]" : index === 1 ? "left-1/2 z-10 -translate-x-1/2 top-8" : "right-4 rotate-[8deg]"
          }`}
        >
          <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-slate-900/20 dark:bg-white/20" />
          <div className={`h-32 rounded-[1.45rem] bg-linear-to-br ${service.accent} p-4 text-white`}>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/75">{title}</p>
            <p className="mt-3 text-2xl font-black">{index === 1 ? "INR 42K" : index === 2 ? "Booked" : "Start"}</p>
          </div>
          <div className="mt-4 grid gap-2">
            {[88, 58, 74].map((width) => (
              <span key={width} className="h-2 rounded-full bg-slate-200 dark:bg-white/12" style={{ width: `${width}%` }} />
            ))}
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((item) => (
              <span key={item} className={`h-10 rounded-2xl ${item === index ? `bg-linear-to-br ${service.accent}` : "bg-slate-100 dark:bg-white/10"}`} />
            ))}
          </div>
        </div>
      ))}
      <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-slate-200/80 bg-white/88 p-4 shadow-[0_18px_48px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/7">
        <MetricGrid service={service} />
      </div>
    </div>
  );
}

function CrmVisual({ service }: ServiceHeroVisualProps) {
  return (
    <Frame service={service} title="CRM Control Room">
      <div className="grid gap-4 p-4 lg:grid-cols-[1fr_0.42fr]">
        <div className="space-y-4">
          <MetricGrid service={service} />
          <div className="grid gap-3 sm:grid-cols-3">
            {["New Lead", "Qualified", "Proposal"].map((stage, index) => (
              <div key={stage} className="rounded-[1.35rem] border border-slate-200/80 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/5">
                <p className="text-xs font-black text-slate-500 dark:text-slate-400">{stage}</p>
                <div className="mt-3 space-y-2">
                  {[0, 1, 2].map((card) => (
                    <span key={card} className={`block h-10 rounded-xl bg-white shadow-sm dark:bg-white/8 ${card === index ? `ring-2 ring-primary/25` : ""}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className={`rounded-[1.4rem] bg-linear-to-br ${service.accent} p-5 text-white shadow-[0_18px_48px_rgba(14,165,233,0.2)]`}>
            <Bot className="h-8 w-8" />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-white/70">AI insight</p>
            <p className="mt-2 text-xl font-black leading-tight">Hot leads need follow-up before 5 PM.</p>
          </div>
          <ProgressRows service={service} rows={["Manager approval", "Role permission", "Task reminder"]} />
        </div>
      </div>
    </Frame>
  );
}

function AiVisual({ service }: ServiceHeroVisualProps) {
  return (
    <Frame service={service} title="AI Command Center">
      <div className="grid gap-4 p-4 lg:grid-cols-[0.54fr_1fr]">
        <div className="space-y-4">
          <div className={`rounded-[1.5rem] bg-linear-to-br ${service.accent} p-5 text-white`}>
            <Sparkles className="h-8 w-8" />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-white/70">Lead scoring</p>
            <p className="mt-1 text-5xl font-black">91%</p>
            <p className="mt-2 text-sm text-white/75">Priority response suggested</p>
          </div>
          <MetricGrid service={service} compact />
        </div>
        <div className="grid gap-4">
          <div className="rounded-[1.4rem] border border-slate-200/80 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">AI reply draft</p>
            <div className="mt-4 space-y-3">
              {["Hi, thanks for reaching out.", "Based on your requirement...", "I can schedule a consultation."].map((line) => (
                <div key={line} className="rounded-2xl bg-white p-3 text-sm font-semibold text-slate-700 shadow-sm dark:bg-white/7 dark:text-slate-200">
                  {line}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <ProgressRows service={service} rows={["Document summary", "Chatbot answer"]} />
            <ProgressRows service={service} rows={["CRM trigger", "Human review"]} />
          </div>
        </div>
      </div>
    </Frame>
  );
}

function WorkflowVisual({ service }: ServiceHeroVisualProps) {
  const nodes = ["Lead captured", "If budget > target", "Assign owner", "Send follow-up", "Alert manager"];

  return (
    <Frame service={service} title="Workflow Builder Canvas">
      <div className="p-4">
        <div
          className="relative min-h-[410px] rounded-[1.6rem] border border-slate-200/80 bg-[linear-gradient(rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.14)_1px,transparent_1px)] p-5 dark:border-white/10 dark:bg-white/5"
          style={{ backgroundSize: "26px 26px" }}
        >
          <div className="grid gap-4 lg:grid-cols-[0.8fr_1fr]">
            <div className="space-y-3">
              {["Trigger", "Condition", "Action"].map((step, index) => (
                <div key={step} className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm dark:border-white/10 dark:bg-slate-950/80">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{step}</p>
                  <p className="mt-2 text-lg font-black text-slate-950 dark:text-white">{nodes[index]}</p>
                </div>
              ))}
            </div>
            <div className="relative space-y-4">
              {nodes.map((node, index) => (
                <div key={node} className="flex items-center gap-3">
                  <span className={`grid h-11 w-11 place-items-center rounded-2xl bg-linear-to-br ${service.accent} text-sm font-black text-white`}>
                    {index + 1}
                  </span>
                  <div className="flex-1 rounded-2xl border border-slate-200/80 bg-white/92 p-4 shadow-sm dark:border-white/10 dark:bg-slate-950/80">
                    <p className="text-sm font-bold text-slate-950 dark:text-white">{node}</p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Connected workflow rule</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function ArchitectureVisual({ service }: ServiceHeroVisualProps) {
  const isApi = service.visualType === "api";
  const isCloud = service.visualType === "cloud";
  const nodes = isApi
    ? ["Frontend", "Auth", "API Layer", "Database", "Webhooks", "Third-party"]
    : isCloud
      ? ["App Server", "Database", "Storage", "CDN", "Backup", "Monitoring"]
      : ["WhatsApp", "Payments", "CRM", "Email", "Sheets", "Analytics"];

  return (
    <Frame service={service} title={isApi ? "API Architecture Map" : isCloud ? "Cloud Infrastructure Map" : "Integration Hub"}>
      <div className="relative min-h-[430px] p-5">
        <div className="absolute inset-5 rounded-[1.6rem] border border-slate-200/80 bg-slate-50/80 dark:border-white/10 dark:bg-white/5" />
        <div className={`absolute left-1/2 top-1/2 z-10 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-linear-to-br ${service.accent} text-center text-sm font-black text-white shadow-[0_24px_60px_rgba(37,99,235,0.24)]`}>
          {isApi ? "API Layer" : isCloud ? "Cloud Core" : "Business Hub"}
        </div>
        <div className="relative z-20 grid min-h-[390px] grid-cols-2 content-between gap-4 sm:grid-cols-3">
          {nodes.map((node, index) => {
            const Icon = [Code2, ShieldCheck, ServerCog, Boxes, Network, BarChart3][index];
            return (
              <div
                key={node}
                className={`rounded-[1.35rem] border border-slate-200/80 bg-white/92 p-4 shadow-[0_14px_36px_rgba(15,23,42,0.09)] dark:border-white/10 dark:bg-slate-950/88 ${
                  index === 2 ? "sm:col-start-3" : ""
                }`}
              >
                <span className={`grid h-11 w-11 place-items-center rounded-2xl bg-linear-to-br ${service.accent} text-white`}>
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-3 text-sm font-black text-slate-950 dark:text-white">{node}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Connected and monitored</p>
              </div>
            );
          })}
        </div>
      </div>
    </Frame>
  );
}

function DevOpsVisual({ service }: ServiceHeroVisualProps) {
  const stages = ["GitHub", "Build", "Test", "Deploy", "Monitor"];

  return (
    <Frame service={service} title="CI/CD Release Pipeline">
      <div className="p-4">
        <div className="rounded-[1.6rem] border border-slate-200/80 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-3 md:grid-cols-5">
            {stages.map((stage, index) => (
              <div key={stage} className="relative rounded-2xl bg-white p-4 text-center shadow-sm dark:bg-slate-950/70">
                <span className={`mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br ${service.accent} text-sm font-black text-white`}>
                  {index + 1}
                </span>
                <p className="mt-3 text-sm font-black text-slate-950 dark:text-white">{stage}</p>
                <p className="mt-1 text-xs text-emerald-500">Passed</p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.42fr]">
            <div className="rounded-2xl bg-slate-950 p-4 font-mono text-xs text-emerald-300 shadow-inner">
              <p>$ npm run build</p>
              <p className="mt-2">Compiled successfully</p>
              <p className="mt-2">Tests passed: 48/48</p>
              <p className="mt-2">Deploy completed</p>
            </div>
            <MetricGrid service={service} compact />
          </div>
        </div>
      </div>
    </Frame>
  );
}

function SupportVisual({ service }: ServiceHeroVisualProps) {
  return (
    <Frame service={service} title="Support Operations Dashboard">
      <div className="grid gap-4 p-4 lg:grid-cols-[1fr_0.42fr]">
        <div className="space-y-4">
          <MetricGrid service={service} />
          <div className="rounded-[1.45rem] border border-slate-200/80 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Ticket queue</p>
            <div className="mt-4 space-y-3">
              {["Payment bug", "Content update", "Speed review", "Feature patch"].map((ticket, index) => (
                <div key={ticket} className="flex items-center justify-between rounded-2xl bg-white p-3 shadow-sm dark:bg-white/7">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{ticket}</span>
                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-black ${index === 0 ? "bg-rose-100 text-rose-600" : "bg-emerald-100 text-emerald-600"}`}>
                    {index === 0 ? "Priority" : "Open"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className={`rounded-[1.45rem] bg-linear-to-br ${service.accent} p-5 text-white`}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Uptime</p>
            <p className="mt-2 text-5xl font-black">99.9%</p>
            <p className="mt-2 text-sm text-white/75">Monitoring active</p>
          </div>
          <ProgressRows service={service} rows={["Bug fix log", "Update history", "Monthly report"]} />
        </div>
      </div>
    </Frame>
  );
}

function SecurityVisual({ service }: ServiceHeroVisualProps) {
  return (
    <Frame service={service} title="Security Overview">
      <div className="grid gap-4 p-4 lg:grid-cols-[0.45fr_1fr]">
        <div className={`rounded-[1.6rem] bg-linear-to-br ${service.accent} p-5 text-white`}>
          <ShieldCheck className="h-10 w-10" />
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-white/70">Blocked attempts</p>
          <p className="mt-2 text-5xl font-black">248</p>
          <p className="mt-2 text-sm text-white/75">API and admin protection</p>
        </div>
        <div className="space-y-4">
          <MetricGrid service={service} />
          <div className="grid gap-4 md:grid-cols-2">
            <ProgressRows service={service} rows={["Admin role", "Sales role", "Support role"]} />
            <ProgressRows service={service} rows={["Audit log", "API shield", "Data access"]} />
          </div>
        </div>
      </div>
    </Frame>
  );
}

function DesignVisual({ service }: ServiceHeroVisualProps) {
  return (
    <Frame service={service} title="Design Board">
      <div className="grid gap-4 p-4 lg:grid-cols-[0.58fr_1fr]">
        <div className="space-y-4">
          <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
            <div className="mx-auto w-36 rounded-[2rem] border-[7px] border-slate-950 bg-white p-3 dark:bg-slate-950">
              <div className={`h-24 rounded-[1.3rem] bg-linear-to-br ${service.accent}`} />
              <div className="mt-3 space-y-2">
                <span className="block h-2 rounded-full bg-slate-200 dark:bg-white/12" />
                <span className="block h-2 w-2/3 rounded-full bg-slate-200 dark:bg-white/12" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {["bg-slate-950", "bg-cyan-400", "bg-violet-500", "bg-amber-400"].map((color) => (
              <span key={color} className={`h-12 rounded-2xl ${color}`} />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-[1.45rem] border border-slate-200/80 bg-white/80 p-4 dark:border-white/10 dark:bg-white/7">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Dashboard UI</p>
            <MiniChart service={service} bars={[42, 55, 74, 58, 88]} />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-white/10 dark:bg-white/7">
              <p className="text-4xl font-black text-slate-950 dark:text-white">Aa</p>
              <p className="mt-2 text-xs font-bold text-slate-500 dark:text-slate-400">Typography system</p>
            </div>
            <MetricGrid service={service} compact />
          </div>
        </div>
      </div>
    </Frame>
  );
}

function LandingVisual({ service }: ServiceHeroVisualProps) {
  return (
    <Frame service={service} title="Campaign Landing Page">
      <div className="grid gap-4 p-4 lg:grid-cols-[1fr_0.42fr]">
        <div className="rounded-[1.55rem] border border-slate-200/80 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
          <div className={`rounded-[1.35rem] bg-linear-to-br ${service.accent} p-5 text-white`}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Hero CTA</p>
            <h3 className="mt-3 max-w-sm text-3xl font-black leading-tight">Grow sales with smarter campaigns.</h3>
            <span className="mt-5 block h-10 w-36 rounded-full bg-white" />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {["200+ leads", "98% speed", "24/7 form"].map((stat) => (
              <div key={stat} className="rounded-2xl bg-white p-3 text-center text-sm font-black text-slate-950 shadow-sm dark:bg-white/7 dark:text-white">
                {stat}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[1.45rem] border border-slate-200/80 bg-white/86 p-4 shadow-sm dark:border-white/10 dark:bg-white/7">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Lead form</p>
          <div className="mt-4 space-y-3">
            <span className="block h-10 rounded-xl bg-slate-100 dark:bg-white/10" />
            <span className="block h-10 rounded-xl bg-slate-100 dark:bg-white/10" />
            <span className="block h-24 rounded-xl bg-slate-100 dark:bg-white/10" />
            <span className={`block h-11 rounded-xl bg-linear-to-r ${service.accent}`} />
          </div>
        </div>
      </div>
      <div className="px-4 pb-4">
        <MetricGrid service={service} />
      </div>
    </Frame>
  );
}

function SeoVisual({ service }: ServiceHeroVisualProps) {
  return (
    <Frame service={service} title="SEO Analytics Dashboard">
      <div className="grid gap-4 p-4 lg:grid-cols-[0.42fr_1fr]">
        <div className={`rounded-[1.55rem] bg-linear-to-br ${service.accent} p-5 text-white`}>
          <SearchCheck className="h-10 w-10" />
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-white/70">SEO score</p>
          <p className="mt-2 text-5xl font-black">85</p>
          <p className="mt-2 text-sm text-white/75">Schema and indexing ready</p>
        </div>
        <div className="space-y-4">
          <MiniChart service={service} bars={[35, 44, 52, 62, 58, 74, 82, 88]} />
          <div className="grid gap-4 md:grid-cols-2">
            <ProgressRows service={service} rows={["Technical SEO", "Schema markup", "Search Console"]} />
            <MetricGrid service={service} compact />
          </div>
        </div>
      </div>
    </Frame>
  );
}

function BrandVisual({ service }: ServiceHeroVisualProps) {
  return (
    <Frame service={service} title="Brand Identity Board">
      <div className="grid gap-4 p-4 lg:grid-cols-[0.8fr_1fr]">
        <div className="rounded-[1.55rem] border border-slate-200/80 bg-slate-50 p-5 text-center dark:border-white/10 dark:bg-white/5">
          <div className={`mx-auto grid h-28 w-28 place-items-center rounded-[2rem] bg-linear-to-br ${service.accent} text-3xl font-black text-white shadow-[0_20px_50px_rgba(245,158,11,0.18)]`}>
            HNX
          </div>
          <p className="mt-5 text-xs font-black uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Logo direction</p>
          <p className="mt-2 text-2xl font-black text-slate-950 dark:text-white">Brand Kit</p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-5 gap-2">
            {["bg-slate-950", "bg-blue-600", "bg-orange-500", "bg-amber-200", "bg-white"].map((color) => (
              <span key={color} className={`h-16 rounded-2xl border border-slate-200/80 ${color}`} />
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-white/10 dark:bg-white/7">
              <p className="text-5xl font-black text-slate-950 dark:text-white">Aa</p>
              <p className="mt-2 text-xs font-bold text-slate-500 dark:text-slate-400">Typography</p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-white/10 dark:bg-white/7">
              <div className="grid grid-cols-3 gap-2">
                {[Sparkles, Palette, Smartphone].map((Icon, index) => (
                  <span key={index} className={`grid h-11 place-items-center rounded-xl bg-linear-to-br ${service.accent} text-white`}>
                    <Icon className="h-5 w-5" />
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs font-bold text-slate-500 dark:text-slate-400">Icon style</p>
            </div>
          </div>
          <MetricGrid service={service} compact />
        </div>
      </div>
    </Frame>
  );
}

export default function ServiceHeroVisual({ service }: ServiceHeroVisualProps) {
  switch (service.visualType) {
    case "website":
      return <WebsiteVisual service={service} />;
    case "saas":
      return <SaasVisual service={service} />;
    case "mobile":
      return <MobileVisual service={service} />;
    case "crm":
      return <CrmVisual service={service} />;
    case "ai":
      return <AiVisual service={service} />;
    case "workflow":
      return <WorkflowVisual service={service} />;
    case "api":
    case "integration":
    case "cloud":
      return <ArchitectureVisual service={service} />;
    case "devops":
      return <DevOpsVisual service={service} />;
    case "support":
      return <SupportVisual service={service} />;
    case "security":
      return <SecurityVisual service={service} />;
    case "design":
      return <DesignVisual service={service} />;
    case "landing":
      return <LandingVisual service={service} />;
    case "seo":
      return <SeoVisual service={service} />;
    case "brand":
      return <BrandVisual service={service} />;
    default:
      return <WebsiteVisual service={service} />;
  }
}