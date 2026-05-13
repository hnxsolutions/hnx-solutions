import { createSolutionMetadata, SolutionSeoPage } from "@/components/solutions/shared/SolutionSeoPage";
import { cloudDevopsSolutions } from "@/data/solutions/cloudDevopsSolutions";

const activeSlug = "server-setup";

export const metadata = createSolutionMetadata({
  category: "cloud-devops",
  activeSlug,
  solutions: cloudDevopsSolutions,
});

export default function ServerSetupPage() {
  return (
    <SolutionSeoPage
      category="cloud-devops"
      activeSlug={activeSlug}
      solutions={cloudDevopsSolutions}
    />
  );
}