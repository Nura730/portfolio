"use client";
import { useEffect, useState, useRef } from "react";
import {
  Home,
  Target,
  Map,
  Briefcase,
  Zap,
  Shield,
  Award,
  Mail
} from "lucide-react";

const links = [
  { id: "hero", label: "Home", icon: Home },
  { id: "focus", label: "Focus", icon: Target },
  { id: "journey", label: "Journey", icon: Map },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Zap },
  { id: "labs", label: "Labs", icon: Shield },
  { id: "certifications", label: "Certificate", icon: Award },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const scrollRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      links.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(id);

          // AUTO SCROLL MOBILE NAV
          const navItem = document.getElementById(`nav-${id}`);
          if (navItem && scrollRef.current) {
            navItem.scrollIntoView({
              behavior: "smooth",
              inline: "center",
            });
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* DESKTOP NAV */}
      <nav className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50">
        <div
          className="
            flex gap-5 px-6 py-3
            rounded-full
            bg-white/10 backdrop-blur-none md:backdrop-blur-xl
            border border-white/20
            shadow-lg
          "
        >
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`
                text-sm transition-all
                ${
                  active === id
                    ? "text-indigo-400 font-medium"
                    : "text-slate-300 hover:text-white"
                }
              `}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* MOBILE NAV */}
      <div
        className="
          fixed bottom-0 left-0 right-0 z-50
          md:hidden
          bg-white/10 backdrop-blur-none md:backdrop-blur-xl
          border-t border-white/20
        "
      >
        <div
          ref={scrollRef}
          className="
            flex gap-6 px-4 py-3
            overflow-x-auto scroll-smooth
            no-scrollbar
          "
        >
          {links.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              id={`nav-${id}`}
              href={`#${id}`}
              className={`
                flex flex-col items-center
                text-[11px] min-w-[64px]
                transition-all
                ${
                  active === id
                    ? "text-indigo-400 scale-110"
                    : "text-slate-400"
                }
              `}
            >
              <Icon size={18} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
