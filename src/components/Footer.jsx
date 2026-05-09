import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/aj-aditya19",
      icon: "github",
      color: "#333333",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aditya-jaiswal-b71047363/",
      icon: "linkedin",
      color: "#0077B5",
    },
    {
      name: "Twitter",
      url: "https://x.com/ajaditya1908",
      icon: "twitter",
      color: "#1DA1F2",
    },
    {
      name: "Email",
      url: "ajaditya1908@gmail.com",
      icon: "mail",
      color: "#EA4335",
    },
  ];

  const getSocialIcon = (iconName) => {
    const iconMap = {
      github: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      linkedin: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.437-.103.25-.129.599-.129.949v5.419h-3.554s.05-8.736 0-9.646h3.554v1.364c.43-.664 1.198-1.608 2.996-1.608 2.188 0 3.827 1.432 3.827 4.512v5.378zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.712 0-.956.77-1.71 1.954-1.71 1.184 0 1.915.75 1.939 1.71 0 .953-.771 1.712-1.978 1.712zm1.582 11.597H3.635V9.859h3.284v10.593zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      twitter: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
        </svg>
      ),
      mail: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <rect
            x="2"
            y="4"
            width="20"
            height="16"
            rx="2"
            ry="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M7 9l5 3.75L17 9"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
    };
    return iconMap[iconName] || iconName;
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3 className="footer-title">AJ Portfolio</h3>
            <p className="footer-description">
              Full Stack Developer passionate about creating beautiful and
              functional web experiences.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links ↗</h4>
            <ul className="footer-links">
              <li>
                <a href="#about">
                  <span className="link-symbol"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#skills">
                  <span className="link-symbol"></span>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects">
                  <span className="link-symbol"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="#education">
                  <span className="link-symbol"></span>
                  Education
                </a>
              </li>
              <li>
                <a href="#contact">
                  <span className="link-symbol"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Connect ✉</h4>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  className="social-icon"
                  style={{ "--icon-color": link.color }}
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Aditya Jaiswal. All rights reserved.</p>
            <p className="footer-credit">
              Designed & Built with <span className="heart">❤</span> using React
              & Vite
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
