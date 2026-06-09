import { BarChart3, Bell, CheckCircle2, LineChart, MessageCircle, Workflow } from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

const fallbackAutomationItems = [
  "Auto-assign new leads",
  "WhatsApp / Email follow-ups",
  "Missed follow-up alerts",
  "Pipeline stage automation",
  "Invoice & payment reminders",
  "Task creation & escalation",
  "Team performance alerts",
  "Custom workflow triggers",
];

const fallbackMetrics = [
  { label: "Total Leads", value: "1,248" },
  { label: "Conversion Rate", value: "24.5%" },
  { label: "Total Revenue", value: "$86,430" },
  { label: "Open Deals", value: "312" },
];

export default function CrmAutomationReportsSection({ data }: { data: IndustryCrmPageData }) {
  const automationItems = [
    ...data.automations.map((item) => item.title),
    ...fallbackAutomationItems,
  ].slice(0, 8);
  const reportBullets = data.reports.map((report) => report.title).slice(0, 4);
  const metricCards = [
    ...data.reports.map((report) => ({ label: report.title, value: report.metric })),
    ...fallbackMetrics,
  ].slice(0, 4);

  return (
    <section id="crm-automation-reports" className="py-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_22px_70px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.04] sm:p-7 lg:p-9">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-violet-700 dark:bg-violet-400/10 dark:text-violet-200">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-600 text-white">07</span>
              Automations + Reports
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.035em] text-slate-950 dark:text-white sm:text-4xl">
              Automations + Reports
            </h2>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-[1.7rem] border border-violet-100 bg-[linear-gradient(135deg,#ffffff,#f7f3ff)] p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.05] sm:p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-600 text-white shadow-[0_16px_34px_rgba(79,70,229,0.2)]">
                <Workflow className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-2xl font-black tracking-[-0.03em] text-slate-950 dark:text-white">
                  Automations That Save Hours Every Week
                </h3>
                <p className="mt-2 text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">
                  Let your CRM do repetitive work so your team can focus on closing.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {automationItems.map((item, index) => (
                <div key={`${item}-${index}`} className="flex items-center gap-3 rounded-2xl border border-violet-100 bg-white/80 px-4 py-3 text-sm font-bold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-700 dark:bg-violet-400/10 dark:text-violet-200">
                    {index % 3 === 0 ? <Bell className="h-4 w-4" aria-hidden="true" /> : index % 3 === 1 ? <MessageCircle className="h-4 w-4" aria-hidden="true" /> : <Workflow className="h-4 w-4" aria-hidden="true" />}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.7rem] border border-blue-100 bg-[linear-gradient(135deg,#ffffff,#eef6ff)] p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.05] sm:p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600 text-white shadow-[0_16px_34px_rgba(37,99,235,0.2)]">
                <BarChart3 className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-2xl font-black tracking-[-0.03em] text-slate-950 dark:text-white">
                  Reports That Drive Better Decisions
                </h3>
                <p className="mt-2 text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">
                  Visual dashboards and smart reports help you track what matters.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {metricCards.map((metric, index) => (
                <div key={`${metric.label}-${index}`} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/10">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.12em] text-slate-400">{metric.label}</p>
                      <p className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{metric.value}</p>
                    </div>
                    <LineChart className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  </div>
                  <svg className="mt-4 h-9 w-full text-blue-500" viewBox="0 0 180 42" fill="none" aria-hidden="true">
                    <path d="M4 34 C28 10 42 32 62 20 C84 8 96 24 116 15 C136 5 148 18 176 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {reportBullets.map((bullet) => (
                <div key={bullet} className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  {bullet}
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
