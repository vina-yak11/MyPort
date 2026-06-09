"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="theme-toggle-shell" aria-hidden="true">
        <div className="h-10 w-10" />
      </div>
    );
  }

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <button
      type="button"
      className="theme-toggle-shell"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className="theme-toggle-track">
        {isDark ? (
          <Sun className="h-4 w-4 text-amber-300" />
        ) : (
          <Moon className="h-4 w-4 text-violet-600" />
        )}
      </span>
    </button>
  );
}
