"use client";

import { useEffect, useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
} from "framer-motion";
import {
  HiMail,
  HiLocationMarker,
  HiPhone,
  HiArrowRight,
  HiExclamationCircle,
} from "react-icons/hi";
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
  {
    icon: FiGithub,
    href: "#",
    label: "GitHub",
    tooltip: "Star us on GitHub",
    bg: "bg-white/10 text-white shadow-[0_0_12px_rgba(255,255,255,0.15)]",
    hoverBg: "hover:bg-white/20 hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]",
  },
  {
    icon: FiLinkedin,
    href: "#",
    label: "LinkedIn",
    tooltip: "Connect on LinkedIn",
    bg: "bg-[#0a66c2]/20 text-[#5b9bd5] shadow-[0_0_12px_rgba(10,102,194,0.2)]",
    hoverBg: "hover:bg-[#0a66c2]/30 hover:shadow-[0_0_24px_rgba(10,102,194,0.4)]",
  },
  {
    icon: FiInstagram,
    href: "#",
    label: "Instagram",
    tooltip: "Follow on Instagram",
    bg: "bg-[#e1306c]/15 text-[#e1306c] shadow-[0_0_12px_rgba(225,48,108,0.2)]",
    hoverBg: "hover:bg-[#e1306c]/25 hover:shadow-[0_0_24px_rgba(225,48,108,0.4)]",
  },
];

type ContactFormData = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

