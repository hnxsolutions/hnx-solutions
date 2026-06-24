import dynamic from "next/dynamic";
import HomeHero from "./HomeHero";
import { HomeSectionFallback } from "./homeUtils";

const HomeEcosystem = dynamic(() => import("./HomeEcosystem"), {
  loading: () => <HomeSectionFallback />,
});

const HomeCRMPreview = dynamic(() => import("./HomeCRMPreview"), {
  loading: () => <HomeSectionFallback />,
});

const HomeServices = dynamic(() => import("./HomeServices"), {
  loading: () => <HomeSectionFallback />,
});

const HomePortfolio = dynamic(() => import("./HomePortfolio"), {
  loading: () => <HomeSectionFallback />,
});

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
      <HomeEcosystem />
      <HomeCRMPreview />
      <HomeServices />
      <HomePortfolio />
      <HomeTestimonials />
      <HomeCTA />
    </main>
  );
}
