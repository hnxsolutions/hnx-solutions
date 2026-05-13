"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type Service3DStatCardProps = {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
  accentClass: string;
  index?: number;
  compact?: boolean;
};

export default function Service3DStatCard({
  label,
  value,
  detail,
  icon: Icon,
  accentClass,
  index = 0,
  compact = false,
}: Service3DStatCardProps) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 18, rotateX: -4 },
        show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.45, ease: "easeOut" as const, delay: index * 0.02 } },
      }}
      whileHover={{ y: -8, rotateX: 3, rotateY: index % 2 === 0 ? -4 : 4, scale: 1.015 }}
      style={{ transformStyle: "preserve-3d" }}
      className={`group relative flex transform-gpu items-center gap-4 overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white/88 p-4 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition will-change-transform dark:border-white/10 dark:bg-white/7 dark:shadow-[0_20px_65px_rgba(0,0,0,0.28)] ${
        compact ? "min-h-28" : "min-h-32"
      }`}
    >
      <div className={`absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gradient-to-br ${accentClass} opacity-0 blur-2xl transition duration-300 group-hover:opacity-20`} />
      <span
        className={`relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${accentClass} text-white shadow-[0_16px_38px_rgba(37,99,235,0.22)] transition group-hover:scale-105`}
        style={{ transform: "translateZ(20px)" }}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="relative min-w-0" style={{ transform: "translateZ(14px)" }}>
        <p className="text-xl font-black leading-none text-slate-950 dark:text-white">{value}</p>
        <p className="mt-1 text-sm font-extrabold text-slate-800 dark:text-slate-200">{label}</p>
        <p className="mt-1 text-xs leading-4 text-slate-500 dark:text-slate-400">{detail}</p>
      </div>
    </motion.article>
  );
}
