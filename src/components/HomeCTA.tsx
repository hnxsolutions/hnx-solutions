"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

export default function HomeCTA() {
  return (
    <section className="relative bg-[var(--bg)] py-20 text-[var(--text)]">
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true }}
          className="glass-card depth-card premium-card cursor-glow rounded-3xl p-12 md:p-16"
        >
          {/* TITLE */}
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Ready to Build{" "}
            <span className="gradient-text">Your Next Project?</span>
          </h2>

          {/* TEXT */}
          <p className="mx-auto mb-10 max-w-xl text-lg text-[var(--text-soft)]">
            We transform ideas into scalable, production-ready products.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="btn-shine inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-bold text-dark-900 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
            >
              Start Your Project
              <HiArrowRight />
            </Link>

            <Link
              href="/services"
              className="gradient-border inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-white/50 px-8 py-4 text-base font-semibold transition-all hover:bg-white/80 dark:bg-white/[0.03]"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}