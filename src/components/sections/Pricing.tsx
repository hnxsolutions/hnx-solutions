"use client";

import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const plans = [
  {
    name: "Core CRM",
    subtitle: "Perfect for small teams getting started.",
    price: "₹1,999",
    button: "Get Started",
    featured: false,
    features: ["Up to 3 Users", "Lead Management", "Task & Activity Tracking", "Basic Dashboards", "Email Support"],
  },
  {
    name: "Growth CRM",
    subtitle: "Ideal for growing businesses.",
    price: "₹4,999",
    button: "Start 14-Day Free Trial",
    featured: true,
    features: [
      "Up to 10 Users",
      "Workflow Automation",
      "WhatsApp & Email Triggers",
      "Advanced Dashboards",
      "Priority Support",
    ],
  },
  {
    name: "AI CRM Suite",
    subtitle: "Advanced CRM for scaling teams.",
    price: "₹9,999",
    button: "Talk to Sales",
    featured: false,
    features: [
      "Unlimited Users",
      "AI Lead Scoring",
      "Predictive Insights",
      "Custom Integrations",
      "Dedicated Success Manager",
    ],
  },
];

export function Pricing() {
  return (
    <Section
      id="pricing-plans"
      eyebrow="Plans"
      title="Simple, Transparent Pricing"
      description="Choose the CRM implementation plan that matches your current team and growth stage."
      className="pb-10"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.article
            key={plan.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ delay: index * 0.08, duration: 0.58, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            className={`relative overflow-hidden rounded-[30px] p-7 shadow-card ${
              plan.featured
                ? "hairline-glow border border-cyanGlow/30 bg-gradient-to-b from-cyanGlow/16 via-white/[0.065] to-violetGlow/13"
                : "border border-white/10 bg-white/[0.045]"
            }`}
          >
            {plan.featured ? (
              <>
                <div className="absolute -right-14 -top-14 h-52 w-52 rounded-full bg-cyanGlow/20 blur-3xl" />
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyanGlow/35 bg-cyanGlow/12 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
                  <Crown className="h-3.5 w-3.5" aria-hidden="true" />
                  MOST POPULAR
                </div>
              </>
            ) : null}
            <div className="relative">
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              <p className="mt-3 min-h-12 leading-7 text-slate-400">{plan.subtitle}</p>
              <div className="mt-8 flex items-end gap-2">
                <span className="text-5xl font-bold tracking-normal text-white">{plan.price}</span>
                <span className="pb-2 text-slate-400">/month</span>
              </div>
              <Button
                href="#consultation"
                variant={plan.featured ? "primary" : "secondary"}
                className="mt-8 w-full"
                size="lg"
                showArrow={plan.featured}
              >
                {plan.button}
              </Button>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-tealGlow/12 text-tealGlow">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
