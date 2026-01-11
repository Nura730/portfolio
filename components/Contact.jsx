"use client";
import { useState } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(
        "https://formspree.io/f/xqearjkj",
        {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        }
      );

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        "arunshanmugavel12@gmail.com"
      );
      alert("Email copied!");
    } catch {
      alert("Copy failed");
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-24">
      <div className="
        grid md:grid-cols-2 gap-10
        bg-white/5 backdrop-blur-none md:backdrop-blur-xl
        border border-white/10
        rounded-3xl p-8
        shadow-[0_0_40px_rgba(99,102,241,0.15)]
      ">

        {/* LEFT */}
        <div className="space-y-5">

          <span className="
            inline-block px-3 py-1 text-xs
            rounded-full
            bg-green-500/10
            text-green-400
            border border-green-400/30
          ">
            🟢 Open to Work
          </span>

          <h2 className="text-2xl font-semibold">
            Let’s Connect
          </h2>

          <p className="text-slate-300">
            Open for internships, freelance work,
            collaborations and cybersecurity discussions.
          </p>

          <div className="space-y-3 text-sm text-slate-400">
            <p>⏳ Replies within 24–48 hours</p>
            <p>📍 Tamil Nadu, India</p>

            <button
              onClick={copyEmail}
              className="
                flex items-center gap-2
                text-indigo-400 hover:underline
                transition
              "
            >
              <Mail size={16} />
              Copy Email
            </button>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 pt-4">
            {[
              { icon: <Github />, link: "https://github.com/Nura730/Nura730" },
              { icon: <Linkedin />, link: "https://linkedin.com/in/arun-shanmugavel-a6249b321" },
              { icon: <Mail />, link: "mailto:arunshanmugavel12@gmail.com" },
              { icon: <Phone />, link: "https://wa.me/9361683058" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  transition-transform duration-300
                  hover:scale-125
                  active:scale-95
                "
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* FORM */}
        <div>

          {status === "success" && (
            <div className="
              bg-green-500/10
              border border-green-400/30
              rounded-xl p-4
              text-green-300
            ">
              ✅ Message sent successfully!  
              <p className="text-xs mt-1">
                I’ll get back to you soon.
              </p>
            </div>
          )}

          {status === "error" && (
            <div className="
              bg-red-500/10
              border border-red-400/30
              rounded-xl p-4
              text-red-300
            ">
              ❌ Something went wrong.
              Try again later.
            </div>
          )}

          {status !== "success" && (
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="
                  w-full p-4 rounded-xl
                  bg-white/5 border border-white/10
                  focus:ring-2 focus:ring-indigo-500/70
                  focus:shadow-[0_0_12px_rgba(99,102,241,0.5)]
                  outline-none
                "
              />

              <input
                type="email"
                name="_replyto"
                required
                placeholder="Your Email"
                className="
                  w-full p-4 rounded-xl
                  bg-white/5 border border-white/10
                  focus:ring-2 focus:ring-indigo-500/70
                  focus:shadow-[0_0_12px_rgba(99,102,241,0.5)]
                  outline-none
                "
              />

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Your Message"
                className="
                  w-full p-4 rounded-xl
                  bg-white/5 border border-white/10
                  focus:ring-2 focus:ring-indigo-500/70
                  focus:shadow-[0_0_12px_rgba(99,102,241,0.5)]
                  outline-none
                "
              />

              <button
                disabled={status === "sending"}
                className="
                  rounded-full px-6 py-3
                  bg-indigo-500 text-white
                  hover:bg-indigo-400
                  hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]
                  transition
                  active:scale-95
                  disabled:opacity-60
                "
              >
                {status === "sending"
                  ? "Sending..."
                  : "Let’s Connect"}
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
