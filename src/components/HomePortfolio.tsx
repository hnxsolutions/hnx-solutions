"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { homePortfolioProjects } from "@/data/portfolioProjects";
import { useTilt } from "@/hooks/useTilt";

function PortfolioCard({
  project,
  index,
}: {
  project: (typeof homePortfolioProjects)[number];
  index: number;
}) {
  const { ref, handleMove, reset } = useTilt<HTMLDivElement>();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true }}
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="premium-ease"
      >
        <Link
          href="/portfolio"
          className="group glass-card depth-card premium-card cursor-glow block overflow-hidden rounded-2xl transition-all duration-500"
        >
          <div className="relative h-44 overflow-hidden">
            {project.imageUrl ? (
              <>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/55 to-transparent dark:from-dark-900/65" />
              </>
            ) : project.liveUrl ? (
              <div className="absolute inset-0 overflow-hidden">
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
              </div>
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-primary/20 to-accent/20">
                <span className="text-6xl font-black text-white/20 dark:text-white/15">
                  {project.title[0]}
                </span>
              </div>
            )}
          </div>

          <div className="p-6">
            <span className="text-xs font-medium text-primary">
              {project.category}
            </span>

            <h3 className="mt-2 mb-3 text-lg font-bold transition-colors group-hover:text-primary">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-(--border) bg-white/50 px-2.5 py-1 text-xs dark:bg-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

export default function HomePortfolio() {
  return (
    <section className="relative grid-bg bg-(--bg) py-16 text-(--text)">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Work
          </span>

          <h2 className="mt-4 mb-6 text-4xl font-bold md:text-5xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-(--text-soft)">
            Real-world products crafted with precision and scale.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {homePortfolioProjects.map((project, i) => (
            <PortfolioCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="btn-shine gradient-border inline-flex items-center gap-2 rounded-xl border border-(--border) bg-white/50 px-8 py-3.5 font-semibold transition-all hover:bg-white/80 dark:bg-white/3"
          >
            View All Projects
            <HiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}