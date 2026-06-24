import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Server, Sparkles } from 'lucide-react';
import profile from '../data/profile.json';
import './About.css';

const FOCUS_AREAS = [
  { icon: Code2, label: 'Web', detail: 'React, full-stack apps' },
  { icon: Smartphone, label: 'Mobile', detail: 'Flutter, cross-platform' },
  { icon: Server, label: 'Backend', detail: 'Node.js, real-time systems' },
  { icon: Sparkles, label: 'ML', detail: 'Currently exploring' },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow">01 — About</div>
            <h2 className="section-title">
              Code that has to <span className="gradient-text">survive contact</span> with real users.
            </h2>
            {profile.bio.map((p, i) => (
              <p className="about-para" key={i}>
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            className="about-focus"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {FOCUS_AREAS.map((area, i) => (
              <motion.div
                className="focus-card card-surface"
                key={area.label}
                whileHover={{ y: -6, borderColor: 'var(--accent)' }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <area.icon size={22} className="focus-icon" />
                <span className="focus-label">{area.label}</span>
                <span className="focus-detail">{area.detail}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
