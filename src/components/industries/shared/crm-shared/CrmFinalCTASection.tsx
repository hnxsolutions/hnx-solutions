import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Layers,
  LineChart,
  PlayCircle,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

const benefitChips = [
  "Custom Built",
  "No Per-User Fees",
  "Scalable as You Grow",
];

export default function CrmFinalCTASection({
  data,
}: {
  data: IndustryCrmPageData;
}) {
  const stats = data.hero.stats.slice(0, 3);

  return (
    <section id="crm-final-cta" className="py-5 sm:py-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_76%_52%,rgba(124,58,237,0.14),transparent_30%),radial-gradient(circle_at_60%_86%,rgba(168,85,247,0.12),transparent_26%),linear-gradient(135deg,#ffffff,#f7f9ff_48%,#f3f0ff)] px-5 py-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] dark:bg-none dark:bg-white/[0.04] sm:px-7 sm:py-7 lg:px-9 lg:py-8">
        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-violet-200/45 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-blue-200/35 blur-3xl" />

        <div className="relative grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-50/90 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-violet-700 shadow-sm dark:bg-violet-400/10 dark:text-violet-200">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-600 text-white">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Final CTA
            </span>

            <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-[-0.055em] text-slate-950 dark:text-white sm:text-4xl lg:text-[3.15rem] lg:leading-[1.02]">
              Let&apos;s Launch Your
              <span className="block">Custom CRM</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">
              Get a tailored CRM that fits your business and drives growth.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={data.finalCta.primaryHref}
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3.5 text-sm font-black text-white shadow-[0_16px_36px_rgba(79,70,229,0.24)] transition hover:-translate-y-0.5"
              >
                Book Free Consultation
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>

              <Link
                href="/crm-demo"
                className="inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-3.5 text-sm font-black text-violet-700 transition hover:-translate-y-0.5 hover:bg-white/70 dark:text-violet-200 dark:hover:bg-white/10"
              >
                View CRM Demo
                <PlayCircle className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {benefitChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-2xl bg-white/75 px-3.5 py-2.5 text-xs font-black text-slate-600 shadow-sm ring-1 ring-slate-200/70 dark:bg-white/10 dark:text-slate-200 dark:ring-white/10"
                >
                  <CheckCircle2
                    className="h-4 w-4 text-emerald-600"
                    aria-hidden="true"
                  />
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[18rem] lg:min-h-[21rem]">
            <div className="absolute left-[15%] top-[16%] h-[13rem] w-[13rem] rounded-[2rem] bg-violet-200/40 blur-3xl" />
            <div className="absolute right-[4%] top-[28%] h-[12rem] w-[12rem] rounded-[2rem] bg-blue-200/30 blur-3xl" />

            <div className="absolute right-[4%] top-[18%] hidden h-[12.5rem] w-[15.5rem] rotate-[12deg] rounded-[1.7rem] bg-white/45 shadow-[0_26px_70px_rgba(124,58,237,0.12)] ring-1 ring-white/70 lg:block">
              <div className="absolute left-7 top-8 h-2.5 w-20 rounded-full bg-violet-100" />
              <div className="absolute left-7 top-14 h-2.5 w-32 rounded-full bg-violet-100/70" />
              <div className="absolute bottom-8 left-7 h-12 w-20 rounded-2xl bg-violet-100/70" />
              <div className="absolute bottom-8 right-7 h-12 w-12 rounded-full bg-violet-300/55" />
            </div>

            <div className="absolute right-[20%] top-[14%] hidden h-[13.5rem] w-[13rem] rotate-[8deg] rounded-[1.6rem] bg-white/60 shadow-[0_24px_65px_rgba(79,70,229,0.13)] ring-1 ring-white/80 sm:block">
              <div className="absolute left-6 top-7 h-2.5 w-14 rounded-full bg-violet-100" />
              <div className="absolute left-6 top-12 h-2.5 w-24 rounded-full bg-violet-100/70" />
              <div className="absolute bottom-7 left-6 flex h-16 w-32 items-end gap-2 rounded-2xl bg-violet-100/45 p-2.5">
                {[42, 68, 52, 82].map((height, index) => (
                  <span
                    key={index}
                    className="flex-1 rounded-t-lg bg-gradient-to-t from-violet-400 to-blue-200"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="absolute left-[10%] top-[2%] w-[14.5rem] rotate-[8deg] rounded-[1.7rem] bg-white p-3.5 shadow-[0_28px_70px_rgba(79,70,229,0.16)] ring-1 ring-violet-100/70 sm:left-[22%] sm:w-[16rem] lg:left-[22%] lg:top-[1%]">
              <div className="flex items-center justify-between">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-violet-50 text-violet-600">
                  <Layers className="h-4.5 w-4.5" aria-hidden="true" />
                </div>
                <div className="space-y-1.5">
                  <span className="block h-2 w-9 rounded-full bg-slate-100" />
                  <span className="block h-2 w-6 rounded-full bg-slate-100" />
                </div>
              </div>

              <div className="mt-4 space-y-2.5">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-violet-100/80 bg-white px-3 py-2.5 shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="grid h-8 w-8 place-items-center rounded-xl bg-violet-50 text-violet-600">
                          {index === 0 ? (
                            <ClipboardList
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                          ) : index === 1 ? (
                            <BarChart3
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                          ) : (
                            <TrendingUp
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                        <div>
                          <p className="text-[10px] font-bold text-slate-500">
                            {stat.label}
                          </p>
                          <p className="text-sm font-black text-slate-950">
                            {stat.value}
                          </p>
                        </div>
                      </div>

                      <span className="grid h-7 w-9 place-items-center rounded-xl bg-violet-50 text-violet-600">
                        <LineChart className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-5 right-[10%] hidden h-20 w-20 rounded-full bg-violet-300/20 blur-2xl sm:block" />
            <div className="absolute right-[7%] top-[36%] hidden h-2 w-2 rounded-full bg-white shadow-[0_0_18px_rgba(124,58,237,0.8)] sm:block" />
            <div className="absolute left-[28%] top-[38%] hidden h-2 w-2 rounded-full bg-white shadow-[0_0_18px_rgba(124,58,237,0.8)] sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}