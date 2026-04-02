"use client";

import { motion } from "framer-motion";
import { FaAward, FaUsers, FaRocket } from "react-icons/fa";

const stats = [
  {
    icon: <FaRocket className="text-accent text-2xl" />,
    value: "20+",
    label: "Projects Delivered",
  },
  {
    icon: <FaUsers className="text-accent text-2xl" />,
    value: "15+",
    label: "Happy Clients",
  },
  {
    icon: <FaAward className="text-accent text-2xl" />,
    value: "2+",
    label: "Years Experience",
  },
];

const reasons = [
  {
    icon: <FaAward className="text-primary text-2xl" />,
    title: "Proven Expertise",
    desc: "Seasoned engineers and designers with practical product experience across web, mobile, and AI delivery.",
  },
  {
    icon: <FaUsers className="text-primary text-2xl" />,
    title: "Client-First Approach",
    desc: "We align with your business goals, maintain transparent communication, and focus on measurable outcomes.",
  },
  {
    icon: <FaRocket className="text-primary text-2xl" />,
    title: "Agile & Reliable",
    desc: "Fast-moving execution, strong technical discipline, and ongoing support that keeps projects growing after launch.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Why HNX
          </span>
          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Why Choose <span className="gradient-text">Us</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-(--text-muted)">
            We deliver more than features. We build refined digital products with
            strong engineering, clear thinking, and reliable execution.
          </p>
        </motion.div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="premium-card glass-card cursor-glow rounded-[1.75rem] p-8 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-primary/15 to-accent/15">
                {r.icon}
              </div>
              <h3 className="text-xl font-bold">{r.title}</h3>
              <p className="mt-3 text-sm leading-7 text-(--text-muted)">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="premium-card glass-card rounded-[1.75rem] p-8 text-center"
            >
              <div className="mb-4 flex justify-center">{stat.icon}</div>
              <p className="gradient-text text-3xl font-bold md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-(--text-muted)">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}