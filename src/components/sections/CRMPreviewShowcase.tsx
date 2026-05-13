"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { ComponentType } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiArrowRight,
  HiBriefcase,
  HiChartBar,
  HiChevronLeft,
  HiChevronRight,
  HiCode,
  HiCog,
  HiLightningBolt,
  HiServer,
} from "react-icons/hi";
import {
  hnxSolutionPreviews,
  type HnxSolutionPreview,
  type SolutionId,
} from "@/data/hnx-crm";

type SolutionPreviewCardProps = {
  solution: HnxSolutionPreview;
  featured: boolean;
};

const iconBySolution: Record<
  SolutionId,
  ComponentType<{ className?: string }>
> = {
  "website-development": HiCode,
  "saas-platforms": HiServer,
  "crm-systems": HiBriefcase,
  "ai-automation": HiLightningBolt,
  "workflow-lab": HiCog,
  "industry-crm-systems": HiChartBar,
};

function useVisibleSolutionCount() {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCount(3);
        return;
      }

      if (window.innerWidth >= 768) {
        setVisibleCount(2);
        return;
      }

      setVisibleCount(1);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  return visibleCount;
}

function BrowserPreview() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/76 p-3">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-300/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
        <span className="ml-2 h-2 flex-1 rounded-full bg-white/10" />
      </div>
      <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-2">
          <div className="h-4 w-4/5 rounded-full bg-cyan-300/70" />
          <div className="h-3 w-2/3 rounded-full bg-white/16" />
          <div className="h-3 w-5/6 rounded-full bg-white/10" />
          <div className="mt-3 h-9 w-28 rounded-xl bg-linear-to-r from-cyan-300 to-violet-300" />
        </div>
        <div className="rounded-xl border border-cyan-300/12 bg-cyan-300/8 p-3">
          <div className="mb-3 h-16 rounded-xl bg-linear-to-br from-cyan-300/55 to-violet-300/45" />
          <div className="grid grid-cols-3 gap-1.5">
            {[48, 70, 58].map((height) => (
              <span
                key={height}
                className="rounded-full bg-white/16"
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SaaSPreview() {
  return (
    <div className="grid gap-3 rounded-2xl border border-white/10 bg-slate-950/76 p-3">
      <div className="flex items-center justify-between">
        <div className="h-8 w-24 rounded-xl bg-white/10" />
        <div className="flex gap-1.5">
          <span className="h-8 w-8 rounded-xl bg-cyan-300/16" />
          <span className="h-8 w-8 rounded-xl bg-violet-300/16" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["Auth", "Billing", "Roles"].map((item) => (
          <div key={item} className="rounded-xl bg-white/8 p-2">
            <p className="text-[10px] text-white/52">{item}</p>
            <div className="mt-2 h-2 rounded-full bg-cyan-300/60" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-[0.8fr_1.2fr] gap-3">
        <div className="space-y-2 rounded-xl bg-white/8 p-3">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className="h-2 rounded-full bg-white/12" />
          ))}
        </div>
        <div className="rounded-xl bg-linear-to-br from-indigo-300/28 to-cyan-300/18 p-3">
          <div className="mb-3 h-3 w-20 rounded-full bg-white/28" />
          <div className="flex h-20 items-end gap-1.5">
            {[35, 64, 52, 82, 76].map((height, index) => (
              <span
                key={`${height}-${index}`}
                className="flex-1 rounded-full bg-white/24"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CrmPreview() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/76 p-3">
      <div className="mb-3 grid grid-cols-4 gap-2">
        {["Leads", "Deals", "Tasks", "AI"].map((item) => (
          <div key={item} className="rounded-xl bg-cyan-300/10 p-2">
            <p className="text-[10px] text-cyan-100/80">{item}</p>
            <div className="mt-2 h-2 rounded-full bg-cyan-200/60" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["New", "Qualified", "Won"].map((stage, index) => (
          <div key={stage} className="space-y-2 rounded-xl bg-white/7 p-2">
            <p className="text-[10px] font-semibold text-white/52">{stage}</p>
            {Array.from({ length: 3 - (index === 2 ? 1 : 0) }).map((_, i) => (
              <div key={i} className="rounded-lg bg-white/10 p-2">
                <div className="h-2 rounded-full bg-white/18" />
                <div className="mt-1.5 h-2 w-2/3 rounded-full bg-white/10" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function AiPreview() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/76 p-3">
      <div className="grid grid-cols-[0.9fr_1.1fr] gap-3">
        <div className="space-y-2">
          {["Input", "Agent", "Action"].map((item, index) => (
            <div
              key={item}
              className={`rounded-xl border p-3 ${
                index === 1
                  ? "border-violet-300/30 bg-violet-300/14"
                  : "border-white/10 bg-white/7"
              }`}
            >
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/52">
                {item}
              </p>
              <div className="mt-2 h-2 rounded-full bg-white/18" />
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-linear-to-br from-fuchsia-300/18 to-cyan-300/12 p-3">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-8 w-8 rounded-xl bg-violet-300/24" />
            <div className="h-3 flex-1 rounded-full bg-white/18" />
          </div>
          <div className="space-y-2">
            <div className="ml-auto h-8 w-4/5 rounded-xl bg-cyan-300/18" />
            <div className="h-8 w-5/6 rounded-xl bg-white/10" />
            <div className="ml-auto h-8 w-3/4 rounded-xl bg-violet-300/18" />
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkflowPreview() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/76 p-3">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/52">
            Workflow Lab
          </p>
          <div className="mt-1 h-3 w-30 rounded-full bg-emerald-300/50" />
        </div>
        <span className="rounded-full bg-emerald-300/12 px-2 py-1 text-[10px] text-emerald-100">
          Add-ons
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          "Lead Assign",
          "Invoice Alert",
          "Task Escalate",
          "WhatsApp",
        ].map((item, index) => (
          <div key={item} className="rounded-xl bg-white/8 p-3">
            <div
              className={`mb-2 h-8 w-8 rounded-xl bg-linear-to-br ${
                index % 2 === 0
                  ? "from-emerald-300/34 to-cyan-300/20"
                  : "from-violet-300/28 to-cyan-300/18"
              }`}
            />
            <p className="text-[11px] font-semibold text-white/72">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function IndustryPreview() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/76 p-3">
      <div className="grid gap-2">
        {[
          ["Real Estate", "Visits", 76],
          ["Healthcare", "Appointments", 58],
          ["Education", "Admissions", 86],
          ["Ecommerce", "Orders", 68],
        ].map(([industry, workflow, value]) => (
          <div
            key={industry.toString()}
            className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-xl bg-white/8 p-3"
          >
            <div>
              <p className="text-xs font-semibold text-white/80">
                {industry.toString()}
              </p>
              <p className="mt-1 text-[10px] text-white/46">
                {workflow.toString()}
              </p>
            </div>
            <div className="h-10 w-18 rounded-full border border-cyan-300/12 bg-cyan-300/8 p-1.5">
              <div
                className="h-full rounded-full bg-linear-to-r from-cyan-300 to-violet-300"
                style={{ width: `${Number(value)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SolutionMockup({ id }: { id: SolutionId }) {
  switch (id) {
    case "website-development":
      return <BrowserPreview />;
    case "saas-platforms":
      return <SaaSPreview />;
    case "crm-systems":
      return <CrmPreview />;
    case "ai-automation":
      return <AiPreview />;
    case "workflow-lab":
      return <WorkflowPreview />;
    case "industry-crm-systems":
      return <IndustryPreview />;
    default:
      return <BrowserPreview />;
  }
}

function SolutionPreviewCard({ solution, featured }: SolutionPreviewCardProps) {
  const Icon = iconBySolution[solution.id];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, x: 36, scale: 0.96 }}
      animate={{
        opacity: featured ? 1 : 0.76,
        x: 0,
        scale: featured ? 1 : 0.94,
        y: featured ? -8 : 0,
      }}
      exit={{ opacity: 0, x: -36, scale: 0.96 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative h-full overflow-hidden rounded-[1.75rem] border p-4 backdrop-blur-2xl transition-all duration-500 sm:p-5 ${
        featured
          ? "border-primary/28 bg-white/78 shadow-[0_24px_70px_rgba(56,189,248,0.14)] dark:bg-white/7 dark:shadow-[0_24px_80px_rgba(0,0,0,0.42)]"
          : "border-(--border) bg-white/52 shadow-[0_16px_44px_rgba(15,23,42,0.08)] dark:bg-white/4 dark:shadow-[0_16px_54px_rgba(0,0,0,0.28)]"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.12),transparent_30%)] opacity-70" />
      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-linear-to-br ${solution.accent} opacity-15 blur-3xl transition-opacity duration-500 group-hover:opacity-25`}
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span
            className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br ${solution.accent} text-white shadow-lg`}
          >
            <Icon className="text-xl" />
          </span>
          <div className="flex gap-1.5">
            {solution.metrics.map((metric) => (
              <span
                key={metric}
                className="rounded-full border border-(--border) bg-white/48 px-2.5 py-1 text-[10px] font-semibold text-(--text-soft) dark:bg-white/5"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <SolutionMockup id={solution.id} />
        </div>

        <div className="mt-auto">
          <h3 className="text-xl font-bold text-(--text)">
            {solution.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-(--text-soft)">
            {solution.description}
          </p>
          <Link
            href={solution.href}
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition-all duration-300 group-hover:gap-3"
          >
            {solution.cta}
            <HiArrowRight />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function CRMPreviewShowcase() {
  const visibleCount = useVisibleSolutionCount();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % hnxSolutionPreviews.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setActiveIndex(
      (current) =>
        (current - 1 + hnxSolutionPreviews.length) %
        hnxSolutionPreviews.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const intervalId = window.setInterval(goToNext, 3600);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [goToNext, isPaused]);

  const visibleSolutions = useMemo(() => {
    const offsetStart = visibleCount === 3 ? -1 : 0;

    return Array.from({ length: visibleCount }, (_, slot) => {
      const index =
        (activeIndex + offsetStart + slot + hnxSolutionPreviews.length) %
        hnxSolutionPreviews.length;

      return {
        solution: hnxSolutionPreviews[index],
        slot,
        featured: visibleCount === 3 ? slot === 1 : slot === 0,
      };
    });
  }, [activeIndex, visibleCount]);

  return (
    <section className="relative overflow-hidden bg-(--bg) py-18 text-(--text) sm:py-22 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-72 w-[86%] max-w-5xl rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-60 w-[78%] max-w-4xl rounded-full bg-accent/8 blur-3xl" />

      <div className="relative mx-auto max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary"
            >
              Explore HNX Solutions
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-5 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl"
            >
              One company for websites,
              <span className="gradient-text"> SaaS, CRM, and automation</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 max-w-2xl text-base leading-7 text-(--text-soft) md:text-lg"
            >
              Preview the HNX ecosystem with real product-style cards for core
              services, CRM ownership, AI workflows, and industry systems.
            </motion.p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Show previous HNX solution"
              onClick={goToPrevious}
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-(--border) bg-white/55 text-(--text) backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary dark:bg-white/5"
            >
              <HiChevronLeft className="text-xl" />
            </button>
            <button
              type="button"
              aria-label="Show next HNX solution"
              onClick={goToNext}
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-(--border) bg-white/55 text-(--text) backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary dark:bg-white/5"
            >
              <HiChevronRight className="text-xl" />
            </button>
          </div>
        </div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          className="relative"
        >
          <div className="grid min-h-[34rem] grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence initial={false}>
              {visibleSolutions.map(({ solution, featured }) => (
                <SolutionPreviewCard
                  key={`${solution.id}-${visibleCount}`}
                  solution={solution}
                  featured={featured}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2.5">
          {hnxSolutionPreviews.map((solution, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={solution.id}
                type="button"
                aria-label={`Show ${solution.title}`}
                onClick={() => setActiveIndex(index)}
                className="group flex h-3 items-center"
              >
                <motion.span
                  animate={{ width: isActive ? 28 : 8, opacity: isActive ? 1 : 0.45 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className={`h-2 rounded-full ${
                    isActive
                      ? "bg-linear-to-r from-primary to-accent shadow-[0_0_18px_rgba(56,189,248,0.36)]"
                      : "bg-(--border)"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
