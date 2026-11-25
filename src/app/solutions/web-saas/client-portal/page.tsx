import { createSolutionMetadata } from "@/components/solutions/shared/SolutionSeoPage";
import { webSaasSolutions } from "@/data/solutions/webSaasSolutions";

import ClientPortalClient from "./ClientPortalClient";

const activeSlug = "client-portal";

export const metadata = createSolutionMetadata({
  category: "web-saas",
  activeSlug,
  solutions: webSaasSolutions,
});

export default function ClientPortalPage() {
  return <ClientPortalClient />;
}
