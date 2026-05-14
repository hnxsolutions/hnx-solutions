"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, BadgeCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export type IndustrySelectorSolution = {
  slug: string;
  title: string;
  selectorTitle: string;
  selectorDescription: string;
  href: string;
  icon: LucideIcon;
  isBestValue?: boolean;
};

type IndustrySolutionSelectorProps = {
  solutions: IndustrySelectorSolution[];
};

export default function IndustrySolutionSelector({
  solutions,
}: IndustrySolutionSelectorProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.055 } } }}
      className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
    >
      {solutions.map((solution) => {
        const Icon = solution.icon;

        return (
          <motion.article
            key={solution.slug}
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.24 }}
            className={`group relative overflow-hidden rounded-[2rem] border p-5 shadow-[0_22px_60px_rgba(15,23,42,0.07)] backdrop-blur-2xl transition ${
              solution.isBestValue
                ? "border-blue-200 bg-linear-to-br from-blue-50 via-white to-violet-50 md:col-span-2 xl:col-span-1 dark:border-blue-300/20 dark:from-blue-400/12 dark:via-white/[0.06] dark:to-violet-400/12"
                : "border-slate-200 bg-white/82 dark:border-white/10 dark:bg-white/[0.06]"
            }`}
          >
            {solution.isBestValue && (
              <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-blue-600 to-violet-600 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">
                <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                Best Value
              </div>
            )}

            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100 transition group-hover:scale-105 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-300/10">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-5 pr-24 text-xl font-black tracking-tight text-slate-950 dark:text-white">
              {solution.selectorTitle}
            </h2>
            <p className="mt-3 min-h-20 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {solution.selectorDescription}
            </p>

            {solution.isBestValue && (
              <div className="mt-4 grid gap-2">
                {["Save 30-40%", "One platform, one login", "Built for growth"].map(
                  (item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 text-xs font-black text-blue-700 dark:text-blue-300"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                      {item}
                    </span>
                  ),
                )}
              </div>
            )}

            <Link
              href={solution.href}
              className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-blue-200 bg-white/82 px-4 py-3 text-sm font-black text-blue-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 dark:border-blue-300/15 dark:bg-white/[0.06] dark:text-blue-300 dark:hover:bg-blue-400/10"
            >
              Explore Solution
              <ArrowRight
                className="h-4 w-4 transition group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </motion.article>
        );
      })}
    </motion.div>
  );
}
