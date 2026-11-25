import { createSolutionMetadata } from "@/components/solutions/shared/SolutionSeoPage";
import { designGrowthSolutions } from "@/data/solutions/designGrowthSolutions";

import UiUxDesignClient from "./UiUxDesignClient";

const activeSlug = "ui-ux-design";

export const metadata = createSolutionMetadata({
  category: "design-growth",
  activeSlug,
  solutions: designGrowthSolutions,
});

export default function UiUxDesignPage() {
  return <UiUxDesignClient />;
}
