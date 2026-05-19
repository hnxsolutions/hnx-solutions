"use client";

import type { ServiceItem } from "@/data/services";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import ServiceSectionHeading from "@/components/services/shared/ServiceSectionHeading";
import { getServiceToolStack } from "@/components/services/shared/serviceToolStacks";
import ServiceAnimatedGrid from "@/components/services/shared/ServiceAnimatedGrid";

type ServiceTechStackProps = {
  service: ServiceItem;
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const developmentIds = new Set(["web-development", "saas-development", "mobile-app-development", "custom-crm-systems"]);
const automationIds = new Set(["ai-automation", "workflow-automation", "api-development", "integration-services"]);
const cloudDevopsIds = new Set(["devops-deployment", "cloud-infrastructure", "maintenance-support", "security-compliance"]);

function getStackSectionTitle(serviceId: string) {
  if (developmentIds.has(serviceId)) {
    return "Tech Stack We Use";
  }

  if (automationIds.has(serviceId)) {
    return "Automation Tools & Systems";
  }

  if (cloudDevopsIds.has(serviceId)) {
    return "Cloud & DevOps Stack";
  }

  return "Design & Growth Tools";
}

function getToolGroup(index: number) {
  if (index < 4) {
    return "Core";
  }

  if (index < 8) {
    return "Workflow";
  }

  return "Launch";
}

export default function ServiceTechStack({ service }: ServiceTechStackProps) {
  const stack = getServiceToolStack(service.id);

  return (
  <section className="relative py-14">
    <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <div className="relative overflow-hidden rounded-[2.4rem] border border-white/70 bg-slate-950 p-6 text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-[#070a12] dark:shadow-[0_30px_100px_rgba(0,0,0,0.34)] sm:p-8 lg:p-10">
        <div className={`pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br ${service.accent} opacity-30 blur-3xl`} />
        <div className={`pointer-events-none absolute -bottom-28 right-0 h-96 w-96 rounded-full bg-gradient-to-br ${service.accent} opacity-20 blur-3xl`} />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.10),transparent_34%,rgba(255,255,255,0.06)_68%,transparent)]" />
        <ServiceAnimatedGrid accentClass={service.accent} />

        <div className="relative grid gap-8 lg:grid-cols-[0.62fr_1fr] lg:items-start">
          <div>
            <ServiceSectionHeading
              eyebrow={stack.eyebrow}
              title={getStackSectionTitle(service.id)}
              description={stack.description}
              tone="dark"
            />

            <div className="mt-7 rounded-[1.6rem] border border-white/10 bg-white/8 p-5 backdrop-blur-xl dark:bg-white/7">
              <div className="flex items-center gap-3">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${service.accent} text-white`}>
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-white/50">
                    Stack strategy
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-6 text-white/78">
                    {stack.title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.045 } } }}
            className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5"
          >
            {stack.tools.map((tool, index) => {
              const Icon = tool.icon;

              return (
                <motion.div
                  key={tool.name}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    rotateX: 4,
                    rotateY: index % 2 === 0 ? -4 : 4,
                    scale: 1.03,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="group relative transform-gpu overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/8 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.12)] backdrop-blur-xl transition will-change-transform hover:border-white/25 hover:bg-white/12 dark:bg-white/7 dark:hover:bg-white/12"
                >
                  <div className={`absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br ${service.accent} opacity-0 blur-2xl transition group-hover:opacity-25`} />

                  <span
                    className={`relative grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-[0_14px_34px_rgba(0,0,0,0.18)]`}
                    style={{ transform: "translateZ(18px)" }}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <p className="relative mt-4 min-h-10 text-sm font-black leading-5 text-white">
                    {tool.name}
                  </p>

                  <div className="relative mt-3 flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-white/45">
                    {getToolGroup(index)}
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
}