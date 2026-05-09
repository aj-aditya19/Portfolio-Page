import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import profileAssets from "../assets/data/profileAssets";
import "../styles/Header.css";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const location = useLocation();

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1));

    const syncActiveSection = () => {
      const sections = sectionIds
        .map((sectionId) => document.getElementById(sectionId))
        .filter(Boolean);

      if (sections.length === 0) {
        return;
      }

      const activeHash = window.location.hash.slice(1);
      if (sectionIds.includes(activeHash)) {
        setActiveSection(activeHash);
      }

      const headerOffset = 90;
      let currentSection = sections[0];

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop - headerOffset <= 0) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection.id);
    };

    syncActiveSection();

    window.addEventListener("scroll", syncActiveSection, { passive: true });
    window.addEventListener("hashchange", syncActiveSection);

    return () => {
      window.removeEventListener("scroll", syncActiveSection);
      window.removeEventListener("hashchange", syncActiveSection);
    };
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img
            src={profileAssets.logo}
            alt="AJ Logo"
            className="logo-image"
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>

        <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.href.slice(1) ? "active" : ""}`}
              aria-current={
                activeSection === link.href.slice(1) ? "location" : undefined
              }
              onClick={() => {
                setActiveSection(link.href.slice(1));
                setIsMenuOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isDark ? "Light Mode" : "Dark Mode"}
          >
            {isDark ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
