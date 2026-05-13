import type { ServiceItem } from "@/data/services";
import { BarChart3, FileText, Gauge, Headphones, MonitorSmartphone, Search, Target, Zap } from "lucide-react";
import { ServiceDetailLayout, type ServiceHeroContent } from "@/components/services/shared/ServiceHeroShell";

type WebDevelopmentDetailPageProps = {
  service: ServiceItem;
};

const content = {
  eyebrow: "Web Development",
  headline: "Websites built for speed, trust, and conversion.",
  description:
    "Launch a fast, premium website with clean UX, clear messaging, SEO structure, and the right conversion paths for qualified leads.",
  imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=85",
  primaryCta: "Start Your Website",
  secondaryCta: "Explore Website Scope",
  accentClass: "from-blue-600 to-violet-600",
  mockupTitle: "Conversion-ready web experience",
  mockupSubtitle: "A polished website system with responsive sections, performance tuning, and launch-ready lead flows.",
  stats: [
    { label: "Page Speed", value: "98", detail: "Performance target", icon: Gauge },
    { label: "SEO", value: "Optimized", detail: "Technical foundation", icon: BarChart3 },
    { label: "Projects", value: "120+", detail: "Delivered builds", icon: FileText },
    { label: "Support", value: "24/7", detail: "Launch assistance", icon: Headphones },
  ],
  visualLabels: [
    { label: "Layout", value: "Responsive Design", icon: MonitorSmartphone },
    { label: "Growth", value: "Lead-focused CTAs", icon: Target },
    { label: "Content", value: "SEO page structure", icon: Search },
    { label: "Speed", value: "Core Web Vitals", icon: Gauge },
    { label: "Tracking", value: "Analytics ready", icon: BarChart3 },
    { label: "Code", value: "Clean Next.js build", icon: Zap },
  ],
  highlights: [
    "Premium responsive UI for mobile, tablet, and desktop.",
    "SEO-ready structure with strong page hierarchy.",
    "Lead forms, analytics, and conversion tracking built in.",
    "Clean launch support so the site goes live smoothly.",
  ],
} satisfies ServiceHeroContent;

export default function WebDevelopmentDetailPage({ service }: WebDevelopmentDetailPageProps) {
  return <ServiceDetailLayout service={service} content={content} />;
}
