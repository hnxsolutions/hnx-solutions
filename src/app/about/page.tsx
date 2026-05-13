"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  HiLightningBolt,
  HiShieldCheck,
  HiUserGroup,
  HiGlobeAlt,
  HiArrowRight,
} from "react-icons/hi";

const aboutHeroBgImage =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=85";

const values = [
  {
    icon: HiLightningBolt,
    title: "Innovation First",
    description:
      "We stay ahead of the curve, adopting emerging technologies before they become mainstream. Our team continuously experiments with modern frameworks, AI systems, and scalable architectures to give clients a competitive advantage.",
  },
  {
    icon: HiShieldCheck,
    title: "Quality Obsessed",
    description:
      "Every line of code is reviewed, tested, and production-hardened. We focus on maintainability, performance, security, and clean delivery standards so your product is reliable from day one.",
  },
  {
    icon: HiUserGroup,
    title: "Client Partners",
    description:
      "We don’t just build software and disappear. We collaborate closely, understand your business deeply, and work like an extension of your team from strategy through launch.",
  },
  {
    icon: HiGlobeAlt,
    title: "Global Mindset",
    description:
      "We build with scale in mind. From architecture to UX, our solutions are designed to support growth, global audiences, and future business expansion without technical debt slowing you down.",
  },
];

const team = [
  {
    name: "Karandeep Singh",
    role: "Founder & CEO",
    image: "/images/team/karan.jpg",
    color: "from-primary to-cyan-600",
    bio: "Full-stack engineer and entrepreneur leading product vision, engineering direction, and strategic delivery across modern web, mobile, and AI solutions.",
    expertise: ["Leadership", "Product Strategy", "Full-Stack"],
  },
  {
    name: "Ritik Chouhan",
    role: "Backend Specialist",
    image: "/images/team/ritik.jpg",
    color: "from-accent to-violet-600",
    bio: "Backend Specialist skilled in building scalable APIs, secure server-side systems, and high-performance databases. Focused on delivering reliable backend architectures that power seamless, efficient digital experiences.",
    expertise: ["APIs", "Backend", "Databases"],
  },
  {
    name: "Jatin Kapoor",
    role: "MVP & Product Design",
    image: "/images/team/jatin.jpg",
    color: "from-pink-500 to-rose-600",
    bio: "Specialized in building MVPs that transform ideas into real, market-ready products. Focused on rapid execution, validation, and scalable architecture for startup success.",
    expertise: ["UI/UX", "MVP Design", "Product Flow"],
  },
  {
    name: "Ananya Mehta",
    role: "ML & Automation",
    image: "/images/team/ananya.jpg",
    color: "from-amber-500 to-orange-600",
    bio: "Designs intelligent automation systems, AI workflows, and LLM-powered experiences that help businesses scale with less manual effort.",
    expertise: ["Automation", "AI Workflows", "LLMs"],
  },
];

const techCategories = [
  {
    label: "Frontend",
    techs: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Native",
      "Flutter",
    ],
  },
  {
    label: "Backend",
    techs: ["Node.js", "Express", "NestJS", "Python", "REST APIs", "GraphQL"],
  },
  {
    label: "Databases",
    techs: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Supabase",
      "Firebase",
      "Vector DBs",
    ],
  },
  {
    label: "Cloud & DevOps",
    techs: ["AWS", "GCP", "Docker", "CI/CD", "Vercel", "GitHub Actions"],
  },
];

const industries: string[] = [
  "Startups",
  "E-commerce",
  "Healthcare",
  "EdTech",
  "SaaS Products",
  "Enterprise Solutions",
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Clients Served" },
  { value: "99%", label: "Satisfaction Focus" },
  { value: "24/7", label: "Execution Mindset" },
];

