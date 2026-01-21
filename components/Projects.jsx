"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    name: "Expense Tracker App",
    desc: "Simple Android app for Track Expenses.",
    tech: "Kotlin",
    role: "Fully developed by me",
    github: "https://github.com/Nura730/MyExpenseTracker",
    tag: "Android App",
    featured: true,
    image: "/projects/app.png",
  },
  {
    name: "Restaurant Web App",
    desc: "Advanced menu filtering system that helps users easily search and explore food items.",
    tech: "HTML · CSS · JavaScript",
    role: "Fully developed by me",
    live: "https://nurarestaurant.netlify.app/",
    github: "https://github.com/Nura730/Restaurant",
    tag: "Web App",
    image: "/projects/restaurant.png",
  },
  {
    name: "Log Management System",
    desc: "Team productivity system with attendance tracking, task assignment, chat, and automated reminders.",
    tech: "HTML · CSS · JS · Apps Script · n8n",
    role: "Fully developed by me",
    live: "https://invodes-log-system.vercel.app/",
    github: "https://github.com/Nura730/Invodes-Log-System",
    tag: "Automation",
    featured: true,
    image: "/projects/logsystem.png",
  },
  {
    name: "Naval Portfolio",
    desc: "Personal portfolio website for a marine student to showcase profile and skills.",
    tech: "HTML · Tailwind · JavaScript",
    role: "Fully developed by me",
    live: "https://sasikumar-naval-portfolio.netlify.app/",
    github: "https://github.com/Nura730/naval-portfolio",
    tag: "Client Work",
    image: "/projects/naval.png",
  },
  {
    name: "Professional Portfolio",
    desc: "Job-ready portfolio website for a professional seeking employment.",
    tech: "HTML · Tailwind · JavaScript",
    role: "Fully developed by me",
    live: "https://anandperumal-portfolio.vercel.app/",
    github: "https://github.com/Nura730/professional-portfolio",
    tag: "Client Work",
    image: "/projects/pro.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            whileHover={{ scale: 1.02 }}
            className="
            group relative
            bg-white/5 backdrop-blur-none md:backdrop-blur-xl
            border border-white/10
            rounded-3xl overflow-hidden
            hover:border-indigo-400/40
            transition
            "
          >
            {/* IMAGE */}
            <div className="h-56 overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="
                w-full h-full object-cover
                transition duration-500
                group-hover:scale-110
                "
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">

              {/* FEATURED */}
              {p.featured && (
                <span
                  className="
                  inline-flex items-center gap-1
                  text-xs mb-3
                  text-yellow-400
                  "
                >
                  <Star size={14} /> Featured Project
                </span>
              )}

              {/* TAG */}
              <span
                className="
                absolute top-4 right-4
                text-[10px]
                px-2 py-0.5 rounded-full
                bg-indigo-500/20
                text-indigo-300
                "
              >
                {p.tag}
              </span>

              <h3 className="text-lg font-semibold">
                {p.name}
              </h3>

              <p className="mt-2 text-sm text-slate-300">
                {p.desc}
              </p>

              <p className="mt-2 text-xs text-slate-400">
                Role: {p.role}
              </p>

              <p className="mt-3 text-xs text-indigo-300">
                {p.tech}
              </p>

              {/* LINKS */}
              <div className="mt-5 flex gap-4">
                <a
                  href={p.live}
                  target="_blank"
                  className="flex items-center gap-1 text-sm hover:text-indigo-400 transition"
                >
                  Live <ExternalLink size={14} />
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  className="flex items-center gap-1 text-sm hover:text-indigo-400 transition"
                >
                  GitHub <Github size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
