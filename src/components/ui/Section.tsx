"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  contentClassName = "",
}: SectionProps) {
  return (
    <section id={id} className={`relative px-5 py-20 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className={`mx-auto max-w-[min(92vw,1440px)] ${contentClassName}`}
      >
        <div className="mx-auto mb-12 max-w-3xl text-center">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyanGlow">{eyebrow}</p>
          ) : null}
          <h2 className="text-balance text-3xl font-bold tracking-normal text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">{description}</p>
          ) : null}
        </div>
        {children}
      </motion.div>
    </section>
  );
}
