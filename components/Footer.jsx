"use client";
import { Github, Linkedin, ArrowUp, Download, Globe } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative mt-24 border-t border-white/10">

      {/* Glow */}
      <div className="
        absolute inset-x-0 -top-px h-px
        bg-gradient-to-r
        from-transparent via-indigo-500/60 to-transparent
      " />

      {/* MAIN */}
      <div className="
        max-w-6xl mx-auto px-4 py-14
        grid gap-10
        md:grid-cols-3
        text-center md:text-left
      ">

        {/* BRAND */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-indigo-400">
            Nura
          </h3>

          <p className="text-sm text-slate-400">
            {lang === "en"
              ? "CSE Student · Aspiring Cybersecurity Engineer"
              : "CSE மாணவர் · எதிர்கால சைபர் பாதுகாப்பு இன்ஜினியர்"}
          </p>

          <p className="text-xs text-slate-500 max-w-xs mx-auto md:mx-0">
            {lang === "en"
              ? "Building secure systems & automation tools."
              : "பாதுகாப்பான சிஸ்டம்கள் மற்றும் ஆட்டோமேஷன் உருவாக்கம்"}
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-3">
          <p className="text-sm font-medium">
            {lang === "en" ? "Quick Links" : "விரைவு இணைப்புகள்"}
          </p>

          <ul className="
            space-y-2 text-sm text-slate-400
            flex flex-col items-center md:items-start
          ">
            <li><a href="#focus" className="hover:text-white">Focus</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#labs" className="hover:text-white">Labs</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* ACTIONS */}
        <div className="space-y-5">

          {/* BUTTONS */}
          <div className="
            flex gap-4 justify-center md:justify-start
            overflow-x-auto no-scrollbar
          ">
            <a
              href="/resume.pdf"
              download
              className="
                shrink-0
                inline-flex items-center gap-2
                rounded-full px-5 py-2
                bg-indigo-500 text-white
                hover:bg-indigo-400 transition
              "
            >
              <Download size={16} />
              Resume
            </a>

            <button
              onClick={() =>
                setLang(lang === "en" ? "ta" : "en")
              }
              className="
                shrink-0
                flex items-center gap-2
                text-sm text-slate-400
                hover:text-indigo-400
              "
            >
              <Globe size={16} />
              {lang === "en" ? "தமிழ்" : "English"}
            </button>
          </div>

          {/* SOCIAL */}
          <div className="
            flex gap-6 justify-center md:justify-start
          ">
            <a
              href="https://github.com/Nura730/Nura730"
              target="_blank"
              className="hover:text-indigo-400"
            >
              <Github size={22} />
            </a>

            <a
              href="https://linkedin.com/in/arun-shanmugavel-a6249b321"
              target="_blank"
              className="hover:text-indigo-400"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="
        border-t border-white/10
        py-5 text-center
        text-xs text-slate-500
      ">
        © {year} Nura — All rights reserved
        <p className="mt-1">
          Built with Next.js & Tailwind CSS
        </p>
      </div>

      {/* SCROLL TOP */}
      {showTop && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="
            fixed bottom-20 right-4
            rounded-full
            bg-indigo-500
            p-3
            text-white
            shadow-lg
            hover:bg-indigo-400
            transition
          "
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  );
}
2