import type { Metadata } from "next";
import RetailCRMPage from "@/components/industries/RetailCRMPage";

export const metadata: Metadata = {
  title: "Retail CRM Software | HNX CRM Systems",
  description:
    "Retail CRM for customers, loyalty, offers, purchase history, campaigns, support tickets, store performance, and repeat sales.",
  alternates: {
    canonical: "/industries/retail-crm",
  },
  openGraph: {
    title: "Retail CRM Software | HNX CRM Systems",
    description: "Increase repeat customers with retail CRM workflows for loyalty, campaigns, support, and store reports.",
  },
};

export default function Page() {
  return <RetailCRMPage />;
}
