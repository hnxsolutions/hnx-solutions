import { createSolutionMetadata, SolutionSeoPage } from "@/components/solutions/shared/SolutionSeoPage";
import { cloudDevopsSolutions } from "@/data/solutions/cloudDevopsSolutions";

const activeSlug = "monitoring-logs";

export const metadata = createSolutionMetadata({
  category: "cloud-devops",
  activeSlug,
  solutions: cloudDevopsSolutions,
});

export default function MonitoringLogsPage() {
  return (
    <SolutionSeoPage
      category="cloud-devops"
      activeSlug={activeSlug}
      solutions={cloudDevopsSolutions}
    />
  );
}