"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiExternalLink } from "react-icons/hi";
import { FiMonitor, FiSmartphone, FiTablet } from "react-icons/fi";

type Viewport = "desktop" | "tablet" | "mobile";

const viewports: { key: Viewport; icon: typeof FiMonitor; label: string; width: string }[] = [
  { key: "desktop", icon: FiMonitor, label: "Desktop", width: "100%" },
  { key: "tablet", icon: FiTablet, label: "Tablet", width: "768px" },
  { key: "mobile", icon: FiSmartphone, label: "Mobile", width: "375px" },
];

export default function SitePreview({
  url,
  title,
  onClose,
}: {
  url: string;
  title: string;
  onClose: () => void;
}) {
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [loading, setLoading] = useState(true);

  const currentWidth = viewports.find((v) => v.key === viewport)?.width ?? "100%";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-dark-900/90 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-[95vw] h-[90vh] flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-dark-800"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Toolbar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-dark-900/80">
            <div className="flex items-center gap-4">
              {/* Traffic lights */}
              <div className="flex gap-2">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
                  aria-label="Close"
                />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* URL bar */}
              <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-lg bg-dark-700/80 border border-white/10 text-sm text-light-300 min-w-[200px] max-w-md">
                <span className="text-emerald-400 text-xs">🔒</span>
                <span className="truncate">{url}</span>
              </div>
            </div>

            {/* Viewport Switcher */}
            <div className="flex items-center gap-1">
              {viewports.map((v) => (
                <button
                  key={v.key}
                  onClick={() => setViewport(v.key)}
                  className={`p-2 rounded-lg transition-all ${
                    viewport === v.key
                      ? "bg-primary/20 text-primary"
                      : "text-light-300 hover:text-light-100 hover:bg-white/5"
                  }`}
                  aria-label={v.label}
                >
                  <v.icon size={18} />
                </button>
              ))}

              <div className="w-px h-6 bg-white/10 mx-2" />

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-light-200 hover:text-primary hover:bg-primary/10 transition-all"
              >
                Open <HiExternalLink size={14} />
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-lg text-light-300 hover:text-light-100 hover:bg-white/10 transition-all ml-1"
                aria-label="Close preview"
              >
                <HiX size={20} />
              </button>
            </div>
          </div>

          {/* Preview title */}
          <div className="px-5 py-2 bg-dark-800/50 border-b border-white/5 text-xs text-light-300">
            Previewing: <span className="text-primary font-medium">{title}</span>
          </div>

          {/* iframe Container */}
          <div className="flex-1 flex items-start justify-center overflow-auto bg-dark-700/30 p-4">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                  <p className="text-sm text-light-300">Loading preview...</p>
                </div>
              </div>
            )}
            <iframe
              src={url}
              title={`Preview of ${title}`}
              className="rounded-lg border border-white/10 bg-white shadow-2xl transition-all duration-500"
              style={{
                width: currentWidth,
                height: "100%",
                maxWidth: "100%",
              }}
              onLoad={() => setLoading(false)}
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
