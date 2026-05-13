"use client";

import { motion } from "framer-motion";

type ServiceFloatingOrbsProps = {
  accentClass: string;
  className?: string;
};

export default function ServiceFloatingOrbs({ accentClass, className = "" }: ServiceFloatingOrbsProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <motion.div
        animate={{ x: [0, 24, 0], y: [0, -18, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -left-20 top-8 h-72 w-72 rounded-full bg-gradient-to-br ${accentClass} opacity-20 blur-3xl dark:opacity-25`}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -right-20 bottom-6 h-80 w-80 rounded-full bg-gradient-to-br ${accentClass} opacity-15 blur-3xl dark:opacity-20`}
      />
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/3 h-24 w-24 rounded-[2rem] border border-white/55 bg-white/24 shadow-[0_24px_80px_rgba(37,99,235,0.14)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/8"
      />
    </div>
  );
}
