import type { Metadata } from "next";
import { CompanyPage } from "@/components/pages/LightDetailPages";

export const metadata: Metadata = {
  title: "Company | HNX",
  description: "Learn about HNX, careers, CRM implementation thinking, and the HNX blog library.",
};

export default function Company() {
  return <CompanyPage />;
}
