"use client";
import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "CEO, StartupForge",
    text: "HNX Technologies rebuilt our entire platform from scratch. The new system handles 10x more traffic and our conversion rates doubled. Their team is incredibly talented and responsive.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "VP of Product, HealthBridge",
    text: "The mobile app they delivered for our telemedicine platform was flawless. On time, under budget, and the UX was better than what we envisioned. Truly a world-class team.",
    rating: 5,
  },
  {
    name: "Rajesh Gupta",
    role: "Director, EduSphere",
    text: "Their AI automation system reduced our customer support workload by 70%. The chatbot handles queries so naturally that users think they're talking to a human. Incredible work.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Founder, ShopLocal",
    text: "We needed an e-commerce platform that could scale fast. HNX delivered a beautiful, blazing-fast store that processes thousands of orders daily. Best investment we made.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "CTO, DataSync",
    text: "The cloud migration they executed was seamless. Zero downtime, 40% cost reduction, and our infrastructure is now infinitely more scalable. Highly recommended.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Marketing Head, GrowthPilot",
    text: "HNX's digital growth strategy and SEO optimization increased our organic traffic by 300% in just 4 months. They truly understand both technology and business.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 relative grid-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-light-300 text-lg max-w-2xl mx-auto">
            Real feedback from businesses we&apos;ve helped transform with technology.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 glow-border hover:-translate-y-1 transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <HiStar key={j} className="text-amber-400 text-lg" />
                ))}
              </div>

              <p className="text-light-200 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-sm font-bold text-dark-900">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-light-300">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
