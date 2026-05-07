"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiChartBar,
  HiCog,
  HiLightningBolt,
  HiShieldCheck,
} from "react-icons/hi";
import CRMDashboardMockup from "@/components/sections/CRMDashboardMockup";

const ecosystemPillars = [
  {
    title: "HNX CRM Systems",
    description: "Owned business systems for leads, deals, tasks, customers, and reports.",
    icon: HiChartBar,
  },
  {
    title: "HNX Workflow Lab",
    description: "Automation add-ons for reminders, approvals, assignments, and follow-ups.",
    icon: HiCog,
  },
  {
    title: "HNX AI Automation",
    description: "AI insights, agents, document intelligence, and workflow recommendations.",
    icon: HiLightningBolt,
  },
  {
    title: "HNX Industry CRM Systems",
    description: "CRM foundations adapted for real estate, healthcare, education, and more.",
    icon: HiShieldCheck,
  },
];

export default function HNXSystemEcosystem() {
  return (
    <section className="relative overflow-hidden bg-(--bg) py-18 text-(--text) sm:py-22 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.10),transparent_28%),radial-gradient(circle_at_82%_78%,rgba(139,92,246,0.10),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/35 to-transparent" />

      <div className="relative mx-auto max-w-[min(95vw,1600px)] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              HNX Systems Ecosystem
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Build Once.
              <br />
              <span className="gradient-text">Automate and Grow Forever.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-(--text-soft) md:text-lg">
              HNX builds owned CRM systems, workflow automations, AI-powered
              dashboards, and industry-specific business platforms that grow with
              your operations.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {ecosystemPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-(--border) bg-white/52 p-4 backdrop-blur-xl dark:bg-white/4"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <pillar.icon className="text-lg" />
                  </div>
                  <h3 className="text-sm font-bold text-(--text)">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-(--text-soft)">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/crm-systems"
                className="btn-shine inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-primary to-accent px-6 py-3.5 text-sm font-bold text-dark-900 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
              >
                Explore HNX CRM
                <HiArrowRight />
              </Link>
              <Link
                href="/workflow-lab"
                className="inline-flex items-center justify-center rounded-2xl border border-(--border) bg-white/55 px-6 py-3.5 text-sm font-semibold text-(--text) backdrop-blur-xl transition-all hover:border-primary/30 hover:bg-white/80 dark:bg-white/4"
              >
                View Workflow Lab
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-primary/16 via-accent/10 to-cyan-300/10 blur-2xl" />
            <CRMDashboardMockup compact className="relative" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
