"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

export default function HomeCTA() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/40 to-dark-900" />
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-12 md:p-16 glow-border"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Build <span className="gradient-text">Your Next Project?</span>
          </h2>
          <p className="text-light-300 text-lg max-w-xl mx-auto mb-10">
            From web platforms to mobile apps to AI automation — we turn ideas
            into production-ready products. Let&apos;s start the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-dark-900 font-bold rounded-xl text-base hover:shadow-xl hover:shadow-primary/25 transition-all hover:-translate-y-1"
            >
              Start Your Project
              <HiArrowRight />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-light-300/20 text-light-100 font-semibold rounded-xl text-base hover:bg-white/5 hover:border-primary/30 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
