"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiCheck, HiArrowRight } from "react-icons/hi";

const plans = [
  {
    name: "Starter",
    price: "$999",
    period: "per project",
    description: "For startups and small businesses needing a strong web presence.",
    features: [
      "Modern responsive website",
      "Up to 7 pages/sections",
      "Contact form integration",
      "SEO optimization",
      "Mobile-friendly design",
      "2 weeks delivery",
      "1 month free support",
    ],
    cta: "Get Started",
    popular: false,
    gradient: "from-dark-600 to-dark-700",
    border: "border-white/10",
  },
  {
    name: "Professional",
    price: "$3,499",
    period: "per project",
    description: "Full-featured web or mobile app with custom functionality.",
    features: [
      "Custom Next.js / React Native app",
      "Database & authentication",
      "Admin dashboard",
      "API integrations",
      "Payment processing",
      "3-4 weeks delivery",
      "3 months free support",
    ],
    cta: "Start Building",
    popular: true,
    gradient: "from-primary/20 to-accent/20",
    border: "border-primary/30",
  },
  {
    name: "Enterprise",
    price: "$7,999",
    period: "per project",
    description: "AI-powered solutions with complex automation and scale.",
    features: [
      "Full-stack web + mobile app",
      "AI chatbot / automation system",
      "Custom LLM integration",
      "Cloud infrastructure setup",
      "Advanced analytics dashboard",
      "4-6 weeks delivery",
      "6 months free support",
    ],
    cta: "Contact Us",
    popular: false,
    gradient: "from-accent/10 to-violet-600/10",
    border: "border-accent/20",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/40 to-dark-900" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Transparent <span className="gradient-text">Pricing Plans</span>
          </h2>
          <p className="text-light-300 text-lg max-w-2xl mx-auto">
            Starting rates for common projects. Every engagement includes
            custom scoping — no hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative glass-card rounded-2xl p-8 ${plan.border} border transition-all hover:-translate-y-2 duration-500 ${
                plan.popular ? "ring-1 ring-primary/30" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent text-dark-900 text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-light-300 mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-black gradient-text">{plan.price}</span>
                <span className="text-sm text-light-300 ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-light-200">
                    <HiCheck className="text-primary flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-accent text-dark-900 hover:shadow-lg hover:shadow-primary/25"
                    : "border border-white/15 text-light-100 hover:bg-white/5 hover:border-primary/30"
                }`}
              >
                {plan.cta}
                <HiArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-10 text-center glow-border"
        >
          <h3 className="text-2xl font-bold mb-3">Need Something Custom?</h3>
          <p className="text-light-300 max-w-xl mx-auto mb-6">
            Every project is unique. Share your requirements and we&apos;ll
            provide a detailed, no-obligation quote within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-accent text-dark-900 font-bold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
          >
            Get Custom Quote
            <HiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
