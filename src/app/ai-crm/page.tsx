import type { Metadata } from "next";
import { ServiceTopicPage } from "@/components/pages/LightDetailPages";

export const metadata: Metadata = {
  title: "AI CRM Assistant | HNX",
  description:
    "Add AI CRM capabilities such as lead scoring, smart suggestions, message drafts, customer summaries, report explanation, and next-best-action recommendations.",
};

export default function AiCrmPage() {
  return <ServiceTopicPage topicKey="aiCrm" />;
}
