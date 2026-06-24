import { ArrowRight, CheckCircle2 } from "lucide-react";
import { fullBusinessSuiteData } from "./fullBusinessSuiteData";
import {
  PrimaryButton,
  StackPill,
  SuiteHeader,
  SuitePanel,
  SuiteSection,
  SuiteTinyIcon,
} from "./fullBusinessSuiteUtils";

export default function FullBusinessSuiteStackBuilder() {
  const { stackBuilder } = fullBusinessSuiteData;

  return (
    <SuiteSection id="stack-builder" className="bg-white">
      <SuitePanel className="p-5 sm:p-6 lg:p-7">
        <SuiteHeader
          eyebrow={stackBuilder.eyebrow}
          title={stackBuilder.title}
          description={stackBuilder.description}
          center
        />

        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
          <div className="grid min-w-[720px] grid-cols-5 divide-x divide-slate-200">
            {stackBuilder.tabs.map((tab, index) => (
              <button
                key={tab.label}
                className={`flex items-center justify-center gap-2 px-4 py-3 text-sm font-black ${
                  index === 0 ? "bg-[#062867] text-white" : "bg-white text-slate-800"
                }`}
                type="button"
              >
                <tab.icon className="h-5 w-5" aria-hidden="true" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_320px]">
          <div className="grid gap-3">
            {stackBuilder.rows.map((row, index) => (
              <article key={row.need} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <SuiteTinyIcon icon={stackBuilder.tabs[index % stackBuilder.tabs.length].icon} tone={index % 2 === 0 ? "blue" : "orange"} />
                  <div>
                    <h3 className="text-base font-black text-[#06143a]">{row.need}</h3>
                    <p className="mt-0.5 text-sm font-medium text-slate-500">Recommended Stack</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {row.stack.map((pill) => (
                    <StackPill key={pill.label} tone={pill.tone}>
                      {pill.label}
                    </StackPill>
                  ))}
                </div>
                <ArrowRight className="hidden h-5 w-5 text-[#0b61ff] md:block" aria-hidden="true" />
              </article>
            ))}
          </div>

          <aside className="rounded-[1.25rem] border border-blue-100 bg-[#f8fbff] p-5">
            <h3 className="text-lg font-black text-[#06143a]">Why This Works</h3>
            <div className="mt-4 grid gap-3">
              {stackBuilder.reasons.map((reason) => (
                <div key={reason} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
                  {reason}
                </div>
              ))}
            </div>
            <PrimaryButton href="/contact" className="mt-6 w-full">
              {"Let's Plan My Stack"}
            </PrimaryButton>
          </aside>
        </div>
      </SuitePanel>
    </SuiteSection>
  );
}
