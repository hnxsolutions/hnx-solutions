import type { Metadata } from "next";
import ServiceBusinessCRMPage from "@/components/industries/ServiceBusinessCRMPage";

export const metadata: Metadata = {
  title: "Service Business CRM Software | HNX CRM Systems",
  description:
    "Service business CRM for leads, quotes, tickets, tasks, staff schedules, client follow-ups, invoices, payments, and project status.",
  alternates: {
    canonical: "/industries/service-business-crm",
  },
  openGraph: {
    title: "Service Business CRM Software | HNX CRM Systems",
    description: "Manage service inquiries, quotations, tickets, tasks, clients, schedules, invoices, and follow-ups.",
  },
};

export default function Page() {
  return <ServiceBusinessCRMPage />;
}
