import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { BusinessSuitePageData } from "./businessSuiteData";
import {
  BusinessSuiteHeader,
  BusinessSuiteIconBox,
  BusinessSuitePanel,
  BusinessSuiteSection,
  BusinessSuiteTinyIcon,
  StackPill,
  cn,
} from "./businessSuiteUtils";

export default function BusinessSuiteStackBuilder({ data }: { data: BusinessSuitePageData }) {
  return (
    <BusinessSuiteSection className="bg-white">
      <BusinessSuitePanel className="p-4 sm:p-6 lg:p-7">
        <BusinessSuiteHeader
          eyebrow="Smart Recommendation"
          title="We Recommend Only What Your Business Needs"
          center
        />

        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <div className="grid min-w-[720px] grid-cols-5">
            {data.stackBuilder.tabs.map((tab, index) => {
              const Icon = tab.icon;
              const active = index === 0;

              return (
                <button
                  key={tab.title}
                  type="button"
                  className={cn(
                    "flex items-center justify-center gap-2.5 border-r border-slate-200 px-4 py-3 text-sm font-black last:border-r-0",
                    active
                      ? "bg-gradient-to-r from-[#062867] to-[#073b95] text-white"
                      : "bg-white text-[#06143a]",
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  {tab.title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-5 grid gap-3">
          {data.stackBuilder.rows.map((row) => (
            <article
              key={row.problem}
              className="grid min-w-0 items-center gap-3.5 rounded-xl border border-slate-200 bg-white px-3.5 py-3.5 shadow-[0_10px_28px_rgba(15,23,42,0.04)] lg:grid-cols-[56px_1fr_1.28fr_32px]"
            >
              <BusinessSuiteIconBox icon={row.icon} tone={row.tone} className="h-10 w-10 rounded-xl" />
              <div className="min-w-0">
                <h3 className="text-base font-black text-[#06143a] sm:text-lg">{row.problem}</h3>
                <p className="mt-1 text-sm font-semibold text-[#5c6b86]">Recommended Stack</p>
              </div>
              <div className="flex min-w-0 flex-wrap gap-2.5">
                {row.stack.map((item, index) => (
                  <StackPill key={item} tone={index === 0 ? "orange" : index === 1 ? "blue" : "green"}>
                    {item}
                  </StackPill>
                ))}
              </div>
              <BusinessSuiteTinyIcon icon={ChevronRight} tone="navy" className="ml-auto hidden h-9 w-9 rounded-full lg:grid" />
            </article>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#062867] to-[#073b95] px-7 py-3 text-sm font-black text-white shadow-[0_16px_34px_rgba(6,40,103,0.22)] transition hover:-translate-y-0.5 sm:text-base"
          >
            Let&apos;s Plan My Stack
          </Link>
          <Link
            href="#business-suite-modules"
            className="inline-flex items-center justify-center gap-3 px-4 py-3 text-base font-black text-[#073b95]"
          >
            See All Options
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </BusinessSuitePanel>
    </BusinessSuiteSection>
  );
}
