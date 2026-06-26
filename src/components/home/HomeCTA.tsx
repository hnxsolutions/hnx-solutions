"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

export default function HomeCTA() {
  return (
    <section className="relative overflow-hidden bg-(--bg) py-24 text-(--text)">
      <div className="pointer-events-none absolute left-10 top-4 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-52 w-52 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-full px-3 sm:max-w-5xl sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true }}
          className="glass-card depth-card cursor-glow relative overflow-hidden rounded-4xl p-10 text-center md:p-16"
        >
          <div className="absolute inset-0 -z-10 rounded-4xl bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_28%)] dark:bg-[radial-gradient(circle_at_top,rgba(77,208,225,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(149,117,205,0.08),transparent_28%)]" />
          <div className="absolute left-1/2 top-0 h-1 w-40 -translate-x-1/2 rounded-full bg-linear-to-r from-primary/70 to-accent/70 opacity-70" />

          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Start Building
          </span>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            Ready to Build <span className="gradient-text">Your Next Project?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-(--text-soft)">
            We turn ideas into polished, scalable, production-ready digital products
            with premium design, modern engineering, and AI-powered execution.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn-shine inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-8 py-4 text-base font-bold text-dark-900 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
            >
              Start Your Project
              <HiArrowRight />
            </Link>

            <Link
              href="/services"
              className="gradient-border inline-flex items-center justify-center gap-2 rounded-xl border border-(--border) bg-white/55 px-8 py-4 text-base font-semibold text-(--text) transition-all hover:bg-white/80 dark:bg-white/3"
            >
              View Services
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              "Design-led product strategy",
              "Fast delivery with modern stack",
              "Built for growth and scale",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/10 px-4 py-4 text-sm text-(--text-soft)"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
