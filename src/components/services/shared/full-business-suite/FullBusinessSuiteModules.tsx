import { fullBusinessSuiteData } from "./fullBusinessSuiteData";
import { PrimaryButton, SuiteHeader, SuiteIconBox, SuiteSection } from "./fullBusinessSuiteUtils";

export default function FullBusinessSuiteModules() {
  const { modules } = fullBusinessSuiteData;

  return (
    <SuiteSection id="modules" className="bg-[#f8fbff]">
      <SuiteHeader
        eyebrow={modules.eyebrow}
        title={modules.title}
        description={modules.description}
        center
      />

      <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        {modules.items.map((item) => (
          <article key={item.title} className="min-h-[10.5rem] rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.045)]">
            <SuiteIconBox icon={item.icon} tone={item.tone} className="h-11 w-11 rounded-xl" iconClassName="h-5 w-5" />
            <h3 className="mt-4 text-base font-black text-[#06143a]">{item.title}</h3>
            <p className="mt-2 text-sm font-medium leading-6 text-[#445579]">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <PrimaryButton href="/contact">Explore All Modules</PrimaryButton>
      </div>
    </SuiteSection>
  );
}
