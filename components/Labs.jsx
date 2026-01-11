"use client";
import { motion } from "framer-motion";

const labs = [
  {
    title: "Linux Practice",
    desc: "Practicing commands, permissions, users, processes, and system navigation daily.",
    level: "Beginner",
  },
  {
    title: "TryHackMe Labs",
    desc: "Learning cybersecurity fundamentals, basic attack paths and defense concepts.",
    level: "Beginner",
  },
  {
    title: "Python Scripts",
    desc: "Writing small automation and utility scripts to improve problem solving.",
    level: "Learning",
  },
  {
    title: "Automation Workflows",
    desc: "Building real automations using n8n and Apps Script.",
    level: "Intermediate",
  },
];

export default function Labs() {
  return (
    <section id="labs" className="max-w-6xl mx-auto px-4 py-24">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold mb-12"
      >
        Labs & Practice
      </motion.h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">

        {labs.map((lab, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15 }}
            className="
              relative overflow-hidden
              rounded-2xl p-6
              bg-white/5 border border-white/10
              backdrop-blur-none md:backdrop-blur-xl
              hover:border-indigo-400/50
              transition
            "
          >
            {/* Glitch line */}
            <span className="absolute top-0 left-0 h-[2px] w-full
              bg-gradient-to-r from-transparent via-indigo-400 to-transparent
              animate-pulse" />

            <h3 className="font-medium text-indigo-300 mb-2">
              {lab.title}
            </h3>

            <p className="text-sm text-slate-300">
              {lab.desc}
            </p>

            <span
              className="
                inline-block mt-4 text-xs
                px-3 py-1 rounded-full
                bg-indigo-500/10 text-indigo-300
                border border-indigo-400/30
              "
            >
              {lab.level}
            </span>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/Nura730/Nura730"
          target="_blank"
          className="
            inline-flex items-center gap-2
            rounded-full px-6 py-3
            bg-indigo-500 text-white
            hover:bg-indigo-400 transition
          "
        >
          View My GitHub
        </a>
      </div>
    </section>
  );
}
