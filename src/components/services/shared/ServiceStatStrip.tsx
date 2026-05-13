"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import Service3DStatCard from "@/components/services/shared/Service3DStatCard";

export type ServiceHeroStat = {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
};

type ServiceStatStripProps = {
  stats: ServiceHeroStat[];
  accentClass: string;
};

export default function ServiceStatStrip({ stats, accentClass }: ServiceStatStripProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      className="grid gap-3 rounded-[1.45rem] border border-slate-200 bg-white/55 p-3 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/4 dark:shadow-[0_18px_60px_rgba(0,0,0,0.28)] sm:grid-cols-2 xl:grid-cols-4"
    >
      {stats.map((stat, index) => (
        <Service3DStatCard
          key={stat.label}
          label={stat.label}
          value={stat.value}
          detail={stat.detail}
          icon={stat.icon}
          accentClass={accentClass}
          index={index}
        />
      ))}
    </motion.div>
  );
}
