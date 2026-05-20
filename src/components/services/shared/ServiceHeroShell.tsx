"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Newspaper,
} from "lucide-react";
import type { ServiceItem } from "@/data/services";
import ServiceCTA from "@/components/services/shared/ServiceCTA";
import ServicePricing from "@/components/services/shared/ServicePricing";
import ServiceProblems from "@/components/services/shared/ServiceProblems";
import ServiceProcess from "@/components/services/shared/ServiceProcess";
import ServiceUseCases from "@/components/services/shared/ServiceUseCases";
import ServiceDeliverablesGrid from "@/components/services/shared/ServiceDeliverablesGrid";
import ServiceTechStack from "@/components/services/shared/ServiceTechStack";
import type { ServiceHeroStat } from "@/components/services/shared/ServiceStatStrip";
import Service3DHeroVisual, {
  type ServiceHeroVisualLabel,
} from "@/components/services/shared/Service3DHeroVisual";
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
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const developmentServiceIds = [
  "web-development",
  "saas-development",
  "mobile-app-development",
  "custom-crm-systems",
];

function getTrustChips(content: ServiceHeroContent) {
  return content.highlights.slice(0, 4);
}

function getLatestArticleHref(service: ServiceItem) {
  if (service.id === "mobile-app-development") {
    return "/blog?category=mobile-apps";
  }

  if (service.id === "web-development") {
    return "/blog?category=web-development";
  }

  if (service.id === "custom-crm-systems") {
    return "/blog?category=crm-salesforce";
  }

  if (service.id === "saas-development") {
    return "/blog?category=saas-development";
  }

  if (service.id === "ai-automation") {
    return "/blog?category=ai-automation";
  }

  if (service.id === "workflow-automation") {
    return "/blog?category=workflow-automation";
  }

  if (service.id === "api-development") {
    return "/blog?category=api-development";
  }

  if (service.id === "integration-services") {
    return "/blog?category=integration-services";
  }

  return "/blog";
}

function renderGradientHeadline(headline: string, accentClass: string) {
  const mobileAppHeadline =
    "Mobile apps that are polished, powerful, and built for people.";

  if (headline === mobileAppHeadline) {
    return (
      <>
        Mobile apps that are{" "}
        <span
          className={`bg-gradient-to-r ${accentClass} bg-clip-text font-semibold text-transparent`}
        >
          polished, powerful,
        </span>{" "}
        and built for people.
      </>
    );
  }

  const parts = headline.split(" ");
  const highlightedWords = parts.slice(-3).join(" ");
  const normalWords = parts.slice(0, -3).join(" ");

  if (!normalWords || !highlightedWords) {
    return headline;
  }

  return (
    <>
      {normalWords}{" "}
      <span
        className={`bg-gradient-to-r ${accentClass} bg-clip-text font-semibold text-transparent`}
      >
        {highlightedWords}
      </span>
    </>
  );
}

