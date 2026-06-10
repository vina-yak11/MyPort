"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, Send, Sparkles, Users, Zap } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SocialCard } from "@/components/SocialCard";
import { Toast } from "@/components/Toast";
import { useState } from "react";
import { siteConfig } from "@/data/portfolio";

const connectFeatures = [
  { icon: Zap, text: "Quick response time" },
  { icon: Users, text: "Open to collaborations" },
  { icon: Sparkles, text: "Available for internships" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    handle: "Vinayak Chaturvedi",
    url: siteConfig.linkedin,
    glowColor: "#0A66C2",
    bg: "linear-gradient(135deg, #0077B5, #0A66C2)",
    icon: LinkedInIcon,
  },
  {
    name: "Email",
    handle: siteConfig.email,
    url: `mailto:${siteConfig.email}`,
    glowColor: "#c084fc",
    bg: "linear-gradient(135deg, #a855f7, #7c3aed)",
    icon: Mail,
  },
  {
    name: "GitHub",
    handle: "@vina-yak11",
    url: siteConfig.github,
    glowColor: "#86efac",
    bg: "linear-gradient(135deg, #4ade80, #22c55e)",
    icon: GitHubIcon,
  },
  {
    name: "Phone",
    handle: siteConfig.phone,
    url: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    glowColor: "#22d3ee",
    bg: "linear-gradient(135deg, #06b6d4, #0891b2)",
    icon: Phone,
  },
];

export function Contact() {
  const [showToast, setShowToast] = useState(false);
  const findMeWords = "Find Me On".split(" ");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(`From: ${email}\n\n${message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setShowToast(true);
    form.reset();
    window.setTimeout(() => setShowToast(false), 4500);
  }

  return (
    <section id="connect" className="connect-section section-shell">
      <Toast
        message="Thanks buddy 🥳🤟"
        visible={showToast}
        onClose={() => setShowToast(false)}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <ScrollReveal>
            <div className="connect-badge-pill">
              <MessageSquare className="h-3.5 w-3.5 text-accent" />
              <span>Let&apos;s Connect</span>
            </div>

            <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient">Got an idea?</span>
              <br />
              <span>Let&apos;s make it</span>
              <br />
              <span>happen.</span>
            </h2>

            <p className="mt-6 max-w-md text-muted">
              Whether it&apos;s a project collaboration, an internship opportunity,
              or just a friendly hello — I&apos;d love to hear from you.
            </p>

            <div className="mt-8 hidden flex-col gap-4 lg:flex">
              {connectFeatures.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    className="connect-feature-row"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span className="connect-feature-icon">
                      <Icon className="h-3.5 w-3.5 text-accent" />
                    </span>
                    <span className="text-sm text-muted">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="connect-form glass-card">
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
                <span className="text-sm text-muted">Your Message</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className="input-field resize-none"
                />
              </label>
              <button type="submit" className="btn-primary w-full justify-center">
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>

        <div className="connect-find-me mt-24 text-center">
          <div className="mb-4 flex flex-wrap justify-center gap-3 sm:gap-4">
            {findMeWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className="text-gradient text-4xl font-bold sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.7,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          <p className="mb-14 text-lg text-muted">
            Let&apos;s connect, collaborate, or just say hi
          </p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {socialLinks.map((social, index) => (
              <SocialCard key={social.name} {...social} index={index} />
            ))}
          </div>

          <motion.div
            className="connect-divider mx-auto mt-16"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
}
