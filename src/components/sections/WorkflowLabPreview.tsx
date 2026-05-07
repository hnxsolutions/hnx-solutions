"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  FaBell,
  FaBirthdayCake,
  FaCalendarCheck,
  FaChartLine,
  FaCheckDouble,
  FaCreditCard,
  FaFileAlt,
  FaFileInvoice,
  FaTasks,
  FaUndoAlt,
  FaUserCheck,
  FaWhatsapp,
} from "react-icons/fa";
import { HiArrowRight, HiCheck, HiCog, HiLightningBolt } from "react-icons/hi";
import {
  workflowAutomations,
  type WorkflowAutomation,
} from "@/data/hnx-crm";

const workflowIconMap: Record<
  WorkflowAutomation["iconKey"],
  ComponentType<{ className?: string }>
> = {
  birthday: FaBirthdayCake,
  assignment: FaUserCheck,
  followup: FaBell,
  invoice: FaFileInvoice,
  whatsapp: FaWhatsapp,
  winback: FaUndoAlt,
  task: FaTasks,
  payment: FaCreditCard,
  appointment: FaCalendarCheck,
  document: FaFileAlt,
  approval: FaCheckDouble,
  pipeline: FaChartLine,
};

const steps = [
  "Choose a workflow",
  "Complete purchase/request activation",
  "HNX verifies CRM compatibility",
  "Workflow is installed/configured",
  "Client starts using it",
];

function getWorkflowHref(workflow: WorkflowAutomation) {
  return `/contact?workflow=${encodeURIComponent(workflow.title)}`;
}

