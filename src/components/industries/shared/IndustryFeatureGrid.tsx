"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export type IndustryFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type IndustryFeatureGridProps = {
  eyebrow?: string;
  title: string;
  features: IndustryFeature[];
};

export default function IndustryFeatureGrid({
  eyebrow = "What This Includes",
  title,
  features,
}: IndustryFeatureGridProps) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white/78 p-5 shadow-[0_22px_60px_rgba(15,23,42,0.07)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06] sm:p-6">
      <div className="mb-5">
        <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
          {eyebrow}
        </p>
        <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-950 dark:text-white">
          {title}
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-90px" }}
        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <motion.article
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.22 }}
              className="group flex min-h-32 items-start gap-4 rounded-3xl border border-slate-200 bg-white/86 p-4 shadow-sm transition hover:border-cyan-200 hover:shadow-[0_18px_42px_rgba(14,165,233,0.08)] dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-cyan-300/20"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100 transition group-hover:scale-105 dark:bg-cyan-400/10 dark:text-cyan-300 dark:ring-cyan-300/10">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <h3 className="text-sm font-black leading-5 text-slate-950 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </span>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
