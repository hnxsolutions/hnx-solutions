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
import { heroBgSvg } from "@/components/heroBgSvg";
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
    <main className="w-full max-w-full overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
      {/* Hero Section */}
      <section className="relative flex min-h-[48vh] items-center justify-center overflow-hidden py-20 pt-26 md:py-24 md:pt-30">
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src={heroBgUrl}
            alt="Modern technology workspace"
            fill
            priority
            className="h-full w-full scale-[1.03] object-cover object-center opacity-35 contrast-115 saturate-105 dark:opacity-58"
            sizes="100vw"
          />
          <div
            aria-hidden
            className="absolute right-[3%] top-1/2 hidden w-[50rem] max-w-[60vw] -translate-y-1/2 opacity-14 blur-[0.2px] lg:block dark:opacity-24"
            dangerouslySetInnerHTML={{ __html: heroDashboardSvg }}
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 select-none"
            style={{
              width: "min(92vw, 600px)",
              height: "min(92vw, 600px)",
              opacity: 0.32,
            }}
            aria-hidden
            dangerouslySetInnerHTML={{ __html: heroBgSvg }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(248,250,252,0.92),rgba(248,250,252,0.78),rgba(248,250,252,0.58))] dark:bg-gradient-to-r dark:from-[#08111f]/88 dark:via-[#0b1e35]/56 dark:to-[#17182f]/36" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_38%_48%,rgba(255,255,255,0.15)_0%,rgba(248,250,252,0.48)_42%,rgba(248,250,252,0.9)_100%)] dark:bg-[radial-gradient(circle_at_38%_48%,rgba(9,14,24,0.02)_0%,rgba(9,14,24,0.28)_42%,rgba(9,14,24,0.78)_100%)]" />
        </div>

        <AnimatedGridBG />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div
            aria-hidden
            className="absolute left-[24%] top-1/2 h-[340px] w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.58)_40%,rgba(255,255,255,0.14)_68%,rgba(255,255,255,0)_100%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(5,10,18,0.82)_0%,rgba(5,10,18,0.58)_40%,rgba(5,10,18,0.14)_68%,rgba(5,10,18,0)_100%)]"
          />
          <div className="relative z-10 max-w-3xl text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 inline-flex items-center rounded-full border border-[var(--border)] bg-white/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 backdrop-blur-sm dark:bg-black/25 dark:text-cyan-200"
            >
              Premium Digital Delivery
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 max-w-4xl text-4xl font-extrabold leading-[0.95] tracking-tight text-[var(--text)] md:text-6xl lg:text-7xl"
              style={{ textShadow: "0 10px 40px rgba(0, 0, 0, 0.08)" }}
            >
              Full-Spectrum
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400">
                Technology Services
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)] md:text-xl lg:mx-0"
            >
              Explore our core services across web, mobile, SaaS, CRM, DevOps, AI,
              cloud, design, and digital growth. Choose the service you need and open
              its dedicated detail page for full scope, packages, and pricing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link
                href="#services-grid"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 px-7 py-3.5 font-semibold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(56,189,248,0.28)]"
              >
                Explore Services
                <HiArrowRight className="text-lg" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-white/45 px-7 py-3.5 font-medium text-[var(--text)] backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/70 dark:bg-black/20 dark:text-[var(--text)]"
              >
                Start Your Project
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[var(--text-soft)] lg:justify-start"
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

      {/* Services Cards Grid */}
      <section id="services-grid" className="relative z-10 py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.01] to-transparent dark:from-[var(--bg)] dark:via-[color:rgba(255,255,255,0.01)] dark:to-[var(--bg)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-3xl text-center lg:text-left"
          >
            <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-white/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 backdrop-blur-sm dark:bg-white/5 dark:text-cyan-200/90">
              Core Capabilities
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-[var(--text)] md:text-5xl">
              Services designed to move
              <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400">
                {" "}
                products faster
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-soft)] md:text-lg">
              Pick any service to open a dedicated page with full details, scope,
              pricing packages, and consultation options.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial={isMobile ? false : "hidden"}
            animate={isMobile ? "show" : undefined}
            whileInView={isMobile ? undefined : "show"}
            viewport={isMobile ? undefined : { once: true, amount: 0.2 }}
          >
            {services.map((service, i) => {
              const icons = [
                <FaCloud key="web" className="text-3xl text-accent drop-shadow-glow" />,
                <FaServer key="saas" className="text-3xl text-accent drop-shadow-glow" />,
                <FaMobileAlt key="mobile" className="text-3xl text-accent drop-shadow-glow" />,
                <FaBriefcase key="crm" className="text-3xl text-accent drop-shadow-glow" />,
                <FaCog key="devops" className="text-3xl text-accent drop-shadow-glow" />,
                <FaRobot key="ai" className="text-3xl text-accent drop-shadow-glow" />,
                <FaCloud key="cloud" className="text-3xl text-accent drop-shadow-glow" />,
                <FaPalette key="uiux" className="text-3xl text-accent drop-shadow-glow" />,
                <FaChartLine key="growth" className="text-3xl text-accent drop-shadow-glow" />,
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
                  className="glass-card group relative overflow-hidden rounded-3xl border border-[var(--border)] p-7 shadow-xl transition-all duration-500 hover:border-cyan-300/20 hover:shadow-2xl hover:shadow-accent/20 md:p-8"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.14),transparent_34%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-white/35 dark:bg-white/[0.04]">
                        {icons[i]}
                      </span>

                      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-500 dark:text-emerald-300">
                        {service.startingPrice}
                      </span>
                    </div>

                    <h3 className="gradient-text mb-3 text-xl font-bold md:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mb-5 min-h-[84px] text-sm leading-7 text-[var(--text-muted)] md:text-base">
                      {service.shortDescription}
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {service.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[var(--border)] bg-white/45 px-3 py-1 text-xs text-[var(--text-muted)] dark:bg-white/5 dark:text-[var(--text-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mb-6 rounded-2xl border border-[var(--border)] bg-white/40 px-4 py-3 dark:bg-white/[0.03]">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
                        Best for
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                        {service.bestFor}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Link
                        href={`/services/${service.id}`}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(56,189,248,0.28)]"
                      >
                        View Details
                        <HiArrowRight className="text-base" />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex w-full items-center justify-center rounded-xl border border-[var(--border)] bg-white/35 px-5 py-3 text-sm font-semibold text-[var(--text)] transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/60 dark:bg-white/[0.03]"
                      >
                        Get Quote
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

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="relative z-10 py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.01] to-transparent dark:from-transparent dark:via-white/[0.01] dark:to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card glow-border rounded-3xl p-12"
          >
            <h2 className="gradient-text mb-4 text-3xl font-bold md:text-4xl">
              Ready to <span className="gradient-text">Start Your Project?</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-[var(--text-soft)]">
              Choose a service, explore the details, and contact us for a tailored
              proposal based on your scope and business goals.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary via-accent to-purple-500 px-8 py-4 text-lg font-bold text-dark-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-accent/40"
              >
                Start Your Project
                <HiArrowRight />
              </Link>
              <Link
                href="#services-grid"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-white/40 px-8 py-4 text-lg font-semibold text-[var(--text)] transition-all hover:bg-white/60 hover:border-primary/30 dark:bg-white/[0.03]"
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