"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiCheck, HiArrowRight } from "react-icons/hi";

const pricingHeroBgImage =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=85";

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
    extras: [
      "Custom domain setup assistance",
      "Basic analytics integration",
      "Social media link integration",
      "1 round of design revisions",
    ],
    cta: "Get Started",
    popular: false,
    gradient: "from-dark-600 to-dark-700",
    border: "border-white/10",
    bestFor: "Landing pages, portfolios, small business websites",
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
    extras: [
      "User roles & permissions",
      "Email notification system",
      "Cloud deployment (Vercel/AWS)",
      "3 rounds of design revisions",
      "Performance optimization",
    ],
    cta: "Start Building",
    popular: true,
    gradient: "from-primary/20 to-accent/20",
    border: "border-primary/30",
    bestFor: "SaaS platforms, e-commerce, mobile apps, dashboards",
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
    extras: [
      "Custom AI model training",
      "Multi-tenant architecture",
      "Microservices backend",
      "CI/CD pipeline setup",
      "Load testing & optimization",
      "Dedicated project manager",
    ],
    cta: "Contact Us",
    popular: false,
    gradient: "from-accent/10 to-violet-600/10",
    border: "border-accent/20",
    bestFor: "Enterprise apps, AI platforms, complex automation systems",
  },
];

const faqs = [
  {
    question: "What's included in every project?",
    answer: "Every project includes requirement analysis, custom design, development, testing, deployment, source code handover, and post-launch support. We also provide documentation for your team.",
  },
  {
    question: "How do payments work?",
    answer: "We typically work with a 50% upfront + 50% on completion structure. For larger projects, we can arrange milestone-based payments. All payments are via bank transfer or Stripe.",
  },
  {
    question: "Can I request changes during development?",
    answer: "Absolutely. We work in agile sprints with weekly demos, so you can provide feedback and request adjustments throughout the development process. Minor scope changes are included; larger changes are quoted separately.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer: "Yes. After the free support period ends, we offer monthly maintenance plans starting at $199/month that include bug fixes, minor updates, server monitoring, and priority support.",
  },
  {
    question: "What if my project doesn't fit these plans?",
    answer: "Most projects are custom-scoped anyway. These plans are starting points. Contact us with your requirements and we'll provide a detailed, no-obligation quote within 24 hours.",
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes, we're happy to sign NDAs before any discussion begins. We take confidentiality seriously and have standard agreements ready to go.",
  },
];

export default function PricingPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="relative min-h-[52vh] pt-34 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={pricingHeroBgImage}
            alt="Pricing and business planning"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] md:object-center scale-[1.06] opacity-28 contrast-105 saturate-95"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/97 via-dark-900/84 to-dark-900/52" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_84%_78%,rgba(244,114,182,0.14),transparent_29%)]" />
          <div className="absolute right-0 top-1/2 hidden h-[32rem] w-[36rem] -translate-y-1/2 bg-[radial-gradient(circle,rgba(6,10,18,0.66)_0%,rgba(6,10,18,0.4)_44%,rgba(6,10,18,0)_74%)] blur-2xl lg:block" />
        </div>

        <div className="absolute top-20 left-10 z-[1] h-96 w-96 rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute bottom-20 right-10 z-[1] h-80 w-80 rounded-full bg-accent/4 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-primary uppercase">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Pricing
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight mb-6">
              Transparent{" "}
              <span className="gradient-text">Pricing Plans</span>
            </h1>
            <p className="text-light-200 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              Starting rates for common projects. Every engagement includes
              custom scoping — no hidden fees, no surprises. Pick a plan or
              get a custom quote.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#pricing-plans"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-bold text-dark-900 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
              >
                Compare Plans
                <HiArrowRight className="text-lg" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-light-300/20 px-8 py-4 text-base font-semibold text-light-100 transition-all hover:bg-white/5 hover:border-primary/30"
              >
                Get a Quote
              </Link>
            </div>

            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-light-300/80 sm:gap-x-5">
              {["Web Platforms", "Mobile Apps", "AI Systems", "Enterprise Builds"].map((item, index) => (
                <span key={item} className="inline-flex items-center gap-4">
                  <span className="font-medium tracking-wide">{item}</span>
                  {index < 3 ? <span className="h-1 w-1 rounded-full bg-primary/70" /> : null}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section id="pricing-plans" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/40 to-dark-900" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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

                <div className="mb-4">
                  <span className="text-4xl font-black gradient-text">{plan.price}</span>
                  <span className="text-sm text-light-300 ml-2">{plan.period}</span>
                </div>

                <p className="text-xs text-primary mb-6">Best for: {plan.bestFor}</p>

                <h4 className="text-sm font-semibold text-light-100 mb-3">Core Features</h4>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-light-200">
                      <HiCheck className="text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <h4 className="text-sm font-semibold text-light-100 mb-3">Also Included</h4>
                <ul className="space-y-3 mb-8">
                  {plan.extras.map((extra) => (
                    <li key={extra} className="flex items-start gap-3 text-sm text-light-300">
                      <HiCheck className="text-accent-light flex-shrink-0 mt-0.5" />
                      {extra}
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
            className="rounded-2xl border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-10 text-center shadow-[0_12px_36px_rgba(0,0,0,0.18)] backdrop-blur-xl"
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

      {/* FAQ */}
      <section className="py-24 relative grid-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-xl p-6 glow-border"
              >
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-sm text-light-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
