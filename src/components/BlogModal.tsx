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
    blogTitle: string;
    color: string;
    introduction: string;
    sections: Array<{
      title: string;
      icon: string;
      content?: string;
      points?: string[];
      subsections?: Array<{
        subtitle: string;
        content: string;
        points?: string[];
      }>;
    }>;
    conclusion: string;
    cta: string;
  };
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-12 z-50 bg-dark-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className={`bg-gradient-to-r ${blogData.color} p-6 md:p-8 relative`}>
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <HiX className="text-2xl text-white" />
              </button>
              <h2 className="text-3xl md:text-4xl font-bold text-white pr-12">
                {blogData.title}
              </h2>
              <p className="text-white/90 mt-2">{blogData.blogTitle}</p>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="max-w-3xl mx-auto px-6 md:px-8 py-8">
                {/* Introduction */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-light-300 leading-relaxed mb-8"
                >
                  {blogData.introduction}
                </motion.p>

                {/* Sections */}
                {blogData.sections.map((section, sectionIndex: number) => (
                  <motion.div
                    key={sectionIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + sectionIndex * 0.05 }}
                    className="mb-10"
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {section.icon} {section.title}
                    </h3>

                    {section.content && (
                      <p className="text-light-300 mb-4">{section.content}</p>
                    )}

                    {section.points && (
                      <ul className="space-y-2 mb-6">
                        {section.points.map((point: string, idx: number) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + sectionIndex * 0.05 + idx * 0.02 }}
                            className="flex items-center text-light-200"
                          >
                            <span className="mr-3">{point.split(" ")[0]}</span>
                            <span>{point.substring(point.indexOf(" ") + 1)}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    {section.subsections && (
                      <div className="space-y-6 ml-4 border-l border-cyan-400/30 pl-6">
                        {section.subsections?.map((sub, subIdx: number) => (
                          <div key={subIdx}>
                            <h4 className="text-lg font-semibold text-cyan-300 mb-2">
                              {sub.subtitle}
                            </h4>
                            <p className="text-light-300 mb-3">{sub.content}</p>
                            {sub.points && (
                              <ul className="space-y-1">
                                {sub.points.map((point: string, pIdx: number) => (
                                  <li key={pIdx} className="text-light-200 text-sm">
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-2xl p-6 md:p-8 mt-12 border border-cyan-400/20"
                >
                  <h3 className="text-xl font-bold text-white mb-3">🏁 Conclusion</h3>
                  <p className="text-light-300 mb-6">{blogData.conclusion}</p>
                  <p className="text-cyan-300 font-semibold">👉 {blogData.cta}</p>
                </motion.div>
              </div>
            </div>

            {/* Footer Actions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="border-t border-white/10 bg-dark-900/50 backdrop-blur p-6 md:p-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-dark-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
              >
                Start Your Project
                <HiArrowRight />
              </Link>
              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-all"
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