function TeamCard({
  member,
  index,
  isMobile = false,
  isActive = false,
}: {
  member: (typeof team)[number];
  index: number;
  isMobile?: boolean;
  isActive?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      animate={
        isMobile
          ? {
              opacity: isActive ? 1 : 0.82,
              scale: isActive ? 1 : 0.97,
              y: isActive ? 0 : 4,
            }
          : undefined
      }
      className="h-full"
    >
      <div className="group premium-card glass-card cursor-glow relative h-full overflow-hidden rounded-[1.7rem] border border-(--border) p-4 sm:p-6">
        <div className="pointer-events-none absolute inset-0 opacity-100">
          <div className="absolute -left-14 top-0 h-28 w-28 rounded-full bg-primary/8 blur-3xl transition-all duration-500 group-hover:bg-primary/12" />
          <div className="absolute -right-14 bottom-0 h-28 w-28 rounded-full bg-accent/8 blur-3xl transition-all duration-500 group-hover:bg-accent/12" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28">
              <div
                className={`absolute -inset-1 rounded-[1.2rem] bg-linear-to-br ${member.color} opacity-90 blur-sm`}
              />
              <div className="relative h-full w-full overflow-hidden rounded-[1.1rem] border border-white/20">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 96px, 112px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="min-w-0 text-left">
              <h3 className="text-lg font-bold leading-tight sm:text-xl">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {member.role}
              </p>
            </div>
          </div>

          <p
            className={`mt-4 text-(--text-muted) ${
              isMobile
                ? "line-clamp-3 text-[13px] leading-6"
                : "text-sm leading-7"
            }`}
          >
            {member.bio}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {member.expertise
              .slice(0, isMobile ? 3 : member.expertise.length)
              .map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-(--border) bg-white/55 px-3 py-1.5 text-[11px] font-medium text-(--text-soft) transition-all duration-300 group-hover:border-primary/20 group-hover:text-(--text) dark:bg-white/4"
                >
                  {item}
                </span>
              ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] ring-1 ring-white/5 transition-all duration-500 group-hover:ring-primary/20" />
      </div>
    </motion.div>
  );
}

function IndustryCard({
  industry,
  index,
  isMobile = false,
  isActive = false,
}: {
  industry: string;
  index: number;
  isMobile?: boolean;
  isActive?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      animate={
        isMobile
          ? {
              opacity: isActive ? 1 : 0.85,
              scale: isActive ? 1 : 0.97,
              y: isActive ? 0 : 4,
            }
          : undefined
      }
      className="h-full"
    >
      <div className="group premium-card glass-card cursor-glow rounded-[1.75rem] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <div className="mb-4 flex items-center justify-center">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 text-xl font-bold text-primary transition-all duration-300 group-hover:scale-110">
            {industry.charAt(0)}
          </span>
        </div>

        <h3 className="text-lg font-bold">{industry}</h3>
        <p className="mt-2 text-sm text-(--text-muted)">
          Solutions tailored for modern {industry.toLowerCase()} businesses.
        </p>
      </div>
    </motion.div>
  );
}

function buildLoopedItems<T>(items: T[]): T[] {
  if (items.length <= 1) return items;
  return [items[items.length - 1], ...items, items[0]];
}

