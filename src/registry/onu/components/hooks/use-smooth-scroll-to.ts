"use client";

export function useSmoothScrollTo(offset = 0) {
  function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const y = window.scrollY + rect.top - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return { scrollToId };
}
