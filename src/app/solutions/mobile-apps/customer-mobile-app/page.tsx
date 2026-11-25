import { createSolutionMetadata } from "@/components/solutions/shared/SolutionSeoPage";
import { mobileAppSolutions } from "@/data/solutions/mobileAppSolutions";

import CustomerMobileAppClient from "./CustomerMobileAppClient";

const activeSlug = "customer-mobile-app";

export const metadata = createSolutionMetadata({
  category: "mobile-apps",
  activeSlug,
  solutions: mobileAppSolutions,
});

export default function CustomerMobileAppPage() {
  return <CustomerMobileAppClient />;
}
