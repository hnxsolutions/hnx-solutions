import type { Metadata } from "next";
import EducationCRMPage from "@/components/industries/EducationCRMPage";

export const metadata: Metadata = {
  title: "Education CRM Software | HNX CRM Systems",
  description:
    "Education CRM for admissions, student enquiries, counselors, demo classes, batches, fee follow-ups, parent communication, and growth.",
  alternates: {
    canonical: "/industries/education-crm",
  },
  openGraph: {
    title: "Education CRM Software | HNX CRM Systems",
    description: "Manage admissions, counselors, demo classes, batches, student records, and fee follow-ups in one CRM.",
  },
};

export default function Page() {
  return <EducationCRMPage />;
}
