"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaChartPie,
  FaDatabase,
  FaLock,
  FaProjectDiagram,
  FaUserShield,
} from "react-icons/fa";
import {
  HiArrowRight,
  HiCheck,
  HiClock,
  HiCog,
  HiExclamationCircle,
  HiLockClosed,
  HiSparkles,
  HiX,
} from "react-icons/hi";
import CRMDashboardMockup from "@/components/sections/CRMDashboardMockup";
import IndustryCRMGrid from "@/components/sections/IndustryCRMGrid";

const problemCards = [
  {
    title: "Scattered operations",
    description:
      "Lead notes, tasks, documents, approvals, and reports live in different places.",
    icon: HiExclamationCircle,
  },
  {
    title: "Manual follow-ups",
    description:
      "Teams depend on memory, spreadsheets, or chat threads for critical reminders.",
    icon: HiClock,
  },
  {
    title: "Generic CRM limits",
    description:
      "Fixed modules force your business to work around the tool instead of your process.",
    icon: HiCog,
  },
  {
    title: "No true ownership",
    description:
      "Data, pricing, workflows, and control remain tied to a vendor subscription model.",
    icon: HiLockClosed,
  },
];

const buildCards = [
  {
    title: "CRM Core",
    description: "Leads, deals, customers, tasks, notes, files, stages, and activity history.",
    icon: FaDatabase,
  },
  {
    title: "Admin Control Room",
    description: "Business modules, users, branches, teams, custom fields, and settings.",
    icon: FaUserShield,
  },
  {
    title: "Workflow Engine",
    description: "Follow-ups, reminders, approvals, assignments, escalations, and triggers.",
    icon: FaProjectDiagram,
  },
  {
    title: "AI Intelligence Layer",
    description: "Smart insights, prioritization, summaries, document extraction, and next steps.",
    icon: FaBrain,
  },
  {
    title: "Realtime Dashboards",
    description: "Revenue, pipeline, team activity, customer status, and operational KPIs.",
    icon: FaChartPie,
  },
  {
    title: "Secure Roles & Permissions",
    description: "Role-based visibility, team access, admin controls, and protected data flows.",
    icon: FaLock,
  },
];

const genericCrmPoints = [
  "Monthly cost forever",
  "Limited customization",
  "Extra cost per user",
  "Fixed workflows",
  "Data/process dependency",
];

const hnxCrmPoints = [
  "Built around your process",
  "Your fields, modules, roles, workflows",
  "One-time custom build option",
  "Add workflow automations as business grows",
  "No forced per-user licensing model unless client chooses managed plan",
];

