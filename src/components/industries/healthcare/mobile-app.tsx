"use client";

import IndustryBenefitChips from "@/components/industries/shared/common/IndustryBenefitChips";
import IndustryCTA from "@/components/industries/shared/common/IndustryCTA";
import IndustryAiAutomationSection from "@/components/industries/shared/common/IndustryAiAutomationSection";
import IndustryDashboardPreview from "@/components/industries/shared/common/IndustryDashboardPreview";
import IndustryFeatureGrid from "@/components/industries/shared/common/IndustryFeatureGrid";
import IndustryFlow from "@/components/industries/shared/common/IndustryFlow";
import IndustryHeroPreview from "@/components/industries/shared/common/IndustryHeroPreview";
import IndustryIntegrationsDeploymentSection from "@/components/industries/shared/common/IndustryIntegrationsDeploymentSection";
import IndustryPreviewShell from "@/components/industries/shared/common/IndustryPreviewShell";
import IndustryProblemCards from "@/components/industries/shared/common/IndustryProblemCards";
import { healthcareSolutions } from "./healthcareData";

const solution = healthcareSolutions["mobile-app"];

export default function HealthcareMobileAppPreview() {
  return (
    <IndustryPreviewShell>
      <IndustryHeroPreview {...solution} />
      <section className="mx-auto w-full max-w-full space-y-6 px-3 pb-18 sm:max-w-[min(92vw,1440px)] sm:px-6 lg:px-8 lg:pb-24 xl:px-10 2xl:px-12">
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
        <IndustryAiAutomationSection {...solution.aiAutomation} />
        <IndustryIntegrationsDeploymentSection {...solution.integrationsDeployment} />
        <IndustryCTA
          title={solution.ctaLabel}
          description={solution.ctaDescription}
          ctaLabel={solution.ctaLabel}
        />
      </section>
    </IndustryPreviewShell>
  );
}
