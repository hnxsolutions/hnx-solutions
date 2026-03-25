"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiChatAlt2,
  HiCog,
  HiDocumentText,
  HiChartBar,
  HiMail,
  HiUserGroup,
  HiArrowRight,
  HiCheck,
} from "react-icons/hi";

const aiHeroBgImage =
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=85";

const solutions = [
  {
    icon: HiChatAlt2,
    title: "AI Chatbots",
    description:
      "Intelligent conversational agents trained on your business data. Handle customer queries 24/7 with human-like accuracy.",
    features: ["Custom Training", "Multi-platform Deploy", "Analytics Dashboard", "Escalation Logic"],
    useCase: "Customer Support, Sales, Onboarding",
    details: "Our AI chatbots use RAG (Retrieval-Augmented Generation) to answer questions accurately from your company's knowledge base. They support multi-turn conversations, remember context, and seamlessly escalate to human agents when needed. Deploy on your website, WhatsApp, Slack, or any messaging platform.",
  },
  {
    icon: HiCog,
    title: "Workflow Automation",
    description:
      "Autonomous AI agents that orchestrate complex business processes — from lead qualification to task management.",
    features: ["Multi-step Pipelines", "Decision Trees", "API Integrations", "Error Handling"],
    useCase: "Operations, HR, Finance",
    details: "We design intelligent automation pipelines that connect your existing tools and eliminate repetitive manual work. Our agents handle complex logic including conditional branching, retry mechanisms, and parallel execution. Typical use cases save teams 20-40 hours per week.",
  },
  {
    icon: HiDocumentText,
    title: "Document Intelligence",
    description:
      "Extract, classify, and process documents with AI. Invoices, contracts, applications — automated at scale.",
    features: ["OCR & Extraction", "Auto-Classification", "Data Validation", "Batch Processing"],
    useCase: "Legal, Finance, Healthcare",
    details: "Our document AI system combines OCR, NLP, and custom ML models to extract structured data from any document type. It handles handwritten text, tables, and multi-page documents with 99%+ accuracy. Perfect for invoice processing, contract analysis, and regulatory compliance.",
  },
  {
    icon: HiChartBar,
    title: "Predictive Analytics",
    description:
      "AI-powered dashboards that transform raw data into actionable business intelligence and forecasts.",
    features: ["Trend Detection", "Predictive Models", "Auto Reporting", "Real-time Alerts"],
    useCase: "Business Intelligence, Marketing",
    details: "We build custom analytics dashboards that go beyond visualization. Our predictive models identify trends, forecast outcomes, and generate automated reports. Real-time alerting notifies you of anomalies and opportunities before they become visible in traditional metrics.",
  },
  {
    icon: HiMail,
    title: "Email & Outreach AI",
    description:
      "Automated email campaigns with AI-written content, smart scheduling, and personalization at scale.",
    features: ["AI Copywriting", "Smart Sequences", "A/B Testing", "Performance Analytics"],
    useCase: "Marketing, Sales, Growth",
    details: "Our email AI writes personalized outreach at scale, optimizes send times for maximum open rates, and automatically runs A/B tests. It learns from your best-performing campaigns and continuously improves. Connected with your CRM for seamless lead nurturing workflows.",
  },
  {
    icon: HiUserGroup,
    title: "Lead Generation",
    description:
      "Automated lead capture, scoring, and nurturing systems that work around the clock to fill your pipeline.",
    features: ["Auto Qualification", "CRM Sync", "Follow-up Sequences", "Intent Scoring"],
    useCase: "Sales, B2B, Agencies",
    details: "Our lead generation AI identifies and qualifies prospects automatically using intent signals, firmographic data, and behavioral analysis. Leads are scored, enriched with company data, and fed into your CRM with automated follow-up sequences that nurture prospects into customers.",
  },
];

