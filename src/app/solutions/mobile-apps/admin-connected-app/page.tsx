import { createSolutionMetadata, SolutionSeoPage } from "@/components/solutions/shared/SolutionSeoPage";
import { mobileAppSolutions } from "@/data/solutions/mobileAppSolutions";

const activeSlug = "admin-connected-app";

export const metadata = createSolutionMetadata({
  category: "mobile-apps",
  activeSlug,
  solutions: mobileAppSolutions,
});

export default function AdminConnectedAppPage() {
  return (
    <SolutionSeoPage
      category="mobile-apps"
      activeSlug={activeSlug}
      solutions={mobileAppSolutions}
    />
  );
}