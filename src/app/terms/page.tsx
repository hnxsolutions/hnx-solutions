import type { Metadata } from "next";
import { PolicyPage } from "@/components/pages/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Service | HNX",
  description: "Terms of service overview for HNX website visitors and CRM consultation requests.",
};

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms of Service"
      description="These terms outline the basic conditions for using the HNX website, requesting consultations, and discussing CRM services."
      sections={[
        {
          title: "Website Use",
          text: "The HNX website is provided to explain CRM services, pricing, features, resources, and consultation options. Visitors should use it only for lawful business purposes.",
        },
        {
          title: "Consultation Requests",
          text: "A free CRM discussion helps assess workflow needs and possible fit. Final scope, pricing, timelines, integrations, and service terms are confirmed separately before implementation.",
        },
        {
          title: "Service Changes",
          text: "HNX may update website content, plan details, resources, and product descriptions as features, integrations, and service offerings evolve.",
        },
      ]}
    />
  );
}
