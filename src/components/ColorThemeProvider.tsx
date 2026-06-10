"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useTheme } from "next-themes";
import {
  colorThemes,
  type ColorThemeId,
} from "@/data/colorThemes";

type ColorThemeContextValue = {
  colorTheme: ColorThemeId;
  setColorTheme: (id: ColorThemeId) => void;
};

const ColorThemeContext = createContext<ColorThemeContextValue | null>(null);

function applyColorTheme(id: ColorThemeId, mode: "dark" | "light") {
  const theme = colorThemes.find((t) => t.id === id) ?? colorThemes[0];
  const palette = mode === "light" ? theme.light : theme.dark;
  const root = document.documentElement;

  root.style.setProperty("--accent", palette.accent);
  root.style.setProperty("--accent-strong", palette.accentStrong);
  root.style.setProperty("--card-border", palette.cardBorder);
  root.style.setProperty("--glow", palette.glow);
  root.style.setProperty("--gradient-from", palette.gradientFrom);
  root.style.setProperty("--gradient-to", palette.gradientTo);
  root.dataset.colorTheme = id;
}

export function ColorThemeProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [colorTheme, setColorThemeState] = useState<ColorThemeId>("violet");
  const [mounted, setMounted] = useState(false);

  // Reads the persisted accent from localStorage on mount; the setState calls
  // here are an intentional, one-time hydration step (browser-only API).
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-color-theme") as ColorThemeId | null;
    if (saved && colorThemes.some((t) => t.id === saved)) {
      setColorThemeState(saved);
    }
    setMounted(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  const setColorTheme = useCallback((id: ColorThemeId) => {
    setColorThemeState(id);
    localStorage.setItem("portfolio-color-theme", id);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const mode = resolvedTheme === "light" ? "light" : "dark";
    applyColorTheme(colorTheme, mode);
  }, [colorTheme, resolvedTheme, mounted]);

  const value = useMemo(
    () => ({ colorTheme, setColorTheme }),
    [colorTheme, setColorTheme],
  );

  return (
    <ColorThemeContext.Provider value={value}>
      {children}
    </ColorThemeContext.Provider>
  );
}

export function useColorTheme() {
  const ctx = useContext(ColorThemeContext);
  if (!ctx) {
    throw new Error("useColorTheme must be used within ColorThemeProvider");
  }
  return ctx;
}
