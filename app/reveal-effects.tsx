"use client";

import { useEffect } from "react";

export default function RevealEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll<HTMLElement>(
      "section img, section h1, section h2, section h3, section p, section .fact, section li, section a, section figure"
    );

    targets.forEach((element, index) => {
      element.classList.add(element.tagName === "IMG" || element.tagName === "FIGURE" ? "reveal-media" : "reveal-text");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 70}ms`);
    });

    if (reduceMotion) {
      targets.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting)),
      { rootMargin: "-8% 0px -10%", threshold: 0.12 }
    );
    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
