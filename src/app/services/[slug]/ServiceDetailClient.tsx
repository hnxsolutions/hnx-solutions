"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  HiArrowRight,
  HiCheck,
  HiClock,
  HiSparkles,
  HiLightningBolt,
  HiShieldCheck,
  HiArrowLeft,
  HiDocumentText,
} from "react-icons/hi";
import type { ServiceItem } from "@/data/services";

type ServiceDetailClientProps = {
  service: ServiceItem;
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function ServiceDetailClient({
  service,
}: ServiceDetailClientProps) {
  const pricingSliderRef = useRef<HTMLDivElement | null>(null);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [activePackageIndex, setActivePackageIndex] = useState(0);
  const [isAutoSlidingPaused, setIsAutoSlidingPaused] = useState(false);

  const updateActivePackage = useCallback(() => {
    const container = pricingSliderRef.current;
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

    setActivePackageIndex((prev) =>
      prev === closestIndex ? prev : closestIndex
    );
  }, []);

  const scrollToPackage = useCallback((index: number) => {
    const container = pricingSliderRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    const target = children[index];
    if (!target) return;

    container.scrollTo({
      left: target.offsetLeft - 8,
      behavior: "smooth",
    });
  }, []);

  const pauseAutoSlideTemporarily = useCallback(() => {
    setIsAutoSlidingPaused(true);

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoSlidingPaused(false);
    }, 5000);
  }, []);

  useEffect(() => {
    const container = pricingSliderRef.current;
    if (!container) return;

    const onScroll = () => {
      updateActivePackage();
    };

    const onPointerDown = () => {
      pauseAutoSlideTemporarily();
    };

    const onTouchStart = () => {
      pauseAutoSlideTemporarily();
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    container.addEventListener("pointerdown", onPointerDown, { passive: true });
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("resize", onScroll);

    const raf = requestAnimationFrame(() => {
      onScroll();
    });

    return () => {
      cancelAnimationFrame(raf);
      container.removeEventListener("scroll", onScroll);
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("resize", onScroll);
    };
  }, [pauseAutoSlideTemporarily, updateActivePackage]);

  useEffect(() => {
    if (service.packages.length <= 1) return;
    if (isAutoSlidingPaused) return;

    autoSlideRef.current = setInterval(() => {
      setActivePackageIndex((prev) => {
        const nextIndex = (prev + 1) % service.packages.length;
        scrollToPackage(nextIndex);
        return nextIndex;
      });
    }, 3500);

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [isAutoSlidingPaused, scrollToPackage, service.packages.length]);

  useEffect(() => {
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-(--bg) text-(--text)">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.09),transparent_26%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.08),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.05),transparent_24%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_26%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.12),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0)_20%,rgba(255,255,255,0.015)_70%,rgba(255,255,255,0)_100%)]" />
      </div>

      {/* Hero */}
      <section className="relative pb-14 pt-28 sm:pb-16 sm:pt-32 md:pb-20 md:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="grid items-start gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10"
          >
            <div>
              <motion.div
                variants={fadeUp}
                className="mb-5 flex flex-wrap items-center gap-3"
              >
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 rounded-full border border-(--border) bg-white/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/80 hover:shadow-[0_10px_28px_rgba(34,211,238,0.12)] sm:text-xs dark:bg-white/5 dark:text-cyan-200/90 dark:hover:bg-white/10 dark:hover:shadow-[0_10px_28px_rgba(34,211,238,0.10)]"
                >
                  <HiArrowLeft className="text-base transition-transform duration-300 group-hover:-translate-x-1" />
                  <span>Back to Services</span>
                </Link>

                <Link
                  href={`/blog?category=${service.id}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-primary/15 hover:shadow-[0_10px_28px_rgba(56,189,248,0.16)] sm:text-xs"
                >
                  <HiDocumentText className="text-sm transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110" />
                  <span>Check Latest Articles</span>
                </Link>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl font-black leading-[1.02] tracking-tight text-(--text) sm:text-5xl md:text-6xl lg:text-7xl"
              >
                {service.title}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-3xl text-sm leading-7 text-(--text-muted) sm:text-base sm:leading-8 md:text-lg"
              >
                {service.fullDescription}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-7 flex flex-wrap gap-2.5 sm:gap-3"
              >
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-(--border) bg-white/40 px-3 py-2 text-xs font-medium text-(--text-muted) backdrop-blur-sm sm:px-4 sm:text-sm dark:bg-white/4"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-primary via-accent to-violet-400 px-6 py-3.5 text-sm font-bold text-dark-900 shadow-[0_14px_40px_rgba(56,189,248,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(56,189,248,0.28)] sm:px-7 sm:py-4 sm:text-base"
                >
                  Get a Custom Quote
                  <HiArrowRight className="text-lg" />
                </Link>

                <a
                  href="#pricing-section"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-(--border) bg-white/40 px-6 py-3.5 text-sm font-semibold text-(--text) backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/70 sm:px-7 sm:py-4 sm:text-base dark:bg-white/3"
                >
                  View Pricing
                  <HiLightningBolt className="text-lg" />
                </a>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="relative">
              <div className="absolute -inset-1 rounded-4xl bg-[linear-gradient(135deg,rgba(56,189,248,0.12),rgba(139,92,246,0.08),rgba(16,185,129,0.08))] blur-xl dark:bg-[linear-gradient(135deg,rgba(56,189,248,0.18),rgba(139,92,246,0.14),rgba(16,185,129,0.12))]" />
              <div className="glass-card relative rounded-4xl border border-(--border) p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl sm:p-6 md:p-7 dark:shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-(--text-soft) sm:text-xs">
                      Starting Price
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold text-cyan-500 sm:text-3xl dark:text-cyan-300">
                      {service.startingPrice}
                    </h2>
                  </div>

                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:h-12 sm:w-12">
                    <HiSparkles className="text-xl" />
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-(--border) bg-white/35 p-4 dark:bg-dark-900/40">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-500 dark:text-cyan-300">
                        <HiClock className="text-lg" />
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-(--text-soft) sm:text-xs">
                          Timeline
                        </p>
                        <p className="mt-1 text-sm font-semibold text-(--text) sm:text-base">
                          {service.timeline}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-(--border) bg-white/35 p-4 dark:bg-dark-900/40">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-500 dark:text-emerald-300">
                        <HiShieldCheck className="text-lg" />
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-(--text-soft) sm:text-xs">
                          Best For
                        </p>
                        <p className="mt-1 text-sm leading-6 text-(--text-muted) sm:text-base">
                          {service.bestFor}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-(--border) bg-[linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.35))] p-4 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-(--text-soft) sm:text-xs">
                      Why choose this
                    </p>
                    <p className="mt-2 text-sm leading-7 text-(--text-muted)">
                      Clear deliverables, premium execution, fast communication,
                      and pricing structured around real business value.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview + Deliverables */}
      <section className="relative pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="grid gap-6 lg:grid-cols-[1fr_1fr]"
          >
            <motion.div
              variants={fadeUp}
              className="glass-card rounded-[1.75rem] border border-(--border) p-5 backdrop-blur-xl sm:p-6 md:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <HiSparkles className="text-xl" />
                </span>
                <h2 className="text-xl font-bold text-(--text) sm:text-2xl md:text-3xl">
                  What’s Included
                </h2>
              </div>

              <div className="space-y-4">
                {service.details.map((detail) => (
                  <div key={detail} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-500 dark:text-emerald-300">
                      <HiCheck size={14} />
                    </span>
                    <p className="text-sm leading-7 text-(--text-muted) sm:text-base">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="glass-card rounded-[1.75rem] border border-(--border) p-5 backdrop-blur-xl sm:p-6 md:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-500 dark:text-violet-300">
                  <HiLightningBolt className="text-xl" />
                </span>
                <h2 className="text-xl font-bold text-(--text) sm:text-2xl md:text-3xl">
                  Delivery Highlights
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-(--border) bg-white/35 p-4 dark:bg-dark-900/35">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-(--text-soft)">
                    Scope
                  </p>
                  <p className="mt-2 text-sm leading-6 text-(--text-muted) sm:text-base">
                    Tailored based on business goals, user flows, integrations,
                    and technical complexity.
                  </p>
                </div>

                <div className="rounded-2xl border border-(--border) bg-white/35 p-4 dark:bg-dark-900/35">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-(--text-soft)">
                    UX Focus
                  </p>
                  <p className="mt-2 text-sm leading-6 text-(--text-muted) sm:text-base">
                    Modern design patterns, responsive behavior, and premium
                    interaction quality.
                  </p>
                </div>

                <div className="rounded-2xl border border-(--border) bg-white/35 p-4 dark:bg-dark-900/35">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-(--text-soft)">
                    Scalability
                  </p>
                  <p className="mt-2 text-sm leading-6 text-(--text-muted) sm:text-base">
                    Structured to support future growth, improvements, and new
                    features.
                  </p>
                </div>

                <div className="rounded-2xl border border-(--border) bg-white/35 p-4 dark:bg-dark-900/35">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-(--text-soft)">
                    Support
                  </p>
                  <p className="mt-2 text-sm leading-6 text-(--text-muted) sm:text-base">
                    Guidance, launch support, and practical recommendations after
                    delivery.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing-section" className="relative pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs">
                <HiSparkles className="text-sm" />
                Pricing Packages
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-(--text) sm:text-4xl md:text-5xl">
                Flexible packages for
                <span className="bg-linear-to-r from-cyan-400 via-sky-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400">
                  {" "}
                  {service.title}
                </span>
              </h2>

              <p className="mt-4 text-sm leading-8 text-(--text-soft) sm:text-base md:text-lg">
                Choose a package that matches your current stage. Final pricing
                can vary based on features, integrations, content scope, and
                timelines.
              </p>
            </motion.div>

            {/* Mobile pricing slider with auto slide */}
            <div className="relative xl:hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r from-(--bg) to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l from-(--bg) to-transparent" />

              <div
                ref={pricingSliderRef}
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-4 pt-2 scroll-smooth touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {service.packages.map((pkg, index) => {
                  const isActive = index === activePackageIndex;

                  return (
                    <motion.div
                      key={pkg.name}
                      variants={fadeUp}
                      animate={{
                        scale: isActive ? 1 : 0.97,
                        opacity: isActive ? 1 : 0.86,
                        y: isActive ? -4 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="basis-[86%] shrink-0 snap-center"
                    >
                      <div
                        className={`group relative h-full overflow-hidden rounded-[1.8rem] border p-5 backdrop-blur-2xl transition-all duration-500 sm:p-6 ${
                          pkg.popular
                            ? "border-primary/30 bg-[linear-gradient(180deg,rgba(56,189,248,0.08),rgba(255,255,255,0.55))] shadow-[0_20px_60px_rgba(56,189,248,0.10)] dark:bg-[linear-gradient(180deg,rgba(56,189,248,0.12),rgba(255,255,255,0.04))] dark:shadow-[0_20px_60px_rgba(56,189,248,0.16)]"
                            : "glass-card border-(--border)"
                        }`}
                      >
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.08),transparent_26%)] opacity-70" />

                        {pkg.popular ? (
                          <div className="absolute right-4 top-4 rounded-full border border-primary/25 bg-primary/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary sm:text-[11px]">
                            Most Popular
                          </div>
                        ) : null}

                        <div className="relative z-10">
                          <div className="pr-24">
                            <h3 className="text-xl font-bold text-(--text) sm:text-2xl">
                              {pkg.name}
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-(--text-soft)">
                              {pkg.description}
                            </p>
                          </div>

                          <div className="mt-6 rounded-2xl border border-(--border) bg-white/35 p-4 sm:p-5 dark:bg-dark-900/35">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-(--text-soft)">
                              Package Price
                            </p>
                            <p className="mt-2 text-2xl font-extrabold text-cyan-500 sm:text-3xl dark:text-cyan-300">
                              {pkg.price}
                            </p>
                          </div>

                          <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3">
                            {pkg.features.map((feature) => (
                              <div
                                key={feature}
                                className="grid grid-cols-[18px_minmax(0,1fr)] items-start gap-2"
                              >
                                <span className="mt-1 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emerald-400/10 text-emerald-500 dark:text-emerald-300">
                                  <HiCheck size={12} />
                                </span>
                                <p className="text-sm leading-5 text-(--text-muted)">
                                  {feature}
                                </p>
                              </div>
                            ))}
                          </div>

                          <div className="mt-7 flex flex-col gap-3">
                            <Link
                              href="/contact"
                              className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                                pkg.popular
                                  ? "bg-linear-to-r from-primary to-accent text-dark-900 shadow-[0_12px_30px_rgba(56,189,248,0.22)]"
                                  : "border border-(--border) bg-white/35 text-(--text) hover:border-cyan-300/30 hover:bg-white/60 dark:bg-white/3"
                              }`}
                            >
                              Get This Package
                              <HiArrowRight className="text-base" />
                            </Link>
                          </div>
                        </div>

                        <div
                          className={`pointer-events-none absolute -bottom-10 right-[-18px] h-28 w-28 rounded-full blur-3xl transition-all duration-500 ${
                            pkg.popular
                              ? "bg-primary/25 opacity-80"
                              : "bg-violet-400/15 opacity-55"
                          }`}
                        />
                        <div
                          className={`pointer-events-none absolute -inset-px rounded-[1.8rem] border transition-opacity duration-300 ${
                            isActive
                              ? "border-primary/20 opacity-100"
                              : "border-transparent opacity-0"
                          }`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-center gap-2.5">
                {service.packages.map((pkg, index) => {
                  const isActive = index === activePackageIndex;

                  return (
                    <button
                      key={pkg.name}
                      type="button"
                      aria-label={`Go to ${pkg.name}`}
                      onClick={() => {
                        pauseAutoSlideTemporarily();
                        scrollToPackage(index);
                        setActivePackageIndex(index);
                      }}
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

            {/* Desktop pricing grid */}
            <motion.div
              variants={stagger}
              className="hidden gap-6 xl:grid xl:grid-cols-3"
            >
              {service.packages.map((pkg) => (
                <motion.div
                  key={pkg.name}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.015 }}
                  transition={{ duration: 0.25 }}
                  className={`group relative overflow-hidden rounded-[1.8rem] border p-5 backdrop-blur-2xl sm:p-6 md:p-7 ${
                    pkg.popular
                      ? "border-primary/30 bg-[linear-gradient(180deg,rgba(56,189,248,0.08),rgba(255,255,255,0.55))] shadow-[0_20px_60px_rgba(56,189,248,0.10)] dark:bg-[linear-gradient(180deg,rgba(56,189,248,0.12),rgba(255,255,255,0.04))] dark:shadow-[0_20px_60px_rgba(56,189,248,0.16)]"
                      : "glass-card border-(--border)"
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.08),transparent_26%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {pkg.popular ? (
                    <div className="absolute right-4 top-4 rounded-full border border-primary/25 bg-primary/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary sm:text-[11px]">
                      Most Popular
                    </div>
                  ) : null}

                  <div className="relative z-10">
                    <div className="pr-24">
                      <h3 className="text-xl font-bold text-(--text) sm:text-2xl">
                        {pkg.name}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-(--text-soft)">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="mt-6 rounded-2xl border border-(--border) bg-white/35 p-4 sm:p-5 dark:bg-dark-900/35">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-(--text-soft)">
                        Package Price
                      </p>
                      <p className="mt-2 text-2xl font-extrabold text-cyan-500 sm:text-3xl dark:text-cyan-300">
                        {pkg.price}
                      </p>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3">
                      {pkg.features.map((feature) => (
                        <div
                          key={feature}
                          className="grid grid-cols-[18px_minmax(0,1fr)] items-start gap-2"
                        >
                          <span className="mt-1 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emerald-400/10 text-emerald-500 dark:text-emerald-300">
                            <HiCheck size={12} />
                          </span>
                          <p className="text-sm leading-5 text-(--text-muted)">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row xl:flex-col">
                      <Link
                        href="/contact"
                        className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                          pkg.popular
                            ? "bg-linear-to-r from-primary to-accent text-dark-900 shadow-[0_12px_30px_rgba(56,189,248,0.22)]"
                            : "border border-(--border) bg-white/35 text-(--text) hover:border-cyan-300/30 hover:bg-white/60 dark:bg-white/3"
                        }`}
                      >
                        Get This Package
                        <HiArrowRight className="text-base" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative pb-20 sm:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass-card relative overflow-hidden rounded-4xl border border-(--border) p-6 text-center backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-8 md:p-10 dark:shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.08),transparent_26%)] dark:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.1),transparent_26%)]" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs">
                <HiSparkles className="text-sm" />
                Ready to Start
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-(--text) sm:text-4xl md:text-5xl">
                Let’s build your
                <span className="bg-linear-to-r from-cyan-400 via-sky-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400">
                  {" "}
                  {service.title}
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-(--text-soft) sm:text-base md:text-lg">
                Tell us your requirements and we’ll help you choose the right
                package or prepare a custom proposal for your exact project
                scope.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-primary via-accent to-violet-400 px-7 py-4 text-sm font-bold text-dark-900 shadow-[0_14px_40px_rgba(56,189,248,0.22)] transition-all duration-300 hover:-translate-y-1 sm:text-base"
                >
                  Get a Free Consultation
                  <HiArrowRight className="text-lg" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-2xl border border-(--border) bg-white/40 px-7 py-4 text-sm font-semibold text-(--text) transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/70 sm:text-base dark:bg-white/3"
                >
                  Explore More Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}