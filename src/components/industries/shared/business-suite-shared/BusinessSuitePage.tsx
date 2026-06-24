import { notFound } from "next/navigation";
import BusinessSuiteAutomationOpportunities from "./BusinessSuiteAutomationOpportunities";
import BusinessSuiteDashboardPreview from "./BusinessSuiteDashboardPreview";
import BusinessSuiteDiscoveryProcess from "./BusinessSuiteDiscoveryProcess";
import BusinessSuiteFinalCTA from "./BusinessSuiteFinalCTA";
import BusinessSuiteGrowthRoadmap from "./BusinessSuiteGrowthRoadmap";
import BusinessSuiteHero from "./BusinessSuiteHero";
import BusinessSuiteIndustryExamples from "./BusinessSuiteIndustryExamples";
import BusinessSuiteModules from "./BusinessSuiteModules";
import BusinessSuitePackages from "./BusinessSuitePackages";
import BusinessSuiteStackBuilder from "./BusinessSuiteStackBuilder";
import BusinessSuiteSystemComparison from "./BusinessSuiteSystemComparison";
import BusinessSuiteWhyChoose from "./BusinessSuiteWhyChoose";
import { getBusinessSuitePage } from "./businessSuiteData";

export default function BusinessSuitePage({
  industrySlug,
  solutionSlug = "business-suite",
}: {
  industrySlug: string;
  solutionSlug?: string;
}) {
  const data = getBusinessSuitePage(industrySlug, solutionSlug);

  if (!data) {
    notFound();
  }

  return (
    <main className="relative bg-[#f8fbff] text-slate-950 dark:bg-[#050814] dark:text-white">
      <div className="mx-auto w-full max-w-full px-3 sm:max-w-[min(105vw,1540px)] sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <BusinessSuiteHero data={data} />
        <BusinessSuiteSystemComparison data={data} />
        <BusinessSuiteDiscoveryProcess data={data} />
        <BusinessSuiteStackBuilder data={data} />
        <BusinessSuiteModules data={data} />
        <BusinessSuiteAutomationOpportunities data={data} />
        <BusinessSuiteIndustryExamples data={data} />
        <BusinessSuiteGrowthRoadmap data={data} />
        <BusinessSuiteDashboardPreview data={data} />
        <BusinessSuiteWhyChoose data={data} />
        <BusinessSuitePackages data={data} />
        <BusinessSuiteFinalCTA data={data} />
      </div>
    </main>
  );
}
