"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { certifications, education, experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <p className="section-label">Experience</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Hands-on internships across software and technical systems
          </h2>
        </ScrollReveal>

        <div className="mt-12 space-y-6">
          {experience.map((item, index) => (
            <ScrollReveal key={item.company} delay={index * 0.08} direction="left">
            <article className="glass-card flex flex-col gap-4 sm:flex-row sm:gap-8">
              <div className="sm:w-28">
                <p className="text-sm font-medium text-accent whitespace-nowrap">{item.duration}</p>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.role}</h3>
                <p className="mt-1 text-muted">{item.company}</p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-accent">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-20">
          <p className="section-label">Education</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {education.map((item) => (
              <article key={item.title} className="glass-card">
                <p className="text-sm text-accent">{item.period}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.place}</p>
                {(item as any).detail ? (
                  <p className="mt-3 font-medium">{(item as any).detail}</p>
                ) : null}
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <p className="section-label">Certifications</p>
          <ul className="mt-6 space-y-3">
            {certifications.map((cert) => (
              <li key={cert} className="glass-card text-sm text-foreground/90">
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
