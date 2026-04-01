"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiCode,
  HiDeviceMobile,
  HiLightningBolt,
  HiCloud,
  HiColorSwatch,
  HiTrendingUp,
  HiBriefcase,
  HiCog,
  HiServer,
  HiArrowRight,
} from "react-icons/hi";

const servicesHeroBgImage =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85";

const services = [
  {
    id: "web-development",
    icon: HiCode,
    title: "Web Development",
    description:
      "High-performance web applications built with Next.js, React, and modern frameworks.",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    id: "saas-development",
    icon: HiServer,
    title: "SaaS Development",
    description:
      "Build scalable SaaS platforms with modern architecture and seamless UX.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    color: "from-indigo-400 to-violet-600",
  },
  {
    id: "mobile-apps",
    icon: HiDeviceMobile,
    title: "Mobile App Development",
    description:
      "Cross-platform apps with React Native & Flutter for iOS and Android.",
    tags: ["React Native", "Flutter", "Expo"],
    color: "from-violet-400 to-purple-500",
  },
  {
    id: "crm-salesforce",
    icon: HiBriefcase,
    title: "CRM & Salesforce",
    description:
      "Custom CRM and Salesforce solutions for automation and growth.",
    tags: ["Salesforce", "Apex", "LWC"],
    color: "from-orange-400 to-red-500",
  },
  {
    id: "devops",
    icon: HiCog,
    title: "DevOps",
    description:
      "CI/CD, automation, and scalable infrastructure deployment.",
    tags: ["Docker", "AWS", "Kubernetes"],
    color: "from-slate-400 to-gray-500",
  },
  {
    id: "ai-automation",
    icon: HiLightningBolt,
    title: "AI & Automation",
    description:
      "AI agents, chatbots, and workflow automation using modern LLMs.",
    tags: ["GPT", "LangChain", "Automation"],
    color: "from-amber-400 to-orange-500",
  },
];

export default function Services() {
  return (
    <main className="relative overflow-hidden bg-(--bg) text-(--text)">
      {/* HERO (Same as About) */}
      <section className="hero-light relative isolate min-h-[88vh] overflow-hidden pt-32 pb-20 sm:pt-36 lg:flex lg:items-center">
        
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <Image
            src={servicesHeroBgImage}
            alt="Services Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_center] scale-[1.08] opacity-80 brightness-[1.55] contrast-110 saturate-[0.9] md:object-center dark:opacity-36 dark:brightness-[0.42]"
          />

          {/* MAIN GRADIENT (same as About) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(248,250,252,0.92)_0%,rgba(248,250,252,0.82)_24%,rgba(248,250,252,0.48)_52%,rgba(248,250,252,0.12)_78%,rgba(248,250,252,0.03)_100%)] dark:bg-[linear-gradient(to_right,rgba(24,24,24,0.98)_0%,rgba(24,24,24,0.94)_28%,rgba(24,24,24,0.78)_54%,rgba(24,24,24,0.38)_76%,rgba(24,24,24,0.14)_100%)]" />

          {/* GLOW LAYERS */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(14,165,233,0.12),transparent_28%),radial-gradient(circle_at_82%_76%,rgba(99,102,241,0.12),transparent_24%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(15,23,42,0.12),transparent_45%)]" />

          {/* SIDE LIGHT BLOBS */}
          <div className="absolute left-0 top-1/2 hidden h-[34rem] w-[30rem] -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.14)_46%,rgba(255,255,255,0)_74%)] blur-2xl lg:block" />
          <div className="absolute right-0 top-1/2 hidden h-[34rem] w-[38rem] -translate-y-1/2 bg-[radial-gradient(circle,rgba(6,10,18,0.68)_0%,rgba(6,10,18,0.42)_44%,rgba(6,10,18,0)_76%)] blur-2xl" />
        </div>

        {/* FLOATING LIGHT */}
        <div className="absolute left-10 top-24 z-1 h-72 w-72 rounded-full bg-primary/6 blur-3xl" />
        <div className="absolute bottom-16 right-10 z-1 h-72 w-72 rounded-full bg-accent/6 blur-3xl" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Our Services
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Full-Spectrum
              <br />
              <span className="gradient-text">Technology Services</span>
            </h1>

            <p className="text-lg md:text-xl text-(--text-muted) mb-8">
              We design, build, and scale modern digital products — from web and
              mobile apps to AI-powered systems and cloud platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#services-grid"
                className="btn-shine inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-linear-to-r from-primary to-accent font-bold text-dark-900 hover:-translate-y-1 transition-all"
              >
                Explore Services
                <HiArrowRight />
              </Link>

              <Link
                href="/contact"
                className="gradient-border inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-(--border) bg-white/55 dark:bg-white/4"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services-grid" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="glass-card rounded-4xl p-8 premium-card cursor-glow"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${service.color}`}
                >
                  <service.icon className="text-white text-2xl" />
                </div>

                <h3 className="text-xl font-bold">{service.title}</h3>

                <p className="mt-3 text-(--text-muted) text-sm">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-xl border border-(--border) bg-white/55 dark:bg-white/3"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href={`/blog?category=${service.id}`}
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold"
                  >
                    Learn More
                    <HiArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}