"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Rocket } from "lucide-react";
import { motion } from "framer-motion";

type IndustryCTAProps = {
  title: string;
  description: string;
  ctaLabel: string;
  href?: string;
  icon?: LucideIcon;
};

export default function IndustryCTA({
  title,
  description,
  ctaLabel,
  href = "/contact",
  icon: Icon = Rocket,
}: IndustryCTAProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.35 }}
      className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-linear-to-r from-blue-600 via-cyan-500 to-violet-600 p-1 shadow-[0_24px_70px_rgba(37,99,235,0.28)]"
    >
      <div className="relative rounded-[1.85rem] bg-white/10 p-6 text-white backdrop-blur-xl sm:p-8 lg:p-10">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35"
          aria-hidden="true"
        />
        <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/16 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] ring-1 ring-white/20">
              <Icon className="h-4 w-4" aria-hidden="true" />
              Ready to build
            </span>
            <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/86 sm:text-base">
              {description}
            </p>
          </div>

          <Link
            href={href}
            className="btn-shine inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-black text-blue-700 shadow-[0_18px_46px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(15,23,42,0.24)]"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
