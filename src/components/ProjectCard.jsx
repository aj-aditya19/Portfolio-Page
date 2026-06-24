import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Globe, Smartphone, ArrowUpRight, Download } from "lucide-react";
import {
  getPrimaryAction,
  triggerPrimaryAction,
} from "../hooks/useProjectAction";
import "./ProjectCard.css";

export default function ProjectCard({ project, onOpen, index = 0 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const action = getPrimaryAction(project);
  const TypeIcon = project.project_type === "app" ? Smartphone : Globe;

  return (
    <motion.div
      className="project-card-wrap"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <motion.div
        ref={ref}
        className="project-card"
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        onClick={() => onOpen(project)}
      >
        <div className="project-card-media">
          <img src={project.cover_image} alt={project.name} loading="lazy" />
          <span className="project-type-badge">
            <TypeIcon size={13} />
            {project.project_type === "app" ? "App" : "Web"}
          </span>
        </div>

        <div className="project-card-body">
          <div className="project-card-head">
            <h3>{project.name}</h3>
            <span className="project-level pill">{project.level}</span>
          </div>
          <p className="project-card-tagline">{project.tagline}</p>

          <div className="project-card-tech">
            {project.tech_stack.slice(0, 4).map((t) => (
              <span key={t} className="tech-chip">
                {t}
              </span>
            ))}
            {project.tech_stack.length > 4 && (
              <span className="tech-chip tech-chip-more">
                +{project.tech_stack.length - 4}
              </span>
            )}
          </div>

          <div className="project-card-footer">
            <button
              className="project-action-btn"
              onClick={(e) => {
                e.stopPropagation();
                triggerPrimaryAction(project);
              }}
              disabled={action.type === "none"}
            >
              {action.type === "download" ? (
                <Download size={14} />
              ) : (
                <ArrowUpRight size={14} />
              )}
              {action.label}
            </button>
            <button
              className="project-detail-link"
              onClick={(e) => {
                e.stopPropagation();
                onOpen(project);
              }}
            >
              Details
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
