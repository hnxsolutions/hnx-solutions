import { createSolutionMetadata, SolutionSeoPage } from "@/components/solutions/shared/SolutionSeoPage";
import { aiAutomationSolutions } from "@/data/solutions/aiAutomationSolutions";

const activeSlug = "whatsapp-email-automation";

export const metadata = createSolutionMetadata({
  category: "ai-automation",
  activeSlug,
  solutions: aiAutomationSolutions,
});

export default function WhatsappEmailAutomationPage() {
  return (
    <SolutionSeoPage
      category="ai-automation"
      activeSlug={activeSlug}
      solutions={aiAutomationSolutions}
    />
  );
}