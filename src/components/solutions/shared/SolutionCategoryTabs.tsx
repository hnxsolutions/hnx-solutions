"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { SolutionCategoryId, SolutionPageData } from "@/data/solutions/types";
import { getSolutionIcon } from "@/components/solutions/shared/solutionIcons";
import { solutionCategoryMeta } from "@/components/solutions/shared/solutionCategoryMeta";

type SolutionCategoryTabsProps = {
  category: SolutionCategoryId;
  solutions: readonly SolutionPageData[];
};

export function SolutionCategoryTabs({
  category,
  solutions,
}: SolutionCategoryTabsProps) {
  const pathname = usePathname();
  const meta = solutionCategoryMeta[category];
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const activeTabRef = useRef<HTMLAnchorElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const activeIndex = useMemo(() => {
    const index = solutions.findIndex(
      (item) => pathname === item.href || pathname.startsWith(`${item.href}/`)
    );

    return index >= 0 ? index : 0;
  }, [pathname, solutions]);

  const updateScrollState = useCallback(() => {
    const node = scrollRef.current;

    if (!node) {
      return;
    }

    const maxScrollLeft = Math.max(0, node.scrollWidth - node.clientWidth);
    setCanScrollLeft(node.scrollLeft > 6);
    setCanScrollRight(node.scrollLeft < maxScrollLeft - 6);
  }, []);

  useEffect(() => {
    const node = scrollRef.current;

    if (!node) {
      return;
    }

    updateScrollState();

    node.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      node.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [solutions.length, updateScrollState]);

  useEffect(() => {
    activeTabRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    window.requestAnimationFrame(updateScrollState);
  }, [activeIndex, updateScrollState]);

  const scrollTabs = (direction: "left" | "right") => {
    const node = scrollRef.current;

    if (!node) {
      return;
    }

    node.scrollBy({
      left:
        direction === "right"
          ? Math.round(node.clientWidth * 0.75)
          : -Math.round(node.clientWidth * 0.75),
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-17.5 z-40 border-b border-[#d7e1f2] bg-white/92 shadow-[0_10px_28px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-[#111111]/92">
      <div className="mx-auto flex w-full max-w-full items-stretch px-2 sm:max-w-[min(92vw,1440px)] sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="hidden min-w-52.5 shrink-0 border-r border-[#d7e1f2] py-4 pr-6 lg:block dark:border-white/10">
          <p className="truncate text-sm font-extrabold text-[#0f214f] dark:text-white">
            {meta.title}
          </p>
          <p className="mt-1 truncate text-xs font-semibold text-[#66728f] dark:text-slate-300">
            {meta.subtitle}
          </p>
        </div>

        <div className="relative min-w-0 flex-1">
          <div
            ref={scrollRef}
            className="flex h-full snap-x snap-mandatory items-center gap-2 overflow-x-auto scroll-smooth px-2 pb-1 [scrollbar-width:none] sm:gap-5 sm:px-4 [&::-webkit-scrollbar]:hidden"
            aria-label={`${meta.title} solution pages`}
            role="navigation"
          >
            {solutions.map((item, index) => {
              const Icon = getSolutionIcon(item.icon);
              const isActive = index === activeIndex;

              return (
                <Link
                  key={item.href}
                  ref={isActive ? activeTabRef : undefined}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex shrink-0 snap-center items-center gap-2 whitespace-nowrap border-b-2 px-3 py-4 text-xs font-extrabold transition-colors sm:py-5 ${
                    isActive
                      ? "border-[#2378ff] bg-[#eef6ff] text-[#145cb7] dark:border-blue-300 dark:bg-blue-300/10 dark:text-blue-300"
                      : "border-transparent text-[#465374] hover:bg-[#f4f8ff] hover:text-[#145cb7] dark:text-zinc-300 dark:hover:bg-white/6 dark:hover:text-blue-300"
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div
            className={`pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-white via-white/90 to-transparent transition-opacity duration-200 dark:from-[#061225] dark:via-[#061225]/90 ${
              canScrollLeft ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            className={`pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-white via-white/95 to-transparent transition-opacity duration-200 dark:from-[#061225] dark:via-[#061225]/90 ${
              canScrollRight ? "opacity-100" : "opacity-0"
            }`}
          />

          <button
            type="button"
            onClick={() => scrollTabs("left")}
            aria-label="Show previous solution modules"
            className={`absolute left-1 top-1/2 hidden h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-[#d7e1f2] bg-white/95 text-[#145cb7] shadow-[0_8px_20px_rgba(15,23,42,0.12)] transition hover:bg-[#eef6ff] lg:grid dark:border-white/10 dark:bg-[#061225]/95 dark:text-cyan-300 dark:hover:bg-white/8 ${
              canScrollLeft ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => scrollTabs("right")}
            aria-label="Show more solution modules"
            className={`absolute right-1 top-1/2 hidden h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-[#d7e1f2] bg-white/95 text-[#145cb7] shadow-[0_8px_20px_rgba(15,23,42,0.12)] transition hover:bg-[#eef6ff] lg:grid dark:border-white/10 dark:bg-[#061225]/95 dark:text-cyan-300 dark:hover:bg-white/8 ${
              canScrollRight ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>

          {/* <div
            className={`pointer-events-none absolute right-11 top-1/2 hidden -translate-y-1/2 rounded-full border border-[#d7e1f2] bg-white/95 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#145cb7] shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition-opacity lg:block dark:border-white/10 dark:bg-[#061225]/95 dark:text-cyan-300 ${
              canScrollRight ? "opacity-100" : "opacity-0"
            }`}
          >
            More
          </div> */}
        </div>
      </div>
    </div>
  );
}
