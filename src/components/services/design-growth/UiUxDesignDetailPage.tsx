import type { ServiceItem } from "@/data/services";
import { Component, Figma, Layers3, MonitorSmartphone, MousePointerClick, Palette, PenTool, Smartphone } from "lucide-react";
import { ServiceDetailLayout, type ServiceHeroContent } from "@/components/services/shared/ServiceHeroShell";

type UiUxDesignDetailPageProps = {
  service: ServiceItem;
};

const content = {
  eyebrow: "UI/UX Design",
  headline: "Interfaces designed for clarity, trust, and conversion.",
  description:
    "Design polished websites, apps, SaaS dashboards, CRM screens, prototypes, and design systems that users understand quickly.",
  imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=85",
  primaryCta: "Design My Product",
  secondaryCta: "See Design Scope",
  accentClass: "from-violet-600 to-pink-500",
  mockupTitle: "Design system for polished digital products",
  mockupSubtitle: "A UI/UX workflow with wireframes, high-fidelity screens, reusable components, responsive states, and handoff support.",
  stats: [
    { label: "Wireframes", value: "Clear", detail: "Flow direction", icon: PenTool },
    { label: "Prototype", value: "Clickable", detail: "UX validation", icon: MousePointerClick },
    { label: "Design System", value: "Reusable", detail: "Component library", icon: Component },
    { label: "Mobile UI", value: "Responsive", detail: "All screens", icon: Smartphone },
  ],
  visualLabels: [
    { label: "Flows", value: "User journeys", icon: Layers3 },
    { label: "Visuals", value: "Premium UI", icon: Palette },
    { label: "Prototype", value: "Clickable screens", icon: MousePointerClick },
    { label: "Figma", value: "Handoff ready", icon: Figma },
    { label: "Components", value: "Design system", icon: Component },
    { label: "Responsive", value: "Web + mobile", icon: MonitorSmartphone },
  ],
  highlights: [
    "User flows mapped before polishing visual screens.",
    "Responsive designs made for real implementation.",
    "Reusable components, color, typography, and spacing systems.",
    "Developer handoff that reduces ambiguity during build.",
  ],
} satisfies ServiceHeroContent;

export default function UiUxDesignDetailPage({ service }: UiUxDesignDetailPageProps) {
  return <ServiceDetailLayout service={service} content={content} />;
}
