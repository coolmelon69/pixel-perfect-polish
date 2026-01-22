import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ApplicationForm from "./pages/ApplicationForm";
import ApplicationDetails from "./pages/ApplicationDetails";
import Admissions from "./pages/Admissions";
import PersonalProfile from "./pages/PersonalProfile";
import EditProfile from "./pages/EditProfile";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import { themes, type ThemeName, defaultTheme } from "./lib/theme-config";

const queryClient = new QueryClient();

// Theme initialization component
const ThemeInitializer = () => {
  useEffect(() => {
    // Apply saved theme on mount
    const savedTheme = (localStorage.getItem("theme") as ThemeName) || defaultTheme;
    const theme = themes[savedTheme];
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
    root.style.setProperty(
      "--gradient-primary",
      `linear-gradient(135deg, hsl(${theme.primary}), hsl(${theme.primaryHover}))`
    );
    root.style.setProperty(
      "--gradient-card",
      `linear-gradient(145deg, hsl(${theme.primary}), hsl(${theme.primaryHover}))`
    );
    root.style.setProperty("--sidebar-ring", theme.ring);
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeInitializer />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/apply/:type" element={<ApplicationForm />} />
          <Route path="/application-details" element={<ApplicationDetails />} />
          <Route path="/personal-profile" element={<PersonalProfile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
