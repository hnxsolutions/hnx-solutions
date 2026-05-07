"use client";

import type { DemoIndustry } from "@/components/crm-demo/demoData";
import { WorkspaceSummaryCard } from "@/components/crm-demo/workspace/panels/WorkspaceSummaryCard";

export function WorkspaceExportTab({ industry, showToast }: { industry: DemoIndustry; showToast: (message: string) => void }) {
  return <WorkspaceSummaryCard industry={industry} showToast={showToast} />;
}

