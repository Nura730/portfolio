"use client";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Building with Artificial Intelligence",
    platform: "Saylor.org",
    status: "Completed",
    link: "https://drive.google.com/file/d/1ZLK0CS_ric6l8SFMp2nEaK_TpGtwyU6B/view?usp=sharing",
  },
  {
    title: "Cybersecurity Fundamentals",
    platform: "Self Learning",
    status: "Currently Learning",
    link: "",
  },
  {
    title: "Linux Basics",
    platform: "Self Practice",
    status: "Currently Learning",
    link: "",
  },
];

const planned = [
  "TryHackMe Learning Paths",
  "Python Automation Certification",
  "Networking Fundamentals",
  "Ethical Hacking Basics",
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="max-w-6xl mx-auto px-4 py-24"
    >
      <h2 className="text-2xl font-semibold mb-12">
        Learning Milestones
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="
              bg-white/5
              border border-white/10
              rounded-2xl p-6
              hover:border-indigo-400/40
              hover:-translate-y-1
              hover:shadow-[0_0_25px_rgba(99,102,241,0.3)]
              transition-all duration-300
            "
          >
            <h3 className="font-medium text-indigo-300 mb-1">
              {cert.title}
            </h3>

            <p className="text-xs text-slate-400">
              Platform: {cert.platform}
            </p>

            <span
              className={`
                inline-block mt-3 text-xs
                px-3 py-1 rounded-full border
                transition hover:scale-105
                ${
                  cert.status === "Completed"
                    ? "bg-green-500/10 text-green-400 border-green-400/30"
                    : "bg-yellow-500/10 text-yellow-400 border-yellow-400/30"
                }
              `}
            >
              {cert.status}
            </span>

            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-1
                  text-xs text-indigo-400
                  mt-3 hover:underline
                "
              >
                Verify
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        ))}
      </div>

      {/* PLANNED */}
      <div
        className="
          mt-14
          bg-white/5
          border border-white/10
          rounded-3xl p-8
        "
      >
        <h3 className="font-semibold mb-5">
          Planned Learning
        </h3>

        <ul className="grid md:grid-cols-2 gap-3 text-sm text-slate-300">
          {planned.map((item, i) => (
            <li
              key={i}
              className="
                transition
                hover:translate-x-2
                hover:text-indigo-400
              "
            >
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
