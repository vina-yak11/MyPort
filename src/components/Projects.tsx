"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal className="mb-12">
          <p className="section-label">Projects</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Selected work</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Project links will be added soon. Each build focuses on practical
            workflows, clean UI, and dependable backend logic.
          </p>
        </ScrollReveal>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.08}>
            <article className="project-card">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl space-y-4">
                  <p className="text-xs tracking-widest text-muted">
                    {project.id} — {String(projects.length).padStart(2, "0")}
                  </p>
                  <h3 className="text-3xl font-bold sm:text-4xl">{project.title}</h3>
                  <p className="text-muted">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="project-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
