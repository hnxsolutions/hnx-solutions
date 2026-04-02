"use client";

import Link from "next/link";
import Image from "next/image";
import {
  HiCode,
  HiDeviceMobile,
  HiLightningBolt,
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
      <section className="hero-light relative isolate min-h-[88vh] overflow-hidden pb-20 pt-32 sm:pt-36 lg:flex lg:items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={servicesHeroBgImage}
            alt="Services Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_center] scale-[1.08] opacity-80 brightness-[1.55] contrast-110 saturate-[0.9] md:object-center dark:opacity-36 dark:brightness-[0.42]"
          />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(248,250,252,0.92)_0%,rgba(248,250,252,0.82)_24%,rgba(248,250,252,0.48)_52%,rgba(248,250,252,0.12)_78%,rgba(248,250,252,0.03)_100%)] dark:bg-[linear-gradient(to_right,rgba(24,24,24,0.98)_0%,rgba(24,24,24,0.94)_28%,rgba(24,24,24,0.78)_54%,rgba(24,24,24,0.38)_76%,rgba(24,24,24,0.14)_100%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(14,165,233,0.12),transparent_28%),radial-gradient(circle_at_82%_76%,rgba(99,102,241,0.12),transparent_24%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(15,23,42,0.12),transparent_45%)]" />

          <div className="absolute left-0 top-1/2 hidden h-136 w-120 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.14)_46%,rgba(255,255,255,0)_74%)] blur-2xl lg:block" />
          <div className="absolute right-0 top-1/2 hidden h-136 w-152 -translate-y-1/2 bg-[radial-gradient(circle,rgba(6,10,18,0.68)_0%,rgba(6,10,18,0.42)_44%,rgba(6,10,18,0)_76%)] blur-2xl" />
        </div>

        <div className="absolute left-10 top-24 z-1 h-72 w-72 rounded-full bg-primary/6 blur-3xl" />
        <div className="absolute bottom-16 right-10 z-1 h-72 w-72 rounded-full bg-accent/6 blur-3xl" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Our Services
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Full-Spectrum
              <br />
              <span className="gradient-text">Technology Services</span>
            </h1>

            <p className="mb-8 text-lg text-(--text-muted) md:text-xl">
              We design, build, and scale modern digital products — from web and
              mobile apps to AI-powered systems and cloud platforms.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#services-grid"
                className="btn-shine inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-8 py-4 font-bold text-dark-900 transition-all hover:-translate-y-1"
              >
                Explore Services
                <HiArrowRight />
              </Link>

              <Link
                href="/contact"
                className="gradient-border inline-flex items-center gap-2 rounded-xl border border-(--border) bg-white/55 px-8 py-4 dark:bg-white/4"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="services-grid" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="glass-card premium-card cursor-glow rounded-4xl p-8"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${service.color}`}
                >
                  <service.icon className="text-2xl text-white" />
                </div>

                <h3 className="text-xl font-bold">{service.title}</h3>

                <p className="mt-3 text-sm text-(--text-muted)">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-xl border border-(--border) bg-white/55 px-3 py-1 text-xs dark:bg-white/3"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href={`/blog?category=${service.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
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