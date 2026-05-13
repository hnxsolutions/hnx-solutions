"use client";

import { motion } from "framer-motion";
import type { SolutionCategoryId, SolutionPreview as SolutionPreviewData } from "@/data/solutions/types";
import { solutionCategoryMeta } from "@/components/solutions/shared/solutionCategoryMeta";

type SolutionPreviewProps = {
  category: SolutionCategoryId;
  preview: SolutionPreviewData;
};

export function SolutionPreview({ category, preview }: SolutionPreviewProps) {
  const meta = solutionCategoryMeta[category];
  const statusLabels = ["Live", "Owner", "Review", "Tracked", "Next", "Done"];

  return (
    <motion.div
      id="solution-preview"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-[1.9rem] border border-[#d7e1f2] bg-white shadow-[0_28px_85px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-[#061225]"
    >
      <div className="flex items-center gap-2 border-b border-[#d7e1f2] bg-[#f8fbff] px-5 py-4 dark:border-white/10 dark:bg-white/5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <div className="ml-3">
          <p className="text-sm font-black text-[#0f214f] dark:text-white">{preview.title}</p>
          <p className="mt-0.5 text-xs font-semibold text-[#66728f] dark:text-slate-300">{preview.subtitle}</p>
        </div>
      </div>
      <div className="grid gap-4 p-5 lg:grid-cols-[0.76fr_1.24fr]">
        <div className="grid gap-3">
          {preview.metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4 dark:border-white/10 dark:bg-white/6">
              <p className={`bg-gradient-to-r ${meta.accent} bg-clip-text text-2xl font-black text-transparent`}>{metric.value}</p>
              <p className="mt-1 text-sm font-black text-[#0f214f] dark:text-white">{metric.label}</p>
              <p className="mt-1 text-xs font-semibold text-[#66728f] dark:text-slate-400">{metric.note}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4 dark:border-white/10 dark:bg-white/6">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-black text-[#0f214f] dark:text-white">Live operating view</p>
            <span className={`rounded-full bg-gradient-to-r ${meta.accent} px-3 py-1 text-[11px] font-black text-white`}>
              Preview
            </span>
          </div>
          <div className="space-y-3">
            {preview.rows.map((row, index) => (
              <div key={row} className="rounded-xl bg-white p-3 shadow-sm dark:bg-[#061225]">
                <div className="flex items-center gap-3">
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${meta.accent} text-xs font-black text-white`}>
                  {index + 1}
                </span>
                <p className="min-w-0 flex-1 truncate text-sm font-bold text-[#0f214f] dark:text-white">{row}</p>
                  <span className="rounded-full border border-[#d7e1f2] bg-[#eef6ff] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#145cb7] dark:border-white/10 dark:bg-cyan-300/10 dark:text-cyan-300">
                    {statusLabels[index % statusLabels.length]}
                  </span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#d7e1f2] dark:bg-white/10">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${meta.accent}`}
                    style={{ width: `${Math.min(92, 44 + index * 8)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {preview.metrics.map((metric) => (
              <div key={`signal-${metric.label}`} className="rounded-2xl border border-[#d7e1f2] bg-white px-4 py-3 dark:border-white/10 dark:bg-[#061225]">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#145cb7] dark:text-cyan-300">
                  Signal
                </p>
                <p className="mt-1 truncate text-sm font-black text-[#0f214f] dark:text-white">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
