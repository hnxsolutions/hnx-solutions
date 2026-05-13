"use client";

import type { ServiceItem } from "@/data/services";
import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import ServiceSectionHeading from "@/components/services/shared/ServiceSectionHeading";
import { getServicePageDetails } from "@/components/services/shared/servicePageDetails";
import Service3DIconCard from "@/components/services/shared/Service3DIconCard";

type ServiceProblemsProps = {
  service: ServiceItem;
};

export default function ServiceProblems({ service }: ServiceProblemsProps) {
  const details = getServicePageDetails(service);

  return (
    <section className="relative px-5 py-14 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <div className="mx-auto w-full max-w-[min(92vw,1440px)]">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <ServiceSectionHeading
            eyebrow="Problems We Solve"
            title={details.problemTitle}
            description={details.problemDescription}
          />
          <div className="rounded-[1.6rem] border border-slate-200 bg-white/84 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/6 dark:shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
            <div className="flex items-start gap-3">
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-[0_14px_34px_rgba(37,99,235,0.16)]`}>
                <AlertTriangle className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">{details.problemNote}</p>
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {details.problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <Service3DIconCard
                key={problem.title}
                eyebrow={`Pain ${index + 1}`}
                title={problem.title}
                description={problem.description}
                icon={Icon}
                accentClass={service.accent}
                footer="Mapped into the solution"
                index={index}
                tone="warning"
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
