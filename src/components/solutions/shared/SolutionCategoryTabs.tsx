"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";
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
  const HeaderIcon = getSolutionIcon(meta.icon);
  const activeTabRef = useRef<HTMLAnchorElement | null>(null);

  const activeIndex = useMemo(() => {
    const index = solutions.findIndex(
      (item) => pathname === item.href || pathname.startsWith(`${item.href}/`)
    );

    return index >= 0 ? index : 0;
  }, [pathname, solutions]);

  useEffect(() => {
    activeTabRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex]);

  return (
    <div className="sticky top-[4.65rem] z-40 border-b border-[#d7e1f2] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-[#061225]">
      <div className="mx-auto flex max-w-[min(92vw,1440px)] items-stretch">
        <div className="hidden min-w-[245px] shrink-0 border-r border-[#d7e1f2] px-4 py-3 lg:flex lg:items-center dark:border-white/10">
          <div className="flex min-w-0 items-center gap-3">
            <span
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${meta.accent} text-white shadow-[0_10px_24px_rgba(20,92,183,0.16)]`}
            >
              <HeaderIcon className="h-4 w-4" aria-hidden="true" />
            </span>

            <div className="min-w-0">
              <p className="truncate text-sm font-black tracking-[-0.01em] text-[#0f214f] dark:text-white">
                {meta.title}
              </p>
              <p className="mt-1 truncate text-xs font-semibold text-[#66728f] dark:text-slate-300">
                {meta.journey}
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-w-0 flex-1">
          <nav
            aria-label={`${meta.title} solution pages`}
            className="flex h-full items-stretch overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                  className={`group relative flex shrink-0 items-center gap-2.5 border-b-2 px-5 py-4 text-sm font-extrabold transition-colors duration-200 ${
                    isActive
                      ? "border-[#2378ff] bg-[#eef6ff] text-[#145cb7] dark:border-cyan-300 dark:bg-cyan-300/10 dark:text-cyan-300"
                      : "border-transparent text-[#465374] hover:bg-[#f8fbff] hover:text-[#145cb7] dark:text-slate-300 dark:hover:bg-white/6 dark:hover:text-cyan-300"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 shrink-0 transition-colors duration-200 ${
                      isActive
                        ? "text-[#145cb7] dark:text-cyan-300"
                        : "text-[#52627d] group-hover:text-[#145cb7] dark:text-slate-400 dark:group-hover:text-cyan-300"
                    }`}
                    aria-hidden="true"
                  />

                  <span className="whitespace-nowrap">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-white via-white/90 to-transparent dark:from-[#061225] dark:via-[#061225]/90" />
        </div>
      </div>
    </div>
  );
}
