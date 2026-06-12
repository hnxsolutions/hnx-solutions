import { PortalReveal } from "./PortalMotion";
import {
  PortalCard,
  PortalIcon,
  PortalSection,
  PortalSectionHeader,
  getPortalTone,
} from "./portalSectionUtils";
import type { IndustryPortalPageData } from "./portalTypes";

export default function PortalModulesSection({ data }: { data: IndustryPortalPageData }) {
  return (
    <PortalSection>
      <PortalSectionHeader
        eyebrow="Portal Features / Modules"
        title="Everything Users Need in One Portal"
        description={`${data.portalName} modules are built around secure login, self-service requests, document control, payment visibility, support, and admin review.`}
        center
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {data.modules.map((module, index) => (
          <PortalReveal key={module.title} delay={index * 0.025}>
            <PortalCard className="h-full">
              <PortalIcon icon={module.icon} tone={getPortalTone(index)} />
              <h3 className="mt-4 text-sm font-black leading-5 text-slate-950 dark:text-white">
                {module.title}
              </h3>
              <p className="mt-2 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300">
                {module.description}
              </p>
            </PortalCard>
          </PortalReveal>
        ))}
      </div>
    </PortalSection>
  );
}
