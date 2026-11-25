import { createSolutionMetadata } from "@/components/solutions/shared/SolutionSeoPage";
import { webSaasSolutions } from "@/data/solutions/webSaasSolutions";

import AnalyticsGrowthTrackingClient from "./AnalyticsGrowthTrackingClient";

const activeSlug = "analytics-growth-tracking";

export const metadata = createSolutionMetadata({
  category: "web-saas",
  activeSlug,
  solutions: webSaasSolutions,
});

export default function AnalyticsGrowthTrackingPage() {
  return <AnalyticsGrowthTrackingClient />;
}
