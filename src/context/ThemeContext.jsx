import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useSyncExternalStore,
} from "react";

const ThemeContext = createContext(null);
const STORAGE_KEY = "portfolio-theme";

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    if (typeof window === "undefined") return "auto";
    return localStorage.getItem(STORAGE_KEY) || "auto";
  });

  const resolvedTheme = mode;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", resolvedTheme);
    document.documentElement.style.colorScheme = resolvedTheme;
  }, [resolvedTheme]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const toggle = useCallback(() => {
    setMode((prev) => {
      const current = prev === "auto" ? getSystemTheme() : prev;
      return current === "dark" ? "light" : "dark";
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, resolvedTheme, setMode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
