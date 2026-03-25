"use client";
import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiMail, HiLocationMarker, HiPhone, HiArrowRight } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const contactHeroBgImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=85";

const contactInfo = [
  {
    icon: HiMail,
    label: "Email",
    value: "hnxtechnologies@gmail.com",
    href: "mailto:hnxtechnologies@gmail.com",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: "+91 98963 24736",
    href: "tel:+919896324736",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: "+91 98175 58010",
    href: "tel:+919817558010",
  },
  {
    icon: HiLocationMarker,
    label: "Location",
    value: "Mohali, Punjab, India",
    href: "https://maps.google.com/?q=Mohali,Punjab,India",
  },
];

const socials = [
  { icon: FiGithub, href: "#", label: "GitHub", tooltip: "Star us on GitHub", bg: "bg-white/10 text-white shadow-[0_0_12px_rgba(255,255,255,0.15)]", hoverBg: "hover:bg-white/20 hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn", tooltip: "Connect on LinkedIn", bg: "bg-[#0a66c2]/20 text-[#5b9bd5] shadow-[0_0_12px_rgba(10,102,194,0.2)]", hoverBg: "hover:bg-[#0a66c2]/30 hover:shadow-[0_0_24px_rgba(10,102,194,0.4)]" },
  { icon: FiInstagram, href: "#", label: "Instagram", tooltip: "Follow on Instagram", bg: "bg-[#e1306c]/15 text-[#e1306c] shadow-[0_0_12px_rgba(225,48,108,0.2)]", hoverBg: "hover:bg-[#e1306c]/25 hover:shadow-[0_0_24px_rgba(225,48,108,0.4)]" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main>
      {/* Page Hero */}
      <section className="relative min-h-[52vh] pt-34 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={contactHeroBgImage}
            alt="Team discussing project requirements"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] md:object-center scale-[1.06] opacity-28 contrast-105 saturate-95"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/97 via-dark-900/84 to-dark-900/52" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_84%_78%,rgba(139,92,246,0.14),transparent_29%)]" />
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
              Get In Touch
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight mb-6">
              Let&apos;s Build{" "}
              <span className="gradient-text">Something Great</span>
            </h1>
            <p className="text-light-200 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              Have a project in mind? We&apos;re ready to turn your vision into
              reality. Fill out the form below or reach out directly — we respond
              within 24 hours.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#quote-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-bold text-dark-900 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
              >
                Get a Quote
                <HiArrowRight className="text-lg" />
              </Link>
              <a
                href="mailto:hnxtechnologies@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-light-300/20 px-8 py-4 text-base font-semibold text-light-100 transition-all hover:bg-white/5 hover:border-primary/30"
              >
                Email Us Directly
              </a>
            </div>

            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-light-300/80 sm:gap-x-5">
              {["Fast Response", "Clear Scope", "Transparent Pricing", "Production Delivery"].map((item, index) => (
                <span key={item} className="inline-flex items-center gap-4">
                  <span className="font-medium tracking-wide">{item}</span>
                  {index < 3 ? <span className="h-1 w-1 rounded-full bg-primary/70" /> : null}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              {contactInfo.map((info) => (
                <a
                  key={`${info.label}-${info.value}`}
                  href={info.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="text-xl text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-light-300">{info.label}</p>
                    <p className="font-semibold group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}

              {/* Socials */}
              <div className="pt-6">
                <div className="inline-flex items-center gap-4 px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] shadow-[0_0_30px_rgba(77,208,225,0.06)]">
                  <span className="text-xs text-primary font-bold tracking-widest uppercase">Follow us</span>
                  <div className="w-px h-5 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className={`group relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${s.bg} ${s.hoverBg}`}
                    >
                      <s.icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
                      <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-white text-dark-900 text-xs font-semibold whitespace-nowrap opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 shadow-lg">
                        {s.tooltip}
                        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Why Work With Us */}
              <div className="glass-card rounded-2xl p-6 glow-border">
                <h4 className="font-bold mb-4">Why Work With HNX?</h4>
                <ul className="space-y-2.5 text-sm text-light-300">
                  {[
                    "Fast delivery — most projects under 4 weeks",
                    "Transparent communication throughout",
                    "Full-stack expertise from frontend to AI",
                    "Production-ready, scalable code",
                    "Post-launch support included",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response time box */}
              <div className="glass-card rounded-2xl p-6 glow-border text-center">
                <p className="text-3xl font-bold gradient-text mb-2">&lt;24h</p>
                <p className="text-sm text-light-300">Average response time</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              id="quote-form"
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-8 md:p-10 glow-border"
              >
                <h3 className="text-2xl font-bold mb-8">Send Us a Message</h3>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-light-200">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-dark-700/50 border border-white/10 text-light-100 placeholder:text-light-300/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-light-200">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-dark-700/50 border border-white/10 text-light-100 placeholder:text-light-300/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium mb-2 text-light-200">
                    Project Type
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-dark-700/50 border border-white/10 text-light-100 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Web Application</option>
                    <option>Mobile App</option>
                    <option>AI & Automation</option>
                    <option>Cloud Solutions</option>
                    <option>UI/UX Design</option>
                    <option>Full-Stack Solution</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium mb-2 text-light-200">
                    Budget Range
                  </label>
                  <select
                    className="w-full px-4 py-3.5 rounded-xl bg-dark-700/50 border border-white/10 text-light-100 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select budget range
                    </option>
                    <option>Under $1,000</option>
                    <option>$1,000 - $3,000</option>
                    <option>$3,000 - $8,000</option>
                    <option>$8,000 - $15,000</option>
                    <option>$15,000+</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium mb-2 text-light-200">
                    Project Details
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl bg-dark-700/50 border border-white/10 text-light-100 placeholder:text-light-300/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-primary to-accent text-dark-900 font-bold rounded-xl text-base hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
                >
                  {submitted ? "Message Sent! ✓" : "Send Message"}
                  {!submitted && <HiArrowRight />}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
