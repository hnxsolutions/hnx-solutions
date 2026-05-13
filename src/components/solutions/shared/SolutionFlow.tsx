"use client";

import { motion } from "framer-motion";
import type { SolutionCard, SolutionCategoryId } from "@/data/solutions/types";
import { getSolutionIcon } from "@/components/solutions/shared/solutionIcons";
import { solutionCategoryMeta } from "@/components/solutions/shared/solutionCategoryMeta";

type SolutionFlowProps = {
  category: SolutionCategoryId;
  items: readonly SolutionCard[];
};

export function SolutionFlow({ category, items }: SolutionFlowProps) {
  const meta = solutionCategoryMeta[category];
  const gridClassName =
    items.length === 5
      ? "lg:grid-cols-5"
      : items.length <= 3
        ? "lg:grid-cols-3"
        : "lg:grid-cols-4";

  return (
    <div className="relative overflow-hidden rounded-[1.8rem] border border-[#d7e1f2] bg-white p-5 shadow-[0_22px_65px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(35,120,255,0.12),transparent_30%),radial-gradient(circle_at_84%_12%,rgba(20,200,216,0.12),transparent_28%)]" />
      <div className={`relative grid gap-4 ${gridClassName}`}>
        {items.map((item, index) => {
          const Icon = getSolutionIcon(item.icon);

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: index * 0.06 }}
              className="relative rounded-[1.35rem] border border-[#d7e1f2] bg-white/86 p-4 shadow-[0_14px_38px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-[#061225]/70"
            >
              {index < items.length - 1 ? (
                <div className={`pointer-events-none absolute -right-5 top-9 hidden h-0.5 w-10 bg-gradient-to-r ${meta.accent} lg:block`} />
              ) : null}
              <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${meta.accent} text-white`}>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-[#145cb7] dark:text-cyan-300">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-black text-[#0f214f] dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-[#66728f] dark:text-slate-300">{item.text}</p>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
