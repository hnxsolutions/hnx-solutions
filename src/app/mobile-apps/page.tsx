"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiDeviceMobile,
  HiLightningBolt,
  HiShieldCheck,
  HiRefresh,
  HiArrowRight,
  HiCheck,
} from "react-icons/hi";

const mobileHeroBgImage =
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1800&q=85";

const features = [
  {
    icon: HiLightningBolt,
    title: "Native Performance",
    description: "60 FPS animations, smooth gestures, and instant load times — indistinguishable from native apps.",
    details: [
      "Hardware-accelerated animations and transitions",
      "Optimized list rendering for thousands of items",
      "Lazy loading and code splitting for fast startup",
      "Native module integration for platform-specific features",
    ],
  },
  {
    icon: HiRefresh,
    title: "Cross-Platform",
    description: "One codebase, two platforms. React Native & Flutter for iOS and Android simultaneously.",
    details: [
      "95%+ shared code between iOS and Android",
      "Platform-specific UI adaptations where needed",
      "Shared business logic and API layer",
      "Consistent behavior across all devices",
    ],
  },
  {
    icon: HiShieldCheck,
    title: "Enterprise-Grade Security",
    description: "Biometric auth, encrypted storage, certificate pinning, and OWASP-compliant architecture.",
    details: [
      "Biometric authentication (Face ID, fingerprint)",
      "AES-256 encrypted local storage",
      "SSL/TLS certificate pinning",
      "OWASP Mobile Top 10 compliance",
    ],
  },
  {
    icon: HiDeviceMobile,
    title: "Full-Feature Apps",
    description: "Push notifications, in-app payments, maps, camera, offline mode, and real-time sync.",
    details: [
      "Push notifications with rich media and deep linking",
      "In-app purchases and subscription management",
      "Offline-first architecture with background sync",
      "Real-time features via WebSocket and Firebase",
    ],
  },
];

const mobileStack = [
  { name: "React Native", category: "Framework" },
  { name: "Expo", category: "Toolchain" },
  { name: "Flutter", category: "Framework" },
  { name: "NativeWind", category: "Styling" },
  { name: "TypeScript", category: "Language" },
  { name: "Firebase", category: "Backend" },
  { name: "Supabase", category: "Backend" },
  { name: "Redux/Zustand", category: "State" },
  { name: "React Navigation", category: "Navigation" },
  { name: "Push Notifications", category: "Feature" },
  { name: "App Store & Play Store", category: "Distribution" },
  { name: "CodePush", category: "Updates" },
];

const screens = [
  { label: "Dashboard", gradient: "from-primary/30 to-blue-600/30" },
  { label: "Chat", gradient: "from-accent/30 to-violet-600/30" },
  { label: "Analytics", gradient: "from-emerald-500/30 to-teal-600/30" },
];

const appProcess = [
  { step: "01", title: "Strategy & UX Research", description: "We map your user journeys, define features, and create detailed wireframes before writing a single line of code." },
  { step: "02", title: "UI Design & Prototyping", description: "Pixel-perfect designs in Figma with interactive prototypes you can test on your actual device." },
  { step: "03", title: "Development & QA", description: "Agile development with weekly builds you can test. Automated testing on 20+ real devices." },
  { step: "04", title: "Launch & Growth", description: "App Store optimization, submission, and post-launch analytics setup. We stay on for ongoing updates." },
];

