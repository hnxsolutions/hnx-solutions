import type { ReactNode } from "react";
import { CrmSolutionSeoLayout, createCrmSolutionMetadata } from "@/components/solutions/shared/CrmSolutionSeoLayout";

const slug = "business-os";

export const metadata = createCrmSolutionMetadata(slug);

export default function BusinessOsLayout({ children }: { children: ReactNode }) {
  return <CrmSolutionSeoLayout slug={slug}>{children}</CrmSolutionSeoLayout>;
}
