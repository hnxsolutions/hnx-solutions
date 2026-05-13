import type { ReactNode } from "react";
import { CrmSolutionSeoLayout, createCrmSolutionMetadata } from "@/components/solutions/shared/CrmSolutionSeoLayout";

const slug = "dashboards-reports";

export const metadata = createCrmSolutionMetadata(slug);

export default function DashboardsReportsLayout({ children }: { children: ReactNode }) {
  return <CrmSolutionSeoLayout slug={slug}>{children}</CrmSolutionSeoLayout>;
}
