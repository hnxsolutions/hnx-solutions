import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PortalReveal } from "./PortalMotion";
import {
  PortalCard,
  PortalIcon,
  PortalSection,
  PortalSectionHeader,
  getPortalTone,
} from "./portalSectionUtils";
import type { IndustryPortalPageData } from "./portalTypes";

export default function PortalAiAutomationSection({ data }: { data: IndustryPortalPageData }) {
  return (
    <PortalSection className="bg-slate-50/70 dark:bg-white/[0.025]">
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div>
          <PortalSectionHeader
            eyebrow="AI Automation Add-ons"
            title="Add Smart Automation to Your Portal"
            description={`Add focused automation inside the ${data.portalName.toLowerCase()} for support answers, reminders, ticket routing, status updates, and summaries.`}
          />
          <Link
            href="/contact?service=ai-portal-automation"
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
          >
            Plan Portal Automation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {data.aiAutomationItems.map((item, index) => (
            <PortalReveal key={item.title} delay={index * 0.035}>
              <PortalCard className="h-full">
                <PortalIcon icon={item.icon} tone={getPortalTone(index)} />
                <p className="mt-4 rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-slate-500 dark:bg-white/[0.08] dark:text-slate-300">
                  {item.trigger}
                </p>
                <h3 className="mt-3 text-base font-black text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </PortalCard>
            </PortalReveal>
          ))}
        </div>
      </div>
    </PortalSection>
  );
}
