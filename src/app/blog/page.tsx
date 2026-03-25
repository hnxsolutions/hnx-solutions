"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiCode, HiServer, HiDeviceMobile } from "react-icons/hi";
import { blogContent } from "@/data/blogContent";

const serviceIcons = {
  "web-development": HiCode,
  "saas-development": HiServer,
  "mobile-apps": HiDeviceMobile,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BlogPage() {
  return (
    <main className="bg-dark-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 to-dark-900" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Our Blog
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Technology Insights & <span className="gradient-text">Best Practices</span>
            </h1>
            <p className="text-light-300 text-xl max-w-3xl mx-auto">
              Deep dives into web development, SaaS, mobile apps, and modern technology
              solutions. Learn from our experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {Object.entries(blogContent).map(([slug, data]) => {
              const typedData = data as typeof blogContent[keyof typeof blogContent];
              const Icon =
                serviceIcons[slug as keyof typeof serviceIcons] || HiCode;
              return (
                <motion.div
                  key={slug}
                  variants={item}
                  className="group"
                >
                  <Link
                    href={`/blog/${slug}`}
                    className="block h-full"
                  >
                    <div
                      className={`h-full glass-card rounded-2xl p-8 glow-border hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br ${typedData.color} bg-opacity-10 border border-white/10 hover:border-cyan-400/50`}
                    >
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${typedData.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="text-2xl text-white" />
                      </div>

                      <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                        {typedData.title}
                      </h3>

                      <p className="text-light-300 leading-relaxed mb-6">
                        {typedData.introduction.substring(0, 150)}...
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {(typedData.tags || []).slice(0, 3).map((tag: string) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full bg-white/10 text-light-200 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                        {(typedData.tags?.length || 0) > 3 && (
                          <span className="px-3 py-1 text-xs text-light-300">
                            +{(typedData.tags?.length || 0) - 3} more
                          </span>
                        )}
                      </div>

                      <motion.div
                        className="inline-flex items-center gap-2 text-cyan-300 font-semibold group-hover:text-cyan-200 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        Read Article
                        <HiArrowRight />
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-3xl p-12 border border-cyan-400/30 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-light-300 text-lg mb-8">
              Let&apos;s discuss your project and find the perfect solution for your needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-dark-900 font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
            >
              Get Started
              <HiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
