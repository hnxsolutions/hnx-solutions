import type { ServiceItem } from "@/data/services";
import {
  Bell,
  CreditCard,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Smartphone,
  Store,
  Zap,
} from "lucide-react";
import {
  ServiceDetailLayout,
  type ServiceHeroContent,
} from "@/components/services/shared/ServiceHeroShell";

type MobileAppDevelopmentDetailPageProps = {
  service: ServiceItem;
};

const content = {
  eyebrow: "Mobile App Development",
  headline: "Mobile apps that are polished, powerful, and built for people.",
  description:
    "We design and build fast, secure, and scalable mobile apps with exceptional UI, performance, and experiences users love.",
  imageUrl:
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=85",
  primaryCta: "Book a Consultation",
  secondaryCta: "View Our Work",
  accentClass: "from-blue-600 to-violet-600",
  mockupTitle: "Mobile-first product experience",
  mockupSubtitle:
    "A clean app interface connected to secure APIs, notifications, payments, and admin workflows.",
  stats: [
    {
      label: "Secure",
      value: "Built-in",
      detail: "Data-safe architecture",
      icon: ShieldCheck,
    },
    {
      label: "Performance",
      value: "Fast",
      detail: "Smooth interactions",
      icon: Zap,
    },
    {
      label: "UX",
      value: "Modern",
      detail: "User-friendly screens",
      icon: Smartphone,
    },
    {
      label: "Launch",
      value: "Ready",
      detail: "Store support",
      icon: Rocket,
    },
  ],
  visualLabels: [
    {
      label: "Screens",
      value: "Smooth onboarding",
      icon: MonitorSmartphone,
    },
    {
      label: "Launch",
      value: "Store-ready builds",
      icon: Store,
    },
    {
      label: "Speed",
      value: "Fast interactions",
      icon: Zap,
    },
    {
      label: "Alerts",
      value: "Push notifications",
      icon: Bell,
    },
    {
      label: "Payments",
      value: "In-app checkout",
      icon: CreditCard,
    },
    {
      label: "Growth",
      value: "Release support",
      icon: Rocket,
    },
  ],
  highlights: [
    "Android & iOS",
    "Smooth UX",
    "Secure Backend",
    "Push Notifications",
  ],
} satisfies ServiceHeroContent;

export default function MobileAppDevelopmentDetailPage({
  service,
}: MobileAppDevelopmentDetailPageProps) {
  return <ServiceDetailLayout service={service} content={content} />;
}