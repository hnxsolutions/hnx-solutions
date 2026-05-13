import { createSolutionMetadata, SolutionSeoPage } from "@/components/solutions/shared/SolutionSeoPage";
import { aiAutomationSolutions } from "@/data/solutions/aiAutomationSolutions";

const activeSlug = "document-automation";

export const metadata = createSolutionMetadata({
  category: "ai-automation",
  activeSlug,
  solutions: aiAutomationSolutions,
});

export default function DocumentAutomationPage() {
  return (
    <SolutionSeoPage
      category="ai-automation"
      activeSlug={activeSlug}
      solutions={aiAutomationSolutions}
    />
  );
}