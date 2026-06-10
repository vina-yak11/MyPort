"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const canUse =
      window.matchMedia("(pointer: fine)").matches && window.innerWidth > 768;
    if (!canUse) return;

    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    const cursor = document.createElement("div");
    cursor.className = "cursor-main";
    cursor.setAttribute("aria-hidden", "true");
    document.body.appendChild(cursor);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let frame = 0;

    const move = () => {
      x += (targetX - x) * 0.18;
      y += (targetY - y) * 0.18;
      cursor.style.transform = `translate(${x}px, ${y}px)`;
      frame = window.requestAnimationFrame(move);
    };

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const hoverables = document.querySelectorAll(
      "a, button, input, textarea, select, [role='button']",
    );

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("is-hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover"));
    });

    const onLeave = () => cursor.classList.add("is-hidden");
    const onEnter = () => cursor.classList.remove("is-hidden");

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    move();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.body.classList.remove("has-custom-cursor");
      cursor.remove();
    };
  }, []);

  if (!enabled) return null;
  return null;
}
