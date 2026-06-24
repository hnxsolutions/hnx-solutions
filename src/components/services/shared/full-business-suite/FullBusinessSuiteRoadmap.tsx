import { fullBusinessSuiteData } from "./fullBusinessSuiteData";
import {
  PrimaryButton,
  SuiteHeader,
  SuiteIconBox,
  SuitePanel,
  SuiteSection,
} from "./fullBusinessSuiteUtils";

export default function FullBusinessSuiteRoadmap() {
  const { roadmap } = fullBusinessSuiteData;

  return (
    <SuiteSection id="roadmap" className="bg-white">
      <SuitePanel className="p-5 sm:p-6 lg:p-7">
        <SuiteHeader
          eyebrow={roadmap.eyebrow}
          title={roadmap.title}
          description={roadmap.description}
          center
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-5">
          {roadmap.steps.map((step, index) => (
            <article key={step.title} className="relative rounded-[1.25rem] border border-slate-200 bg-white p-4 text-center shadow-sm">
              {index < roadmap.steps.length - 1 ? (
                <span className="absolute left-[calc(50%+2rem)] top-9 hidden h-px w-[calc(100%-4rem)] bg-blue-200 lg:block" aria-hidden="true" />
              ) : null}
              <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-full bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)] ring-1 ring-blue-100">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#0b61ff] to-[#063b9f] text-sm font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <SuiteIconBox icon={step.icon} tone={step.tone} className="mx-auto mt-4 h-12 w-12 rounded-full" iconClassName="h-6 w-6" />
              <h3 className="mt-4 text-base font-black text-[#06143a]">{step.title}</h3>
              <p className="mt-2 text-sm font-medium leading-6 text-[#445579]">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[1.25rem] border border-blue-100 bg-[#f8fbff] p-5 text-center">
          <p className="mx-auto max-w-3xl text-base font-bold leading-7 text-[#1e2f53]">{roadmap.callout}</p>
          <PrimaryButton href="/contact" className="mt-5">
            Start My Growth Roadmap
          </PrimaryButton>
        </div>
      </SuitePanel>
    </SuiteSection>
  );
}
