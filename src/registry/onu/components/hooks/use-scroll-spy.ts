"use client";

import { useEffect, useState } from "react";

/**
 * useScrollSpy
 * Tracks which section id is currently in view using IntersectionObserver.
 */
export function useScrollSpy(sectionIds: string[], rootMargin = "-40% 0px -40% 0px") {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveId(id);
          }
        });
      },
      { root: null, rootMargin, threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return activeId;
}
