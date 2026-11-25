import { createSolutionMetadata } from "@/components/solutions/shared/SolutionSeoPage";
import { webSaasSolutions } from "@/data/solutions/webSaasSolutions";

import DigitalPresenceStrategyClient from "./DigitalPresenceStrategyClient";

const activeSlug = "digital-presence-strategy";

export const metadata = createSolutionMetadata({
  category: "web-saas",
  activeSlug,
  solutions: webSaasSolutions,
});

export default function DigitalPresenceStrategyPage() {
  return <DigitalPresenceStrategyClient />;
}
