"use client";
import { motion } from "framer-motion";
import {
  HiCode,
  HiDeviceMobile,
  HiLightningBolt,
  HiCloud,
  HiColorSwatch,
  HiTrendingUp,
} from "react-icons/hi";

const services = [
  {
    icon: HiCode,
    title: "Web Development",
    description:
      "High-performance web applications built with Next.js, React, and modern frameworks. Scalable architecture for enterprise needs.",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: HiDeviceMobile,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps using React Native & Flutter. Native performance on iOS and Android from a single codebase.",
    tags: ["React Native", "Flutter", "Expo", "iOS & Android"],
    color: "from-violet-400 to-purple-500",
  },
  {
    icon: HiLightningBolt,
    title: "AI & Automation",
    description:
      "Custom AI chatbots, intelligent agents, and workflow automation powered by GPT, LangChain, and cutting-edge LLMs.",
    tags: ["GPT-4", "LangChain", "AI Agents", "Automation"],
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: HiCloud,
    title: "Cloud Solutions",
    description:
      "Cloud infrastructure design, deployment, and management. AWS, GCP, and Azure solutions for maximum reliability.",
    tags: ["AWS", "GCP", "Docker", "CI/CD"],
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: HiColorSwatch,
    title: "UI/UX Design",
    description:
      "User-centered design that converts. Beautiful, intuitive interfaces crafted with research-backed design principles.",
    tags: ["Figma", "Design Systems", "Prototyping", "UX Research"],
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: HiTrendingUp,
    title: "Digital Growth",
    description:
      "SEO, performance optimization, and analytics integration to grow your online presence and drive conversions.",
    tags: ["SEO", "Analytics", "Performance", "Growth"],
    color: "from-sky-400 to-indigo-500",
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

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Full-Spectrum <span className="gradient-text">Technology Services</span>
          </h2>
          <p className="text-light-300 text-lg max-w-2xl mx-auto">
            From ideation to deployment, we deliver end-to-end solutions that
            transform your vision into powerful digital products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group glass-card rounded-2xl p-8 glow-border hover:-translate-y-2 transition-all duration-500"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="text-2xl text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-light-300 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-light-200 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
