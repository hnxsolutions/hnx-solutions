import {
  ArrowRight,
  BarChart3,
  Bell,
  Bot,
  CheckCircle2,
  ClipboardList,
  FileText,
  LineChart,
  Mail,
  MessageCircle,
  PieChart,
  TrendingUp,
  UserCheck,
  Workflow,
  Zap,
} from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

const fallbackAutomationItems = [
  "Auto-assign new leads",
  "WhatsApp / Email follow-ups",
  "Missed follow-up alerts",
  "Pipeline stage automation",
  "Invoice & payment reminders",
  "Task creation & escalation",
];

const fallbackMetrics = [
  { label: "Total Leads", value: "1,248" },
  { label: "Conversion Rate", value: "24.5%" },
  { label: "Total Revenue", value: "$86,430" },
  { label: "Open Deals", value: "312" },
];

const automationIcons = [Workflow, Mail, Bell, UserCheck, ClipboardList, FileText];

const workflowSteps = [
  {
    title: "Lead Captured",
    description: "New lead comes from website or form",
    icon: UserCheck,
  },
  {
    title: "Instant Notification",
    description: "Team gets WhatsApp or email alert",
    icon: MessageCircle,
  },
  {
    title: "Auto Assignment",
    description: "Lead goes to the right team member",
    icon: Workflow,
  },
  {
    title: "Follow-up Reminder",
    description: "Smart reminder until conversion",
    icon: Bell,
  },
  {
    title: "Deal Updated",
    description: "Pipeline and reports update instantly",
    icon: BarChart3,
  },
];

const impactCards = [
  {
    title: "Save Team Time",
    description: "Automate repetitive tasks and follow-ups.",
    icon: Zap,
  },
  {
    title: "Reduce Missed Leads",
    description: "Never lose important inquiries again.",
    icon: Bell,
  },
  {
    title: "Improve Conversion",
    description: "Move leads faster with smart actions.",
    icon: TrendingUp,
  },
  {
    title: "Better Decisions",
    description: "Track performance with real-time reports.",
    icon: PieChart,
  },
];

