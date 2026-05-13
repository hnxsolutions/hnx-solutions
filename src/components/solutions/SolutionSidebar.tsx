"use client";

import type { LucideIcon } from "lucide-react";

export type SolutionSidebarItem<T extends string = string> = {
  id: T;
  label: string;
  icon: LucideIcon;
};

type SolutionSidebarProps<T extends string = string> = {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  items: readonly SolutionSidebarItem<T>[];
  activeTab: T;
  onTabChange: (id: T) => void;
  ctaTitle?: string;
  ctaText?: string;
  ctaButtonText?: string;
  ctaHref?: string;
  ctaItems?: string[];
};

export function SolutionSidebar<T extends string = string>({
  title,
  subtitle,
  icon: HeaderIcon,
  items,
  activeTab,
  onTabChange,
}: SolutionSidebarProps<T>) {
  return (
    <aside className="sticky top-[145px] hidden h-[calc(100vh-145px)] w-[245px] shrink-0 overflow-hidden border-r border-[#c9d8ea] bg-[#eef7ff] lg:block dark:border-white/10 dark:bg-[#061225]">
      {/* Strong visible gradient mesh */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(14,165,233,0.34),transparent_34%),radial-gradient(circle_at_90%_18%,rgba(124,58,237,0.22),transparent_32%),radial-gradient(circle_at_22%_92%,rgba(20,184,166,0.26),transparent_36%)] dark:bg-[radial-gradient(circle_at_12%_8%,rgba(34,211,238,0.28),transparent_34%),radial-gradient(circle_at_90%_22%,rgba(124,58,237,0.30),transparent_34%),radial-gradient(circle_at_20%_92%,rgba(20,92,183,0.34),transparent_38%)]" />

      {/* Soft pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:radial-gradient(circle,rgba(20,92,183,0.35)_1px,transparent_1px)] [background-size:18px_18px] dark:opacity-[0.16] dark:[background-image:radial-gradient(circle,rgba(34,211,238,0.38)_1px,transparent_1px)]" />

      {/* Light wash, reduced so gradient remains visible */}
      <div className="pointer-events-none absolute inset-0 bg-white/45 dark:bg-[#061225]/58" />

      <div className="relative z-10 flex h-full min-h-0 flex-col px-4 py-4">
        <div className="shrink-0 border-b border-[#b9cce4] pb-4 dark:border-white/10">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/70 bg-white/75 text-[#1593b5] shadow-[0_8px_22px_rgba(15,23,42,0.06)] backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-cyan-300">
              <HeaderIcon className="h-4 w-4" aria-hidden="true" />
            </span>

            <div className="min-w-0">
              <p className="truncate text-base font-extrabold leading-tight tracking-[-0.02em] text-[#0f214f] dark:text-white">
                {title}
              </p>

              {subtitle ? (
                <p className="mt-0.5 truncate text-xs font-semibold leading-4 text-[#52627d] dark:text-slate-300">
                  {subtitle}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <nav
          aria-label={`${title} sections`}
          className="relative mt-4 min-h-0 flex-1 overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {/* Subtle progress line */}
          <div className="pointer-events-none absolute bottom-2 left-[19px] top-2 w-px bg-[#b9cce4]/80 dark:bg-white/10" />

          <div className="relative z-10 space-y-1">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onTabChange(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-extrabold leading-5 transition-all duration-300 ${
                    isActive
                      ? "bg-white/65 text-[#145cb7] shadow-[0_8px_22px_rgba(20,92,183,0.08)] ring-1 ring-white/60 dark:bg-white/8 dark:text-cyan-300 dark:ring-white/10"
                      : "text-[#0f214f] hover:bg-white/45 hover:text-[#145cb7] dark:text-slate-200 dark:hover:bg-white/6 dark:hover:text-cyan-300"
                  }`}
                >
                  <span
                    className={`relative z-10 grid h-4 w-4 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                      isActive
                        ? "text-[#145cb7] dark:text-cyan-300"
                        : "text-[#465374] group-hover:text-[#145cb7] dark:text-slate-400 dark:group-hover:text-cyan-300"
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>

                  <span className="min-w-0 flex-1">{item.label}</span>

                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#2378ff] transition-all duration-300 dark:bg-cyan-300 ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}