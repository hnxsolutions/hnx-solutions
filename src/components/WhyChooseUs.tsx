import { motion } from "framer-motion";
import { FaAward, FaUsers, FaRocket } from "react-icons/fa";

const stats = [
  { icon: <FaRocket className="text-accent text-2xl mb-2" />, value: "20+", label: "Projects Delivered" },
  { icon: <FaUsers className="text-accent text-2xl mb-2" />, value: "15+", label: "Happy Clients" },
  { icon: <FaAward className="text-accent text-2xl mb-2" />, value: "2+", label: "Years Experience" },
];

const reasons = [
  {
    icon: <FaAward className="text-primary text-2xl mb-2" />,
    title: "Proven Expertise",
    desc: "Seasoned engineers & designers with deep domain knowledge."
  },
  {
    icon: <FaUsers className="text-primary text-2xl mb-2" />,
    title: "Client-First Approach",
    desc: "We prioritize your goals, timelines, and success."
  },
  {
    icon: <FaRocket className="text-primary text-2xl mb-2" />,
    title: "Agile & Reliable",
    desc: "Rapid delivery, transparent process, and ongoing support."
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-gradient">
            Why Choose Us
          </h2>
          <p className="text-light-300 text-lg max-w-2xl mx-auto">
            We deliver more than just code. Our team partners with you to create real business impact.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card rounded-2xl p-8 text-center glow-border hover:scale-105 hover:shadow-accent/40 transition-all duration-500"
            >
              <div className="flex flex-col items-center mb-3">{r.icon}</div>
              <h3 className="text-xl font-bold mb-2 gradient-text">{r.title}</h3>
              <p className="text-light-200 text-sm">{r.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card rounded-2xl p-8 text-center glow-border"
            >
              <div className="flex flex-col items-center mb-2">{stat.icon}</div>
              <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
              <p className="text-sm text-light-300 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
