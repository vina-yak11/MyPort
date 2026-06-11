"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MarqueeServices } from "@/components/MarqueeServices";
import { ScrollReveal } from "@/components/ScrollReveal";
import { services, siteConfig, stats } from "@/data/portfolio";

export function About() {
  const aboutTitle = "About Me".split(" ");

  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.35 }}
            className="about-avatar-ring"
          >
            <Image
              src={siteConfig.heroAvatarPath || siteConfig.maleAvatarPath}
              alt="Developer avatar"
              width={160}
              height={160}
              className="about-avatar-img"
            />
          </motion.div>

          <h2 className="mt-6 flex flex-wrap justify-center gap-x-3">
            {aboutTitle.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="section-label text-lg sm:text-xl"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <h3 className="mt-6 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            I don&apos;t just write code —
            <br />
            I craft experiences.
            <br />
            <span className="text-muted">Turning ideas into interfaces that feel alive.</span>
          </h3>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mx-auto mt-10 max-w-3xl text-center text-lg text-muted">
          <p>
            I&apos;m a Computer Science And Engineering Graduate from Government Engineering
            College, focused on web applications, authentication flows,
            and database-backed systems. Currently leveling up in data science,
            machine learning, and full-stack development.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <ScrollReveal delay={0.05}>
            <article className="glass-card">
              <p className="card-kicker card-kicker-violet">Philosophy</p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/90">
                Clean code is not enough. Great products live at the intersection
                of precision and imagination.
              </p>
            </article>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <article className="glass-card">
              <p className="card-kicker card-kicker-teal">Approach</p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/90">
                I build with purpose — every animation is intentional, every
                interaction considered, every project a chance to push boundaries.
              </p>
            </article>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-10 text-center">
          <p className="section-label">Most Influential Quotes</p>
          <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Lessons that guide how I work and live
          </h3>
        </ScrollReveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <ScrollReveal delay={0.05}>
            <article className="glass-card">
              <p className="card-kicker card-kicker-violet">कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। </p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/90">
                "You have a right to perform your prescribed duty, but you are not
                entitled to the fruits of action."
              </p>
              <p className="mt-3 text-sm text-muted">
                Focus on the present effort rather than worrying about the outcome.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <article className="glass-card">
              <p className="card-kicker card-kicker-teal">वसुधैव कुटुम्बकम्</p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/90">
                "The whole world is one single family."
              </p>
              <p className="mt-3 text-sm text-muted">
                A powerful message of universal brotherhood, peace, and global
                connection.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <article className="glass-card">
              <p className="card-kicker card-kicker-violet">अनुगच्छतु प्रवाहं</p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/90">
                "Go with the flow."
              </p>
              <p className="mt-3 text-sm text-muted">
                Encourages adaptability and acceptance of life's changes and
                challenges.
              </p>
            </article>
          </ScrollReveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.06}>
              <div className="stat-card">
                <p className="text-3xl font-bold text-accent">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-20 text-center">
          <p className="section-label">What I Offer</p>
          <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Skills that ship real products
          </h3>
        </ScrollReveal>

        <MarqueeServices />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.05}>
              <motion.article
                className="glass-card offer-float-card"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h4 className="text-lg font-semibold">{service.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-16 text-center text-sm text-muted">
          highly energetic and passionate about technology and innovation.
        </p>
      </div>
    </section>
  );
}
