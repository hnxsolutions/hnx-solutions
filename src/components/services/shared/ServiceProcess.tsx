"use client";

import type { ServiceItem } from "@/data/services";
import { motion } from "framer-motion";
import ServiceSectionHeading from "@/components/services/shared/ServiceSectionHeading";
import { getServicePageDetails } from "@/components/services/shared/servicePageDetails";
import Service3DIconCard from "@/components/services/shared/Service3DIconCard";

type ServiceProcessProps = {
  service: ServiceItem;
};

export default function ServiceProcess({ service }: ServiceProcessProps) {
  const details = getServicePageDetails(service);

  return (
    <section className="relative py-14">
      <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <ServiceSectionHeading
          eyebrow="Process"
          title={details.processTitle}
          description={details.processDescription}
        />

        <div className="relative mt-12">
          <div className={`pointer-events-none absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b ${service.accent} opacity-40 lg:block`} />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.055 } } }}
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-5"
          >
            {details.process.map((step, index) => {
              const Icon = step.icon;

              return (
                <Service3DIconCard
                  key={`${step.title}-${index}`}
                  eyebrow={`Step ${index + 1}`}
                  title={step.title}
                  description={step.description}
                  icon={Icon}
                  accentClass={service.accent}
                  footer="Checkpoint"
                  index={index}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
