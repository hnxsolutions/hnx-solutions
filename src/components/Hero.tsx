"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowRight, HiPlay } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "15+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "2+", label: "Years Experience" },
];

const homeHeroBgImage =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85";

const flipCards = [
  {
    title: "HNX Technologies",
    subtitle: "Web · Mobile · AI · Cloud",
    image: "/images/flip-cloud.svg",
    badges: ["Next.js", "React Native", "AI/ML", "Cloud", "TypeScript"],
  },
  {
    title: "Deep Research",
    subtitle: "Data-driven product validation",
    image: "/images/flip-research.svg",
    badges: ["Analytics", "Due Diligence", "Market Fit", "Strategy"],
  },
  {
    title: "AI Automation",
    subtitle: "Intelligent workflow systems",
    image: "/images/flip-ai.svg",
    badges: ["Chatbots", "Agents", "ML Pipelines", "NLP"],
  },
  {
    title: "Cloud Security",
    subtitle: "Zero-trust infrastructure",
    image: "/images/flip-security.svg",
    badges: ["Encryption", "Compliance", "IAM", "Firewall"],
  },
  {
    title: "SaaS Solutions",
    subtitle: "Full-stack product engineering",
    image: "/images/flip-saas.svg",
    badges: ["Billing", "Multi-tenant", "Dashboards", "Auth"],
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % flipCards.length);
  }, []);

  useEffect(() => {
    const id = setInterval(nextCard, 3000);
    return () => clearInterval(id);
  }, [nextCard]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={homeHeroBgImage}
          alt="Modern digital workspace"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center] md:object-[70%_center] scale-[1.08] opacity-26 contrast-105 saturate-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/88 to-dark-900/62 md:from-dark-900/96 md:via-dark-900/82 md:to-dark-900/46" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_28%,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_84%_74%,rgba(139,92,246,0.10),transparent_24%)]" />
        <div className="absolute right-0 top-1/2 hidden h-[36rem] w-[42rem] -translate-y-1/2 bg-[radial-gradient(circle,rgba(6,10,18,0.62)_0%,rgba(6,10,18,0.42)_44%,rgba(6,10,18,0)_74%)] blur-2xl lg:block" />
      </div>

      {/* Ambient Orbs */}
      <div className="absolute top-20 left-10 z-[1] w-96 h-96 bg-primary/2 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 z-[1] w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.01] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-10 md:pt-24 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-x-4 -inset-y-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle,rgba(6,10,18,0.78)_0%,rgba(6,10,18,0.52)_52%,rgba(6,10,18,0)_100%)] blur-xl md:hidden" />
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

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
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

            <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-light-300/75 sm:gap-x-5">
              {[
                "Web Platforms",
                "Mobile Apps",
                "AI Automation",
                "Cloud Systems",
              ].map((item, index) => (
                <span key={item} className="inline-flex items-center gap-4">
                  <span className="font-medium tracking-wide">{item}</span>
                  {index < 3 ? <span className="h-1 w-1 rounded-full bg-primary/70" /> : null}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="inline-flex items-center gap-4 px-5 py-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] shadow-[0_0_30px_rgba(77,208,225,0.06)]">
              <span className="text-xs text-primary font-bold tracking-widest uppercase">Follow us</span>
              <div className="w-px h-5 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
              {[
                { Icon: FiGithub, href: "#", label: "Star us on GitHub", bg: "bg-white/10 text-white shadow-[0_0_12px_rgba(255,255,255,0.15)]", hoverBg: "hover:bg-white/20 hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]" },
                { Icon: FiLinkedin, href: "#", label: "Connect on LinkedIn", bg: "bg-[#0a66c2]/20 text-[#5b9bd5] shadow-[0_0_12px_rgba(10,102,194,0.2)]", hoverBg: "hover:bg-[#0a66c2]/30 hover:shadow-[0_0_24px_rgba(10,102,194,0.4)]" },
                { Icon: FiInstagram, href: "#", label: "Follow on Instagram", bg: "bg-[#e1306c]/15 text-[#e1306c] shadow-[0_0_12px_rgba(225,48,108,0.2)]", hoverBg: "hover:bg-[#e1306c]/25 hover:shadow-[0_0_24px_rgba(225,48,108,0.4)]" },
              ].map(({ Icon, href, label, bg, hoverBg }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${bg} ${hoverBg}`}
                >
                  <Icon size={19} className="transition-transform duration-300 group-hover:scale-110" />
                  {/* Tooltip */}
                  <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-white text-dark-900 text-xs font-semibold whitespace-nowrap opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 shadow-lg">
                    {label}
                    <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Stacked Flip Card Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative -mt-20 xl:-mt-32"
          >
            <div
              className="relative w-full max-w-md xl:max-w-lg mx-auto cursor-pointer"
              style={{ perspective: "1200px", height: "380px" }}
              onClick={nextCard}
            >
              {/* Render cards in reverse so the active one is on top */}
              {flipCards.map((c, i) => {
                const offset = (i - activeIndex + flipCards.length) % flipCards.length;
                // offset 0 = active (front), 1 = just behind, 2+ = further back
                const isActive = offset === 0;
                const zIndex = flipCards.length - offset;
                const scale = 1 - offset * 0.05;
                const translateY = offset * 14;
                const rotateZ = offset * 2;
                const opacity = offset <= 2 ? 1 - offset * 0.2 : 0;

                return (
                  <motion.div
                    key={c.title}
                    animate={{
                      scale,
                      y: translateY,
                      rotateZ,
                      rotateY: isActive ? 0 : 0,
                      opacity,
                      zIndex,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="absolute inset-5 xl:inset-6 rounded-3xl glass-card overflow-hidden border border-white/[0.06]"
                    style={{
                      transformOrigin: "center bottom",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    {/* Full-bleed background image */}
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover"
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                    {/* Content overlaid at bottom */}
                    <div className="relative h-full flex flex-col items-center justify-end gap-3 p-6 pb-8">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white drop-shadow-lg">{c.title}</p>
                        <p className="text-light-200 text-sm mt-1 drop-shadow">{c.subtitle}</p>
                      </div>

                      <div className="flex flex-wrap gap-2 justify-center px-2">
                        {c.badges.map((badge) => (
                          <span
                            key={badge}
                            className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/90 border border-white/20 backdrop-blur-sm"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Card indicator dots */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {flipCards.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(i);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === activeIndex
                        ? "bg-primary w-6"
                        : "bg-light-300/30 hover:bg-light-300/50"
                    }`}
                  />
                ))}
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
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-6 text-center shadow-[0_12px_36px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            >
              <p className="text-3xl md:text-4xl font-bold gradient-text">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-light-200">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
