import { PortalProgressLine, PortalReveal } from "./PortalMotion";
import {
  PortalIcon,
  PortalSection,
  PortalSectionHeader,
  getPortalTone,
} from "./portalSectionUtils";
import type { IndustryPortalPageData } from "./portalTypes";

export default function PortalWorkflowSection({ data }: { data: IndustryPortalPageData }) {
  return (
    <PortalSection id="portal-workflow" className="bg-slate-50/70 dark:bg-white/[0.025]">
      <PortalSectionHeader
        eyebrow="Portal Workflow"
        title="How the Portal Workflow Works"
        description={`A clear ${data.portalName.toLowerCase()} journey helps users log in, act, track progress, receive updates, and ask for help without repeated manual follow-up.`}
        center
      />

      <div className="relative mt-9">
        <div className="absolute left-8 right-8 top-[2.1rem] hidden h-px bg-slate-200 dark:bg-white/10 xl:block" aria-hidden="true" />
        <PortalProgressLine className="absolute left-8 right-8 top-[2.1rem] hidden h-px bg-blue-500 xl:block" />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {data.workflowSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <PortalReveal key={step.title} delay={index * 0.035}>
                <article className="relative h-full rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
                  <div className="flex items-center gap-3">
                    <PortalIcon icon={Icon} tone={getPortalTone(index)} className="h-10 w-10 rounded-xl" />
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 bg-slate-50 text-xs font-black text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-sm font-black text-slate-950 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>
                </article>
              </PortalReveal>
            );
          })}
        </div>
      </div>
    </PortalSection>
  );
}
