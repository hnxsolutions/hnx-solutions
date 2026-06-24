import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BusinessSuitePageData } from "./businessSuiteData";
import {
  BusinessSuiteHeader,
  BusinessSuiteIconBox,
  BusinessSuiteSection,
  cn,
} from "./businessSuiteUtils";

export default function BusinessSuiteModules({ data }: { data: BusinessSuitePageData }) {
  return (
    <BusinessSuiteSection id="business-suite-modules" className="bg-[#f8fbff]">
      <BusinessSuiteHeader
        eyebrow="Our Full Business Suite Modules"
        title="Everything Your Business May Need, Connected Together"
        center
      />

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {data.modules.map((module) => (
          <article
            key={module.title}
            className={cn(
              "flex min-h-[96px] flex-col items-center justify-center rounded-xl border bg-white p-3 text-center shadow-[0_10px_28px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_42px_rgba(15,23,42,0.07)]",
              module.featured ? "border-blue-200 ring-2 ring-blue-100/70" : "border-slate-200",
            )}
          >
            <BusinessSuiteIconBox icon={module.icon} tone={module.tone} className="h-10 w-10 bg-transparent ring-0" iconClassName="h-5 w-5" />
            <h3 className="mt-2 text-sm font-black text-[#06143a] sm:text-base">{module.title}</h3>
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          href="/contact"
          className="inline-flex min-h-12 min-w-[320px] max-w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#062867] to-[#073b95] px-7 py-3 text-base font-black text-white shadow-[0_16px_34px_rgba(6,40,103,0.22)] transition hover:-translate-y-0.5"
        >
          Explore All Modules
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </BusinessSuiteSection>
  );
}
