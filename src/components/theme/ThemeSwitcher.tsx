import { useState, useEffect } from "react";
import { Palette, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { themes, type ThemeName, defaultTheme } from "@/lib/theme-config";

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as ThemeName) || defaultTheme;
    }
    return defaultTheme;
  });

  useEffect(() => {
    // Apply theme on mount
    const savedTheme = (localStorage.getItem("theme") as ThemeName) || defaultTheme;
    // Validate that the saved theme still exists (in case it was removed)
    const themeToApply = themes[savedTheme] ? savedTheme : defaultTheme;
    applyTheme(themeToApply);
    setCurrentTheme(themeToApply);
  }, []);

  const applyTheme = (themeName: ThemeName) => {
    const theme = themes[themeName];
    const root = document.documentElement;

    // Update CSS variables
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--primary-hover", theme.primaryHover);
    root.style.setProperty("--primary-foreground", theme.primaryForeground);
    root.style.setProperty("--secondary", theme.secondary);
    root.style.setProperty("--secondary-foreground", theme.secondaryForeground);
    root.style.setProperty("--accent", theme.accent);
    root.style.setProperty("--accent-foreground", theme.accentForeground);
    root.style.setProperty("--muted", theme.muted);
    root.style.setProperty("--muted-foreground", theme.mutedForeground);
    root.style.setProperty("--ring", theme.ring);

    // Update gradients
    root.style.setProperty(
      "--gradient-primary",
      `linear-gradient(135deg, hsl(${theme.primary}), hsl(${theme.primaryHover}))`
    );
    root.style.setProperty(
      "--gradient-card",
      `linear-gradient(145deg, hsl(${theme.primary}), hsl(${theme.primaryHover}))`
    );

    // Update sidebar ring color
    root.style.setProperty("--sidebar-ring", theme.ring);

    // Save to localStorage
    localStorage.setItem("theme", themeName);
    setCurrentTheme(themeName);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9"
          aria-label="Change theme"
        >
          <Palette className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {Object.values(themes).map((theme) => (
          <DropdownMenuItem
            key={theme.name}
            onClick={() => applyTheme(theme.name)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center overflow-hidden rounded-full border border-border">
                <div className="h-4 w-4" style={{ backgroundColor: `hsl(${theme.primary})` }} />
                <div className="h-4 w-4" style={{ backgroundColor: `hsl(${theme.secondary})` }} />
                <div className="h-4 w-4" style={{ backgroundColor: `hsl(${theme.accent})` }} />
              </div>
              <span>{theme.label}</span>
            </div>
            {currentTheme === theme.name && (
              <Check className="h-4 w-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
