import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BusinessSuitePageData } from "./businessSuiteData";
import {
  BusinessSuiteHeader,
  BusinessSuiteIconBox,
  BusinessSuitePanel,
  BusinessSuiteSection,
} from "./businessSuiteUtils";

export default function BusinessSuiteWhyChoose({ data }: { data: BusinessSuitePageData }) {
  return (
    <BusinessSuiteSection className="bg-white">
      <BusinessSuitePanel className="p-4 sm:p-6 lg:p-7">
        <BusinessSuiteHeader
          eyebrow="Why Choose Full Business Suite"
          title="Why Businesses Choose HNX Full Business Suite"
          center
        />

        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {data.whyChoose.map((item) => (
            <article
              key={item.title}
              className="flex min-h-[112px] items-center gap-3.5 rounded-xl border border-slate-200 bg-white p-3.5 shadow-[0_10px_28px_rgba(15,23,42,0.045)]"
            >
              <BusinessSuiteIconBox icon={item.icon} tone={item.tone} className="h-10 w-10 rounded-full" iconClassName="h-5 w-5" />
              <div>
                <h3 className="text-base font-black leading-tight text-[#06143a]">{item.title}</h3>
                <p className="mt-1.5 text-sm font-medium leading-5 text-[#445579]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex min-h-11 min-w-[360px] max-w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#062867] to-[#073b95] px-7 py-2.5 text-base font-black text-white shadow-[0_14px_30px_rgba(6,40,103,0.2)] transition hover:-translate-y-0.5"
          >
            Let&apos;s Build Your Business System
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-base font-black text-[#0b49cf]"
          >
            Schedule a Free Consultation
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </BusinessSuitePanel>
    </BusinessSuiteSection>
  );
}