const techStack = [
  { name: "OpenAI GPT-4", description: "Large language model for natural text generation" },
  { name: "Claude AI", description: "Advanced reasoning and analysis capabilities" },
  { name: "LangChain", description: "Framework for building LLM-powered applications" },
  { name: "Vector Databases", description: "Semantic search and retrieval" },
  { name: "Pinecone", description: "High-performance vector similarity search" },
  { name: "Python", description: "Core AI/ML development language" },
  { name: "TensorFlow", description: "Deep learning and neural networks" },
  { name: "HuggingFace", description: "Open-source model hub and transformers" },
];

const stats = [
  { value: "80%", label: "Avg. automation rate" },
  { value: "60%", label: "Cost reduction" },
  { value: "<2s", label: "Response time" },
  { value: "24/7", label: "Always running" },
];

export default function AIAutomationPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="relative min-h-[52vh] pt-34 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={aiHeroBgImage}
            alt="AI systems and automation visual"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] md:object-center scale-[1.06] opacity-28 contrast-105 saturate-95"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/97 via-dark-900/84 to-dark-900/52" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(99,102,241,0.2),transparent_36%),radial-gradient(circle_at_82%_78%,rgba(56,189,248,0.16),transparent_30%)]" />
          <div className="absolute right-0 top-1/2 hidden h-[32rem] w-[36rem] -translate-y-1/2 bg-[radial-gradient(circle,rgba(6,10,18,0.66)_0%,rgba(6,10,18,0.4)_44%,rgba(6,10,18,0)_74%)] blur-2xl lg:block" />
        </div>

        <div className="absolute top-20 left-10 z-[1] h-96 w-96 rounded-full bg-accent/3 blur-3xl" />
        <div className="absolute bottom-20 right-10 z-[1] h-80 w-80 rounded-full bg-primary/4 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-primary uppercase">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              AI & Automation
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight mb-6">
              Intelligent Systems That{" "}
              <span className="gradient-text">Work While You Sleep</span>
            </h1>
            <p className="text-light-200 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              We build custom AI solutions that cut costs, save time, and scale
              your business operations autonomously. From chatbots to full workflow
              automation — powered by the latest in AI technology.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#ai-solutions"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-bold text-dark-900 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
              >
                Explore Solutions
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
              {["AI Chatbots", "Workflow Agents", "Document AI", "Predictive Insights"].map((item, index) => (
                <span key={item} className="inline-flex items-center gap-4">
                  <span className="font-medium tracking-wide">{item}</span>
                  {index < 3 ? <span className="h-1 w-1 rounded-full bg-primary/70" /> : null}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6 text-center shadow-[0_12px_36px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-light-200">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Detail */}
      <section id="ai-solutions" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/30 to-dark-900" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our AI <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-light-300 text-lg max-w-2xl mx-auto">
              Six core AI capabilities, each customizable to your specific business needs.
            </p>
          </motion.div>

          <div className="space-y-8">
            {solutions.map((sol, i) => (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 md:p-10 glow-border"
              >
                <div className="grid lg:grid-cols-2 gap-10">
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                        <sol.icon className="text-2xl text-accent-light" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{sol.title}</h3>
                        <p className="text-xs text-primary">{sol.useCase}</p>
                      </div>
                    </div>
                    <p className="text-light-300 leading-relaxed mb-6">
                      {sol.details}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {sol.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm text-light-200">
                          <HiCheck className="text-primary flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tech Stack */}
      <section className="py-24 relative grid-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI Technologies{" "}
              <span className="gradient-text">We Work With</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6 glow-border text-center hover:-translate-y-1 transition-all duration-500"
              >
                <h4 className="font-bold text-accent-light mb-2">{tech.name}</h4>
                <p className="text-xs text-light-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/40 to-dark-900" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-12 glow-border"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Automate?</span>
            </h2>
            <p className="text-light-300 text-lg max-w-xl mx-auto mb-8">
              Let&apos;s discuss how AI can transform your business operations and
              save your team dozens of hours every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-dark-900 font-bold rounded-xl hover:shadow-xl hover:shadow-primary/25 transition-all hover:-translate-y-1"
              >
                Get AI Consultation
                <HiArrowRight />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-light-300/20 text-light-100 font-semibold rounded-xl hover:bg-white/5 hover:border-primary/30 transition-all"
              >
                See AI Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
