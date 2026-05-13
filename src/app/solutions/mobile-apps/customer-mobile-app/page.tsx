import { createSolutionMetadata, SolutionSeoPage } from "@/components/solutions/shared/SolutionSeoPage";
import { mobileAppSolutions } from "@/data/solutions/mobileAppSolutions";

const activeSlug = "customer-mobile-app";

export const metadata = createSolutionMetadata({
  category: "mobile-apps",
  activeSlug,
  solutions: mobileAppSolutions,
});

export default function CustomerMobileAppPage() {
  return (
    <SolutionSeoPage
      category="mobile-apps"
      activeSlug={activeSlug}
      solutions={mobileAppSolutions}
    />
  );
}