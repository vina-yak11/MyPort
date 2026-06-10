"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

type SocialCardProps = {
  name: string;
  handle: string;
  url: string;
  glowColor: string;
  bg: string;
  icon: React.ComponentType<{ className?: string }>;
  index: number;
};

export function SocialCard({
  name,
  handle,
  url,
  glowColor,
  bg,
  icon: Icon,
  index,
}: SocialCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  function handleMove(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rotateX: -y * 18, rotateY: x * 18 });
  }

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (url.startsWith("http")) {
      event.preventDefault();
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <motion.a
      ref={ref}
      href={url}
      target={url.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="social-card-prem group block"
      style={{ perspective: "800px" }}
      initial={{ opacity: 0, y: 80, rotateX: 20, rotateZ: index % 2 === 0 ? -6 : 6 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateZ: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.7, type: "spring", stiffness: 90 }}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ rotateX: 0, rotateY: 0 })}
      onClick={handleClick}
    >
      <motion.div
        className="social-card-prem-inner"
        style={{ borderColor: `${glowColor}33` }}
        animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        whileHover={{
          boxShadow: `0 20px 60px ${glowColor}30, 0 0 40px ${glowColor}15`,
        }}
      >
        <div
          className="social-card-prem-glow"
          style={{ background: bg }}
          aria-hidden="true"
        />
        <motion.div
          className="social-card-prem-icon"
          style={{ color: glowColor, borderColor: `${glowColor}44` }}
          whileHover={{ scale: 1.12, rotate: 4 }}
        >
          <Icon className="h-7 w-7" />
        </motion.div>
        <p className="text-sm font-bold">{name}</p>
        <p className="mt-1 text-xs text-muted break-all">{handle}</p>
      </motion.div>
    </motion.a>
  );
}
