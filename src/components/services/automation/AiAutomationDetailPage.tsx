import type { ServiceItem } from "@/data/services";
import { Bot, Brain, FileText, MessageCircle, Radio, Sparkles, Target, Workflow } from "lucide-react";
import { ServiceDetailLayout, type ServiceHeroContent } from "@/components/services/shared/ServiceHeroShell";

type AiAutomationDetailPageProps = {
  service: ServiceItem;
};

const content = {
  eyebrow: "AI Automation",
  headline: "AI workflows that reduce manual work & speed up operations.",
  description:
    "Use practical AI assistants, scoring, summaries, replies, and workflow triggers to help your team respond faster without losing control.",
  imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=85",
  primaryCta: "Automate With AI",
  secondaryCta: "See AI Workflows",
  accentClass: "from-violet-600 to-fuchsia-500",
  mockupTitle: "AI-assisted business workflow",
  mockupSubtitle: "A controlled AI layer for lead handling, support replies, document summaries, and next-best actions.",
  stats: [
    { label: "Lead Score", value: "AI", detail: "Priority signals", icon: Target },
    { label: "Auto Replies", value: "Drafted", detail: "Human-reviewed", icon: MessageCircle },
    { label: "Triggers", value: "Smart", detail: "Workflow actions", icon: Workflow },
    { label: "Insights", value: "Live", detail: "Decision support", icon: Brain },
  ],
  visualLabels: [
    { label: "Assistant", value: "Internal AI copilot", icon: Bot },
    { label: "Messages", value: "Reply suggestions", icon: MessageCircle },
    { label: "Docs", value: "Summaries", icon: FileText },
    { label: "Signals", value: "Opportunity alerts", icon: Radio },
    { label: "Scoring", value: "Lead priority", icon: Target },
    { label: "Actions", value: "Workflow handoff", icon: Sparkles },
  ],
  highlights: [
    "AI workflows mapped to real repetitive work.",
    "Guardrails and review points for business control.",
    "Lead scoring, summaries, and replies connected to your systems.",
    "Automation triggers that turn AI output into action.",
  ],
} satisfies ServiceHeroContent;

export default function AiAutomationDetailPage({ service }: AiAutomationDetailPageProps) {
  return <ServiceDetailLayout service={service} content={content} />;
}
