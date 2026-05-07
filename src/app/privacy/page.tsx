import type { Metadata } from "next";
import { PolicyPage } from "@/components/pages/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | HNX",
  description: "Privacy policy overview for HNX visitors and CRM consultation requests.",
};

export default function PrivacyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      description="This page explains how HNX handles information shared through website forms, CRM consultations, and service discussions."
      sections={[
        {
          title: "Information We Collect",
          text: "We may collect your name, work email, company name, phone number, CRM requirements, and related business context when you request a consultation or contact our team.",
        },
        {
          title: "How We Use Information",
          text: "We use submitted information to respond to enquiries, prepare CRM workflow discussions, recommend relevant plans, support onboarding, and improve our service communication.",
        },
        {
          title: "Data Protection",
          text: "We treat business information with care, limit access to authorized team members, and use secure workflows when handling CRM implementation discussions and support requests.",
        },
      ]}
    />
  );
}
