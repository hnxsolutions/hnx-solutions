import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CalendarCheck, HeartPulse } from "lucide-react";
import type { BusinessSuitePageData } from "./businessSuiteData";
import { BusinessSuiteBadge, BusinessSuiteIconBox, BusinessSuiteSection, SoftBlueWaves } from "./businessSuiteUtils";

export default function BusinessSuiteFinalCTA({ data }: { data: BusinessSuitePageData }) {
  const trustCards: Array<{ title: string; description: string; icon: LucideIcon }> = [
    { title: "Secure & Compliant", description: "Built with enterprise-grade security.", icon: HeartPulse },
    { title: "Scalable & Reliable", description: "Designed to grow with your business.", icon: ArrowRight },
    { title: "User-Centric Design", description: "Simple for customers and staff.", icon: CalendarCheck },
    { title: "Expert Support", description: "A dedicated team beside you.", icon: HeartPulse },
  ];

  return (
    <BusinessSuiteSection className="bg-white pb-10">
      <SoftBlueWaves />
      <div className="relative mx-auto max-w-5xl text-center">
        <BusinessSuiteBadge icon={HeartPulse} className="rounded-full bg-white">
          Ready to Transform Your {data.industryName} Experience?
        </BusinessSuiteBadge>
        <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black leading-[1.1] tracking-[-0.03em] text-[#06143a] sm:text-4xl lg:text-[2.65rem]">
          {data.finalCta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base font-medium leading-7 text-[#445579]">
          {data.finalCta.description}
        </p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href={data.finalCta.primaryHref}
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#0b61ff] to-[#073b95] px-7 py-3 text-base font-black text-white shadow-[0_16px_34px_rgba(11,97,255,0.22)] transition hover:-translate-y-0.5"
          >
            <CalendarCheck className="h-6 w-6" aria-hidden="true" />
            {data.finalCta.primaryLabel}
          </Link>
          <Link
            href={data.finalCta.secondaryHref}
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border-2 border-[#0b61ff] bg-white px-7 py-3 text-base font-black text-[#0b49cf] shadow-[0_14px_34px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5"
          >
            {data.finalCta.secondaryLabel}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-7 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {trustCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_28px_rgba(15,23,42,0.045)]"
            >
              <BusinessSuiteIconBox icon={card.icon} tone="blue" className="mx-auto h-12 w-12 rounded-full" iconClassName="h-6 w-6" />
              <h3 className="mt-3 text-base font-black text-[#06143a] sm:text-lg">{card.title}</h3>
              <div className="mx-auto mt-3 h-1 w-7 rounded-full bg-[#0b61ff]" />
              <p className="mt-3 text-sm font-medium leading-5 text-[#445579]">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </BusinessSuiteSection>
  );
}
