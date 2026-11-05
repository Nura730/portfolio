"use client";

import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const projects = [
  { n:"01", name:"FIRO", type:"Product · Expense management", desc:"A shared-expense web app built to make room and group spending easier to track, understand, and manage.", tech:["React","TypeScript","MySQL"], image:"/projects/Firo.png", live:"https://firo-two.vercel.app", code:"https://github.com/Nura730/FIRO" },
  { n:"02", name:"Nura OS", type:"Product · Personal workspace", desc:"A personal workspace bringing together tasks, expense tracking, and AI-assisted productivity in one place.", tech:["React","JavaScript","MySQL"], image:"/projects/nuraos.png", live:"https://nuraos-beta.vercel.app", code:"https://github.com/Nura730/Nura_OS" },
  { n:"03", name:"Log Management System", type:"Automation · Team operations", desc:"A practical team operations system for attendance, task assignment, internal communication, and reminders.", tech:["Apps Script","n8n","JavaScript"], image:"/projects/logsystem.png", live:"https://invodes-log-system.vercel.app", code:"https://github.com/Nura730/Invodes-Log-System" },
  { n:"04", name:"Restaurant Web App", type:"Web · Discovery & filtering", desc:"A restaurant experience with menu filtering designed to help visitors quickly explore and find dishes.", tech:["HTML","CSS","JavaScript"], image:"/projects/restaurant.png", live:"https://nurarestaurant.netlify.app/", code:"https://github.com/Nura730/Restaurant" },
  { n:"05", name:"Naval Portfolio", type:"Client work · Portfolio", desc:"A personal website created to present a marine student's profile, work, and skills with clarity.", tech:["HTML","Tailwind","JavaScript"], image:"/projects/naval.png", live:"https://sasikumar-naval-portfolio.netlify.app/", code:"https://github.com/Nura730/naval-portfolio" },
  { n:"06", name:"Expense Tracker App", type:"Android · Personal finance", desc:"A lightweight Android app for recording and keeping track of everyday expenses.", tech:["Kotlin"], image:"/projects/app.png", code:"https://github.com/Nura730/MyExpenseTracker" },
  { n:"07", name:"Professional Portfolio", type:"Client work · Career", desc:"A job-focused portfolio experience built to help a professional communicate their background and capabilities.", tech:["HTML","Tailwind","JavaScript"], image:"/projects/pro.png", live:"https://anandperumal-portfolio.vercel.app/", code:"https://github.com/Nura730/professional-portfolio" },
];

const labs = [
 ["Linux Practice","Commands, permissions, users, processes, and system navigation.","Beginner"],
 ["TryHackMe Labs","Learning cybersecurity fundamentals, basic attack paths, and defense concepts.","Beginner"],
 ["Python Scripts","Writing small automation and utility scripts to improve problem solving.","Learning"],
 ["Automation Workflows","Building practical workflows with n8n and Google Apps Script.","Intermediate"]
];

const milestones = [
 ["Building with Artificial Intelligence","Saylor.org","Completed","https://drive.google.com/file/d/1ZLK0CS_ric6l8SFMp2nEaK_TpGtwyU6B/view?usp=sharing"],
 ["Cybersecurity Fundamentals","Self learning","Currently learning",""],
 ["Linux Basics","Self practice","Currently learning",""]
];
const planned = ["TryHackMe Learning Paths","Python Automation Certification","Networking Fundamentals","Ethical Hacking Basics"];

const journey = [
 ["2022","The first web experiments","Started learning HTML and CSS, building small layouts and exploring how the web works."],
 ["2024","Computer Science Engineering","Started a CSE degree and built a stronger foundation in programming and problem solving."],
 ["2025","Building for real use","Moved from practice projects to complete websites, automation workflows, client work, and an internship."],
 ["2026","Security & systems","Deepening my understanding of cybersecurity through Linux, hands-on labs, and security fundamentals."]
];

function Eyebrow({children}) { return <p className="eyebrow">{children}</p>; }

