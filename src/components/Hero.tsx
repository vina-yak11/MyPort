"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import Image from "next/image";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";
import { ScrollDownArrow } from "@/components/ScrollDownArrow";
import Link from "next/link";
import { siteConfig } from "@/data/portfolio";

export function Hero() {
  const nameParts = siteConfig.name.split(" ");

  return (
    <section id="home" className="hero-section">
      <div className="mx-auto grid w-full max-w-6xl flex-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-6"
        >
          <p className="text-sm text-muted">👋 Hey there, I&apos;m</p>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            {nameParts.map((part, i) => (
              <motion.span
                key={part}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.6 }}
                className="text-gradient mr-2 inline-block"
              >
                {part}
              </motion.span>
            ))}
          </h1>
          <p className="text-sm text-muted">{siteConfig.location}</p>
          <p className="text-xl font-semibold text-accent">{siteConfig.subtitle}</p>
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

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center items-center"
        >
          <Image
            src={siteConfig.heroAvatarPath}
            alt="Developer avatar"
            width={400}
            height={500}
            className="object-contain"
            priority
          />
        </motion.div>
      </div>

      <ScrollDownArrow target="#about" />
    </section>
  );
}

