"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowRight, HiPlay } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "15+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "2+", label: "Years Experience" },
];

const homeHeroBgImage =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85";

const flipCards = [
  {
    title: "HNX Technologies",
    subtitle: "Web · Mobile · AI · Cloud",
    image: "/images/flip-cloud.svg",
    badges: ["Next.js", "React Native", "AI/ML", "Cloud", "TypeScript"],
  },
  {
    title: "Deep Research",
    subtitle: "Data-driven product validation",
    image: "/images/flip-research.svg",
    badges: ["Analytics", "Due Diligence", "Market Fit", "Strategy"],
  },
  {
    title: "AI Automation",
    subtitle: "Intelligent workflow systems",
    image: "/images/flip-ai.svg",
    badges: ["Chatbots", "Agents", "ML Pipelines", "NLP"],
  },
  {
    title: "Cloud Security",
    subtitle: "Zero-trust infrastructure",
    image: "/images/flip-security.svg",
    badges: ["Encryption", "Compliance", "IAM", "Firewall"],
  },
  {
    title: "SaaS Solutions",
    subtitle: "Full-stack product engineering",
    image: "/images/flip-saas.svg",
    badges: ["Billing", "Multi-tenant", "Dashboards", "Auth"],
  },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % flipCards.length);
  }, []);

  useEffect(() => {
    const id = setInterval(nextCard, 3000);
    return () => clearInterval(id);
  }, [nextCard]);

  return (
    <section
      id="home"
      className="hero-light relative flex min-h-screen items-center overflow-hidden bg-(--bg) text-(--text)"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={homeHeroBgImage}
          alt="Modern digital workspace"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center] scale-[1.06] opacity-72 brightness-[1.08] contrast-[1.03] saturate-[1.02] md:object-[70%_center] dark:opacity-26 dark:brightness-90 dark:contrast-105 dark:saturate-90"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(248,250,252,0.78)_0%,rgba(248,250,252,0.58)_24%,rgba(248,250,252,0.18)_52%,rgba(248,250,252,0.02)_78%,rgba(248,250,252,0)_100%)] dark:bg-linear-to-r dark:from-dark-900 dark:via-dark-900/88 dark:to-dark-900/62 md:dark:from-dark-900/96 md:dark:via-dark-900/82 md:dark:to-dark-900/46" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(56,189,248,0.05),transparent_28%),radial-gradient(circle_at_82%_76%,rgba(139,92,246,0.04),transparent_24%)] dark:bg-[radial-gradient(circle_at_16%_28%,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_84%_74%,rgba(139,92,246,0.10),transparent_24%)]" />

        <div className="absolute left-0 top-1/2 hidden h-144 w-136 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.32)_0%,rgba(255,255,255,0.12)_46%,rgba(255,255,255,0)_72%)] blur-2xl lg:block dark:hidden" />
        <div className="absolute right-0 top-1/2 hidden h-144 w-2xl -translate-y-1/2 bg-[radial-gradient(circle,rgba(6,10,18,0.62)_0%,rgba(6,10,18,0.42)_44%,rgba(6,10,18,0)_74%)] blur-2xl dark:lg:block" />
      </div>

      <div className="absolute left-10 top-20 z-1 h-96 w-96 rounded-full bg-primary/5 blur-3xl dark:bg-primary/2" />
      <div className="absolute bottom-20 right-10 z-1 h-80 w-80 rounded-full bg-accent/5 blur-3xl dark:bg-accent/3" />
      <div className="absolute left-1/2 top-1/2 z-1 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/2.5 blur-[120px] dark:bg-primary/1" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-24 sm:px-6 sm:pt-28 md:pt-32 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease }}
            className="relative"
          >
            <div className="absolute -inset-x-4 -inset-y-6 -z-10 rounded-4xl bg-[radial-gradient(circle,rgba(255,255,255,0.84)_0%,rgba(255,255,255,0.42)_52%,rgba(255,255,255,0)_100%)] blur-xl md:hidden dark:bg-[radial-gradient(circle,rgba(6,10,18,0.78)_0%,rgba(6,10,18,0.52)_52%,rgba(6,10,18,0)_100%)]" />

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease }}
              className="mb-6 sm:mb-8"
            >
              <div className="inline-flex max-w-[92vw] items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-2 text-[11px] font-medium text-primary shadow-sm backdrop-blur-sm sm:max-w-fit sm:px-4 sm:py-2 sm:text-sm">
                <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-primary" />
                <span className="leading-snug sm:whitespace-nowrap text-accent">
                  Engineering Tomorrow&apos;s Solutions Today
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease }}
              className="mb-6 text-4xl font-bold leading-[1.05] tracking-tight text-(--text) sm:text-5xl md:text-6xl lg:text-7xl"
            >
              We Build
              <br />
              <span className="gradient-text">Digital Products</span>
              <br />
              That Scale
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.6, ease }}
              className="mb-8 max-w-lg text-base leading-relaxed text-(--text-muted) sm:text-lg md:mb-10 md:text-xl"
            >
              HNX Technologies crafts enterprise-grade web platforms, mobile
              applications, and AI-powered automation systems that drive
              measurable business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.6, ease }}
              className="mb-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="btn-shine inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-6 py-4 text-sm font-bold text-dark-900 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25 sm:px-8 sm:text-base"
              >
                Start Your Project
                <HiArrowRight className="text-lg" />
              </Link>

              <Link
                href="/portfolio"
                className="gradient-border inline-flex items-center justify-center gap-2 rounded-xl border border-(--border) bg-white/55 px-6 py-4 text-sm font-semibold text-(--text) transition-all hover:border-primary/30 hover:bg-white/78 dark:bg-white/3 sm:px-8 sm:text-base"
              >
                <HiPlay className="text-lg" />
                View Our Work
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.6, ease }}
              className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-(--text-muted) sm:gap-x-5 sm:text-sm"
            >
              {["Web Platforms", "Mobile Apps", "AI Automation", "Cloud Systems"].map(
                (item, index) => (
                  <span key={item} className="inline-flex items-center gap-3 sm:gap-4">
                    <span className="font-medium tracking-wide">{item}</span>
                    {index < 3 ? (
                      <span className="h-1 w-1 rounded-full bg-primary/70" />
                    ) : null}
                  </span>
                )
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease }}
              className="inline-flex max-w-full flex-wrap items-center gap-3 rounded-2xl border border-(--border) bg-white/55 px-4 py-3 shadow-[0_0_30px_rgba(77,208,225,0.04)] backdrop-blur-xl dark:bg-white/4 dark:shadow-[0_0_30px_rgba(77,208,225,0.06)] sm:gap-4 sm:px-5"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary sm:text-xs">
                Follow us
              </span>
              <div className="hidden h-5 w-px bg-linear-to-b from-transparent via-primary/30 to-transparent sm:block" />

              {[
                {
                  Icon: FiGithub,
                  href: "#",
                  label: "Star us on GitHub",
                  bg: "bg-slate-900/8 text-(--text) shadow-[0_0_12px_rgba(15,23,42,0.08)] dark:bg-white/10 dark:text-white dark:shadow-[0_0_12px_rgba(255,255,255,0.15)]",
                  hoverBg:
                    "hover:bg-slate-900/12 hover:shadow-[0_0_24px_rgba(15,23,42,0.14)] dark:hover:bg-white/20 dark:hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]",
                },
                {
                  Icon: FiLinkedin,
                  href: "#",
                  label: "Connect on LinkedIn",
                  bg: "bg-[#0a66c2]/20 text-[#0a66c2] shadow-[0_0_12px_rgba(10,102,194,0.2)] dark:text-[#5b9bd5]",
                  hoverBg:
                    "hover:bg-[#0a66c2]/30 hover:shadow-[0_0_24px_rgba(10,102,194,0.4)]",
                },
                {
                  Icon: FiInstagram,
                  href: "#",
                  label: "Follow on Instagram",
                  bg: "bg-[#e1306c]/15 text-[#e1306c] shadow-[0_0_12px_rgba(225,48,108,0.2)]",
                  hoverBg:
                    "hover:bg-[#e1306c]/25 hover:shadow-[0_0_24px_rgba(225,48,108,0.4)]",
                },
              ].map(({ Icon, href, label, bg, hoverBg }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110 sm:h-11 sm:w-11 ${bg} ${hoverBg}`}
                >
                  <Icon
                    size={18}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="pointer-events-none absolute -top-10 left-1/2 hidden -translate-x-1/2 scale-90 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-dark-900 opacity-0 shadow-lg transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 dark:bg-dark-800 dark:text-light-100 sm:block">
                    {label}
                    <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-white dark:border-t-dark-800" />
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="relative -mt-20 hidden lg:block xl:-mt-32"
          >
            <div
              className="relative mx-auto w-full max-w-md cursor-pointer xl:max-w-lg"
              style={{ perspective: "1400px", height: "420px" }}
              onClick={nextCard}
            >
              {flipCards.map((c, i) => {
                const offset = (i - activeIndex + flipCards.length) % flipCards.length;
                const isFront = offset === 0;
                const zIndex = 30 - offset;
                const scale = 1 - offset * 0.055;
                const translateY = offset * 18;
                const translateX = offset * 8;
                const rotateZ = offset * 1.8;
                const opacity = offset <= 3 ? 1 - offset * 0.18 : 0;

                return (
                  <motion.div
                    key={c.title}
                    animate={{
                      scale,
                      y: translateY,
                      x: translateX,
                      rotateZ,
                      opacity,
                      zIndex,
                    }}
                    transition={{ duration: 0.7, ease }}
                    className="absolute inset-3 overflow-hidden rounded-4xl border border-white/15 bg-white/8 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/4 dark:shadow-[0_24px_60px_rgba(0,0,0,0.28)]"
                    style={{
                      transformOrigin: "center bottom",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1279px) 0px, 520px"
                      priority={i < 2}
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/78 via-black/38 to-black/14" />

                    {isFront && (
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_30%)]" />
                    )}

                    <div className="relative flex h-full flex-col items-center justify-end gap-3 p-7 pb-9">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white drop-shadow-lg xl:text-[1.75rem]">
                          {c.title}
                        </p>
                        <p className="mt-1 text-sm text-white/80 drop-shadow">
                          {c.subtitle}
                        </p>
                      </div>

                      <div className="flex flex-wrap justify-center gap-2 px-2">
                        {c.badges.map((badge) => (
                          <span
                            key={badge}
                            className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur-sm"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              <div className="absolute -bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {flipCards.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(i);
                    }}
                    className={`h-2.5 rounded-full transition-all ${
                      i === activeIndex
                        ? "w-7 bg-primary shadow-[0_0_12px_rgba(14,165,233,0.45)] dark:shadow-[0_0_12px_rgba(77,208,225,0.45)]"
                        : "w-2.5 bg-(--text-soft)/28 hover:bg-(--text-soft)/48"
                    }`}
                    aria-label={`Show slide ${i + 1}`}
                    type="button"
                  />
                ))}
              </div>

              <div className="absolute -right-6 -top-6 grid h-24 w-24 grid-cols-4 gap-2 opacity-35">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="h-1.5 w-1.5 rounded-full bg-primary" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:mt-14 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="premium-card cursor-glow depth-card rounded-2xl border border-(--border) bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.48))] p-4 text-center shadow-[0_12px_36px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] dark:shadow-[0_12px_36px_rgba(0,0,0,0.18)] sm:p-5 md:p-6"
            >
              <p className="gradient-text text-2xl font-bold sm:text-3xl md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-(--text-muted) sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}