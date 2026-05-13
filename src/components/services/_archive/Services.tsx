"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
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
  const mobileSliderRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const container = mobileSliderRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    if (!children.length) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((prev) => (prev === closestIndex ? prev : closestIndex));
  }, []);

  useEffect(() => {
    const container = mobileSliderRef.current;
    if (!container) return;

    const onScroll = () => {
      updateActiveIndex();
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    requestAnimationFrame(onScroll);

    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateActiveIndex]);

  const scrollToCard = (index: number) => {
    const container = mobileSliderRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    const target = children[index];
    if (!target) return;

    container.scrollTo({
      left: target.offsetLeft - 8,
      behavior: "smooth",
    });
  };

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

        <div className="relative z-10 mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary backdrop-blur-md"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Our Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05, ease: "easeOut" }}
              className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
            >
              Full-Spectrum
              <br />
              <span className="gradient-text">Technology Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
              className="mb-8 text-lg text-(--text-muted) md:text-xl"
            >
              We design, build, and scale modern digital products — from web and
              mobile apps to AI-powered systems and cloud platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="#services-grid"
                className="btn-shine inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-8 py-4 font-bold text-dark-900 transition-all hover:-translate-y-1"
              >
                Explore Services
                <HiArrowRight />
              </Link>

              <Link
                href="/contact"
                className="gradient-border inline-flex items-center gap-2 rounded-xl border border-(--border) bg-white/55 px-8 py-4 backdrop-blur-md dark:bg-white/4"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services-grid" className="relative py-20 sm:py-24">
        <div className="absolute inset-x-0 top-10 mx-auto h-64 w-[88%] max-w-5xl rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-56 w-[78%] max-w-4xl rounded-full bg-accent/8 blur-3xl" />

        <div className="relative mx-auto max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45 }}
                className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/8 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary backdrop-blur-md"
              >
                Premium Expertise
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="text-3xl font-bold sm:text-4xl"
              >
                Explore Our Core Services
              </motion.h2>
            </div>
          </div>

          <div className="relative md:hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r from-(--bg) to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l from-(--bg) to-transparent" />

            <div
              ref={mobileSliderRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-4 pt-2 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {services.map((service, index) => {
                const isActive = index === activeIndex;

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                      ease: "easeOut",
                    }}
                    animate={{
                      scale: isActive ? 1 : 0.96,
                      opacity: isActive ? 1 : 0.82,
                      y: isActive ? -4 : 0,
                    }}
                    className="min-w-[86%] snap-center"
                  >
                    <div className="group relative h-full overflow-hidden rounded-4xl border border-white/10 bg-white/72 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-500 dark:bg-white/4 dark:shadow-[0_20px_70px_rgba(2,6,23,0.45)]">
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.10),transparent_34%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.14),transparent_32%)]" />

                      <motion.div
                        animate={{
                          opacity: isActive ? 1 : 0.65,
                          scale: isActive ? 1 : 0.92,
                        }}
                        transition={{ duration: 0.35 }}
                        className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${service.color} shadow-lg`}
                      >
                        <service.icon className="text-2xl text-white" />
                      </motion.div>

                      <div className="relative">
                        <h3 className="text-xl font-bold">{service.title}</h3>

                        <p className="mt-3 text-sm leading-6 text-(--text-muted)">
                          {service.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-xl border border-(--border) bg-white/70 px-3 py-1 text-[11px] font-medium dark:bg-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="mt-7">
                          <Link
                            href={`/blog?category=${service.id}`}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3"
                          >
                            Learn More
                            <HiArrowRight className="text-base" />
                          </Link>
                        </div>
                      </div>

                      <motion.div
                        animate={{
                          opacity: isActive ? 1 : 0.35,
                        }}
                        transition={{ duration: 0.35 }}
                        className="pointer-events-none absolute -inset-px rounded-4xl border border-primary/15"
                      />

                      <motion.div
                        animate={{
                          opacity: isActive ? 0.95 : 0.4,
                          scale: isActive ? 1 : 0.88,
                        }}
                        transition={{ duration: 0.4 }}
                        className={`pointer-events-none absolute -bottom-10 -right-4.5 h-28 w-28 rounded-full bg-linear-to-br ${service.color} blur-3xl opacity-40`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2.5">
              {services.map((service, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={service.id}
                    type="button"
                    aria-label={`Go to ${service.title}`}
                    onClick={() => scrollToCard(index)}
                    className="group relative flex h-3 items-center justify-center"
                  >
                    <motion.span
                      animate={{
                        width: isActive ? 28 : 8,
                        opacity: isActive ? 1 : 0.45,
                      }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className={`block h-2 rounded-full ${
                        isActive
                          ? "bg-linear-to-r from-primary to-accent shadow-[0_0_18px_rgba(59,130,246,0.35)]"
                          : "bg-(--border)"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/72 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-500 dark:bg-white/4 dark:shadow-[0_20px_70px_rgba(2,6,23,0.45)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.10),transparent_34%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.14),transparent_32%)]" />

                <div
                  className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${service.color} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <service.icon className="text-2xl text-white" />
                </div>

                <h3 className="relative text-xl font-bold">{service.title}</h3>

                <p className="relative mt-3 text-sm leading-6 text-(--text-muted)">
                  {service.description}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-xl border border-(--border) bg-white/70 px-3 py-1 text-xs dark:bg-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative mt-6">
                  <Link
                    href={`/blog?category=${service.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3"
                  >
                    Learn More
                    <HiArrowRight />
                  </Link>
                </div>

                <div
                  className={`pointer-events-none absolute -bottom-10 -right-4.5 h-28 w-28 rounded-full bg-linear-to-br ${service.color} blur-3xl opacity-30 transition-opacity duration-500 group-hover:opacity-60`}
                />
                <div className="pointer-events-none absolute -inset-px rounded-4xl border border-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}