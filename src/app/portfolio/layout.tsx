import type { ReactNode } from "react";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HNX Solutions Portfolio | CRM, Web, SaaS, Automation & App Work",
  description:
    "Explore HNX Solutions portfolio work across custom CRM systems, websites, SaaS platforms, AI automation, dashboards, mobile apps, and digital business systems.",
  path: "/portfolio",
  keywords: ["HNX portfolio", "CRM portfolio", "SaaS portfolio", "web development portfolio", "automation projects"],
});

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return children;
}
