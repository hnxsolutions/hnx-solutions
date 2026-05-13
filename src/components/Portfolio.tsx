"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiExternalLink, HiEye } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import SitePreview from "./SitePreview";
import { portfolioCategories, portfolioProjects } from "@/data/portfolioProjects";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
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
    <section id="portfolio" className="relative overflow-hidden py-28 grid-bg">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/2 to-transparent dark:via-white/1" />

      <div className="relative mx-auto max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Our Work
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Featured <span className="gradient-text">Case Studies</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-(--text-muted)">
            Real-world digital products we’ve built across industries, focused on
            performance, usability, and business impact.
          </p>
        </motion.div>

        {/* FILTERS */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-wrap justify-center gap-3"
        >
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
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

        {/* GRID */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 22, scale: 0.985 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.985 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35 }}
                className="group premium-card glass-card overflow-hidden rounded-4xl"
              >
                {/* VISUAL */}
                <div
                  className={`relative h-56 overflow-hidden bg-linear-to-br ${project.color}`}
                >
                  {project.imageUrl ? (
                    <>
                      <Image
                        src={project.imageUrl}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                    </>
                  ) : project.liveUrl ? (
                    <div className="absolute inset-0 overflow-hidden">
                      <iframe
                        src={project.liveUrl}
                        title={`Preview of ${project.title}`}
                        className="pointer-events-none h-180 w-7xl origin-top-left"
                        style={{
                          transform: "scale(0.28)",
                          transformOrigin: "top left",
                        }}
                        tabIndex={-1}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/78 via-black/18 to-transparent" />
                    </div>
                  ) : (
                    <div className="flex h-full items-center justify-center text-7xl font-black text-white/10">
                      {project.title[0]}
                    </div>
                  )}

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs text-white/85 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {project.liveUrl ? (
                      <button
                        onClick={() =>
                          setPreviewProject({
                            url: project.liveUrl!,
                            title: project.title,
                          })
                        }
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/20 text-primary transition-all hover:scale-105 hover:bg-primary/30"
                        title="Preview site"
                      >
                        <HiEye size={20} />
                      </button>
                    ) : null}

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/85 transition-all hover:scale-105 hover:bg-white/20"
                        title="Visit site"
                      >
                        <HiExternalLink size={20} />
                      </a>
                    ) : null}

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/85 transition-all hover:scale-105 hover:bg-white/20"
                        title="Open GitHub repository"
                      >
                        <FiGithub size={20} />
                      </a>
                    ) : null}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    {project.liveUrl ? (
                      <HiExternalLink className="mt-1 text-(--text-soft) transition-colors group-hover:text-primary" />
                    ) : project.githubUrl ? (
                      <FiGithub className="mt-1 text-(--text-soft) transition-colors group-hover:text-primary" />
                    ) : null}
                  </div>

                  <p className="mb-5 text-sm leading-7 text-(--text-muted)">
                    {project.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-xl border border-(--border) bg-white/55 px-3 py-1.5 text-xs font-medium text-(--text-muted) dark:bg-white/3"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-white/8 pt-4">
                    <div>
                      <p className="text-sm font-bold text-primary">
                        {project.stats.users}
                      </p>
                      <p className="mt-1 text-xs text-(--text-soft)">
                        {project.stats.usersLabel ?? "Users"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-accent-light">
                        {project.stats.metric}
                      </p>
                      <p className="mt-1 text-xs text-(--text-soft)">
                        {project.stats.metricLabel ?? "Status"}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* PREVIEW MODAL */}
      {previewProject && (
        <SitePreview
          url={previewProject.url}
          title={previewProject.title}
          onClose={() => setPreviewProject(null)}
        />
      )}
    </section>
  );
}