export default function ServiceHeroShell({
  service,
  content,
}: ServiceHeroShellProps) {
  const trustChips = getTrustChips(content);
  const latestArticleHref = getLatestArticleHref(service);
  const accentClass = developmentServiceIds.includes(service.id)
    ? content.accentClass
    : service.accent;

  return (
    <section className="relative isolate overflow-hidden pb-4 pt-[6.15rem] lg:min-h-[calc(100vh-0px)] lg:pb-3 lg:pt-[6.25rem]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(224,242,254,0.74),transparent_34%),radial-gradient(circle_at_58%_14%,rgba(237,233,254,0.48),transparent_36%),radial-gradient(circle_at_90%_20%,rgba(207,250,254,0.36),transparent_34%),linear-gradient(180deg,#ffffff_0%,#f8fbff_52%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_10%_16%,rgba(56,189,248,0.08),transparent_34%),radial-gradient(circle_at_72%_14%,rgba(139,92,246,0.09),transparent_34%),linear-gradient(180deg,#090d18_0%,#0a1020_56%,#070b16_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,255,255,0.76),transparent)] dark:bg-[linear-gradient(180deg,rgba(7,11,22,0.96),rgba(7,11,22,0.72),transparent)]" />
      <div className="pointer-events-none absolute left-[48%] top-[18%] hidden h-[540px] w-[540px] rounded-full border border-sky-100/90 opacity-70 dark:border-sky-300/10 lg:block" />
      <div className="pointer-events-none absolute left-[55%] top-[26%] hidden h-[370px] w-[370px] rounded-full border border-violet-100/90 opacity-70 dark:border-violet-300/10 lg:block" />

      <ServiceFloatingOrbs accentClass={accentClass} />

      <div className="relative mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="grid items-start gap-7 lg:grid-cols-[0.92fr_1.08fr] xl:gap-10"
        >
          <div className="max-w-[720px]">
            <motion.div
              variants={fadeUp}
              className="mb-5 flex flex-wrap items-center gap-3"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ y: -5, scale: 1.035 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/services"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-slate-200/90 bg-white/86 px-5 py-3 text-xs font-medium uppercase tracking-[0.22em] text-slate-600 shadow-[0_14px_34px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition hover:border-sky-200 hover:text-[#145cb7] hover:shadow-[0_20px_55px_rgba(14,165,233,0.16)] dark:border-white/10 dark:bg-white/9 dark:text-slate-300 dark:hover:border-cyan-300/35 dark:hover:text-cyan-200"
                >
                  <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(14,165,233,0.16),transparent)] transition duration-700 group-hover:translate-x-full" />
                  <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/70 dark:ring-white/10" />
                  <span className="relative grid h-6 w-6 place-items-center rounded-full bg-slate-100 text-slate-600 transition group-hover:-translate-x-0.5 group-hover:bg-sky-50 group-hover:text-[#145cb7] dark:bg-white/10 dark:text-slate-300 dark:group-hover:bg-cyan-300/10 dark:group-hover:text-cyan-200">
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="relative">Services</span>
                  <span className="absolute -bottom-1 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-0 transition group-hover:opacity-100" />
                </Link>
              </motion.div>

              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.25,
                }}
                whileHover={{ y: -6, scale: 1.035 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={latestArticleHref}
                  className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-sky-100 bg-white/90 px-5 py-3 text-xs font-medium uppercase tracking-[0.22em] text-[#145cb7] shadow-[0_14px_36px_rgba(14,165,233,0.12)] backdrop-blur-2xl transition hover:border-sky-200 hover:bg-white hover:shadow-[0_24px_65px_rgba(37,99,235,0.18)] dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200 dark:hover:border-cyan-300/40`}
                >
                  <span
                    className={`absolute inset-0 bg-gradient-to-r ${accentClass} opacity-0 transition duration-300 group-hover:opacity-100`}
                  />
                  <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.46),transparent)] transition duration-700 group-hover:translate-x-full" />
                  <span className="relative grid h-6 w-6 place-items-center rounded-full bg-sky-50 text-[#145cb7] transition group-hover:bg-white/20 group-hover:text-white dark:bg-cyan-300/10 dark:text-cyan-200">
                    <Newspaper className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="relative transition group-hover:text-white">
                    Check latest article
                  </span>
                  <ArrowRight
                    className="relative h-4 w-4 transition group-hover:translate-x-1 group-hover:text-white"
                    aria-hidden="true"
                  />
                  <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-cyan-400 opacity-70 shadow-[0_0_18px_rgba(34,211,238,0.72)]" />
                  <span className="absolute -bottom-1 left-10 right-10 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition group-hover:opacity-80" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-[clamp(2.7rem,3.7vw,4.25rem)] font-medium leading-[1.08] tracking-[-0.038em] text-slate-950 antialiased [font-family:var(--font-geist-sans),Inter,ui-sans-serif,system-ui,sans-serif] dark:text-white"
            >
              {renderGradientHeadline(content.headline, accentClass)}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base font-normal leading-8 text-slate-600 antialiased sm:text-lg dark:text-slate-300"
            >
              {content.description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-col gap-4 sm:flex-row"
            >
              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.985 }}
              >
                <Link
                  href="/contact"
                  className={`group relative inline-flex min-h-14 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r ${accentClass} px-7 py-4 text-sm font-medium text-white shadow-[0_16px_38px_rgba(37,99,235,0.22)]`}
                >
                  <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.34),transparent)] transition duration-700 group-hover:translate-x-full" />
                  <span className="relative inline-flex items-center justify-center gap-3">
                    <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                    {content.primaryCta}
                    <ArrowRight
                      className="h-4 w-4 transition group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.985 }}
              >
                <a
                  href="#what-we-build"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/86 px-7 py-4 text-sm font-medium text-[#145cb7] shadow-sm backdrop-blur-xl transition hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/7 dark:text-cyan-200 dark:hover:border-cyan-300/30 dark:hover:bg-white/10"
                >
                  {content.secondaryCta}
                  <ArrowRight
                    className="h-4 w-4 transition group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-6 grid max-w-[620px] grid-cols-2 gap-x-8 gap-y-4"
            >
              {trustChips.map((chip) => (
                <div
                  key={chip}
                  className="group flex items-center gap-3 text-slate-700 dark:text-slate-200"
                >
                  <span
                    className={`relative grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br ${accentClass} text-white shadow-[0_10px_22px_rgba(37,99,235,0.18)] transition group-hover:scale-110`}
                  >
                    <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition group-hover:opacity-100" />
                    <CheckCircle2
                      className="relative h-4 w-4"
                      aria-hidden="true"
                    />
                  </span>

                  <span className="relative text-sm font-normal leading-5">
                    {chip}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r ${accentClass} transition-all duration-300 group-hover:w-full`}
                    />
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="origin-top-right lg:-mt-1 lg:scale-[0.9] lg:pl-2 xl:scale-[0.92] 2xl:scale-[0.94]"
          >
            <Service3DHeroVisual
              service={service}
              imageUrl={content.imageUrl}
              title={content.mockupTitle}
              subtitle={content.mockupSubtitle}
              labels={content.visualLabels}
              stats={content.stats}
              accentClass={accentClass}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function ServiceDetailLayout({
  service,
  content,
}: ServiceHeroShellProps) {
  return (
    <main className="relative overflow-hidden bg-white text-slate-950 dark:bg-[#070b16] dark:text-white">
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