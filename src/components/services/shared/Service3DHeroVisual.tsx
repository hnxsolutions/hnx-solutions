"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import type { ServiceItem } from "@/data/services";
import type { ServiceHeroStat } from "@/components/services/shared/ServiceStatStrip";
import Floating3DSticker from "@/components/services/shared/Floating3DSticker";
import Service3DStatCard from "@/components/services/shared/Service3DStatCard";
import ServiceFloatingOrbs from "@/components/services/shared/ServiceFloatingOrbs";
import ServiceMockupFrame from "@/components/services/shared/ServiceMockupFrame";

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
  imageUrl,
  title,
  subtitle,
  labels,
  stats,
  accentClass,
}: Service3DHeroVisualProps) {
  const primarySticker = labels[0];
  const secondarySticker = labels[3] ?? labels[1] ?? labels[0];
  const tertiarySticker = labels[4] ?? labels[2] ?? labels[0];

  return (
    <div className="relative mx-auto w-full max-w-[800px]" style={{ perspective: "1200px" }}>
      <ServiceFloatingOrbs accentClass={accentClass} className="rounded-[2rem]" />

      {primarySticker ? (
        <Floating3DSticker
          label={primarySticker.label}
          value={primarySticker.value}
          icon={primarySticker.icon}
          accentClass={accentClass}
          className="-left-4 top-8"
        />
      ) : null}

      {secondarySticker ? (
        <Floating3DSticker
          label={secondarySticker.label}
          value={secondarySticker.value}
          icon={secondarySticker.icon}
          accentClass={accentClass}
          className="-right-2 bottom-32"
          delay={0.45}
        />
      ) : null}

      {tertiarySticker ? (
        <Floating3DSticker
          label={tertiarySticker.label}
          value={tertiarySticker.value}
          icon={tertiarySticker.icon}
          accentClass={accentClass}
          className="left-10 bottom-4 hidden xl:block"
          delay={0.85}
        />
      ) : null}

      <ServiceMockupFrame
        service={service}
        imageUrl={imageUrl}
        title={title}
        subtitle={subtitle}
        labels={labels}
        accentClass={accentClass}
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        className="relative z-10 mt-4 grid gap-3 sm:grid-cols-3"
      >
        {stats.slice(0, 3).map((stat, index) => (
          <Service3DStatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            detail={stat.detail}
            icon={stat.icon}
            accentClass={accentClass}
            index={index}
            compact
          />
        ))}
      </motion.div>
    </div>
  );
}
