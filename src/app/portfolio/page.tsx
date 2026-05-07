"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiExternalLink, HiEye, HiArrowRight } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import SitePreview from "@/components/SitePreview";
import { portfolioCategories, portfolioProjects } from "@/data/portfolioProjects";

const portfolioHeroBgImage =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=85";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [previewProject, setPreviewProject] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const filtered = useMemo(() => {
    return activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="page-shell relative">
      <section className="page-hero hero-light relative isolate min-h-[78svh] md:min-h-[88vh] lg:flex lg:items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={portfolioHeroBgImage}
            alt="Portfolio projects and development team"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_center] scale-[1.08] opacity-80 brightness-[0.52] contrast-110 saturate-[0.9] md:object-center dark:opacity-38 dark:brightness-[0.4] dark:contrast-110 dark:saturate-90"
          />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(248,250,252,0.93)_0%,rgba(248,250,252,0.84)_24%,rgba(248,250,252,0.5)_52%,rgba(248,250,252,0.12)_78%,rgba(248,250,252,0.03)_100%)] dark:bg-[linear-gradient(to_right,rgba(24,24,24,0.98)_0%,rgba(24,24,24,0.94)_28%,rgba(24,24,24,0.78)_54%,rgba(24,24,24,0.38)_76%,rgba(24,24,24,0.14)_100%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(14,165,233,0.12),transparent_28%),radial-gradient(circle_at_82%_76%,rgba(99,102,241,0.12),transparent_24%)] dark:bg-[radial-gradient(circle_at_16%_24%,rgba(77,208,225,0.16),transparent_30%),radial-gradient(circle_at_84%_74%,rgba(149,117,205,0.14),transparent_26%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(15,23,42,0.12),transparent_45%)] dark:bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.38),transparent_48%)]" />

          <div className="absolute left-0 top-1/2 hidden h-136 w-120 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.14)_46%,rgba(255,255,255,0)_74%)] blur-2xl lg:block dark:hidden" />
          <div className="absolute right-0 top-1/2 hidden h-136 w-152 -translate-y-1/2 bg-[radial-gradient(circle,rgba(6,10,18,0.68)_0%,rgba(6,10,18,0.42)_44%,rgba(6,10,18,0)_76%)] blur-2xl dark:lg:block" />
        </div>

        <div className="absolute left-10 top-24 z-1 h-72 w-72 rounded-full bg-primary/6 blur-3xl dark:bg-primary/4" />
        <div className="absolute bottom-16 right-10 z-1 h-72 w-72 rounded-full bg-accent/6 blur-3xl dark:bg-accent/4" />
        <div className="absolute left-1/2 top-1/2 z-1 h-144 w-xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/4 blur-[120px] dark:bg-primary/2" />

        <div className="relative z-10 mx-auto w-full max-w-[min(95vw,1600px)] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.65,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative"
            >
              <div className="absolute -inset-x-4 -inset-y-6 -z-10 rounded-4xl bg-[radial-gradient(circle,rgba(255,255,255,0.86)_0%,rgba(255,255,255,0.48)_52%,rgba(255,255,255,0)_100%)] blur-xl md:hidden dark:bg-[radial-gradient(circle,rgba(6,10,18,0.82)_0%,rgba(6,10,18,0.56)_52%,rgba(6,10,18,0)_100%)]" />

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.55 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm"
              >
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Our Work
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14, duration: 0.6 }}
                className="mb-6 text-4xl font-bold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Featured
                <br />
                <span className="gradient-text">Case Studies</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.6 }}
                className="max-w-2xl text-base leading-relaxed text-(--text-muted) sm:text-lg md:text-xl"
              >
                Real digital products we’ve designed and engineered across web,
                mobile, AI, healthcare, and commerce. Each project is built to
                create measurable business impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.6 }}
                className="mt-9 flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="#portfolio-grid"
                  className="btn-shine inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-8 py-4 text-base font-bold text-dark-900 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
                >
                  Explore Projects
                  <HiArrowRight className="text-lg" />
                </Link>

                <Link
                  href="/contact"
                  className="gradient-border inline-flex items-center justify-center gap-2 rounded-xl border border-(--border) bg-white/55 px-8 py-4 text-base font-semibold text-(--text) transition-all hover:border-primary/30 hover:bg-white/80 dark:bg-white/4"
                >
                  Start a Project
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34, duration: 0.6 }}
                className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-(--text-muted) sm:gap-x-5"
              >
                {["Web Platforms", "Mobile Apps", "AI Systems", "Cloud Delivery"].map(
                  (item, index) => (
                    <span key={item} className="inline-flex items-center gap-4">
                      <span className="font-medium tracking-wide">{item}</span>
                      {index < 3 ? (
                        <span className="h-1 w-1 rounded-full bg-primary/70" />
                      ) : null}
                    </span>
                  )
                )}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.18,
                duration: 0.65,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative"
            >
              <div className="glass-card depth-card rounded-4xl border border-(--border) p-5 sm:p-6 md:p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: `${portfolioProjects.length}+`, label: "Projects" },
                    { value: `${portfolioCategories.length - 1}`, label: "Sectors" },
                    { value: "UI+", label: "Premium Delivery" },
                    { value: "ROI", label: "Business Focus" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="premium-card rounded-2xl border border-(--border) bg-white/55 p-4 text-center dark:bg-white/3 sm:p-5"
                    >
                      <p className="gradient-text text-3xl font-bold md:text-4xl">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm font-medium text-(--text-muted)">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.75rem] border border-(--border) bg-[linear-gradient(180deg,rgba(255,255,255,0.65),rgba(255,255,255,0.38))] p-5 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    Portfolio Snapshot
                  </p>
                  <h3 className="mt-3 text-xl font-bold sm:text-2xl">
                    Strategy, design, engineering, and measurable outcomes.
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-(--text-muted)">
                    From healthcare platforms to AI systems and mobile products,
                    our work is built to look premium, perform reliably, and solve
                    practical business challenges.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="portfolio-grid" className="section-shell relative">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/2 to-transparent dark:via-white/1" />

        <div className="relative mx-auto max-w-[min(95vw,1600px)] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 flex flex-wrap justify-center gap-3"
          >
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setExpandedProject(null);
                }}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-linear-to-r from-primary to-accent text-dark-900 shadow-lg shadow-primary/20"
                    : "border border-(--border) bg-white/55 text-(--text-muted) hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white/80 hover:text-(--text) dark:bg-white/4"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="space-y-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => {
                const isExpanded = expandedProject === project.title;

                return (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.38 }}
                    className="premium-card glass-card cursor-glow overflow-hidden rounded-3xl sm:rounded-4xl"
                    onClick={() =>
                      setExpandedProject(isExpanded ? null : project.title)
                    }
                  >
                    <div
                      className={`grid lg:grid-cols-[0.95fr_1.05fr] ${
                        isExpanded ? "items-stretch" : ""
                      }`}
                    >
                      <div
                        className={`relative overflow-hidden ${
                          isExpanded ? "h-72 lg:h-full" : "h-60 lg:h-auto"
                        } min-h-55 bg-linear-to-br ${project.color} transition-all duration-500`}
                      >
                        {project.imageUrl ? (
                          <>
                            <Image
                              src={project.imageUrl}
                              alt={`${project.title} preview`}
                              fill
                              sizes="(min-width: 1024px) 40vw, 100vw"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                          </>
                        ) : project.liveUrl ? (
                          <div className="absolute inset-0 overflow-hidden">
                            <iframe
                              src={project.liveUrl}
                              title={`Preview of ${project.title}`}
                              className="pointer-events-none hidden h-225 w-7xl origin-top-left lg:block"
                              style={{
                                transform: "scale(0.35)",
                                transformOrigin: "top left",
                              }}
                              tabIndex={-1}
                              loading="lazy"
                              sandbox="allow-scripts allow-same-origin"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/12 to-transparent" />
                          </div>
                        ) : (
                          <div className="flex h-full items-center justify-center text-8xl font-black text-white/10">
                            {project.title[0]}
                          </div>
                        )}

                        <div className="absolute left-4 top-4">
                          <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs text-white/85 backdrop-blur-md">
                            {project.category}
                          </span>
                        </div>

                        <div className="absolute bottom-4 right-4 flex gap-2">
                          {project.liveUrl ? (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setPreviewProject({
                                  url: project.liveUrl!,
                                  title: project.title,
                                });
                              }}
                              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/85 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:text-primary"
                              title="Preview site"
                            >
                              <HiEye size={18} />
                            </button>
                          ) : null}

                          {project.liveUrl ? (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/85 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:text-primary"
                              title="Visit site"
                            >
                              <HiExternalLink size={18} />
                            </a>
                          ) : null}

                          {project.githubUrl ? (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/85 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:text-primary"
                              title="Open GitHub repository"
                            >
                              <FiGithub size={18} />
                            </a>
                          ) : null}
                        </div>
                      </div>

                      <div className="p-5 sm:p-7 lg:p-9">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h2 className="text-2xl font-bold md:text-3xl">
                              {project.title}
                            </h2>
                            <p className="mt-2 text-sm text-primary">
                              Premium build · {project.category}
                            </p>
                          </div>

                          {project.liveUrl ? (
                            <HiExternalLink className="mt-1 shrink-0 text-(--text-soft)" />
                          ) : project.githubUrl ? (
                            <FiGithub className="mt-1 shrink-0 text-(--text-soft)" />
                          ) : null}
                        </div>

                        <p className="mt-5 leading-8 text-(--text-muted)">
                          {isExpanded
                            ? project.longDescription ?? project.description
                            : project.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-xl border border-(--border) bg-white/55 px-3 py-2 text-xs font-medium text-(--text-muted) dark:bg-white/3"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="mt-7 grid grid-cols-1 gap-4 rounded-[1.6rem] border border-(--border) bg-white/45 p-4 dark:bg-white/3 sm:grid-cols-3">
                          <div>
                            <p className="text-lg font-bold text-primary">
                              {project.stats.users}
                            </p>
                            <p className="mt-1 text-xs text-(--text-soft)">
                              {project.stats.usersLabel ?? "Users"}
                            </p>
                          </div>
                          <div>
                            <p className="text-lg font-bold text-accent-light">
                              {project.stats.metric}
                            </p>
                            <p className="mt-1 text-xs text-(--text-soft)">
                              {project.stats.metricLabel ?? "Status"}
                            </p>
                          </div>
                          <div>
                            <p className="text-lg font-bold text-emerald-400">
                              {project.stats.timeline ?? "Fast"}
                            </p>
                            <p className="mt-1 text-xs text-(--text-soft)">
                              {project.stats.timelineLabel ?? "Timeline"}
                            </p>
                          </div>
                        </div>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.28 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-8 grid gap-8 border-t border-white/8 pt-8 md:grid-cols-2">
                                <div>
                                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                                    Challenges Solved
                                  </h3>
                                  <ul className="space-y-3">
                                    {(project.challenges ?? []).map((item) => (
                                      <li
                                        key={item}
                                        className="flex items-start gap-3 text-sm leading-7 text-(--text-muted)"
                                      >
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                                    Results Achieved
                                  </h3>
                                  <ul className="space-y-3">
                                    {(project.results ?? []).map((item) => (
                                      <li
                                        key={item}
                                        className="flex items-start gap-3 text-sm leading-7 text-(--text-muted)"
                                      >
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              {(project.liveUrl || project.githubUrl) && (
                                <div className="mt-6 flex flex-wrap items-center gap-3">
                                  {project.liveUrl ? (
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setPreviewProject({
                                          url: project.liveUrl!,
                                          title: project.title,
                                        });
                                      }}
                                      className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition-all hover:bg-primary/20"
                                    >
                                      <HiEye size={16} />
                                      Preview Site
                                    </button>
                                  ) : null}

                                  {project.liveUrl ? (
                                    <a
                                      href={project.liveUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={(e) => e.stopPropagation()}
                                      className="inline-flex items-center gap-2 rounded-xl border border-(--border) bg-white/50 px-4 py-2.5 text-sm font-medium text-(--text-muted) transition-all hover:border-primary/30 hover:text-primary dark:bg-white/3"
                                    >
                                      <HiExternalLink size={16} />
                                      Visit Live Site
                                    </a>
                                  ) : null}

                                  {project.githubUrl ? (
                                    <a
                                      href={project.githubUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={(e) => e.stopPropagation()}
                                      className="inline-flex items-center gap-2 rounded-xl border border-(--border) bg-white/50 px-4 py-2.5 text-sm font-medium text-(--text-muted) transition-all hover:border-primary/30 hover:text-primary dark:bg-white/3"
                                    >
                                      <FiGithub size={16} />
                                      View Repository
                                    </a>
                                  ) : null}
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <p className="mt-5 text-xs font-medium text-primary">
                          {isExpanded
                            ? "Click anywhere on the card to collapse"
                            : "Click to view full case study →"}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="section-shell relative grid-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.04),transparent_28%)] dark:bg-[radial-gradient(circle_at_top,rgba(77,208,225,0.06),transparent_28%)]" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card depth-card cursor-glow rounded-4xl p-8 text-center md:p-10 lg:p-14"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Let’s Build
            </span>

            <h2 className="mt-6 text-3xl font-bold md:text-5xl">
              Want Results Like <span className="gradient-text">These?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-(--text-muted)">
              Let’s design and build a premium product for your business with the
              same focus on quality, clarity, and measurable growth.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="btn-shine inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-8 py-4 text-base font-bold text-dark-900 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
              >
                Start Your Project
                <HiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {previewProject && (
        <SitePreview
          url={previewProject.url}
          title={previewProject.title}
          onClose={() => setPreviewProject(null)}
        />
      )}
    </main>
  );
}