export type ColorThemeId = "violet" | "cyan" | "emerald" | "rose" | "amber";

export type ColorTheme = {
  id: ColorThemeId;
  label: string;
  swatch: string;
  dark: {
    accent: string;
    accentStrong: string;
    cardBorder: string;
    glow: string;
    gradientFrom: string;
    gradientTo: string;
  };
  light: {
    accent: string;
    accentStrong: string;
    cardBorder: string;
    glow: string;
    gradientFrom: string;
    gradientTo: string;
  };
};

export const colorThemes: ColorTheme[] = [
  {
    id: "violet",
    label: "Violet",
    swatch: "#c084fc",
    dark: {
      accent: "#c084fc",
      accentStrong: "#a855f7",
      cardBorder: "rgba(192, 132, 252, 0.18)",
      glow: "rgba(168, 85, 247, 0.35)",
      gradientFrom: "#e9d5ff",
      gradientTo: "#a855f7",
    },
    light: {
      accent: "#7c3aed",
      accentStrong: "#6d28d9",
      cardBorder: "rgba(124, 58, 237, 0.15)",
      glow: "rgba(124, 58, 237, 0.2)",
      gradientFrom: "#6d28d9",
      gradientTo: "#a855f7",
    },
  },
  {
    id: "cyan",
    label: "Cyan",
    swatch: "#22d3ee",
    dark: {
      accent: "#22d3ee",
      accentStrong: "#06b6d4",
      cardBorder: "rgba(34, 211, 238, 0.2)",
      glow: "rgba(6, 182, 212, 0.35)",
      gradientFrom: "#a5f3fc",
      gradientTo: "#0891b2",
    },
    light: {
      accent: "#0891b2",
      accentStrong: "#0e7490",
      cardBorder: "rgba(8, 145, 178, 0.18)",
      glow: "rgba(8, 145, 178, 0.2)",
      gradientFrom: "#0e7490",
      gradientTo: "#22d3ee",
    },
  },
  {
    id: "emerald",
    label: "Emerald",
    swatch: "#34d399",
    dark: {
      accent: "#34d399",
      accentStrong: "#10b981",
      cardBorder: "rgba(52, 211, 153, 0.2)",
      glow: "rgba(16, 185, 129, 0.35)",
      gradientFrom: "#a7f3d0",
      gradientTo: "#059669",
    },
    light: {
      accent: "#059669",
      accentStrong: "#047857",
      cardBorder: "rgba(5, 150, 105, 0.18)",
      glow: "rgba(5, 150, 105, 0.2)",
      gradientFrom: "#047857",
      gradientTo: "#34d399",
    },
  },
  {
    id: "rose",
    label: "Rose",
    swatch: "#fb7185",
    dark: {
      accent: "#fb7185",
      accentStrong: "#f43f5e",
      cardBorder: "rgba(251, 113, 133, 0.2)",
      glow: "rgba(244, 63, 94, 0.35)",
      gradientFrom: "#fecdd3",
      gradientTo: "#e11d48",
    },
    light: {
      accent: "#e11d48",
      accentStrong: "#be123c",
      cardBorder: "rgba(225, 29, 72, 0.18)",
      glow: "rgba(225, 29, 72, 0.2)",
      gradientFrom: "#be123c",
      gradientTo: "#fb7185",
    },
  },
  {
    id: "amber",
    label: "Amber",
    swatch: "#fbbf24",
    dark: {
      accent: "#fbbf24",
      accentStrong: "#f59e0b",
      cardBorder: "rgba(251, 191, 36, 0.2)",
      glow: "rgba(245, 158, 11, 0.35)",
      gradientFrom: "#fde68a",
      gradientTo: "#d97706",
    },
    light: {
      accent: "#d97706",
      accentStrong: "#b45309",
      cardBorder: "rgba(217, 119, 6, 0.18)",
      glow: "rgba(217, 119, 6, 0.2)",
      gradientFrom: "#b45309",
      gradientTo: "#fbbf24",
    },
  },
];
