"use client";

import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export type IndustryFlowStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type IndustryFlowProps = {
  title: string;
  steps: IndustryFlowStep[];
};

export default function IndustryFlow({ title, steps }: IndustryFlowProps) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-[0_22px_60px_rgba(15,23,42,0.07)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06] sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-blue-700 dark:text-blue-300">
            Journey Flow
          </p>
          <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-950 dark:text-white">
            {title}
          </h2>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-90px" }}
        variants={{ visible: { transition: { staggerChildren: 0.045 } } }}
        className="grid gap-3 md:grid-cols-2 xl:grid-cols-5"
      >
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;

          return (
            <motion.div
              key={`${step.title}-${index}`}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative"
            >
              <div className="group h-full rounded-3xl border border-slate-200 bg-white/88 p-4 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_42px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-blue-300/20">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-300/10">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="grid h-7 w-7 place-items-center rounded-full border border-slate-200 bg-slate-50 text-xs font-black text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-black leading-5 text-slate-950 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </div>

              {!isLast && (
                <span
                  className="pointer-events-none absolute right-[-1.05rem] top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-blue-100 bg-white p-1 text-blue-700 shadow-sm dark:border-blue-300/10 dark:bg-[#0b1220] dark:text-blue-300 xl:block"
                  aria-hidden="true"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
