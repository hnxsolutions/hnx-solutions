"use client";

import type { LucideIcon } from "lucide-react";
import type { ServiceItem } from "@/data/services";
import type { ServiceHeroStat } from "@/components/services/shared/ServiceStatStrip";
import {
  AiAutomationHeroPreview,
  CrmHeroPreview,
  GenericServiceHeroPreview,
  MobileHeroPreview,
  WebsiteHeroPreview,
} from "@/components/services/shared/ServiceHeroPreviews";

export type ServiceHeroVisualLabel = {
  label: string;
  value: string;
  icon: LucideIcon;
};

type Service3DHeroVisualProps = {
  service: ServiceItem;
  imageUrl: string;
  title: string;
  subtitle: string;
  labels: ServiceHeroVisualLabel[];
  stats: ServiceHeroStat[];
  accentClass: string;
};

export default function Service3DHeroVisual({
  service,
  title,
  subtitle,
  labels,
  stats,
  accentClass,
}: Service3DHeroVisualProps) {
  if (service.visualType === "website") {
    return (
      <WebsiteHeroPreview
        service={service}
        title={title}
        subtitle={subtitle}
        labels={labels}
        stats={stats}
        accentClass={accentClass}
      />
    );
  }

  if (service.visualType === "crm") {
    return (
      <CrmHeroPreview
        service={service}
        title={title}
        subtitle={subtitle}
        labels={labels}
        stats={stats}
        accentClass={accentClass}
      />
    );
  }

  if (service.visualType === "mobile") {
    return (
      <MobileHeroPreview
        service={service}
        title={title}
        subtitle={subtitle}
        labels={labels}
        stats={stats}
        accentClass={accentClass}
      />
    );
  }

  if (service.visualType === "ai") {
    return (
      <AiAutomationHeroPreview
        service={service}
        title={title}
        subtitle={subtitle}
        labels={labels}
        stats={stats}
        accentClass={accentClass}
      />
    );
  }

  return (
    <GenericServiceHeroPreview
      service={service}
      title={title}
      subtitle={subtitle}
      labels={labels}
      stats={stats}
      accentClass={accentClass}
    />
  );
}