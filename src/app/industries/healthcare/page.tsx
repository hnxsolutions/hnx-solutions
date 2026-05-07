import type { Metadata } from "next";
import HealthcareCRMPage from "@/components/industries/HealthcareCRMPage";

export const metadata: Metadata = {
  title: "Healthcare CRM Software | HNX CRM Systems",
  description:
    "Healthcare CRM by HNX for patient inquiries, appointments, follow-ups, staff workflows, reports, integrations, and patient communication automation.",
  alternates: {
    canonical: "/industries/healthcare-crm",
  },
  openGraph: {
    title: "Healthcare CRM Software | HNX CRM Systems",
    description:
      "Manage patients, appointments, staff, communication, follow-ups, and healthcare workflows in one CRM.",
  },
};

export default function Page() {
  return <HealthcareCRMPage />;
}
