"use client";

import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import type { ServiceItem } from "@/data/services";
import type { ServiceHeroVisualLabel } from "@/components/services/shared/Service3DHeroVisual";
import ServiceAnimatedGrid from "@/components/services/shared/ServiceAnimatedGrid";

type ServiceMockupFrameProps = {
  service: ServiceItem;
  imageUrl: string;
  title: string;
  subtitle: string;
  labels: ServiceHeroVisualLabel[];
  accentClass: string;
};

const visualNodes: Record<ServiceItem["visualType"], string[]> = {
  website: ["Hero", "SEO", "Lead Form"],
  saas: ["Users", "MRR", "Admin"],
  mobile: ["App", "Push", "Payments"],
  crm: ["Leads", "Pipeline", "Reports"],
  ai: ["Prompt", "Score", "Action"],
  workflow: ["Trigger", "Condition", "Action"],
  api: ["Auth", "Endpoint", "Webhook"],
  integration: ["Source", "Sync", "Target"],
  devops: ["Build", "Deploy", "Monitor"],
  cloud: ["CDN", "DB", "Backup"],
  support: ["Ticket", "Fix", "Report"],
  security: ["Access", "Audit", "Encrypt"],
  design: ["Flow", "UI", "Prototype"],
  landing: ["Ad", "Form", "Lead"],
  seo: ["Index", "Traffic", "Convert"],
  brand: ["Logo", "Color", "Type"],
};

function PhoneMiniMockup({ accentClass }: { accentClass: string }) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0], rotate: [-5, -3, -5] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -right-3 bottom-8 hidden h-56 w-28 rounded-[2rem] border-[7px] border-slate-950 bg-white p-2 shadow-[0_28px_70px_rgba(15,23,42,0.26)] dark:border-slate-800 dark:bg-slate-950 lg:block"
    >
      <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-slate-900/20 dark:bg-white/20" />
      <div className={`h-20 rounded-2xl bg-gradient-to-br ${accentClass}`} />
      <div className="mt-3 grid gap-2">
        <span className="h-3 rounded-full bg-slate-200 dark:bg-white/12" />
        <span className="h-3 w-3/4 rounded-full bg-slate-200 dark:bg-white/12" />
        <span className="h-10 rounded-2xl bg-slate-100 dark:bg-white/8" />
        <span className="h-10 rounded-2xl bg-slate-100 dark:bg-white/8" />
      </div>
    </motion.div>
  );
}

export default function ServiceMockupFrame({
  service,
  imageUrl,
  title,
  subtitle,
  labels,
  accentClass,
}: ServiceMockupFrameProps) {
  const nodes = visualNodes[service.visualType];
  const showPhone = service.visualType === "mobile" || service.visualType === "design" || service.visualType === "landing";

  return (
    <motion.div
      initial={{ opacity: 0, y: 26, rotateX: -5, rotateY: 5 }}
      animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
      whileHover={{ rotateX: 2, rotateY: -3, y: -6 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      style={{ transformStyle: "preserve-3d" }}
      className="relative transform-gpu rounded-[2rem] border border-slate-200 bg-white/90 p-3 shadow-[0_34px_110px_rgba(15,23,42,0.16)] backdrop-blur-2xl will-change-transform dark:border-white/10 dark:bg-slate-950/88 dark:shadow-[0_34px_110px_rgba(0,0,0,0.4)]"
    >
      <ServiceAnimatedGrid accentClass={accentClass} className="rounded-[2rem]" />
      <div className="relative overflow-hidden rounded-[1.55rem] border border-slate-200 bg-white dark:border-white/10 dark:bg-[#090d1a]">
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <div className="mx-auto hidden h-7 w-56 rounded-full bg-white px-4 text-center text-[11px] font-black uppercase leading-7 tracking-[0.16em] text-slate-400 shadow-inner dark:bg-slate-950/80 dark:text-slate-500 md:block">
            {service.visualType} system
          </div>
          <span className={`hidden rounded-xl bg-gradient-to-r ${accentClass} px-4 py-2 text-xs font-black text-white sm:inline-flex`}>
            Live Preview
          </span>
        </div>

        <div className="grid min-h-[520px] bg-white dark:bg-[#090d1a] lg:grid-cols-[1fr_0.92fr]">
          <div className="relative min-h-[300px] overflow-hidden lg:min-h-full">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-95 dark:opacity-72"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.12),transparent_36%,rgba(37,99,235,0.26))] dark:bg-[linear-gradient(135deg,rgba(2,6,23,0.62),transparent_38%,rgba(56,189,248,0.18))]" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/55 bg-white/78 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/68">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Project pulse</p>
                  <p className="mt-1 text-sm font-black text-slate-950 dark:text-white">{labels[1]?.value ?? title}</p>
                </div>
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${accentClass} text-white`}>
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>

          <div className="relative p-5 sm:p-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              Production Ready
            </span>
            <h3 className="mt-5 text-3xl font-black leading-tight tracking-[-0.035em] text-slate-950 dark:text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{subtitle}</p>

            <div className="mt-6 grid gap-3">
              {labels.slice(0, 3).map((label, index) => {
                const Icon = label.icon;

                return (
                  <motion.div
                    key={label.label}
                    whileHover={{ x: 5, rotateY: -3 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="group flex transform-gpu items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:border-blue-100 hover:shadow-[0_14px_34px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300/25 dark:hover:shadow-[0_14px_34px_rgba(0,0,0,0.24)]"
                  >
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${accentClass} text-white shadow-[0_12px_28px_rgba(37,99,235,0.2)]`}>
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">{label.label}</p>
                      <p className="truncate text-sm font-black text-slate-900 dark:text-white">{label.value}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-slate-500" aria-hidden="true" />
                    <span className="text-[10px] font-black text-slate-300 dark:text-white/20">{String(index + 1).padStart(2, "0")}</span>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {nodes.map((node, index) => (
                <motion.div
                  key={node}
                  animate={{ y: [0, index % 2 === 0 ? -5 : 5, 0] }}
                  transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center shadow-inner dark:border-white/10 dark:bg-white/5"
                >
                  <span className={`mx-auto block h-2 w-10 rounded-full bg-gradient-to-r ${accentClass}`} />
                  <p className="mt-2 text-[11px] font-black text-slate-600 dark:text-slate-300">{node}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showPhone ? <PhoneMiniMockup accentClass={accentClass} /> : null}
    </motion.div>
  );
}
