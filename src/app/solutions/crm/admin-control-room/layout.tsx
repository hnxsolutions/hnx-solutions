import type { ReactNode } from "react";
import { CrmSolutionSeoLayout, createCrmSolutionMetadata } from "@/components/solutions/shared/CrmSolutionSeoLayout";

const slug = "admin-control-room";

export const metadata = createCrmSolutionMetadata(slug);

export default function AdminControlRoomLayout({ children }: { children: ReactNode }) {
  return <CrmSolutionSeoLayout slug={slug}>{children}</CrmSolutionSeoLayout>;
}
