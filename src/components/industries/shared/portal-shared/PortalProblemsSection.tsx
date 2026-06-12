import { PortalReveal } from "./PortalMotion";
import {
  PortalCard,
  PortalIcon,
  PortalSection,
  PortalSectionHeader,
  getPortalTone,
} from "./portalSectionUtils";
import type { IndustryPortalPageData } from "./portalTypes";

export default function PortalProblemsSection({ data }: { data: IndustryPortalPageData }) {
  return (
    <PortalSection className="bg-slate-50/70 dark:bg-white/[0.025]">
      <PortalSectionHeader
        eyebrow="Portal Problems"
        title="Why Your Business Needs a Portal"
        description={`A ${data.portalName.toLowerCase()} reduces repeated calls, scattered files, unclear status updates, and manual support work.`}
        center
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {data.problems.map((problem, index) => (
          <PortalReveal key={problem.title} delay={index * 0.035}>
            <PortalCard className="h-full">
              <PortalIcon icon={problem.icon} tone={getPortalTone(index)} />
              <h3 className="mt-4 text-base font-black text-slate-950 dark:text-white">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
                {problem.description}
              </p>
            </PortalCard>
          </PortalReveal>
        ))}
      </div>
    </PortalSection>
  );
}
