import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BusinessSuitePageData } from "./businessSuiteData";
import { BusinessSuitePanel, BusinessSuiteSection, cn } from "./businessSuiteUtils";

const tabs = ["All", "Healthcare", "Real Estate", "Education", "Retail", "Others"];

export default function BusinessSuiteIndustryExamples({ data }: { data: BusinessSuitePageData }) {
  return (
    <BusinessSuiteSection className="bg-[#f8fbff]" innerClassName="max-w-[min(92vw,1180px)]">
      <BusinessSuitePanel className="p-4 sm:p-6 lg:p-7">
        <h2 className="text-center text-3xl font-black leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-[2.45rem]">
          Full Business Suite for Every Industry
        </h2>

        <div className="mx-auto mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <div className="grid min-w-[680px] grid-cols-6">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                type="button"
                className={cn(
                  "border-r border-slate-200 px-4 py-3 text-sm font-bold last:border-r-0",
                  index === 0 ? "bg-[#061b4b] text-white" : "text-[#06143a]",
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-2.5">
          {data.industryExamples.map((example) => (
            <article
              key={example.name}
              className="grid min-w-0 gap-3 rounded-xl border border-slate-200 bg-white p-2 shadow-[0_10px_28px_rgba(15,23,42,0.045)] sm:grid-cols-[200px_1fr]"
            >
              <img
                src={example.image}
                alt={`${example.name} business suite example`}
                className="h-28 w-full rounded-lg object-cover object-bottom sm:h-20"
              />
              <div className="flex min-w-0 flex-col justify-center px-2 py-2">
                <h3 className="text-lg font-black text-slate-950">{example.name}</h3>
                <p className="mt-1 text-sm font-medium leading-5 text-slate-900">{example.description}</p>
                <Link
                  href={example.href}
                  className="mt-1.5 inline-flex items-center gap-2 text-sm font-black text-[#0b49cf]"
                >
                  View Example
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </BusinessSuitePanel>
    </BusinessSuiteSection>
  );
}
