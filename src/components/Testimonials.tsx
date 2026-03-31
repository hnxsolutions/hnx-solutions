"use client";

import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";
import { useTilt } from "@/hooks/useTilt";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "CEO, StartupForge",
    text: "HNX Technologies rebuilt our entire platform from scratch. The new system handles 10x more traffic and our conversion rates doubled.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "VP of Product, HealthBridge",
    text: "The mobile app they delivered was flawless. On time, under budget, and the UX exceeded expectations.",
    rating: 5,
  },
  {
    name: "Rajesh Gupta",
    role: "Director, EduSphere",
    text: "Their AI automation reduced our workload by 70%. The chatbot feels human-level.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Founder, ShopLocal",
    text: "A blazing-fast platform handling thousands of orders daily. Best investment we made.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "CTO, DataSync",
    text: "Zero downtime migration with 40% cost reduction. Highly scalable now.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Marketing Head, GrowthPilot",
    text: "Organic traffic grew 300% in 4 months. They understand both tech and business.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative grid-bg bg-[var(--bg)] py-16 text-[var(--text)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>

          <h2 className="mt-4 mb-6 text-4xl font-bold md:text-5xl">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-[var(--text-soft)]">
            Real feedback from businesses we&apos;ve helped scale.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => {
            const { ref, handleMove, reset } = useTilt();

            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true }}
              >
                <div
                  ref={ref}
                  onMouseMove={handleMove}
                  onMouseLeave={reset}
                  className="group glass-card depth-card premium-card cursor-glow rounded-2xl p-8 transition-all duration-500"
                >
                  {/* STARS */}
                  <div className="mb-5 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <HiStar key={j} className="text-lg text-amber-400" />
                    ))}
                  </div>

                  {/* TEXT */}
                  <p className="mb-6 text-sm italic text-[var(--text-muted)]">
                    “{t.text}”
                  </p>

                  {/* USER */}
                  <div className="flex items-center gap-4 border-t border-[var(--border)] pt-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <span className="text-sm font-bold text-dark-900">
                        {t.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>

                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-[var(--text-soft)]">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}