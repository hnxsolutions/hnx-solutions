"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { HiMail, HiLocationMarker, HiPhone, HiArrowRight } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";

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
  { icon: FiGithub, href: "#", label: "GitHub" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: FiTwitter, href: "#", label: "Twitter" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
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
      <section className="relative pt-40 pb-20 grid-bg overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Let&apos;s Build{" "}
              <span className="gradient-text">Something Great</span>
            </h1>
            <p className="text-light-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? We&apos;re ready to turn your vision into
              reality. Fill out the form below or reach out directly — we respond
              within 24 hours.
            </p>
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
                  key={info.label}
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
                <p className="text-sm text-light-300 mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-light-300 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
                    >
                      <s.icon size={18} />
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
