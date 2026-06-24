import { Check, X } from "lucide-react";
import { fullBusinessSuiteData } from "./fullBusinessSuiteData";
import { SuiteHeader, SuitePanel, SuiteSection } from "./fullBusinessSuiteUtils";

export default function FullBusinessSuiteComparison() {
  const { comparison } = fullBusinessSuiteData;

  return (
    <SuiteSection id="business-system" className="bg-white">
      <SuiteHeader
        eyebrow={comparison.eyebrow}
        title={comparison.title}
        description={comparison.description}
        center
      />

      <div className="mt-7 grid gap-4 lg:grid-cols-[0.9fr_1fr_0.9fr]">
        <ComparisonCard title={comparison.typicalTitle} items={comparison.typical} variant="typical" />
        <ComparisonCard title={comparison.suiteTitle} items={comparison.suite} variant="suite" />
        <div className="flex min-h-[300px] flex-col justify-center rounded-[1.35rem] bg-gradient-to-br from-[#06143a] to-[#0a3b92] p-5 text-white shadow-[0_18px_44px_rgba(6,20,58,0.18)] lg:p-6">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/12">
            <Check className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="mt-5 text-xl font-black">Strategy, build, and growth in one system.</h3>
          <p className="mt-4 text-sm font-medium leading-6 text-blue-50">{comparison.callout}</p>
        </div>
      </div>
    </SuiteSection>
  );
}

function ComparisonCard({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: "typical" | "suite";
}) {
  const isSuite = variant === "suite";

  return (
    <SuitePanel className={isSuite ? "overflow-hidden ring-2 ring-blue-100" : ""}>
      {isSuite ? (
        <div className="bg-gradient-to-r from-[#063b9f] to-[#0b61ff] px-5 py-3 text-center text-base font-black text-white">
          {title}
        </div>
      ) : (
        <h3 className="px-5 pt-5 text-center text-lg font-black text-[#06143a]">{title}</h3>
      )}
      <div className="grid gap-0 px-5 py-4">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 border-b border-slate-100 py-3 last:border-b-0">
            <span
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${
                isSuite ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
              }`}
            >
              {isSuite ? <Check className="h-4 w-4" aria-hidden="true" /> : <X className="h-4 w-4" aria-hidden="true" />}
            </span>
            <span className="text-sm font-bold text-slate-800">{item}</span>
          </div>
        ))}
      </div>
    </SuitePanel>
  );
}
