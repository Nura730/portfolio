"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";

const focusData = [
  {
  title: "Cybersecurity",
  percent: 10,
  desc: "Recently started learning cybersecurity fundamentals (since 2025) through labs and hands-on practice.",
  tools: "Linux · TryHackMe · Networking",
  icon: "🛡️",
},

  {
    title: "Frontend Development",
    percent: 100,
    desc: "Strong hands-on experience building responsive and interactive web interfaces.",
    tools: "HTML · CSS · JavaScript · Tailwind · React",
    icon: "💻",
  },
  {
    title: "Automation Systems",
    percent: 70,
    desc: "Building automation workflows to reduce manual work and improve efficiency.",
    tools: "n8n · Webhooks · Apps Script",
    icon: "⚙️",
  },
  {
    title: "Problem Solving",
    percent: 95,
    desc: "Highly confident in logical thinking, debugging, and breaking down problems.",
    tools: "DSA · Debugging · Git",
    icon: "🧠",
  },
];


export default function Focus() {
  const cardsRef = useRef([]);

  const tilt = (e, i) => {
    const card = cardsRef.current[i];
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rx = ((y / rect.height) - 0.5) * -8;
    const ry = ((x / rect.width) - 0.5) * 8;

    gsap.to(card, {
      rotateX: rx,
      rotateY: ry,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const reset = (i) => {
    gsap.to(cardsRef.current[i], {
      rotateX: 0,
      rotateY: 0,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <section
      id="focus"
      className="max-w-6xl mx-auto px-4 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold mb-12"
      >
        Focus Areas
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {focusData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            ref={(el) => (cardsRef.current[i] = el)}
            onMouseMove={(e) => tilt(e, i)}
            onMouseLeave={() => reset(i)}
            className="
            relative bg-white/5
            border border-white/10
            rounded-2xl p-6
            hover:border-indigo-400/40
            transition
            transform-gpu
            "
          >
            {/* Icon */}
            <span className="text-2xl">
              {item.icon}
            </span>

            {/* Title */}
            <h3 className="mt-2 font-semibold">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm text-slate-300">
              {item.desc}
            </p>

            {/* Tools */}
            <p className="mt-3 text-xs text-slate-400">
              Tools: {item.tools}
            </p>

            {/* Progress */}
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Progress</span>
                <span>{item.percent}%</span>
              </div>

              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${item.percent}%`,
                  }}
                  transition={{ duration: 1 }}
                  className="h-full bg-indigo-500"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
