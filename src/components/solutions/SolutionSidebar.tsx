"use client";

import Link from "next/link";
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
  ctaTitle = "Book a CRM Consultation",
  ctaText = "See how HNX can shape a CRM around your real business process.",
  ctaButtonText = "Book a Consultation",
  ctaHref = "/#contact",
  ctaItems,
}: SolutionSidebarProps<T>) {
  return (
    <aside className="sticky top-20 hidden h-[calc(100vh-5rem)] w-[285px] shrink-0 border-r border-[#d7e1f2] bg-white/85 backdrop-blur-xl lg:block">
      <div className="flex h-full min-h-0 flex-col px-5 py-5">
        <div className="shrink-0">
          <div className="flex items-center gap-3 px-1">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[#d7e1f2] bg-white text-[#1593b5] shadow-[0_10px_28px_rgba(15,23,42,0.05)]">
              <HeaderIcon className="h-5 w-5" aria-hidden="true" />
            </div>

            <div className="min-w-0">
              <p className="text-lg font-extrabold leading-tight tracking-[-0.02em] text-[#0f214f]">
                {title}
              </p>
              {subtitle ? (
                <p className="mt-1 text-xs font-semibold leading-4 text-[#66728f]">
                  {subtitle}
                </p>
              ) : null}
            </div>
          </div>

          <div className="my-5 h-px bg-[#d7e1f2]" />
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <nav
            aria-label={`${title} sections`}
            className="rounded-[22px] border border-[#d7e1f2] bg-white p-2 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
          >
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onTabChange(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-bold leading-5 transition ${
                    isActive
                      ? "bg-[#eafcff] text-[#1593b5] shadow-[inset_3px_0_0_#19b7c5]"
                      : "text-[#0f214f] hover:bg-[#f5fbff] hover:text-[#145cb7]"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="min-w-0 flex-1">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-5 rounded-[22px] border border-[#d7e1f2] bg-gradient-to-br from-white to-[#f5fbff] p-4 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-extrabold leading-5 text-[#0f214f]">{ctaTitle}</p>
            <p className="mt-2 text-xs leading-5 text-[#66728f]">{ctaText}</p>

            {ctaItems?.length ? (
              <div className="mt-3 space-y-2 text-xs font-semibold leading-5 text-[#334766]">
                {ctaItems.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1593b5]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            ) : null}

            <Link
              href={ctaHref}
              className="mt-4 inline-flex min-h-10 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#145cb7] to-[#19b7c5] px-4 py-2.5 text-center text-xs font-extrabold leading-5 text-white shadow-[0_12px_30px_rgba(20,92,183,0.2)] transition hover:translate-y-[-1px] hover:shadow-[0_16px_36px_rgba(20,92,183,0.25)]"
            >
              {ctaButtonText}
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
