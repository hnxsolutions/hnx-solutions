"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { industryCards } from "@/components/data/siteContent";
import { Button } from "@/components/ui/Button";

const industryRoutes: Record<string, string> = {
  "Real Estate": "/industries/real-estate-crm",
  Healthcare: "/industries/healthcare",
  Education: "/industries/education-crm",
  Manufacturing: "/industries/manufacturing-crm",
  Retail: "/industries/retail-crm",
  Finance: "/industries/finance-crm",
  Insurance: "/industries/insurance-crm",
  Travel: "/industries/travel-crm",
  Automobile: "/industries/automobile-crm",
  "Service Business": "/industries/service-business-crm",
};

const highlights = [
  "Custom modules for your exact pipeline",
  "Dashboards and reports by industry KPI",
  "Automations for follow-ups, tasks, and approvals",
];

export function IndustriesPageContent() {
  return (
    <main className="overflow-hidden bg-[#f7fbff] text-[#0f214f]">
      <section className="relative px-5 pb-16 pt-28 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 lg:pt-32">
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-[#e9fbff] to-transparent" aria-hidden="true" />

        <div className="relative mx-auto max-w-[min(92vw,1440px)]">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#1593b5]">Industries</p>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-[#081633] sm:text-5xl lg:text-6xl">
                CRM workflows built around the way your industry actually sells, serves, and follows up.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5d6a84]">
                HNX adapts lead capture, pipelines, tasks, permissions, reports, integrations, and automation to your
                business model instead of forcing every team into the same CRM template.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/crm-demo" size="lg" showArrow>
                  Explore Live CRM Demo
                </Button>
                <Button href="/#contact" variant="secondary" size="lg" showArrow>
                  Build My CRM
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="rounded-[28px] border border-[#d7e1f2] bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.1)]"
            >
              <div className="grid gap-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-[#f6fbff] p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1593b5]" aria-hidden="true" />
                    <p className="font-bold text-[#17315d]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="mx-auto max-w-[min(92vw,1440px)]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industryCards.map((item, index) => {
              const Icon = item.icon;
              const href = industryRoutes[item.title] ?? "/industries";

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.32, delay: index * 0.035 }}
                  className="group rounded-[22px] border border-[#d7e1f2] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#bfe3ee] hover:shadow-[0_18px_45px_rgba(15,23,42,0.1)]"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[#d7e1f2] bg-[#effcff] text-[#1593b5]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-lg font-black text-[#081633]">{item.title}</h2>
                  <p className="mt-2 min-h-[72px] text-sm leading-6 text-[#66728f]">{item.description}</p>
                  <Link
                    href={href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#145cb7] transition hover:text-[#1593b5]"
                  >
                    View CRM
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Industries() {
  return (
    <>
      <IndustriesPageContent />
    </>
  );
}
