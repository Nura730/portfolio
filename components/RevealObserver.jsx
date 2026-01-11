"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
