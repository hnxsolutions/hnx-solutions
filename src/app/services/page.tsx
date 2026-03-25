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
import { FaCloud, FaMobileAlt, FaRobot, FaPalette, FaChartLine } from "react-icons/fa";
import AnimatedGridBG from "@/components/AnimatedGridBG";
import { heroDashboardSvg } from "@/components/heroDashboardSvg";
import WhyChooseUs from "@/components/WhyChooseUs";
import { heroBgUrl } from "@/components/heroBgUrl";
import { heroBgSvg } from "@/components/heroBgSvg";
import Image from "next/image";

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




const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, type: "spring" as const },
  },
};


export default function ServicesPage() {
  return (
    <main className="bg-dark-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[48vh] flex items-center justify-center overflow-hidden py-20 md:py-24 pt-26 md:pt-30">
        {/* Unsplash background image with gradient overlays */}
        <div className="absolute inset-0 w-full h-full z-0">
          {/* Main Unsplash image */}
          <Image
            src={heroBgUrl}
            alt="Modern technology workspace"
            fill
            priority
            className="object-cover object-center w-full h-full scale-[1.03] opacity-58 contrast-115 saturate-105"
            sizes="100vw"
          />
          <div
            aria-hidden
            className="absolute right-[3%] top-1/2 hidden w-[50rem] max-w-[60vw] -translate-y-1/2 opacity-24 blur-[0.2px] lg:block"
            dangerouslySetInnerHTML={{ __html: heroDashboardSvg }}
          />
          {/* Extra SVG shape for tech/abstract glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-10"
            style={{ width: 600, height: 600, opacity: 0.45 }}
            aria-hidden
            dangerouslySetInnerHTML={{ __html: heroBgSvg }}
          />
          {/* Gradient overlays for color pop */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#08111f]/88 via-[#0b1e35]/56 to-[#17182f]/36 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_38%_48%,rgba(9,14,24,0.02)_0%,rgba(9,14,24,0.28)_42%,rgba(9,14,24,0.78)_100%)]" />
        </div>
        <AnimatedGridBG />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div
            aria-hidden
            className="absolute left-[24%] top-1/2 h-[340px] w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(5,10,18,0.82)_0%,rgba(5,10,18,0.58)_40%,rgba(5,10,18,0.14)_68%,rgba(5,10,18,0)_100%)] blur-2xl"
          />
          <div className="relative z-10 max-w-3xl text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 inline-flex items-center rounded-full border border-white/12 bg-black/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 backdrop-blur-sm"
            >
              Premium Digital Delivery
            </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 max-w-4xl text-4xl font-extrabold leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl"
            style={{ textShadow: '0 10px 40px rgba(0, 0, 0, 0.45)' }}
          >
            Full-Spectrum
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              Technology Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl lg:mx-0"
            style={{ textShadow: '0 6px 24px rgba(0, 0, 0, 0.42)' }}
          >
            From ideation to deployment, we deliver end-to-end solutions that transform your vision into powerful digital products. Every service is backed by industry best practices and cutting-edge technology.
          </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 px-7 py-3.5 font-semibold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(56,189,248,0.34)]"
              >
                Start Your Project
                <HiArrowRight className="text-lg" />
              </Link>
              <Link
                href="#services-grid"
                className="inline-flex items-center justify-center rounded-xl border border-white/14 bg-black/20 px-7 py-3.5 font-medium text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/8"
              >
                Explore Services
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-white/60 lg:justify-start"
            >
              {[
                "Web Platforms",
                "Mobile Apps",
                "AI Systems",
                "Cloud Delivery",
              ].map((item, index) => (
                <span key={item} className="inline-flex items-center gap-4">
                  <span className="font-medium tracking-wide">{item}</span>
                  {index < 3 ? <span className="h-1 w-1 rounded-full bg-cyan-300/70" /> : null}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


      {/* Services Cards Grid */}
      <section id="services-grid" className="relative py-20 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-3xl text-center lg:text-left"
          >
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/90 backdrop-blur-sm">
              Core Capabilities
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-5xl">
              Services designed to move
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent"> products faster</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/68 md:text-lg">
              Each engagement combines strategy, design, engineering, and delivery so your product ships with clarity, speed, and production-grade quality.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, i) => {
              // Modern SVG icons for each service
              const icons = [
                <FaCloud key="web" className="text-3xl text-accent drop-shadow-glow" />,
                <FaMobileAlt key="mobile" className="text-3xl text-accent drop-shadow-glow" />,
                <FaRobot key="ai" className="text-3xl text-accent drop-shadow-glow" />,
                <FaCloud key="cloud" className="text-3xl text-accent drop-shadow-glow" />,
                <FaPalette key="uiux" className="text-3xl text-accent drop-shadow-glow" />,
                <FaChartLine key="growth" className="text-3xl text-accent drop-shadow-glow" />,
              ];
              return (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.035,
                    y: -8,
                    rotateX: 4,
                    rotateY: -4,
                    boxShadow: "0 26px 60px 0 rgba(91,155,213,0.18)",
                  }}
                  className="group glass-card rounded-3xl p-8 md:p-10 glow-border border border-white/8 transition-all duration-500 shadow-xl hover:border-cyan-300/20 hover:shadow-accent/30 hover:shadow-2xl cursor-pointer relative overflow-hidden"
                  style={{ perspective: "900px", transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.14),transparent_34%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="flex flex-col items-center mb-6">
                    <span className="mb-3 animate-fade-in-up transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                      {icons[i]}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold gradient-text mb-2 animate-gradient">
                      {service.title}
                    </h2>
                    <p className="text-light-300 text-center text-base mb-4 min-h-[60px]">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 text-light-200 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.ul
                    className="space-y-2 text-left mt-2"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {service.details.slice(0, 3).map((detail, j) => (
                      <motion.li
                        key={detail}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + j * 0.08, duration: 0.4 }}
                        className="flex items-start gap-2 text-sm text-light-200"
                      >
                        <HiCheck className="text-primary flex-shrink-0 mt-0.5" />
                        {detail}
                      </motion.li>
                    ))}
                  </motion.ul>
                  <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                      Tailored Delivery
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-all duration-300 group-hover:text-white"
                    >
                      Learn more
                      <HiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                  <div className="absolute -inset-1 rounded-3xl pointer-events-none group-hover:animate-border-glow" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>


      {/* Why Choose Us & Stats */}
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-24 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/40 to-dark-900 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 glow-border"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-gradient">
              Ready to <span className="gradient-text">Start Your Project?</span>
            </h2>
            <p className="text-light-300 text-lg max-w-xl mx-auto mb-8">
              Tell us about your project and we&apos;ll provide a free consultation with a detailed proposal within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-accent to-purple-500 text-dark-900 font-bold rounded-xl text-lg shadow-lg hover:shadow-accent/40 transition-all duration-300 hover:-translate-y-1 animate-gradient"
              >
                Start Your Project
                <HiArrowRight />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-light-300/20 text-light-100 font-semibold rounded-xl text-lg hover:bg-white/5 hover:border-primary/30 transition-all"
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
