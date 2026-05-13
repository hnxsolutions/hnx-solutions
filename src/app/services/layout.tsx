import type { ReactNode } from "react";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "IT Services by HNX Solutions | Web, SaaS, CRM, AI & Mobile Apps",
  description:
    "Explore HNX Solutions services including web development, SaaS development, custom CRM systems, AI automation, mobile apps, cloud infrastructure, DevOps, UI/UX, SEO, and support.",
  path: "/services",
  keywords: [
    "IT services",
    "web development",
    "SaaS development",
    "custom CRM systems",
    "AI automation",
    "mobile apps",
    "cloud infrastructure",
    "DevOps",
    "UI UX design",
    "SEO analytics",
  ],
});

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
