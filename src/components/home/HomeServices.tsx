"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiCode,
  HiDeviceMobile,
  HiLightningBolt,
} from "react-icons/hi";
import MobileAutoSlider from "@/components/shared/MobileAutoSlider";
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
    href: "/services",
    color: "from-violet-400 to-purple-500",
  },
  {
    icon: HiLightningBolt,
    title: "AI & Automation",
    description:
      "Custom AI chatbots, workflow automation, and intelligent business systems.",
    href: "/services",
    color: "from-amber-400 to-orange-500",
  },
];

const featureHighlights = [
  {
    title: "Launch faster",
    description: "Turn ideas into production-ready systems with smart architecture.",
  },
  {
    title: "Conversion-first UX",
    description: "Design and build experiences that guide visitors to action.",
  },
  {
    title: "Connected systems",
    description: "Web, app, CRM, portal, and automation that work as one.",
  },
  {
    title: "Scalable growth",
    description: "Built for future features, integrations, and evolving workflows.",
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
        delay: index * 0.14,
        duration: 0.64,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="premium-ease"
      >
        <Link
          href={svc.href}
          className="group glass-card depth-card premium-card cursor-glow block h-full rounded-3xl border border-white/10 bg-white/60 p-8 transition-all duration-500 hover:bg-white/75 dark:bg-white/5"
        >
          <div
            className={`mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-linear-to-br ${svc.color} transition-transform duration-300 group-hover:scale-110`}
          >
            <svc.icon className="text-2xl text-white" />
          </div>

          <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary">
            {svc.title}
          </h3>

          <p className="mb-6 text-sm leading-7 text-(--text-soft)">
            {svc.description}
          </p>

          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Learn more
            <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
}

export default function HomeServices() {
  return (
    <section className="relative overflow-hidden bg-(--bg) py-20 text-(--text)">
      <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-60 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_56%)]" />

      <div className="relative mx-auto w-full max-w-full px-3 sm:max-w-[min(92vw,1440px)] sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            What We Do
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
            Our premium <span className="gradient-text">digital services</span>
            <br className="hidden sm:block" /> for growth-focused businesses.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-(--text-soft)">
            We deliver end-to-end solutions across web, mobile, CRM, portals, and AI automation with polished UI, fast performance, and modern engineering.
          </p>
        </motion.div>

        <MobileAutoSlider hideAt="md" duration="short" className="-mx-3 mb-8">
          {highlights.map((svc, i) => (
            <div key={svc.title} className="w-[82vw] max-w-85 shrink-0">
              <ServiceCard svc={svc} index={i} />
            </div>
          ))}
        </MobileAutoSlider>

        <div className="hidden gap-8 md:grid md:grid-cols-3">
          {highlights.map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} index={i} />
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featureHighlights.map((item) => (
            <div
              key={item.title}
              className="glass-card depth-card rounded-3xl border border-white/10 bg-white/50 p-5 text-center dark:bg-white/5"
            >
              <h3 className="text-base font-semibold text-(--text)">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-(--text-soft)">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="btn-shine gradient-border inline-flex items-center justify-center gap-2 rounded-xl border border-(--border) bg-white/50 px-8 py-3.5 font-semibold transition-all hover:bg-white/80 dark:bg-white/3"
          >
            View All Services
            <HiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
