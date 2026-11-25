import { createSolutionMetadata } from "@/components/solutions/shared/SolutionSeoPage";
import { webSaasSolutions } from "@/data/solutions/webSaasSolutions";

import SaasPlatformClient from "./SaasPlatformClient";

const activeSlug = "saas-platform";

export const metadata = createSolutionMetadata({
  category: "web-saas",
  activeSlug,
  solutions: webSaasSolutions,
});

export default function SaasPlatformPage() {
  return <SaasPlatformClient />;
}
