import type { ServiceItem } from "@/data/services";
import { BarChart3, CreditCard, Mail, MessageCircle, PlugZap, RefreshCw, Sheet, Workflow } from "lucide-react";
import { ServiceDetailLayout, type ServiceHeroContent } from "@/components/services/shared/ServiceHeroShell";

type IntegrationServicesDetailPageProps = {
  service: ServiceItem;
};

const content = {
  eyebrow: "Integration Services",
  headline: "Connected tools, synced data & cleaner business workflows.",
  description:
    "Connect CRMs, payments, WhatsApp, email, analytics, spreadsheets, APIs, and business tools so data moves automatically across your workflow.",
  imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=85",
  primaryCta: "Connect My Tools",
  secondaryCta: "Map Integrations",
  accentClass: "from-cyan-600 to-blue-600",
  mockupTitle: "Integration hub for daily operations",
  mockupSubtitle: "A connected workflow where payments, leads, messages, reports, and records sync without manual copying.",
  stats: [
    { label: "Apps", value: "Synced", detail: "Connected systems", icon: PlugZap },
    { label: "Payments", value: "Live", detail: "Gateway flows", icon: CreditCard },
    { label: "Messages", value: "Auto", detail: "WhatsApp/email", icon: MessageCircle },
    { label: "Reports", value: "Unified", detail: "Analytics data", icon: BarChart3 },
  ],
  visualLabels: [
    { label: "CRM", value: "Record sync", icon: RefreshCw },
    { label: "Payments", value: "Gateway updates", icon: CreditCard },
    { label: "Email", value: "Campaign flows", icon: Mail },
    { label: "WhatsApp", value: "Message triggers", icon: MessageCircle },
    { label: "Sheets", value: "Data handoff", icon: Sheet },
    { label: "Workflow", value: "Automation bridge", icon: Workflow },
  ],
  highlights: [
    "Manual copy-paste replaced with reliable data sync.",
    "CRM, payment, email, WhatsApp, and analytics tools connected.",
    "Error handling and validation included for cleaner operations.",
    "Reports become more reliable because data moves automatically.",
  ],
} satisfies ServiceHeroContent;

export default function IntegrationServicesDetailPage({ service }: IntegrationServicesDetailPageProps) {
  return <ServiceDetailLayout service={service} content={content} />;
}
