import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import profile from "../data/profile.json";
import "./Header.css";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const { mode, resolvedTheme, setMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function cycleTheme() {
    setMode(resolvedTheme === "dark" ? "light" : "dark");
  }

  const ThemeIcon = resolvedTheme === "dark" ? Moon : Sun;

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#hero" className="header-logo">
          <span className="header-logo-mark">AJ</span>
          <span className="header-logo-text">{profile.name.split(" ")[0]}</span>
        </a>

        <nav className="header-nav header-nav-desktop">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="header-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={cycleTheme}
            aria-label={`Theme: ${mode}. Click to change.`}
            title={`Theme: ${mode}`}
          >
            <ThemeIcon size={17} />
          </button>
          <a href="#contact" className="btn btn-primary header-cta">
            Let's talk
          </a>
          <button
            className="header-burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          className="header-nav-mobile"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header-link-mobile"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
