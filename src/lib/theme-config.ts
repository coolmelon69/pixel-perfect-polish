export type ThemeName = "uniten" | "blue" | "purple";

export interface ThemeConfig {
  name: ThemeName;
  label: string;
  primary: string; // HSL values as string "h s% l%"
  primaryHover: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;
  muted: string;
  mutedForeground: string;
  ring: string;
}

export const themes: Record<ThemeName, ThemeConfig> = {
  uniten: {
    name: "uniten",
    label: "UNITEN (Red)",
    primary: "355 75% 47%",
    primaryHover: "355 75% 40%",
    primaryForeground: "0 0% 100%",
    secondary: "355 45% 88%",
    secondaryForeground: "355 45% 18%",
    accent: "30 100% 50%",
    accentForeground: "0 0% 100%",
    muted: "355 18% 90%",
    mutedForeground: "355 12% 35%",
    ring: "355 75% 47%",
  },
  blue: {
    name: "blue",
    label: "Blue",
    primary: "217 91% 60%",
    primaryHover: "217 91% 50%",
    primaryForeground: "0 0% 100%",
    secondary: "217 65% 85%",
    secondaryForeground: "217 55% 18%",
    accent: "199 89% 48%",
    accentForeground: "0 0% 100%",
    muted: "217 22% 90%",
    mutedForeground: "217 12% 38%",
    ring: "217 91% 60%",
  },
  purple: {
    name: "purple",
    label: "Purple",
    primary: "262 83% 58%",
    primaryHover: "262 83% 50%",
    primaryForeground: "0 0% 100%",
    secondary: "262 55% 86%",
    secondaryForeground: "262 45% 18%",
    accent: "288 83% 60%",
    accentForeground: "0 0% 100%",
    muted: "262 22% 90%",
    mutedForeground: "262 12% 38%",
    ring: "262 83% 58%",
  },
};

export const defaultTheme: ThemeName = "uniten";
