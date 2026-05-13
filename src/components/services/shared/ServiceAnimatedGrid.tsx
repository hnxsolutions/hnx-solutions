"use client";

import { motion } from "framer-motion";

type ServiceAnimatedGridProps = {
  accentClass: string;
  className?: string;
};

export default function ServiceAnimatedGrid({ accentClass, className = "" }: ServiceAnimatedGridProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:42px_42px] opacity-45 [mask-image:radial-gradient(circle_at_center,black,transparent_72%)] dark:bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)]" />
      <motion.div
        animate={{ x: [0, 22, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute left-1/4 top-8 h-px w-1/2 bg-gradient-to-r ${accentClass}`}
      />
      <motion.div
        animate={{ y: [0, -18, 0], opacity: [0.2, 0.48, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute bottom-10 right-1/4 h-1/2 w-px bg-gradient-to-b ${accentClass}`}
      />
    </div>
  );
}
