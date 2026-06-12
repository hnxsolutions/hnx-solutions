import { notFound } from "next/navigation";
import { getIndustryPortalPage } from "./portalData";
import PortalAiAutomationSection from "./PortalAiAutomationSection";
import PortalDashboardPreviewSection from "./PortalDashboardPreviewSection";
import PortalFinalCTASection from "./PortalFinalCTASection";
import PortalHeroSection from "./PortalHeroSection";
import PortalImplementationSection from "./PortalImplementationSection";
import PortalIntegrationsSection from "./PortalIntegrationsSection";
import PortalLoginExperienceSection from "./PortalLoginExperienceSection";
import PortalModulesSection from "./PortalModulesSection";
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
    <main className="relative overflow-hidden bg-[#f8fbff] text-slate-950 dark:bg-[#050814] dark:text-white">
      <section className="relative px-3 pb-20 pt-24 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="mx-auto w-full max-w-full sm:max-w-[min(92vw,1440px)]">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.035]">
            <PortalHeroSection data={data} />
            <PortalProblemsSection data={data} />
            <PortalLoginExperienceSection data={data} />
            <PortalRoleAccessSection portalName={data.portalName} roles={data.roles} />
            <PortalModulesSection data={data} />
            <PortalWorkflowSection data={data} />
            <PortalDashboardPreviewSection data={data} />
            <PortalSecuritySection data={data} />
            <PortalIntegrationsSection data={data} />
            <PortalAiAutomationSection data={data} />
            <PortalImplementationSection data={data} />
            <PortalFinalCTASection data={data} />
          </div>
        </div>
      </section>
    </main>
  );
}
