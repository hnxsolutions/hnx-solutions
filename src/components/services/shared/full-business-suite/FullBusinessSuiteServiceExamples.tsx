import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { fullBusinessSuiteData } from "./fullBusinessSuiteData";
import { SuiteHeader, SuiteIconBox, SuiteSection } from "./fullBusinessSuiteUtils";

export default function FullBusinessSuiteServiceExamples() {
  const { examples } = fullBusinessSuiteData;

  return (
    <SuiteSection id="service-examples" className="bg-[#f8fbff]">
      <SuiteHeader
        eyebrow={examples.eyebrow}
        title={examples.title}
        description={examples.description}
        center
      />

      <div className="mt-7 grid gap-4 lg:grid-cols-5">
        {examples.items.map((item) => (
          <article key={item.title} className="rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.045)]">
            <SuiteIconBox icon={item.icon} tone={item.tone} className="h-11 w-11 rounded-xl" iconClassName="h-5 w-5" />
            <h3 className="mt-4 text-base font-black text-[#06143a]">{item.title}</h3>
            <div className="mt-3 grid gap-2">
              {item.points.map((point) => (
                <p key={point} className="flex gap-2 text-sm font-medium leading-6 text-[#445579]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                  {point}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-black text-[#0b49cf]">
          View More Service Solutions
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </SuiteSection>
  );
}
