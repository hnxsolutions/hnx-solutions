import { CheckCircle2 } from "lucide-react";
import { fullBusinessSuiteData } from "./fullBusinessSuiteData";
import { PrimaryButton, SuiteHeader, SuiteSection } from "./fullBusinessSuiteUtils";

export default function FullBusinessSuitePackages() {
  const { packages } = fullBusinessSuiteData;

  return (
    <SuiteSection id="packages" className="bg-[#f8fbff]">
      <SuiteHeader
        eyebrow={packages.eyebrow}
        title={packages.title}
        description={packages.description}
        center
      />

      <div className="mt-7 grid gap-4 lg:grid-cols-4">
        {packages.items.map((item) => (
          <article
            key={item.title}
            className={`relative min-h-[292px] rounded-[1.25rem] border bg-white p-4 shadow-[0_14px_34px_rgba(15,23,42,0.055)] ${
              item.badge ? "border-blue-200 ring-2 ring-blue-100" : "border-slate-200"
            }`}
          >
            {item.badge ? (
              <span className="absolute right-4 top-4 rounded-full bg-[#0b61ff] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">
                {item.badge}
              </span>
            ) : null}
            <h3 className="max-w-[12rem] text-lg font-black leading-tight text-[#06143a]">{item.title}</h3>
            <p className="mt-3 rounded-xl bg-slate-50 px-3 py-2 text-sm font-black text-[#0b49cf]">{item.subtitle}</p>
            <p className="mt-4 text-sm font-medium leading-6 text-[#445579]">{item.description}</p>
            <div className="mt-4 grid gap-2.5">
              {item.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm font-bold text-slate-800">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                  {feature}
                </div>
              ))}
            </div>
            <PrimaryButton href="/contact" className="mt-5 w-full bg-none shadow-none">
              Custom Quote
            </PrimaryButton>
          </article>
        ))}
      </div>
    </SuiteSection>
  );
}
