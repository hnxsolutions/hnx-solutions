"use client";

import FullSuitePreview from "@/components/industries/shared/common/FullSuitePreview";
import IndustryCTA from "@/components/industries/shared/common/IndustryCTA";
import IndustryHeroPreview from "@/components/industries/shared/common/IndustryHeroPreview";
import IndustryPreviewShell from "@/components/industries/shared/common/IndustryPreviewShell";
import { healthcareSolutions } from "./healthcareData";

const solution = healthcareSolutions["full-suite"];

export default function HealthcareFullSuitePreview() {
  return (
    <IndustryPreviewShell>
      <IndustryHeroPreview {...solution} />
      <section className="mx-auto w-full max-w-full space-y-6 px-3 pb-18 sm:max-w-[min(92vw,1440px)] sm:px-6 lg:px-8 lg:pb-24 xl:px-10 2xl:px-12">
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
