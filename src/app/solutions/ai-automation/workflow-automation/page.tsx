import { createSolutionMetadata } from "@/components/solutions/shared/SolutionSeoPage";
import { aiAutomationSolutions } from "@/data/solutions/aiAutomationSolutions";

import WorkflowAutomationClient from "./WorkflowAutomationClient";

const activeSlug = "workflow-automation";

export const metadata = createSolutionMetadata({
  category: "ai-automation",
  activeSlug,
  solutions: aiAutomationSolutions,
});

export default function WorkflowAutomationPage() {
  return <WorkflowAutomationClient />;
}
