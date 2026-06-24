import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { useScrollLock, useEscapeKey } from '../hooks/useOverlay';
import './AllProjects.css';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'app', label: 'App' },
];

export default function AllProjects({ projects, onClose, onOpenProject }) {
  useScrollLock();
  useEscapeKey(onClose);

  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const typeMatch = filter === 'all' || p.project_type === filter;
      const q = query.trim().toLowerCase();
      const queryMatch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.tech_stack.some((t) => t.toLowerCase().includes(q));
      return typeMatch && queryMatch;
    });
  }, [projects, filter, query]);

  return (
    <AnimatePresence>
      <motion.div
        className="all-projects-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="all-projects-header">
          <div className="container all-projects-header-inner">
            <div>
              <div className="eyebrow">All Projects</div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>
                Everything I've <span className="gradient-text">shipped.</span>
              </h2>
            </div>
            <button className="modal-close all-projects-close" onClick={onClose} aria-label="Close">
              <X size={20} />
            </button>
          </div>

          <div className="container all-projects-controls">
            <div className="all-projects-search">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search by name, stack, or keyword..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="all-projects-filters">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  className={`filter-chip ${filter === f.key ? 'filter-chip-active' : ''}`}
                  onClick={() => setFilter(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="all-projects-scroll">
          <div className="container">
            {filtered.length === 0 ? (
              <p className="all-projects-empty">No projects match that search.</p>
            ) : (
              <div className="all-projects-grid">
                {filtered.map((project, i) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onOpen={onOpenProject}
                    index={i}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
