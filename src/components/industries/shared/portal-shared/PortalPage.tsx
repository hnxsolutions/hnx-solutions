import { notFound } from "next/navigation";
import { Unna } from "next/font/google";
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
      <div className={`${unna.variable} portal-unna-scope mx-auto w-full max-w-full px-3 sm:max-w-[min(105vw,1540px)] sm:px-6 lg:px-8 xl:px-10 2xl:px-12`}>
        <style>{`
          .portal-unna-scope,
          .portal-unna-scope * {
            font-family: var(--font-unna), Georgia, "Times New Roman", serif !important;
          }

          .portal-unna-scope :where(h1, h2, h3, h4) {
            font-weight: 700;
          }

          .portal-unna-scope :where(button, a, p, span, li, label, input, textarea, select) {
            font-family: var(--font-unna), Georgia, "Times New Roman", serif !important;
          }
        `}</style>

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
      </div>
    </main>
  );
}

const unna = Unna({
  variable: "--font-unna",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
