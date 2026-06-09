"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const tagColors = [
  "tag-orange",
  "tag-blue",
  "tag-yellow",
  "tag-cyan",
  "tag-green",
  "tag-indigo",
  "tag-purple",
  "tag-pink",
  "tag-lime",
  "tag-rose",
];

export function Skills() {
  return (
    <section className="section-shell border-y border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill, index) => (
            <span
              key={skill}
              className={`skill-tag ${tagColors[index % tagColors.length]}`}
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
