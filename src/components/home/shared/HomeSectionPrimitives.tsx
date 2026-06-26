import type { ReactNode } from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  framed?: boolean;
};

export function HomeSectionShell({
  children,
  className = "",
  innerClassName = "",
  framed = false,
}: SectionShellProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[#f8fbff] py-14 text-slate-950 sm:py-16 lg:py-20 dark:bg-slate-950 dark:text-white ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(99,102,241,0.08),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(14,165,233,0.08),transparent_30%)]" />
      <div
        className={`relative mx-auto w-full max-w-[min(92vw,1440px)] ${
          framed
            ? "rounded-[2rem] border border-slate-200/80 bg-white/70 px-4 py-10 shadow-[0_28px_90px_rgba(15,23,42,0.06)] backdrop-blur sm:px-8 lg:px-10 dark:border-white/10 dark:bg-white/[0.04]"
            : "px-4 sm:px-6 lg:px-8"
        } ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-indigo-200/90 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 shadow-[0_12px_32px_rgba(59,130,246,0.08)] dark:border-white/10 dark:bg-white/8 dark:text-blue-200">
      <span className="h-2 w-2 rounded-full bg-linear-to-br from-blue-500 to-violet-500 shadow-[0_0_18px_rgba(99,102,241,0.65)]" />
      {children}
    </span>
  );
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[2.85rem] dark:text-white ${className}`}
    >
      {children}
    </h2>
  );
}

export function GradientWord({ children }: { children: ReactNode }) {
  return (
    <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

export function SectionCopy({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mt-4 max-w-2xl text-base font-medium leading-7 text-slate-600 sm:text-lg dark:text-slate-300 ${className}`}
    >
      {children}
    </p>
  );
}

export function PrimaryArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl bg-linear-to-r from-blue-700 to-violet-600 px-6 py-3 text-sm font-black text-white shadow-[0_16px_34px_rgba(59,130,246,0.23)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(79,70,229,0.26)] ${className}`}
    >
      {children}
      <HiArrowRight className="text-lg" />
    </Link>
  );
}

export function TextArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2.5 text-sm font-black text-blue-700 transition hover:text-violet-700 ${className}`}
    >
      {children}
      <HiArrowRight className="text-lg" />
    </Link>
  );
}

export function SoftCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[1.15rem] border border-slate-200/80 bg-white/86 shadow-[0_16px_42px_rgba(15,23,42,0.055)] backdrop-blur dark:border-white/10 dark:bg-white/[0.05] ${className}`}
    >
      {children}
    </div>
  );
}

export function IconBubble({
  children,
  tone = "blue",
  className = "",
}: {
  children: ReactNode;
  tone?: "blue" | "violet" | "emerald" | "rose" | "amber" | "cyan";
  className?: string;
}) {
  const tones = {
    blue: "from-blue-50 to-indigo-100 text-blue-700",
    violet: "from-violet-50 to-indigo-100 text-violet-700",
    emerald: "from-emerald-50 to-teal-100 text-emerald-700",
    rose: "from-rose-50 to-red-100 text-red-600",
    amber: "from-amber-50 to-orange-100 text-orange-600",
    cyan: "from-cyan-50 to-blue-100 text-cyan-700",
  };

  return (
    <span
      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br ${tones[tone]} shadow-[0_14px_30px_rgba(79,70,229,0.1)] ${className}`}
    >
      {children}
    </span>
  );
}
