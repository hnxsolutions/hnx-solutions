import type { ReactNode } from "react";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About HNX Solutions | Digital Systems, CRM & Automation Company",
  description:
    "Learn about HNX Solutions, an IT services and digital solutions company building custom CRM systems, AI automation, SaaS platforms, websites, mobile apps, and business workflows.",
  path: "/about",
  keywords: ["about HNX Solutions", "HNX Technologies", "digital solutions company", "CRM development company"],
});

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
