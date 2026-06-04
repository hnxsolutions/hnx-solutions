import CrmAutomationSection from "./CrmAutomationSection";
import CrmDemoRedirectSection from "./CrmDemoRedirectSection";
import CrmFinalCTASection from "./CrmFinalCTASection";
import CrmHeroSection from "./CrmHeroSection";
import CrmIntegrationSection from "./CrmIntegrationSection";
import CrmModulesSection from "./CrmModulesSection";
import CrmProblemsSection from "./CrmProblemsSection";
import CrmProcessSection from "./CrmProcessSection";
import CrmReportsSection from "./CrmReportsSection";
import CrmRolesSection from "./CrmRolesSection";
import CrmUseCasesSection from "./CrmUseCasesSection";
import CrmWorkflowSection from "./CrmWorkflowSection";
import { getIndustryCrmPage } from "./industryCrmData";

export default function IndustryCrmPage({
  industrySlug,
  solutionSlug,
}: {
  industrySlug: string;
  solutionSlug?: string;
}) {
  const data = getIndustryCrmPage(industrySlug, solutionSlug);

  if (!data) {
    return null;
  }

  return (
    <main className="relative overflow-hidden bg-[#f8fbff] text-slate-950 dark:bg-[#050814] dark:text-white">
      <div className="pointer-events-none absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-blue-200/35 blur-3xl dark:bg-blue-500/10" />
      <div className="pointer-events-none absolute right-0 top-24 h-[30rem] w-[30rem] rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-500/10" />

      <section className="relative px-3 pb-20 pt-20 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="mx-auto w-full max-w-full sm:max-w-[min(92vw,1440px)]">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/72 shadow-[0_28px_90px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
            <CrmHeroSection data={data} />
            <CrmProblemsSection data={data} />
            <CrmWorkflowSection data={data} />
            <CrmModulesSection data={data} />
            <CrmRolesSection data={data} />
            <CrmDemoRedirectSection data={data} />
            <CrmAutomationSection data={data} />
            <CrmReportsSection data={data} />
            <CrmIntegrationSection data={data} />
            <CrmUseCasesSection data={data} />
            <CrmProcessSection data={data} />
            <CrmFinalCTASection data={data} />
          </div>
        </div>
      </section>
    </main>
  );
}

