"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

interface TableOfContentsProps {
  content: string;
}

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  // Extract headings from markdown content using useMemo
  const headings = useMemo(() => {
    const headingRegex = /^(#{2,3})\s+(.+)$/gm;
    const extractedHeadings: Heading[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2];
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

      extractedHeadings.push({ id, text, level });
    }

    return extractedHeadings;
  }, [content]);

  // Track active heading on scroll
  useEffect(() => {
    const handleScroll = () => {
      const headingElements = document.querySelectorAll("[data-toc-id]");
      let current = "";

      headingElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < 100) {
          current = element.getAttribute("data-toc-id") || "";
        }
      });

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (headings.length === 0) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="w-full"
    >
      <div className="bg-white/5 rounded-lg p-6 border border-white/10">
        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
          Table of Contents
        </h3>

        <ul className="space-y-2">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            const isLevel3 = heading.level === 3;

            return (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  className={`block text-sm transition-colors py-1.5 ${
                    isLevel3 ? "pl-4" : ""
                  } ${
                    isActive
                      ? "text-cyan-300 font-medium border-l-2 border-cyan-400 pl-3"
                      : "text-light-400 hover:text-light-200"
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}
