import type { Metadata } from "next";
import FinanceCRMPage from "@/components/industries/FinanceCRMPage";

export const metadata: Metadata = {
  title: "Finance CRM Software | HNX CRM Systems",
  description:
    "Finance CRM for loan leads, KYC documents, eligibility stages, advisor tasks, approval pipelines, compliance records, and client follow-ups.",
  alternates: {
    canonical: "/industries/finance-crm",
  },
  openGraph: {
    title: "Finance CRM Software | HNX CRM Systems",
    description: "Manage finance leads, documents, KYC, approvals, advisor tasks, and renewal reminders in one CRM.",
  },
};

export default function Page() {
  return <FinanceCRMPage />;
}
