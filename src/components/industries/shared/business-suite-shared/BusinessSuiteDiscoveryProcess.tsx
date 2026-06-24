import { ArrowRight } from "lucide-react";
import type { BusinessSuitePageData } from "./businessSuiteData";
import {
  BusinessSuiteIconBox,
  BusinessSuitePanel,
  BusinessSuiteSection,
  BusinessSuiteTinyIcon,
  DottedBackground,
} from "./businessSuiteUtils";

export default function BusinessSuiteDiscoveryProcess({ data }: { data: BusinessSuitePageData }) {
  return (
    <BusinessSuiteSection className="bg-[#f8fbff]">
      <DottedBackground className="bottom-10 left-4 h-44 w-44 opacity-45" />
      <BusinessSuitePanel className="overflow-hidden">
        <div className="grid lg:grid-cols-[0.86fr_1.14fr]">
          <div className="p-5 sm:p-7 lg:p-8">
            <p className="text-sm font-black text-[#ff5b12] sm:text-base">{data.discovery.kicker}</p>
            <h2 className="mt-3 max-w-xl text-3xl font-black leading-[1.1] tracking-[-0.03em] text-[#06143a] sm:text-4xl lg:text-[2.55rem]">
              {data.discovery.title}
            </h2>
            <div className="mt-5 grid gap-3">
              {data.discovery.cards.map((card) => (
                <article
                  key={card.title}
                  className="flex items-center gap-3.5 rounded-xl border border-slate-200 bg-white p-3 shadow-[0_12px_30px_rgba(15,23,42,0.045)]"
                >
                  <BusinessSuiteTinyIcon icon={card.icon} tone={card.tone} className="h-10 w-10" />
                  <div className="min-w-0">
                    <h3 className="text-base font-black text-[#06143a]">{card.title}</h3>
                    <p className="mt-1 text-sm font-medium leading-6 text-[#445579]">{card.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden bg-slate-100 lg:min-h-full">
            <img
              src={data.discovery.image}
              alt="Business research and planning"
              className="h-full min-h-[320px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/35 to-transparent lg:from-white/80" />
            <div className="absolute bottom-5 left-5 right-5 max-w-md rounded-2xl border border-white/80 bg-white/86 p-3.5 shadow-[0_16px_38px_rgba(15,23,42,0.09)] backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0057ff]">
                Research Output
              </p>
              <p className="mt-2 text-base font-black leading-snug text-[#06143a]">
                A clear roadmap before development starts.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 bg-white/84 px-5 py-4 sm:px-8">
          <div className="grid gap-3 md:grid-cols-5">
            {data.discovery.process.map((item, index) => (
              <div key={item.title} className="relative flex flex-col items-center text-center">
                <BusinessSuiteIconBox icon={item.icon} tone={item.tone} className="h-12 w-12 rounded-full" />
                <h3 className="mt-2 text-sm font-black text-[#06143a]">{item.title}</h3>
                {index < data.discovery.process.length - 1 ? (
                  <ArrowRight
                    className="absolute left-[calc(50%+2.5rem)] top-8 hidden h-5 w-5 text-blue-300 md:block"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </BusinessSuitePanel>
    </BusinessSuiteSection>
  );
}
