import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TECH_STACK } from '../data/techStack';
import BrandIcon from '../components/BrandIcon';
import './Skills.css';

export default function Skills() {
  const categories = useMemo(() => ['All', ...TECH_STACK.map((g) => g.category)], []);
  const [active, setActive] = useState('All');

  const visibleGroups =
    active === 'All' ? TECH_STACK : TECH_STACK.filter((g) => g.category === active);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="eyebrow">02 — Tech Stack</div>
        <h2 className="section-title">
          The <span className="gradient-text">stack</span> behind the work.
        </h2>
        <p className="section-sub">
          Real tools, not buzzwords. Hover any logo to see how comfortable I am with it.
        </p>

        <div className="stack-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-chip ${active === cat ? 'filter-chip-active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="stack-groups"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {visibleGroups.map((group) => (
              <div className="stack-group" key={group.category}>
                {active === 'All' && <h3 className="stack-group-title">{group.category}</h3>}
                <div className="stack-grid">
                  {group.items.map((tech, i) => (
                    <motion.div
                      className="tech-tile card-surface"
                      key={tech.name}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.35, delay: i * 0.04 }}
                      whileHover={{ y: -4 }}
                    >
                      <div
                        className="tech-tile-glow"
                        style={{ background: tech.hex }}
                        aria-hidden="true"
                      />
                      <BrandIcon path={tech.path} hex={tech.hex} title={tech.name} size={32} />
                      <span className="tech-tile-name">{tech.name}</span>
                      <div className="tech-tile-level-track">
                        <motion.div
                          className="tech-tile-level-fill"
                          style={{ background: tech.hex }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                        />
                      </div>
                      <span className="tech-tile-pct">{tech.level}%</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
