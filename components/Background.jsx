"use client";
import { useEffect, useState } from "react";

export default function Background() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
        }}
        className="absolute -top-40 left-1/2
        h-[500px] w-[500px]
        -translate-x-1/2
        bg-indigo-500/20
        blur-[150px]"
      />

      <div
        style={{
          transform: `translate(${-pos.x}px, ${-pos.y}px)`,
        }}
        className="absolute bottom-0 right-20
        h-[400px] w-[400px]
        bg-cyan-400/20
        blur-[140px]"
      />

      <div
        style={{
          transform: `translate(${pos.y}px, ${-pos.x}px)`,
        }}
        className="absolute top-1/3 left-10
        h-[300px] w-[300px]
        bg-purple-500/10
        blur-[120px]"
      />
    </div>
  );
}
