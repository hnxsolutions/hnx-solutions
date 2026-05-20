import type { ServiceItem } from "@/data/services";
import { Bug, Gauge, Headphones, LifeBuoy, MonitorCheck, RefreshCw, ShieldCheck, TicketCheck } from "lucide-react";
import { ServiceDetailLayout, type ServiceHeroContent } from "@/components/services/shared/ServiceHeroShell";

type MaintenanceSupportDetailPageProps = {
  service: ServiceItem;
};

const content = {
  eyebrow: "Maintenance & Support",
  headline: "Reliable support that keeps your digital products healthy.",
  description:
    "Keep websites, apps, CRM, SaaS, and dashboards stable with bug fixes, updates, uptime checks, and performance improvements.",
  imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=85",
  primaryCta: "Request Support",
  secondaryCta: "See Support Scope",
  accentClass: "from-orange-500 to-amber-500",
  mockupTitle: "Support desk for live products",
  mockupSubtitle: "A maintenance workflow for tickets, uptime, updates, bug fixes, performance checks, and support reporting.",
  stats: [
    { label: "Tickets", value: "Tracked", detail: "Support flow", icon: TicketCheck },
    { label: "Uptime", value: "Monitored", detail: "Health checks", icon: MonitorCheck },
    { label: "Fixes", value: "Priority", detail: "Bug resolution", icon: Bug },
    { label: "Updates", value: "Safe", detail: "Change control", icon: RefreshCw },
  ],
  visualLabels: [
    { label: "Helpdesk", value: "Support queue", icon: Headphones },
    { label: "Bugs", value: "Issue tracking", icon: Bug },
    { label: "Health", value: "Uptime alerts", icon: MonitorCheck },
    { label: "Speed", value: "Performance review", icon: Gauge },
    { label: "Security", value: "Update checks", icon: ShieldCheck },
    { label: "Care", value: "Priority support", icon: LifeBuoy },
  ],
  highlights: [
    "Monthly support plans for live websites, apps, SaaS, and CRM systems.",
    "Bug tracking, fixes, and update logs kept visible.",
    "Uptime and performance checks reduce post-launch uncertainty.",
    "Priority technical support for improvements and product care.",
  ],
} satisfies ServiceHeroContent;

export default function MaintenanceSupportDetailPage({ service }: MaintenanceSupportDetailPageProps) {
  return <ServiceDetailLayout service={service} content={content} />;
}
