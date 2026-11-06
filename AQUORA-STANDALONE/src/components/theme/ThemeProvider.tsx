"use client";

import React, { createContext, useContext, useCallback, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function applyThemeClass(newTheme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(newTheme);
  root.style.colorScheme = newTheme;
}

const themeListeners = new Set<() => void>();

function subscribeTheme(callback: () => void) {
  themeListeners.add(callback);
  const onStorage = (e: StorageEvent) => {
    if (e.key === "aquora-theme") {
      callback();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    themeListeners.delete(callback);
    window.removeEventListener("storage", onStorage);
  };
}

function getThemeSnapshot(): Theme {
  try {
    const saved = localStorage.getItem("aquora-theme");
    return saved === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

function getServerThemeSnapshot(): Theme {
  return "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);

  const setTheme = useCallback((newTheme: Theme) => {
    try {
      localStorage.setItem("aquora-theme", newTheme);
    } catch {}
    applyThemeClass(newTheme);
    themeListeners.forEach((listener) => listener());
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
