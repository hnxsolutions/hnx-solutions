"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function PortalReveal({
  children,
  className,
  delay = 0,
  y = 16,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.42, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PortalFloat({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      animate={{ y: [0, -5, 0] }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        opacity: { duration: 0.38, delay },
        scale: { duration: 0.38, delay },
        y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PortalProgressLine({ className }: { className?: string }) {
  return (
    <motion.span
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={{ transformOrigin: "left" }}
      aria-hidden="true"
    />
  );
}
