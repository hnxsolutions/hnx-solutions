"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SolutionCategoryId, SolutionPageData } from "@/data/solutions/types";
import { getSolutionIcon } from "@/components/solutions/shared/solutionIcons";
import { solutionCategoryMeta } from "@/components/solutions/shared/solutionCategoryMeta";

type SolutionCategoryTabsProps = {
  category: SolutionCategoryId;
  solutions: readonly SolutionPageData[];
};

export function SolutionCategoryTabs({ category, solutions }: SolutionCategoryTabsProps) {
  const pathname = usePathname();
  const meta = solutionCategoryMeta[category];
  const HeaderIcon = getSolutionIcon(meta.icon);

  return (
    <div className="sticky top-[84px] z-40 border-b border-[#d7e1f2] bg-white/92 shadow-[0_10px_28px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-[#061225]/92">
      <nav
        aria-label={`${meta.title} solution pages`}
        className="mx-auto flex max-w-[min(92vw,1440px)] items-center gap-5 overflow-x-auto px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12"
      >
        <div className="hidden min-w-[245px] shrink-0 border-r border-[#d7e1f2] py-4 pr-6 lg:block dark:border-white/10">
          <div className="flex items-center gap-3">
            <span className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${meta.accent} text-white shadow-[0_10px_24px_rgba(20,92,183,0.18)]`}>
              <HeaderIcon className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-extrabold text-[#0f214f] dark:text-white">{meta.title}</p>
              <p className="mt-1 text-xs font-semibold text-[#66728f] dark:text-slate-300">{meta.journey}</p>
            </div>
          </div>
        </div>

        {solutions.map((item) => {
          const Icon = getSolutionIcon(item.icon);
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex shrink-0 items-center gap-2 border-b-2 px-3 py-5 text-xs font-extrabold transition-colors ${
                isActive
                  ? "border-[#2378ff] bg-[#eef6ff] text-[#145cb7] dark:border-cyan-300 dark:bg-cyan-300/10 dark:text-cyan-300"
                  : "border-transparent text-[#465374] hover:bg-[#f4f8ff] hover:text-[#145cb7] dark:text-slate-300 dark:hover:bg-white/6 dark:hover:text-cyan-300"
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
