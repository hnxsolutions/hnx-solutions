import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Workflow } from "lucide-react";

export type IndustryIntegrationsDeploymentItem = {
  title: string;
  description: string;
};

export type IndustryIntegrationsDeploymentSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  items: IndustryIntegrationsDeploymentItem[];
  ctaLabel?: string;
  ctaHref?: string;
};

export type IndustryIntegrationsDeploymentData =
  IndustryIntegrationsDeploymentSectionProps;

export default function IndustryIntegrationsDeploymentSection({
  eyebrow = "Integrations & Deployment",
  title,
  description,
  items,
  ctaLabel,
  ctaHref,
}: IndustryIntegrationsDeploymentSectionProps) {
  const displayedItems = items.slice(0, 6);

  return (
    <section className="relative py-6" aria-label={eyebrow}>
      <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff,#f8fbff_62%,#f3f6ff)] p-5 shadow-[0_16px_48px_rgba(15,23,42,0.055)] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(30,41,59,0.72))] sm:p-6 lg:p-7">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-white/20"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blue-50/80 to-transparent dark:from-blue-500/10"
          aria-hidden="true"
        />

        <div className="relative grid gap-6 xl:grid-cols-[0.74fr_1.26fr] xl:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/[0.88] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-200">
              <Workflow className="h-3.5 w-3.5 text-blue-600 dark:text-blue-300" aria-hidden="true" />
              {eyebrow}
            </span>

            <h2 className="mt-4 max-w-3xl text-2xl font-black tracking-[-0.03em] text-slate-950 dark:text-white sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">
              {description}
            </p>

            {ctaLabel && ctaHref ? (
              <Link
                href={ctaHref}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 dark:border-white/10 dark:bg-white/[0.07] dark:text-white dark:hover:text-blue-200 sm:w-auto"
              >
                {ctaLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            ) : null}
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {displayedItems.map((item, index) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white/[0.9] p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_14px_34px_rgba(37,99,235,0.08)] dark:border-white/10 dark:bg-white/[0.06]"
              >
                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-700 ring-1 ring-slate-200 transition group-hover:bg-blue-50 group-hover:text-blue-700 dark:bg-white/10 dark:text-slate-200 dark:ring-white/10 dark:group-hover:bg-blue-400/10 dark:group-hover:text-blue-200">
                    {index === displayedItems.length - 1 ? (
                      <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    )}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-black leading-5 text-slate-950 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
