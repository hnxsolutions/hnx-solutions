import FullBusinessSuiteAutomation from "./FullBusinessSuiteAutomation";
import FullBusinessSuiteComparison from "./FullBusinessSuiteComparison";
import FullBusinessSuiteCTA from "./FullBusinessSuiteCTA";
import FullBusinessSuiteDashboard from "./FullBusinessSuiteDashboard";
import FullBusinessSuiteDiscovery from "./FullBusinessSuiteDiscovery";
import FullBusinessSuiteHero from "./FullBusinessSuiteHero";
import FullBusinessSuiteModules from "./FullBusinessSuiteModules";
import FullBusinessSuitePackages from "./FullBusinessSuitePackages";
import FullBusinessSuiteRoadmap from "./FullBusinessSuiteRoadmap";
import FullBusinessSuiteServiceExamples from "./FullBusinessSuiteServiceExamples";
import FullBusinessSuiteStackBuilder from "./FullBusinessSuiteStackBuilder";
import FullBusinessSuiteWhyChoose from "./FullBusinessSuiteWhyChoose";

export default function FullBusinessSuitePage() {
  return (
    <main className="relative bg-[#f8fbff] text-slate-950">
      <div className="mx-auto w-full max-w-full px-3 sm:max-w-[min(110vw,1540px)] sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <FullBusinessSuiteHero />
        <FullBusinessSuiteComparison />
        <FullBusinessSuiteDiscovery />
        <FullBusinessSuiteStackBuilder />
        <FullBusinessSuiteModules />
        <FullBusinessSuiteAutomation />
        <FullBusinessSuiteServiceExamples />
        <FullBusinessSuiteRoadmap />
        <FullBusinessSuiteDashboard />
        <FullBusinessSuiteWhyChoose />
        <FullBusinessSuitePackages />
        <FullBusinessSuiteCTA />
      </div>
    </main>
  );
}
