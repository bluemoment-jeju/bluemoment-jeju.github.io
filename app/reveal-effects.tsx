"use client";

import { useEffect } from "react";

export default function RevealEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll<HTMLElement>(
      "section img, section h1, section h2, section h3, section p, section .fact, section li, section a, section figure"
    );

    const cardSelector = ".moment-row > div, .amenity-card, .streaming-card, .base-amenities, .room-visual, .room-copy, .film-poster, .store-content, .store-gallery figure, .location-map, .signage";
    const cards = Array.from(document.querySelectorAll<HTMLElement>(cardSelector));
    const animatedTargets = [...cards, ...Array.from(targets).filter((element) => !element.closest(cardSelector))];

    animatedTargets.forEach((element, index) => {
      element.classList.add(element.matches(cardSelector) ? "reveal-card" : element.tagName === "IMG" || element.tagName === "FIGURE" ? "reveal-media" : "reveal-text");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 70}ms`);
    });

    if (reduceMotion) {
      animatedTargets.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { rootMargin: "-8% 0px -10%", threshold: 0.12 }
    );
    animatedTargets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
