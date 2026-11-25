import IndustryMobileAppPage from '@/components/industries/shared/mobile-app-shared/IndustryMobileAppPage';
import { getHealthcareSolution } from "@/components/industries/healthcare/healthcareData";
import { createMetadata } from "@/lib/seo";

// This static segment wins over the sibling [solutionType] route — in the App
// Router a literal path always takes precedence over a dynamic one — so it is
// this file that serves /industries/healthcare/mobile-app, and it carried no
// metadata at all. The page therefore inherited the site-wide title and had no
// canonical.
//
// The route is left exactly where it is: [solutionType] renders a different
// component for this slug, so removing or renaming either one would change the
// page that visitors currently see. Only the missing metadata is added, and its
// wording comes from the same healthcareData entry the dynamic route would have
// used, so both paths describe the page identically.
const solution = getHealthcareSolution("mobile-app");

export const metadata = createMetadata({
  title: `${solution?.title ?? "Healthcare Mobile App"} | HNX Solutions`,
  description: solution?.description,
  path: "/industries/healthcare/mobile-app",
  keywords: [
    solution?.title ?? "Healthcare Mobile App",
    "healthcare digital solution",
    "healthcare software",
    "HNX Solutions",
  ],
});

export default function HealthcareMobileAppPage() {
  return <IndustryMobileAppPage industrySlug="healthcare" solutionSlug="mobile-app" />;
}
