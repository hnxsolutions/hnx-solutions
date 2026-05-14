"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export type IndustryBenefitChip = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type IndustryBenefitChipsProps = {
  benefits: IndustryBenefitChip[];
  compact?: boolean;
};

export default function IndustryBenefitChips({
  benefits,
  compact = false,
}: IndustryBenefitChipsProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.05 } },
      }}
      className={`grid gap-3 ${
        compact
          ? "sm:grid-cols-2 lg:grid-cols-3"
          : "sm:grid-cols-2 lg:grid-cols-4"
      }`}
    >
      {benefits.map((benefit) => {
        const Icon = benefit.icon;

        return (
          <motion.div
            key={benefit.title}
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.22 }}
            className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/82 p-4 shadow-[0_14px_34px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100 transition group-hover:scale-105 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-300/10">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-black text-slate-950 dark:text-white">
                {benefit.title}
              </span>
              <span className="mt-1 block text-xs leading-5 text-slate-600 dark:text-slate-300">
                {benefit.description}
              </span>
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
