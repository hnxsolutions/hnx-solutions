"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import type { BlogCategory } from "@/data/blogs/types";

interface CurvedCategoryTabsProps {
  activeCategory: BlogCategory | null;
  onCategoryChange: (category: BlogCategory | null) => void;
  isDarkTheme?: boolean;
}

const categories: { id: BlogCategory; label: string }[] = [
  { id: "web-development", label: "Web" },
  { id: "saas-development", label: "SaaS" },
  { id: "mobile-apps", label: "Mobile" },
  { id: "ai-automation", label: "AI" },
  { id: "cloud-solutions", label: "Cloud" },
  { id: "devops", label: "DevOps" },
  { id: "crm-salesforce", label: "CRM" },
  { id: "ui-ux-design", label: "Design" },
  { id: "digital-growth", label: "Growth" },
];

const TAB_WIDTH = 110; // approximate width of each tab in px
const VISIBLE_WIDTH = TAB_WIDTH * 4.5 + 60; // Width to show only 4-5 tabs

export default function CurvedCategoryTabs({
  activeCategory,
  onCategoryChange,
  isDarkTheme = false,
}: CurvedCategoryTabsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  // Update scroll indicators
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    };

    container.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Keep the active category visible when selected via deep-link or tab click.
  useEffect(() => {
    if (!scrollContainerRef.current) return;

    if (!activeCategory) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    const activeTab = scrollContainerRef.current.querySelector<HTMLButtonElement>(
      `button[data-category="${activeCategory}"]`
    );

    if (!activeTab) return;

    activeTab.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeCategory]);

  // Smooth snap scroll to position
  const scrollToPosition = (position: number) => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollTo({
      left: position,
      behavior: "smooth",
    });
  };

  // Arrow button handlers
  const handleLeftClick = () => {
    if (!scrollContainerRef.current) return;
    const currentScroll = scrollContainerRef.current.scrollLeft;
    scrollToPosition(Math.max(0, currentScroll - TAB_WIDTH * 2));
  };

  const handleRightClick = () => {
    if (!scrollContainerRef.current) return;
    const currentScroll = scrollContainerRef.current.scrollLeft;
    const maxScroll =
      scrollContainerRef.current.scrollWidth -
      scrollContainerRef.current.clientWidth;
    scrollToPosition(Math.min(maxScroll, currentScroll + TAB_WIDTH * 2));
  };

  // Handle drag end - snap to nearest tab
  const handleDragEnd = () => {
    if (!scrollContainerRef.current) return;
    setIsDragging(false);

    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = TAB_WIDTH + 16; // tab width + gap
    const nearestTabIndex = Math.round(scrollLeft / itemWidth);
    scrollToPosition(nearestTabIndex * itemWidth);
  };

  // Modern color scheme
  const activeTabBg = "bg-gradient-to-r from-cyan-400 to-cyan-500";
  const activeTabText = "text-white font-semibold";
  const inactiveTabBorder = isDarkTheme
    ? "border-white/15 text-light-400"
    : "border-blog-divider text-blog-text-muted";
  const inactiveTabHover = isDarkTheme
    ? "hover:border-white/30 hover:text-light-200 hover:bg-white/5"
    : "hover:border-blog-text-light hover:text-blog-text hover:bg-blog-cream-100/50";
  const arrowColor = isDarkTheme ? "text-light-300" : "text-blog-text-muted";
  const arrowBg = isDarkTheme
    ? "hover:bg-white/10 hover:text-light-200"
    : "hover:bg-blog-tan-400/10 hover:text-blog-tan-600";

  return (
    <div className="w-full flex justify-center py-1 max-[374px]:py-0.5 md:py-2 px-2 max-[374px]:px-1 overflow-x-hidden">
      <div
        className="flex items-center justify-center gap-2 max-[374px]:gap-1 md:gap-4 w-full md:w-auto min-w-0 max-w-full"
        style={{ maxWidth: `${VISIBLE_WIDTH}px` }}
      >
        {/* Left Arrow Button */}
        <motion.button
          onClick={handleLeftClick}
          disabled={!canScrollLeft}
          whileHover={canScrollLeft ? { scale: 1.12, x: -2 } : {}}
          whileTap={canScrollLeft ? { scale: 0.92 } : {}}
          className={`shrink-0 p-1.5 max-[374px]:p-1 md:p-2.5 rounded-lg transition-all duration-200 ${
            canScrollLeft
              ? `${arrowColor} ${arrowBg} cursor-pointer`
              : "text-gray-400 cursor-not-allowed opacity-30"
          }`}
          title="Scroll left"
        >
          <HiChevronLeft className="text-xl" />
        </motion.button>

        {/* Pinned "All" Tab */}
        <motion.button
          onClick={() => onCategoryChange(null)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className={`shrink-0 px-3 max-[374px]:px-2.5 md:px-6 py-1.5 max-[374px]:py-1 md:py-2.5 rounded-3xl font-medium text-xs md:text-sm whitespace-nowrap transition-all duration-200 ${
            activeCategory === null
              ? `${activeTabBg} ${activeTabText} shadow-lg shadow-cyan-500/25`
              : `border-2 ${inactiveTabBorder} ${inactiveTabHover}`
          }`}
        >
          All
        </motion.button>

        {/* Scroll Container with Gradient Hints */}
        <div className="relative flex-1 min-w-0 overflow-hidden rounded-2xl">
          {/* Left Gradient Hint */}
          {canScrollLeft && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-black to-transparent pointer-events-none z-20"
            />
          )}

          {/* Scrollable Container */}
          <motion.div
            ref={scrollContainerRef}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            drag="x"
            dragElastic={0.15}
            dragMomentum={false}
            className="flex gap-2 max-[374px]:gap-1 md:gap-4 overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing px-1 max-[374px]:px-0.5"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Category Tabs */}
            {categories.map((category) => (
              <motion.button
                key={category.id}
                data-category={category.id}
                onClick={() => onCategoryChange(category.id)}
                whileHover={!isDragging ? { scale: 1.06, y: -1 } : {}}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`shrink-0 px-3 max-[374px]:px-2.5 md:px-6 py-1.5 max-[374px]:py-1 md:py-2.5 rounded-3xl font-medium text-xs md:text-sm whitespace-nowrap transition-all duration-200 ${
                  activeCategory === category.id
                    ? `${activeTabBg} ${activeTabText} shadow-lg shadow-cyan-500/25`
                    : `border-2 ${inactiveTabBorder} ${inactiveTabHover}`
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Right Gradient Hint */}
          {canScrollRight && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-black to-transparent pointer-events-none z-20"
            />
          )}
        </div>

        {/* Right Arrow Button */}
        <motion.button
          onClick={handleRightClick}
          disabled={!canScrollRight}
          whileHover={canScrollRight ? { scale: 1.12, x: 2 } : {}}
          whileTap={canScrollRight ? { scale: 0.92 } : {}}
          className={`shrink-0 p-1.5 max-[374px]:p-1 md:p-2.5 rounded-lg transition-all duration-200 ${
            canScrollRight
              ? `${arrowColor} ${arrowBg} cursor-pointer`
              : "text-gray-400 cursor-not-allowed opacity-30"
          }`}
          title="Scroll right"
        >
          <HiChevronRight className="text-xl" />
        </motion.button>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