type SubmitState = "idle" | "loading" | "success" | "error";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
};

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion();

  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);

  useEffect(() => {
    if (!showSuccessOverlay) return;

    const timer = window.setTimeout(() => {
      setShowSuccessOverlay(false);
      setSubmitState("idle");
      setFeedbackMessage("");
    }, 18000);

    return () => window.clearTimeout(timer);
  }, [showSuccessOverlay]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (submitState === "error") {
      setSubmitState("idle");
      setFeedbackMessage("");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCloseSuccessOverlay = () => {
    setShowSuccessOverlay(false);
    setSubmitState("idle");
    setFeedbackMessage("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (submitState === "loading") return;

    try {
      setSubmitState("loading");
      setFeedbackMessage("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setSubmitState("error");
        setFeedbackMessage(result.message || "Failed to send message. Please try again.");
        return;
      }

      document.getElementById("quote-form")?.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
        block: "center",
      });

      setSubmitState("success");
      setShowSuccessOverlay(true);
      setFeedbackMessage("Message sent successfully. We’ll get back to you shortly.");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitState("error");
      setFeedbackMessage("Something went wrong while sending your message.");
    }
  };

  const isSubmitting = submitState === "loading";
  const isSuccess = submitState === "success";
  const isError = submitState === "error";

  const primaryTransition: Transition = shouldReduceMotion
    ? { duration: 0.01 }
    : { type: "spring" as const, stiffness: 240, damping: 22 };

  const softTransition: Transition = shouldReduceMotion
    ? { duration: 0.01 }
    : { duration: 0.35, ease: [0.22, 1, 0.36, 1] };

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
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold tracking-[0.22em] uppercase text-primary shadow-[0_0_18px_rgba(56,189,248,0.15)]">
              Contact HNX
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
              Let’s Build Something
              <span className="block gradient-text mt-2">That Actually Moves the Needle.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg sm:text-xl text-light-300 leading-relaxed">
              From web apps and mobile experiences to AI automation and scalable cloud solutions,
              we help brands launch faster and grow smarter.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#quote-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-bold text-dark-900 shadow-[0_0_30px_rgba(56,189,248,0.28)] transition-all hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(56,189,248,0.4)]"
              >
                Start Your Project <HiArrowRight />
              </Link>

              <a
                href="mailto:hnxtechnologies@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-light-300/20 px-8 py-4 text-base font-semibold text-light-100 transition-all hover:bg-white/5 hover:border-primary/30"
              >
                Email Us Directly
              </a>
            </div>

            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-light-300/80 sm:gap-x-5">
              {["Fast Response", "Clear Scope", "Transparent Pricing", "Production Delivery"].map(
                (item, index) => (
                  <span key={item} className="inline-flex items-center gap-4">
                    <span className="font-medium tracking-wide">{item}</span>
                    {index < 3 ? <span className="h-1 w-1 rounded-full bg-primary/70" /> : null}
                  </span>
                )
              )}
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
              initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
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

              <div className="pt-6">
                <div className="inline-flex items-center gap-4 px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] shadow-[0_0_30px_rgba(77,208,225,0.06)]">
                  <span className="text-xs text-primary font-bold tracking-widest uppercase">
                    Follow us
                  </span>
                  <div className="w-px h-5 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className={`group relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${s.bg} ${s.hoverBg}`}
                    >
                      <s.icon
                        size={18}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg bg-white px-3 py-1.5 text-dark-900 text-xs font-semibold whitespace-nowrap opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 shadow-lg">
                        {s.tooltip}
                        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>

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

              <div className="glass-card rounded-2xl p-6 glow-border text-center">
                <p className="text-3xl font-bold gradient-text mb-2">&lt;24h</p>
                <p className="text-sm text-light-300">Average response time</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              id="quote-form"
              className="lg:col-span-3 scroll-mt-24"
            >
              <motion.div
                layout
                transition={primaryTransition}
                className="relative [perspective:1400px]"
              >
                <AnimatePresence>
                  {showSuccessOverlay && (
                    <motion.div
                      role="status"
                      aria-live="polite"
                      initial={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, y: 18, scale: 0.96 }
                      }
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, y: -10, scale: 0.97 }
                      }
                      transition={softTransition}
                      className="absolute inset-0 z-30 flex items-center justify-center rounded-2xl pointer-events-none"                    >
                      <div className="absolute inset-0 rounded-2xl bg-dark-950/65 backdrop-blur-md" />

                      <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92, y: 14 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          delay: shouldReduceMotion ? 0 : 0.08,
                          ...softTransition,
                        }}
                        className="relative z-10 mx-3 flex w-[min(94vw,720px)] min-h-[520px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-emerald-300/20 bg-white/[0.08] px-6 py-8 text-center shadow-[0_28px_100px_rgba(16,185,129,0.22)] backdrop-blur-2xl sm:px-10 pointer-events-auto"                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <button
                          type="button"
                          onClick={handleCloseSuccessOverlay}
                          aria-label="Close success message"
                          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white"
                        >
                          ✕
                        </button>

                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.16),transparent_30%)]" />
                        <div className="pointer-events-none absolute -left-16 top-10 h-36 w-36 rounded-full bg-emerald-300/10 blur-3xl" />
                        <div className="pointer-events-none absolute -right-16 bottom-10 h-36 w-36 rounded-full bg-sky-300/10 blur-3xl" />

                        {/* <motion.span
                          aria-hidden="true"
                          className="pointer-events-none absolute h-80 w-80 rounded-full border border-emerald-300/20"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, ease: "linear" }}
                        />
                        <motion.span
                          aria-hidden="true"
                          className="pointer-events-none absolute h-64 w-64 rounded-full border border-sky-300/15"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 4, ease: "linear" }}
                        /> */}

                        <motion.div
                          initial={
                            shouldReduceMotion
                              ? false
                              : {
                                  opacity: 0,
                                  scale: 0.82,
                                  y: 42,
                                  rotateX: -18,
                                  rotateY: 14,
                                  z: -80,
                                }
                          }
                          animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            rotateX: 0,
                            rotateY: 0,
                            z: 0,
                          }}
                          transition={{
                            delay: shouldReduceMotion ? 0 : 0.2,
                            duration: shouldReduceMotion ? 0.01 : 0.8,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="relative z-10 flex flex-col items-center"
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <motion.div
                            animate={
                              shouldReduceMotion
                                ? {}
                                : {
                                    y: [0, -10, 0],
                                    rotateX: [0, 3, 0],
                                    rotateY: [-3, 3, -3],
                                  }
                            }
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="flex flex-col items-center"
                            style={{ transformStyle: "preserve-3d" }}
                          >
                            <motion.div
                              animate={
                                shouldReduceMotion
                                  ? {}
                                  : {
                                      y: [0, -6, 0],
                                      rotate: [0, -4, 4, 0],
                                    }
                              }
                              transition={{
                                duration: 2.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              className="select-none text-[5.5rem] sm:text-[6.5rem] drop-shadow-[0_18px_40px_rgba(16,185,129,0.22)]"
                              style={{ transform: "translateZ(52px)" }}
                            >
                              🤖
                            </motion.div>

                            <motion.div
                              initial={
                                shouldReduceMotion
                                  ? false
                                  : {
                                      opacity: 0,
                                      y: 36,
                                      rotateX: -18,
                                      rotateY: -12,
                                      scale: 0.88,
                                    }
                              }
                              animate={{
                                opacity: 1,
                                y: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                              }}
                              transition={{
                                delay: shouldReduceMotion ? 0 : 0.2,
                                duration: shouldReduceMotion ? 0.01 : 0.85,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="relative mt-[-20px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] px-7 py-5 backdrop-blur-2xl"
                              style={{
                                transformStyle: "preserve-3d",
                                transform: "translateZ(110px)",
                                boxShadow:
                                  "0 35px 120px rgba(16,185,129,0.22), 0 18px 40px rgba(56,189,248,0.10), inset 0 1px 0 rgba(255,255,255,0.08)",
                              }}
                            >
                              {/* top glow line */}
                              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />

                              {/* background gradient glow */}
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.10),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.10),transparent_35%)]" />

                              <p className="relative text-[11px] font-bold uppercase tracking-[0.32em] text-emerald-300/95 text-center">
                                MESSAGE SENT
                              </p>

                              <h3 className="relative mt-3 text-2xl sm:text-3xl font-black leading-tight text-white text-center">
                                Your request has been received 🚀
                              </h3>

                              <p className="relative mt-3 text-sm sm:text-base leading-7 text-light-100/90 text-center">
                                Our team is carefully reviewing your idea and preparing the best next steps.
                              </p>

                              <p className="relative mt-2 text-sm sm:text-base font-medium leading-7 text-sky-200 text-center">
                                We&apos;ll contact you soon!!
                              </p>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.form
                  layout
                  onSubmit={handleSubmit}
                  transition={primaryTransition}
                  className={`glass-card relative overflow-hidden rounded-2xl px-8 py-3 md:px-10 md:py-4 glow-border ${
                    isSubmitting ? "shadow-[0_0_0_1px_rgba(56,189,248,0.18)]" : ""
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    animate={
                      isSubmitting && !shouldReduceMotion
                        ? {
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                          }
                        : { backgroundPosition: "50% 50%" }
                    }
                    transition={{
                      duration: 4,
                      repeat: isSubmitting ? Infinity : 0,
                      ease: "linear",
                    }}
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 15% 20%, rgba(56,189,248,0.09), transparent 28%), radial-gradient(circle at 85% 80%, rgba(139,92,246,0.08), transparent 25%)",
                    }}
                  />

                  <motion.div
                    animate={
                      showSuccessOverlay && !shouldReduceMotion
                        ? { opacity: 0.18, scale: 0.985, filter: "blur(2px)" }
                        : { opacity: 1, scale: 1, filter: "blur(0px)" }
                    }
                    transition={softTransition}
                    className="relative z-10"
                  >
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold">Send Us a Message</h3>
                        <p className="mt-1 text-sm text-light-300/80">
                          Tell us what you’re building and we’ll suggest the best next step.
                        </p>
                      </div>

                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.div
                            key="loading-chip"
                            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                            transition={softTransition}
                            className="hidden sm:flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-2 text-xs font-semibold tracking-wide text-primary"
                          >
                            <span className="relative flex h-4 w-4 items-center justify-center">
                              <span className="absolute inline-flex h-4 w-4 rounded-full border-2 border-primary/25" />
                              <motion.span
                                className="absolute inline-flex h-4 w-4 rounded-full border-2 border-transparent border-t-primary"
                                animate={shouldReduceMotion ? {} : { rotate: 360 }}
                                transition={{
                                  duration: 0.9,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              />
                            </span>
                            Sending
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5 text-light-200">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 rounded-xl bg-dark-700/50 border border-white/10 text-light-100 placeholder:text-light-300/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-light-200">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 rounded-xl bg-dark-700/50 border border-white/10 text-light-100 placeholder:text-light-300/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2 text-light-200">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-700/50 border border-white/10 text-light-100 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="Web Application">Web Application</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="AI & Automation">AI & Automation</option>
                        <option value="Cloud Solutions">Cloud Solutions</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Full-Stack Solution">Full-Stack Solution</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2 text-light-200">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-700/50 border border-white/10 text-light-100 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                      >
                        <option value="" disabled>
                          Select budget range
                        </option>
                        <option value="Under $1,000">Under $1,000</option>
                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                        <option value="$3,000 - $8,000">$3,000 - $8,000</option>
                        <option value="$8,000 - $15,000">$8,000 - $15,000</option>
                        <option value="$15,000+">$15,000+</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2 text-light-200">
                        Project Details
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-700/50 border border-white/10 text-light-100 placeholder:text-light-300/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                        placeholder="Tell us about your project, goals, and timeline."
                      />
                    </div>

                    <AnimatePresence mode="wait">
                      {isError && feedbackMessage ? (
                        <motion.div
                          key="error-message"
                          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                          transition={softTransition}
                          className="mb-5 flex items-start gap-3 rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-100"
                          role="alert"
                        >
                          <HiExclamationCircle className="mt-0.5 shrink-0 text-rose-300" size={20} />
                          <span>{feedbackMessage}</span>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>

                    <motion.button
                      layout
                      whileTap={shouldReduceMotion ? {} : { scale: 0.985 }}
                      type="submit"
                      disabled={isSubmitting}
                      transition={primaryTransition}
                      className="group relative w-full overflow-hidden rounded-xl"
                    >
                      <motion.span
                        aria-hidden="true"
                        className="absolute inset-0"
                        animate={
                          isSubmitting && !shouldReduceMotion
                            ? { x: ["-120%", "120%"] }
                            : { x: "-120%" }
                        }
                        transition={{
                          duration: 1.25,
                          repeat: isSubmitting ? Infinity : 0,
                          ease: "easeInOut",
                        }}
                        style={{
                          background:
                            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)",
                        }}
                      />

                      <motion.span
                        layout
                        transition={primaryTransition}
                        className={`relative flex w-full items-center justify-center gap-2 py-3 text-base font-bold text-dark-900 transition-all ${
                          isSuccess
                            ? "bg-gradient-to-r from-emerald-300 to-teal-300 shadow-[0_16px_45px_rgba(16,185,129,0.22)]"
                            : "bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25"
                        } ${isSubmitting ? "cursor-not-allowed opacity-90" : "hover:-translate-y-0.5"}`}
                      >
                        <AnimatePresence mode="wait" initial={false}>
                          {isSubmitting ? (
                            <motion.span
                              key="loading"
                              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                              transition={softTransition}
                              className="flex items-center gap-3"
                            >
                              <span className="relative flex h-5 w-5 items-center justify-center">
                                <span className="absolute inline-flex h-5 w-5 rounded-full border-2 border-dark-900/20" />
                                <motion.span
                                  className="absolute inline-flex h-5 w-5 rounded-full border-2 border-transparent border-t-dark-900"
                                  animate={shouldReduceMotion ? {} : { rotate: 360 }}
                                  transition={{
                                    duration: 0.9,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                />
                              </span>
                              Sending your message...
                            </motion.span>
                          ) : isSuccess ? (
                            <motion.span
                              key="success"
                              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                              transition={softTransition}
                              className="flex items-center gap-3"
                            >
                              <span className="relative flex h-6 w-6 items-center justify-center">
                                <span className="absolute inline-flex h-6 w-6 rounded-full border-2 border-dark-900/25" />
                                <motion.span
                                  className="absolute inline-flex h-6 w-6 rounded-full border-2 border-transparent border-t-dark-900"
                                  animate={shouldReduceMotion ? {} : { rotate: 360 }}
                                  transition={{ duration: 3.5, ease: "linear" }}
                                />
                                <motion.span
                                  className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-dark-900"
                                  animate={shouldReduceMotion ? {} : { scale: [0.8, 1.15, 1] }}
                                  transition={{ duration: 0.7, ease: "easeOut" }}
                                />
                              </span>
                              Sent
                            </motion.span>
                          ) : (
                            <motion.span
                              key="idle"
                              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                              transition={softTransition}
                              className="flex items-center gap-2"
                            >
                              Send Message
                              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.span>
                    </motion.button>

                    <p className="mt-2 text-xs text-light-300/65" aria-live="polite">
                      We usually reply within 24 hours with next steps, estimates, or a discovery
                      call suggestion.
                    </p>
                  </motion.div>
                </motion.form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}