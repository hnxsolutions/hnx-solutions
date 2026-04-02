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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.12,
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true }}
      animate={
        isMobile
          ? {
              opacity: isActive ? 1 : 0.62,
              scale: isActive ? 1 : 0.935,
              y: isActive ? 0 : 12,
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
          className="group glass-card depth-card premium-card cursor-glow relative block h-full overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.14)] dark:bg-white/4 dark:hover:shadow-[0_24px_70px_rgba(0,0,0,0.38)]"
        >
          <div className="pointer-events-none absolute inset-0 opacity-100">
            <div className="absolute -left-20 top-0 h-44 w-44 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/15" />
            <div className="absolute -right-20 bottom-0 h-44 w-44 rounded-full bg-accent/10 blur-3xl transition-all duration-500 group-hover:bg-accent/15" />
          </div>

          <div
            className={`pointer-events-none absolute inset-0 rounded-[1.9rem] ring-1 transition-all duration-500 ${
              isActive
                ? "ring-primary/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_0_1px_rgba(59,130,246,0.05)]"
                : "ring-white/5"
            }`}
          />

          <div className="relative h-52 overflow-hidden">
            {project.imageUrl ? (
              <>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(4,8,15,0.88)_0%,rgba(4,8,15,0.26)_42%,rgba(4,8,15,0.04)_100%)]" />
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
                <span className="text-6xl font-black text-white/20 dark:text-white/15">
                  {project.title[0]}
                </span>
              </div>
            )}

            <div className="absolute left-4 top-4">
              <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-md">
                {project.category}
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(to_top,rgba(10,14,22,0.8),transparent)]" />
          </div>

          <div className="relative p-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Featured Project
            </div>

            <h3 className="text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-primary">
              {project.title}
            </h3>

            <p className="mt-3 line-clamp-2 text-sm leading-7 text-(--text-soft)">
              Premium digital product crafted for clarity, performance, and
              modern user experience.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-(--border) bg-white/60 px-3 py-1.5 text-[11px] font-medium text-(--text-soft) transition-all duration-300 group-hover:border-primary/20 group-hover:text-(--text) dark:bg-white/6"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-sm font-medium text-(--text-soft)">
                Explore Case Study
              </span>

              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:scale-105">
                <HiArrowRight className="text-lg" />
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
    <section className="relative overflow-hidden grid-bg bg-(--bg) py-18 text-(--text)">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-7rem] top-12 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[-7rem] top-24 h-80 w-80 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute bottom-[-4rem] left-1/2 h-80 w-[30rem] -translate-x-1/2 rounded-full bg-primary/6 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.06),transparent_28%)] dark:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_28%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="mb-14 text-center md:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Our Work
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl lg:text-6xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-(--text-soft) md:text-lg">
            Real-world products crafted with premium design, performance, and
            scalable engineering.
          </p>
        </motion.div>

        {/* Desktop unchanged */}
        <div className="hidden gap-8 md:grid md:grid-cols-3">
          {homePortfolioProjects.map((project, i) => (
            <PortfolioCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Mobile premium native swipe slider */}
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
                  className="w-[85%] shrink-0 snap-center"
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

            <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-linear-to-r from-(--bg) via-(--bg)/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-(--bg) via-(--bg)/85 to-transparent" />
          </div>

          <div className="mt-6 flex items-center justify-center gap-2.5">
            {homePortfolioProjects.map((project, i) => (
              <button
                key={`${project.title}-dot`}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`relative transition-all duration-300 ${
                  activeIndex === i
                    ? "h-2.5 w-8 rounded-full bg-linear-to-r from-primary to-accent shadow-[0_0_22px_rgba(59,130,246,0.26)]"
                    : "h-2.5 w-2.5 rounded-full bg-primary/25"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="btn-shine gradient-border inline-flex items-center gap-2 rounded-2xl border border-(--border) bg-white/60 px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-white/85 dark:bg-white/4"
          >
            View All Projects
            <HiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}