import type { ReactNode } from "react";
import { CrmSolutionSeoLayout, createCrmSolutionMetadata } from "@/components/solutions/shared/CrmSolutionSeoLayout";

const slug = "workflow-engine";

export const metadata = createCrmSolutionMetadata(slug);

export default function WorkflowEngineLayout({ children }: { children: ReactNode }) {
  return <CrmSolutionSeoLayout slug={slug}>{children}</CrmSolutionSeoLayout>;
}
