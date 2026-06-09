"use client";

import { motion } from "framer-motion";
import { GitHubIcon } from "@/components/Icons";
import Image from "next/image";
import { siteConfig } from "@/data/portfolio";

export function GitHubSection() {
  return (
    <section id="github" className="section-shell border-y border-white/5">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">GitHub</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Building cool things with code
          </h2>
          <p className="mt-4 max-w-lg text-muted">
            Open to software development roles, internships, and collaborations
            where strong fundamentals matter.
          </p>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="btn-outline mt-6 inline-flex"
          >
            <GitHubIcon className="h-4 w-4" />
            View Profile
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card flex items-center gap-5"
        >
          <Image
            src="https://github.com/vina-yak11.png"
            alt="GitHub avatar"
            width={80}
            height={80}
            className="rounded-full border border-violet-500/30"
            unoptimized
          />
          <div>
            <p className="text-lg font-semibold">vina-yak11</p>
            <p className="text-sm text-muted">
              3 projects · 3 internships · B.Tech CSE {siteConfig.graduationYear}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
