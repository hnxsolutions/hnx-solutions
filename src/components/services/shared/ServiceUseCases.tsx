"use client";

import type { ServiceItem } from "@/data/services";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import ServiceSectionHeading from "@/components/services/shared/ServiceSectionHeading";
import { getServicePageDetails } from "@/components/services/shared/servicePageDetails";
import Service3DIconCard from "@/components/services/shared/Service3DIconCard";

type ServiceUseCasesProps = {
  service: ServiceItem;
};

export default function ServiceUseCases({ service }: ServiceUseCasesProps) {
  const details = getServicePageDetails(service);

  return (
    <section className="relative py-14">
      <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <ServiceSectionHeading
            eyebrow="Use Cases"
            title={details.useCaseTitle}
            description={details.useCaseDescription}
          />
          <div className="rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/6 dark:shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
            <div className="flex items-center gap-3">
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${service.accent} text-white`}>
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-sm font-bold leading-6 text-slate-600 dark:text-slate-300">{details.bestForNote}</p>
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {details.useCases.map((useCase, index) => {
            const Icon = useCase.icon;

            return (
              <Service3DIconCard
                key={useCase.title}
                eyebrow={`Use case ${String(index + 1).padStart(2, "0")}`}
                title={useCase.title}
                description={useCase.description}
                icon={Icon}
                accentClass={service.accent}
                footer="Practical fit"
                index={index}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
