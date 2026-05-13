import { createSolutionMetadata, SolutionSeoPage } from "@/components/solutions/shared/SolutionSeoPage";
import { cloudDevopsSolutions } from "@/data/solutions/cloudDevopsSolutions";

const activeSlug = "cloud-architecture";

export const metadata = createSolutionMetadata({
  category: "cloud-devops",
  activeSlug,
  solutions: cloudDevopsSolutions,
});

export default function CloudArchitecturePage() {
  return (
    <SolutionSeoPage
      category="cloud-devops"
      activeSlug={activeSlug}
      solutions={cloudDevopsSolutions}
    />
  );
}