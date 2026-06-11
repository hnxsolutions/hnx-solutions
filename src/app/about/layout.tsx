import type { ReactNode } from "react";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About HNX Solutions | Digital Systems, CRM, AI & Industry Platforms",
  description:
    "Learn about HNX Solutions, a digital systems company building websites, mobile apps, custom CRM, portals, dashboards, AI automation, integrations, cloud deployment, and industry business suites.",
  path: "/about",
  keywords: [
    "about HNX Solutions",
    "HNX Technologies",
    "digital systems company",
    "CRM development company",
    "AI automation company",
    "business suite development",
    "industry digital platforms",
  ],
});

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
