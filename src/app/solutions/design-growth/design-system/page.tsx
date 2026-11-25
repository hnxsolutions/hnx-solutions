import { createSolutionMetadata } from "@/components/solutions/shared/SolutionSeoPage";
import { designGrowthSolutions } from "@/data/solutions/designGrowthSolutions";

import DesignSystemClient from "./DesignSystemClient";

const activeSlug = "design-system";

export const metadata = createSolutionMetadata({
  category: "design-growth",
  activeSlug,
  solutions: designGrowthSolutions,
});

export default function DesignSystemPage() {
  return <DesignSystemClient />;
}
