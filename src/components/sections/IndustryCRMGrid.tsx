"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { HiArrowRight, HiCheck } from "react-icons/hi";
import {
  FaBullhorn,
  FaBuilding,
  FaCalendarAlt,
  FaGraduationCap,
  FaHeartbeat,
  FaMoneyBillWave,
  FaPills,
  FaPlane,
  FaShoppingCart,
  FaTools,
} from "react-icons/fa";
import {
  industryCrms,
  type IndustryCrm,
  type IndustryIconKey,
} from "@/data/hnx-crm";

type IndustryCRMGridProps = {
  items?: IndustryCrm[];
  limit?: number;
  showHeader?: boolean;
  compact?: boolean;
};

const iconByIndustry: Record<
  IndustryIconKey,
  ComponentType<{ className?: string }>
> = {
  realEstate: FaBuilding,
  healthcare: FaHeartbeat,
  education: FaGraduationCap,
  ecommerce: FaShoppingCart,
  finance: FaMoneyBillWave,
  agency: FaBullhorn,
  events: FaCalendarAlt,
  travel: FaPlane,
  pharma: FaPills,
  service: FaTools,
};

export default function IndustryCRMGrid({
  items = industryCrms,
  limit,
  showHeader = true,
  compact = false,
}: IndustryCRMGridProps) {
  const visibleItems = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <section className="relative overflow-hidden bg-(--bg) py-18 text-(--text) sm:py-22 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_24%,rgba(56,189,248,0.08),transparent_26%),radial-gradient(circle_at_86%_78%,rgba(139,92,246,0.08),transparent_28%)]" />

      <div className="relative mx-auto max-w-[min(95vw,1600px)] px-4 sm:px-6 lg:px-8">
        {showHeader ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-3xl"
          >
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Industry CRM Systems
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Industry-Specific CRM Systems by HNX
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-(--text-soft) md:text-lg">
              HNX builds CRM systems and workflow modules tailored for how each
              industry actually works.
            </p>
          </motion.div>
        ) : null}

        <div
          className={`grid gap-5 ${
            compact
              ? "sm:grid-cols-2 lg:grid-cols-4"
              : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }`}
        >
          {visibleItems.map((industry, index) => {
            const Icon = iconByIndustry[industry.iconKey];
            const href = industry.detailRoute ?? "/contact";

            return (
              <motion.article
                key={industry.slug}
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.48,
                  delay: index * 0.045,
                  ease: "easeOut",
                }}
                whileHover={{ y: -7 }}
                className="group relative flex h-full min-h-[24rem] flex-col overflow-hidden rounded-[1.6rem] border border-(--border) bg-white/68 p-5 shadow-[0_18px_54px_rgba(15,23,42,0.09)] backdrop-blur-2xl transition-all duration-500 hover:border-primary/24 dark:bg-white/5 dark:shadow-[0_20px_64px_rgba(0,0,0,0.34)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.10),transparent_30%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-5 inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-linear-to-br from-primary/18 to-accent/18 text-primary ring-1 ring-primary/16">
                    <Icon className="text-2xl" />
                  </div>

                  <h3 className="text-lg font-bold text-(--text)">
                    {industry.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-(--text-soft)">
                    {industry.description}
                  </p>

                  <div className="mt-5 space-y-2.5">
                    {industry.workflows.map((workflow) => (
                      <div
                        key={workflow}
                        className="grid grid-cols-[18px_minmax(0,1fr)] items-start gap-2"
                      >
                        <span className="mt-0.5 inline-flex h-4.5 w-4.5 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-500 dark:text-emerald-300">
                          <HiCheck size={11} />
                        </span>
                        <p className="text-xs leading-5 text-(--text-muted)">
                          {workflow}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <Link
                      href={href}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-(--border) bg-white/45 px-4 py-3 text-sm font-bold text-(--text) transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary dark:bg-white/4"
                    >
                      Explore
                      <HiArrowRight />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
