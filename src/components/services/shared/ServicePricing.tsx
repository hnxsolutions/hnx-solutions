"use client";

import Link from "next/link";
import type { ServiceItem } from "@/data/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import ServiceSectionHeading from "@/components/services/shared/ServiceSectionHeading";

type ServicePricingProps = {
  service: ServiceItem;
};

export default function ServicePricing({ service }: ServicePricingProps) {
  return (
    <section id="pricing" className="relative px-5 py-14 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <ServiceSectionHeading
            eyebrow="Packages"
            title={service.startingPrice}
            description="Pick the closest starting point, then we shape the final scope around your goals, timeline, integrations, content, and launch requirements."
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-10 grid gap-5 lg:grid-cols-3"
        >
          {service.packages.map((pkg) => (
            <motion.article
              key={pkg.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" as const } },
              }}
              whileHover={{ y: -10, rotateX: 3, rotateY: pkg.popular ? 0 : 2, scale: 1.012 }}
              style={{ transformStyle: "preserve-3d" }}
              className={`relative transform-gpu overflow-hidden rounded-[2rem] border bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] transition will-change-transform hover:-translate-y-1 dark:bg-white/6 dark:shadow-[0_24px_70px_rgba(0,0,0,0.26)] ${
                pkg.popular
                  ? "border-blue-300 ring-1 ring-blue-100 dark:border-cyan-300/35 dark:ring-cyan-300/10"
                  : "border-slate-200 dark:border-white/10"
              }`}
            >
              <div className={`absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${service.accent} opacity-10 blur-3xl`} />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.7),transparent_45%,rgba(37,99,235,0.06))] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_48%,rgba(56,189,248,0.07))]" />
              <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${service.accent} ${pkg.popular ? "opacity-100" : "opacity-55"}`} />
              {pkg.popular ? (
                <span className="absolute right-5 top-5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#145cb7] dark:border-cyan-300/25 dark:bg-cyan-300/10 dark:text-cyan-200">
                  Most Popular
                </span>
              ) : null}

              <h3 className="relative pr-24 text-2xl font-black text-slate-950 dark:text-white" style={{ transform: "translateZ(16px)" }}>{pkg.name}</h3>
              <p className="relative mt-3 min-h-14 text-sm leading-6 text-slate-600 dark:text-slate-300">{pkg.description}</p>
              <p className={`relative mt-6 bg-gradient-to-r ${service.accent} bg-clip-text text-4xl font-black text-transparent`} style={{ transform: "translateZ(14px)" }}>
                {pkg.price}
              </p>

              <div className="relative mt-6 grid gap-3">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex gap-3 text-sm font-semibold leading-6 text-slate-700 dark:text-slate-300">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-500 dark:bg-emerald-400/10 dark:text-emerald-300">
                      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {feature}
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={`group relative mt-7 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl px-5 py-3.5 text-sm font-black transition hover:-translate-y-0.5 ${
                  pkg.popular
                    ? `bg-gradient-to-r ${service.accent} text-white shadow-[0_14px_34px_rgba(37,99,235,0.2)]`
                    : "border border-slate-200 bg-white text-slate-950 hover:border-blue-200 hover:bg-blue-50 dark:border-white/10 dark:bg-white/6 dark:text-white dark:hover:border-cyan-300/25 dark:hover:bg-cyan-300/10"
                }`}
              >
                <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.28),transparent)] transition duration-700 group-hover:translate-x-full" />
                <span className="relative">Get This Package</span>
                <ArrowRight className="relative h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
