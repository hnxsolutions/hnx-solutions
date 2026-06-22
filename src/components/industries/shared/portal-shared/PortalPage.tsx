import { notFound } from "next/navigation";
import { getIndustryPortalPage } from "./portalData";
import PortalAutomationSection from "./PortalAutomationSection";
import PortalDashboardPreviewSection from "./PortalDashboardPreviewSection";
import PortalFeaturesSection from "./PortalFeaturesSection";
import PortalFinalCTASection from "./PortalFinalCTASection";
import PortalHeroSection from "./PortalHeroSection";
import PortalImplementationProcessSection from "./PortalImplementationProcessSection";
import PortalIntegrationsSection from "./PortalIntegrationsSection";
import PortalLoginExperienceSection from "./PortalLoginExperienceSection";
import PortalProblemsSection from "./PortalProblemsSection";
import PortalRoleAccessSection from "./PortalRoleAccessSection";
import PortalSecuritySection from "./PortalSecuritySection";
import PortalWorkflowSection from "./PortalWorkflowSection";

export default function PortalPage({
  industrySlug,
  solutionSlug = "portal",
}: {
  industrySlug: string;
  solutionSlug?: string;
}) {
  const data = getIndustryPortalPage(industrySlug, solutionSlug);

  if (!data) {
    notFound();
  }

  return (
    <main className="relative overflow-x-hidden bg-[#f8fbff] text-slate-950 dark:bg-[#050814] dark:text-white">
      <PortalHeroSection data={data} />

      <PortalProblemsSection data={data} />
      <PortalLoginExperienceSection data={data} />
      <PortalWorkflowSection data={data} />
      <PortalFeaturesSection data={data} />
      <PortalRoleAccessSection data={data} />
      <PortalDashboardPreviewSection data={data} />
      <PortalSecuritySection data={data} />
      <PortalIntegrationsSection data={data} />
      <PortalAutomationSection data={data} />
      <PortalImplementationProcessSection data={data} />
      <PortalFinalCTASection data={data} />
    </main>
  );
}
