"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Plus, Sparkles, X } from "lucide-react";
import type { ReactNode } from "react";

export function workspaceCn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function WorkspaceSectionHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">{title}</h2>
        {description ? <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function WorkspaceButton({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
  className,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  const variants = {
    primary: "border-blue-600 bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border-blue-100 bg-blue-50 text-blue-700 hover:bg-cyan-50",
    ghost: "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200",
    danger: "border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={workspaceCn(
        "inline-flex min-h-10 items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        className,
      )}
    >
      {children}
    </button>
  );
}

export function WorkspaceEmptyState({
  icon,
  title,
  description,
  primaryLabel,
  secondaryLabel,
  onPrimary,
  onSecondary,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel?: string;
  onPrimary: () => void;
  onSecondary?: () => void;
}) {
  return (
    <div className="rounded-[28px] border border-dashed border-blue-200 bg-blue-50/70 p-8 text-center dark:border-blue-800 dark:bg-blue-950/30">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-blue-100 bg-white text-blue-700 shadow-sm dark:border-blue-800 dark:bg-slate-900 dark:text-blue-200">
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-bold text-slate-950 dark:text-white">{title}</h3>
      <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
      <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <WorkspaceButton onClick={onPrimary}>
          <Plus className="h-4 w-4" aria-hidden="true" />
          {primaryLabel}
        </WorkspaceButton>
        {secondaryLabel && onSecondary ? (
          <WorkspaceButton variant="ghost" onClick={onSecondary}>
            {secondaryLabel}
          </WorkspaceButton>
        ) : null}
      </div>
    </div>
  );
}

export function WorkspaceBadge({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: "blue" | "green" | "amber" | "rose" | "slate";
}) {
  const tones = {
    blue: "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-200",
    green: "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200",
    amber: "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200",
    rose: "border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-200",
    slate: "border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300",
  };

  return <span className={workspaceCn("inline-flex rounded-full border px-2.5 py-1 text-xs font-bold", tones[tone])}>{children}</span>;
}

export function WorkspacePanel({
  open,
  title,
  description,
  onClose,
  children,
}: {
  open: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] bg-slate-950/35 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ x: "100%", y: 0 }}
            animate={{ x: 0, y: 0 }}
            exit={{ x: "100%", y: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 240 }}
            className="absolute bottom-0 right-0 flex h-[92vh] w-full flex-col overflow-hidden rounded-t-[28px] border border-slate-200 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.28)] dark:border-slate-700 dark:bg-slate-950 sm:top-0 sm:h-full sm:max-w-xl sm:rounded-none"
          >
            <div className="border-b border-slate-200 px-5 py-4 dark:border-slate-800">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-950 dark:text-white">{title}</h2>
                  {description ? <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-300">{description}</p> : null}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  aria-label="Close panel"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-5">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function WorkspaceSuccessToast({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2">
      <CheckCircle2 className="h-4 w-4 text-blue-700" aria-hidden="true" />
      {children}
    </span>
  );
}

export function WorkspaceInlineHint({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm font-semibold leading-6 text-blue-800 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200">
      <span className="inline-flex gap-2">
        <Sparkles className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <span>{children}</span>
      </span>
    </div>
  );
}

export function WorkspaceArrowLink({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:text-cyan-600">
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}

export function timeAgo(date: Date) {
  const diff = Math.max(0, Date.now() - date.getTime());
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

