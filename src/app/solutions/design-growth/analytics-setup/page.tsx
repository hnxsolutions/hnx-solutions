import { createSolutionMetadata, SolutionSeoPage } from "@/components/solutions/shared/SolutionSeoPage";
import { designGrowthSolutions } from "@/data/solutions/designGrowthSolutions";

const activeSlug = "analytics-setup";

export const metadata = createSolutionMetadata({
  category: "design-growth",
  activeSlug,
  solutions: designGrowthSolutions,
});

export default function AnalyticsSetupPage() {
  return (
    <SolutionSeoPage
      category="design-growth"
      activeSlug={activeSlug}
      solutions={designGrowthSolutions}
    />
  );
}