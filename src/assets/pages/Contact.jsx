import React from "react";
import contactLinks from "../data/contactData";
import "../styles/Contact.css";

const socialDescriptions = {
  LinkedIn: [
    "Professional profile and career updates.",
    "Connect for opportunities and collaborations.",
  ],
  GitHub: [
    "Open-source projects and code samples.",
    "Explore repositories, commits, and experiments.",
  ],
  X: [
    "Thoughts on tech and learning journey.",
    "Quick updates, ideas, and community posts.",
  ],
};

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h2>Let's Connect</h2>
      <p>Reach out through any channel below.</p>

      <div className="contact-info-grid">
        <div className="contact-info-card">
          <h3>Email</h3>
          <p>ajaditya1908@gmail.com</p>
        </div>
        <div className="contact-info-card">
          <h3>Phone</h3>
          <p>+91 9458970585</p>
        </div>
        <div className="contact-info-card">
          <h3>Location</h3>
          <p>Dehradun, Uttarakhand, 248007</p>
        </div>
      </div>

      <div className="social-grid">
        {contactLinks.map((contact, index) => {
          const lines = socialDescriptions[contact.name] || [
            "Connect with me.",
            "Let us build something impactful.",
          ];
          return (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <h3>{contact.name}</h3>
              <p>{lines[0]}</p>
              <p>{lines[1]}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
