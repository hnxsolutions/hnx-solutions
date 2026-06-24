import { fullBusinessSuiteData } from "./fullBusinessSuiteData";
import {
  PrimaryButton,
  SuiteHeader,
  SuiteIconBox,
  SuitePanel,
  SuiteSection,
  SuiteTinyIcon,
} from "./fullBusinessSuiteUtils";

export default function FullBusinessSuiteAutomation() {
  const { automation } = fullBusinessSuiteData;

  return (
    <SuiteSection id="automation" className="bg-white">
      <SuitePanel className="p-5 sm:p-6 lg:p-7">
        <SuiteHeader
          eyebrow={automation.eyebrow}
          title={automation.title}
          description={automation.description}
          center
        />

        <div className="mt-7 grid gap-6 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
          <div className="grid gap-3">
            {automation.items.map((item) => (
              <article key={item.title} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm">
                <SuiteIconBox icon={item.icon} tone={item.tone} className="h-11 w-11 rounded-xl" iconClassName="h-5 w-5" />
                <div>
                  <h3 className="text-base font-black text-[#06143a]">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium leading-6 text-[#445579]">{item.description}</p>
                </div>
              </article>
            ))}
            <PrimaryButton href="/contact" className="mt-1 justify-between">
              See Automation in Action
            </PrimaryButton>
          </div>

          <AutomationLaptop />
        </div>
      </SuitePanel>
    </SuiteSection>
  );
}

function AutomationLaptop() {
  const { workflow } = fullBusinessSuiteData.automation;

  return (
    <div className="relative mx-auto w-full max-w-[760px] min-w-0">
      <div className="rounded-[1.5rem] border border-slate-200 bg-[#f8fbff] p-4 shadow-inner">
        <div className="relative mx-auto max-w-[560px] rounded-t-[1.3rem] border-[10px] border-[#09111f] bg-[#09111f] shadow-[0_22px_55px_rgba(15,23,42,0.18)]">
          <div className="h-2 rounded-t-lg bg-black" />
          <div className="grid h-[430px] grid-cols-[98px_1fr] overflow-hidden bg-white xl:h-[450px]">
            <aside className="bg-gradient-to-b from-[#031638] to-[#071f4d] p-3 text-white">
              <p className="text-xs font-black">HNX</p>
              <div className="mt-5 space-y-2">
                {["Dashboard", "Leads", "Automation", "Tasks", "Reports", "Settings"].map((item, index) => (
                  <div key={item} className={`rounded-lg px-2 py-1.5 text-[10px] font-bold ${index === 2 ? "bg-[#0b61ff]" : "text-white/70"}`}>
                    {item}
                  </div>
                ))}
              </div>
            </aside>
            <div className="min-w-0 p-4">
              <h3 className="text-base font-black text-[#06143a]">Automation Workflow</h3>
              <div className="mt-5 grid gap-3">
                {workflow.map((step, index) => (
                  <div key={step.title} className="relative flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                    {index < workflow.length - 1 ? (
                      <span className="absolute left-8 top-full h-3 border-l-2 border-dashed border-blue-300" aria-hidden="true" />
                    ) : null}
                    <SuiteTinyIcon icon={step.icon} tone={step.tone} />
                    <div>
                      <p className="text-sm font-black text-[#06143a]">{step.title}</p>
                      <p className="text-xs font-semibold text-slate-500">{step.detail}</p>
                    </div>
                    <span className="ml-auto rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-black text-emerald-600">
                      Active
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto h-4 max-w-[620px] rounded-b-[2rem] bg-gradient-to-b from-slate-300 to-slate-100 shadow-[0_14px_24px_rgba(15,23,42,0.14)]" />
      </div>
    </div>
  );
}
