import { ArrowRight } from "lucide-react";
import { fullBusinessSuiteData } from "./fullBusinessSuiteData";
import {
  DottedPattern,
  SuiteHeader,
  SuiteIconBox,
  SuitePanel,
  SuiteSection,
  SuiteTinyIcon,
} from "./fullBusinessSuiteUtils";

export default function FullBusinessSuiteDiscovery() {
  const { discovery } = fullBusinessSuiteData;

  return (
    <SuiteSection id="discovery" className="bg-[#f8fbff]">
      <DottedPattern className="bottom-6 left-0 h-48 w-48 opacity-50" />
      <SuitePanel className="relative overflow-hidden">
        <div className="grid min-w-0 gap-6 p-5 sm:p-6 lg:grid-cols-[0.46fr_0.54fr] lg:p-7">
          <div className="min-w-0">
            <SuiteHeader
              eyebrow={discovery.eyebrow}
              title={discovery.title}
              description={discovery.description}
            />
            <div className="mt-5 grid gap-3">
              {discovery.cards.map((card) => (
                <article key={card.title} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm">
                  <SuiteTinyIcon icon={card.icon} tone={card.tone} />
                  <div>
                    <h3 className="text-base font-black text-[#06143a]">{card.title}</h3>
                    <p className="mt-1 text-sm font-medium leading-6 text-[#445579]">{card.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[1.35rem] border border-blue-100 bg-[linear-gradient(135deg,#ffffff_0%,#eef5ff_100%)] p-5">
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-blue-100/70 blur-3xl" />
            <div className="relative mx-auto max-w-md">
              <div className="rounded-[1.35rem] border border-slate-200 bg-white p-4 shadow-[0_18px_44px_rgba(15,23,42,0.08)]">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#0057ff]">Research Output</p>
                <h3 className="mt-3 text-xl font-black text-[#06143a]">A clear roadmap before development starts.</h3>
                <div className="mt-4 grid gap-3">
                  {["Workflow map", "Module priority", "Integration plan", "Automation opportunities"].map((item, index) => (
                    <div key={item} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5">
                      <span className="text-sm font-bold text-slate-700">{item}</span>
                      <span className="rounded-full bg-blue-50 px-2 py-1 text-[11px] font-black text-[#0b61ff]">
                        {index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <MetricCard label="Manual tasks found" value="42" />
                <MetricCard label="Automation wins" value="18" />
                <MetricCard label="Systems to connect" value="9" />
                <MetricCard label="Launch phases" value="5" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 bg-white px-5 py-5 sm:px-6 lg:px-7">
          <div className="grid gap-3 sm:grid-cols-5">
            {discovery.process.map((step, index) => (
              <div key={step.label} className="flex items-center gap-3 sm:flex-col sm:text-center">
                <SuiteIconBox icon={step.icon} tone={index % 2 === 0 ? "blue" : "orange"} className="h-11 w-11 rounded-full" iconClassName="h-5 w-5" />
                <span className="text-sm font-black text-[#06143a]">{step.label}</span>
                {index < discovery.process.length - 1 ? (
                  <ArrowRight className="hidden h-4 w-4 text-blue-400 sm:absolute" aria-hidden="true" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </SuitePanel>
    </SuiteSection>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-2xl font-black text-[#06143a]">{value}</p>
      <p className="mt-1 text-xs font-bold leading-5 text-slate-500">{label}</p>
    </div>
  );
}