export default function AboutPage() {
  const loopedTeam = useMemo(() => buildLoopedItems(team), []);
  const loopedIndustries = useMemo(() => buildLoopedItems(industries), []);

  const [teamSlideIndex, setTeamSlideIndex] = useState(team.length > 1 ? 1 : 0);
  const [industrySlideIndex, setIndustrySlideIndex] = useState(
    industries.length > 1 ? 1 : 0
  );

  const [isTeamPaused, setIsTeamPaused] = useState(false);
  const [isIndustryPaused, setIsIndustryPaused] = useState(false);

  const [isTeamAnimating, setIsTeamAnimating] = useState(true);
  const [isIndustryAnimating, setIsIndustryAnimating] = useState(true);

  const [teamTouchStartX, setTeamTouchStartX] = useState<number | null>(null);
  const [teamTouchCurrentX, setTeamTouchCurrentX] = useState<number | null>(null);
  const [teamDragOffset, setTeamDragOffset] = useState(0);

  const [industryTouchStartX, setIndustryTouchStartX] = useState<number | null>(
    null
  );
  const [industryTouchCurrentX, setIndustryTouchCurrentX] = useState<number | null>(
    null
  );
  const [industryDragOffset, setIndustryDragOffset] = useState(0);

  const teamSliderRef = useRef<HTMLDivElement | null>(null);
  const industrySliderRef = useRef<HTMLDivElement | null>(null);

  const teamResumeTimeoutRef = useRef<number | null>(null);
  const industryResumeTimeoutRef = useRef<number | null>(null);

  const realTeamIndex =
    team.length <= 1 ? 0 : (teamSlideIndex - 1 + team.length) % team.length;
  const realIndustryIndex =
    industries.length <= 1
      ? 0
      : (industrySlideIndex - 1 + industries.length) % industries.length;

  useEffect(() => {
    if (isTeamPaused || team.length <= 1) return;

    const interval = window.setInterval(() => {
      setIsTeamAnimating(true);
      setTeamSlideIndex((prev) => prev + 1);
    }, 2800);

    return () => window.clearInterval(interval);
  }, [isTeamPaused]);

  useEffect(() => {
    if (isIndustryPaused || industries.length <= 1) return;

    const interval = window.setInterval(() => {
      setIsIndustryAnimating(true);
      setIndustrySlideIndex((prev) => prev + 1);
    }, 2600);

    return () => window.clearInterval(interval);
  }, [isIndustryPaused]);

  useEffect(() => {
    return () => {
      if (teamResumeTimeoutRef.current) {
        window.clearTimeout(teamResumeTimeoutRef.current);
      }
      if (industryResumeTimeoutRef.current) {
        window.clearTimeout(industryResumeTimeoutRef.current);
      }
    };
  }, []);

  const pauseTeamTemporarily = () => {
    setIsTeamPaused(true);
    if (teamResumeTimeoutRef.current) {
      window.clearTimeout(teamResumeTimeoutRef.current);
    }
    teamResumeTimeoutRef.current = window.setTimeout(() => {
      setIsTeamPaused(false);
    }, 1500);
  };

  const pauseIndustryTemporarily = () => {
    setIsIndustryPaused(true);
    if (industryResumeTimeoutRef.current) {
      window.clearTimeout(industryResumeTimeoutRef.current);
    }
    industryResumeTimeoutRef.current = window.setTimeout(() => {
      setIsIndustryPaused(false);
    }, 1500);
  };

  const handleTeamTransitionEnd = () => {
    if (team.length <= 1) return;

    if (teamSlideIndex === loopedTeam.length - 1) {
      setIsTeamAnimating(false);
      setTeamSlideIndex(1);
    } else if (teamSlideIndex === 0) {
      setIsTeamAnimating(false);
      setTeamSlideIndex(team.length);
    }
  };

  const handleIndustryTransitionEnd = () => {
    if (industries.length <= 1) return;

    if (industrySlideIndex === loopedIndustries.length - 1) {
      setIsIndustryAnimating(false);
      setIndustrySlideIndex(1);
    } else if (industrySlideIndex === 0) {
      setIsIndustryAnimating(false);
      setIndustrySlideIndex(industries.length);
    }
  };

  useEffect(() => {
    if (!isTeamAnimating) {
      const raf = requestAnimationFrame(() => {
        setIsTeamAnimating(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTeamAnimating]);

  useEffect(() => {
    if (!isIndustryAnimating) {
      const raf = requestAnimationFrame(() => {
        setIsIndustryAnimating(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isIndustryAnimating]);

  const goToNextTeam = () => {
    setIsTeamAnimating(true);
    setTeamSlideIndex((prev) => prev + 1);
  };

  const goToPrevTeam = () => {
    setIsTeamAnimating(true);
    setTeamSlideIndex((prev) => prev - 1);
  };

  const goToNextIndustry = () => {
    setIsIndustryAnimating(true);
    setIndustrySlideIndex((prev) => prev + 1);
  };

  const goToPrevIndustry = () => {
    setIsIndustryAnimating(true);
    setIndustrySlideIndex((prev) => prev - 1);
  };

  const handleTeamTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsTeamPaused(true);
    const x = e.targetTouches[0].clientX;
    setTeamTouchStartX(x);
    setTeamTouchCurrentX(x);
    setTeamDragOffset(0);
  };

  const handleTeamTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (teamTouchStartX === null) return;
    const currentX = e.targetTouches[0].clientX;
    setTeamTouchCurrentX(currentX);
    setTeamDragOffset(currentX - teamTouchStartX);
  };

  const handleTeamTouchEnd = () => {
    if (teamTouchStartX === null || teamTouchCurrentX === null) {
      setTeamDragOffset(0);
      setTeamTouchStartX(null);
      setTeamTouchCurrentX(null);
      pauseTeamTemporarily();
      return;
    }

    const sliderWidth = teamSliderRef.current?.clientWidth ?? 1;
    const distance = teamTouchStartX - teamTouchCurrentX;
    const threshold = Math.min(80, sliderWidth * 0.18);

    if (distance > threshold) {
      goToNextTeam();
    } else if (distance < -threshold) {
      goToPrevTeam();
    }

    setTeamTouchStartX(null);
    setTeamTouchCurrentX(null);
    setTeamDragOffset(0);
    pauseTeamTemporarily();
  };

  const handleIndustryTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsIndustryPaused(true);
    const x = e.targetTouches[0].clientX;
    setIndustryTouchStartX(x);
    setIndustryTouchCurrentX(x);
    setIndustryDragOffset(0);
  };

  const handleIndustryTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (industryTouchStartX === null) return;
    const currentX = e.targetTouches[0].clientX;
    setIndustryTouchCurrentX(currentX);
    setIndustryDragOffset(currentX - industryTouchStartX);
  };

  const handleIndustryTouchEnd = () => {
    if (industryTouchStartX === null || industryTouchCurrentX === null) {
      setIndustryDragOffset(0);
      setIndustryTouchStartX(null);
      setIndustryTouchCurrentX(null);
      pauseIndustryTemporarily();
      return;
    }

    const sliderWidth = industrySliderRef.current?.clientWidth ?? 1;
    const distance = industryTouchStartX - industryTouchCurrentX;
    const threshold = Math.min(80, sliderWidth * 0.18);

    if (distance > threshold) {
      goToNextIndustry();
    } else if (distance < -threshold) {
      goToPrevIndustry();
    }

    setIndustryTouchStartX(null);
    setIndustryTouchCurrentX(null);
    setIndustryDragOffset(0);
    pauseIndustryTemporarily();
  };

  return (
    <main className="relative overflow-hidden bg-(--bg) text-(--text)">
      {/* HERO */}
      <section className="hero-light relative isolate min-h-[88vh] overflow-hidden pt-20 pb-20 sm:pt-26 lg:flex lg:items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={aboutHeroBgImage}
            alt="HNX Technologies team collaboration"
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

        <div className="relative z-10 mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.65,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative"
            >
              <div className="absolute -inset-x-4 -inset-y-6 -z-10 rounded-4xl bg-[radial-gradient(circle,rgba(255,255,255,0.86)_0%,rgba(255,255,255,0.48)_52%,rgba(255,255,255,0)_100%)] blur-xl md:hidden dark:bg-[radial-gradient(circle,rgba(6,10,18,0.82)_0%,rgba(6,10,18,0.56)_52%,rgba(6,10,18,0)_100%)]" />

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.55 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm"
              >
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                About HNX Technologies
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14, duration: 0.6 }}
                className="mb-6 text-5xl font-bold leading-[1.04] tracking-tight md:text-6xl lg:text-7xl"
              >
                The Team Behind
                <br />
                <span className="gradient-text">Your Next Big Idea</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.6 }}
                className="max-w-2xl text-lg leading-relaxed text-(--text-muted) md:text-xl"
              >
                We’re a team of engineers, designers, and digital problem-solvers
                building premium web platforms, mobile apps, and AI-powered systems
                that create real business impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.6 }}
                className="mt-9 flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="#industries-section"
                  className="btn-shine inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-8 py-4 text-base font-bold text-dark-900 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
                >
                  Explore Our Expertise
                  <HiArrowRight className="text-lg" />
                </Link>

                <Link
                  href="/contact"
                  className="gradient-border inline-flex items-center justify-center gap-2 rounded-xl border border-(--border) bg-white/55 px-8 py-4 text-base font-semibold text-(--text) transition-all hover:border-primary/30 hover:bg-white/80 dark:bg-white/4"
                >
                  Let’s Work Together
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34, duration: 0.6 }}
                className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-(--text-muted) sm:gap-x-5"
              >
                {["Engineering", "Design", "Product Strategy", "AI Delivery"].map(
                  (item, index) => (
                    <span key={item} className="inline-flex items-center gap-4">
                      <span className="font-medium tracking-wide">{item}</span>
                      {index < 3 ? (
                        <span className="h-1 w-1 rounded-full bg-primary/70" />
                      ) : null}
                    </span>
                  )
                )}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.18,
                duration: 0.65,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative"
            >
              <div className="glass-card depth-card rounded-4xl border border-(--border) p-6 sm:p-8">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="premium-card rounded-2xl border border-(--border) bg-white/55 p-5 text-center dark:bg-white/3"
                    >
                      <p className="gradient-text text-3xl font-bold md:text-4xl">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm font-medium text-(--text-muted)">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.75rem] border border-(--border) bg-[linear-gradient(180deg,rgba(255,255,255,0.65),rgba(255,255,255,0.38))] p-6 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    Built for trust
                  </p>
                  <h3 className="mt-3 text-2xl font-bold">
                    Modern execution. Premium product thinking.
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-(--text-muted)">
                    We combine strong UI, clean architecture, and practical business
                    thinking to deliver software that looks premium and performs in
                    real-world production environments.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STORY + VALUES */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/2 to-transparent dark:via-white/1" />
        <div className="relative mx-auto max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65 }}
              className="glass-card depth-card rounded-4xl p-8 md:p-10"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Our Story
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">
                Engineering Excellence,
                <br />
                <span className="gradient-text">Delivered Fast.</span>
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-(--text-muted)">
                <p>
                  HNX Technologies was built with one clear mission: help businesses
                  unlock the full potential of modern software, design, and
                  automation.
                </p>
                <p>
                  From scalable web platforms and mobile apps to AI-driven workflow
                  systems, we create solutions that are not just visually strong, but
                  strategically useful and technically dependable.
                </p>
                <p>
                  Our way of working is simple: understand deeply, move fast, build
                  cleanly, and keep improving. We don’t believe in generic delivery.
                  We believe in building digital systems that genuinely move your
                  business forward.
                </p>
              </div>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              {values.map((val, index) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  className="premium-card glass-card cursor-glow rounded-[1.75rem] p-6"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 text-primary">
                    <val.icon className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold">{val.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-(--text-muted)">
                    {val.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section
        id="industries-section"
        className="relative overflow-hidden py-24 grid-bg"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.05),transparent_28%)] dark:bg-[radial-gradient(circle_at_top,rgba(77,208,225,0.08),transparent_28%)]" />

        <div className="relative mx-auto max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Industries
            </span>
            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-(--text-muted)">
              We build tailored digital solutions across multiple industries,
              helping businesses scale with modern technology and smart execution.
            </p>
          </motion.div>

          <div
            className="md:hidden select-none"
            style={{ touchAction: "none" }}
            onMouseEnter={() => setIsIndustryPaused(true)}
            onMouseLeave={() => setIsIndustryPaused(false)}
            onTouchStart={handleIndustryTouchStart}
            onTouchMove={handleIndustryTouchMove}
            onTouchEnd={handleIndustryTouchEnd}
          >
            <div ref={industrySliderRef} className="relative overflow-hidden">
              <div
                className={`flex ${
                  industryTouchStartX !== null
                    ? ""
                    : isIndustryAnimating
                    ? "transition-transform duration-500 ease-out"
                    : ""
                }`}
                style={{
                  transform: `translate3d(calc(-${industrySlideIndex * 100}% + ${industryDragOffset}px), 0, 0)`,
                }}
                onTransitionEnd={handleIndustryTransitionEnd}
              >
                {loopedIndustries.map((industry, i) => {
                  const logicalIndex =
                    industries.length <= 1
                      ? i
                      : i === 0
                      ? industries.length - 1
                      : i === loopedIndustries.length - 1
                      ? 0
                      : i - 1;

                  return (
                    <div key={`${industry}-${i}`} className="w-full shrink-0 px-1">
                      <IndustryCard
                        industry={industry}
                        index={logicalIndex}
                        isMobile
                        isActive={realIndustryIndex === logicalIndex}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-linear-to-r from-(--bg) to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-4 bg-linear-to-l from-(--bg) to-transparent" />
            </div>

            <div className="mt-5 flex items-center justify-center gap-2">
              {industries.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to industry slide ${i + 1}`}
                  onClick={() => {
                    setIsIndustryAnimating(true);
                    setIndustrySlideIndex(i + 1);
                    setIndustryDragOffset(0);
                    pauseIndustryTemporarily();
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    realIndustryIndex === i ? "w-7 bg-primary" : "w-2.5 bg-primary/25"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="hidden gap-6 sm:grid sm:grid-cols-2 md:grid-cols-3">
            {industries.map((industry, i) => (
              <IndustryCard key={industry} industry={industry} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/2 to-transparent dark:via-white/1" />

        <div className="relative mx-auto max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Core Team
            </span>
            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-(--text-muted)">
              A focused, high-output team with strong technical depth, premium
              product thinking, and an execution mindset built for modern digital
              delivery.
            </p>
          </motion.div>

          <div className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-4">
            {team.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>

          <div
            className="md:hidden select-none"
            style={{ touchAction: "none" }}
            onMouseEnter={() => setIsTeamPaused(true)}
            onMouseLeave={() => setIsTeamPaused(false)}
            onTouchStart={handleTeamTouchStart}
            onTouchMove={handleTeamTouchMove}
            onTouchEnd={handleTeamTouchEnd}
          >
            <div ref={teamSliderRef} className="relative overflow-hidden">
              <div
                className={`flex ${
                  teamTouchStartX !== null
                    ? ""
                    : isTeamAnimating
                    ? "transition-transform duration-500 ease-out"
                    : ""
                }`}
                style={{
                  transform: `translate3d(calc(-${teamSlideIndex * 100}% + ${teamDragOffset}px), 0, 0)`,
                }}
                onTransitionEnd={handleTeamTransitionEnd}
              >
                {loopedTeam.map((member, i) => {
                  const logicalIndex =
                    team.length <= 1
                      ? i
                      : i === 0
                      ? team.length - 1
                      : i === loopedTeam.length - 1
                      ? 0
                      : i - 1;

                  return (
                    <div key={`${member.name}-${i}`} className="w-full shrink-0 px-1">
                      <TeamCard
                        member={member}
                        index={logicalIndex}
                        isMobile
                        isActive={realTeamIndex === logicalIndex}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-linear-to-r from-(--bg) to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-4 bg-linear-to-l from-(--bg) to-transparent" />
            </div>

            <div className="mt-5 flex items-center justify-center gap-2">
              {team.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to team slide ${i + 1}`}
                  onClick={() => {
                    setIsTeamAnimating(true);
                    setTeamSlideIndex(i + 1);
                    setTeamDragOffset(0);
                    pauseTeamTemporarily();
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    realTeamIndex === i ? "w-7 bg-primary" : "w-2.5 bg-primary/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="relative overflow-hidden py-24 grid-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.05),transparent_30%)] dark:bg-[radial-gradient(circle_at_bottom,rgba(149,117,205,0.08),transparent_34%)]" />

        <div className="relative mx-auto max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Capabilities
            </span>
            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-(--text-muted)">
              The technologies, frameworks, and delivery stack we use to build
              modern digital systems that scale.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {techCategories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="premium-card glass-card rounded-[1.75rem] p-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  {cat.label}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {cat.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-xl border border-(--border) bg-white/55 px-3 py-2 text-xs font-medium text-(--text-muted) dark:bg-white/3"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/2 to-transparent dark:via-white/1" />

        <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card depth-card cursor-glow rounded-4xl p-10 text-center md:p-14"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Let’s Build
            </span>

            <h2 className="mt-6 text-3xl font-bold md:text-5xl">
              Want to Work <span className="gradient-text">With Us?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-(--text-muted)">
              We help businesses turn ideas into high-quality digital products with
              premium UI, solid engineering, and smart automation. Let’s create
              something powerful together.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="btn-shine inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-8 py-4 text-base font-bold text-dark-900 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
              >
                Get In Touch
                <HiArrowRight className="text-lg" />
              </Link>

              <Link
                href="/portfolio"
                className="gradient-border inline-flex items-center justify-center gap-2 rounded-xl border border-(--border) bg-white/55 px-8 py-4 text-base font-semibold text-(--text) transition-all hover:border-primary/30 hover:bg-white/80 dark:bg-white/4"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}