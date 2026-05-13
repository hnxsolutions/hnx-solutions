"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarCheck, CheckCircle2, Sparkles } from "lucide-react";
import type { ServiceItem } from "@/data/services";
import ServiceCTA from "@/components/services/shared/ServiceCTA";
import ServicePricing from "@/components/services/shared/ServicePricing";
import ServiceProblems from "@/components/services/shared/ServiceProblems";
import ServiceProcess from "@/components/services/shared/ServiceProcess";
import ServiceUseCases from "@/components/services/shared/ServiceUseCases";
import ServiceDeliverablesGrid from "@/components/services/shared/ServiceDeliverablesGrid";
import ServiceTechStack from "@/components/services/shared/ServiceTechStack";
import ServiceStatStrip, { type ServiceHeroStat } from "@/components/services/shared/ServiceStatStrip";
import Service3DHeroVisual, { type ServiceHeroVisualLabel } from "@/components/services/shared/Service3DHeroVisual";
import ServiceFloatingOrbs from "@/components/services/shared/ServiceFloatingOrbs";

export type ServiceHeroContent = {
  eyebrow: string;
  headline: string;
  description: string;
  imageUrl: string;
  primaryCta: string;
  secondaryCta: string;
  accentClass: string;
  mockupTitle: string;
  mockupSubtitle: string;
  stats: ServiceHeroStat[];
  visualLabels: ServiceHeroVisualLabel[];
  highlights: string[];
};

type ServiceHeroShellProps = {
  service: ServiceItem;
  content: ServiceHeroContent;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function ServiceHeroShell({ service, content }: ServiceHeroShellProps) {
  return (
    <section className="relative overflow-hidden px-5 pb-12 pt-24 sm:px-6 lg:px-8 lg:pt-28 xl:px-10 2xl:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(37,99,235,0.10),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(20,184,166,0.10),transparent_28%),linear-gradient(180deg,#f8fbff_0%,#ffffff_70%)] dark:bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(129,140,248,0.16),transparent_28%),linear-gradient(180deg,#050814_0%,#090d1a_70%)]" />
      <ServiceFloatingOrbs accentClass={content.accentClass} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),transparent)] dark:bg-[linear-gradient(180deg,rgba(5,8,20,0.94),transparent)]" />

      <div className="relative mx-auto w-full max-w-[min(92vw,1440px)]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] xl:gap-16"
        >
          <div className="max-w-[700px]">
            <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-600 shadow-sm backdrop-blur-xl transition hover:border-blue-200 hover:text-[#145cb7] dark:border-white/10 dark:bg-white/6 dark:text-slate-300 dark:hover:border-cyan-300/30 dark:hover:text-cyan-200"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Services
              </Link>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#145cb7] shadow-sm dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                {content.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-3xl text-[clamp(2.55rem,4vw,4.25rem)] font-black leading-[1.08] tracking-[-0.045em] text-slate-950 dark:text-white"
            >
              {content.headline}
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              {content.description}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 flex flex-col gap-4 sm:flex-row">
              <motion.div whileHover={{ y: -3, scale: 1.015 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className={`group relative inline-flex overflow-hidden rounded-2xl bg-gradient-to-r ${content.accentClass} px-7 py-4 text-sm font-black text-white shadow-[0_18px_45px_rgba(37,99,235,0.24)]`}
                >
                  <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.32),transparent)] transition duration-700 group-hover:translate-x-full" />
                  <span className="relative inline-flex items-center justify-center gap-3">
                    <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                    {content.primaryCta}
                  </span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3, scale: 1.015 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="#what-we-build"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-7 py-4 text-sm font-black text-[#145cb7] shadow-sm backdrop-blur-xl transition hover:border-blue-200 hover:bg-white dark:border-white/10 dark:bg-white/7 dark:text-cyan-200 dark:hover:border-cyan-300/30 dark:hover:bg-white/10"
                >
                  {content.secondaryCta}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-7 grid gap-3 sm:grid-cols-2">
              {content.highlights.map((highlight) => (
                <motion.div
                  key={highlight}
                  whileHover={{ y: -5, rotateX: 2, rotateY: -2 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="flex transform-gpu items-start gap-3 rounded-2xl border border-slate-200 bg-white/82 p-4 shadow-sm backdrop-blur-xl transition will-change-transform hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/6 dark:hover:shadow-[0_18px_45px_rgba(0,0,0,0.22)]"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
                  <p className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">{highlight}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.35rem] border border-slate-200 bg-white/86 p-4 shadow-[0_16px_42px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/6 dark:shadow-[0_16px_42px_rgba(0,0,0,0.22)]">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">Investment</p>
                <p className={`mt-2 bg-gradient-to-r ${service.accent} bg-clip-text text-2xl font-black text-transparent`}>
                  {service.startingPrice}
                </p>
              </div>
              <div className="rounded-[1.35rem] border border-slate-200 bg-white/86 p-4 shadow-[0_16px_42px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/6 dark:shadow-[0_16px_42px_rgba(0,0,0,0.22)]">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">Timeline</p>
                <p className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{service.timeline}</p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp}>
            <Service3DHeroVisual
              service={service}
              imageUrl={content.imageUrl}
              title={content.mockupTitle}
              subtitle={content.mockupSubtitle}
              labels={content.visualLabels}
              stats={content.stats}
              accentClass={content.accentClass}
            />
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" animate="show" variants={fadeUp} className="mt-10">
          <ServiceStatStrip stats={content.stats} accentClass={content.accentClass} />
        </motion.div>
      </div>
    </section>
  );
}

export function ServiceDetailLayout({ service, content }: ServiceHeroShellProps) {
  return (
    <main className="relative overflow-hidden bg-[#f8fbff] text-slate-950 dark:bg-[#050814] dark:text-white">
      <ServiceHeroShell service={service} content={content} />
      <ServiceProblems service={service} />
      <ServiceDeliverablesGrid service={service} />
      <ServiceTechStack service={service} />
      <ServiceProcess service={service} />
      <ServiceUseCases service={service} />
      <ServicePricing service={service} />
      <ServiceCTA service={service} />
    </main>
  );
}
