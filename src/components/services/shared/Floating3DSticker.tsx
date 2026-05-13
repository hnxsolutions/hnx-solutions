"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type Floating3DStickerProps = {
  label: string;
  value: string;
  icon: LucideIcon;
  accentClass: string;
  className?: string;
  delay?: number;
};

export default function Floating3DSticker({
  label,
  value,
  icon: Icon,
  accentClass,
  className = "",
  delay = 0,
}: Floating3DStickerProps) {
  return (
    <motion.div
      aria-hidden="true"
      animate={{ y: [0, -10, 0], rotate: [0, 1.8, 0] }}
      transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay }}
      whileHover={{ y: -8, rotateX: 5, rotateY: -7, scale: 1.03 }}
      style={{ transformStyle: "preserve-3d" }}
      className={`absolute z-20 hidden transform-gpu rounded-2xl border border-white/75 bg-white/88 px-4 py-3 shadow-[0_22px_60px_rgba(15,23,42,0.16)] backdrop-blur-2xl will-change-transform dark:border-white/10 dark:bg-slate-950/78 dark:shadow-[0_24px_70px_rgba(0,0,0,0.32)] sm:block ${className}`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${accentClass} text-white shadow-[0_14px_34px_rgba(37,99,235,0.22)]`}
          style={{ transform: "translateZ(18px)" }}
        >
          <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">{label}</p>
          <p className="mt-0.5 max-w-36 truncate text-sm font-black text-slate-950 dark:text-white">{value}</p>
        </div>
      </div>
    </motion.div>
  );
}
