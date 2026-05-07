"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Section } from "@/components/ui/Section";

const faqs = [
  {
    question: "How quickly can we get started with HNX?",
    answer:
      "Most teams can begin with a workflow audit within a day, then move into CRM blueprinting and setup. Typical launches happen in days, not months, depending on integrations and customization depth.",
  },
  {
    question: "Can HNX integrate with our existing tools?",
    answer:
      "Yes. HNX can connect with lead forms, email tools, WhatsApp workflows, reporting sheets, calendars, and other business systems based on your operating process.",
  },
  {
    question: "Is my data secure with HNX?",
    answer:
      "Security is designed into the CRM layer with structured permissions, access controls, secure workflows, and implementation practices aligned to enterprise-grade reliability.",
  },
  {
    question: "Can I customize HNX as per my workflow?",
    answer:
      "Absolutely. The platform is built around your sales stages, fields, team roles, automations, dashboards, and reporting needs instead of forcing a generic CRM process.",
  },
  {
    question: "Do you provide training and support?",
    answer:
      "Yes. The launch process includes training for your team, workflow handover, and ongoing improvement support so adoption stays practical and measurable.",
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer:
      "Yes. Plans can be adjusted as your team size, automation needs, and reporting requirements change.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="resources" title="Frequently Asked Questions" className="pb-16">
      <div className="mx-auto max-w-4xl space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.04, duration: 0.45, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-white outline-none transition hover:bg-white/[0.035] focus-visible:ring-2 focus-visible:ring-cyanGlow sm:px-6"
                aria-expanded={isOpen}
                aria-controls={`faq-${index}`}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-cyanGlow transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    id={`faq-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                  >
                    <p className="border-t border-white/[0.07] px-5 py-5 leading-7 text-slate-400 sm:px-6">{faq.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
