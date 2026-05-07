"use client";

import { motion } from "framer-motion";
import { ClipboardX, FileWarning, Radar, UserX } from "lucide-react";
import { Section } from "@/components/ui/Section";

const problems = [
  {
    title: "Scattered Leads",
    text: "Leads from emails, calls, forms and chats are scattered across multiple places.",
    icon: Radar,
  },
  {
    title: "Missed Follow-ups",
    text: "No timely follow-ups lead to cold leads, lost deals and unhappy prospects.",
    icon: ClipboardX,
  },
  {
    title: "Unclear Ownership",
    text: "Leads and tasks lack ownership causing confusion and delays in closing.",
    icon: UserX,
  },
  {
    title: "Poor Reporting",
    text: "Manual reports waste time and don’t provide the right insights to grow.",
    icon: FileWarning,
  },
];

export function Problems() {
  return (
    <Section id="solutions" eyebrow="Pain points" title="The Challenges We Help You Solve">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {problems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="hairline-glow relative min-h-64 overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.045] p-6 shadow-card"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyanGlow/10 blur-2xl" />
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyanGlow/22 bg-cyanGlow/10 text-cyan-100 shadow-glow">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-8 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
