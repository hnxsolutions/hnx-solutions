"use client";

import type { LucideIcon } from "lucide-react";
import type { IndustryMobileAppPageData } from "./industryMobileAppData";
import {
  MobileAppFeatureCard,
  MobileAppSectionHeader,
  MobileAppSectionShell,
  getToneForIndex,
} from "./mobileAppSectionUtils";

type AdvantageItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function MobileAppAdvantageSection({
  data,
}: {
  data: IndustryMobileAppPageData;
}) {
  const advantages = getAdvantages(data).slice(0, 6);

  return (
    <MobileAppSectionShell className="border-0 py-6 sm:py-8 lg:py-8 xl:py-8">
      <MobileAppSectionHeader
        // number="7"
        // eyebrow="Why Businesses Choose HNX for Mobile Apps"
        title="The HNX Advantage"
        highlight="HNX"
        description={`A practical product team for ${data.industryName.toLowerCase()} apps: strategy, UI, development, integrations, launch support, and long-term growth.`}
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {advantages.map((item, index) => (
          <MobileAppFeatureCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
            tone={getToneForIndex(index)}
          />
        ))}
      </div>
    </MobileAppSectionShell>
  );
}

function getAdvantages(data: IndustryMobileAppPageData): AdvantageItem[] {
  const benefitItems = data.benefits.map((item) => ({
    title: item.title,
    description: item.description,
    icon: item.icon,
  }));

  if (benefitItems.length >= 6) {
    return benefitItems;
  }

  const trustItems = data.trustItems.map((item) => ({
    title: item.title,
    description: `Built into the mobile app plan for reliable ${data.industryName.toLowerCase()} operations.`,
    icon: item.icon,
  }));

  return [...benefitItems, ...trustItems];
}
  
