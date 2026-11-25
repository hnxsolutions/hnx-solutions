import { createSolutionMetadata } from "@/components/solutions/shared/SolutionSeoPage";
import { cloudDevopsSolutions } from "@/data/solutions/cloudDevopsSolutions";

import CloudArchitectureClient from "./CloudArchitectureClient";

const activeSlug = "cloud-architecture";

export const metadata = createSolutionMetadata({
  category: "cloud-devops",
  activeSlug,
  solutions: cloudDevopsSolutions,
});

export default function CloudArchitecturePage() {
  return <CloudArchitectureClient />;
}
