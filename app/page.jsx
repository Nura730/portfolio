"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const projects = [
  {
    n: "01",
    name: "MediOrchestra",
    category: "Healthcare · Hospital operations",
    description:
      "A role-based hospital command system that connects patients, doctors, nurses and operating-theatre teams. It brings requests, care coordination and hospital-flow intelligence into one shared experience.",
    stack: ["React", "Node.js", "PostgreSQL", "Socket.IO", "LightGBM"],
    visual: "hospital",
    label: "MEDIORCHESTRA",
    code: "CARE / FLOW",
    kicker: "HOSPITAL COMMAND SYSTEM",
    statement: "Care teams, in sync.",
    chips: ["5 role workspaces", "ICU risk model", "Capacity outlook"],
    footnote: "Patient flow · OT coordination · Forecasting",
    live: "https://hospital-orchestrator-phi.vercel.app",
    source: "https://github.com/Nura730/hospital-orchestrator"
  },
  {
    n: "02",
    name: "Everest Textile Mills",
    category: "Industry · Manufacturing operations",
    description:
      "An end-to-end textile mill platform connecting yarn inventory, order planning, production, machine operations, quality checks, dispatch, invoicing and costing—with offline sync and live updates.",
    stack: ["React", "Node.js", "MongoDB", "Socket.IO", "Dexie"],
    visual: "everest",
    label: "EVEREST TEXTILE MILLS",
    code: "MILL / OPS",
    kicker: "MANUFACTURING OPERATIONS",
    statement: "From yarn to dispatch.",
    chips: ["Inventory & orders", "Production & QC", "Costing & audit"],
    footnote: "17 documented implementation phases",
    live: "https://everest-textile-mills.vercel.app",
    source: "https://github.com/Nura730/everest_textile_mills"
  },
  {
    n: "03",
    name: "NeerWatch",
    category: "Public welfare · Environmental monitoring",
    description:
      "An offline-first water-quality monitoring prototype for field teams to record household tests, sync observations when connected, detect location-based clusters and surface ward-level alerts.",
    stack: ["React", "Node.js", "MongoDB", "Leaflet", "Dexie"],
    visual: "neerwatch",
    label: "NEERWATCH",
    code: "FIELD / SIGNAL",
    kicker: "WATER QUALITY MONITORING",
    statement: "Local signals. Clearer action.",
    chips: ["Offline-first capture", "Spatial clusters", "Ward-level alerts"],
    footnote: "Prototype · Synthetic demonstration data",
    note: "NeerWatch currently uses synthetic demonstration data. It is not a record of real-world water quality.",
    live: "https://neerwatch.vercel.app",
    source: "https://github.com/Nura730/neerwatch"
  }
];

