"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { homePortfolioProjects } from "@/data/portfolioProjects";

export default function HomePortfolio() {
  return (
    <section className="py-12 relative grid-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-light-300 text-lg max-w-2xl mx-auto">
            A snapshot of the solutions we&apos;ve delivered for clients across industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {homePortfolioProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Link
                href="/portfolio"
                className="block group glass-card rounded-2xl overflow-hidden glow-border hover:-translate-y-2 transition-all duration-500"
              >
                <div
                  className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
                >
                  {project.imageUrl ? (
                    <>
                      <Image
                        src={project.imageUrl}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/65 via-dark-900/20 to-transparent" />
                    </>
                  ) : project.liveUrl ? (
                    <div className="absolute inset-0 overflow-hidden">
                      <iframe
                        src={project.liveUrl}
                        title={`Preview of ${project.title}`}
                        className="w-[1280px] h-[720px] origin-top-left pointer-events-none"
                        style={{ transform: "scale(0.25)", transformOrigin: "top left" }}
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
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-medium">{project.category}</span>
                  <h3 className="text-lg font-bold mt-1 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-light-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-light-300/20 text-light-100 font-semibold rounded-xl hover:bg-white/5 hover:border-primary/30 transition-all"
          >
            View All Projects
            <HiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
