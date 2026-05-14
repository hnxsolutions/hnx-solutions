"use client";

import FullSuitePreview from "@/components/industries/shared/FullSuitePreview";
import IndustryCTA from "@/components/industries/shared/IndustryCTA";
import IndustryHeroPreview from "@/components/industries/shared/IndustryHeroPreview";
import IndustryPreviewShell from "@/components/industries/shared/IndustryPreviewShell";
import { healthcareSolutions } from "./healthcareData";

const solution = healthcareSolutions["full-suite"];

export default function HealthcareFullSuitePreview() {
  return (
    <IndustryPreviewShell>
      <IndustryHeroPreview {...solution} />
      <section className="mx-auto max-w-[min(94vw,1540px)] space-y-6 px-5 pb-18 sm:px-6 lg:px-8 lg:pb-24 xl:px-10 2xl:px-12">
        <FullSuitePreview
          title={solution.title}
          description={solution.description}
          modules={solution.features}
          flowSteps={solution.flowSteps}
          metrics={solution.metrics}
          benefits={solution.benefits}
          valuePoints={solution.valuePoints ?? []}
          centralIcon={solution.icon}
        />
        <IndustryCTA
          title={solution.ctaLabel}
          description={solution.ctaDescription}
          ctaLabel={solution.ctaLabel}
        />
      </section>
    </IndustryPreviewShell>
  );
}
