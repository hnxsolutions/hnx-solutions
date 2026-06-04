import Link from "next/link";
import { ArrowRight, LayoutDashboard } from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

export default function CrmFinalCTASection({ data }: { data: IndustryCrmPageData }) {
  return (
    <section className="border-t border-slate-200 px-6 py-12 dark:border-white/10 sm:px-8 lg:px-12">
      <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-slate-950 to-cyan-700 p-7 text-white shadow-[0_24px_70px_rgba(15,23,42,0.22)] sm:p-9 lg:p-10">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
              Custom CRM Development
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl">
              {data.finalCta.title}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200">
              {data.finalCta.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href={data.finalCta.primaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-0.5"
            >
              {data.finalCta.primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={data.finalCta.secondaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              {data.finalCta.secondaryLabel}
              <LayoutDashboard className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

