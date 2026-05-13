"use client";

import type { ServiceItem } from "@/data/services";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ServiceSectionHeading from "@/components/services/shared/ServiceSectionHeading";
import { getServicePageDetails } from "@/components/services/shared/servicePageDetails";
import Service3DIconCard from "@/components/services/shared/Service3DIconCard";

type ServiceDeliverablesGridProps = {
  service: ServiceItem;
};

export default function ServiceDeliverablesGrid({ service }: ServiceDeliverablesGridProps) {
  const details = getServicePageDetails(service);
  const deliverables = details.deliverables.slice(0, 8);

  return (
    <section id="what-we-build" className="relative px-5 py-14 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-72 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08),transparent_55%)]" />
      <div className="relative mx-auto w-full max-w-[min(92vw,1440px)]">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <ServiceSectionHeading
            eyebrow="What You Get"
            title={details.deliverableTitle}
            description={details.deliverableDescription}
          />
          <div className="rounded-[1.8rem] border border-white/70 bg-white/76 p-5 shadow-[0_22px_65px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 dark:shadow-[0_22px_65px_rgba(0,0,0,0.22)]">
            <div className="flex items-start gap-3">
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-[0_14px_34px_rgba(37,99,235,0.16)]`}>
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-sm font-bold leading-7 text-slate-600 dark:text-slate-300">{details.deliverableNote}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-black text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {deliverables.map((deliverable, index) => {
            const Icon = deliverable.icon;

            return (
              <Service3DIconCard
                key={deliverable.title}
                eyebrow={String(index + 1).padStart(2, "0")}
                title={deliverable.title}
                description={deliverable.description}
                icon={Icon}
                accentClass={service.accent}
                footer="Included deliverable"
                index={index}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
