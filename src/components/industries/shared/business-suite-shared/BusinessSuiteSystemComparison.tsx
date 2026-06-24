import { Check, ShieldCheck, X } from "lucide-react";
import type { BusinessSuitePageData } from "./businessSuiteData";
import {
  BusinessSuitePanel,
  BusinessSuiteSection,
  BusinessSuiteTinyIcon,
  cn,
} from "./businessSuiteUtils";

export default function BusinessSuiteSystemComparison({ data }: { data: BusinessSuitePageData }) {
  return (
    <BusinessSuiteSection className="bg-white" innerClassName="max-w-[min(92vw,1240px)]">
      <div className="text-center">
        <p className="text-sm font-black text-[#ff5b12] sm:text-base">Why We&apos;re Different</p>
        <h2 className="mx-auto mt-2.5 max-w-3xl text-3xl font-black leading-[1.1] tracking-[-0.03em] text-[#06143a] sm:text-4xl lg:text-[2.65rem]">
          Not Just Software.
          <span className="block text-[#0b49cf]">A Business System.</span>
        </h2>
      </div>

      <div className="relative mt-7 grid gap-5 lg:grid-cols-2">
        <ComparisonCard title="Normal Development" items={data.comparison.normal} variant="bad" />
        <div className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#073071] text-base font-black text-white shadow-[0_14px_28px_rgba(7,48,113,0.22)] lg:grid">
          VS
        </div>
        <ComparisonCard title="HNX Full Business Suite" items={data.comparison.suite} variant="good" />
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-r from-[#05255d] via-[#063783] to-[#0057d9] p-5 text-white shadow-[0_18px_48px_rgba(6,34,86,0.2)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-cyan-400/20 ring-1 ring-white/15">
            <ShieldCheck className="h-7 w-7" aria-hidden="true" />
          </span>
          <p className="text-lg font-black leading-snug sm:text-xl">
            We don&apos;t sell tools. We build systems
            <span className="font-medium"> that grow your business.</span>
          </p>
        </div>
      </div>
    </BusinessSuiteSection>
  );
}

function ComparisonCard({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: "good" | "bad";
}) {
  const isGood = variant === "good";

  return (
    <BusinessSuitePanel className="overflow-hidden p-0">
      <div
        className={cn(
          "px-5 py-4 text-center text-base font-black",
          isGood ? "bg-gradient-to-r from-[#064fc9] to-[#073071] text-white" : "text-[#06143a]",
        )}
      >
        {title}
      </div>
      <div className="space-y-0 px-5 py-4">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3.5 border-b border-slate-100 py-2.5 last:border-b-0">
            <BusinessSuiteTinyIcon
              icon={isGood ? Check : X}
              tone={isGood ? "green" : "red"}
              className="h-8 w-8 rounded-full"
              iconClassName="h-4 w-4"
            />
            <span className="text-sm font-bold leading-snug text-[#06143a] sm:text-[0.95rem]">{item}</span>
          </div>
        ))}
      </div>
    </BusinessSuitePanel>
  );
}
