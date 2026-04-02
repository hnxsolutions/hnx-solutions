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

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const { ref, handleMove, reset } = useTilt<HTMLDivElement>();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
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
        <div className="mb-5 flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, j) => (
            <HiStar key={j} className="text-lg text-amber-400" />
          ))}
        </div>

        <p className="mb-6 text-sm italic text-(--text-muted)">
          “{testimonial.text}”
        </p>

        <div className="flex items-center gap-4 border-t border-(--border) pt-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-primary to-accent">
            <span className="text-sm font-bold text-dark-900">
              {testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>

          <div>
            <p className="text-sm font-semibold">{testimonial.name}</p>
            <p className="text-xs text-(--text-soft)">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative grid-bg bg-(--bg) py-16 text-(--text)">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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

          <h2 className="mb-6 mt-4 text-4xl font-bold md:text-5xl">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-(--text-soft)">
            Real feedback from businesses we&apos;ve helped scale.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}