export default function MobileAppsPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="relative min-h-[52vh] pt-34 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={mobileHeroBgImage}
            alt="Mobile app design and development workspace"
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
              Mobile Development
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight mb-6">
              Beautiful Apps,{" "}
              <span className="gradient-text">Every Platform</span>
            </h1>
            <p className="text-light-200 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              We build pixel-perfect mobile experiences that users love.
              From concept to App Store, we handle everything — design, development,
              testing, and ongoing maintenance.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#mobile-capabilities"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-bold text-dark-900 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
              >
                Explore Capabilities
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
              {["iOS + Android", "Cross-Platform", "Realtime Sync", "Store Launch"].map((item, index) => (
                <span key={item} className="inline-flex items-center gap-4">
                  <span className="font-medium tracking-wide">{item}</span>
                  {index < 3 ? <span className="h-1 w-1 rounded-full bg-primary/70" /> : null}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Phone Mockups + Features */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Phone Mockups */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center gap-4"
            >
              {screens.map((screen, i) => (
                <div
                  key={screen.label}
                  className={`relative ${i === 1 ? "z-10 scale-110" : "opacity-70"}`}
                  style={{
                    transform: i === 1 ? "scale(1.1)" : `translateY(20px)`,
                  }}
                >
                  <div className="w-36 md:w-44 rounded-3xl border-2 border-white/10 overflow-hidden bg-dark-800 shadow-2xl shadow-black/50">
                    <div className="h-6 bg-dark-700 flex items-center justify-center">
                      <div className="w-12 h-1.5 rounded-full bg-white/20" />
                    </div>
                    <div
                      className={`h-64 md:h-80 bg-gradient-to-b ${screen.gradient} flex flex-col items-center justify-center gap-4 p-4`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20" />
                      <div className="w-full space-y-2">
                        <div className="h-2 rounded-full bg-white/15 w-3/4 mx-auto" />
                        <div className="h-2 rounded-full bg-white/10 w-1/2 mx-auto" />
                      </div>
                      <div className="grid grid-cols-2 gap-2 w-full">
                        {[1, 2, 3, 4].map((n) => (
                          <div
                            key={n}
                            className="h-10 rounded-lg bg-white/8 border border-white/10"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="h-10 bg-dark-700 flex items-center justify-center gap-6">
                      {[1, 2, 3].map((n) => (
                        <div key={n} className="w-4 h-4 rounded-full bg-white/15" />
                      ))}
                    </div>
                  </div>
                  <p className="text-center text-xs text-light-300 mt-3">
                    {screen.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose HNX for{" "}
                <span className="text-primary">Mobile Development?</span>
              </h2>
              <p className="text-light-300 leading-relaxed mb-6">
                We don&apos;t just build apps — we build mobile experiences that users
                open every day. Our cross-platform approach means you get native-quality
                apps for both iOS and Android, delivered faster and at lower cost than
                building separately.
              </p>
              <p className="text-light-300 leading-relaxed mb-8">
                Every app we build is performance-optimized, security-hardened, and
                designed for scalability. From startups launching their first app to
                enterprises modernizing their mobile stack — we&apos;ve got you covered.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-dark-900 font-bold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
              >
                Discuss Your App
                <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section id="mobile-capabilities" className="py-24 relative grid-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              App <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-light-300 text-lg max-w-2xl mx-auto">
              Every app we deliver comes with enterprise-grade features out of the box.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 glow-border hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <feat.icon className="text-xl text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{feat.title}</h3>
                </div>
                <p className="text-light-300 text-sm leading-relaxed mb-5">
                  {feat.description}
                </p>
                <ul className="space-y-2">
                  {feat.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-light-200">
                      <HiCheck className="text-primary flex-shrink-0 mt-0.5" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Development Process */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/40 to-dark-900" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our App{" "}
              <span className="gradient-text">Development Process</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appProcess.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card rounded-2xl p-8 glow-border text-center"
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

      {/* Mobile Tech Stack */}
      <section className="py-24 relative grid-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mobile{" "}
              <span className="gradient-text">Tech Stack</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mobileStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-xl p-5 glow-border text-center hover:-translate-y-1 transition-all"
              >
                <p className="font-bold text-primary text-sm">{tech.name}</p>
                <p className="text-xs text-light-300 mt-1">{tech.category}</p>
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
              Got an App <span className="gradient-text">Idea?</span>
            </h2>
            <p className="text-light-300 text-lg max-w-xl mx-auto mb-8">
              We&apos;ll turn your concept into a polished, production-ready mobile
              app. Let&apos;s start with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-dark-900 font-bold rounded-xl hover:shadow-xl hover:shadow-primary/25 transition-all hover:-translate-y-1"
              >
                Start Building
                <HiArrowRight />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-light-300/20 text-light-100 font-semibold rounded-xl hover:bg-white/5 hover:border-primary/30 transition-all"
              >
                See Mobile Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
