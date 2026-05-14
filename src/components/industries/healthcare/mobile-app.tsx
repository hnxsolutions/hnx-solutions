"use client";

import IndustryBenefitChips from "@/components/industries/shared/IndustryBenefitChips";
import IndustryCTA from "@/components/industries/shared/IndustryCTA";
import IndustryDashboardPreview from "@/components/industries/shared/IndustryDashboardPreview";
import IndustryFeatureGrid from "@/components/industries/shared/IndustryFeatureGrid";
import IndustryFlow from "@/components/industries/shared/IndustryFlow";
import IndustryHeroPreview from "@/components/industries/shared/IndustryHeroPreview";
import IndustryPreviewShell from "@/components/industries/shared/IndustryPreviewShell";
import IndustryProblemCards from "@/components/industries/shared/IndustryProblemCards";
import { healthcareSolutions } from "./healthcareData";

const solution = healthcareSolutions["mobile-app"];

export default function HealthcareMobileAppPreview() {
  return (
    <IndustryPreviewShell>
      <IndustryHeroPreview {...solution} />
      <section className="mx-auto max-w-[min(94vw,1540px)] space-y-6 px-5 pb-18 sm:px-6 lg:px-8 lg:pb-24 xl:px-10 2xl:px-12">
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <IndustryProblemCards
            title="Patient experience gaps to close"
            problems={solution.problems}
          />
          <IndustryFeatureGrid
            title={solution.featureTitle}
            features={solution.features}
          />
        </div>
        <IndustryFlow title={solution.flowTitle} steps={solution.flowSteps} />
        <IndustryDashboardPreview
          title={solution.dashboardTitle}
          description={solution.dashboardDescription}
          metrics={solution.metrics}
        />
        <IndustryBenefitChips benefits={solution.benefits} />
        <IndustryCTA
          title={solution.ctaLabel}
          description={solution.ctaDescription}
          ctaLabel={solution.ctaLabel}
        />
      </section>
    </IndustryPreviewShell>
  );
}
