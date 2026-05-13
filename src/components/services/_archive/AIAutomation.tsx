"use client";
import { motion } from "framer-motion";
import {
  HiChatAlt2,
  HiCog,
  HiDocumentText,
  HiChartBar,
  HiMail,
  HiUserGroup,
} from "react-icons/hi";

const solutions = [
  {
    icon: HiChatAlt2,
    title: "AI Chatbots",
    description:
      "Intelligent conversational agents trained on your business data. Handle customer queries 24/7 with human-like accuracy.",
    features: ["Custom Training", "Multi-platform Deploy", "Analytics Dashboard", "Escalation Logic"],
    useCase: "Customer Support, Sales, Onboarding",
  },
  {
    icon: HiCog,
    title: "Workflow Automation",
    description:
      "Autonomous AI agents that orchestrate complex business processes — from lead qualification to task management.",
    features: ["Multi-step Pipelines", "Decision Trees", "API Integrations", "Error Handling"],
    useCase: "Operations, HR, Finance",
  },
  {
    icon: HiDocumentText,
    title: "Document Intelligence",
    description:
      "Extract, classify, and process documents with AI. Invoices, contracts, applications — automated at scale.",
    features: ["OCR & Extraction", "Auto-Classification", "Data Validation", "Batch Processing"],
    useCase: "Legal, Finance, Healthcare",
  },
  {
    icon: HiChartBar,
    title: "Predictive Analytics",
    description:
      "AI-powered dashboards that transform raw data into actionable business intelligence and forecasts.",
    features: ["Trend Detection", "Predictive Models", "Auto Reporting", "Real-time Alerts"],
    useCase: "Business Intelligence, Marketing",
  },
  {
    icon: HiMail,
    title: "Email & Outreach AI",
    description:
      "Automated email campaigns with AI-written content, smart scheduling, and personalization at scale.",
    features: ["AI Copywriting", "Smart Sequences", "A/B Testing", "Performance Analytics"],
    useCase: "Marketing, Sales, Growth",
  },
  {
    icon: HiUserGroup,
    title: "Lead Generation",
    description:
      "Automated lead capture, scoring, and nurturing systems that work around the clock to fill your pipeline.",
    features: ["Auto Qualification", "CRM Sync", "Follow-up Sequences", "Intent Scoring"],
    useCase: "Sales, B2B, Agencies",
  },
];

const techStack = [
  "OpenAI GPT-4",
  "Claude AI",
  "LangChain",
  "Vector Databases",
  "Pinecone",
  "Python",
  "TensorFlow",
  "HuggingFace",
];

export default function AIAutomation() {
  return (
    <section id="ai" className="py-32 relative">
      <div className="absolute inset-0 bg-linear-to-b from-dark-900 via-dark-800/30 to-dark-900" />

      <div className="max-w-[min(92vw,1440px)] mx-auto px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            AI & Automation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Intelligent Systems That{" "}
            <span className="gradient-text">Work While You Sleep</span>
          </h2>
          <p className="text-light-300 text-lg max-w-2xl mx-auto">
            We build custom AI solutions that cut costs, save time, and scale
            your business operations autonomously.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 glow-border group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors">
                <sol.icon className="text-2xl text-accent-light" />
              </div>

              <h3 className="text-xl font-bold mb-3">{sol.title}</h3>
              <p className="text-sm text-light-300 leading-relaxed mb-5">
                {sol.description}
              </p>

              <div className="space-y-2 mb-5">
                {sol.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-light-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-xs text-light-300">
                  <span className="text-primary font-medium">Use cases:</span>{" "}
                  {sol.useCase}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-10 text-center glow-border"
        >
          <h3 className="text-xl font-bold mb-6">AI Technologies We Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 rounded-lg bg-accent/10 text-accent-light text-sm font-medium border border-accent/20 hover:bg-accent/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
