"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiLightningBolt, HiShieldCheck, HiUserGroup, HiGlobeAlt, HiArrowRight } from "react-icons/hi";

const values = [
  {
    icon: HiLightningBolt,
    title: "Innovation First",
    description: "We stay ahead of the curve, adopting emerging technologies before they become mainstream. Our team constantly experiments with cutting-edge tools and frameworks to deliver solutions that give our clients a competitive edge.",
  },
  {
    icon: HiShieldCheck,
    title: "Quality Obsessed",
    description: "Every line of code is reviewed, tested, and optimized for production. We follow strict code quality standards, automated testing, and continuous integration to ensure every deployment is rock-solid.",
  },
  {
    icon: HiUserGroup,
    title: "Client Partners",
    description: "We don't just build software — we partner with you to understand and solve your real problems. Our collaborative approach means you're involved at every step, from planning to launch.",
  },
  {
    icon: HiGlobeAlt,
    title: "Global Mindset",
    description: "Building for scale from day one. Our solutions are designed to serve users worldwide with multi-language support, CDN delivery, and distributed architecture.",
  },
];

const team = [
  {
    name: "Karan",
    role: "Founder & CEO",
    initials: "K",
    color: "from-primary to-cyan-600",
    bio: "Full-stack engineer and entrepreneur with 5+ years of experience building scalable web and mobile applications. Leads the company vision and client strategy.",
  },
  {
    name: "Dev Lead",
    role: "CTO & Full-Stack",
    initials: "DL",
    color: "from-accent to-violet-600",
    bio: "Senior engineer specializing in distributed systems, cloud architecture, and performance optimization. Oversees all technical decisions and code quality.",
  },
  {
    name: "Design Head",
    role: "UI/UX Lead",
    initials: "DH",
    color: "from-pink-500 to-rose-600",
    bio: "Design expert with a passion for creating intuitive, accessible interfaces. Leads user research, design systems, and ensures every product looks and feels amazing.",
  },
  {
    name: "AI Engineer",
    role: "ML & Automation",
    initials: "AI",
    color: "from-amber-500 to-orange-600",
    bio: "Machine learning specialist with expertise in NLP, LLMs, and intelligent automation. Builds custom AI solutions that transform business operations.",
  },
];

const techCategories = [
  {
    label: "Frontend",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Native", "Flutter"],
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

const milestones = [
  { year: "2020", title: "Founded", description: "HNX Technologies was born from a vision to make enterprise-grade technology accessible to businesses of all sizes." },
  { year: "2021", title: "First 10 Clients", description: "Delivered our first major projects — an e-commerce platform and a telemedicine app — establishing our reputation for quality." },
  { year: "2023", title: "AI Division Launched", description: "Expanded into AI & Automation, building custom chatbots, workflow agents, and predictive analytics systems." },
  { year: "2024", title: "50+ Projects Milestone", description: "Reached 50+ delivered projects across 30+ clients worldwide, with a 99% client satisfaction rate." },
  { year: "2025", title: "Global Expansion", description: "Scaled our team and began serving enterprise clients across North America, Europe, and Asia-Pacific." },
];

export default function AboutPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 grid-bg overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/2 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              About HNX
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              The Team Behind{" "}
              <span className="gradient-text">Your Next Big Idea</span>
            </h1>
            <p className="text-light-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              We&apos;re a team of passionate engineers, designers, and strategists
              building software that actually works. Every project is an opportunity
              to deliver excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Engineering Excellence,
                <br />
                <span className="text-primary">Delivered Fast.</span>
              </h2>
              <div className="space-y-4 text-light-300 leading-relaxed">
                <p>
                  HNX Technologies was founded with a singular mission: to help
                  businesses harness the full power of modern technology. We are a
                  team of passionate engineers, designers, and strategists who
                  build software that actually works.
                </p>
                <p>
                  From enterprise web platforms serving thousands of users to
                  AI automation systems that save dozens of hours weekly — we
                  deliver solutions that drive measurable outcomes. Our approach
                  is simple: understand deeply, build fast, iterate relentlessly.
                </p>
                <p>
                  We don&apos;t just write code. We craft digital experiences that
                  scale with your business, using the latest in AI, cloud
                  infrastructure, and modern development frameworks.
                </p>
              </div>
            </motion.div>

            {/* Values Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {values.map((val) => (
                <div
                  key={val.title}
                  className="glass-card rounded-2xl p-6 glow-border hover:-translate-y-1 transition-all"
                >
                  <val.icon className="text-2xl text-primary mb-3" />
                  <h4 className="font-bold mb-2">{val.title}</h4>
                  <p className="text-xs text-light-300 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 relative grid-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-light-300 text-lg max-w-2xl mx-auto">
              From a small team with big ambitions to a growing technology company
              serving clients worldwide.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50" />

            <div className="space-y-12">
              {milestones.map((ms, i) => (
                <motion.div
                  key={ms.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-center ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-dark-900 z-10" />

                  <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                    <div className="glass-card rounded-2xl p-6 glow-border">
                      <span className="text-2xl font-black gradient-text">{ms.year}</span>
                      <h3 className="text-lg font-bold mt-2 mb-2">{ms.title}</h3>
                      <p className="text-sm text-light-300 leading-relaxed">{ms.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-light-300 text-lg max-w-2xl mx-auto">
              A tight-knit team of experts who are obsessed with building great software.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center glow-border hover:-translate-y-2 transition-all duration-500"
              >
                <div
                  className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-4`}
                >
                  <span className="text-xl font-bold text-white">
                    {member.initials}
                  </span>
                </div>
                <h4 className="font-bold text-lg">{member.name}</h4>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-xs text-light-300 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 relative grid-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCategories.map((cat) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 glow-border"
              >
                <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                  {cat.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs rounded-lg bg-white/5 text-light-200 border border-white/8"
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
              Want to Work <span className="gradient-text">With Us?</span>
            </h2>
            <p className="text-light-300 text-lg max-w-xl mx-auto mb-8">
              We&apos;re always looking for exciting projects and great people.
              Let&apos;s build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-dark-900 font-bold rounded-xl hover:shadow-xl hover:shadow-primary/25 transition-all hover:-translate-y-1"
              >
                Get In Touch
                <HiArrowRight />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-light-300/20 text-light-100 font-semibold rounded-xl hover:bg-white/5 hover:border-primary/30 transition-all"
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
