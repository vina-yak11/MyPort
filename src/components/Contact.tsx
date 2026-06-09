"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";
import { useState } from "react";
import { siteConfig } from "@/data/portfolio";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(`From: ${email}\n\n${message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="connect" className="section-shell pb-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Connect</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Let&apos;s build something useful
          </h2>
          <p className="mt-4 text-muted">
            Whether it&apos;s a project collaboration, an internship opportunity,
            or just a friendly hello — I&apos;d love to hear from you.
          </p>

          <div className="mt-8 space-y-4">
            <a href={`mailto:${siteConfig.email}`} className="contact-link">
              <Mail className="h-5 w-5 text-accent" />
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="contact-link">
              <Phone className="h-5 w-5 text-accent" />
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <LinkedInIcon className="h-5 w-5 text-accent" />
              LinkedIn Profile
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <GitHubIcon className="h-5 w-5 text-accent" />
              GitHub Profile
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-card space-y-5"
        >
          <label className="block space-y-2">
            <span className="text-sm text-muted">Your Email</span>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="input-field"
            />
          </label>
          <label className="block space-y-2">
            <span className="text-sm text-muted">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              className="input-field resize-none"
            />
          </label>
          <button type="submit" className="btn-primary w-full justify-center">
            Send Message
          </button>
          {submitted && (
            <p className="text-sm text-accent">
              Your email app should open with your message ready to send.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
