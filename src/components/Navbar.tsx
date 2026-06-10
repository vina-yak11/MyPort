"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavbarThemeMenu } from "@/components/NavbarThemeMenu";
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
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="brand-group flex shrink-0 items-center">
          <Link href="#home" className="brand-badge">
            {siteConfig.initials}
          </Link>
          <div className="tony-stark-wrap" title="I am Iron Man">
            <div className="tony-stark-glow" aria-hidden="true" />
            <Image
              src="/tony-stark.gif"
              alt="Tony Stark"
              width={32}
              height={32}
              className="tony-stark-img"
              unoptimized
            />
          </div>
        </div>

        <ul className="hidden items-center gap-5 md:flex lg:gap-6">
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

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <NavbarThemeMenu />
          <a href={siteConfig.resumePath} download className="btn-outline hidden sm:inline-flex">
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
