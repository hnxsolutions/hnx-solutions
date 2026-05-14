"use client";

import Link from "next/link";
import { ArrowRight, Headphones, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import IndustryBenefitChips from "@/components/industries/shared/IndustryBenefitChips";
import IndustryPreviewShell from "@/components/industries/shared/IndustryPreviewShell";
import IndustrySolutionSelector from "@/components/industries/shared/IndustrySolutionSelector";
import { healthcareSolutionList } from "./healthcareData";

const platformBenefits = [
  {
    title: "HIPAA-ready",
    description: "Privacy-aware structure for healthcare workflows.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable & Flexible",
    description: "Start with one module and expand into a full suite.",
    icon: Layers3,
  },
  {
    title: "Seamless Integration",
    description: "Connect website, CRM, portal, app, and reports.",
    icon: Sparkles,
  },
  {
    title: "Expert Support",
    description: "A product team that understands healthcare operations.",
    icon: Headphones,
  },
];

export default function HealthcareIndustryPage() {
  return (
    <IndustryPreviewShell>
      <section className="relative px-5 pb-12 pt-28 sm:px-6 lg:px-8 lg:pt-32 xl:px-10 2xl:px-12">
        <div className="mx-auto max-w-[min(94vw,1540px)]">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.42 }}
            >
              <p className="text-sm font-black uppercase tracking-[0.32em] text-blue-700 dark:text-blue-300">
                HNX Solutions
              </p>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-blue-700 dark:border-blue-300/15 dark:bg-blue-400/10 dark:text-blue-300">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Healthcare industry solutions
              </span>
              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-slate-950 dark:text-white sm:text-6xl xl:text-7xl">
                Choose the right{" "}
                <span className="bg-linear-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
                  healthcare digital solution
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
                Start with a website, app, CRM, portal, automation workflow,
                dashboard, or connect everything into one full healthcare
                digital suite.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/industries/healthcare/full-suite"
                  className="btn-shine inline-flex items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-blue-600 via-cyan-500 to-violet-600 px-6 py-4 text-sm font-black text-white shadow-[0_18px_42px_rgba(37,99,235,0.26)] transition hover:-translate-y-1"
                >
                  Explore Full Suite
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/industries/healthcare/website"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/75 px-6 py-4 text-sm font-black text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:text-blue-300"
                >
                  Start With Website
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.46, delay: 0.05 }}
              className="relative"
            >
              <div
                className="pointer-events-none absolute -inset-4 rounded-[3rem] bg-linear-to-br from-blue-500/12 via-cyan-400/10 to-violet-500/14 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative rounded-[2rem] border border-slate-200 bg-white/88 p-4 shadow-[0_28px_80px_rgba(15,23,42,0.13)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06]">
                <div
                  className="min-h-[420px] rounded-[1.5rem] bg-cover bg-center p-5"
                  style={{
                    backgroundImage:
                      "linear-gradient(110deg, rgba(248,250,252,0.96) 0%, rgba(248,250,252,0.76) 52%, rgba(37,99,235,0.22) 100%), url(https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1400&q=82)",
                  }}
                >
                  <div className="grid max-w-2xl gap-3 sm:grid-cols-2">
                    {healthcareSolutionList.slice(0, 6).map((solution) => {
                      const Icon = solution.icon;

                      return (
                        <div
                          key={solution.slug}
                          className="rounded-3xl border border-white/80 bg-white/82 p-4 shadow-[0_16px_38px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1220]/72"
                        >
                          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <p className="mt-3 text-sm font-black text-slate-950 dark:text-white">
                            {solution.selectorTitle}
                          </p>
                          <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-600 dark:text-slate-300">
                            {solution.selectorDescription}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[min(94vw,1540px)] space-y-8 px-5 pb-18 sm:px-6 lg:px-8 lg:pb-24 xl:px-10 2xl:px-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-blue-700 dark:text-blue-300">
              Solution selector
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Healthcare solution previews
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            Each preview is designed like a premium product concept so you can
            quickly compare the right starting point for your clinic, hospital,
            healthcare startup, or care team.
          </p>
        </div>

        <IndustrySolutionSelector solutions={healthcareSolutionList} />

        <IndustryBenefitChips benefits={platformBenefits} />
      </section>
    </IndustryPreviewShell>
  );
}
