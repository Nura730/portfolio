"use client";
import { useEffect, useState } from "react";
import { Command, ArrowUpRight } from "lucide-react";

const links = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "lab", label: "Lab" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("work");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -45% 0px" });
    links.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  return <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-24px)] max-w-5xl -translate-x-1/2">
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-3 py-2 backdrop-blur-xl shadow-2xl shadow-black/30">
      <a href="#work" className="flex items-center gap-2 px-2 py-1 text-sm font-semibold tracking-tight"><span className="grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/[.04] font-mono">N/</span><span>Nura</span></a>
      <nav className="hidden items-center gap-1 sm:flex">{links.map(({ id, label }) => <a key={id} href={"#" + id} className={"rounded-xl px-3 py-2 text-xs transition " + (active === id ? "bg-white/[.08] text-white" : "text-white/50 hover:text-white")}>{label}</a>)}</nav>
      <div className="flex items-center gap-2"><button onClick={() => window.dispatchEvent(new Event("open-command"))} aria-label="Open command menu" className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[.04] text-white/60 hover:text-white"><Command size={15}/></button><a href="#contact" className="hidden sm:inline-flex items-center gap-1 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-black">Start a conversation <ArrowUpRight size={13}/></a></div>
    </div>
  </header>;
}