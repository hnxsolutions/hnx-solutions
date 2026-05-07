"use client";

import { motion } from "framer-motion";
import { ArrowRight, GitBranch, MailPlus, MousePointerClick, ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/Section";

const automation = [
  {
    label: "Trigger",
    text: "A lead fills the form on your website.",
    icon: MousePointerClick,
  },
  {
    label: "Condition",
    text: "Lead score is greater than 70.",
    icon: GitBranch,
  },
  {
    label: "Action",
    text: "Send WhatsApp + Email and create follow-up task.",
    icon: MailPlus,
  },
];

export function Automation() {
  return (
    <Section title="Automation That Works For You" description="Smart automations. Timely actions. Better results.">
      <div className="glass-panel relative overflow-hidden rounded-[34px] p-6 sm:p-8 lg:p-10">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyanGlow/12 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-violetGlow/14 blur-3xl" />
        <div className="relative grid items-center gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {automation.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="contents">
                <motion.article
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-90px" }}
                  transition={{ delay: index * 0.1, duration: 0.55, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                  className="rounded-[28px] border border-white/10 bg-slate-950/62 p-6"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="rounded-full border border-cyanGlow/25 bg-cyanGlow/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
                      {item.label}
                    </span>
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/[0.06] text-cyan-100">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <p className="min-h-16 text-lg font-semibold leading-7 text-white">{item.text}</p>
                  <div className="mt-7 h-2 rounded-full bg-white/[0.07]">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-cyanGlow to-violetGlow" />
                  </div>
                </motion.article>
                {index < automation.length - 1 ? (
                  <div className="hidden justify-center lg:flex">
                    <ArrowRight className="h-7 w-7 text-cyanGlow/80" aria-hidden="true" />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
          {["Smart routing", "Instant alerts", "Follow-up tasks"].map((item) => (
            <span key={item} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2">
              <ShieldCheck className="h-4 w-4 text-tealGlow" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
