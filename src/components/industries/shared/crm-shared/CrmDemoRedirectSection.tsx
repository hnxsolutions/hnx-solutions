import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, LayoutDashboard, PlayCircle } from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

export default function CrmDemoRedirectSection({ data }: { data: IndustryCrmPageData }) {
  const stats = data.hero.stats.slice(0, 3);
  const stages = data.hero.pipelineStages.slice(0, 4);

  return (
    <section id="crm-demo-preview" className="py-6">
      <div className="overflow-hidden rounded-[2rem] border border-violet-100 bg-[linear-gradient(135deg,#ffffff,#f5f7ff_58%,#eef6ff)] p-5 shadow-[0_26px_80px_rgba(79,70,229,0.12)] dark:border-white/10 dark:bg-white/[0.04] sm:p-7 lg:p-9">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.1fr_0.62fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-violet-700 dark:bg-violet-400/10 dark:text-violet-200">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-600 text-white">06</span>
              See It In Action
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.035em] text-slate-950 dark:text-white sm:text-4xl">
              See It In Action
            </h2>
            <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">
              Explore a live CRM demo built for real businesses like yours.
            </p>
            <p className="mt-3 max-w-xl text-xs font-bold leading-6 text-violet-700 dark:text-violet-200">
              {data.demoRedirect.note}
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-slate-200 bg-white p-3 shadow-[0_22px_70px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-slate-950">
            <div className="grid min-h-[20rem] overflow-hidden rounded-[1.35rem] bg-slate-50 dark:bg-slate-900 md:grid-cols-[8rem_1fr]">
              <aside className="hidden bg-slate-950 p-4 text-white md:block">
                <div className="flex items-center gap-2 text-xs font-black">
                  <LayoutDashboard className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                  {data.hero.dashboardName}
                </div>
                <div className="mt-6 space-y-2">
                  {data.hero.sidebarItems.slice(0, 5).map((item, index) => (
                    <div key={item} className={`rounded-xl px-3 py-2 text-[11px] font-bold ${index === 0 ? "bg-violet-600 text-white" : "text-slate-400"}`}>
                      {item}
                    </div>
                  ))}
                </div>
              </aside>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.14em] text-violet-600">Demo Dashboard</p>
                    <h3 className="mt-1 text-lg font-black text-slate-950 dark:text-white">{data.industryName} CRM</h3>
                  </div>
                  <BarChart3 className="h-5 w-5 text-blue-600" aria-hidden="true" />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/5">
                      <p className="text-[10px] font-black uppercase tracking-[0.12em] text-slate-400">{stat.label}</p>
                      <p className="mt-2 text-xl font-black text-slate-950 dark:text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                  <div className="flex h-32 items-end gap-3">
                    {stages.map((stage, index) => (
                      <div key={stage.title} className="flex h-full min-w-0 flex-1 flex-col justify-end gap-2">
                        <div
                          className="w-full rounded-t-xl bg-gradient-to-t from-violet-600 to-cyan-300 shadow-[0_10px_24px_rgba(79,70,229,0.16)]"
                          style={{ height: `${46 + index * 16}px` }}
                        />
                        <span className="max-w-full truncate text-[10px] font-bold text-slate-500">{stage.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.7rem] border border-violet-100 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
            <h3 className="text-xl font-black tracking-[-0.02em] text-slate-950 dark:text-white">
              Experience the HNX Custom CRM
            </h3>
            <div className="mt-5 space-y-3">
              {["Real dashboards", "Real data flow", "Real business impact"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/crm-demo"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-4 text-sm font-black text-white shadow-[0_18px_42px_rgba(79,70,229,0.24)] transition hover:-translate-y-0.5"
            >
              Open Live CRM Demo
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href={data.demoRedirect.planHref}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-violet-100 bg-white px-5 py-4 text-sm font-black text-violet-700 transition hover:bg-violet-50"
            >
              Plan My CRM
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
