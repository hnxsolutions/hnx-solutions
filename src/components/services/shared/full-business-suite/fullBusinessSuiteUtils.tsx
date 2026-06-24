import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Sparkles } from "lucide-react";
import type { SuiteTone } from "./fullBusinessSuiteData";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function SuiteSection({
  id,
  children,
  className,
  innerClassName,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative isolate overflow-hidden px-3 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-10 xl:px-10 2xl:px-12",
        className,
      )}
    >
      <div className={cn("mx-auto w-full max-w-[min(92vw,1440px)]", innerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SuitePanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[1.5rem] border border-slate-200 bg-white/94 shadow-[0_16px_44px_rgba(15,23,42,0.055)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SuiteHeader({
  eyebrow,
  title,
  description,
  center = false,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      <p className="text-xs font-black uppercase tracking-[0.28em] text-[#0057ff]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black leading-[1.1] tracking-[-0.03em] text-[#06143a] sm:text-4xl lg:text-[2.55rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base font-medium leading-7 text-[#445579]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function SuiteBadge({
  children,
  icon: Icon = Sparkles,
  className,
}: {
  children: ReactNode;
  icon?: LucideIcon;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#0057ff]",
        className,
      )}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SuiteIconBox({
  icon: Icon,
  tone = "blue",
  className,
  iconClassName,
}: {
  icon: LucideIcon;
  tone?: SuiteTone;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <span
      className={cn(
        "grid h-12 w-12 shrink-0 place-items-center rounded-2xl ring-1",
        iconToneClass(tone),
        className,
      )}
    >
      <Icon className={cn("h-6 w-6", iconClassName)} aria-hidden="true" />
    </span>
  );
}

export function SuiteTinyIcon({
  icon: Icon,
  tone = "blue",
  className,
  iconClassName,
}: {
  icon: LucideIcon;
  tone?: SuiteTone;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <span
      className={cn(
        "grid h-9 w-9 shrink-0 place-items-center rounded-xl ring-1",
        iconToneClass(tone),
        className,
      )}
    >
      <Icon className={cn("h-[18px] w-[18px]", iconClassName)} aria-hidden="true" />
    </span>
  );
}

export function StackPill({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: SuiteTone;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border px-3 py-1.5 text-xs font-black sm:text-sm",
        pillToneClass(tone),
      )}
    >
      {children}
    </span>
  );
}

export function PrimaryButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0b61ff] to-[#073b95] px-6 py-3 text-sm font-black text-white shadow-[0_16px_32px_rgba(11,97,255,0.22)] transition hover:-translate-y-0.5",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export function OutlineButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-6 py-3 text-sm font-black text-[#0b49cf] shadow-[0_14px_34px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:border-blue-300",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function DottedPattern({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute bg-[radial-gradient(circle,rgba(37,99,235,0.16)_1.1px,transparent_1.1px)] bg-[size:18px_18px]",
        className,
      )}
      aria-hidden="true"
    />
  );
}

export function SoftWaves({ className }: { className?: string }) {
  return (
    <svg
      className={cn("pointer-events-none absolute inset-x-0 bottom-0 h-36 w-full text-blue-200/55", className)}
      viewBox="0 0 1440 170"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 132 C250 70 430 185 720 116 C1000 52 1160 54 1440 106" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M0 150 C250 88 430 204 720 134 C1000 70 1160 72 1440 124" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.5" />
      <path d="M0 170 C270 98 448 216 725 150 C1000 88 1180 82 1440 142 L1440 170Z" fill="currentColor" opacity="0.16" />
    </svg>
  );
}

export function HnxMark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#0057ff] to-[#063b9f] text-lg font-black text-white shadow-[0_10px_24px_rgba(0,87,255,0.24)]">
        H
      </span>
      <span className="leading-none">
        <span className="block text-sm font-black text-[#06143a]">HNX</span>
        <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#0057ff]">
          Solutions
        </span>
      </span>
    </span>
  );
}

export function iconToneClass(tone: SuiteTone) {
  switch (tone) {
    case "orange":
      return "bg-orange-50 text-orange-600 ring-orange-100";
    case "green":
      return "bg-emerald-50 text-emerald-600 ring-emerald-100";
    case "purple":
      return "bg-violet-50 text-violet-600 ring-violet-100";
    case "red":
      return "bg-rose-50 text-rose-600 ring-rose-100";
    case "teal":
      return "bg-teal-50 text-teal-600 ring-teal-100";
    case "navy":
      return "bg-[#eef4ff] text-[#08245e] ring-blue-100";
    case "blue":
    default:
      return "bg-blue-50 text-[#0057ff] ring-blue-100";
  }
}

export function pillToneClass(tone: SuiteTone) {
  switch (tone) {
    case "orange":
      return "border-orange-200 bg-orange-50 text-orange-700";
    case "green":
      return "border-emerald-200 bg-emerald-50 text-emerald-700";
    case "purple":
      return "border-violet-200 bg-violet-50 text-violet-700";
    case "red":
      return "border-rose-200 bg-rose-50 text-rose-700";
    case "teal":
      return "border-teal-200 bg-teal-50 text-teal-700";
    case "navy":
      return "border-blue-200 bg-[#eef4ff] text-[#08245e]";
    case "blue":
    default:
      return "border-blue-200 bg-blue-50 text-[#0b49cf]";
  }
}
