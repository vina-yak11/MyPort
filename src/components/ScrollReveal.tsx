"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
};

const offsets = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const lastScrollY = useRef(0);
  const wasVisible = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const scrollingDown = window.scrollY >= lastScrollY.current;
        lastScrollY.current = window.scrollY;

        if (entry.isIntersecting) {
          wasVisible.current = true;
          const offset = offsets[direction];
          controls.start({
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              duration: 0.55,
              delay,
              ease: [0.22, 1, 0.36, 1],
            },
          });
        } else if (wasVisible.current) {
          const offset = offsets[direction];
          controls.start({
            opacity: scrollingDown ? 0 : 0.35,
            x: scrollingDown ? offset.x * 0.5 : offset.x,
            y: scrollingDown ? offset.y * 0.5 : -offset.y * 0.3,
            transition: { duration: 0.35 },
          });
        }
      },
      { threshold: 0.15, rootMargin: "-5% 0px -5% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [controls, delay, direction]);

  const offset = offsets[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