export default function CrmAutomationReportsSection({
  data,
}: {
  data: IndustryCrmPageData;
}) {
  const automationItems = [
    ...data.automations.map((item) => item.title),
    ...fallbackAutomationItems,
  ].slice(0, 6);

  const metricCards = [
    ...data.reports.map((report) => ({
      label: report.title,
      value: report.metric,
    })),
    ...fallbackMetrics,
  ].slice(0, 4);

  const reportCards = [
    ...data.reports.map((report) => ({
      title: report.title,
      description: report.description,
      metric: report.metric,
    })),
    {
      title: "Custom Report Builder",
      description: "Create custom business reports based on your workflow.",
      metric: "Live",
    },
  ].slice(0, 4);

  return (
    <section id="crm-automation-reports" className="py-8 sm:py-10">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_26px_90px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.04]">
        <div className="grid gap-8 border-b border-slate-200 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,0.10),transparent_34%),radial-gradient(circle_at_88%_16%,rgba(14,165,233,0.12),transparent_34%),linear-gradient(135deg,#ffffff,#f8fbff)] p-6 dark:border-white/10 dark:bg-none sm:p-8 lg:grid-cols-[0.92fr_1fr] lg:items-center lg:p-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-violet-700 dark:bg-violet-400/10 dark:text-violet-200">
              <SparkleDot />
              Automation + Reports
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.055em] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Automate Workflows.
              <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                Track Everything that Matters.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-slate-600 dark:text-slate-300">
              Save time with smart automation, reduce manual work, and make
              confident decisions with real-time CRM reports and insights.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {impactCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div key={card.title} className="group">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:-translate-y-1 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-white/10">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-sm font-black text-slate-950 dark:text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-xs font-semibold leading-6 text-slate-500 dark:text-slate-400">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[1.7rem] border border-slate-200 bg-white p-4 shadow-[0_24px_80px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-slate-950">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-black text-slate-950 dark:text-white">
                    Performance Overview
                  </p>
                  <p className="mt-1 text-[11px] font-semibold text-slate-400">
                    Real-time CRM activity
                  </p>
                </div>
                <span className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-black text-slate-500 dark:border-white/10 dark:text-slate-300">
                  This Month
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {metricCards.map((metric, index) => (
                  <div
                    key={`${metric.label}-${index}`}
                    className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.12em] text-slate-400">
                      {metric.label}
                    </p>
                    <div className="mt-2 flex items-end justify-between gap-3">
                      <p className="text-2xl font-black text-slate-950 dark:text-white">
                        {metric.value}
                      </p>
                      <span className="text-xs font-black text-emerald-600">
                        ↑ {12 + index * 4}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-black text-slate-900 dark:text-white">
                      Sales Trend
                    </p>
                    <LineChart className="h-4 w-4 text-blue-600" aria-hidden="true" />
                  </div>
                  <svg
                    className="mt-5 h-36 w-full text-blue-600"
                    viewBox="0 0 360 150"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 124 C38 82 54 108 80 74 C107 38 129 88 156 62 C185 33 211 52 238 42 C276 28 300 56 352 22"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 124 C38 82 54 108 80 74 C107 38 129 88 156 62 C185 33 211 52 238 42 C276 28 300 56 352 22 L352 144 L8 144 Z"
                      fill="url(#salesGradient)"
                    />
                    <defs>
                      <linearGradient id="salesGradient" x1="180" y1="22" x2="180" y2="144">
                        <stop stopColor="currentColor" stopOpacity="0.22" />
                        <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]">
                  <p className="text-xs font-black text-slate-900 dark:text-white">
                    Lead Source
                  </p>
                  <div className="mt-5 flex items-center gap-4">
                    <div className="relative grid h-24 w-24 place-items-center rounded-full bg-[conic-gradient(#2563eb_0_42%,#7c3aed_42%_68%,#22c55e_68%_84%,#e2e8f0_84%_100%)]">
                      <div className="grid h-14 w-14 place-items-center rounded-full bg-white text-xs font-black text-slate-950 dark:bg-slate-950 dark:text-white">
                        CRM
                      </div>
                    </div>
                    <div className="space-y-2 text-[11px] font-bold text-slate-500 dark:text-slate-300">
                      <p>Website · 42%</p>
                      <p>Referral · 26%</p>
                      <p>Campaign · 18%</p>
                      <p>Other · 14%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 left-8 hidden rounded-2xl border border-emerald-100 bg-white px-5 py-4 shadow-[0_18px_50px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-slate-950 sm:block">
              <p className="text-xs font-black text-emerald-600">Tasks Automated</p>
              <p className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
                1,289
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="text-center">
            <h3 className="text-3xl font-black tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl">
              Automation That Works For You
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-7 text-slate-500 dark:text-slate-300">
              Streamline repetitive processes with smart CRM automation built
              around your actual business workflow.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {automationItems.map((item, index) => {
              const Icon = automationIcons[index % automationIcons.length];

              return (
                <article
                  key={`${item}-${index}`}
                  className="group rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_46px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-50 text-violet-600 ring-1 ring-violet-100 dark:bg-violet-400/10 dark:text-violet-200 dark:ring-white/10">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h4 className="mt-4 text-base font-black text-slate-950 dark:text-white">
                    {item}
                  </h4>
                  <p className="mt-2 text-sm font-semibold leading-7 text-slate-500 dark:text-slate-300">
                    Automate this step with rules, reminders, assignments, and
                    status updates.
                  </p>
                  <span className="mt-4 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-black text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                    Active
                  </span>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-[1.6rem] border border-slate-200 bg-slate-50/70 p-5 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="grid gap-6 lg:grid-cols-[0.34fr_1fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-violet-600">
                  Automation in Action
                </p>
                <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] text-slate-950 dark:text-white">
                  A workflow that runs on autopilot.
                </h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-slate-500 dark:text-slate-300">
                  From capture to reporting, every important action can move
                  forward without manual chasing.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {workflowSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.title} className="relative">
                      {index < workflowSteps.length - 1 ? (
                        <span
                          className="absolute left-[calc(50%+1.8rem)] top-7 hidden h-px w-[calc(100%-3.6rem)] bg-gradient-to-r from-violet-300 to-blue-300 lg:block"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative z-10 text-center">
                        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-slate-200 bg-white text-blue-600 shadow-sm dark:border-white/10 dark:bg-slate-950">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h4 className="mt-3 text-sm font-black text-slate-950 dark:text-white">
                          {step.title}
                        </h4>
                        <p className="mt-1 text-xs font-semibold leading-5 text-slate-500 dark:text-slate-400">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-3xl font-black tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl">
              Reports That Drive Growth
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-7 text-slate-500 dark:text-slate-300">
              Powerful reports and dashboards help you analyze, track, and grow
              your business with confidence.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {reportCards.map((report, index) => (
              <article
                key={`${report.title}-${index}`}
                className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
                    <BarChart3 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-black text-slate-500 dark:bg-white/10 dark:text-slate-300">
                    {report.metric}
                  </span>
                </div>

                <h4 className="mt-4 text-base font-black text-slate-950 dark:text-white">
                  {report.title}
                </h4>
                <p className="mt-2 text-sm font-semibold leading-7 text-slate-500 dark:text-slate-300">
                  {report.description}
                </p>

                <svg
                  className="mt-5 h-10 w-full text-blue-500"
                  viewBox="0 0 180 42"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 34 C28 10 42 32 62 20 C84 8 96 24 116 15 C136 5 148 18 176 8"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(135deg,#f8fbff,#f5f3ff)] p-5 dark:border-white/10 dark:bg-none sm:grid-cols-2 lg:grid-cols-4">
            {impactCards.map((card) => {
              const Icon = card.icon;

              return (
                <div key={card.title} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-violet-600 shadow-sm dark:bg-white/10 dark:text-violet-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className="text-sm font-black text-slate-950 dark:text-white">
                      {card.title}
                    </h4>
                    <p className="mt-1 text-xs font-semibold leading-5 text-slate-500 dark:text-slate-300">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function SparkleDot() {
  return (
    <span className="relative grid h-7 w-7 place-items-center rounded-full bg-violet-600 text-white">
      <Bot className="h-3.5 w-3.5" aria-hidden="true" />
      <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-cyan-300" />
    </span>
  );
}