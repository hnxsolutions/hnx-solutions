import { createSolutionMetadata, SolutionSeoPage } from "@/components/solutions/shared/SolutionSeoPage";
import { aiAutomationSolutions } from "@/data/solutions/aiAutomationSolutions";

const activeSlug = "ai-reports-insights";

export const metadata = createSolutionMetadata({
  category: "ai-automation",
  activeSlug,
  solutions: aiAutomationSolutions,
});

export default function AiReportsInsightsPage() {
  return (
    <SolutionSeoPage
      category="ai-automation"
      activeSlug={activeSlug}
      solutions={aiAutomationSolutions}
    />
  );
}