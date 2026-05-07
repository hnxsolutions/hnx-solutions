import type { Metadata } from "next";
import TravelCRMPage from "@/components/industries/TravelCRMPage";

export const metadata: Metadata = {
  title: "Travel CRM Software | HNX CRM Systems",
  description:
    "Travel CRM for travel enquiries, package quotes, itineraries, visa documents, bookings, payment follow-ups, and customer communication.",
  alternates: {
    canonical: "/industries/travel-crm",
  },
  openGraph: {
    title: "Travel CRM Software | HNX CRM Systems",
    description: "Manage travel packages, itineraries, visa documents, bookings, payments, and follow-ups in one CRM.",
  },
};

export default function Page() {
  return <TravelCRMPage />;
}
