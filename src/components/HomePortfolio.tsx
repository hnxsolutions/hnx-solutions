"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { homePortfolioProjects } from "@/data/portfolioProjects";
import { useTilt } from "@/hooks/useTilt";

function PortfolioCard({
  project,
  index,
  isMobile = false,
  isActive = false,
}: {
  project: (typeof homePortfolioProjects)[number];
  index: number;
  isMobile?: boolean;
  isActive?: boolean;
}) {
  const { ref, handleMove, reset } = useTilt<HTMLDivElement>();

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.65,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true }}
      animate={
        isMobile
          ? {
              opacity: isActive ? 1 : 0.68,
              scale: isActive ? 1 : 0.955,
              y: isActive ? 0 : 8,
            }
          : undefined
      }
      className="h-full"
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="premium-ease h-full"
      >
        <Link
          href="/portfolio"
          className="group glass-card depth-card premium-card cursor-glow relative block h-full overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.14)] dark:bg-white/4 dark:hover:shadow-[0_24px_70px_rgba(0,0,0,0.38)]"
        >
          <div className="pointer-events-none absolute inset-0 opacity-100">
            <div className="absolute -left-16 top-0 h-36 w-36 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/15" />
            <div className="absolute -right-16 bottom-0 h-36 w-36 rounded-full bg-accent/10 blur-3xl transition-all duration-500 group-hover:bg-accent/15" />
          </div>

          <div
            className={`pointer-events-none absolute inset-0 rounded-[1.7rem] ring-1 transition-all duration-500 ${
              isActive
                ? "ring-primary/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_0_1px_rgba(59,130,246,0.05)]"
                : "ring-white/5"
            }`}
          />

          <div
            className={`relative overflow-hidden ${
              isMobile ? "h-40" : "h-48"
            }`}
          >
            {project.imageUrl ? (
              <>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(4,8,15,0.84)_0%,rgba(4,8,15,0.22)_42%,rgba(4,8,15,0.04)_100%)]" />
              </>
            ) : project.liveUrl ? (
              <div className="absolute inset-0 overflow-hidden bg-black">
                <iframe
                  src={project.liveUrl}
                  title={`Preview of ${project.title}`}
                  className="pointer-events-none h-180 w-7xl origin-top-left"
                  style={{
                    transform: "scale(0.25)",
                    transformOrigin: "top left",
                  }}
                  tabIndex={-1}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(4,8,15,0.82)_0%,rgba(4,8,15,0.2)_48%,rgba(4,8,15,0.04)_100%)]" />
              </div>
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-primary/20 via-accent/10 to-primary/10">
                <span className="text-5xl font-black text-white/20 dark:text-white/15">
                  {project.title[0]}
                </span>
              </div>
            )}

            <div className="absolute left-3 top-3">
              <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-md">
                {project.category}
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(to_top,rgba(10,14,22,0.78),transparent)]" />
          </div>

          <div className={isMobile ? "relative p-4" : "relative p-6"}>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/8 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
              Featured Project
            </div>

            <h3
              className={`font-bold leading-tight transition-colors duration-300 group-hover:text-primary ${
                isMobile ? "text-lg" : "text-xl"
              }`}
            >
              {project.title}
            </h3>

            <p
              className={`mt-2 text-(--text-soft) ${
                isMobile
                  ? "line-clamp-2 text-[13px] leading-6"
                  : "line-clamp-2 text-sm leading-7"
              }`}
            >
              Premium digital product crafted for clarity, performance, and
              modern user experience.
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.slice(0, isMobile ? 3 : project.tags.length).map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full border border-(--border) bg-white/60 font-medium text-(--text-soft) transition-all duration-300 group-hover:border-primary/20 group-hover:text-(--text) dark:bg-white/6 ${
                    isMobile
                      ? "px-2.5 py-1 text-[10px]"
                      : "px-3 py-1.5 text-[11px]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
              <span
                className={`font-medium text-(--text-soft) ${
                  isMobile ? "text-[13px]" : "text-sm"
                }`}
              >
                Explore Case Study
              </span>

              <span
                className={`inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:scale-105 ${
                  isMobile ? "h-9 w-9" : "h-10 w-10"
                }`}
              >
                <HiArrowRight className={isMobile ? "text-base" : "text-lg"} />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

export default function HomePortfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;

    const firstCard = el.children[0] as HTMLElement | undefined;
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = 12;
    const left = index * (cardWidth + gap);

    el.scrollTo({
      left,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const firstCard = el.children[0] as HTMLElement | undefined;
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth;
      const gap = 12;
      const index = Math.round(el.scrollLeft / (cardWidth + gap));

      setActiveIndex(
        Math.max(0, Math.min(index, homePortfolioProjects.length - 1))
      );
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (homePortfolioProjects.length <= 1) return;
    if (isUserInteracting) return;

    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % homePortfolioProjects.length;
      scrollToIndex(nextIndex);
    }, 3600);

    return () => clearInterval(interval);
  }, [activeIndex, isUserInteracting]);

  return (
    <section className="relative overflow-hidden grid-bg bg-(--bg) py-16 text-(--text) md:py-18">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-28 top-12 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -right-28 top-24 h-80 w-80 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute -bottom-16 left-1/2 h-80 w-120 -translate-x-1/2 rounded-full bg-primary/6 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.06),transparent_28%)] dark:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_28%)]" />
      </div>

      <div className="relative mx-auto max-w-[min(95vw,1600px)] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Our Work
          </span>

          <h2 className="mt-4 text-3xl font-bold md:mt-5 md:text-5xl lg:text-6xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-(--text-soft) md:mt-5 md:text-lg md:leading-8">
            Real-world products crafted with premium design, performance, and
            scalable engineering.
          </p>
        </motion.div>

        <div className="hidden gap-8 md:grid md:grid-cols-3">
          {homePortfolioProjects.map((project, i) => (
            <PortfolioCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-3 overflow-x-auto px-1 pb-2 scroll-smooth snap-x snap-mandatory scrollbar-none"
              onTouchStart={() => setIsUserInteracting(true)}
              onTouchEnd={() => {
                setTimeout(() => setIsUserInteracting(false), 800);
              }}
            >
              {homePortfolioProjects.map((project, i) => (
                <div
                  key={project.title}
                  className="w-[88%] shrink-0 snap-center"
                >
                  <PortfolioCard
                    project={project}
                    index={i}
                    isMobile
                    isActive={activeIndex === i}
                  />
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-linear-to-r from-(--bg) via-(--bg)/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-linear-to-l from-(--bg) via-(--bg)/85 to-transparent" />
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {homePortfolioProjects.map((project, i) => (
              <button
                key={`${project.title}-dot`}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`relative transition-all duration-300 ${
                  activeIndex === i
                    ? "h-2 w-7 rounded-full bg-linear-to-r from-primary to-accent shadow-[0_0_20px_rgba(59,130,246,0.22)]"
                    : "h-2 w-2 rounded-full bg-primary/25"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center md:mt-12">
          <Link
            href="/portfolio"
            className="btn-shine gradient-border inline-flex items-center gap-2 rounded-2xl border border-(--border) bg-white/60 px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-white/85 dark:bg-white/4 md:px-8 md:py-4 md:text-base"
          >
            View All Projects
            <HiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}