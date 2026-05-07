import type { Metadata } from "next";
import ManufacturingCRMPage from "@/components/industries/ManufacturingCRMPage";

export const metadata: Metadata = {
  title: "Manufacturing CRM Software | HNX CRM Systems",
  description:
    "Manufacturing CRM for RFQs, quotations, dealers, distributors, orders, production follow-ups, dispatches, service requests, and B2B sales.",
  alternates: {
    canonical: "/industries/manufacturing-crm",
  },
  openGraph: {
    title: "Manufacturing CRM Software | HNX CRM Systems",
    description: "Manage B2B sales, quotations, orders, dealers, production coordination, and dispatch workflows.",
  },
};

export default function Page() {
  return <ManufacturingCRMPage />;
}
