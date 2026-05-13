import type { ReactNode } from "react";
import { CrmSolutionSeoLayout, createCrmSolutionMetadata } from "@/components/solutions/shared/CrmSolutionSeoLayout";

const slug = "crmcore";

export const metadata = createCrmSolutionMetadata(slug);

export default function CrmCoreLayout({ children }: { children: ReactNode }) {
  return <CrmSolutionSeoLayout slug={slug}>{children}</CrmSolutionSeoLayout>;
}
