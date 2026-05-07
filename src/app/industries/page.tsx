import type { Metadata } from "next";
import Industries from "@/components/sections/industries";

export const metadata: Metadata = {
  title: "Industries | HNX",
  description:
    "Explore how HNX CRM Systems adapts to healthcare, real estate, education, manufacturing, retail, finance, insurance, travel, automobile, and service businesses with custom dashboards, workflows, reports, and integrations.",
};

export default function IndustriesPage() {
  return <Industries />;
}
