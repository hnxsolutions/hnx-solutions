"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiCode,
  HiDeviceMobile,
  HiLightningBolt,
  HiArrowRight,
} from "react-icons/hi";

const highlights = [
  {
    icon: HiCode,
    title: "Web Development",
    description: "High-performance web applications built with Next.js, React, and modern frameworks.",
    href: "/services",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: HiDeviceMobile,
    title: "Mobile Apps",
    description: "Cross-platform mobile apps with native performance for iOS and Android.",
    href: "/mobile-apps",
    color: "from-violet-400 to-purple-500",
  },
  {
    icon: HiLightningBolt,
    title: "AI & Automation",
    description: "Custom AI chatbots, workflow automation, and intelligent business systems.",
    href: "/ai-automation",
    color: "from-amber-400 to-orange-500",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HomeServices() {
  return (
    <section className="py-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Our Core <span className="gradient-text">Services</span>
          </h2>
          <p className="text-light-300 text-lg max-w-2xl mx-auto">
            We deliver end-to-end solutions across web, mobile, and AI — bringing
            your vision to life with cutting-edge technology.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          {highlights.map((svc) => (
            <motion.div key={svc.title} variants={item}>
              <Link
                href={svc.href}
                className="block group glass-card rounded-2xl p-8 glow-border hover:-translate-y-2 transition-all duration-500"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <svc.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {svc.title}
                </h3>
                <p className="text-light-300 text-sm leading-relaxed mb-4">
                  {svc.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                  Learn more <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-light-300/20 text-light-100 font-semibold rounded-xl hover:bg-white/5 hover:border-primary/30 transition-all"
          >
            View All Services
            <HiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
