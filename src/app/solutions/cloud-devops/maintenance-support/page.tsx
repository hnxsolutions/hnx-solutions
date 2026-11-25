import { createSolutionMetadata } from "@/components/solutions/shared/SolutionSeoPage";
import { cloudDevopsSolutions } from "@/data/solutions/cloudDevopsSolutions";

import MaintenanceSupportClient from "./MaintenanceSupportClient";

const activeSlug = "maintenance-support";

export const metadata = createSolutionMetadata({
  category: "cloud-devops",
  activeSlug,
  solutions: cloudDevopsSolutions,
});

export default function MaintenanceSupportPage() {
  return <MaintenanceSupportClient />;
}
