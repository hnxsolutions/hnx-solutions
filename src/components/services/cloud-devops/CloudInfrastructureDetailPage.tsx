import type { ServiceItem } from "@/data/services";
import { Cloud, Database, HardDrive, Network, ServerCog, ShieldCheck, Signal, UploadCloud } from "lucide-react";
import { ServiceDetailLayout, type ServiceHeroContent } from "@/components/services/shared/ServiceHeroShell";

type CloudInfrastructureDetailPageProps = {
  service: ServiceItem;
};

const content = {
  eyebrow: "Cloud Infrastructure",
  headline: "Cloud infrastructure built for speed, security, and scale.",
  description:
    "Plan and deploy hosting, databases, storage, CDN, backups, monitoring, and cost-aware scaling for websites, apps, SaaS, and CRM systems.",
  imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
  primaryCta: "Plan Cloud Setup",
  secondaryCta: "Explore Cloud Scope",
  accentClass: "from-sky-600 to-blue-600",
  mockupTitle: "Cloud architecture for growing products",
  mockupSubtitle: "A production foundation with app hosting, databases, storage, CDN, backups, and monitoring.",
  stats: [
    { label: "Hosting", value: "Stable", detail: "App servers", icon: ServerCog },
    { label: "Database", value: "Managed", detail: "Structured storage", icon: Database },
    { label: "Backups", value: "Planned", detail: "Recovery support", icon: HardDrive },
    { label: "Scaling", value: "Ready", detail: "Growth path", icon: Signal },
  ],
  visualLabels: [
    { label: "Cloud", value: "Production hosting", icon: Cloud },
    { label: "Data", value: "Database setup", icon: Database },
    { label: "Storage", value: "Files + backups", icon: HardDrive },
    { label: "CDN", value: "Fast delivery", icon: Network },
    { label: "Security", value: "Access controls", icon: ShieldCheck },
    { label: "Deploy", value: "Cloud rollout", icon: UploadCloud },
  ],
  highlights: [
    "Architecture planned for your current product and future growth.",
    "Database, storage, CDN, backup, and monitoring decisions clarified.",
    "Security and access controls included in the foundation.",
    "Cost-aware setup avoids overbuilding too early.",
  ],
} satisfies ServiceHeroContent;

export default function CloudInfrastructureDetailPage({ service }: CloudInfrastructureDetailPageProps) {
  return <ServiceDetailLayout service={service} content={content} />;
}
