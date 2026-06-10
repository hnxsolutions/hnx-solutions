import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2, Sparkles } from "lucide-react";

export type IndustryAiAutomationSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  items: string[];
  ctaLabel: string;
  ctaHref: string;
};

export type IndustryAiAutomationData = IndustryAiAutomationSectionProps;

export default function IndustryAiAutomationSection({
  eyebrow = "AI Automation Add-ons",
  title,
  description,
  items,
  ctaLabel,
  ctaHref,
}: IndustryAiAutomationSectionProps) {
  const displayedItems = items.slice(0, 4);

  return (
    <section className="relative py-6" aria-label={eyebrow}>
      <div className="relative overflow-hidden rounded-[1.75rem] border border-blue-100 bg-[linear-gradient(135deg,#ffffff,#f7f9ff_58%,#eef6ff)] p-5 shadow-[0_18px_58px_rgba(37,99,235,0.08)] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(30,41,59,0.72))] sm:p-6 lg:p-7">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-violet-100/55 to-transparent dark:from-violet-500/10"
          aria-hidden="true"
        />

        <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white/[0.85] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-violet-700 shadow-sm dark:border-white/10 dark:bg-white/[0.08] dark:text-violet-200">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {eyebrow}
            </span>

            <h2 className="mt-4 max-w-3xl text-2xl font-black tracking-[-0.03em] text-slate-950 dark:text-white sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">
              {description}
            </p>

            <div className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
              {displayedItems.map((item) => (
                <div
                  key={item}
                  className="flex min-w-0 items-center gap-2 rounded-2xl border border-slate-200 bg-white/[0.88] px-3 py-2.5 text-sm font-black text-slate-800 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-100"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-300" aria-hidden="true" />
                  <span className="min-w-0 truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href={ctaHref}
            className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-4 text-sm font-black text-white shadow-[0_18px_42px_rgba(37,99,235,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_52px_rgba(37,99,235,0.28)] lg:w-auto"
          >
            <Bot className="h-5 w-5" aria-hidden="true" />
            {ctaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
