"use client";
import { motion } from "framer-motion";
import { HiDeviceMobile, HiLightningBolt, HiShieldCheck, HiRefresh } from "react-icons/hi";

const features = [
  {
    icon: HiLightningBolt,
    title: "Native Performance",
    description: "60 FPS animations, smooth gestures, and instant load times — indistinguishable from native apps.",
  },
  {
    icon: HiRefresh,
    title: "Cross-Platform",
    description: "One codebase, two platforms. React Native & Flutter for iOS and Android simultaneously.",
  },
  {
    icon: HiShieldCheck,
    title: "Enterprise-Grade Security",
    description: "Biometric auth, encrypted storage, certificate pinning, and OWASP-compliant architecture.",
  },
  {
    icon: HiDeviceMobile,
    title: "Full-Feature Apps",
    description: "Push notifications, in-app payments, maps, camera, offline mode, and real-time sync.",
  },
];

const mobileStack = [
  "React Native",
  "Expo",
  "Flutter",
  "NativeWind",
  "TypeScript",
  "Firebase",
  "Push Notifications",
  "App Store & Play Store",
  "In-App Purchases",
  "Deep Linking",
];

const screens = [
  { label: "Dashboard", gradient: "from-primary/30 to-blue-600/30" },
  { label: "Chat", gradient: "from-accent/30 to-violet-600/30" },
  { label: "Analytics", gradient: "from-emerald-500/30 to-teal-600/30" },
];

export default function MobileApps() {
  return (
    <section id="mobile" className="py-32 relative grid-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Mobile Development
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Beautiful Apps,{" "}
            <span className="gradient-text">Every Platform</span>
          </h2>
          <p className="text-light-300 text-lg max-w-2xl mx-auto">
            We build pixel-perfect mobile experiences that users love.
            From concept to App Store, we handle everything.
          </p>
        </motion.div>

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
                style={{ transform: i === 1 ? "scale(1.1)" : `translateY(${i === 0 ? "20px" : "20px"})` }}
              >
                <div className="w-36 md:w-44 rounded-3xl border-2 border-white/10 overflow-hidden bg-dark-800 shadow-2xl shadow-black/50">
                  {/* Status bar */}
                  <div className="h-6 bg-dark-700 flex items-center justify-center">
                    <div className="w-12 h-1.5 rounded-full bg-white/20" />
                  </div>
                  {/* Screen content */}
                  <div className={`h-64 md:h-80 bg-gradient-to-b ${screen.gradient} flex flex-col items-center justify-center gap-4 p-4`}>
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20" />
                    <div className="w-full space-y-2">
                      <div className="h-2 rounded-full bg-white/15 w-3/4 mx-auto" />
                      <div className="h-2 rounded-full bg-white/10 w-1/2 mx-auto" />
                    </div>
                    <div className="grid grid-cols-2 gap-2 w-full">
                      {[1, 2, 3, 4].map((n) => (
                        <div key={n} className="h-10 rounded-lg bg-white/8 border border-white/10" />
                      ))}
                    </div>
                  </div>
                  {/* Bottom bar */}
                  <div className="h-10 bg-dark-700 flex items-center justify-center gap-6">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="w-4 h-4 rounded-full bg-white/15" />
                    ))}
                  </div>
                </div>
                <p className="text-center text-xs text-light-300 mt-3">{screen.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feat) => (
              <div key={feat.title} className="flex gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feat.icon className="text-xl text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{feat.title}</h3>
                  <p className="text-sm text-light-300 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-10 text-center glow-border"
        >
          <h3 className="text-xl font-bold mb-6">Mobile Development Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {mobileStack.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
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
