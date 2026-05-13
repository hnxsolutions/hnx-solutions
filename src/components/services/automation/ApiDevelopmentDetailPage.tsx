import type { ServiceItem } from "@/data/services";
import { BookOpen, Braces, Database, KeyRound, LockKeyhole, PlugZap, ServerCog, Webhook } from "lucide-react";
import { ServiceDetailLayout, type ServiceHeroContent } from "@/components/services/shared/ServiceHeroShell";

type ApiDevelopmentDetailPageProps = {
  service: ServiceItem;
};

const content = {
  eyebrow: "API Development",
  headline: "Secure APIs that connect your apps, data, and platforms.",
  description:
    "Build reliable API layers with authentication, database design, webhooks, documentation, third-party integrations, and production-ready backend logic.",
  imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85",
  primaryCta: "Build My API",
  secondaryCta: "Review API Scope",
  accentClass: "from-blue-600 to-cyan-500",
  mockupTitle: "Backend layer for connected products",
  mockupSubtitle: "A secure API foundation for web apps, mobile apps, dashboards, payments, webhooks, and platform integrations.",
  stats: [
    { label: "REST API", value: "Clean", detail: "Endpoint design", icon: Braces },
    { label: "Auth", value: "Secure", detail: "Access control", icon: KeyRound },
    { label: "Webhooks", value: "Ready", detail: "Event handling", icon: Webhook },
    { label: "Docs", value: "Clear", detail: "Developer handoff", icon: BookOpen },
  ],
  visualLabels: [
    { label: "Server", value: "API architecture", icon: ServerCog },
    { label: "Database", value: "Structured models", icon: Database },
    { label: "Security", value: "Auth + roles", icon: LockKeyhole },
    { label: "Integrations", value: "Third-party APIs", icon: PlugZap },
    { label: "Events", value: "Webhook flows", icon: Webhook },
    { label: "Docs", value: "Endpoint guide", icon: BookOpen },
  ],
  highlights: [
    "API architecture planned before build starts.",
    "Authentication, roles, and validation built into core flows.",
    "Webhook and payment integrations handled cleanly.",
    "Documentation and testing included for maintainability.",
  ],
} satisfies ServiceHeroContent;

export default function ApiDevelopmentDetailPage({ service }: ApiDevelopmentDetailPageProps) {
  return <ServiceDetailLayout service={service} content={content} />;
}
