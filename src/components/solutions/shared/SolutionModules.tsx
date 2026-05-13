"use client";

import { motion } from "framer-motion";
import type { SolutionCard, SolutionCategoryId } from "@/data/solutions/types";
import { getSolutionIcon } from "@/components/solutions/shared/solutionIcons";
import { solutionCategoryMeta } from "@/components/solutions/shared/solutionCategoryMeta";

type SolutionModulesProps = {
  category: SolutionCategoryId;
  items: readonly SolutionCard[];
  eyebrow?: string;
};

export function SolutionModules({ category, items, eyebrow = "Module" }: SolutionModulesProps) {
  const meta = solutionCategoryMeta[category];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      className="grid gap-4 md:grid-cols-2"
    >
      {items.map((item, index) => {
        const Icon = getSolutionIcon(item.icon);

        return (
          <motion.article
            key={item.title}
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.42 } } }}
            whileHover={{ y: -7, rotateX: 2, rotateY: index % 2 === 0 ? -2 : 2 }}
            className="group relative overflow-hidden rounded-[1.45rem] border border-[#d7e1f2] bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.07)] dark:border-white/10 dark:bg-white/6"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className={`absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gradient-to-br ${meta.accent} opacity-10 blur-2xl transition group-hover:opacity-20`} />
            <div className="relative flex items-start justify-between gap-4">
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${meta.accent} text-white shadow-[0_12px_30px_rgba(20,92,183,0.18)]`}>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="rounded-full bg-[#eef6ff] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#145cb7] dark:bg-cyan-300/10 dark:text-cyan-300">
                {eyebrow} {index + 1}
              </span>
            </div>
            <h3 className="relative mt-5 text-lg font-black text-[#0f214f] dark:text-white">{item.title}</h3>
            <p className="relative mt-3 text-sm font-semibold leading-6 text-[#66728f] dark:text-slate-300">{item.text}</p>
          </motion.article>
        );
      })}
    </motion.div>
  );
}
