"use client";

import { motion } from "framer-motion";
import type { SolutionCategoryId, SolutionStat } from "@/data/solutions/types";
import { solutionCategoryMeta } from "@/components/solutions/shared/solutionCategoryMeta";

type SolutionStatsGridProps = {
  category: SolutionCategoryId;
  stats: readonly SolutionStat[];
};

export function SolutionStatsGrid({ category, stats }: SolutionStatsGridProps) {
  const meta = solutionCategoryMeta[category];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
    >
      {stats.map((stat, index) => (
        <motion.article
          key={stat.label}
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.42 } } }}
          whileHover={{ y: -6, rotateX: 2, rotateY: index % 2 === 0 ? -2 : 2 }}
          className="rounded-[1.4rem] border border-[#d7e1f2] bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.07)] dark:border-white/10 dark:bg-white/6"
          style={{ transformStyle: "preserve-3d" }}
        >
          <p className={`bg-gradient-to-r ${meta.accent} bg-clip-text text-3xl font-black text-transparent`}>{stat.value}</p>
          <p className="mt-2 text-sm font-black text-[#0f214f] dark:text-white">{stat.label}</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-[#66728f] dark:text-slate-300">{stat.note}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}
