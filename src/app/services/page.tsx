"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiCode,
  HiDeviceMobile,
  HiLightningBolt,
  HiCloud,
  HiColorSwatch,
  HiTrendingUp,
  HiArrowRight,
  HiCheck,
} from "react-icons/hi";

const services = [
  {
    icon: HiCode,
    title: "Web Development",
    description:
      "High-performance web applications built with Next.js, React, and modern frameworks. Scalable architecture for enterprise needs.",
    details: [
      "Custom web applications with server-side rendering for maximum SEO and performance",
      "Progressive Web Apps (PWAs) that work offline and install like native apps",
      "E-commerce platforms with real-time inventory, payments, and analytics",
      "Admin dashboards and internal tools with role-based access control",
      "API development and third-party integrations (Stripe, Twilio, etc.)",
    ],
    tags: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: HiDeviceMobile,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps using React Native & Flutter. Native performance on iOS and Android from a single codebase.",
    details: [
      "Cross-platform apps with one codebase for iOS & Android",
      "Push notifications, deep linking, and in-app purchases",
      "Offline-first architecture with local data sync",
      "Biometric authentication and encrypted storage",
      "App Store & Play Store submission and optimization",
    ],
    tags: ["React Native", "Flutter", "Expo", "iOS", "Android", "Firebase"],
    color: "from-violet-400 to-purple-500",
  },
  {
    icon: HiLightningBolt,
    title: "AI & Automation",
    description:
      "Custom AI chatbots, intelligent agents, and workflow automation powered by GPT, LangChain, and cutting-edge LLMs.",
    details: [
      "Custom AI chatbots trained on your business data",
      "Workflow automation that reduces manual tasks by 70%+",
      "Document processing and intelligent data extraction",
      "Predictive analytics dashboards with real-time insights",
      "LLM integration and fine-tuning for specific use cases",
    ],
    tags: ["GPT-4", "Claude", "LangChain", "Python", "TensorFlow", "Vector DBs"],
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: HiCloud,
    title: "Cloud Solutions",
    description:
      "Cloud infrastructure design, deployment, and management. AWS, GCP, and Azure solutions for maximum reliability.",
    details: [
      "Cloud architecture design for scalability and cost efficiency",
      "Container orchestration with Docker and Kubernetes",
      "CI/CD pipeline setup with automated testing and deployment",
      "Database migration and optimization",
      "24/7 monitoring, alerting, and incident response",
    ],
    tags: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: HiColorSwatch,
    title: "UI/UX Design",
    description:
      "User-centered design that converts. Beautiful, intuitive interfaces crafted with research-backed design principles.",
    details: [
      "User research, personas, and journey mapping",
      "Wireframing, prototyping, and interactive mockups",
      "Design systems and component libraries for consistency",
      "Accessibility-first design (WCAG 2.1 AA)",
      "Usability testing and iterative improvements",
    ],
    tags: ["Figma", "Design Systems", "Prototyping", "UX Research", "Accessibility"],
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: HiTrendingUp,
    title: "Digital Growth",
    description:
      "SEO, performance optimization, and analytics integration to grow your online presence and drive conversions.",
    details: [
      "Technical SEO audit and optimization",
      "Performance optimization (Core Web Vitals)",
      "Analytics setup with custom event tracking",
      "Conversion rate optimization (CRO) strategies",
      "Content strategy and keyword research",
    ],
    tags: ["SEO", "Analytics", "Performance", "Growth", "CRO"],
    color: "from-sky-400 to-indigo-500",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, target audience, and technical requirements through in-depth consultation sessions.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    description: "Our design team creates wireframes and interactive prototypes, iterating based on your feedback until the vision is perfect.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Our engineers build your solution using agile sprints, with continuous testing, code reviews, and quality assurance at every stage.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We handle deployment, monitoring, and provide ongoing support to ensure your product performs flawlessly in production.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 grid-bg overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/2 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              What We Do
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Full-Spectrum{" "}
              <span className="gradient-text">Technology Services</span>
            </h1>
            <p className="text-light-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              From ideation to deployment, we deliver end-to-end solutions that
              transform your vision into powerful digital products. Every service
              is backed by industry best practices and cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={item}
                className="glass-card rounded-2xl p-8 md:p-10 glow-border"
              >
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  {/* Left: Service Info */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}
                      >
                        <service.icon className="text-2xl text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-light-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-xs rounded-full bg-white/5 text-light-200 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Detailed capabilities */}
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-3">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3 text-sm text-light-200">
                          <HiCheck className="text-primary flex-shrink-0 mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 relative grid-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Our <span className="gradient-text">Development Process</span>
            </h2>
            <p className="text-light-300 text-lg max-w-2xl mx-auto">
              A proven 4-step process that ensures every project is delivered on
              time, on budget, and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card rounded-2xl p-8 glow-border text-center hover:-translate-y-2 transition-all duration-500"
              >
                <div className="text-4xl font-black gradient-text mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-light-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-light-300 text-lg max-w-xl mx-auto mb-8">
              Tell us about your project and we&apos;ll provide a free consultation
              with a detailed proposal within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-dark-900 font-bold rounded-xl hover:shadow-xl hover:shadow-primary/25 transition-all hover:-translate-y-1"
              >
                Start Your Project
                <HiArrowRight />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-light-300/20 text-light-100 font-semibold rounded-xl hover:bg-white/5 hover:border-primary/30 transition-all"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
