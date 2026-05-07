"use client";

import { motion } from "framer-motion";
import {
  Bot,
  ChartNoAxesCombined,
  MailCheck,
  Network,
  SlidersHorizontal,
  UsersRound,
} from "lucide-react";
import { Section } from "@/components/ui/Section";

const features = [
  {
    title: "Lead Management",
    text: "Capture, qualify and organize leads from all your sources in one place.",
    icon: Network,
  },
  {
    title: "Workflow Automation",
    text: "Automate follow-ups, reminders and updates to save time and close faster.",
    icon: SlidersHorizontal,
  },
  {
    title: "Team Accountability",
    text: "Assign tasks, set goals and track performance with complete transparency.",
    icon: UsersRound,
  },
  {
    title: "Dashboards & Reports",
    text: "Real-time dashboards and custom reports to make data-driven decisions.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "WhatsApp & Email Triggers",
    text: "Engage instantly with smart triggers over WhatsApp and Email.",
    icon: MailCheck,
  },
  {
    title: "AI-Ready CRM Layer",
    text: "AI lead scoring, smart suggestions and predictive insights built-in.",
    icon: Bot,
  },
];

export function Features() {
  return (
    <Section id="features" eyebrow="Platform" title="Powerful Features to Drive Growth">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ delay: index * 0.06, duration: 0.56, ease: "easeOut" }}
              whileHover={{ y: -7 }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/58 p-7 shadow-card transition duration-300 hover:border-cyanGlow/35"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyanGlow/60 to-transparent opacity-70" />
              <div className="absolute -right-12 -top-16 h-44 w-44 rounded-full bg-violetGlow/12 blur-3xl transition duration-300 group-hover:bg-cyanGlow/14" />
              <div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyan-100">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="relative mt-8 text-xl font-bold text-white">{feature.title}</h3>
              <p className="relative mt-3 leading-7 text-slate-400">{feature.text}</p>
              <div className="relative mt-7 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyanGlow to-violetGlow opacity-80" />
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
