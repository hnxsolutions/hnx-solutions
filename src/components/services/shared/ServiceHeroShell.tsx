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
import type { ServiceHeroStat } from "@/components/services/shared/ServiceStatStrip";
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
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.075 } },
};

function getTrustChips(service: ServiceItem, content: ServiceHeroContent) {
  const fallback = service.tags.length > 0 ? service.tags : content.highlights;
  return fallback.slice(0, 4);
}

export default function ServiceHeroShell({ service, content }: ServiceHeroShellProps) {
  const trustChips = getTrustChips(service, content);

  return (
    <section className="relative isolate overflow-hidden pb-14 pt-24 lg:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_78%_16%,rgba(124,58,237,0.10),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#ffffff_72%)] dark:bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_78%_16%,rgba(139,92,246,0.18),transparent_30%),linear-gradient(180deg,#050814_0%,#090d1a_72%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),transparent)] dark:bg-[linear-gradient(180deg,rgba(5,8,20,0.95),transparent)]" />
      <div className="pointer-events-none absolute left-[48%] top-[18%] hidden h-[560px] w-[560px] rounded-full border border-sky-200/60 opacity-60 dark:border-sky-300/10 lg:block" />
      <div className="pointer-events-none absolute left-[55%] top-[26%] hidden h-[390px] w-[390px] rounded-full border border-violet-200/60 opacity-60 dark:border-violet-300/10 lg:block" />
      <ServiceFloatingOrbs accentClass={content.accentClass} />

      <div className="relative mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] xl:gap-14"
        >
          <div className="max-w-[720px]">
            <motion.div variants={fadeUp} className="mb-7 flex flex-wrap items-center gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/82 px-4 py-2.5 text-xs font-black uppercase tracking-[0.2em] text-slate-600 shadow-sm backdrop-blur-xl transition hover:border-sky-200 hover:text-[#145cb7] dark:border-white/10 dark:bg-white/6 dark:text-slate-300 dark:hover:border-cyan-300/30 dark:hover:text-cyan-200"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Services
              </Link>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/90 px-4 py-2.5 text-xs font-black uppercase tracking-[0.2em] text-[#145cb7] shadow-sm backdrop-blur-xl dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                {content.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-[clamp(3rem,5vw,5.85rem)] font-black leading-[1.02] tracking-[-0.065em] text-slate-950 dark:text-white"
            >
              {content.headline}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300"
            >
              {content.description}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.985 }}>
                <Link
                  href="/contact"
                  className={`group relative inline-flex min-h-14 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r ${content.accentClass} px-7 py-4 text-sm font-black text-white shadow-[0_18px_45px_rgba(37,99,235,0.24)]`}
                >
                  <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.34),transparent)] transition duration-700 group-hover:translate-x-full" />
                  <span className="relative inline-flex items-center justify-center gap-3">
                    <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                    {content.primaryCta}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.985 }}>
                <a
                  href="#what-we-build"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/84 px-7 py-4 text-sm font-black text-[#145cb7] shadow-sm backdrop-blur-xl transition hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/7 dark:text-cyan-200 dark:hover:border-cyan-300/30 dark:hover:bg-white/10"
                >
                  {content.secondaryCta}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {trustChips.map((chip) => (
                <div
                  key={chip}
                  className="group flex min-h-[72px] items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/6 dark:hover:border-cyan-300/25 dark:hover:bg-white/10"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-500 ring-1 ring-emerald-100 dark:bg-emerald-400/10 dark:ring-emerald-300/15">
                    <CheckCircle2 className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-black leading-5 text-slate-700 dark:text-slate-200">
                    {chip}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${content.accentClass}`} />
              <span>{service.startingPrice}</span>
              <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" />
              <span>{service.timeline}</span>
              <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" />
              <span>Built around measurable business outcomes</span>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="lg:pl-2">
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

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/72 p-6 shadow-[0_22px_70px_rgba(15,23,42,0.07)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 dark:shadow-[0_22px_70px_rgba(0,0,0,0.22)]"
        >
          <div className="grid gap-4 md:grid-cols-[0.7fr_1.3fr] md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#145cb7] dark:text-cyan-200">
                Built for business outcomes
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">
                Everything your {service.title.toLowerCase()} project needs from day one.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {content.stats.slice(0, 3).map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-white/6"
                >
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                    {stat.label}
                  </p>
                  <p className={`mt-2 bg-gradient-to-r ${content.accentClass} bg-clip-text text-2xl font-black text-transparent`}>
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
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
