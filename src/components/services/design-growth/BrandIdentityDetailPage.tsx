import type { ServiceItem } from "@/data/services";
import { BadgeCheck, Brush, Component, FileText, Gem, Palette, PenTool, Type } from "lucide-react";
import { ServiceDetailLayout, type ServiceHeroContent } from "@/components/services/shared/ServiceHeroShell";

type BrandIdentityDetailPageProps = {
  service: ServiceItem;
};

const content = {
  eyebrow: "Brand Identity",
  headline: "Brand identity systems that make your business look credible.",
  description:
    "Create a practical digital brand kit with logo direction, color palettes, typography, icons, social previews, reusable styles, and guidelines.",
  imageUrl: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1600&q=85",
  primaryCta: "Build My Brand Kit",
  secondaryCta: "View Brand Assets",
  accentClass: "from-amber-500 to-orange-500",
  mockupTitle: "Digital brand system for consistent growth",
  mockupSubtitle: "A practical identity system with visual direction, colors, typography, components, templates, and usage guidance.",
  stats: [
    { label: "Logo", value: "Direction", detail: "Visual mark", icon: PenTool },
    { label: "Palette", value: "System", detail: "Color rules", icon: Palette },
    { label: "Typography", value: "Clear", detail: "Readable hierarchy", icon: Type },
    { label: "Guidelines", value: "Usable", detail: "Team handoff", icon: FileText },
  ],
  visualLabels: [
    { label: "Identity", value: "Brand direction", icon: Gem },
    { label: "Colors", value: "Palette system", icon: Palette },
    { label: "Type", value: "Font hierarchy", icon: Type },
    { label: "Assets", value: "Social previews", icon: Brush },
    { label: "Components", value: "Reusable styles", icon: Component },
    { label: "Trust", value: "Consistent look", icon: BadgeCheck },
  ],
  highlights: [
    "Brand direction built for digital surfaces, not just static files.",
    "Color, typography, icon, and visual rules made practical.",
    "Reusable assets for websites, social media, and campaigns.",
    "Guidelines your team can actually follow after handoff.",
  ],
} satisfies ServiceHeroContent;

export default function BrandIdentityDetailPage({ service }: BrandIdentityDetailPageProps) {
  return <ServiceDetailLayout service={service} content={content} />;
}
