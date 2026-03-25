"use client";
import { use } from "react";
import { motion } from "framer-motion";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Link from "next/link";
import { blogContent } from "@/data/blogContent";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogPage({ params }: PageProps) {
  const { slug } = use(params);
  const blogData = blogContent[slug as keyof typeof blogContent];

  if (!blogData) {
    return (
      <main className="bg-dark-900 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <p className="text-light-300 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-dark-900 font-semibold rounded-xl"
          >
            <HiArrowLeft /> Back to Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-dark-900 text-white">
      {/* Header */}
      <section className={`relative py-20 bg-gradient-to-r ${blogData.color}`}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <HiArrowLeft /> Back to Services
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{blogData.blogTitle}</h1>
          <p className="text-lg text-white/90">{blogData.introduction}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
            {blogData.sections.map((section, sectionIndex: number) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                {section.icon} {section.title}
              </h2>

              {section.content && (
                <p className="text-lg text-light-300 leading-relaxed mb-6">
                  {section.content}
                </p>
              )}

              {section.points && (
                <ul className="space-y-3 mb-8">
                  {section.points.map((point: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4 text-light-300">
                      <span className="text-2xl flex-shrink-0">
                        {point.split(" ")[0]}
                      </span>
                      <span className="text-base">
                        {point.substring(point.indexOf(" ") + 1)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {section.subsections && (
                <div className="space-y-8 bg-white/5 rounded-2xl p-8 border border-cyan-400/20">
                  {section.subsections?.map((sub, subIdx: number) => (
                    <div key={subIdx}>
                      <h3 className="text-2xl font-bold text-cyan-300 mb-3">
                        {sub.subtitle}
                      </h3>
                      <p className="text-light-300 mb-4">{sub.content}</p>
                      {'points' in sub && sub.points && sub.points.length > 0 && (
                        <ul className="space-y-2">
                          {sub.points.map((point: string, pIdx: number) => (
                            <li key={pIdx} className="text-light-200">
                              • {point}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-3xl p-12 border border-cyan-400/30 my-20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">🏁 Conclusion</h2>
            <p className="text-xl text-light-300 leading-relaxed mb-8">
              {blogData.conclusion}
            </p>
            <p className="text-2xl font-semibold text-cyan-300 mb-8">
              👉 {blogData.cta}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-dark-900 font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
            >
              Start Your Project
              <HiArrowRight />
            </Link>
          </motion.div>

          {/* Related Services */}
          <div className="my-16">
            <h2 className="text-3xl font-bold mb-8">Explore Other Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/services"
                className="group p-6 rounded-xl border border-cyan-400/20 hover:border-cyan-400/50 bg-white/5 hover:bg-white/10 transition-all"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                  View All Services
                </h3>
                <p className="text-light-300">Explore our complete service offerings</p>
              </Link>
              <Link
                href="/contact"
                className="group p-6 rounded-xl border border-cyan-400/20 hover:border-cyan-400/50 bg-white/5 hover:bg-white/10 transition-all"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                  Get Started
                </h3>
                <p className="text-light-300">Ready to transform your business?</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
