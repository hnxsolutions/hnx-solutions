import { createSolutionMetadata, SolutionSeoPage } from "@/components/solutions/shared/SolutionSeoPage";
import { mobileAppSolutions } from "@/data/solutions/mobileAppSolutions";

const activeSlug = "app-strategy";

export const metadata = createSolutionMetadata({
  category: "mobile-apps",
  activeSlug,
  solutions: mobileAppSolutions,
});

export default function AppStrategyPage() {
  return (
    <SolutionSeoPage
      category="mobile-apps"
      activeSlug={activeSlug}
      solutions={mobileAppSolutions}
    />
  );
}