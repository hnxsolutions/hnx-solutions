import { createSolutionMetadata, SolutionSeoPage } from "@/components/solutions/shared/SolutionSeoPage";
import { webSaasSolutions } from "@/data/solutions/webSaasSolutions";

const activeSlug = "admin-dashboard";

export const metadata = createSolutionMetadata({
  category: "web-saas",
  activeSlug,
  solutions: webSaasSolutions,
});

export default function AdminDashboardPage() {
  return (
    <SolutionSeoPage
      category="web-saas"
      activeSlug={activeSlug}
      solutions={webSaasSolutions}
    />
  );
}