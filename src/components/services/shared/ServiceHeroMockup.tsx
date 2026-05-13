"use client";

import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export type ServiceHeroVisualLabel = {
  label: string;
  value: string;
  icon: LucideIcon;
};

type ServiceHeroMockupProps = {
  imageUrl: string;
  title: string;
  subtitle: string;
  labels: ServiceHeroVisualLabel[];
  accentClass: string;
};

export default function ServiceHeroMockup({
  imageUrl,
  title,
  subtitle,
  labels,
  accentClass,
}: ServiceHeroMockupProps) {
  const primarySticker = labels[0];
  const metricSticker = labels[3] ?? labels[1] ?? labels[0];

  return (
    <div className="relative mx-auto w-full max-w-[760px]">
      <div className={`pointer-events-none absolute -left-8 top-12 h-60 w-60 rounded-full bg-gradient-to-br ${accentClass} opacity-20 blur-3xl`} />
      <div className={`pointer-events-none absolute -right-6 bottom-4 h-72 w-72 rounded-full bg-gradient-to-br ${accentClass} opacity-16 blur-3xl`} />

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -10, 0], rotate: [0, -1.5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 top-8 z-20 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/82 dark:shadow-[0_18px_50px_rgba(0,0,0,0.28)] sm:block"
      >
        <div className="flex items-center gap-2">
          <span className={`grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br ${accentClass} text-white`}>
            <Sparkles className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
              {primarySticker?.label ?? "Delivery"}
            </p>
            <p className="text-xs font-black text-slate-950 dark:text-white">{primarySticker?.value ?? "HNX Delivery"}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 12, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute -right-2 bottom-20 z-20 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/82 dark:shadow-[0_18px_50px_rgba(0,0,0,0.28)] md:block"
      >
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
          {metricSticker?.label ?? "Live metric"}
        </p>
        <p className={`mt-1 bg-gradient-to-r ${accentClass} bg-clip-text text-lg font-black text-transparent`}>
          {metricSticker?.value ?? "+36%"}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_30px_95px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-slate-950/92 dark:shadow-[0_30px_95px_rgba(0,0,0,0.36)]"
      >
        <div className="overflow-hidden rounded-[1.55rem] border border-slate-200 bg-white dark:border-white/10 dark:bg-[#090d1a]">
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <div className="mx-auto hidden h-7 w-56 rounded-full bg-white shadow-inner dark:bg-slate-950/80 md:block" />
            <span className={`hidden rounded-xl bg-gradient-to-r ${accentClass} px-4 py-2 text-xs font-black text-white sm:inline-flex`}>
              Live Preview
            </span>
          </div>

          <div className="grid bg-white dark:bg-[#090d1a] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-6 sm:p-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                Production Ready
              </span>
              <h3 className="mt-5 text-3xl font-black leading-tight tracking-[-0.035em] text-slate-950 dark:text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{subtitle}</p>

              <div className="mt-6 grid gap-3">
                {labels.slice(0, 3).map((label) => {
                  const Icon = label.icon;

                  return (
                    <motion.div
                      key={label.label}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:border-blue-100 hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300/25 dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.22)]"
                    >
                      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${accentClass} text-white`}>
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">{label.label}</p>
                        <p className="truncate text-sm font-black text-slate-900 dark:text-white">{label.value}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-slate-400 dark:text-slate-500" aria-hidden="true" />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="p-3 lg:p-0">
              <div
                className="relative min-h-[280px] overflow-hidden rounded-[1.25rem] bg-cover bg-center opacity-95 dark:opacity-70 sm:min-h-[360px] lg:min-h-full lg:rounded-none"
                style={{ backgroundImage: `url(${imageUrl})` }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.08),transparent_42%,rgba(37,99,235,0.22))] dark:bg-[linear-gradient(135deg,rgba(2,6,23,0.48),transparent_38%,rgba(56,189,248,0.18))]" />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/55 bg-white/72 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/65">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Project pulse</p>
                      <p className="mt-1 text-sm font-black text-slate-950 dark:text-white">{labels[1]?.value ?? title}</p>
                    </div>
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${accentClass} text-white`}>
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 p-3 sm:grid-cols-3">
          {labels.slice(3, 6).map((label) => {
            const Icon = label.icon;

            return (
              <motion.div
                key={label.label}
                whileHover={{ y: -5, scale: 1.02 }}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-100 hover:shadow-[0_16px_42px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300/25 dark:hover:shadow-[0_16px_42px_rgba(0,0,0,0.22)]"
              >
                <div className="flex items-center gap-3">
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${accentClass} text-white`}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-black text-slate-500 dark:text-slate-400">{label.label}</p>
                    <p className="mt-1 text-sm font-black text-slate-950 dark:text-white">{label.value}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
