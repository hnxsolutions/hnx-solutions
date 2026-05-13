"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import type { SolutionCategoryId, SolutionPageData } from "@/data/solutions/types";
import { solutionCategoryMeta } from "@/components/solutions/shared/solutionCategoryMeta";

type SolutionCTAProps = {
  category: SolutionCategoryId;
  solution: SolutionPageData;
};

export function SolutionCTA({ category, solution }: SolutionCTAProps) {
  const meta = solutionCategoryMeta[category];
  const primaryCtaLabel = `Start ${solution.label}`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-[2rem] border border-[#d7e1f2] bg-white p-8 text-center shadow-[0_28px_85px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/6"
    >
      <div className={`pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br ${meta.accent} opacity-[0.16] blur-3xl`} />
      <div className={`pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-gradient-to-br ${meta.accent} opacity-[0.12] blur-3xl`} />
      <div className="relative mx-auto max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-[#145cb7] dark:text-cyan-300">Next step</p>
        <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-[#0f214f] dark:text-white sm:text-4xl">
          {solution.ctaTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base font-semibold leading-8 text-[#66728f] dark:text-slate-300">
          {solution.ctaText}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/contact" size="lg" showArrow>
            {primaryCtaLabel}
          </Button>
          <Button href="/portfolio" variant="secondary" size="lg" showArrow>
            View Portfolio
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
