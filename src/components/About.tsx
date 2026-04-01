"use client";

import { motion } from "framer-motion";
import {
  HiLightningBolt,
  HiShieldCheck,
  HiUserGroup,
  HiGlobeAlt,
} from "react-icons/hi";

const values = [
  {
    icon: HiLightningBolt,
    title: "Innovation First",
    description:
      "We stay ahead of the curve, adopting emerging technologies before they become mainstream and turning them into practical business solutions.",
  },
  {
    icon: HiShieldCheck,
    title: "Quality Obsessed",
    description:
      "We ship clean, production-ready systems with strong code quality, thoughtful architecture, and careful attention to long-term reliability.",
  },
  {
    icon: HiUserGroup,
    title: "Client Partners",
    description:
      "We work closely with clients, align with their goals, and build solutions that solve real problems instead of just checking feature lists.",
  },
  {
    icon: HiGlobeAlt,
    title: "Global Mindset",
    description:
      "Our products are designed to scale, support growth, and stay relevant as business needs expand across markets and teams.",
  },
];

const team = [
  {
    name: "Karan",
    role: "Founder & CEO",
    initials: "K",
    color: "from-primary to-cyan-600",
  },
  {
    name: "Dev Lead",
    role: "CTO & Full-Stack",
    initials: "DL",
    color: "from-accent to-violet-600",
  },
  {
    name: "Design Head",
    role: "UI/UX Lead",
    initials: "DH",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "AI Engineer",
    role: "ML & Automation",
    initials: "AI",
    color: "from-amber-500 to-orange-600",
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
    techs: ["Node.js", "Express", "NestJS", "Python", "RESTful APIs", "GraphQL"],
  },
  {
    label: "Databases",
    techs: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase", "Vector DBs"],
  },
  {
    label: "Cloud & DevOps",
    techs: ["AWS", "GCP", "Docker", "CI/CD", "Vercel", "GitHub Actions"],
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.02] to-transparent dark:via-white/[0.01]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            About HNX
          </span>
          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            The Team Behind <span className="gradient-text">Your Next Big Idea</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--text-muted)]">
            We combine product thinking, engineering discipline, and premium UI
            craftsmanship to build digital systems that help businesses grow.
          </p>
        </motion.div>

        <div className="mb-24 grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card depth-card rounded-[2rem] p-8 md:p-10"
          >
            <h3 className="text-3xl font-bold leading-tight md:text-4xl">
              Engineering Excellence,
              <br />
              <span className="gradient-text">Delivered Fast.</span>
            </h3>

            <div className="mt-6 space-y-5 text-[var(--text-muted)] leading-8">
              <p>
                HNX Technologies was founded to help businesses leverage modern
                technology with clarity, speed, and strong execution.
              </p>
              <p>
                We build web platforms, mobile applications, AI workflows, and
                scalable backend systems that solve real operational and growth
                problems.
              </p>
              <p>
                Our focus is not only writing code. It is delivering polished,
                reliable digital products that create lasting business value.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {values.map((val, index) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="premium-card glass-card cursor-glow rounded-[1.75rem] p-6"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                  <val.icon className="text-2xl" />
                </div>
                <h4 className="text-xl font-bold">{val.title}</h4>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Meet Our <span className="gradient-text">Team</span>
          </h3>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="premium-card glass-card cursor-glow rounded-[1.75rem] p-7 text-center"
              >
                <div
                  className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-[1.4rem] bg-gradient-to-br ${member.color} shadow-[0_14px_30px_rgba(0,0,0,0.18)]`}
                >
                  <span className="text-xl font-bold text-white">{member.initials}</span>
                </div>
                <h4 className="text-lg font-bold">{member.name}</h4>
                <p className="mt-1 text-sm text-primary">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Technical <span className="gradient-text">Expertise</span>
          </h3>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {techCategories.map((cat, index) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="premium-card glass-card rounded-[1.75rem] p-6"
              >
                <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  {cat.label}
                </h4>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {cat.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-xl border border-[var(--border)] bg-white/55 px-3 py-2 text-xs font-medium text-[var(--text-muted)] dark:bg-white/[0.03]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}