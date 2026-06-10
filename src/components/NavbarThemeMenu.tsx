"use client";

import { Moon, Palette, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { colorThemes } from "@/data/colorThemes";
import { useColorTheme } from "@/components/ColorThemeProvider";

export function NavbarThemeMenu() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { colorTheme, setColorTheme } = useColorTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Mount flag avoids SSR/client hydration mismatch for theme-dependent UI.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden="true" />;
  }

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <div className="navbar-theme-menu" ref={ref}>
      <button
        type="button"
        className="navbar-theme-btn"
        onClick={() => setOpen((v) => !v)}
        aria-label="Theme and accent colors"
        aria-expanded={open}
      >
        <Palette className="h-4 w-4 text-accent" />
      </button>

      {open && (
        <div className="navbar-theme-dropdown glass-card">
          <p className="appearance-label">Mode</p>
          <div className="appearance-row">
            <button
              type="button"
              className={`appearance-chip ${isDark ? "active" : ""}`}
              onClick={() => setTheme("dark")}
            >
              <Moon className="h-3.5 w-3.5" />
              Dark
            </button>
            <button
              type="button"
              className={`appearance-chip ${!isDark ? "active" : ""}`}
              onClick={() => setTheme("light")}
            >
              <Sun className="h-3.5 w-3.5" />
              Light
            </button>
          </div>

          <p className="appearance-label mt-3">Accent</p>
          <div className="color-swatch-grid">
            {colorThemes.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`color-swatch ${colorTheme === t.id ? "active" : ""}`}
                style={{ background: t.swatch }}
                onClick={() => setColorTheme(t.id)}
                aria-label={`${t.label} accent`}
                title={t.label}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
