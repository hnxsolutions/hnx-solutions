import type { ServiceItem } from "@/data/services";
import { Eye, FileCheck2, Fingerprint, KeyRound, LockKeyhole, ScrollText, ShieldAlert, ShieldCheck } from "lucide-react";
import { ServiceDetailLayout, type ServiceHeroContent } from "@/components/services/shared/ServiceHeroShell";

type SecurityComplianceDetailPageProps = {
  service: ServiceItem;
};

const content = {
  eyebrow: "Security & Compliance",
  headline: "Security controls that protect your product and customer data.",
  description:
    "Strengthen authentication, permissions, access logs, API protection, deployment security, data controls, and audit-ready foundations.",
  imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=85",
  primaryCta: "Request Security Review",
  secondaryCta: "Review Controls",
  accentClass: "from-rose-600 to-red-500",
  mockupTitle: "Security layer for growing systems",
  mockupSubtitle: "A practical control system for roles, access logs, protected APIs, audit trails, and safer production settings.",
  stats: [
    { label: "Auth", value: "Secure", detail: "Login protection", icon: KeyRound },
    { label: "Roles", value: "RBAC", detail: "Access control", icon: LockKeyhole },
    { label: "Audit", value: "Logged", detail: "Action history", icon: ScrollText },
    { label: "Risk", value: "Reduced", detail: "Hardening plan", icon: ShieldCheck },
  ],
  visualLabels: [
    { label: "Identity", value: "Auth controls", icon: Fingerprint },
    { label: "Access", value: "Permissions", icon: LockKeyhole },
    { label: "Audit", value: "Activity logs", icon: Eye },
    { label: "Policy", value: "Data controls", icon: FileCheck2 },
    { label: "Risk", value: "Security alerts", icon: ShieldAlert },
    { label: "Protection", value: "API hardening", icon: ShieldCheck },
  ],
  highlights: [
    "Authentication, roles, permissions, and audit trails reviewed.",
    "API and deployment security improved with practical controls.",
    "Sensitive data and access policies mapped clearly.",
    "Security roadmap prioritizes the highest-impact fixes first.",
  ],
} satisfies ServiceHeroContent;

export default function SecurityComplianceDetailPage({ service }: SecurityComplianceDetailPageProps) {
  return <ServiceDetailLayout service={service} content={content} />;
}
