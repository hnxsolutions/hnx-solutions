import { createSolutionMetadata } from "@/components/solutions/shared/SolutionSeoPage";
import { webSaasSolutions } from "@/data/solutions/webSaasSolutions";

import AdminDashboardClient from "./AdminDashboardClient";

const activeSlug = "admin-dashboard";

export const metadata = createSolutionMetadata({
  category: "web-saas",
  activeSlug,
  solutions: webSaasSolutions,
});

export default function AdminDashboardPage() {
  return <AdminDashboardClient />;
}
