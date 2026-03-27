"use client";
import { useState } from "react";
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
  const [previewProject, setPreviewProject] = useState<{ url: string; title: string } | null>(null);

  const filtered =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <main>
      {/* Page Hero */}
      <section className="relative min-h-[52vh] pt-34 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={portfolioHeroBgImage}
            alt="Portfolio projects and development team"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] md:object-center scale-[1.06] opacity-28 contrast-105 saturate-95"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/97 via-dark-900/84 to-dark-900/52" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(56,189,248,0.18),transparent_33%),radial-gradient(circle_at_84%_78%,rgba(139,92,246,0.13),transparent_28%)]" />
          <div className="absolute right-0 top-1/2 hidden h-[32rem] w-[36rem] -translate-y-1/2 bg-[radial-gradient(circle,rgba(6,10,18,0.66)_0%,rgba(6,10,18,0.4)_44%,rgba(6,10,18,0)_74%)] blur-2xl lg:block" />
        </div>

        <div className="absolute top-20 left-10 z-[1] h-96 w-96 rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute bottom-20 right-10 z-[1] h-80 w-80 rounded-full bg-accent/4 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-primary uppercase">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Our Work
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight mb-6">
              Featured{" "}
              <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-light-200 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              Real-world solutions we&apos;ve built for clients across industries.
              Each project designed to deliver measurable impact. Click any project
              to explore the full case study.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#portfolio-grid"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-bold text-dark-900 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
              >
                Explore Projects
                <HiArrowRight className="text-lg" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-light-300/20 px-8 py-4 text-base font-semibold text-light-100 transition-all hover:bg-white/5 hover:border-primary/30"
              >
                Get a Quote
              </Link>
            </div>

            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-light-300/80 sm:gap-x-5">
              {["Web Platforms", "Mobile Apps", "AI Systems", "Cloud Delivery"].map((item, index) => (
                <span key={item} className="inline-flex items-center gap-4">
                  <span className="font-medium tracking-wide">{item}</span>
                  {index < 3 ? <span className="h-1 w-1 rounded-full bg-primary/70" /> : null}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter + Projects */}
      <section id="portfolio-grid" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setExpandedProject(null);
                }}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-primary to-accent text-dark-900"
                    : "bg-dark-700/50 text-light-300 hover:text-light-100 hover:bg-dark-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects */}
          <motion.div layout className="space-y-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => {
                const isExpanded = expandedProject === project.title;

                return (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="glass-card rounded-2xl overflow-hidden glow-border cursor-pointer"
                    onClick={() =>
                      setExpandedProject(isExpanded ? null : project.title)
                    }
                  >
                    <div className={`grid lg:grid-cols-3 gap-0 ${isExpanded ? "items-stretch" : ""}`}>
                      {/* Project Image / Header */}
                      <div
                        className={`${isExpanded ? "h-64 lg:h-full" : "h-48 lg:h-auto"} min-h-[200px] bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden transition-all duration-500`}
                      >
                        {project.imageUrl ? (
                          <>
                            <Image
                              src={project.imageUrl}
                              alt={`${project.title} preview`}
                              fill
                              sizes="(min-width: 1024px) 33vw, 100vw"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 via-dark-900/15 to-transparent" />
                          </>
                        ) : project.liveUrl ? (
                          <div className="absolute inset-0 overflow-hidden">
                            <iframe
                              src={project.liveUrl}
                              title={`Preview of ${project.title}`}
                              className="w-[1280px] h-[900px] origin-top-left pointer-events-none"
                              style={{ transform: "scale(0.35)", transformOrigin: "top left" }}
                              tabIndex={-1}
                              loading="lazy"
                              sandbox="allow-scripts allow-same-origin"
                            />
                          </div>
                        ) : (
                          <div className="text-8xl font-black text-white/10">
                            {project.title[0]}
                          </div>
                        )}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 text-xs rounded-full bg-dark-900/60 text-light-200 backdrop-blur-sm">
                            {project.category}
                          </span>
                        </div>
                        <div className="absolute bottom-4 right-4 flex gap-2">
                          {project.liveUrl || project.githubUrl ? (
                            <>
                              {project.liveUrl ? (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setPreviewProject({ url: project.liveUrl!, title: project.title });
                                }}
                                className="w-10 h-10 rounded-full bg-dark-900/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-light-200 hover:text-primary transition-colors"
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
                                  className="w-10 h-10 rounded-full bg-dark-900/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-light-200 hover:text-primary transition-colors"
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
                                  className="w-10 h-10 rounded-full bg-dark-900/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-light-200 hover:text-primary transition-colors"
                                  title="Open GitHub repository"
                                >
                                  <FiGithub size={18} />
                                </a>
                              ) : null}
                            </>
                          ) : (
                            <>
                              <button className="w-10 h-10 rounded-full bg-dark-900/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-light-200 hover:text-primary transition-colors">
                                <HiEye size={18} />
                              </button>
                              <button className="w-10 h-10 rounded-full bg-dark-900/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-light-200 hover:text-primary transition-colors">
                                <FiGithub size={18} />
                              </button>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="lg:col-span-2 p-8">
                        <div className="flex items-center justify-between mb-3">
                          <h2 className="text-2xl font-bold">{project.title}</h2>
                          {project.liveUrl ? (
                            <HiExternalLink className="text-light-300" />
                          ) : project.githubUrl ? (
                            <FiGithub className="text-light-300" />
                          ) : null}
                        </div>

                        <p className="text-light-300 leading-relaxed mb-6">
                          {isExpanded ? project.longDescription : project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs rounded-md bg-white/5 text-light-200 border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-8 mb-6">
                          <div>
                            <p className="text-lg font-bold text-primary">
                              {project.stats.users}
                            </p>
                            <p className="text-xs text-light-300">{project.stats.usersLabel ?? "Users"}</p>
                          </div>
                          <div>
                            <p className="text-lg font-bold text-accent-light">
                              {project.stats.metric}
                            </p>
                            <p className="text-xs text-light-300">{project.stats.metricLabel ?? "Status"}</p>
                          </div>
                          <div>
                            <p className="text-lg font-bold text-emerald-400">
                              {project.stats.timeline}
                            </p>
                            <p className="text-xs text-light-300">{project.stats.timelineLabel ?? "Timeline"}</p>
                          </div>
                        </div>

                        {/* Expanded Details */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
                                <div>
                                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                                    Challenges Solved
                                  </h3>
                                  <ul className="space-y-2">
                                    {(project.challenges ?? []).map((c) => (
                                      <li
                                        key={c}
                                        className="flex items-start gap-2 text-sm text-light-300"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                                        {c}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-3">
                                    Results Achieved
                                  </h3>
                                  <ul className="space-y-2">
                                    {(project.results ?? []).map((r) => (
                                      <li
                                        key={r}
                                        className="flex items-start gap-2 text-sm text-light-300"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                                        {r}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Live site buttons */}
                        {(project.liveUrl || project.githubUrl) && isExpanded && (
                          <div className="flex items-center gap-3 mt-4">
                            {project.liveUrl ? (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setPreviewProject({ url: project.liveUrl!, title: project.title });
                                }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-sm text-primary hover:bg-primary/20 transition-all"
                              >
                                <HiEye size={16} /> Preview Site
                              </button>
                            ) : null}
                            {project.liveUrl ? (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-light-200 hover:text-primary hover:border-primary/30 transition-all"
                              >
                                <HiExternalLink size={16} /> Visit Live Site
                              </a>
                            ) : null}
                            {project.githubUrl ? (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-light-200 hover:text-primary hover:border-primary/30 transition-all"
                              >
                                <FiGithub size={16} /> View Repository
                              </a>
                            ) : null}
                          </div>
                        )}

                        <p className="text-xs text-primary mt-4">
                          {isExpanded ? "Click to collapse" : "Click to view full case study →"}
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

      {/* CTA */}
      <section className="py-24 relative grid-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-12 glow-border"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want Results Like <span className="gradient-text">These?</span>
            </h2>
            <p className="text-light-300 text-lg max-w-xl mx-auto mb-8">
              Let&apos;s discuss how we can build a solution that delivers
              measurable impact for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-dark-900 font-bold rounded-xl hover:shadow-xl hover:shadow-primary/25 transition-all hover:-translate-y-1"
            >
              Start Your Project
              <HiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Site Preview Modal */}
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
