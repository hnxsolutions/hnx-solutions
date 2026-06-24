import Link from "next/link";
import type { BusinessSuitePageData } from "./businessSuiteData";
import {
  BusinessSuiteHeader,
  BusinessSuitePanel,
  BusinessSuiteSection,
  BusinessSuiteTinyIcon,
  cn,
} from "./businessSuiteUtils";

export default function BusinessSuiteGrowthRoadmap({ data }: { data: BusinessSuitePageData }) {
  return (
    <BusinessSuiteSection className="bg-white" innerClassName="max-w-[min(86vw,960px)]">
      <BusinessSuitePanel className="p-4 sm:p-6 lg:p-7">
        <BusinessSuiteHeader
          eyebrow="Your Growth Journey"
          title="Start Small. Scale Into a Complete Digital Ecosystem"
          center
        />

        <div className="relative mx-auto mt-6 max-w-[620px]">
          <div className="absolute bottom-8 left-[78px] top-8 hidden w-px bg-gradient-to-b from-orange-400 via-emerald-500 to-violet-600 sm:block" />
          <div className="grid gap-4">
            {data.roadmap.map((step, index) => (
              <article key={step.title} className="grid items-center gap-4 sm:grid-cols-[104px_1fr]">
                <div className="relative flex items-center justify-center gap-3">
                <BusinessSuiteTinyIcon icon={step.icon} tone={step.tone} className="h-11 w-11 rounded-full bg-white" />
                  <span
                    className={cn(
                      "grid h-10 w-10 place-items-center rounded-full text-base font-black text-white shadow-[0_10px_24px_rgba(15,23,42,0.12)]",
                      step.tone === "orange" && "bg-gradient-to-b from-[#ff5b12] to-[#ff8a00]",
                      step.tone === "green" && "bg-gradient-to-b from-[#16a34a] to-[#07813a]",
                      step.tone === "blue" && "bg-gradient-to-b from-[#0b61ff] to-[#073b95]",
                      step.tone === "purple" && "bg-gradient-to-b from-[#7c3aed] to-[#4c1d95]",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-black leading-tight text-[#06143a] sm:text-lg">{step.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-slate-900 sm:text-base">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex min-h-11 min-w-[300px] max-w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#062867] to-[#073b95] px-6 py-2.5 text-sm font-black text-white shadow-[0_14px_30px_rgba(6,40,103,0.2)] transition hover:-translate-y-0.5 sm:text-base"
          >
            Start My Growth Journey
          </Link>
        </div>
      </BusinessSuitePanel>
    </BusinessSuiteSection>
  );
}
