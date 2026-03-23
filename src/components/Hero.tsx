"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight, HiPlay } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      {/* Ambient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Engineering Tomorrow&apos;s Solutions Today
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              We Build
              <br />
              <span className="gradient-text">Digital Products</span>
              <br />
              That Scale
            </h1>

            <p className="text-lg md:text-xl text-light-300 max-w-lg mb-10 leading-relaxed">
              HNX Technologies crafts enterprise-grade web platforms, mobile
              applications, and AI-powered automation systems that drive
              measurable business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-dark-900 font-bold rounded-xl text-base hover:shadow-xl hover:shadow-primary/25 transition-all hover:-translate-y-1"
              >
                Start Your Project
                <HiArrowRight className="text-lg" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-light-300/20 text-light-100 font-semibold rounded-xl text-base hover:bg-white/5 hover:border-primary/30 transition-all"
              >
                <HiPlay className="text-lg" />
                View Our Work
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-light-300">Follow us:</span>
              {[
                { Icon: FiGithub, href: "#" },
                { Icon: FiLinkedin, href: "#" },
                { Icon: FiTwitter, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-light-300 hover:text-primary hover:border-primary/30 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - 3D-like Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Central hexagon shape */}
              <div className="absolute inset-8 rounded-3xl bg-gradient-to-br from-dark-700 to-dark-800 border border-white/10 rotate-6 animate-float" />
              <div className="absolute inset-12 rounded-3xl glass-card flex flex-col items-center justify-center gap-6 -rotate-3">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse-glow">
                  <span className="text-3xl font-black text-dark-900">H</span>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">HNX Technologies</p>
                  <p className="text-light-300 text-sm mt-1">
                    Web · Mobile · AI · Cloud
                  </p>
                </div>
                {/* Floating tech badges */}
                <div className="flex flex-wrap gap-2 justify-center px-8">
                  {["Next.js", "React Native", "AI/ML", "Cloud", "TypeScript"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-24 h-24 grid grid-cols-4 gap-2 opacity-30">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-6 text-center glow-border"
            >
              <p className="text-3xl md:text-4xl font-bold gradient-text">
                {stat.value}
              </p>
              <p className="text-sm text-light-300 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
