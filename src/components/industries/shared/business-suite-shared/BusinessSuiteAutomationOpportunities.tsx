import Link from "next/link";
import { PlayCircle } from "lucide-react";
import type { BusinessSuitePageData } from "./businessSuiteData";
import {
  BusinessSuiteIconBox,
  BusinessSuitePanel,
  BusinessSuiteSection,
  BusinessSuiteTinyIcon,
  cn,
} from "./businessSuiteUtils";

export default function BusinessSuiteAutomationOpportunities({ data }: { data: BusinessSuitePageData }) {
  return (
    <BusinessSuiteSection className="bg-white">
      <BusinessSuitePanel className="p-4 sm:p-6 lg:p-7">
        <h2 className="text-center text-3xl font-black leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-[2.35rem]">
          We Find Where Automation Can Save Time & Increase Revenue
        </h2>

        <div className="mt-5 grid min-w-0 items-center gap-5 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="grid gap-3">
            {data.automation.cards.map((item) => (
              <article
                key={item.title}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-[0_10px_28px_rgba(15,23,42,0.04)]"
              >
                  <BusinessSuiteIconBox icon={item.icon} tone={item.tone} className="h-10 w-10 rounded-xl" iconClassName="h-5 w-5" />
                <div>
                  <h3 className="text-base font-black text-[#06143a]">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium leading-5 text-slate-900">{item.description}</p>
                </div>
              </article>
            ))}

            <Link
              href="/contact"
              className="mt-3 inline-flex min-h-11 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#062867] to-[#073b95] px-5 py-2.5 text-sm font-black text-white shadow-[0_14px_30px_rgba(6,40,103,0.2)] transition hover:-translate-y-0.5 sm:text-base"
            >
              See Automation in Action
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/35">
                <PlayCircle className="h-5 w-5" aria-hidden="true" />
              </span>
            </Link>
          </div>

          <div className="relative rounded-xl border border-slate-200 bg-white p-4 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
            <div className="grid min-h-[360px] min-w-0 items-center gap-5 xl:grid-cols-[0.5fr_1fr]">
              <div className="relative mx-auto w-full max-w-[220px]">
                {data.automation.workflow.map((step, index) => (
                  <div key={step.title} className="relative">
                    <article className="relative z-10 flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-[0_12px_28px_rgba(15,23,42,0.06)]">
                      <BusinessSuiteTinyIcon icon={step.icon} tone={step.tone} className="h-9 w-9" />
                      <div>
                        <h3 className="text-sm font-black text-[#06143a]">{step.title}</h3>
                        <p className="mt-1 text-xs font-semibold leading-5 text-slate-600">{step.description}</p>
                      </div>
                    </article>
                    {index < data.automation.workflow.length - 1 ? (
                      <div className="mx-auto h-3 w-px bg-[#0b61ff]" aria-hidden="true" />
                    ) : null}
                    <div
                      className={cn(
                        "absolute left-full top-1/2 hidden h-px w-24 border-t border-dashed border-[#08245e] xl:block",
                        index % 2 === 1 && "w-36",
                      )}
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>

              <AutomationLaptop />
            </div>
          </div>
        </div>
      </BusinessSuitePanel>
    </BusinessSuiteSection>
  );
}

function AutomationLaptop() {
  return (
    <div className="relative mx-auto w-full max-w-[500px]">
      <div className="overflow-hidden rounded-t-[1.2rem] border-[8px] border-[#070b13] bg-[#070b13] shadow-[0_18px_50px_rgba(15,23,42,0.16)]">
        <div className="grid h-[285px] grid-cols-[88px_1fr] overflow-hidden bg-white xl:h-[305px] xl:grid-cols-[98px_1fr]">
          <aside className="bg-gradient-to-b from-[#031638] to-[#071f4d] p-3 text-white">
            <p className="text-xs font-black">HNX</p>
            <div className="mt-6 space-y-1.5">
              {["Dashboard", "Leads", "Sales", "Customers", "Tasks", "Reports", "Campaigns", "Settings"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={cn(
                      "rounded-lg px-2.5 py-1.5 text-[9px] font-bold",
                      index === 0 ? "bg-[#0b61ff]" : "text-white/78",
                    )}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </aside>
          <div className="p-3.5">
            <p className="text-base font-black text-[#06143a]">Automation</p>
            <div className="mt-3 flex gap-5 border-b border-slate-200 pb-2.5 text-[11px] font-black text-slate-500">
              <span className="text-[#0b61ff]">Workflows</span>
              <span>Executions</span>
            </div>
            <div className="mt-3 rounded-xl border border-slate-200 bg-white p-2.5">
              {["Remote Group", "Lead Follow-Up", "Quote Reminder", "Support Alert"].map((row, index) => (
                <div key={row} className="flex items-center justify-between border-b border-slate-100 py-2.5 last:border-b-0">
                  <div className="flex items-center gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-slate-400">
                      {index + 1}
                    </span>
                    <div>
                      <div className="h-2.5 w-40 rounded-full bg-slate-100" />
                      <div className="mt-2 h-2 w-28 rounded-full bg-slate-100" />
                    </div>
                  </div>
                  <span className="text-xs font-black text-emerald-500">{index === 1 ? "Draft" : "Active"}</span>
                  <span className="h-6 w-11 rounded-full bg-blue-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-6 w-[88%] rounded-b-[80px] bg-gradient-to-b from-slate-300 to-slate-500 shadow-[0_16px_30px_rgba(15,23,42,0.14)]" />
    </div>
  );
}
