"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Section } from "@/components/ui/Section";

const before = [
  "Leads in spreadsheets and notes",
  "Follow-ups depend on memory",
  "No visibility on team performance",
  "Reports take hours to prepare",
  "Deals slip through the cracks",
];

const after = [
  "All leads in one smart CRM",
  "Automated follow-ups that work 24/7",
  "Clear ownership and accountability",
  "Real-time insights at your fingertips",
  "More conversions, less chaos",
];

export function BeforeAfter() {
  return (
    <Section title="Before vs After with HNX" className="overflow-hidden">
      <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-cyanGlow/10 blur-3xl" />
      <div className="relative grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
        <ComparisonPanel
          tone="before"
          title="Before: Manual & Messy"
          bullets={before}
          src="/images/before-workflow.jpg"
          alt="Stressed business workflow placeholder"
        />
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid h-16 w-16 place-items-center rounded-full border border-cyanGlow/30 bg-cyanGlow/10 text-cyan-100 shadow-glow lg:h-20 lg:w-20"
          >
            <ArrowRight className="h-7 w-7 lg:h-8 lg:w-8" aria-hidden="true" />
          </motion.div>
        </div>
        <ComparisonPanel
          tone="after"
          title="After: Organized & Growth-Ready"
          bullets={after}
          src="/images/after-workflow.jpg"
          alt="Successful business laptop workflow placeholder"
        />
      </div>
    </Section>
  );
}

type ComparisonPanelProps = {
  tone: "before" | "after";
  title: string;
  bullets: string[];
  src: string;
  alt: string;
};

function ComparisonPanel({ tone, title, bullets, src, alt }: ComparisonPanelProps) {
  const positive = tone === "after";
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.62, ease: "easeOut" }}
      className="glass-panel overflow-hidden rounded-[30px]"
    >
      <ImageSlot src={src} alt={alt} className={`h-64 rounded-none border-x-0 border-t-0 ${positive ? "" : "grayscale"}`}>
        <div className="flex h-full items-end p-6">
          <div className="rounded-2xl border border-white/10 bg-slate-950/72 px-4 py-3 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyanGlow">
              {positive ? "Growth-ready" : "Manual work"}
            </p>
          </div>
        </div>
      </ImageSlot>
      <div className="p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <ul className="mt-6 space-y-4">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-slate-300">
              {positive ? (
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-tealGlow" aria-hidden="true" />
              ) : (
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300/70" aria-hidden="true" />
              )}
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
