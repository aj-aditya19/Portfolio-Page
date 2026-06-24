import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid } from 'lucide-react';
import projectsData from '../data/projects.json';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import AllProjects from '../components/AllProjects';
import './Projects.css';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const featured = projectsData.filter((p) => p.featured);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <div className="eyebrow">03 — Projects</div>
            <h2 className="section-title">
              Selected <span className="gradient-text">work.</span>
            </h2>
            <p className="section-sub" style={{ marginBottom: 0 }}>
              A handful of complete builds — full stack, full ownership, shipped end to end.
            </p>
          </div>
          <motion.button
            className="btn btn-ghost view-all-btn"
            onClick={() => setShowAll(true)}
            whileHover={{ y: -2 }}
          >
            <LayoutGrid size={16} />
            View All Projects
          </motion.button>
        </div>

        <div className="projects-grid">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setActiveProject}
              index={i}
            />
          ))}
        </div>

        <div className="projects-footer-mobile">
          <button className="btn btn-primary" onClick={() => setShowAll(true)}>
            <LayoutGrid size={16} />
            View All {projectsData.length} Projects
          </button>
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}

      {showAll && (
        <AllProjects
          projects={projectsData}
          onClose={() => setShowAll(false)}
          onOpenProject={(p) => setActiveProject(p)}
        />
      )}
    </section>
  );
}
