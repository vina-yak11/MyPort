"use client";

import { Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/data/portfolio";

export function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navLinks.map((link) => link.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar-shell fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#home" className="brand-badge">
          {siteConfig.initials}
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <a href={siteConfig.resumePath} download className="btn-outline hidden sm:inline-flex">
          <Download className="h-4 w-4" />
          Resume
        </a>
      </nav>
    </header>
  );
}
