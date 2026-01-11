"use client";

import { useEffect, useRef, useState } from "react";

const sectionColors = {
  hero: "#6366f1",
  focus: "#22c55e",
  projects: "#0ea5e9",
  skills: "#a855f7",
  contact: "#f97316",
};

export default function ScrollCircle() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState("#6366f1");

  const target = useRef(0);
  const current = useRef(0);

  /* SPRING */
  useEffect(() => {
    const animate = () => {
      current.current += (target.current - current.current) * 0.12;
      setProgress(current.current);
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent = (scrollTop / docHeight) * 100;
      target.current = percent;

      setVisible(scrollTop > 80);

      for (let id in sectionColors) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setColor(sectionColors[id]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference - (progress / 100) * circumference;

  if (!visible) return null;

  return (
    <div
      className="
        fixed z-[999] cursor-pointer
        bottom-20 left-4        /* MOBILE */
        md:top-4 md:right-4    /* DESKTOP */
        md:left-auto md:bottom-auto
      "
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    >
      <svg width="44" height="44">
        {/* BG */}
        <circle
          cx="22"
          cy="22"
          r={radius}
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="3"
          fill="none"
        />

        {/* PROGRESS */}
        <circle
          cx="22"
          cy="22"
          r={radius}
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            filter: `drop-shadow(0 0 6px ${color})`,
          }}
        />
      </svg>
    </div>
  );
}
