import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Sparkles } from "lucide-react";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function PortalSection({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "border-t border-slate-200 px-5 py-12 dark:border-white/10 sm:px-8 lg:px-10 xl:px-12",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function PortalSectionHeader({
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
      <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] text-slate-950 dark:text-white sm:text-4xl">
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

export function PortalIcon({
  icon: Icon,
  tone = "blue",
  className,
}: {
  icon: LucideIcon;
  tone?: "blue" | "violet" | "cyan" | "emerald" | "slate" | "rose";
  className?: string;
}) {
  const tones = {
    blue: "bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300",
    violet: "bg-violet-50 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300",
    cyan: "bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300",
    emerald: "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300",
    slate: "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-300",
    rose: "bg-rose-50 text-rose-700 dark:bg-rose-400/10 dark:text-rose-300",
  };

  return (
    <span className={cn("grid h-11 w-11 shrink-0 place-items-center rounded-2xl", tones[tone], className)}>
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}

export function PortalCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.045)] dark:border-white/10 dark:bg-white/[0.05]",
        className,
      )}
    >
      {children}
    </article>
  );
}

export function getPortalTone(index: number): "blue" | "violet" | "cyan" | "emerald" | "slate" {
  const tones: Array<"blue" | "violet" | "cyan" | "emerald" | "slate"> = [
    "blue",
    "violet",
    "cyan",
    "emerald",
    "slate",
  ];

  return tones[index % tones.length];
}