export default function WorkflowLabPreview() {
  return (
    <main className="page-shell">
      <section className="page-hero hero-light relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(16,185,129,0.12),transparent_28%),radial-gradient(circle_at_82%_74%,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_52%_22%,rgba(139,92,246,0.08),transparent_24%)]" />
        <div className="relative z-10 mx-auto max-w-[min(95vw,1600px)] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.98fr_1.02fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-500 dark:text-emerald-200">
                <HiCog />
                HNX Workflow Lab
              </span>

              <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Buy Workflow Add-ons
                <span className="gradient-text block">for Your HNX CRM</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-(--text-muted) sm:text-lg md:text-xl">
                Purchase ready-made workflow automations and activate them
                inside your CRM without rebuilding the full system.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#workflow-grid"
                  className="btn-shine inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-primary to-accent px-7 py-4 text-sm font-bold text-dark-900 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25 sm:text-base"
                >
                  Browse Workflows
                  <HiArrowRight />
                </a>
                <Link
                  href="/crm-systems"
                  className="inline-flex items-center justify-center rounded-2xl border border-(--border) bg-white/55 px-7 py-4 text-sm font-semibold text-(--text) backdrop-blur-xl transition-all hover:border-primary/30 hover:bg-white/80 dark:bg-white/4 sm:text-base"
                >
                  Explore HNX CRM
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 34, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-slate-950/88 p-5 text-white shadow-[0_24px_80px_rgba(2,6,23,0.34)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.16),transparent_32%)]" />
              <div className="relative z-10">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-100/62">
                      Workflow Marketplace Concept
                    </p>
                    <h2 className="mt-1 text-xl font-bold">Activation Board</h2>
                  </div>
                  <span className="rounded-full bg-emerald-300/12 px-3 py-1.5 text-xs font-semibold text-emerald-100">
                    Future-ready
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {workflowAutomations.slice(0, 4).map((workflow) => {
                    const Icon = workflowIconMap[workflow.iconKey];

                    return (
                      <div
                        key={workflow.title}
                        className="rounded-2xl border border-white/10 bg-white/7 p-4"
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-300/12 text-emerald-100">
                            <Icon />
                          </span>
                          <div>
                            <p className="text-sm font-semibold">{workflow.title}</p>
                            <p className="text-[11px] text-white/48">
                              {workflow.price}
                            </p>
                          </div>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div className="h-full w-3/4 rounded-full bg-linear-to-r from-emerald-300 to-cyan-300" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="workflow-grid" className="relative py-18 sm:py-22 lg:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-72 w-[86%] max-w-5xl rounded-full bg-primary/8 blur-3xl" />
        <div className="relative mx-auto max-w-[min(95vw,1600px)] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-3xl"
          >
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Workflow Add-ons
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Activate automation modules as your CRM grows
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-(--text-soft) md:text-lg">
              Start with the CRM foundation, then add focused workflow modules
              when your operations need more speed, reminders, or control.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {workflowAutomations.map((workflow, index) => {
              const Icon = workflowIconMap[workflow.iconKey];

              return (
                <motion.article
                  key={workflow.title}
                  initial={{ opacity: 0, y: 28, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.16 }}
                  transition={{
                    duration: 0.46,
                    delay: index * 0.035,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -7 }}
                  className="group relative flex h-full min-h-[24rem] flex-col overflow-hidden rounded-[1.6rem] border border-(--border) bg-white/70 p-5 shadow-[0_18px_54px_rgba(15,23,42,0.09)] backdrop-blur-2xl transition-all duration-500 hover:border-primary/24 dark:bg-white/5 dark:shadow-[0_20px_64px_rgba(0,0,0,0.34)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.12),transparent_30%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <span className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-400/18 to-cyan-400/18 text-emerald-500 ring-1 ring-emerald-400/16 dark:text-emerald-200">
                        <Icon className="text-2xl" />
                      </span>
                      <span className="rounded-full border border-(--border) bg-white/48 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-(--text-soft) dark:bg-white/4">
                        {workflow.tier}
                      </span>
                    </div>

                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                      {workflow.category}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-(--text)">
                      {workflow.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-(--text-soft)">
                      {workflow.automates}
                    </p>

                    <div className="mt-5 rounded-2xl border border-(--border) bg-white/45 p-4 dark:bg-white/4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-(--text-soft)">
                        Suggested one-time price
                      </p>
                      <p className="mt-2 text-2xl font-black text-cyan-500 dark:text-cyan-300">
                        {workflow.price}
                      </p>
                    </div>

                    <div className="mt-auto grid gap-3 pt-6 sm:grid-cols-2">
                      <Link
                        href={getWorkflowHref(workflow)}
                        className="inline-flex items-center justify-center rounded-2xl border border-(--border) bg-white/45 px-4 py-3 text-sm font-bold text-(--text) transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary dark:bg-white/4"
                      >
                        View Details
                      </Link>
                      <Link
                        href={getWorkflowHref(workflow)}
                        className="btn-shine inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-primary to-accent px-4 py-3 text-sm font-bold text-dark-900 transition-all hover:-translate-y-0.5"
                      >
                        Add to CRM
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

      <section className="relative py-18 sm:py-22 lg:py-24">
        <div className="relative mx-auto max-w-[min(95vw,1600px)] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[1.75rem] border border-(--border) bg-white/64 p-6 backdrop-blur-2xl dark:bg-white/5"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <HiLightningBolt className="text-xl" />
              </span>
              <h2 className="mt-5 text-2xl font-black tracking-tight sm:text-3xl">
                How it works
              </h2>
              <p className="mt-3 text-sm leading-7 text-(--text-soft)">
                HNX keeps workflow activation practical and compatible with the
                CRM system you already own.
              </p>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-5">
              {steps.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.42, delay: index * 0.06 }}
                  className="rounded-[1.4rem] border border-(--border) bg-white/64 p-4 backdrop-blur-2xl dark:bg-white/5"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-primary to-accent text-sm font-black text-dark-900">
                    {index + 1}
                  </span>
                  <p className="mt-4 text-sm font-semibold leading-6 text-(--text)">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 overflow-hidden rounded-[1.75rem] border border-(--border) bg-white/70 p-6 backdrop-blur-2xl dark:bg-white/5"
          >
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Future Automation Vision
                </span>
                <h2 className="mt-5 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
                  Workflow activation can become faster over time
                </h2>
                <p className="mt-4 text-base leading-8 text-(--text-soft)">
                  Today, workflows can be activated by the HNX team. In the
                  future, supported workflows can be activated automatically
                  after purchase.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {["Payment verified", "Entitlement unlocked", "Workflow active"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-(--border) bg-white/45 p-4 dark:bg-white/4"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-500 dark:text-emerald-300">
                        <HiCheck />
                      </span>
                      <p className="mt-3 text-sm font-semibold text-(--text)">
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
