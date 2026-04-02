"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiArrowRight } from "react-icons/hi";
import Link from "next/link";

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId?: string;
  serviceTitle?: string;
  blogData: {
    title: string;
    blogTitle?: string;
    color?: string;
    introduction?: string;
    sections?: Array<{
      title: string;
      icon?: string;
      content?: string;
      points?: string[];
      subsections?: Array<{
        subtitle: string;
        content: string;
        points?: string[];
      }>;
    }>;
    conclusion?: string;
    cta?: string;
  } | null;
}

export default function BlogModal({
  isOpen,
  onClose,
  blogData,
}: BlogModalProps) {
  if (!blogData) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 z-50 flex flex-col overflow-hidden rounded-3xl bg-dark-800 shadow-2xl md:inset-8 lg:inset-12"
          >
            <div className={`relative bg-linear-to-r ${blogData.color} p-6 md:p-8`}>
              <button
                onClick={onClose}
                className="absolute right-6 top-6 rounded-full p-2 transition-colors hover:bg-white/20"
                type="button"
                aria-label="Close modal"
              >
                <HiX className="text-2xl text-white" />
              </button>

              <h2 className="pr-12 text-3xl font-bold text-white md:text-4xl">
                {blogData.title}
              </h2>

              <p className="mt-2 text-white/90">{blogData.blogTitle}</p>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="mx-auto max-w-3xl px-6 py-8 md:px-8">
                {blogData.introduction && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8 text-lg leading-relaxed text-light-300"
                  >
                    {blogData.introduction}
                  </motion.p>
                )}

                {blogData.sections?.map((section, sectionIndex: number) => (
                  <motion.div
                    key={sectionIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + sectionIndex * 0.05 }}
                    className="mb-10"
                  >
                    <h3 className="mb-4 text-2xl font-bold text-white">
                      {section.icon} {section.title}
                    </h3>

                    {section.content && (
                      <p className="mb-4 text-light-300">{section.content}</p>
                    )}

                    {section.points && (
                      <ul className="mb-6 space-y-2">
                        {section.points.map((point: string, idx: number) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.1 + sectionIndex * 0.05 + idx * 0.02,
                            }}
                            className="flex items-center text-light-200"
                          >
                            <span className="mr-3">{point.split(" ")[0]}</span>
                            <span>{point.substring(point.indexOf(" ") + 1)}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    {section.subsections && (
                      <div className="ml-4 space-y-6 border-l border-cyan-400/30 pl-6">
                        {section.subsections.map((sub, subIdx: number) => (
                          <div key={subIdx}>
                            <h4 className="mb-2 text-lg font-semibold text-cyan-300">
                              {sub.subtitle}
                            </h4>
                            <p className="mb-3 text-light-300">{sub.content}</p>
                            {sub.points && (
                              <ul className="space-y-1">
                                {sub.points.map((point: string, pIdx: number) => (
                                  <li key={pIdx} className="text-sm text-light-200">
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

                {(blogData.conclusion || blogData.cta) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 rounded-2xl border border-cyan-400/20 bg-linear-to-r from-cyan-400/10 to-blue-500/10 p-6 md:p-8"
                  >
                    <h3 className="mb-3 text-xl font-bold text-white">🏁 Conclusion</h3>
                    {blogData.conclusion && (
                      <p className="mb-6 text-light-300">{blogData.conclusion}</p>
                    )}
                    {blogData.cta && (
                      <p className="font-semibold text-cyan-300">👉 {blogData.cta}</p>
                    )}
                  </motion.div>
                )}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4 border-t border-white/10 bg-dark-900/50 p-6 backdrop-blur md:flex-row md:p-8"
            >
              <Link
                href="/contact"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-dark-900 transition-all hover:shadow-lg hover:shadow-cyan-400/50"
              >
                Start Your Project
                <HiArrowRight />
              </Link>

              <button
                onClick={onClose}
                className="flex-1 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition-all hover:bg-white/5"
                type="button"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}