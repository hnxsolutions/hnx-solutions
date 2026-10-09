import type { Metadata } from "next";
import { CompanyPage } from "@/components/pages/LightDetailPages";

export const metadata: Metadata = {
  title: "Company | HNX",
  description: "Learn about HNX, careers, CRM implementation thinking, and the HNX blog library.",

  alternates: {
    canonical: "https://hnxsolutions.com/company",
  },
  openGraph: {
    title: "Company | HNX",
    description: "Learn about HNX, careers, CRM implementation thinking, and the HNX blog library.",
    url: "https://hnxsolutions.com/company",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Company | HNX",
    description: "Learn about HNX, careers, CRM implementation thinking, and the HNX blog library.",
  },
};

export default function Company() {
  return <CompanyPage />;
}
