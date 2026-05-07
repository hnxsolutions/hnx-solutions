import type { Metadata } from "next";
import { ResourcesPage as ResourcesDetailPage } from "@/components/pages/LightDetailPages";

export const metadata: Metadata = {
  title: "Resources | HNX",
  description: "HNX guides, webinars, help center resources, and CRM use cases for sales teams.",
};

export default function ResourcesPage() {
  return <ResourcesDetailPage />;
}
