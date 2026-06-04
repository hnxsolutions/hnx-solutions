import Link from "next/link";
import { ArrowRight, LayoutDashboard } from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

export default function CrmDemoRedirectSection({
  data,
}: {
  data: IndustryCrmPageData;
}) {
  return (
    <section className="border-t border-slate-200 px-6 py-12 dark:border-white/10 sm:px-8 lg:px-12">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)] dark:border-white/10 sm:p-9">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
              <LayoutDashboard className="h-4 w-4" />
              CRM Demo
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
              {data.demoRedirect.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
              {data.demoRedirect.text}
            </p>
            <p className="mt-3 max-w-3xl text-xs leading-6 text-cyan-100">
              {data.demoRedirect.note}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href={data.demoRedirect.demoHref}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-0.5"
            >
              {data.demoRedirect.primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={data.demoRedirect.planHref}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              {data.demoRedirect.secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

