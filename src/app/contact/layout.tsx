import type { ReactNode } from "react";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact HNX Solutions | Start Your CRM, SaaS, AI or App Project",
  description:
    "Contact HNX Solutions to discuss custom CRM development, AI automation, SaaS platforms, websites, mobile apps, workflow automation, cloud infrastructure, and digital growth systems.",
  path: "/contact",
  keywords: [
    "contact HNX Solutions",
    "CRM consultation",
    "AI automation consultation",
    "SaaS project quote",
    "web development company India",
  ],
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
