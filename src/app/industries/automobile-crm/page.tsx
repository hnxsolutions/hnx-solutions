import type { Metadata } from "next";
import AutomobileCRMPage from "@/components/industries/AutomobileCRMPage";

export const metadata: Metadata = {
  title: "Automobile CRM Software | HNX CRM Systems",
  description:
    "Automobile CRM for vehicle inquiries, test drives, bookings, service reminders, finance follow-ups, customer records, and showroom performance.",
  alternates: {
    canonical: "/industries/automobile-crm",
  },
  openGraph: {
    title: "Automobile CRM Software | HNX CRM Systems",
    description: "Manage automobile sales, test drives, bookings, service reminders, finance follow-ups, and showroom reports.",
  },
};

export default function Page() {
  return <AutomobileCRMPage />;
}
