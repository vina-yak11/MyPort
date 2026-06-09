"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="section-shell min-h-screen pt-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="hero-glow" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-b from-violet-500/10 to-transparent p-2">
            <Image
              src={siteConfig.avatarPath}
              alt={`${siteConfig.name} profile photo`}
              width={520}
              height={680}
              priority
              className="h-auto w-full rounded-2xl object-cover object-top"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-6"
        >
          <p className="text-sm text-muted">👋 Hey there, I&apos;m</p>
          <h1 className="text-gradient text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="text-sm text-muted">
            B.Tech CSE · {siteConfig.location}
          </p>
          <p className="text-lg font-medium text-accent">{siteConfig.subtitle}</p>
          <p className="max-w-xl text-lg text-foreground/90">{siteConfig.tagline}</p>
          <p className="max-w-xl text-muted">
            I don&apos;t just write code — I craft reliable systems that turn ideas
            into useful, user-friendly applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="#projects" className="btn-primary">
              View My Work
            </Link>
            <a href={siteConfig.resumePath} download className="btn-outline">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="social-icon"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
