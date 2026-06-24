import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { BusinessSuitePageData } from "./businessSuiteData";
import { BusinessSuiteHeader, BusinessSuitePanel, BusinessSuiteSection, cn } from "./businessSuiteUtils";

export default function BusinessSuitePackages({ data }: { data: BusinessSuitePageData }) {
  return (
    <BusinessSuiteSection className="bg-[#f8fbff]">
      <BusinessSuiteHeader
        eyebrow="Packages / Engagement Model"
        title="Choose the Right Starting Model"
        description="No cheap templates and no fixed one-size package. We scope the suite around your business model, existing systems, priorities, and growth roadmap."
        center
      />

      <div className="mt-6 grid gap-3.5 lg:grid-cols-2 xl:grid-cols-4">
        {data.packages.map((plan) => (
          <BusinessSuitePanel
            key={plan.name}
            className={cn(
              "relative flex min-h-[292px] flex-col p-3.5",
              plan.badge && "border-blue-200 bg-gradient-to-b from-white to-blue-50/65 ring-2 ring-blue-100/80",
            )}
          >
            {plan.badge ? (
              <span className="absolute right-5 top-5 rounded-full bg-[#0b49cf] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white">
                {plan.badge}
              </span>
            ) : null}
            <h3 className="max-w-[210px] text-base font-black leading-tight text-[#06143a] sm:text-lg">{plan.name}</h3>
            <p className="mt-2.5 rounded-xl bg-slate-50 p-2.5 text-sm font-black leading-5 text-[#0b49cf]">
              {plan.bestFor}
            </p>
            <p className="mt-2.5 text-sm font-medium leading-5 text-[#445579]">{plan.description}</p>
            <ul className="mt-3 grid gap-2">
              {plan.includes.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold text-[#06143a]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4">
              <p className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-center text-sm font-black text-[#06143a] sm:text-base">
                Custom Quote
              </p>
            </div>
          </BusinessSuitePanel>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#ff5b12] px-7 py-3 text-sm font-black text-white shadow-[0_16px_32px_rgba(255,91,18,0.22)] transition hover:-translate-y-0.5 sm:text-base"
        >
          Request Package Recommendation
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </BusinessSuiteSection>
  );
}
