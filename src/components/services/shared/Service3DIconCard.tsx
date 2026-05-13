"use client";

import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

type Service3DIconCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentClass: string;
  footer?: string;
  index?: number;
  tone?: "default" | "warning";
};

export default function Service3DIconCard({
  eyebrow,
  title,
  description,
  icon: Icon,
  accentClass,
  footer = "Included in scope",
  index = 0,
  tone = "default",
}: Service3DIconCardProps) {
  const iconTone =
    tone === "warning"
      ? "border-rose-200 bg-rose-50 text-rose-500 dark:border-rose-300/20 dark:bg-rose-400/10 dark:text-rose-300"
      : `bg-gradient-to-br ${accentClass} text-white shadow-[0_16px_38px_rgba(37,99,235,0.22)]`;

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 22, rotateX: -4 },
        show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.45, ease: "easeOut" as const, delay: index * 0.015 } },
      }}
      whileHover={{ y: -9, rotateX: 3, rotateY: index % 2 === 0 ? -3 : 3, scale: 1.012 }}
      style={{ transformStyle: "preserve-3d" }}
      className="group relative min-h-64 transform-gpu overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/88 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition will-change-transform dark:border-white/10 dark:bg-white/7 dark:shadow-[0_24px_75px_rgba(0,0,0,0.28)]"
    >
      <div className={`absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gradient-to-br ${accentClass} opacity-10 blur-2xl transition duration-300 group-hover:opacity-25`} />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.62),transparent_45%,rgba(59,130,246,0.06))] opacity-70 dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_48%,rgba(56,189,248,0.07))]" />

      <div className="relative flex items-start justify-between gap-4" style={{ transform: "translateZ(18px)" }}>
        <span className={`grid h-[3.25rem] w-[3.25rem] shrink-0 place-items-center rounded-2xl ${iconTone}`}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-slate-400 dark:border-white/10 dark:bg-white/6 dark:text-slate-500">
          {eyebrow}
        </span>
      </div>

      <h3 className="relative mt-6 text-xl font-black leading-7 text-slate-950 dark:text-white" style={{ transform: "translateZ(16px)" }}>
        {title}
      </h3>
      <p className="relative mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300" style={{ transform: "translateZ(12px)" }}>
        {description}
      </p>

      <div
        className="relative mt-5 flex items-center gap-2 text-sm font-black text-[#145cb7] dark:text-cyan-300"
        style={{ transform: "translateZ(18px)" }}
      >
        <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
        {footer}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </motion.article>
  );
}
