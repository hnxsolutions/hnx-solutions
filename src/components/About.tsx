"use client";
import { motion } from "framer-motion";
import { HiLightningBolt, HiShieldCheck, HiUserGroup, HiGlobeAlt } from "react-icons/hi";

const values = [
  {
    icon: HiLightningBolt,
    title: "Innovation First",
    description: "We stay ahead of the curve, adopting emerging technologies before they become mainstream.",
  },
  {
    icon: HiShieldCheck,
    title: "Quality Obsessed",
    description: "Every line of code is reviewed, tested, and optimized. We ship production-ready, not prototypes.",
  },
  {
    icon: HiUserGroup,
    title: "Client Partners",
    description: "We don't just build software — we partner with you to understand and solve your real problems.",
  },
  {
    icon: HiGlobeAlt,
    title: "Global Mindset",
    description: "Building for scale from day one. Our solutions are designed to serve users worldwide.",
  },
];

const team = [
  { name: "Karan", role: "Founder & CEO", initials: "K", color: "from-primary to-cyan-600" },
  { name: "Dev Lead", role: "CTO & Full-Stack", initials: "DL", color: "from-accent to-violet-600" },
  { name: "Design Head", role: "UI/UX Lead", initials: "DH", color: "from-pink-500 to-rose-600" },
  { name: "AI Engineer", role: "ML & Automation", initials: "AI", color: "from-amber-500 to-orange-600" },
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

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/40 to-dark-900" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            About HNX
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            The Team Behind{" "}
            <span className="gradient-text">Your Next Big Idea</span>
          </h2>
        </motion.div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Engineering Excellence,
              <br />
              <span className="text-primary">Delivered Fast.</span>
            </h3>
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

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-2xl font-bold text-center mb-12">Our Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="glass-card rounded-2xl p-6 text-center glow-border group hover:-translate-y-2 transition-all duration-500"
              >
                <div
                  className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <span className="text-xl font-bold text-white">
                    {member.initials}
                  </span>
                </div>
                <h4 className="font-bold">{member.name}</h4>
                <p className="text-sm text-light-300">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            Technical Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCategories.map((cat) => (
              <div
                key={cat.label}
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
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
