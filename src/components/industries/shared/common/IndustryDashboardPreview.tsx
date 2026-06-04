"use client";

import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export type IndustryMetric = {
  label: string;
  value: string;
  change?: string;
  icon: LucideIcon;
  tone?: "blue" | "cyan" | "violet" | "emerald" | "amber";
};

export type IndustryPreviewCard = {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
};

type IndustryDashboardPreviewProps = {
  title: string;
  description: string;
  metrics: IndustryMetric[];
  previewCards?: IndustryPreviewCard[];
  visualLabel?: string;
};

function toneClass(tone: IndustryMetric["tone"] = "blue") {
  const classes = {
    blue: "bg-blue-50 text-blue-700 ring-blue-100 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-300/10",
    cyan: "bg-cyan-50 text-cyan-700 ring-cyan-100 dark:bg-cyan-400/10 dark:text-cyan-300 dark:ring-cyan-300/10",
    violet:
      "bg-violet-50 text-violet-700 ring-violet-100 dark:bg-violet-400/10 dark:text-violet-300 dark:ring-violet-300/10",
    emerald:
      "bg-emerald-50 text-emerald-700 ring-emerald-100 dark:bg-emerald-400/10 dark:text-emerald-300 dark:ring-emerald-300/10",
    amber:
      "bg-amber-50 text-amber-700 ring-amber-100 dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-300/10",
  };

  return classes[tone];
}

function MiniTrend({ tone = "blue" }: { tone?: IndustryMetric["tone"] }) {
  const stroke =
    tone === "cyan"
      ? "#06b6d4"
      : tone === "violet"
        ? "#7c3aed"
        : tone === "emerald"
          ? "#10b981"
          : tone === "amber"
            ? "#f59e0b"
            : "#2563eb";

  return (
    <svg viewBox="0 0 120 42" className="mt-4 h-10 w-full" aria-hidden="true">
      <path
        d="M4 34 L23 24 L40 29 L58 13 L75 20 L93 10 L116 4"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path
        d="M4 38 L23 28 L40 33 L58 17 L75 24 L93 14 L116 8 L116 42 L4 42Z"
        fill={stroke}
        opacity="0.08"
      />
    </svg>
  );
}

export default function IndustryDashboardPreview({
  title,
  description,
  metrics,
  previewCards,
  visualLabel = "Live Operations Preview",
}: IndustryDashboardPreviewProps) {
  const cards =
    previewCards ??
    metrics.slice(0, 4).map((metric) => ({
      title: metric.label,
      value: metric.value,
      description: metric.change
        ? `${metric.change} vs last month`
        : "Live operational insight",
      icon: metric.icon,
    }));

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white/82 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06] sm:p-6">
      <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-violet-700 dark:text-violet-300">
            {visualLabel}
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 dark:text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            {description}
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-90px" }}
            variants={{ visible: { transition: { staggerChildren: 0.055 } } }}
            className="mt-6 grid gap-3 sm:grid-cols-2"
          >
            {metrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <motion.article
                  key={metric.label}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -3 }}
                  className="rounded-3xl border border-slate-200 bg-white/86 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.045]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`grid h-10 w-10 place-items-center rounded-2xl ring-1 ${toneClass(
                        metric.tone,
                      )}`}
                    >
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    {metric.change && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-black text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                        <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                        {metric.change}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-xs font-bold text-slate-500 dark:text-slate-400">
                    {metric.label}
                  </p>
                  <p className="mt-1 text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                    {metric.value}
                  </p>
                  <MiniTrend tone={metric.tone} />
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-4 shadow-inner dark:border-white/10 dark:bg-white/[0.035]">
          <div className="mb-4 flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white/88 px-4 py-3 dark:border-white/10 dark:bg-white/[0.055]">
            <div>
              <p className="text-xs font-black text-slate-950 dark:text-white">
                Operations Command Center
              </p>
              <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                Synced records, tasks, performance, and patient activity
              </p>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
              Live Sync
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-3xl border border-slate-200 bg-white/90 p-4 dark:border-white/10 dark:bg-white/[0.055]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-300/10">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <CheckCircle2
                      className="h-4 w-4 text-emerald-500 dark:text-emerald-300"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-4 text-sm font-black text-slate-950 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xl font-black text-slate-950 dark:text-white">
                    {card.value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-4 rounded-3xl border border-slate-200 bg-white/90 p-4 dark:border-white/10 dark:bg-white/[0.055]">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-sm font-black text-slate-950 dark:text-white">
                Performance Snapshot
              </h3>
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                This month
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {["Patient response", "Conversion lift", "Workflow speed"].map(
                (label, index) => (
                  <div key={label}>
                    <div className="mb-1.5 flex items-center justify-between text-[11px] font-bold text-slate-600 dark:text-slate-300">
                      <span>{label}</span>
                      <span>{82 - index * 9}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100 dark:bg-white/10">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-blue-600 via-cyan-500 to-violet-500"
                        style={{ width: `${82 - index * 9}%` }}
                      />
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
