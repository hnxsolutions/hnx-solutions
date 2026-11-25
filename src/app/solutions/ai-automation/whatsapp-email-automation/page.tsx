import { createSolutionMetadata } from "@/components/solutions/shared/SolutionSeoPage";
import { aiAutomationSolutions } from "@/data/solutions/aiAutomationSolutions";

import WhatsappEmailAutomationClient from "./WhatsappEmailAutomationClient";

const activeSlug = "whatsapp-email-automation";

export const metadata = createSolutionMetadata({
  category: "ai-automation",
  activeSlug,
  solutions: aiAutomationSolutions,
});

export default function WhatsappEmailAutomationPage() {
  return <WhatsappEmailAutomationClient />;
}
