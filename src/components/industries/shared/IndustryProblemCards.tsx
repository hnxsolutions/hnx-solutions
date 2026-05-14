"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export type IndustryProblem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type IndustryProblemCardsProps = {
  eyebrow?: string;
  title?: string;
  problems: IndustryProblem[];
};

export default function IndustryProblemCards({
  eyebrow = "Problems We Solve",
  title = "Before the system is connected",
  problems,
}: IndustryProblemCardsProps) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-[0_22px_60px_rgba(15,23,42,0.07)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06] sm:p-6">
      <div className="mb-5 flex flex-col gap-1">
        <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-blue-700 dark:text-blue-300">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">
          {title}
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-90px" }}
        variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        className="grid gap-4 md:grid-cols-3"
      >
        {problems.map((problem) => {
          const Icon = problem.icon;

          return (
            <motion.article
              key={problem.title}
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.24 }}
              className="group min-h-48 rounded-3xl border border-slate-200 bg-white/82 p-5 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_46px_rgba(15,23,42,0.09)] dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-blue-300/20"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-50 text-violet-700 ring-1 ring-violet-100 transition group-hover:scale-105 dark:bg-violet-400/10 dark:text-violet-300 dark:ring-violet-300/10">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-base font-black leading-6 text-slate-950 dark:text-white">
                {problem.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {problem.description}
              </p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
