"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiExternalLink, HiEye } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import SitePreview from "./SitePreview";

const categories = ["All", "Web Apps", "Mobile Apps", "AI Solutions", "E-Commerce", "Healthcare"];

const projects = [
  {
    title: "Novakos Healthcare",
    description:
      "B2B pharmaceutical distribution platform with 160+ medicines catalog, bulk ordering, buyer registration, and compliance management for chemists, pharmacies, and hospitals.",
    category: "Healthcare",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    stats: { users: "500+", metric: "Live" },
    color: "from-emerald-500/20 to-cyan-500/20",
    accent: "emerald",
    liveUrl: "https://www.novakoshealthcare.com",
  },
  {
    title: "MediConnect",
    description:
      "Telemedicine platform connecting patients with doctors. Video consultations, prescription management, and health tracking.",
    category: "Mobile Apps",
    tags: ["React Native", "WebRTC", "Node.js", "MongoDB"],
    stats: { users: "8K+", metric: "iOS & Android" },
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "emerald",
  },
  {
    title: "AI Support Agent",
    description:
      "Intelligent customer support system trained on company data. Handles 80% of queries autonomously with natural conversations.",
    category: "AI Solutions",
    tags: ["GPT-4", "LangChain", "Vector DB", "Python"],
    stats: { users: "50K+", metric: "Queries/month" },
    color: "from-amber-500/20 to-orange-500/20",
    accent: "amber",
  },
  {
    title: "ShopFlow",
    description:
      "Modern e-commerce platform with AI-powered recommendations, real-time inventory, and seamless payment integrations.",
    category: "E-Commerce",
    tags: ["Next.js", "Stripe", "Redis", "Algolia"],
    stats: { users: "25K+", metric: "Orders processed" },
    color: "from-violet-500/20 to-purple-500/20",
    accent: "violet",
  },
  {
    title: "TaskForge",
    description:
      "Project management platform for remote teams. Kanban boards, time tracking, sprint planning, and team analytics.",
    category: "Web Apps",
    tags: ["React", "Node.js", "WebSocket", "Redis"],
    stats: { users: "6K+", metric: "Teams active" },
    color: "from-sky-500/20 to-indigo-500/20",
    accent: "sky",
  },
  {
    title: "FitPulse",
    description:
      "Fitness tracking app with workout plans, nutrition logging, progress analytics, and social challenges.",
    category: "Mobile Apps",
    tags: ["React Native", "Firebase", "HealthKit", "Charts"],
    stats: { users: "15K+", metric: "Active users" },
    color: "from-pink-500/20 to-rose-500/20",
    accent: "pink",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [previewProject, setPreviewProject] = useState<{ url: string; title: string } | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 relative grid-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-light-300 text-lg max-w-2xl mx-auto">
            Real-world solutions we've built for clients across industries.
            Each project designed to deliver measurable impact.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
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

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group glass-card rounded-2xl overflow-hidden glow-border"
              >
                {/* Project Image Placeholder */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
                >
                  {project.liveUrl ? (
                    <div className="absolute inset-0 overflow-hidden">
                      <iframe
                        src={project.liveUrl}
                        title={`Preview of ${project.title}`}
                        className="w-[1280px] h-[720px] origin-top-left pointer-events-none"
                        style={{ transform: "scale(0.28)", transformOrigin: "top left" }}
                        tabIndex={-1}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                      />
                    </div>
                  ) : (
                    <div className="text-6xl font-black text-white/10">
                      {project.title[0]}
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-dark-900/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl ? (
                      <>
                        <button
                          onClick={() => setPreviewProject({ url: project.liveUrl!, title: project.title })}
                          className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
                          title="Preview site"
                        >
                          <HiEye size={20} />
                        </button>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-light-200 hover:bg-white/20 transition-colors"
                          title="Visit site"
                        >
                          <HiExternalLink size={20} />
                        </a>
                      </>
                    ) : (
                      <>
                        <button className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors">
                          <HiEye size={20} />
                        </button>
                        <button className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-light-200 hover:bg-white/20 transition-colors">
                          <FiGithub size={20} />
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <HiExternalLink className="text-light-300 group-hover:text-primary transition-colors" />
                  </div>

                  <p className="text-sm text-light-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-light-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                    <div>
                      <p className="text-sm font-bold text-primary">{project.stats.users}</p>
                      <p className="text-xs text-light-300">Users</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-accent-light">
                        {project.stats.metric}
                      </p>
                      <p className="text-xs text-light-300">Status</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Site Preview Modal */}
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
