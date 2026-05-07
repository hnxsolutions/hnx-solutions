import type { Metadata } from "next";
import RealEstateCRMPage from "@/components/industries/RealEstateCRMPage";

export const metadata: Metadata = {
  title: "Real Estate CRM Software | HNX CRM Systems",
  description:
    "Real estate CRM for property leads, site visits, brokers, inventory, follow-ups, documents, payment stages, and deal management.",
  alternates: {
    canonical: "/industries/real-estate-crm",
  },
  openGraph: {
    title: "Real Estate CRM Software | HNX CRM Systems",
    description: "Close more property deals with CRM workflows for leads, site visits, brokers, inventory, and payments.",
  },
};

export default function Page() {
  return <RealEstateCRMPage />;
}
