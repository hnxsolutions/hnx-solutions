"use client";

import Link from "next/link";
import type { ServiceItem } from "@/data/services";
import { ArrowRight, CalendarCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

type ServiceCTAProps = {
  service: ServiceItem;
};

export default function ServiceCTA({ service }: ServiceCTAProps) {
  return (
    <section className="relative pb-20 pt-8">
      <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6, rotateX: 2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative transform-gpu overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 text-center shadow-[0_30px_90px_rgba(15,23,42,0.12)] will-change-transform dark:border-white/10 dark:bg-white/6 dark:shadow-[0_30px_90px_rgba(0,0,0,0.32)] sm:p-10 md:p-14"
        >
          <div
            className={`pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br ${service.accent} opacity-20 blur-3xl`}
          />
          <div
            className={`pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-gradient-to-br ${service.accent} opacity-15 blur-3xl`}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),transparent_42%,rgba(37,99,235,0.08))] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_46%,rgba(56,189,248,0.08))]" />

          <div className="relative z-10" style={{ transform: "translateZ(16px)" }}>
            <span
              className={`mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br ${service.accent} text-white shadow-[0_18px_48px_rgba(37,99,235,0.2)]`}
            >
              <Sparkles className="h-7 w-7" aria-hidden="true" />
            </span>

            <p className="mt-6 text-xs font-medium uppercase tracking-[0.24em] text-[#145cb7] dark:text-cyan-300">
              Ready to start
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-slate-950 antialiased dark:text-white sm:text-4xl">
              {service.ctaTitle}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base font-normal leading-8 text-slate-600 antialiased dark:text-slate-300">
              {service.ctaDescription}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={`group relative inline-flex overflow-hidden rounded-2xl bg-gradient-to-r ${service.accent} px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1`}
              >
                <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.32),transparent)] transition duration-700 group-hover:translate-x-full" />
                <span className="relative inline-flex items-center justify-center gap-2">
                  <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                  Book a Consultation
                </span>
              </Link>

              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:border-blue-200 hover:bg-blue-50 dark:border-white/10 dark:bg-white/7 dark:text-white dark:hover:border-cyan-300/25 dark:hover:bg-cyan-300/10"
              >
                View Portfolio
                <ArrowRight
                  className="h-4 w-4 transition group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}