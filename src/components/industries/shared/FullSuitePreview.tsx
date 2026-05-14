"use client";

import type { LucideIcon } from "lucide-react";
import { BadgeCheck, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import type { IndustryBenefitChip } from "./IndustryBenefitChips";
import type { IndustryFeature } from "./IndustryFeatureGrid";
import type { IndustryFlowStep } from "./IndustryFlow";
import type { IndustryMetric } from "./IndustryDashboardPreview";

type FullSuitePreviewProps = {
  title: string;
  description: string;
  modules: IndustryFeature[];
  flowSteps: IndustryFlowStep[];
  metrics: IndustryMetric[];
  benefits: IndustryBenefitChip[];
  valuePoints: string[];
  centralIcon?: LucideIcon;
};

export default function FullSuitePreview({
  title,
  description,
  modules,
  flowSteps,
  metrics,
  benefits,
  valuePoints,
  centralIcon: CentralIcon = Sparkles,
}: FullSuitePreviewProps) {
  return (
    <section className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          className="rounded-[2rem] border border-blue-200 bg-linear-to-br from-blue-50 via-white to-violet-50 p-6 shadow-[0_24px_70px_rgba(37,99,235,0.13)] dark:border-blue-300/20 dark:from-blue-400/12 dark:via-white/[0.06] dark:to-violet-400/12"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-violet-600 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white">
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            Best Value
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
            {description}
          </p>
          <div className="mt-6 rounded-3xl border border-white/70 bg-white/76 p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
            <p className="text-3xl font-black text-blue-700 dark:text-blue-300">
              Save 30-40%
            </p>
            <p className="mt-1 text-sm font-bold text-slate-600 dark:text-slate-300">
              compared to buying each module separately.
            </p>
            <div className="mt-4 space-y-2">
              {valuePoints.map((point) => (
                <span
                  key={point}
                  className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"
                >
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-300"
                    aria-hidden="true"
                  />
                  {point}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ delay: 0.05 }}
          className="rounded-[2rem] border border-slate-200 bg-white/82 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06] sm:p-6"
        >
          <div className="grid items-center gap-4 lg:grid-cols-[1fr_210px_1fr]">
            <div className="grid gap-3">
              {modules.slice(0, 3).map((module) => {
                const Icon = module.icon;

                return (
                  <div
                    key={module.title}
                    className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.045]"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-3 text-sm font-black text-slate-950 dark:text-white">
                      {module.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">
                      {module.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="relative mx-auto grid h-48 w-48 place-items-center rounded-full border border-blue-200 bg-linear-to-br from-white to-blue-50 shadow-inner dark:border-blue-300/15 dark:from-white/[0.08] dark:to-blue-400/10">
              <span className="absolute inset-4 rounded-full border border-dashed border-blue-300 dark:border-blue-300/25" />
              <span className="grid h-20 w-20 place-items-center rounded-3xl bg-linear-to-br from-blue-600 to-violet-600 text-white shadow-[0_18px_44px_rgba(37,99,235,0.28)]">
                <CentralIcon className="h-9 w-9" aria-hidden="true" />
              </span>
            </div>

            <div className="grid gap-3">
              {modules.slice(3, 6).map((module) => {
                const Icon = module.icon;

                return (
                  <div
                    key={module.title}
                    className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.045]"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-3 text-sm font-black text-slate-950 dark:text-white">
                      {module.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">
                      {module.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white/82 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06] sm:p-6">
          <h3 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">
            A connected system. A better patient journey.
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {flowSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.045]"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-black text-slate-400">
                      0{index + 1}
                    </span>
                  </div>
                  <h4 className="mt-3 text-sm font-black text-slate-950 dark:text-white">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white/82 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06] sm:p-6">
          <h3 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">
            Unified dashboard. Real-time insights.
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {metrics.slice(0, 4).map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.045]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <p className="mt-3 text-xs font-bold text-slate-500 dark:text-slate-400">
                    {metric.label}
                  </p>
                  <p className="mt-1 text-xl font-black text-slate-950 dark:text-white">
                    {metric.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.title}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/82 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-black text-slate-950 dark:text-white">
                  {benefit.title}
                </span>
                <span className="mt-1 block text-xs leading-5 text-slate-600 dark:text-slate-300">
                  {benefit.description}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
