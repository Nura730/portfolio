"use client";
import { motion } from "framer-motion";

const skillGroups = {
  programming: {
    category: "Programming",
    icon: "🐍",
    compact: true,
    skills: [
      { name: "Python", level: 90, badge: "Advanced" },
      { name: "SQL", level: 30, badge: "Beginner" },
    ],
  },

  frontend: {
    category: "Frontend",
    icon: "💻",
    skills: [
      { name: "HTML", level: 100, badge: "Advanced" },
      { name: "CSS", level: 100, badge: "Advanced" },
      { name: "JavaScript", level: 90, badge: "Advanced" },
      { name: "Tailwind CSS", level: 100, badge: "Advanced" },
      { name: "React", level: 50, badge: "Learning" },
    ],
  },

  automation: {
    category: "Automation",
    icon: "⚙️",
    skills: [
      { name: "n8n", level: 90, badge: "Advanced" },
      { name: "Apps Script", level: 70, badge: "Intermediate" },
    ],
  },

  cyber: {
    category: "Cybersecurity  (Priority)",
    icon: "🛡️",
    skills: [
      { name: "Linux", level: 75, badge: "Intermediate" },
    ],
  },

  tools: {
    category: "Tools",
    icon: "🧰",
    skills: [
      { name: "Git", level: 75, badge: "Intermediate" },
      { name: "VS Code", level: 100, badge: "Advanced" },
    ],
  },
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-4 py-24"
    >
      <h2 className="text-2xl font-semibold mb-14">
        Skills
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT COLUMN */}
        <div className="space-y-10">
          <SkillCard group={skillGroups.programming} />

          <FocusBox />

          <SkillCard group={skillGroups.automation} />

          <SkillCard group={skillGroups.tools} />
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-10">
          <SkillCard group={skillGroups.frontend} />

          <SkillCard group={skillGroups.cyber} />
        </div>

      </div>

      {/* ROADMAP */}
      <div className="
        mt-16
        bg-white/5 backdrop-blur-none md:backdrop-blur-xl
        border border-white/10
        rounded-3xl p-8
      ">
        <h3 className="font-semibold mb-6">
          Learning Roadmap
        </h3>

        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <Roadmap
            title="Now"
            text="Strengthening Python, frontend, and automation systems."
          />
          <Roadmap
            title="Next"
            text="Deep dive into cybersecurity and networking fundamentals."
          />
          <Roadmap
            title="Future"
            text="Blue-team tools, SIEM, and real-world security operations."
          />
        </div>
      </div>
    </motion.section>
  );
}

/* SKILL CARD */
function SkillCard({ group }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`
      bg-white/5 backdrop-blur-none md:backdrop-blur-xl
      border border-white/10
      rounded-3xl p-6
      hover:border-indigo-400/40
      transition
      ${group.compact ? "h-fit" : "min-h-[260px]"}
      `}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">
          {group.icon}
        </span>
        <h3 className="font-semibold text-lg">
          {group.category}
        </h3>
      </div>

      <div className="space-y-5">
        {group.skills.map((skill, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-sm mb-1">
              <span>{skill.name}</span>
              <span
                className="
                text-[10px]
                px-2 py-0.5 rounded-full
                border border-indigo-400/40
                text-indigo-300
                "
              >
                {skill.badge}
              </span>
            </div>

            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-indigo-500"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* FOCUS BOX */
function FocusBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="
      bg-indigo-500/10
      border border-indigo-400/30
      rounded-2xl p-5
      "
    >
      <p className="text-xs uppercase tracking-widest text-indigo-300 mb-2">
        Current Focus
      </p>

      <p className="text-sm text-slate-300">
        Strengthening <span className="text-indigo-400">Python</span> for
        automation and cybersecurity scripting while improving
        problem-solving skills.
      </p>
    </motion.div>
  );
}

/* ROADMAP */
function Roadmap({ title, text }) {
  return (
    <div
      className="
      bg-white/5
      border border-white/10
      rounded-xl p-5
      "
    >
      <p className="text-xs uppercase tracking-widest text-indigo-300 mb-2">
        {title}
      </p>
      <p className="text-slate-300 text-sm">
        {text}
      </p>
    </div>
  );
}
