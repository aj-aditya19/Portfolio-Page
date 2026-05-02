import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", url: "https://github.com", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
    { name: "Email", url: "mailto:your-email@example.com", icon: "mail" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AJ Portfolio</h3>
            <p>
              Full Stack Developer passionate about creating beautiful and
              functional web experiences.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  className="social-icon"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Aditya Jaiswal. All rights reserved.</p>
          <p>
            Designed & Built with <span className="heart">❤</span> using React &
            Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
