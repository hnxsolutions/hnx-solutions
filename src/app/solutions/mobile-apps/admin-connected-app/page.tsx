import { createSolutionMetadata } from "@/components/solutions/shared/SolutionSeoPage";
import { mobileAppSolutions } from "@/data/solutions/mobileAppSolutions";

import AdminConnectedAppClient from "./AdminConnectedAppClient";

const activeSlug = "admin-connected-app";

export const metadata = createSolutionMetadata({
  category: "mobile-apps",
  activeSlug,
  solutions: mobileAppSolutions,
});

export default function AdminConnectedAppPage() {
  return <AdminConnectedAppClient />;
}
