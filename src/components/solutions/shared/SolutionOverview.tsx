"use client";

import { motion } from "framer-motion";
import type { SolutionCard, SolutionCategoryId, SolutionPageData } from "@/data/solutions/types";
import { getSolutionIcon } from "@/components/solutions/shared/solutionIcons";
import { solutionCategoryMeta } from "@/components/solutions/shared/solutionCategoryMeta";

type SolutionOverviewProps = {
  category: SolutionCategoryId;
  solution: SolutionPageData;
  items: readonly SolutionCard[];
};

export function SolutionOverview({ category, solution, items }: SolutionOverviewProps) {
  const meta = solutionCategoryMeta[category];

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
      className="rounded-[1.8rem] border border-[#d7e1f2] bg-white p-5 shadow-[0_22px_65px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/6"
    >
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.42 } } }}
          className={`relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${meta.accent} p-6 text-white shadow-[0_24px_70px_rgba(20,92,183,0.18)]`}
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/20 blur-3xl" />
          <p className="relative text-xs font-black uppercase tracking-[0.22em] text-white/75">System overview</p>
          <h2 className="relative mt-4 text-2xl font-black leading-tight tracking-[-0.035em] sm:text-3xl">
            {solution.label} as a complete business system
          </h2>
          <p className="relative mt-4 text-sm font-semibold leading-7 text-white/84">
            {solution.description}
          </p>
          <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
            {solution.stats.slice(0, 2).map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/20 bg-white/12 p-4 backdrop-blur-xl">
                <p className="text-2xl font-black">{stat.value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-white/72">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-3">
          {items.map((item, index) => {
            const Icon = getSolutionIcon(item.icon);

            return (
              <motion.article
                key={item.title}
                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.42 } } }}
                whileHover={{ y: -4 }}
                className="group rounded-[1.35rem] border border-[#d7e1f2] bg-[#f8fbff] p-4 transition dark:border-white/10 dark:bg-[#061225]/72"
              >
                <div className="flex items-start gap-4">
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${meta.accent} text-white shadow-[0_12px_28px_rgba(20,92,183,0.16)]`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#145cb7] dark:text-cyan-300">
                      0{index + 1}
                    </p>
                    <h3 className="mt-1 text-base font-black text-[#0f214f] dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm font-semibold leading-6 text-[#66728f] dark:text-slate-300">{item.text}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