export default function CRMSystemsContent() {
  return (
    <>
      <section id="live-crm-preview" className="relative py-18 sm:py-22 lg:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-72 w-[86%] max-w-5xl rounded-full bg-primary/8 blur-3xl" />
        <div className="relative mx-auto max-w-[min(95vw,1600px)] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 max-w-3xl"
          >
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Live CRM Preview
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              See the business system before you build it
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-(--text-soft) md:text-lg">
              A custom HNX CRM can combine leads, deals, customers, tasks,
              calendars, reports, automation, revenue visibility, AI insights,
              and activity history in one controlled interface.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.62, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-primary/14 via-accent/10 to-cyan-300/10 blur-2xl" />
            <CRMDashboardMockup className="relative" />
          </motion.div>
        </div>
      </section>

      <section className="relative py-18 sm:py-22 lg:py-24">
        <div className="relative mx-auto max-w-[min(95vw,1600px)] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                CRM Problem
              </span>
              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                Your business has outgrown scattered tools.
              </h2>
              <p className="mt-5 text-base leading-8 text-(--text-soft) md:text-lg">
                Most teams are not failing because they need another subscription
                CRM. They struggle because leads, customers, tasks, WhatsApp,
                emails, approvals, and reports are split across disconnected
                tools.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {problemCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.42, delay: index * 0.06 }}
                  className="rounded-[1.5rem] border border-(--border) bg-white/64 p-5 backdrop-blur-2xl dark:bg-white/5"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-400/10 text-rose-500 dark:text-rose-300">
                    <card.icon className="text-xl" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-(--text)">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-(--text-soft)">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-18 sm:py-22 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_24%,rgba(56,189,248,0.08),transparent_28%),radial-gradient(circle_at_86%_74%,rgba(139,92,246,0.08),transparent_28%)]" />
        <div className="relative mx-auto max-w-[min(95vw,1600px)] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-3xl"
          >
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              What HNX Builds
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              A CRM that matches the way your business actually runs
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {buildCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 26, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.46, delay: index * 0.05 }}
                whileHover={{ y: -7 }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-(--border) bg-white/68 p-6 backdrop-blur-2xl transition-all hover:border-primary/24 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.10),transparent_30%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary/18 to-accent/18 text-primary ring-1 ring-primary/16">
                    <card.icon className="text-xl" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-(--text)">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-(--text-soft)">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-18 sm:py-22 lg:py-24">
        <div className="relative mx-auto max-w-[min(95vw,1600px)] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-3xl"
          >
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              CRM Ownership
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Generic subscription CRM vs HNX custom CRM system
            </h2>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[1.75rem] border border-rose-400/16 bg-rose-400/6 p-6 backdrop-blur-2xl"
            >
              <h3 className="text-2xl font-black text-(--text)">
                Generic Subscription CRM
              </h3>
              <div className="mt-6 space-y-3">
                {genericCrmPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-400/10 text-rose-500 dark:text-rose-300">
                      <HiX size={14} />
                    </span>
                    <p className="text-sm leading-6 text-(--text-muted)">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[1.75rem] border border-emerald-400/20 bg-emerald-400/8 p-6 backdrop-blur-2xl"
            >
              <h3 className="text-2xl font-black text-(--text)">
                HNX Custom CRM System
              </h3>
              <div className="mt-6 space-y-3">
                {hnxCrmPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-500 dark:text-emerald-300">
                      <HiCheck size={14} />
                    </span>
                    <p className="text-sm leading-6 text-(--text-muted)">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="mx-auto max-w-[min(95vw,1600px)] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Industries
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Start with an industry CRM foundation
            </h2>
            <p className="mt-4 text-base leading-7 text-(--text-soft) md:text-lg">
              HNX CRM foundations can be shaped around industry-specific
              modules, teams, workflows, dashboards, and compliance needs.
            </p>
          </motion.div>
        </div>
        <IndustryCRMGrid limit={8} showHeader={false} compact />
      </div>

      <section className="relative py-18 sm:py-22 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] border border-(--border) bg-white/72 p-8 text-center shadow-[0_22px_70px_rgba(15,23,42,0.10)] backdrop-blur-2xl dark:bg-white/5 dark:shadow-[0_24px_80px_rgba(0,0,0,0.36)] sm:p-10 md:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.10),transparent_30%)]" />
            <div className="relative z-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <HiSparkles className="text-xl" />
              </span>
              <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                Build Your HNX CRM System
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-(--text-soft) md:text-lg">
                Bring your process, teams, follow-ups, dashboards, and automation
                ideas into one owned business platform.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-shine inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-primary to-accent px-8 py-4 text-sm font-bold text-dark-900 transition-all hover:-translate-y-1 sm:text-base"
                >
                  Talk to HNX
                  <HiArrowRight />
                </Link>
                <Link
                  href="/workflow-lab"
                  className="inline-flex items-center justify-center rounded-2xl border border-(--border) bg-white/55 px-8 py-4 text-sm font-semibold text-(--text) backdrop-blur-xl transition-all hover:border-primary/30 hover:bg-white/80 dark:bg-white/4 sm:text-base"
                >
                  View Workflow Lab
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
