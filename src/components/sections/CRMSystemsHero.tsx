"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight, HiCalendar, HiSparkles } from "react-icons/hi";
import CRMDashboardMockup from "@/components/sections/CRMDashboardMockup";

export default function CRMSystemsHero() {
  return (
    <section className="page-hero hero-light relative isolate overflow-hidden bg-(--bg) text-(--text)">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(139,92,246,0.12),transparent_28%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(77,208,225,0.16),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(149,117,205,0.14),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-(--bg) to-transparent" />

      <div className="relative z-10 mx-auto max-w-[min(95vw,1600px)] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              <HiSparkles />
              HNX CRM Systems
            </span>

            <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Stop Renting Generic CRMs.
              <span className="gradient-text block">
                Build Your Own Business System.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-(--text-muted) sm:text-lg md:text-xl">
              HNX builds custom CRM systems with automation, AI insights,
              dashboards, secure roles, and workflows designed around your exact
              business process.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#live-crm-preview"
                className="btn-shine inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-primary to-accent px-7 py-4 text-sm font-bold text-dark-900 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25 sm:text-base"
              >
                Explore CRM Demo
                <HiArrowRight />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-(--border) bg-white/55 px-7 py-4 text-sm font-semibold text-(--text) backdrop-blur-xl transition-all hover:border-primary/30 hover:bg-white/80 dark:bg-white/4 sm:text-base"
              >
                Book CRM Consultation
                <HiCalendar />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2.2rem] bg-linear-to-br from-primary/18 via-accent/12 to-cyan-300/10 blur-2xl" />
            <CRMDashboardMockup compact className="relative" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
