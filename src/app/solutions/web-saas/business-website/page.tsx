import { createSolutionMetadata } from "@/components/solutions/shared/SolutionSeoPage";
import { webSaasSolutions } from "@/data/solutions/webSaasSolutions";

import BusinessWebsiteClient from "./BusinessWebsiteClient";

const activeSlug = "business-website";

export const metadata = createSolutionMetadata({
  category: "web-saas",
  activeSlug,
  solutions: webSaasSolutions,
});

export default function BusinessWebsitePage() {
  return <BusinessWebsiteClient />;
}
