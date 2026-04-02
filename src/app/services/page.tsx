"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import {
  FaCloud,
  FaMobileAlt,
  FaRobot,
  FaPalette,
  FaChartLine,
  FaBriefcase,
  FaCog,
  FaServer,
} from "react-icons/fa";
import AnimatedGridBG from "@/components/AnimatedGridBG";
import { heroDashboardSvg } from "@/components/heroDashboardSvg";
import WhyChooseUs from "@/components/WhyChooseUs";
import { heroBgUrl } from "@/components/heroBgUrl";
import Image from "next/image";
import { services } from "@/data/services";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, type: "spring" as const },
  },
};

export default function ServicesPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateIsMobile);
      return () => mediaQuery.removeEventListener("change", updateIsMobile);
    }

    mediaQuery.addListener(updateIsMobile);
    return () => mediaQuery.removeListener(updateIsMobile);
  }, []);

  return (
    <main className="page-shell">
      <section className="page-hero hero-light relative isolate flex min-h-[78svh] items-center md:min-h-[88vh]">
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src={heroBgUrl}
            alt="Modern technology workspace"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_center] scale-[1.08] opacity-80 brightness-[0.55] contrast-110 saturate-[0.9] md:object-center dark:opacity-36 dark:brightness-[0.42] dark:contrast-110 dark:saturate-90"
          />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(248,250,252,0.92)_0%,rgba(248,250,252,0.82)_24%,rgba(248,250,252,0.48)_52%,rgba(248,250,252,0.12)_78%,rgba(248,250,252,0.03)_100%)] dark:bg-[linear-gradient(to_right,rgba(24,24,24,0.98)_0%,rgba(24,24,24,0.94)_28%,rgba(24,24,24,0.78)_54%,rgba(24,24,24,0.38)_76%,rgba(24,24,24,0.14)_100%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(14,165,233,0.12),transparent_28%),radial-gradient(circle_at_82%_76%,rgba(99,102,241,0.12),transparent_24%)] dark:bg-[radial-gradient(circle_at_16%_24%,rgba(77,208,225,0.16),transparent_30%),radial-gradient(circle_at_84%_74%,rgba(149,117,205,0.14),transparent_26%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(15,23,42,0.12),transparent_45%)] dark:bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.38),transparent_48%)]" />

          <div
            aria-hidden
            className="absolute right-[3%] top-1/2 hidden w-200 max-w-[60vw] -translate-y-1/2 opacity-10 blur-[0.2px] lg:block dark:opacity-20"
            dangerouslySetInnerHTML={{ __html: heroDashboardSvg }}
          />

          <div className="absolute left-0 top-1/2 hidden h-136 w-120 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.14)_46%,rgba(255,255,255,0)_74%)] blur-2xl lg:block dark:hidden" />
          <div className="absolute right-0 top-1/2 hidden h-136 w-152 -translate-y-1/2 bg-[radial-gradient(circle,rgba(6,10,18,0.68)_0%,rgba(6,10,18,0.42)_44%,rgba(6,10,18,0)_76%)] blur-2xl dark:lg:block" />
        </div>

        <AnimatedGridBG />

        <div className="absolute left-10 top-24 z-1 h-72 w-72 rounded-full bg-primary/6 blur-3xl dark:bg-primary/4" />
        <div className="absolute bottom-16 right-10 z-1 h-72 w-72 rounded-full bg-accent/6 blur-3xl dark:bg-accent/4" />
        <div className="absolute left-1/2 top-1/2 z-1 h-144 w-xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/4 blur-[120px] dark:bg-primary/2" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            aria-hidden
            className="absolute left-[24%] top-1/2 h-85 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.58)_40%,rgba(255,255,255,0.14)_68%,rgba(255,255,255,0)_100%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(5,10,18,0.82)_0%,rgba(5,10,18,0.58)_40%,rgba(5,10,18,0.14)_68%,rgba(5,10,18,0)_100%)]"
          />

          <div className="relative z-10 max-w-3xl text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Premium Digital Delivery
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 max-w-4xl text-4xl font-extrabold leading-none tracking-tight text-(--text) sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ textShadow: "0 10px 40px rgba(0, 0, 0, 0.08)" }}
            >
              Full-Spectrum
              <br />
              <span className="bg-linear-to-r from-cyan-400 via-sky-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400">
                Technology Services
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8 max-w-2xl text-base leading-relaxed text-(--text-muted) sm:text-lg md:text-xl lg:mx-0"
            >
              Explore our core services across web, mobile, SaaS, CRM, DevOps,
              AI, cloud, design, and digital growth. Choose the service you need
              and open its dedicated detail page for full scope, packages, and
              pricing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link
                href="#services-grid"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-400 via-sky-400 to-violet-400 px-7 py-3.5 font-semibold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(56,189,248,0.28)]"
              >
                Explore Services
                <HiArrowRight className="text-lg" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-(--border) bg-white/45 px-7 py-3.5 font-medium text-(--text) backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/70 dark:bg-black/20 dark:text-(--text)"
              >
                Start Your Project
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-(--text-soft) lg:justify-start"
            >
              {["Web Platforms", "Mobile Apps", "SaaS Products", "AI Systems"].map(
                (item, index) => (
                  <span key={item} className="inline-flex items-center gap-4">
                    <span className="font-medium tracking-wide">{item}</span>
                    {index < 3 ? (
                      <span className="h-1 w-1 rounded-full bg-cyan-400/70" />
                    ) : null}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services-grid" className="section-shell relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-black/1 to-transparent dark:from-(--bg) dark:via-[rgba(255,255,255,0.01)] dark:to-(--bg)" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-3xl text-center lg:text-left"
          >
            <span className="inline-flex items-center rounded-full border border-(--border) bg-white/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 backdrop-blur-sm dark:bg-white/5 dark:text-cyan-200/90">
              Core Capabilities
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-(--text) md:text-5xl">
              Services designed to move
              <span className="bg-linear-to-r from-cyan-400 via-sky-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400">
                {" "}
                products faster
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-(--text-soft) md:text-lg">
              Pick any service to open a dedicated page with full details, scope,
              pricing packages, and consultation options.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial={isMobile ? false : "hidden"}
            animate={isMobile ? "show" : undefined}
            whileInView={isMobile ? undefined : "show"}
            viewport={isMobile ? undefined : { once: true, amount: 0.2 }}
          >
            {services.map((service, i) => {
              const icons = [
                <FaCloud
                  key="web"
                  className="text-3xl text-accent drop-shadow-glow"
                />,
                <FaServer
                  key="saas"
                  className="text-3xl text-accent drop-shadow-glow"
                />,
                <FaMobileAlt
                  key="mobile"
                  className="text-3xl text-accent drop-shadow-glow"
                />,
                <FaBriefcase
                  key="crm"
                  className="text-3xl text-accent drop-shadow-glow"
                />,
                <FaCog
                  key="devops"
                  className="text-3xl text-accent drop-shadow-glow"
                />,
                <FaRobot
                  key="ai"
                  className="text-3xl text-accent drop-shadow-glow"
                />,
                <FaCloud
                  key="cloud"
                  className="text-3xl text-accent drop-shadow-glow"
                />,
                <FaPalette
                  key="uiux"
                  className="text-3xl text-accent drop-shadow-glow"
                />,
                <FaChartLine
                  key="growth"
                  className="text-3xl text-accent drop-shadow-glow"
                />,
              ];

              return (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.02,
                    y: -6,
                    boxShadow: "0 20px 50px 0 rgba(91,155,213,0.12)",
                  }}
                  className="glass-card group relative overflow-hidden rounded-3xl border border-(--border) p-5 shadow-xl transition-all duration-500 hover:border-cyan-300/20 hover:shadow-2xl hover:shadow-accent/20 sm:p-6 md:p-8"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.14),transparent_34%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-(--border) bg-white/35 dark:bg-white/4">
                        {icons[i]}
                      </span>

                      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-500 dark:text-emerald-300">
                        {service.startingPrice}
                      </span>
                    </div>

                    <h3 className="gradient-text mb-3 text-xl font-bold md:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mb-5 min-h-0 text-sm leading-7 text-(--text-muted) md:min-h-21 md:text-base">
                      {service.shortDescription}
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {service.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-(--border) bg-white/45 px-3 py-1 text-xs text-(--text-muted) dark:bg-white/3 dark:text-(--text-muted)"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mb-6 rounded-2xl border border-(--border) bg-white/40 px-4 py-3 dark:bg-white/3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-(--text-soft)">
                        Best for
                      </p>
                      <p className="mt-2 text-sm leading-6 text-(--text-muted)">
                        {service.bestFor}
                      </p>
                    </div>

                    <div className="flex flex-col items-stretch justify-between gap-3 sm:flex-row">
                      <Link
                        href="/contact"
                        className="inline-flex w-full items-center justify-center rounded-xl border border-(--border) bg-white/35 px-5 py-3 text-sm font-semibold text-(--text) transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/60 dark:bg-white/3"
                      >
                        Get Quote
                      </Link>

                      <Link
                        href={`/services/${service.id}`}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-400 via-sky-400 to-violet-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(56,189,248,0.28)]"
                      >
                        View Details
                        <HiArrowRight className="text-base" />
                      </Link>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute -inset-1 rounded-3xl group-hover:animate-border-glow" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="section-shell relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-black/1 to-transparent dark:from-transparent dark:via-white/1 dark:to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card glow-border rounded-3xl p-8 sm:p-10 lg:p-12"
          >
            <h2 className="gradient-text mb-4 text-3xl font-bold md:text-4xl">
              Ready to <span className="gradient-text">Start Your Project?</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-(--text-soft)">
              Choose a service, explore the details, and contact us for a tailored
              proposal based on your scope and business goals.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-primary via-accent to-purple-500 px-8 py-4 text-lg font-bold text-dark-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-accent/40"
              >
                Start Your Project
                <HiArrowRight />
              </Link>
              <Link
                href="#services-grid"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-(--border) bg-white/40 px-8 py-4 text-lg font-semibold text-(--text) transition-all hover:border-primary/30 hover:bg-white/60 dark:bg-white/3"
              >
                Browse Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}