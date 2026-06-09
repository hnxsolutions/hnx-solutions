import Link from "next/link";
import { ArrowRight, CheckCircle2, LayoutDashboard, PlayCircle, Smartphone } from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

const benefitChips = [
  "Custom Built for You",
  "Pay Once, Own Forever",
  "No Per-User Subscription",
  "Scalable as You Grow",
];

export default function CrmFinalCTASection({ data }: { data: IndustryCrmPageData }) {
  const stats = data.hero.stats.slice(0, 3);

  return (
    <section id="crm-final-cta" className="py-6">
      <div className="relative overflow-hidden rounded-[2rem] border border-violet-100 bg-[linear-gradient(135deg,#ffffff,#f4f2ff_55%,#eaf6ff)] p-5 shadow-[0_30px_90px_rgba(79,70,229,0.16)] dark:border-white/10 dark:bg-white/[0.04] sm:p-7 lg:p-9">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-blue-200/50 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-violet-700 dark:bg-violet-400/10 dark:text-violet-200">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-600 text-white">11</span>
              Final CTA
            </span>
            <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              Ready to Build a CRM Around Your Business?
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
              Let&apos;s build a powerful CRM that helps you win more customers and grow faster.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={data.finalCta.primaryHref}
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-4 text-sm font-black text-white shadow-[0_18px_42px_rgba(79,70,229,0.3)] transition hover:-translate-y-0.5"
              >
                Book Free Consultation
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="/crm-demo"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-violet-200 bg-white px-7 py-4 text-sm font-black text-violet-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-50"
              >
                View CRM Demo
                <PlayCircle className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {benefitChips.map((chip) => (
                <span key={chip} className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs font-black text-emerald-700 dark:border-emerald-300/15 dark:bg-emerald-400/10 dark:text-emerald-200">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[22rem]">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-3 shadow-[0_30px_85px_rgba(15,23,42,0.22)]">
              <div className="rounded-[1.5rem] bg-white p-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                  <span className="h-3 w-3 rounded-full bg-rose-300" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300" />
                  <span className="ml-3 text-xs font-black text-slate-400">{data.hero.dashboardName}</span>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-[9rem_1fr]">
                  <aside className="hidden rounded-2xl bg-slate-950 p-4 text-white md:block">
                    <LayoutDashboard className="h-5 w-5 text-cyan-300" aria-hidden="true" />
                    <div className="mt-5 space-y-2">
                      {data.hero.sidebarItems.slice(0, 5).map((item, index) => (
                        <div key={item} className={`rounded-xl px-3 py-2 text-[11px] font-bold ${index === 0 ? "bg-violet-600" : "text-slate-400"}`}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </aside>
                  <div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {stats.map((stat) => (
                        <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                          <p className="text-[10px] font-black uppercase tracking-[0.12em] text-slate-400">{stat.label}</p>
                          <p className="mt-2 text-xl font-black text-slate-950">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 h-32 rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#eef6ff)] p-4">
                      <div className="flex h-full items-end gap-3">
                        {[52, 78, 64, 90, 58, 72].map((height, index) => (
                          <span key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-violet-600 to-blue-300" style={{ height: `${height}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 right-5 w-32 rounded-[1.5rem] border border-slate-200 bg-white p-2 shadow-[0_20px_55px_rgba(15,23,42,0.16)] sm:w-40">
              <div className="rounded-[1.1rem] bg-slate-950 p-3 text-white">
                <Smartphone className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                <p className="mt-5 text-[10px] font-black uppercase tracking-[0.12em] text-slate-400">Mobile CRM</p>
                <div className="mt-2 space-y-2">
                  {[1, 2, 3].map((item) => (
                    <span key={item} className="block h-3 rounded-full bg-white/15" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