export default function Page() {
 return <main>
   <nav className="nav-pill" aria-label="Main navigation">
     <a href="#top">NURA®</a><a href="#work">Work</a><a href="#about">About</a><a href="#journey">Journey</a><a href="#labs">Practice</a><a href="#contact">Contact ↗</a>
   </nav>
   <header id="top" className="site-shell">
    <div className="hero-grid">
     <div>
      <Eyebrow>Developer · Automation builder · Security learner</Eyebrow>
      <h1 className="display hero-title" style={{margin:"30px 0"}}>Curious by nature.<br/> <span className="highlight">Builder</span> by choice.</h1>
      <p className="hero-copy">I’m Nura — a Computer Science student who enjoys turning ideas into useful digital products, thoughtful web experiences, and practical automations.</p>
      <div style={{display:"flex",alignItems:"center",gap:24,flexWrap:"wrap",marginTop:34}}>
       <a className="btn-dark" href="#work">Explore selected work <ArrowDownRight size={16}/></a>
       <a className="btn-line" href="/resume.pdf" target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={14}/></a>
      </div>
      <div style={{display:"flex",gap:20,marginTop:34}}>
       <a href="https://github.com/Nura730" aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={19}/></a>
       <a href="https://www.linkedin.com/in/arun-shanmugavel-a6249b321" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={19}/></a>
       <a href="mailto:arunshanmugavel12@gmail.com" aria-label="Email"><Mail size={19}/></a>
      </div>
     </div>
     <div className="profile-frame"><img src="/myprofilepicforportfolio.png" alt="Portrait of Nura"/></div>
    </div>
    <div className="intro-strip"><span>Based in Tamil Nadu, India</span><span>Frontend · Automation · Cybersecurity</span><span>Open to internships & collaborations ↗</span></div>
   </header>

   <section id="work" className="site-shell section-pad">
    <div className="section-heading"><div><Eyebrow>01 / Selected work</Eyebrow><h2 className="section-title" style={{marginTop:18}}>Things I’ve<br/>put into the world.</h2></div><p className="hero-copy" style={{maxWidth:330,fontSize:13}}>A selection of products, experiments, and client work. Each one started with a problem worth solving.</p></div>
    <div>{projects.map(p=><article className="project-row" key={p.n}>
     <a className="project-image" href={p.live||p.code} target="_blank" rel="noreferrer"><img src={p.image} alt={p.name+" preview"}/></a>
     <div><span className="project-number">{p.n} / {p.type}</span><h3 className="project-name">{p.name}</h3><p className="project-desc">{p.desc}</p><div>{p.tech.map(t=><span className="tag" key={t}>{t}</span>)}</div><div>{p.live ? <a className="text-link" href={p.live} target="_blank" rel="noreferrer">Visit project <ArrowUpRight size={14}/></a> : null}<a className="text-link" href={p.code} target="_blank" rel="noreferrer">Source code <Github size={14}/></a></div></div>
    </article>)}</div>
   </section>

   <section id="about" className="site-shell">
    <div className="about-panel">
     <div><Eyebrow>02 / A little about me</Eyebrow><p className="eyebrow" style={{marginTop:65}}>Always learning.<br/>Always making.</p></div>
     <div><h2 className="about-quote">I like understanding how things work — then finding ways to make them work better.</h2><p className="about-copy" style={{marginTop:28}}>My interests sit at the intersection of software, systems, and security. I enjoy building interfaces, connecting tools through automation, and learning how to make digital systems more reliable. I learn best by building, testing, breaking things safely, and improving them.</p><p className="about-copy" style={{marginTop:14}}>Outside a screen, I’m usually collecting ideas for the next thing to build.</p></div>
    </div>
   </section>

   <section className="site-shell section-pad">
    <div className="section-heading"><div><Eyebrow>03 / Toolset</Eyebrow><h2 className="section-title" style={{marginTop:18}}>What I work with.</h2></div></div>
    <div className="skill-grid">
     {[
      ["01 / FRONTEND","HTML · CSS · JavaScript · React · Next.js"],
      ["02 / PROGRAMMING","JavaScript · TypeScript · Kotlin · Python"],
      ["03 / AUTOMATION","n8n · Google Apps Script · Workflow design"],
      ["04 / SYSTEMS","Linux · Git · GitHub · Web fundamentals"],
      ["05 / DATABASES","MySQL · SQL"],
      ["06 / DESIGN","Responsive UI · Tailwind CSS · Figma"],
      ["07 / SECURITY","Linux labs · Web security fundamentals"],
      ["08 / PRACTICE","Debugging · Documentation · Iteration"]
     ].map(([label,value])=><div className="skill-cell" key={label}><span>{label}</span>{value}</div>)}
    </div>
   </section>

   <section id="labs" className="site-shell section-pad">
    <div className="section-heading"><div><Eyebrow>04 / Curiosity in practice</Eyebrow><h2 className="section-title" style={{marginTop:18}}>Learning by doing.</h2></div><p className="hero-copy" style={{maxWidth:330,fontSize:13}}>A snapshot of the skills and systems I’m actively exploring. Progress is a practice, not a percentage.</p></div>
    <div className="skill-grid" style={{gridTemplateColumns:"repeat(2,1fr)"}}>{labs.map(([title,desc,level])=><div className="skill-cell" key={title}><span>{level.toUpperCase()} / PRACTICE</span><strong style={{fontFamily:"Manrope",fontSize:18,letterSpacing:"-.04em"}}>{title}</strong><p className="project-desc" style={{marginTop:10}}>{desc}</p></div>)}</div>
    <div style={{paddingTop:70}}><Eyebrow>Learning milestones</Eyebrow><h3 className="section-title" style={{fontSize:"clamp(30px,4vw,48px)",marginTop:14,marginBottom:28}}>Proof of progress.</h3>
     <div className="journey-list">{milestones.map(([title,platform,status,link])=><div className="journey-item" key={title}><span className="eyebrow">{status}</span><h4 style={{fontFamily:"Manrope",fontSize:16,margin:0}}>{title}</h4><p>{platform}{link ? <> · <a href={link} target="_blank" rel="noreferrer" style={{textDecoration:"underline"}}>View certificate ↗</a></> : null}</p></div>)}</div>
     <p className="eyebrow" style={{marginTop:28}}>Next up · {planned.join(" · ")}</p>
    </div>
   </section>

   <section id="journey" className="site-shell section-pad">
    <div className="section-heading"><div><Eyebrow>05 / The journey</Eyebrow><h2 className="section-title" style={{marginTop:18}}>A work in progress.</h2></div></div>
    <div className="journey-list">{journey.map(([year,title,desc])=><div className="journey-item" key={year}><span className="eyebrow">{year}</span><h3 style={{fontFamily:"Manrope",fontSize:18,letterSpacing:"-.04em",margin:0}}>{title}</h3><p>{desc}</p></div>)}</div>
   </section>

   <section id="contact" className="site-shell">
    <div className="contact-panel"><div><Eyebrow>06 / Have a good one in mind?</Eyebrow><h2 className="section-title" style={{marginTop:25}}>Let’s make<br/>something useful.</h2><p style={{marginTop:24,maxWidth:440,lineHeight:1.8}}>I’m open to internships, freelance projects, collaborations, and conversations about technology.</p></div><div><a className="btn-dark" style={{background:"var(--accent)",color:"var(--ink)"}} href="mailto:arunshanmugavel12@gmail.com">Start a conversation <ArrowUpRight size={16}/></a><p style={{fontSize:12,marginTop:22}}>arunshanmugavel12@gmail.com</p><div style={{display:"flex",gap:18,marginTop:17}}><a href="https://github.com/Nura730" target="_blank" rel="noreferrer"><Github size={18}/></a><a href="https://www.linkedin.com/in/arun-shanmugavel-a6249b321" target="_blank" rel="noreferrer"><Linkedin size={18}/></a></div></div></div>
   </section>
   <footer className="site-shell"><div className="footer-row"><span>© {new Date().getFullYear()} Nura · Made with intent.</span><span>Curiosity over comfort.</span><a href="#top">Back to top ↑</a></div></footer>
 </main>;
}
