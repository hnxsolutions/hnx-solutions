import dynamic from "next/dynamic";
import HomeHero from "./HomeHero";
import HomeAiAddOnsSection from "./shared/HomeAiAddOnsSection";
import HomeBusinessChallengesSection from "./shared/HomeBusinessChallengesSection";
import HomeCommandCenterSection from "./shared/HomeCommandCenterSection";
import HomeCoreServicesSection from "./shared/HomeCoreServicesSection";
import HomeFeaturedProjectsSection from "./shared/HomeFeaturedProjectsSection";
import HomeGrowthStackSection from "./shared/HomeGrowthStackSection";
import HomeIndustrySolutionsSection from "./shared/HomeIndustrySolutionsSection";
import HomeProcessSection from "./shared/HomeProcessSection";
import HomeStartingPointSection from "./shared/HomeStartingPointSection";
import HomeWhyCustomWinsSection from "./shared/HomeWhyCustomWinsSection";
import { HomeSectionFallback } from "./homeUtils";

const HomeTestimonials = dynamic(() => import("./HomeTestimonials"), {
  loading: () => <HomeSectionFallback />,
});

const HomeCTA = dynamic(() => import("./HomeCTA"), {
  loading: () => <HomeSectionFallback className="h-50" />,
});

export default function HomePage() {
  return (
    <main className="page-shell">
      <HomeHero />
      <HomeGrowthStackSection />
      <HomeBusinessChallengesSection />
      <HomeStartingPointSection />
      <HomeCoreServicesSection />
      <HomeCommandCenterSection />
      <HomeIndustrySolutionsSection />
      <HomeProcessSection />
      <HomeFeaturedProjectsSection />
      <HomeWhyCustomWinsSection />
      <HomeAiAddOnsSection />
      <HomeTestimonials />
      <HomeCTA />
    </main>
  );
}