const skillGroups = [
  {
    number: "01",
    title: "Frontend development",
    icon: Code2,
    summary: "Turning ideas into clear, responsive interfaces.",
    items: ["HTML & CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    number: "02",
    title: "Backend & databases",
    icon: Database,
    summary: "Connecting interfaces to useful data and application logic.",
    items: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB", "MySQL"]
  },
  {
    number: "03",
    title: "Automation",
    icon: Workflow,
    summary: "Reducing repetitive work with connected tools and workflows.",
    items: ["n8n", "Google Apps Script", "Workflow design", "API integrations"]
  },
  {
    number: "04",
    title: "Systems & security",
    icon: ShieldCheck,
    summary: "Understanding the systems behind the interface.",
    items: ["Linux", "Git & GitHub", "Web security fundamentals", "TryHackMe labs"]
  }
];

const learning = [
  {
    title: "Linux practice",
    detail: "Working with commands, permissions, users, processes and system navigation.",
    label: "HANDS-ON"
  },
  {
    title: "TryHackMe labs",
    detail: "Learning cybersecurity fundamentals through guided, practical exercises.",
    label: "PRACTICE"
  },
  {
    title: "Python experiments",
    detail: "Writing small scripts and utilities while strengthening problem-solving skills.",
    label: "EXPLORING"
  },
  {
    title: "Automation workflows",
    detail: "Building practical workflows with n8n and Google Apps Script.",
    label: "BUILDING"
  }
];

const milestones = [
  {
    title: "Building with Artificial Intelligence",
    source: "Saylor Academy",
    status: "Completed",
    link: "https://drive.google.com/file/d/1ZLK0CS_ric6l8SFMp2nEaK_TpGtwyU6B/view?usp=sharing"
  },
  {
    title: "Cybersecurity fundamentals",
    source: "Independent learning",
    status: "In progress"
  },
  {
    title: "Linux fundamentals",
    source: "Hands-on practice",
    status: "In progress"
  }
];

const journey = [
  {
    year: "2022",
    title: "The first web experiments",
    detail: "Started exploring HTML and CSS, building small layouts and learning how the web works."
  },
  {
    year: "2024",
    title: "A stronger computing foundation",
    detail: "Began a Computer Science Engineering degree and developed a broader programming foundation."
  },
  {
    year: "2025",
    title: "From practice to real projects",
    detail: "Worked on complete websites, client projects and workflow automations, with hands-on professional experience."
  },
  {
    year: "2026",
    title: "Systems, scale & security",
    detail: "Focused on larger software systems while deepening practical knowledge of Linux and cybersecurity."
  }
];

function Eyebrow({ children, light = false }) {
  return <p className={light ? "eyebrow eyebrow--light" : "eyebrow"}>{children}</p>;
}

function Reveal({ children, className = "", delay = 0, once = true }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.14 }}
      transition={{ duration: 0.68, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Page() {
  const reduceMotion = useReducedMotion();

  return (
    <main>
      <nav className="nav-pill" aria-label="Main navigation">
        <a className="nav-brand" href="#top">ARUN<span>®</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#journey">Journey</a>
          <a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={13} /></a>
        </div>
      </nav>

      <header id="top" className="site-shell hero">
        <div className="hero-grid">
          <motion.div
            className="hero-content"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="availability"><span className="availability-dot" />Open to internships, freelance & collaborations</div>
            <Eyebrow>Developer · Automation builder · Cybersecurity enthusiast</Eyebrow>
            <h1 className="display hero-title">
              Building <span className="highlight">digital products</span>, intelligent automations & secure systems.
            </h1>
            <p className="hero-copy hero-intro">
              I build web applications, develop intelligent automation workflows, and explore cybersecurity to create practical digital solutions. Through personal projects, client collaborations, and hands-on experience, I experiment with technologies, solve real-world problems, and turn ideas into working products.
            </p>
            <div className="hero-actions">
              <a className="btn-dark" href="#work">Explore my work <ArrowDownRight size={16} /></a>
              <a className="btn-line" href="#contact">Let’s connect <ArrowUpRight size={15} /></a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/Nura730" aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/arun-shanmugavel-a6249b321" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
              <a href="mailto:arunshanmugavel12@gmail.com" aria-label="Email"><Mail size={18} /></a>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-photo-frame">
              <img src="/arun-profile.webp" alt="Portrait of Arun" />
              <div className="photo-index">ARUN · DEVELOPER</div>
            </div>
            <div className="hero-orbit hero-orbit--one" />
            <div className="hero-orbit hero-orbit--two" />
            <div className="hero-side-note">CURIOUS BY NATURE<br />BUILDER BY CHOICE</div>
            <div className="hero-sticker"><Sparkles size={18} /><span>Ideas into<br />interfaces & systems</span></div>
          </motion.div>
        </div>

        <motion.div
          className="intro-strip"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <span><MapPin size={13} />Tamil Nadu, India</span>
          <span>Frontend · Backend · Automation · Cybersecurity</span>
          <a href="#contact">Available to build together <ArrowUpRight size={13} /></a>
        </motion.div>
      </header>

      <section id="work" className="site-shell section-pad">
        <Reveal className="section-heading">
          <div>
            <Eyebrow>01 / Selected work</Eyebrow>
            <h2 className="section-title">Built around<br /><span className="title-accent">real workflows.</span></h2>
          </div>
          <p className="section-lead">Three systems exploring different problems—from coordinating hospital care to managing manufacturing operations and monitoring water quality.</p>
        </Reveal>

        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal key={project.n} className="project-row" delay={index * 0.06}>
              <motion.a
                className={`project-art project-art--${project.visual}`}
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.name} live demo`}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.28 }}
              >
                <div className="project-art-top"><span>{project.label}</span><span>{project.code}</span></div>
                <div className="project-art-mid">
                  <span className="project-art-kicker">{project.kicker}</span>
                  <h3 className="project-art-title">{project.statement}</h3>
                  <div className="project-art-chips">{project.chips.map(chip => <span key={chip}>{chip}</span>)}</div>
                </div>
                <div className="project-art-footer"><span>{project.footnote}</span><ArrowUpRight size={18} /></div>
              </motion.a>

              <div className="project-copy">
                <span className="project-number">{project.n} <span>/</span> {project.category}</span>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                {project.note ? <p className="project-note"><span>NOTE</span>{project.note}</p> : null}
                <div className="project-tags">{project.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div>
                <div className="project-links">
                  <a className="text-link" href={project.live} target="_blank" rel="noreferrer">Live preview <ArrowUpRight size={14} /></a>
                  <a className="text-link" href={project.source} target="_blank" rel="noreferrer">Source code <Github size={14} /></a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="work-footnote">
          <span>More experiments are in progress.</span>
          <a href="https://github.com/Nura730" target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={14} /></a>
        </Reveal>
      </section>

      <section id="about" className="site-shell about-section">
        <Reveal className="about-panel">
          <div className="about-side">
            <Eyebrow>02 / A little about me</Eyebrow>
            <span className="about-side-note">ALWAYS LEARNING.<br />ALWAYS MAKING.</span>
            <div className="about-mark">A<span>.</span></div>
          </div>
          <div className="about-main">
            <h2 className="about-quote">I like understanding how things work — then finding ways to make them work <span>better.</span></h2>
            <p className="about-copy">I’m Arun. My interests sit at the intersection of software development, automation and cybersecurity. I enjoy taking an idea, understanding the problem behind it, and shaping it into something people can actually use.</p>
            <p className="about-copy">I learn by building, testing, debugging and improving. Whether I’m designing an interface, connecting tools into a workflow or exploring how systems behave, I’m drawn to work that combines curiosity with practical problem-solving.</p>
            <div className="about-signoff"><span>My approach</span><strong>Stay curious. Build thoughtfully. Keep improving.</strong></div>
          </div>
        </Reveal>
      </section>

      <section id="skills" className="site-shell section-pad">
        <Reveal className="section-heading">
          <div>
            <Eyebrow>03 / Skills & tools</Eyebrow>
            <h2 className="section-title">The tools behind<br /><span className="title-accent">the work.</span></h2>
          </div>
          <p className="section-lead">A practical toolkit across interface development, backend systems, automation and security fundamentals—growing through projects and continued learning.</p>
        </Reveal>
        <div className="skill-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal className="skill-card" key={group.number} delay={index * 0.05}>
                <div className="skill-card-top"><span>{group.number} / AREA</span><Icon size={21} strokeWidth={1.6} /></div>
                <h3>{group.title}</h3>
                <p>{group.summary}</p>
                <div className="skill-items">{group.items.map(item => <span key={item}>{item}</span>)}</div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="skills-note">
          <Layers3 size={17} />
          <p><strong>Also exploring:</strong> Python, Kotlin, AI-assisted workflows and deeper web-security concepts.</p>
        </Reveal>
      </section>

      <section id="practice" className="site-shell section-pad practice-section">
        <Reveal className="section-heading">
          <div>
            <Eyebrow>04 / Learning in practice</Eyebrow>
            <h2 className="section-title">Keep learning.<br /><span className="title-accent">Keep testing.</span></h2>
          </div>
          <p className="section-lead">Technology moves quickly. I keep strengthening the fundamentals through guided labs, small experiments and hands-on practice.</p>
        </Reveal>
        <div className="learning-grid">
          {learning.map((item, index) => (
            <Reveal className="learning-card" key={item.title} delay={index * 0.05}>
              <div className="learning-card-top"><span>{item.label}</span><span>0{index + 1}</span></div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <div className="learning-arrow"><ArrowUpRight size={17} /></div>
            </Reveal>
          ))}
        </div>

        <Reveal className="milestones-block">
          <div className="milestones-heading">
            <div><Eyebrow>Learning milestones</Eyebrow><h3>Progress, not percentages.</h3></div>
            <p>Courses and topics that are part of my ongoing learning path.</p>
          </div>
          <div className="milestone-list">
            {milestones.map((item, index) => (
              <div className="milestone-row" key={item.title}>
                <span className="milestone-index">0{index + 1}</span>
                <div className="milestone-name"><strong>{item.title}</strong><span>{item.source}</span></div>
                <span className={item.status === "Completed" ? "milestone-status is-complete" : "milestone-status"}>{item.status === "Completed" ? <Check size={13} /> : null}{item.status}</span>
                {item.link ? <a href={item.link} target="_blank" rel="noreferrer" aria-label={`View ${item.title} certificate`}><ArrowUpRight size={16} /></a> : <span className="milestone-placeholder" />}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="journey" className="site-shell section-pad">
        <Reveal className="section-heading">
          <div>
            <Eyebrow>05 / The journey</Eyebrow>
            <h2 className="section-title">A work in<br /><span className="title-accent">progress.</span></h2>
          </div>
          <p className="section-lead">A few milestones in how my interests have grown—from first web experiments to building larger systems and exploring security.</p>
        </Reveal>
        <div className="journey-list">
          {journey.map((item, index) => (
            <Reveal className="journey-item" key={item.year} delay={index * 0.04}>
              <span className="journey-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <span className="journey-dot" />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="site-shell contact-section">
        <Reveal className="contact-panel">
          <div className="contact-main">
            <Eyebrow light>06 / Have a project in mind?</Eyebrow>
            <h2 className="contact-title">Let’s make<br /><span>something useful.</span></h2>
            <p>I’m open to internships, freelance projects, collaborations and thoughtful conversations about technology. Have an idea? Let’s talk.</p>
            <a className="contact-email" href="mailto:arunshanmugavel12@gmail.com">arunshanmugavel12@gmail.com <ArrowUpRight size={16} /></a>
          </div>
          <div className="contact-aside">
            <span className="contact-aside-label">START A CONVERSATION</span>
            <a className="contact-button" href="mailto:arunshanmugavel12@gmail.com">Get in touch <ArrowUpRight size={17} /></a>
            <div className="contact-socials">
              <a href="https://github.com/Nura730" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <a href="https://www.linkedin.com/in/arun-shanmugavel-a6249b321" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
            </div>
          </div>
          <span className="contact-watermark">ARUN</span>
        </Reveal>
      </section>

      <footer className="site-shell footer">
        <div className="footer-row">
          <a className="footer-brand" href="#top">ARUN<span>®</span></a>
          <span>Built with curiosity & intention.</span>
          <a href="#top">Back to top <ArrowUpRight size={13} /></a>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Arun Shanmugavel</span><span>Frontend · Automation · Cybersecurity</span></div>
      </footer>
    </main>
  );
}
