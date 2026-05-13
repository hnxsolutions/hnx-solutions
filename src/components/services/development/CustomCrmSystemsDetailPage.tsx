import type { ServiceItem } from "@/data/services";
import { BarChart3, Bell, Building2, Filter, ShieldCheck, Users, Workflow, Zap } from "lucide-react";
import { ServiceDetailLayout, type ServiceHeroContent } from "@/components/services/shared/ServiceHeroShell";

type CustomCrmSystemsDetailPageProps = {
  service: ServiceItem;
};

const content = {
  eyebrow: "Custom CRM Systems",
  headline: "Custom CRM systems built around your real sales workflow.",
  description:
    "Replace scattered spreadsheets and generic CRM limits with an owned system for leads, customers, tasks, reports, permissions, and automation.",
  imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85",
  primaryCta: "Map My CRM",
  secondaryCta: "View CRM Modules",
  accentClass: "from-sky-600 to-cyan-500",
  mockupTitle: "Owned CRM operating layer",
  mockupSubtitle: "A business-specific CRM with pipeline visibility, customer context, follow-ups, reports, and role control.",
  stats: [
    { label: "Leads", value: "360°", detail: "Unified records", icon: Users },
    { label: "Pipeline", value: "Live", detail: "Deal visibility", icon: Filter },
    { label: "Roles", value: "Secure", detail: "Permission control", icon: ShieldCheck },
    { label: "Reports", value: "Real-time", detail: "Business clarity", icon: BarChart3 },
  ],
  visualLabels: [
    { label: "Leads", value: "Capture & qualify", icon: Users },
    { label: "Accounts", value: "Customer profiles", icon: Building2 },
    { label: "Automation", value: "Follow-up rules", icon: Workflow },
    { label: "Pipeline", value: "Custom stages", icon: Filter },
    { label: "Alerts", value: "Task reminders", icon: Bell },
    { label: "Insights", value: "Action dashboards", icon: Zap },
  ],
  highlights: [
    "Lead, customer, deal, and activity modules shaped around your process.",
    "Role-based permissions for teams, managers, and admins.",
    "Automated reminders, assignments, follow-ups, and approvals.",
    "Dashboards and reports connected to daily CRM activity.",
  ],
} satisfies ServiceHeroContent;

export default function CustomCrmSystemsDetailPage({ service }: CustomCrmSystemsDetailPageProps) {
  return <ServiceDetailLayout service={service} content={content} />;
}
