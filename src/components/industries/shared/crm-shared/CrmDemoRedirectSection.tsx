import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

export default function CrmDemoRedirectSection({
  data,
}: {
  data: IndustryCrmPageData;
}) {
  return (
    <section id="crm-demo-preview" className="py-8 sm:py-10">
      <div className="rounded-[2rem] bg-slate-950 px-6 py-8 shadow-[0_28px_90px_rgba(15,23,42,0.18)] sm:px-8 lg:px-10">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-sky-300">
              Custom CRM Demo
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl">
              Try the CRM Demo
            </h2>

            <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-slate-300 sm:text-base">
              Explore the tab-view CRM walkthrough built for your business.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-slate-300">
              <span>Interactive tabs</span>
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span>Workflow view</span>
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span>Business-ready</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link
              href="/crm-demo"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 text-sm font-black text-white shadow-[0_18px_42px_rgba(37,99,235,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_54px_rgba(37,99,235,0.4)]"
            >
              Open Demo
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              href={data.demoRedirect.planHref}
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Plan My CRM
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}