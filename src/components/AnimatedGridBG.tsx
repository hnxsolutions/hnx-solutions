import { motion } from "framer-motion";

export default function AnimatedGridBG() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    >
      <svg className="w-full h-full" width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grid-gradient" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
            <stop stopColor="#6EE7B7" stopOpacity="0.12" />
            <stop offset="1" stopColor="#7F6BFF" stopOpacity="0.10" />
          </linearGradient>
        </defs>
        <g>
          {[...Array(30)].map((_, i) => (
            <motion.line
              key={i}
              x1={i * 48}
              y1={0}
              x2={i * 48}
              y2={800}
              stroke="url(#grid-gradient)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: i * 0.03, duration: 1.2 }}
            />
          ))}
          {[...Array(18)].map((_, i) => (
            <motion.line
              key={100 + i}
              x1={0}
              y1={i * 44}
              x2={1440}
              y2={i * 44}
              stroke="url(#grid-gradient)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: i * 0.03, duration: 1.2 }}
            />
          ))}
        </g>
      </svg>
    </motion.div>
  );
}
