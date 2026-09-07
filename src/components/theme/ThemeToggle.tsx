"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

const emptySubscribe = () => () => {};

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div 
        className={`w-9 h-9 rounded-full border border-aquora-border flex items-center justify-center opacity-0 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
      title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
      className={`relative inline-flex items-center gap-2 p-2 rounded-full border transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquora-gold ${
        isDark 
          ? "bg-white/5 border-aquora-border text-aquora-beige hover:bg-white/10 hover:border-aquora-beige/40" 
          : "bg-black/5 border-black/10 text-aquora-charcoal hover:bg-black/10 hover:border-aquora-gold/50"
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun size={15} className="text-aquora-gold transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Moon size={15} className="text-aquora-purple transition-transform duration-300 rotate-0 scale-100" />
        )}
      </div>

      {showLabel && (
        <span className="text-[10px] uppercase tracking-wider font-semibold pr-1">
          {isDark ? "Light" : "Dark"}
        </span>
      )}
    </button>
  );
}
