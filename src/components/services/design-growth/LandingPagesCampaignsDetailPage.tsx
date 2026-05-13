import type { ServiceItem } from "@/data/services";
import { BarChart3, BellRing, ClipboardCheck, FileText, Megaphone, MousePointerClick, Rocket, Target } from "lucide-react";
import { ServiceDetailLayout, type ServiceHeroContent } from "@/components/services/shared/ServiceHeroShell";

type LandingPagesCampaignsDetailPageProps = {
  service: ServiceItem;
};

const content = {
  eyebrow: "Landing Pages & Campaigns",
  headline: "Landing pages built to turn campaign traffic into leads.",
  description:
    "Launch focused campaign pages with clear offers, strong CTAs, lead forms, trust sections, analytics, and fast responsive delivery.",
  imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=85",
  primaryCta: "Plan My Campaign",
  secondaryCta: "Explore Funnel Scope",
  accentClass: "from-rose-600 to-pink-500",
  mockupTitle: "Campaign funnel for lead generation",
  mockupSubtitle: "A conversion-focused page system with offer clarity, tracking, thank-you flows, and CRM-ready lead capture.",
  stats: [
    { label: "Offer", value: "Focused", detail: "Clear message", icon: Target },
    { label: "Lead Form", value: "Ready", detail: "Capture flow", icon: ClipboardCheck },
    { label: "Tracking", value: "Events", detail: "Conversion data", icon: BarChart3 },
    { label: "Launch", value: "Fast", detail: "Campaign-ready", icon: Rocket },
  ],
  visualLabels: [
    { label: "Hero", value: "Campaign CTA", icon: Megaphone },
    { label: "Form", value: "Lead capture", icon: ClipboardCheck },
    { label: "Clicks", value: "Conversion flow", icon: MousePointerClick },
    { label: "Analytics", value: "Tracking setup", icon: BarChart3 },
    { label: "Nurture", value: "Follow-up path", icon: BellRing },
    { label: "Content", value: "Offer sections", icon: FileText },
  ],
  highlights: [
    "Landing page structure built around one focused offer.",
    "Lead forms, thank-you pages, and analytics events included.",
    "Fast responsive design for paid traffic and campaign launches.",
    "Trust, proof, and CTA sections arranged for conversion.",
  ],
} satisfies ServiceHeroContent;

export default function LandingPagesCampaignsDetailPage({ service }: LandingPagesCampaignsDetailPageProps) {
  return <ServiceDetailLayout service={service} content={content} />;
}
