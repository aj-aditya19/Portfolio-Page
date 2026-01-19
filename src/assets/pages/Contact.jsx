import React from "react";
import contactLinks from "../data/contactData";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h2>Let's Connect</h2>
      <p>Feel free to reach out via any of my profiles below!</p>

      <div className="contact-container">
        <div className="contact-links">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--hover-color": contact.color }}
            >
              {contact.name}
            </a>
          ))}

          <div className="whatsapp-box">WhatsApp: +91 9458970585</div>
        </div>

        <div className="mail-options">
          <div className="static-contact">
            📧 Gmail: <strong>ajaditya1908@gmail.com</strong>
          </div>
          <div>
            <label>Name</label>
            <input type="text" placeholder="Ditya" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" placeholder="mail@gmail.com" />
          </div>

          <div>
            <label>Message</label>
            <textarea placeholder="Type your message here..." />
          </div>

          <button className="send-btn">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
