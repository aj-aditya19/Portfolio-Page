import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "../components/BrandIcons";
import emailjs from "@emailjs/browser";
import profile from "../data/profile.json";
import "./Contact.css";

const ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  x: XIcon,
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone || "Not provided",
          message: form.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setSent(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (err) {
      console.error("Email sending failed");
      console.error("Status:", err?.status);
      console.error("Message:", err?.text);
      console.error("Full error:", err);

      alert(`Failed: ${err?.text || "Unknown error"}`);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Left Side */}
          <div className="contact-info">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="section-kicker">05 — Contact</p>

              <h2 className="contact-title">
                Let's build something <span>worth shipping.</span>
              </h2>

              <p className="contact-description">
                Open to freelance work, internships, and interesting problems.
                Reach out directly or drop a message.
              </p>
            </motion.div>

            <div className="contact-socials">
              {profile.socials.map((s) => {
                const Icon = ICONS[s.icon] || Mail;

                return (
                  <motion.a
                    key={s.name}
                    href={s.url}
                    target={s.url.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="contact-social-link"
                    whileHover={{ y: -4 }}
                  >
                    <Icon size={18} />
                    <span>{s.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          <motion.form
            className="contact-form card-surface"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="form-row">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>

            <div className="form-row">
              <label htmlFor="phone">
                Phone <span>(Optional)</span>
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="What are you building?"
              />
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              {sent ? (
                "Message sent ✓"
              ) : (
                <>
                  Send Message <Send size={15} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
