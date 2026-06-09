"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-label">Projects</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Selected work</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Project links will be added soon. Each build focuses on practical
            workflows, clean UI, and dependable backend logic.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="project-card"
            >
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
                  <div className="flex flex-wrap gap-3 pt-2">
                    <span className="btn-disabled inline-flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo — Coming Soon
                    </span>
                    <span className="btn-disabled inline-flex items-center gap-2">
                      <GitHubIcon className="h-4 w-4" />
                      GitHub — Add Later
                    </span>
                  </div>
                </div>

                <div className="project-preview">
                  <div className="project-preview-inner">
                    <p className="text-xs text-violet-300">Featured Project</p>
                    <p className="mt-2 text-2xl font-bold">{project.title}</p>
                    <p className="mt-2 text-sm text-white/70">{project.year}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-white/10 px-2 py-1 text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
