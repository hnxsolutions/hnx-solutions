import Link from "next/link";
import { ArrowRight, CheckCircle2, LockKeyhole } from "lucide-react";
import { PortalReveal } from "./PortalMotion";
import { PortalSection } from "./portalSectionUtils";
import type { IndustryPortalPageData } from "./portalTypes";

export default function PortalFinalCTASection({ data }: { data: IndustryPortalPageData }) {
  return (
    <PortalSection>
      <PortalReveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)] dark:border-white/10 sm:p-8 lg:p-10">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-blue-200 ring-1 ring-white/10">
                <LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" />
                {data.portalName}
              </span>
              <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl">
                {data.finalCta.title}
              </h2>
              <p className="mt-4 max-w-3xl text-sm font-semibold leading-7 text-slate-300">
                {data.finalCta.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href={data.finalCta.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-black text-slate-950 shadow-sm transition hover:-translate-y-0.5"
              >
                {data.finalCta.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href={data.finalCta.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                {data.finalCta.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
            {data.finalCta.trustPoints.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-black ring-1 ring-white/10">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-200" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </PortalReveal>
    </PortalSection>
  );
}
