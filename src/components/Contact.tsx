"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { HiMail, HiLocationMarker, HiPhone, HiArrowRight } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";

const contactInfo = [
  {
    icon: HiMail,
    label: "Email",
    value: "hello@hnxtechnologies.com",
    href: "mailto:hello@hnxtechnologies.com",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: HiLocationMarker,
    label: "Location",
    value: "India",
    href: "#",
  },
];

const socials = [
  { icon: FiGithub, href: "#", label: "GitHub" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: FiTwitter, href: "#", label: "Twitter" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32 relative grid-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let&apos;s Build{" "}
            <span className="gradient-text">Something Great</span>
          </h2>
          <p className="text-light-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? We&apos;re ready to turn your vision into
            reality. Reach out and let&apos;s start the conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 md:p-10 glow-border"
            >
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
  );
}
