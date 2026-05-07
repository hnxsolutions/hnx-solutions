"use client";

import { motion } from "framer-motion";
import { ClipboardList, DraftingCompass, Rocket, Wrench } from "lucide-react";
import { Section } from "@/components/ui/Section";

const steps = [
  {
    number: "01",
    title: "Workflow Audit",
    text: "We understand your business, processes and current challenges.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "CRM Blueprint",
    text: "We design a custom CRM plan tailored to your workflow.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Build & Integrate",
    text: "We build, configure and integrate with your tools.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Launch & Improve",
    text: "We launch, train your team and continuously optimize.",
    icon: Rocket,
  },
];

export function Process() {
  return (
    <Section id="process" eyebrow="Implementation" title="Our Proven Implementation Process">
      <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div className="absolute left-[8%] right-[8%] top-16 hidden border-t border-dashed border-cyanGlow/28 xl:block" />
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
              className="relative rounded-[28px] border border-white/10 bg-white/[0.045] p-6 shadow-card"
            >
              <div className="relative z-10 grid h-20 w-20 place-items-center rounded-3xl border border-cyanGlow/30 bg-slate-950 text-cyan-100 shadow-glow">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <span className="mt-8 block text-5xl font-bold text-white/10">{step.number}</span>
              <h3 className="-mt-4 text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{step.text}</p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
