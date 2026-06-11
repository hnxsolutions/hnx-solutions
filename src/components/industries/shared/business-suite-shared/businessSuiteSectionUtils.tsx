import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Sparkles } from "lucide-react";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function BusinessSuiteSection({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "border-t border-slate-200 px-6 py-10 dark:border-white/10 sm:px-10 lg:px-12",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function BusinessSuiteHeader({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300",
          center && "justify-center",
        )}
      >
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-slate-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function BusinessSuiteIcon({
  icon: Icon,
  tone = "blue",
  className,
}: {
  icon: LucideIcon;
  tone?: "blue" | "violet" | "emerald" | "cyan" | "slate";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "grid h-11 w-11 shrink-0 place-items-center rounded-xl",
        tone === "violet" && "bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300",
        tone === "emerald" && "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300",
        tone === "cyan" && "bg-cyan-50 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300",
        tone === "slate" && "bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300",
        tone === "blue" && "bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300",
        className,
      )}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}
