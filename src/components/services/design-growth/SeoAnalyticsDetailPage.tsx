import type { ServiceItem } from "@/data/services";
import { BarChart3, ChartNoAxesCombined, FileSearch, Gauge, LineChart, Search, Tags, Waypoints } from "lucide-react";
import { ServiceDetailLayout, type ServiceHeroContent } from "@/components/services/shared/ServiceHeroShell";

type SeoAnalyticsDetailPageProps = {
  service: ServiceItem;
};

const content = {
  eyebrow: "SEO & Analytics",
  headline: "SEO and analytics systems that make growth measurable.",
  description:
    "Improve visibility and decision-making with technical SEO, schema, indexing, search tracking, analytics events, and conversion reporting.",
  imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
  primaryCta: "Improve SEO",
  secondaryCta: "See Tracking Scope",
  accentClass: "from-emerald-600 to-green-500",
  mockupTitle: "Search and analytics growth cockpit",
  mockupSubtitle: "A measurement system for indexing, schema, rankings, traffic, conversions, and ongoing optimization decisions.",
  stats: [
    { label: "Indexing", value: "Clean", detail: "Search visibility", icon: Search },
    { label: "Schema", value: "Added", detail: "Structured data", icon: Tags },
    { label: "Traffic", value: "Tracked", detail: "Channel insights", icon: LineChart },
    { label: "Tracking", value: "Events", detail: "Conversions", icon: Waypoints },
  ],
  visualLabels: [
    { label: "Audit", value: "Technical SEO", icon: FileSearch },
    { label: "Search", value: "Index coverage", icon: Search },
    { label: "Schema", value: "Rich data", icon: Tags },
    { label: "Traffic", value: "Growth dashboard", icon: BarChart3 },
    { label: "Speed", value: "Performance review", icon: Gauge },
    { label: "Reports", value: "Monthly insights", icon: ChartNoAxesCombined },
  ],
  highlights: [
    "Technical SEO, metadata, schema, and indexing foundations improved.",
    "Analytics events and conversion tracking configured clearly.",
    "Traffic and performance reports tied to practical recommendations.",
    "SEO improvements prioritized by impact and implementation effort.",
  ],
} satisfies ServiceHeroContent;

export default function SeoAnalyticsDetailPage({ service }: SeoAnalyticsDetailPageProps) {
  return <ServiceDetailLayout service={service} content={content} />;
}
