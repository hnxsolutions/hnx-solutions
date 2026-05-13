"use client";

import { motion } from "framer-motion";
import type { SolutionCard, SolutionCategoryId, SolutionPageData } from "@/data/solutions/types";
import { getSolutionIcon } from "@/components/solutions/shared/solutionIcons";
import { solutionCategoryMeta } from "@/components/solutions/shared/solutionCategoryMeta";

type SolutionProblemsProps = {
  category: SolutionCategoryId;
  solution: SolutionPageData;
  items: readonly SolutionCard[];
};

export function SolutionProblems({ category, solution, items }: SolutionProblemsProps) {
  const meta = solutionCategoryMeta[category];
  const impactNotes = [
    `Teams spend more time coordinating ${solution.label.toLowerCase()} work instead of moving the business forward.`,
    "Managers lose the visibility needed to spot bottlenecks, missed follow-ups, and ownership gaps early.",
    "Customers feel the friction through slower responses, unclear next steps, or inconsistent communication.",
    "Growth becomes harder to measure because source quality, conversion signals, and outcomes stay disconnected.",
    "Operations depend on individual memory instead of repeatable rules, dashboards, and accountable workflows.",
    "Scaling creates more manual work unless the process is turned into a managed system.",
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-[1.8rem] border border-[#d7e1f2] bg-white p-6 shadow-[0_22px_65px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/6">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#145cb7] dark:text-cyan-300">Core business problem</p>
        <p className="mt-3 text-2xl font-black leading-tight text-[#0f214f] dark:text-white">{solution.problem}</p>
        <p className="mt-4 text-base font-semibold leading-8 text-[#66728f] dark:text-slate-300">{solution.solution}</p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.16 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        className="grid gap-4 md:grid-cols-2"
      >
        {items.map((item, index) => {
          const Icon = getSolutionIcon(item.icon);

          return (
            <motion.article
              key={item.title}
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.42 } } }}
              whileHover={{ y: -6, rotateX: 2, rotateY: index % 2 === 0 ? -2 : 2 }}
              className="group relative overflow-hidden rounded-[1.45rem] border border-[#d7e1f2] bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.07)] dark:border-white/10 dark:bg-white/6"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className={`absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gradient-to-br ${meta.accent} opacity-10 blur-2xl transition group-hover:opacity-20`} />
              <div className="relative flex items-start justify-between gap-4">
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${meta.accent} text-white shadow-[0_12px_30px_rgba(20,92,183,0.18)]`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="rounded-full bg-red-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-red-500 dark:bg-red-400/10 dark:text-red-300">
                  Risk {index + 1}
                </span>
              </div>
              <h3 className="relative mt-5 text-lg font-black text-[#0f214f] dark:text-white">{item.title}</h3>
              <p className="relative mt-3 text-sm font-semibold leading-6 text-[#66728f] dark:text-slate-300">{item.text}</p>
              <div className="relative mt-5 rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-3 dark:border-white/10 dark:bg-[#061225]/70">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#145cb7] dark:text-cyan-300">
                  Business impact
                </p>
                <p className="mt-1 text-xs font-semibold leading-5 text-[#66728f] dark:text-slate-300">
                  {impactNotes[index % impactNotes.length]}
                </p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </div>
  );
}
