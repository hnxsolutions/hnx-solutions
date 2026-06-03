"use client";

import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Bell, ChevronRight, Smartphone } from "lucide-react";

type Tone =
  | "blue"
  | "violet"
  | "emerald"
  | "orange"
  | "rose"
  | "teal"
  | "slate";

type MiniPhoneRow = {
  label: string;
  value?: string;
  icon: LucideIcon;
};

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function MobileAppNumberBadge({ number }: { number: string }) {
  return (
    <span className="inline-grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-black text-white shadow-[0_14px_30px_rgba(37,99,235,0.24)]">
      {number}
    </span>
  );
}

export function MobileAppIconBadge({
  icon: Icon,
  tone = "blue",
  className,
}: {
  icon: LucideIcon;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "grid h-11 w-11 shrink-0 place-items-center rounded-2xl",
        getToneClasses(tone),
        className,
      )}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}

export function MobileAppSectionHeader({
  number,
  eyebrow,
  title,
  description,
  highlight,
  align = "center",
  className,
}: {
  number?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  highlight?: string;
  align?: "center" | "left";
  className?: string;
}) {
  const showEyebrowRow = Boolean(number || eyebrow);

  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      )}
    >
      {showEyebrowRow ? (
        <div
          className={cn(
            "flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          {number ? <MobileAppNumberBadge number={number} /> : null}

          {eyebrow ? (
            <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300">
              {eyebrow}
            </p>
          ) : null}
        </div>
      ) : null}

      <h2
        className={cn(
          showEyebrowRow ? "mt-4" : "mt-0",
          "text-3xl font-black leading-tight tracking-[-0.035em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl",
        )}
      >
        {renderHighlightedText(title, highlight)}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-7 text-slate-600 dark:text-slate-300",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function MobileAppSectionShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative bg-white px-5 py-8 dark:bg-slate-950 sm:px-8 lg:px-10 xl:px-12",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function MobileAppFeatureCard({
  icon,
  title,
  description,
  tone = "blue",
  className,
  children,
}: {
  icon: LucideIcon;
  title: string;
  description?: string;
  tone?: Tone;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <article
      className={cn(
        "group min-w-0 rounded-[1.4rem] bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.045)] transition hover:-translate-y-1 hover:shadow-[0_22px_54px_rgba(37,99,235,0.08)] dark:bg-white/[0.045]",
        className,
      )}
    >
      <MobileAppIconBadge icon={icon} tone={tone} />
      <h3 className="mt-4 text-base font-black leading-6 text-slate-950 dark:text-white">
        {title}
      </h3>
      {description ? (
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      ) : null}
      {children}
    </article>
  );
}

export function MiniPhoneFrame({
  appName,
  title,
  subtitle,
  actionLabel,
  rows,
  navItems,
  tone = "blue",
  size = "md",
  className,
}: {
  appName: string;
  title: string;
  subtitle: string;
  actionLabel: string;
  rows: MiniPhoneRow[];
  navItems?: string[];
  tone?: Tone;
  size?: "sm" | "md";
  className?: string;
}) {
  const toneClasses = getPhoneToneClasses(tone);
  const displayedRows = rows.slice(0, 4);
  const displayedNavItems = navItems?.slice(0, 4).length
    ? navItems.slice(0, 4)
    : ["Home", "Tasks", "Alerts", "More"];

  return (
    <div
      className={cn(
        "mx-auto w-full",
        size === "sm" ? "max-w-[185px]" : "max-w-[270px]",
        className,
      )}
    >
      <div
        className={cn(
          "border-slate-950 bg-slate-950 shadow-[0_26px_68px_rgba(15,23,42,0.24)] dark:border-slate-800",
          size === "sm"
            ? "rounded-[1.85rem] border-[6px] p-1.5"
            : "rounded-[2.35rem] border-[8px] p-2",
        )}
      >
        <div
          className={cn(
            "overflow-hidden bg-white dark:bg-slate-950",
            size === "sm" ? "rounded-[1.35rem]" : "rounded-[1.75rem]",
          )}
        >
          <div className="flex h-8 items-center justify-between px-4 pt-2 text-[10px] font-black text-slate-950 dark:text-white">
            <span>9:41</span>
            <span className="h-4 w-12 rounded-full bg-slate-950 dark:bg-slate-800" />
            <span className="h-2.5 w-5 rounded-sm border border-slate-950 dark:border-white" />
          </div>

          <div className="flex items-start justify-between gap-3 px-4 py-3">
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                {appName}
              </p>
              <p className="truncate text-sm font-black text-slate-950 dark:text-white">
                {title}
              </p>
              <p className="mt-0.5 truncate text-[9px] font-bold text-slate-500 dark:text-slate-400">
                {subtitle}
              </p>
            </div>
            <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-50 text-slate-600 dark:bg-white/10 dark:text-slate-300">
              <Bell className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-950" />
            </span>
          </div>

          <div className="px-4">
            <div className={cn("rounded-2xl p-3.5", toneClasses.panel)}>
              <p className="text-[10px] font-black uppercase text-slate-500 dark:text-slate-300">
                Summary
              </p>
              <p className="mt-1 text-base font-black leading-tight text-slate-950 dark:text-white">
                {actionLabel}
              </p>
              <p className="mt-1 line-clamp-2 text-[10px] font-semibold leading-4 text-slate-600 dark:text-slate-300">
                {subtitle}
              </p>
            </div>
          </div>

          <div className="px-4 pt-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-black text-slate-950 dark:text-white">
                Quick Actions
              </p>
              <span className="text-[10px] font-black text-blue-600 dark:text-blue-300">
                View all
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {displayedRows.map((row, index) => {
                const RowIcon = row.icon;

                return (
                  <div
                    key={`${row.label}-${index}`}
                    className="min-w-0 text-center"
                  >
                    <span
                      className={cn(
                        "mx-auto grid h-9 w-9 place-items-center rounded-xl",
                        index === 0
                          ? toneClasses.icon
                          : "bg-slate-50 text-slate-500 dark:bg-white/10 dark:text-slate-300",
                      )}
                    >
                      <RowIcon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="mt-1 truncate text-[8px] font-black text-slate-700 dark:text-slate-200">
                      {row.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="px-4 pt-4">
            <p className="mb-2 text-xs font-black text-slate-950 dark:text-white">
              Recent Activity
            </p>
            <div className="space-y-2">
              {displayedRows.slice(0, 3).map((row, index) => (
                <div
                  key={`activity-${row.label}`}
                  className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 dark:bg-white/[0.06]"
                >
                  <span
                    className={cn(
                      "h-2 w-2 shrink-0 rounded-full",
                      index === 0 ? "bg-emerald-500" : "bg-blue-500",
                    )}
                  />
                  <p className="min-w-0 flex-1 truncate text-[9px] font-bold text-slate-600 dark:text-slate-300">
                    {row.value ?? row.label}
                  </p>
                  <ChevronRight
                    className="h-3 w-3 shrink-0 text-slate-400"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-1 bg-white px-3 py-2 dark:bg-slate-950">
            {displayedNavItems.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className={cn(
                  "truncate rounded-lg px-1 py-1.5 text-center text-[8px] font-black",
                  index === 0
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-300",
                )}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function getToneForIndex(index: number): Tone {
  const tones: Tone[] = ["blue", "violet", "emerald", "orange", "teal", "rose"];
  return tones[index % tones.length];
}

export function getDemoTone(accent: string): Tone {
  if (
    accent === "violet" ||
    accent === "emerald" ||
    accent === "orange" ||
    accent === "rose" ||
    accent === "teal"
  ) {
    return accent;
  }

  return "blue";
}

function renderHighlightedText(title: string, highlight?: string) {
  if (!highlight || !title.toLowerCase().includes(highlight.toLowerCase())) {
    return title;
  }

  const index = title.toLowerCase().indexOf(highlight.toLowerCase());
  const before = title.slice(0, index);
  const match = title.slice(index, index + highlight.length);
  const after = title.slice(index + highlight.length);

  return (
    <>
      {before}
      <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
        {match}
      </span>
      {after}
    </>
  );
}

function getToneClasses(tone: Tone) {
  if (tone === "violet")
    return "bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300";
  if (tone === "emerald")
    return "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300";
  if (tone === "orange")
    return "bg-orange-50 text-orange-600 dark:bg-orange-400/10 dark:text-orange-300";
  if (tone === "rose")
    return "bg-rose-50 text-rose-600 dark:bg-rose-400/10 dark:text-rose-300";
  if (tone === "teal")
    return "bg-teal-50 text-teal-600 dark:bg-teal-400/10 dark:text-teal-300";
  if (tone === "slate")
    return "bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300";
  return "bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300";
}

function getPhoneToneClasses(tone: Tone) {
  if (tone === "violet") {
    return {
      icon: "bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300",
      panel: "bg-violet-50 dark:bg-violet-400/10",
    };
  }

  if (tone === "emerald") {
    return {
      icon: "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300",
      panel: "bg-emerald-50 dark:bg-emerald-400/10",
    };
  }

  if (tone === "orange") {
    return {
      icon: "bg-orange-50 text-orange-600 dark:bg-orange-400/10 dark:text-orange-300",
      panel: "bg-orange-50 dark:bg-orange-400/10",
    };
  }

  return {
    icon: "bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300",
    panel: "bg-blue-50 dark:bg-blue-400/10",
  };
}

export const defaultPhoneRows: MiniPhoneRow[] = [
  { label: "App", value: "User app ready", icon: Smartphone },
  { label: "Alerts", value: "Push updates sent", icon: Bell },
];
