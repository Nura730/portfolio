// Tab Switch – Skills Section
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active classes
    tabButtons.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    // Add active to clicked
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// Typewriter Effect – Hero Section
const typedText = document.getElementById("typed-text");
const words = ["Frontend Developer", "UI Designer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 120;

function typeEffect() {
  const current = words[wordIndex];
  const visibleText = current.slice(0, charIndex);

  typedText.textContent = visibleText;

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    typingSpeed = 120;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    typingSpeed = 50;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
    typingSpeed = 800;
  }

  setTimeout(typeEffect, typingSpeed);
}

if (typedText) typeEffect();

// GSAP Scroll Animations (Optional)
if (window.gsap) {
  gsap.from(".section-title", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: ".section-title",
      start: "top 80%",
    }
  });

  gsap.from(".skill-box", {
    opacity: 0,
    scale: 0.8,
    stagger: 0.1,
    duration: 0.6,
    scrollTrigger: {
      trigger: ".skills-grid",
      start: "top 90%",
    }
  });
}
// Mobile Navbar Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("active");
});
// Close menu on nav link click (optional)
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    hamburger.classList.remove("active");
  });
});
