import { createSolutionMetadata, SolutionSeoPage } from "@/components/solutions/shared/SolutionSeoPage";
import { cloudDevopsSolutions } from "@/data/solutions/cloudDevopsSolutions";

const activeSlug = "backup-recovery";

export const metadata = createSolutionMetadata({
  category: "cloud-devops",
  activeSlug,
  solutions: cloudDevopsSolutions,
});

export default function BackupRecoveryPage() {
  return (
    <SolutionSeoPage
      category="cloud-devops"
      activeSlug={activeSlug}
      solutions={cloudDevopsSolutions}
    />
  );
}