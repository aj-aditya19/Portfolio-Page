import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon } from '../components/BrandIcons';
import profile from '../data/profile.json';
import './Contact.css';

const ICONS = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail, x: XIcon };

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // No backend wired up yet — this is a placeholder UX so the form
    // feels complete. Hook this up to a real endpoint or mailto when ready.
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-grid">
          <div>
            <div className="eyebrow">05 — Contact</div>
            <h2 className="section-title">
              Let's build something <span className="gradient-text">worth shipping.</span>
            </h2>
            <p className="section-sub">
              Open to freelance work, internships, and interesting problems. Reach out directly
              or drop a message.
            </p>

            <div className="contact-socials">
              {profile.socials.map((s) => {
                const Icon = ICONS[s.icon] || Mail;
                return (
                  <motion.a
                    key={s.name}
                    href={s.url}
                    target={s.url.startsWith('mailto') ? undefined : '_blank'}
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
              {sent ? 'Message noted ✓' : <>Send Message <Send size={15} /></>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
