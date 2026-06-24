import { CalendarCheck, HeartPulse } from "lucide-react";
import { fullBusinessSuiteData } from "./fullBusinessSuiteData";
import {
  OutlineButton,
  PrimaryButton,
  SoftWaves,
  SuiteBadge,
  SuiteIconBox,
  SuiteSection,
} from "./fullBusinessSuiteUtils";

export default function FullBusinessSuiteCTA() {
  const { finalCta } = fullBusinessSuiteData;
  const trustCards = [
    { title: "Secure & Reliable", description: "Built with enterprise-grade foundations.", icon: HeartPulse },
    { title: "Clear Roadmap", description: "Know what to build before spending.", icon: CalendarCheck },
    { title: "Scalable System", description: "Start focused and expand as needed.", icon: HeartPulse },
    { title: "Expert Support", description: "A dedicated team beside you.", icon: CalendarCheck },
  ];

  return (
    <SuiteSection id="final-cta" className="bg-white pb-10">
      <SoftWaves />
      <div className="relative mx-auto max-w-5xl text-center">
        <SuiteBadge icon={HeartPulse} className="rounded-full bg-white">
          {finalCta.eyebrow}
        </SuiteBadge>
        <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black leading-[1.1] tracking-[-0.03em] text-[#06143a] sm:text-4xl lg:text-[2.65rem]">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base font-medium leading-7 text-[#445579]">
          {finalCta.description}
        </p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <PrimaryButton href={finalCta.primaryHref}>{finalCta.primaryLabel}</PrimaryButton>
          <OutlineButton href={finalCta.secondaryHref}>{finalCta.secondaryLabel}</OutlineButton>
        </div>

        <div className="mt-7 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {trustCards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_28px_rgba(15,23,42,0.045)]">
              <SuiteIconBox icon={card.icon} tone="blue" className="mx-auto h-12 w-12 rounded-full" iconClassName="h-6 w-6" />
              <h3 className="mt-3 text-base font-black text-[#06143a] sm:text-lg">{card.title}</h3>
              <div className="mx-auto mt-3 h-1 w-7 rounded-full bg-[#0b61ff]" />
              <p className="mt-3 text-sm font-medium leading-5 text-[#445579]">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SuiteSection>
  );
}
