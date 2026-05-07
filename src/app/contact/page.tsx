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
    bg: "bg-[#f59e0b]/15 text-[#f59e0b] shadow-[0_0_12px_rgba(245,158,11,0.25)]",
    hoverBg:
      "hover:bg-white/20 hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]",
  },
  {
    icon: FiLinkedin,
    href: "#",
    label: "LinkedIn",
    tooltip: "Connect on LinkedIn",
    bg: "bg-[#0a66c2]/20 text-[#5b9bd5] shadow-[0_0_12px_rgba(10,102,194,0.2)]",
    hoverBg:
      "hover:bg-[#0a66c2]/30 hover:shadow-[0_0_24px_rgba(10,102,194,0.4)]",
  },
  {
    icon: FiInstagram,
    href: "#",
    label: "Instagram",
    tooltip: "Follow on Instagram",
    bg: "bg-[#e1306c]/15 text-[#e1306c] shadow-[0_0_12px_rgba(225,48,108,0.2)]",
    hoverBg:
      "hover:bg-[#e1306c]/25 hover:shadow-[0_0_24px_rgba(225,48,108,0.4)]",
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

const inputClassName =
  "w-full rounded-xl border border-(--border) bg-white/70 px-4 py-3 text-(--text) placeholder:text-(--text-soft) transition-all focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 dark:border-white/10 dark:bg-dark-700/50 dark:text-light-100 dark:placeholder:text-light-300/50";

const selectClassName =
  "w-full rounded-xl border border-(--border) bg-white/70 px-4 py-3 text-(--text) transition-all focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 dark:border-white/10 dark:bg-dark-700/50 dark:text-light-100";

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
        setFeedbackMessage(
          result.message || "Failed to send message. Please try again."
        );
        return;
      }

      document.getElementById("quote-form")?.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
        block: "center",
      });

      setSubmitState("success");
      setShowSuccessOverlay(true);
      setFeedbackMessage(
        "Message sent successfully. We’ll get back to you shortly."
      );
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
    <main className="page-shell relative">
      {/* HERO */}
      <section className="page-hero hero-light relative isolate min-h-[76svh] md:min-h-[82vh] lg:flex lg:items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={contactHeroBgImage}
            alt="Team discussing project requirements"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_center] scale-[1.08] opacity-80 brightness-[0.55] contrast-110 saturate-[0.9] md:object-center dark:opacity-36 dark:brightness-[0.42] dark:contrast-110 dark:saturate-90"
          />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(248,250,252,0.92)_0%,rgba(248,250,252,0.82)_24%,rgba(248,250,252,0.48)_52%,rgba(248,250,252,0.12)_78%,rgba(248,250,252,0.03)_100%)] dark:bg-[linear-gradient(to_right,rgba(24,24,24,0.98)_0%,rgba(24,24,24,0.94)_28%,rgba(24,24,24,0.78)_54%,rgba(24,24,24,0.38)_76%,rgba(24,24,24,0.14)_100%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(14,165,233,0.12),transparent_28%),radial-gradient(circle_at_82%_76%,rgba(99,102,241,0.12),transparent_24%)] dark:bg-[radial-gradient(circle_at_16%_24%,rgba(77,208,225,0.16),transparent_30%),radial-gradient(circle_at_84%_74%,rgba(149,117,205,0.14),transparent_26%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(15,23,42,0.12),transparent_45%)] dark:bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.38),transparent_48%)]" />

          <div className="absolute left-0 top-1/2 hidden h-136 w-120 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.14)_46%,rgba(255,255,255,0)_74%)] blur-2xl lg:block dark:hidden" />
          <div className="absolute right-0 top-1/2 hidden h-136 w-152 -translate-y-1/2 bg-[radial-gradient(circle,rgba(6,10,18,0.68)_0%,rgba(6,10,18,0.42)_44%,rgba(6,10,18,0)_76%)] blur-2xl dark:lg:block" />
        </div>

        <div className="absolute left-10 top-24 z-1 h-72 w-72 rounded-full bg-primary/6 blur-3xl dark:bg-primary/4" />
        <div className="absolute bottom-16 right-10 z-1 h-72 w-72 rounded-full bg-accent/6 blur-3xl dark:bg-accent/4" />
        <div className="absolute left-1/2 top-1/2 z-1 h-144 w-xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/4 blur-[120px] dark:bg-primary/2" />

        <div className="relative z-10 mx-auto max-w-[min(95vw,1600px)] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            className="relative max-w-3xl"
          >
            <div className="absolute -inset-x-4 -inset-y-6 -z-10 rounded-4xl bg-[radial-gradient(circle,rgba(255,255,255,0.86)_0%,rgba(255,255,255,0.48)_52%,rgba(255,255,255,0)_100%)] blur-xl md:hidden dark:bg-[radial-gradient(circle,rgba(6,10,18,0.82)_0%,rgba(6,10,18,0.56)_52%,rgba(6,10,18,0)_100%)]" />

            <motion.span
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-medium text-primary backdrop-blur-sm sm:text-sm"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Contact HNX
            </motion.span>

            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.6 }}
              className="mt-6 text-4xl font-bold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Let’s Build Something
              <span className="mt-2 block gradient-text">
                That Actually Moves the Needle.
              </span>
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.6 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-(--text-muted) sm:text-lg md:text-xl"
            >
              From web apps and mobile experiences to AI automation and scalable
              cloud solutions, we help brands launch faster and grow smarter.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.6 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
            >
              <Link
                href="#quote-form"
                className="btn-shine inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-6 py-4 text-sm font-bold text-dark-900 shadow-[0_0_30px_rgba(56,189,248,0.28)] transition-all hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(56,189,248,0.4)] sm:px-8 sm:text-base"
              >
                Start Your Project
                <HiArrowRight />
              </Link>

              <a
                href="mailto:hnxtechnologies@gmail.com"
                className="gradient-border inline-flex items-center justify-center gap-2 rounded-xl border border-(--border) bg-white/55 px-6 py-4 text-sm font-semibold text-(--text) transition-all hover:border-primary/30 hover:bg-white/80 dark:bg-white/4 sm:px-8 sm:text-base"
              >
                Email Us Directly
              </a>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-(--text-muted) sm:gap-x-5 sm:text-sm"
            >
              {[
                "Fast Response",
                "Clear Scope",
                "Transparent Pricing",
                "Production Delivery",
              ].map((item, index) => (
                <span key={item} className="inline-flex items-center gap-3 sm:gap-4">
                  <span className="font-medium tracking-wide">{item}</span>
                  {index < 3 ? (
                    <span className="h-1 w-1 rounded-full bg-primary/70" />
                  ) : null}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="section-shell relative">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/2 to-transparent dark:via-white/1" />

        <div className="relative mx-auto max-w-[min(95vw,1600px)] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
            {/* CONTACT INFO */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8 lg:col-span-2"
            >
              {contactInfo.map((info) => (
                <a
                  key={`${info.label}-${info.value}`}
                  href={info.href}
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20 sm:h-12 sm:w-12">
                    <info.icon className="text-lg text-primary sm:text-xl" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-(--text-soft)">{info.label}</p>
                    <p className="wrap-break-word font-semibold transition-colors group-hover:text-primary">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}

              <div className="pt-2">
                <div className="inline-flex flex-wrap items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3 shadow-[0_0_30px_rgba(77,208,225,0.06)] sm:gap-4 sm:py-2.5">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    Follow us
                  </span>
                  <div className="hidden h-5 w-px bg-linear-to-b from-transparent via-primary/30 to-transparent sm:block" />
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className={`group relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110 sm:h-11 sm:w-11 ${s.bg} ${s.hoverBg}`}
                    >
                      <s.icon
                        size={18}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="pointer-events-none absolute -top-10 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-dark-900 opacity-0 scale-90 shadow-lg transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 sm:block">
                        {s.tooltip}
                        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-white" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-3xl p-5 sm:p-6">
                <h4 className="mb-4 text-lg font-bold">Why Work With HNX?</h4>
                <ul className="space-y-2.5 text-sm text-(--text-muted)">
                  {[
                    "Fast delivery — most projects under 4 weeks",
                    "Transparent communication throughout",
                    "Full-stack expertise from frontend to AI",
                    "Production-ready, scalable code",
                    "Post-launch support included",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card rounded-3xl p-5 text-center sm:p-6">
                <p className="mb-2 text-3xl font-bold gradient-text">&lt;24h</p>
                <p className="text-sm text-(--text-muted)">Average response time</p>
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              id="quote-form"
              className="scroll-mt-24 lg:col-span-3"
            >
              <motion.div
                layout
                transition={primaryTransition}
                className="relative perspective-[1400px]"
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
                      className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center rounded-3xl"
                    >
                      <div className="absolute inset-0 rounded-3xl bg-dark-950/65 backdrop-blur-md" />

                      <motion.div
                        initial={
                          shouldReduceMotion ? false : { opacity: 0, scale: 0.92, y: 14 }
                        }
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          delay: shouldReduceMotion ? 0 : 0.08,
                          ...softTransition,
                        }}
                        className="pointer-events-auto relative z-10 mx-3 flex min-h-105 w-[min(94vw,720px)] flex-col items-center justify-center overflow-hidden rounded-4xl border border-emerald-300/20 bg-[rgba(255,255,255,0.88)] px-5 py-8 text-center shadow-[0_28px_100px_rgba(16,185,129,0.18)] backdrop-blur-2xl sm:min-h-130 sm:px-10 dark:bg-white/8 dark:shadow-[0_28px_100px_rgba(16,185,129,0.22)]"
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <button
                          type="button"
                          onClick={handleCloseSuccessOverlay}
                          aria-label="Close success message"
                          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 text-slate-700 transition hover:bg-black/10 hover:text-slate-950 dark:border-white/10 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20 dark:hover:text-white"
                        >
                          ✕
                        </button>

                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.16),transparent_30%)]" />
                        <div className="pointer-events-none absolute -left-16 top-10 h-36 w-36 rounded-full bg-emerald-300/10 blur-3xl" />
                        <div className="pointer-events-none absolute -right-16 bottom-10 h-36 w-36 rounded-full bg-sky-300/10 blur-3xl" />

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
                              className="select-none text-[4.2rem] drop-shadow-[0_18px_40px_rgba(16,185,129,0.22)] sm:text-[6.5rem]"
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
                              className="relative -mt-4 overflow-hidden rounded-4xl border border-black/8 bg-white/90 px-5 py-5 backdrop-blur-2xl sm:-mt-5 sm:px-7 dark:border-white/10 dark:bg-white/8"
                              style={{
                                transformStyle: "preserve-3d",
                                transform: "translateZ(110px)",
                                boxShadow:
                                  "0 35px 120px rgba(16,185,129,0.22), 0 18px 40px rgba(56,189,248,0.10), inset 0 1px 0 rgba(255,255,255,0.08)",
                              }}
                            >
                              <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-emerald-300/70 to-transparent" />
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.10),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.10),transparent_35%)]" />

                              <p className="relative text-center text-[11px] font-bold uppercase tracking-[0.32em] text-emerald-600 dark:text-emerald-300/95">
                                MESSAGE SENT
                              </p>

                              <h3 className="relative mt-3 text-center text-xl font-black leading-tight text-slate-950 sm:text-3xl dark:text-white">
                                Your request has been received 🚀
                              </h3>

                              <p className="relative mt-3 text-center text-sm leading-7 text-slate-700 sm:text-base dark:text-light-100/90">
                                Our team is carefully reviewing your idea and
                                preparing the best next steps.
                              </p>

                              <p className="relative mt-2 text-center text-sm font-medium leading-7 text-sky-700 sm:text-base dark:text-sky-200">
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
                  className={`glass-card relative overflow-hidden rounded-3xl px-5 py-5 sm:px-6 md:px-10 md:py-8 ${
                    isSubmitting
                      ? "shadow-[0_0_0_1px_rgba(56,189,248,0.18)]"
                      : ""
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
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
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold sm:text-2xl">Send Us a Message</h3>
                        <p className="mt-1 text-sm text-(--text-soft)">
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
                            className="hidden items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-2 text-xs font-semibold tracking-wide text-primary sm:flex"
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

                    <div className="mb-5 grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-(--text-muted)">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={inputClassName}
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-(--text-muted)">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={inputClassName}
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="mb-5">
                      <label className="mb-2 block text-sm font-medium text-(--text-muted)">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className={selectClassName}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="Web Application">Web Application</option>
                        <option value="SaaS Platform">SaaS Platform</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="Custom CRM Systems">Custom CRM Systems</option>
                        <option value="AI & Automation">AI & Automation</option>
                        <option value="Workflow Automation">Workflow Automation</option>
                        <option value="Industry CRM Systems">Industry CRM Systems</option>
                        <option value="Cloud Solutions">Cloud Solutions</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Full-Stack Solution">Full-Stack Solution</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="mb-5">
                      <label className="mb-2 block text-sm font-medium text-(--text-muted)">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={selectClassName}
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

                    <div className="mb-5">
                      <label className="mb-2 block text-sm font-medium text-(--text-muted)">
                        Project Details
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className={`${inputClassName} resize-none`}
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
                          <HiExclamationCircle
                            className="mt-0.5 shrink-0 text-rose-300"
                            size={20}
                          />
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
                        className={`relative flex w-full items-center justify-center gap-2 py-4 text-base font-bold text-dark-900 transition-all ${
                          isSuccess
                            ? "bg-linear-to-r from-emerald-300 to-teal-300 shadow-[0_16px_45px_rgba(16,185,129,0.22)]"
                            : "bg-linear-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25"
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

                    <p className="mt-3 text-xs text-(--text-soft)" aria-live="polite">
                      We usually reply within 24 hours with next steps, estimates,
                      or a discovery call suggestion.
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
