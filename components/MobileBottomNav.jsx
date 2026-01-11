"use client";

import { useEffect, useState } from "react";
import {
  Home,
  Target,
  Map,
  Folder,
  Code,
  FlaskConical,
  Award,
  Mail
} from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "focus", label: "Focus", icon: Target },
  { id: "journey", label: "Journey", icon: Map },
  { id: "projects", label: "Projects", icon: Folder },
  { id: "skills", label: "Skills", icon: Code },
  { id: "labs", label: "Labs", icon: FlaskConical },
  { id: "certificate", label: "Cert", icon: Award },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function MobileBottomNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop - 150;
          const height = section.offsetHeight;
          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="
      fixed bottom-3 left-1/2 -translate-x-1/2
      z-50 sm:hidden
      w-[95%]
      rounded-2xl
      bg-white/10 backdrop-blur-xl
      border border-white/10
      px-3 py-2
    ">
      <div className="flex justify-between">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="
                flex flex-col items-center
                text-[10px]
                transition
              "
            >
              <Icon
                size={18}
                className={
                  active === item.id
                    ? "text-indigo-400"
                    : "text-slate-400"
                }
              />
              <span
                className={
                  active === item.id
                    ? "text-indigo-400"
                    : "text-slate-400"
                }
              >
                {item.label}
              </span>

              {/* Active Dot */}
              {active === item.id && (
                <span className="
                  mt-1 h-1 w-1
                  rounded-full bg-indigo-400
                " />
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
