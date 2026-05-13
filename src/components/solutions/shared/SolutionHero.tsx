"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { SolutionCategoryId, SolutionPageData } from "@/data/solutions/types";
import { Button } from "@/components/ui/Button";
import { getSolutionIcon } from "@/components/solutions/shared/solutionIcons";
import { solutionCategoryMeta } from "@/components/solutions/shared/solutionCategoryMeta";

type SolutionHeroProps = {
  category: SolutionCategoryId;
  solution: SolutionPageData;
};

export function SolutionHero({ category, solution }: SolutionHeroProps) {
  const meta = solutionCategoryMeta[category];
  const Icon = getSolutionIcon(solution.icon);
  const primaryCtaLabel = `Plan ${solution.label}`;

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-[#d7e1f2] bg-white p-6 shadow-[0_24px_80px_rgba(20,92,183,0.08)] dark:border-white/10 dark:bg-white/6">
      <div className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br ${meta.accent} opacity-[0.15] blur-3xl`} />
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d7e1f2] bg-[#eef6ff] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#145cb7] dark:border-white/10 dark:bg-cyan-300/10 dark:text-cyan-300">
            <Icon className="h-4 w-4" aria-hidden="true" />
            {solution.eyebrow}
          </span>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.45rem,4vw,4.1rem)] font-black leading-[1.08] tracking-[-0.045em] text-[#0f214f] dark:text-white">
            {solution.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-[#52627d] dark:text-slate-300">
            {solution.description}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg" showArrow>
              {primaryCtaLabel}
            </Button>
            <Button href="#solution-preview" variant="secondary" size="lg" showArrow>
              View Operating Preview
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, rotateX: -5, rotateY: 6 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
          whileHover={{ y: -6, rotateX: 2, rotateY: -3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative z-10 transform-gpu rounded-[1.8rem] border border-[#d7e1f2] bg-[#f8fbff] p-4 shadow-[0_28px_80px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[#061225]"
        >
          <div className="flex items-center gap-2 border-b border-[#d7e1f2] pb-3 dark:border-white/10">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-auto rounded-full bg-white px-3 py-1 text-[11px] font-black text-[#66728f] shadow-inner dark:bg-white/8 dark:text-slate-300">
              {meta.title} OS
            </span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {solution.stats.slice(0, 4).map((stat, index) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#d7e1f2] bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/6"
                style={{ transform: `translateZ(${12 + index * 2}px)` }}
              >
                <p className={`bg-gradient-to-r ${meta.accent} bg-clip-text text-2xl font-black text-transparent`}>{stat.value}</p>
                <p className="mt-1 text-sm font-extrabold text-[#0f214f] dark:text-white">{stat.label}</p>
                <p className="mt-1 text-xs font-semibold text-[#66728f] dark:text-slate-400">{stat.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-[#d7e1f2] bg-white p-4 dark:border-white/10 dark:bg-white/6">
            <div className="flex items-center gap-3">
              <span className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${meta.accent} text-white`}>
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-black text-[#0f214f] dark:text-white">Business outcome</p>
                <p className="mt-1 text-xs font-semibold leading-5 text-[#66728f] dark:text-slate-300">{solution.impact}</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 text-[#145cb7] dark:text-cyan-300" aria-hidden="true" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
