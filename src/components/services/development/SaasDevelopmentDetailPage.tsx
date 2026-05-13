import type { ServiceItem } from "@/data/services";
import { BarChart3, CreditCard, Gauge, LayoutDashboard, LockKeyhole, ServerCog, Users, Workflow } from "lucide-react";
import { ServiceDetailLayout, type ServiceHeroContent } from "@/components/services/shared/ServiceHeroShell";

type SaasDevelopmentDetailPageProps = {
  service: ServiceItem;
};

const content = {
  eyebrow: "SaaS Development",
  headline: "SaaS platforms built for subscriptions, dashboards, and scale.",
  description:
    "Turn your product idea into a secure SaaS platform with authentication, billing, role access, dashboards, analytics, and scalable architecture.",
  imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
  primaryCta: "Plan Your SaaS",
  secondaryCta: "See Product Modules",
  accentClass: "from-violet-600 to-blue-600",
  mockupTitle: "Product dashboard built for recurring revenue",
  mockupSubtitle: "A SaaS workspace with user roles, subscription flows, usage analytics, and admin visibility.",
  stats: [
    { label: "MRR Ready", value: "Billing", detail: "Subscription flows", icon: CreditCard },
    { label: "Roles", value: "RBAC", detail: "Team access control", icon: Users },
    { label: "Analytics", value: "Live", detail: "Product insights", icon: BarChart3 },
    { label: "Scale", value: "Cloud", detail: "Growth architecture", icon: ServerCog },
  ],
  visualLabels: [
    { label: "Workspace", value: "Admin Dashboard", icon: LayoutDashboard },
    { label: "Billing", value: "Plans & invoices", icon: CreditCard },
    { label: "Security", value: "Auth + permissions", icon: LockKeyhole },
    { label: "Metrics", value: "Usage analytics", icon: BarChart3 },
    { label: "Automation", value: "Lifecycle flows", icon: Workflow },
    { label: "Health", value: "Performance checks", icon: Gauge },
  ],
  highlights: [
    "MVP scope shaped around your first paying customers.",
    "Billing, roles, and admin controls designed from the start.",
    "Dashboards and analytics that show product health.",
    "Architecture ready for future features and integrations.",
  ],
} satisfies ServiceHeroContent;

export default function SaasDevelopmentDetailPage({ service }: SaasDevelopmentDetailPageProps) {
  return <ServiceDetailLayout service={service} content={content} />;
}
