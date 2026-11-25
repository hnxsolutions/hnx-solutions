import { createSolutionMetadata } from "@/components/solutions/shared/SolutionSeoPage";
import { mobileAppSolutions } from "@/data/solutions/mobileAppSolutions";

import AppStrategyClient from "./AppStrategyClient";

const activeSlug = "app-strategy";

export const metadata = createSolutionMetadata({
  category: "mobile-apps",
  activeSlug,
  solutions: mobileAppSolutions,
});

export default function AppStrategyPage() {
  return <AppStrategyClient />;
}
