"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  const cardRef = useRef(null);

  const onMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -10;
    const rotateY = (x / rect.width - 0.5) * 10;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const onLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-indigo-400 text-sm mb-2">Hi, I'm Nura 👋</p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Building secure systems <br />
            <span className="text-indigo-400">& automation workflows</span>
          </h1>

          <p className="mt-5 text-slate-300 max-w-xl leading-relaxed">
            Hybrid CSE student passionate about cybersecurity. Learning through
            hands-on labs, real-world projects, and continuous experimentation.
          </p>

          <ul className="mt-5 text-sm text-slate-400 space-y-1">
            <li>• Practicing Linux & security labs</li>
            <li>• Building automation systems</li>
            <li>• Exploring web security fundamentals</li>
          </ul>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-indigo-500
              px-6 py-3 text-sm font-semibold
              text-white hover:bg-indigo-400 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border
              border-white/20 px-6 py-3
              text-sm hover:border-indigo-400 transition"
            >
              Contact Me
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Nura730/Nura730"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex items-center gap-2
              rounded-full bg-white/5
              border border-white/10
              px-5 py-3 text-sm
              hover:border-indigo-400
              transition
              "
            >
              <Github size={16} />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/arun-shanmugavel-a6249b321"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex items-center gap-2
              rounded-full bg-white/5
              border border-white/10
              px-5 py-3 text-sm
              hover:border-indigo-400
              transition
              "
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <div
            ref={cardRef}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className="
            relative h-72 w-72 md:h-80 md:w-80
            rounded-3xl bg-white/5
            border border-white/10
            backdrop-blur-none md:backdrop-blur-xl
            flex items-center justify-center
            transform-gpu perspective-1000
            animate-float
            "
          >
            <img
  src="/profile.jpg"
  alt="Nura profile photo"
  className="
    h-full w-full object-cover
    rounded-full
    border-4 border-indigo-400/40
    shadow-[0_0_40px_rgba(99,102,241,0.5)]
  "
/>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
