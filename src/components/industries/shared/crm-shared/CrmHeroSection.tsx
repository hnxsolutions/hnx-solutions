import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  LayoutDashboard,
  ListChecks,
  UserCheck,
} from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

export default function CrmHeroSection({ data }: { data: IndustryCrmPageData }) {
  return (
    <section className="relative overflow-hidden px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.12),transparent_30%),radial-gradient(circle_at_78%_28%,rgba(6,182,212,0.10),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.045)_1px,transparent_1px)] bg-[size:44px_44px] opacity-70 [mask-image:linear-gradient(120deg,black,transparent_82%)]" />

      <div className="relative grid gap-10 xl:grid-cols-[0.82fr_1.18fr] xl:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
            <LayoutDashboard className="h-4 w-4" />
            {data.hero.eyebrow}
          </span>

          <h1 className="mt-6 max-w-4xl text-[clamp(2.35rem,4.4vw,4.6rem)] font-black leading-[1.03] tracking-[-0.045em] text-slate-950 dark:text-white">
            {data.hero.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            {data.hero.description}
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {data.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white/88 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
                  {stat.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(37,99,235,0.24)] transition hover:-translate-y-0.5"
            >
              Plan My CRM
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={data.demoRedirect.demoHref}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-7 py-4 text-sm font-black text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 dark:border-white/10 dark:bg-white/[0.06] dark:text-blue-300"
            >
              View CRM Demo
              <LayoutDashboard className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-slate-500 dark:text-slate-300">
            {["Owned CRM", "Role-based dashboards", "Automation-ready"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <CrmDashboardPreview data={data} />
      </div>
    </section>
  );
}

function CrmDashboardPreview({ data }: { data: IndustryCrmPageData }) {
  return (
    <div className="relative mx-auto w-full max-w-[860px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_28px_80px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[#111827]">
      <div className="flex min-h-[520px] overflow-hidden rounded-[1.45rem] border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-950">
        <aside className="hidden w-40 shrink-0 bg-slate-950 p-4 text-white md:block">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500">
              <LayoutDashboard className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-black">{data.hero.dashboardName}</p>
              <p className="text-[10px] font-bold text-slate-500">Command Desk</p>
            </div>
          </div>

          <div className="mt-8 space-y-2">
            {data.hero.sidebarItems.map((item, index) => (
              <div
                key={item}
                className={`rounded-xl px-3 py-2 text-xs font-black ${
                  index === 0 ? "bg-blue-600 text-white" : "text-slate-400"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </aside>

        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-blue-700 dark:text-blue-300">
                CRM dashboard
              </p>
              <h2 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
                Pipeline, tasks and reports
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-black text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Live view
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {data.hero.stats.map((stat) => (
              <div
                key={`${stat.label}-preview`}
                className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
              >
                <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
                <p className="mt-2 text-xl font-black text-slate-950 dark:text-white">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[1.35rem] border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-black text-slate-950 dark:text-white">
                  Pipeline board
                </p>
                <ListChecks className="h-4 w-4 text-blue-600 dark:text-blue-300" />
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {data.hero.pipelineStages.map((stage) => (
                  <div
                    key={stage.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-slate-950/70"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-[11px] font-black text-slate-700 dark:text-slate-200">
                        {stage.title}
                      </p>
                      <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-black text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                        {stage.count}
                      </span>
                    </div>
                    <div className="mt-3 space-y-2">
                      {stage.items.map((item) => (
                        <div key={item} className="rounded-xl bg-white p-2 text-[10px] font-bold text-slate-600 shadow-sm dark:bg-white/[0.06] dark:text-slate-300">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.35rem] border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.12em] text-slate-400">
                      Customer panel
                    </p>
                    <h3 className="mt-1 text-base font-black text-slate-950 dark:text-white">
                      {data.hero.customerPanel.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {data.hero.customerPanel.subtitle}
                    </p>
                  </div>
                  <UserCheck className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                </div>
                <div className="mt-4 rounded-xl bg-blue-50 p-3 dark:bg-blue-400/10">
                  <p className="text-[10px] font-black uppercase text-blue-700 dark:text-blue-300">
                    Next task
                  </p>
                  <p className="mt-1 text-xs font-bold leading-5 text-slate-700 dark:text-slate-200">
                    {data.hero.customerPanel.nextAction}
                  </p>
                </div>
                <p className="mt-3 text-xs font-bold text-slate-500 dark:text-slate-400">
                  Owner: {data.hero.customerPanel.owner}
                </p>
              </div>

              <div className="rounded-[1.35rem] border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                <div className="mb-3 flex items-center gap-2">
                  <Bell className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                  <p className="text-sm font-black text-slate-950 dark:text-white">
                    Follow-up queue
                  </p>
                </div>
                <div className="space-y-2">
                  {data.hero.followUps.map((item) => (
                    <div key={item} className="rounded-xl bg-slate-50 px-3 py-2 text-[11px] font-bold text-slate-600 dark:bg-slate-950/70 dark:text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-[1.35rem] border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
            <div className="mb-3 flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-blue-600 dark:text-blue-300" />
              <p className="text-sm font-black text-slate-950 dark:text-white">
                Analytics card
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {data.hero.analytics.map((item) => (
                <div key={item.label} className="rounded-xl bg-slate-50 p-3 dark:bg-slate-950/70">
                  <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-1 text-lg font-black text-slate-950 dark:text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
