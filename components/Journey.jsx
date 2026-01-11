"use client";
import { motion } from "framer-motion";

const journey = [
  {
    year: "2022",
    title: "Started Web Development",
    desc: "Began learning HTML and CSS. Built small practice projects and explored basic web layouts.",
    icon: "🌐",
  },
  {
    year: "2024",
    title: "Joined CSE Degree",
    desc: "Started Computer Science Engineering degree and strengthened programming fundamentals.",
    icon: "🎓",
  },
  {
    year: "Mid 2025",
    title: "Built First Website",
    desc: "Developed my first complete website from scratch and understood real-world development flow.",
    icon: "🚀",
  },
  {
    year: "Late 2025",
    title: "Automation & Freelancing",
    desc: "Started building automation systems, explored freelancing and real client workflows.",
    icon: "⚙️",
  },
  {
    year: "Oct 2025",
    title: "Internship",
    desc: "Joined internship where I worked on real projects and improved my practical skills.",
    icon: "💼",
  },
  {
    year: "2026",
    title: "Cybersecurity Learning",
    desc: "Started learning cybersecurity through hands-on labs and security fundamentals.",
    icon: "🛡️",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="max-w-6xl mx-auto px-4 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="
          text-2xl font-semibold mb-14
          text-center md:text-left
        "
      >
        My Journey
      </motion.h2>

      <div className="relative">

        {/* TIMELINE LINE */}
        <div
          className="
            absolute left-4 top-0 bottom-0
            w-px bg-white/10
          "
        />

        <div className="space-y-12">
          {journey.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12 }}
              className="
                relative
                flex flex-col md:grid md:grid-cols-3
                gap-6
                pl-10
              "
            >
              {/* DOT */}
              <span
                className="
                  absolute left-[6px] top-2
                  h-3 w-3 rounded-full
                  bg-indigo-500
                  shadow-[0_0_12px_rgba(99,102,241,0.8)]
                "
              />

              {/* LEFT INFO */}
              <div className="md:col-span-1">
                <p className="text-indigo-400 text-sm font-medium">
                  {item.year}
                </p>

                <h3 className="
                  mt-1 font-semibold
                  flex items-center gap-2
                ">
                  <span>{item.icon}</span>
                  {item.title}
                </h3>
              </div>

              {/* GLASS CARD */}
              <div
                className="
                  md:col-span-2
                  bg-white/5 backdrop-blur-none md:backdrop-blur-xl
                  border border-white/10
                  rounded-2xl p-5
                  shadow-lg shadow-black/30
                  hover:border-indigo-400/40
                  hover:bg-white/10
                  transition
                "
              >
                <p className="
                  text-slate-300 text-sm
                  leading-relaxed
                ">
                  {item.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
