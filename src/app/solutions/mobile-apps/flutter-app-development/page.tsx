import { createSolutionMetadata } from "@/components/solutions/shared/SolutionSeoPage";
import { mobileAppSolutions } from "@/data/solutions/mobileAppSolutions";

import FlutterAppDevelopmentClient from "./FlutterAppDevelopmentClient";

const activeSlug = "flutter-app-development";

export const metadata = createSolutionMetadata({
  category: "mobile-apps",
  activeSlug,
  solutions: mobileAppSolutions,
});

export default function FlutterAppDevelopmentPage() {
  return <FlutterAppDevelopmentClient />;
}
