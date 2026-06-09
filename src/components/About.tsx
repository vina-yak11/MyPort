"use client";

import { motion } from "framer-motion";
import { services, siteConfig, stats } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="section-label">About Me</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            I don&apos;t just write code —
            <br />
            I craft experiences.
            <br />
            <span className="text-muted">Turning ideas into interfaces that feel alive.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-10 max-w-3xl text-center text-lg text-muted"
        >
          I&apos;m a Computer Science Engineering student at Government Engineering
          College, Jhalawar, focused on web applications, authentication flows,
          and database-backed systems. Currently leveling up in data science,
          machine learning, and full-stack development.
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="glass-card">
            <p className="card-kicker card-kicker-violet">Philosophy</p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">
              Clean code is not enough. Great products live at the intersection
              of precision and imagination.
            </p>
          </article>
          <article className="glass-card">
            <p className="card-kicker card-kicker-teal">Approach</p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">
              I build with purpose — every animation is intentional, every
              interaction considered, every project a chance to push boundaries.
            </p>
          </article>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <p className="text-3xl font-bold text-accent">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="section-label">What I Offer</p>
          <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Skills that ship real products
          </h3>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="glass-card">
              <h4 className="text-lg font-semibold">{service.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-16 text-center text-sm text-muted">
          Graduating {siteConfig.graduationYear} · Open to software development roles
          and internships
        </p>
      </div>
    </section>
  );
}
