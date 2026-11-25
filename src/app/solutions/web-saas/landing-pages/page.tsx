import { createSolutionMetadata } from "@/components/solutions/shared/SolutionSeoPage";
import { webSaasSolutions } from "@/data/solutions/webSaasSolutions";

import LandingPagesClient from "./LandingPagesClient";

const activeSlug = "landing-pages";

export const metadata = createSolutionMetadata({
  category: "web-saas",
  activeSlug,
  solutions: webSaasSolutions,
});

export default function LandingPagesPage() {
  return <LandingPagesClient />;
}
