import type { ServiceItem } from "@/data/services";
import { Bell, CreditCard, LockKeyhole, MonitorSmartphone, Rocket, Smartphone, Store, Zap } from "lucide-react";
import { ServiceDetailLayout, type ServiceHeroContent } from "@/components/services/shared/ServiceHeroShell";

type MobileAppDevelopmentDetailPageProps = {
  service: ServiceItem;
};

const content = {
  eyebrow: "Mobile App Development",
  headline: "Mobile apps built for smooth UX and business-ready growth.",
  description:
    "Build Android and iOS apps with polished screens, secure data flows, push notifications, payments, and backend integrations ready for real customers.",
  imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=85",
  primaryCta: "Build Your App",
  secondaryCta: "Explore App Scope",
  accentClass: "from-blue-600 to-cyan-500",
  mockupTitle: "Mobile-first product experience",
  mockupSubtitle: "A clean app interface connected to secure APIs, notifications, payments, and admin workflows.",
  stats: [
    { label: "iOS/Android", value: "2x", detail: "Cross-platform reach", icon: Smartphone },
    { label: "Push", value: "Live", detail: "Engagement flows", icon: Bell },
    { label: "Payments", value: "Ready", detail: "Checkout support", icon: CreditCard },
    { label: "Secure APIs", value: "Built-in", detail: "Backend integration", icon: LockKeyhole },
  ],
  visualLabels: [
    { label: "Screens", value: "Smooth onboarding", icon: MonitorSmartphone },
    { label: "Launch", value: "Store-ready builds", icon: Store },
    { label: "Speed", value: "Fast interactions", icon: Zap },
    { label: "Alerts", value: "Push notifications", icon: Bell },
    { label: "Payments", value: "In-app checkout", icon: CreditCard },
    { label: "Growth", value: "Release support", icon: Rocket },
  ],
  highlights: [
    "User journeys designed for fast, intuitive mobile usage.",
    "Secure backend integration for accounts, data, and payments.",
    "Push notifications and analytics configured for engagement.",
    "Release support for app store readiness and iteration.",
  ],
} satisfies ServiceHeroContent;

export default function MobileAppDevelopmentDetailPage({ service }: MobileAppDevelopmentDetailPageProps) {
  return <ServiceDetailLayout service={service} content={content} />;
}
