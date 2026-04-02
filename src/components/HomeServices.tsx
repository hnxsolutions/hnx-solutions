"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiCode,
  HiDeviceMobile,
  HiLightningBolt,
  HiArrowRight,
} from "react-icons/hi";
import { useTilt } from "@/hooks/useTilt";

const highlights = [
  {
    icon: HiCode,
    title: "Web Development",
    description:
      "High-performance web applications built with Next.js, React, and modern frameworks.",
    href: "/services",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: HiDeviceMobile,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile apps with native performance for iOS and Android.",
    href: "/services", // ✅ changed
    color: "from-violet-400 to-purple-500",
  },
  {
    icon: HiLightningBolt,
    title: "AI & Automation",
    description:
      "Custom AI chatbots, workflow automation, and intelligent business systems.",
    href: "/services", // ✅ changed
    color: "from-amber-400 to-orange-500",
  },
];

function ServiceCard({
  svc,
  index,
}: {
  svc: (typeof highlights)[number];
  index: number;
}) {
  const { ref, handleMove, reset } = useTilt<HTMLDivElement>();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true }}
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="premium-ease"
      >
        <Link
          href={svc.href}
          className="group glass-card depth-card premium-card cursor-glow block rounded-2xl p-8 transition-all duration-500"
        >
          <div
            className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br ${svc.color} transition-transform duration-300 group-hover:scale-110`}
          >
            <svc.icon className="text-2xl text-white" />
          </div>

          <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary">
            {svc.title}
          </h3>

          <p className="mb-4 text-sm text-(--text-soft)">
            {svc.description}
          </p>

          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            Learn more
            <HiArrowRight className="transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
}

export default function HomeServices() {
  return (
    <section className="relative bg-(--bg) py-16 text-(--text)">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            What We Do
          </span>

          <h2 className="mt-4 mb-6 text-4xl font-bold md:text-5xl">
            Our Core <span className="gradient-text">Services</span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-(--text-soft)">
            We deliver end-to-end solutions across web, mobile, and AI.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="btn-shine gradient-border inline-flex items-center gap-2 rounded-xl border border-(--border) bg-white/50 px-8 py-3.5 font-semibold transition-all hover:bg-white/80 dark:bg-white/3"
          >
            View All Services
            <HiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}