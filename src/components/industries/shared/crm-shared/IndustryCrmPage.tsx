import { PT_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import IndustryAiAutomationSection from "../common/IndustryAiAutomationSection";
import IndustryIntegrationsDeploymentSection from "../common/IndustryIntegrationsDeploymentSection";
import CrmAutomationReportsSection from "./CrmAutomationReportsSection";
import CrmDemoRedirectSection from "./CrmDemoRedirectSection";
import CrmFinalCTASection from "./CrmFinalCTASection";
import CrmHeroSection from "./CrmHeroSection";
import CrmIntegrationsUseCasesSection from "./CrmIntegrationsUseCasesSection";
import CrmModulesSection from "./CrmModulesSection";
import CrmOwnershipComparisonSection from "./CrmOwnershipComparisonSection";
import CrmProblemsSection from "./CrmProblemsSection";
import CrmRolesSection from "./CrmRolesSection";
import CrmTimelinePackagesSection from "./CrmTimelinePackagesSection";
import CrmWorkflowSection from "./CrmWorkflowSection";
import { getIndustryCrmPage } from "./industryCrmData";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

export default function IndustryCrmPage({
  industrySlug,
  solutionSlug,
}: {
  industrySlug: string;
  solutionSlug?: string;
}) {
  const data = getIndustryCrmPage(industrySlug, solutionSlug);

  if (!data) {
    notFound();
  }

  return (
    <main className={`${ptSans.className} relative overflow-hidden bg-[#f8fbff] text-slate-950 dark:bg-[#050814] dark:text-white`}>
      <CrmHeroSection data={data} />

      <CrmOwnershipComparisonSection primaryHref={data.finalCta.primaryHref || "/contact"} />

      <section className="relative px-3 pb-20 pt-10 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)]">
          <CrmProblemsSection data={data} />
          <CrmWorkflowSection data={data} />
          <CrmModulesSection data={data} />
          <CrmRolesSection data={data} />
          <IndustryAiAutomationSection {...data.aiAutomation} />
          {/* <IndustryIntegrationsDeploymentSection {...data.integrationsDeployment} /> */}
          <CrmDemoRedirectSection data={data} />
          <CrmAutomationReportsSection data={data} />
          <CrmIntegrationsUseCasesSection data={data} />
          <CrmTimelinePackagesSection data={data} />
          <CrmFinalCTASection data={data} />
        </div>
      </section>
    </main>
  );
}
