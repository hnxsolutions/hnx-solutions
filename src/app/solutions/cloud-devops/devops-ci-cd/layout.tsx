import type { ReactNode } from "react";

import { getSolutionSeo } from "@/data/solutions/solutionSeo";
import { createMetadata } from "@/lib/seo";

// Metadata lives here rather than in page.tsx because that page is a client
// component, and a client component cannot export `metadata`. A layout in the
// same folder is the pattern the CRM solution pages already use, and it leaves
// the page file untouched.
//
// Title and description come from the shared SEO entry, which takes both from
// this page's own copy.
const path = "/solutions/cloud-devops/devops-ci-cd";

export const metadata = (() => {
  const { entry, categoryLabel } = getSolutionSeo(path);

  return createMetadata({
    title: `${entry.label} | ${categoryLabel} by HNX Solutions`,
    description: entry.description,
    path: entry.path,
    keywords: [entry.label, categoryLabel, "HNX Solutions"],
  });
})();

export default function DevopsCiCdLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
