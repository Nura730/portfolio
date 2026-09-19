import { useEffect, useState } from "react";

export default function Background() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e) => setPos({ x: (e.clientX / window.innerWidth - 0.5) * 18, y: (e.clientY / window.innerHeight - 0.5) * 18 });
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-[#070707]">
    <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:42px_42px]" />
    <div style={{ transform: "translate3d(" + pos.x + "px," + pos.y + "px,0)" }} className="absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/12 blur-[140px]" />
    <div style={{ transform: "translate3d(" + (-pos.y) + "px," + pos.x + "px,0)" }} className="absolute right-[-120px] top-1/3 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[130px]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(0,0,0,.2)_55%,rgba(0,0,0,.72)_100%)]" />
  </div>;
}