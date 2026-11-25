import { createSolutionMetadata } from "@/components/solutions/shared/SolutionSeoPage";
import { designGrowthSolutions } from "@/data/solutions/designGrowthSolutions";

import SeoGrowthClient from "./SeoGrowthClient";

const activeSlug = "seo-growth";

export const metadata = createSolutionMetadata({
  category: "design-growth",
  activeSlug,
  solutions: designGrowthSolutions,
});

export default function SeoGrowthPage() {
  return <SeoGrowthClient />;
}
