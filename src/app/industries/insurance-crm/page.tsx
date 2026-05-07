import type { Metadata } from "next";
import InsuranceCRMPage from "@/components/industries/InsuranceCRMPage";

export const metadata: Metadata = {
  title: "Insurance CRM Software | HNX CRM Systems",
  description:
    "Insurance CRM for leads, policies, renewals, premium reminders, claims support, agent performance, and customer communication.",
  alternates: {
    canonical: "/industries/insurance-crm",
  },
  openGraph: {
    title: "Insurance CRM Software | HNX CRM Systems",
    description: "Manage policies, renewals, claims, premium follow-ups, agents, and customer communication in one CRM.",
  },
};

export default function Page() {
  return <InsuranceCRMPage />;
}
