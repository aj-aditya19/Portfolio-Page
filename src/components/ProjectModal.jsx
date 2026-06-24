import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Globe,
  Smartphone,
  Download,
  ArrowUpRight,
  Clock,
  Gauge,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import {
  getPrimaryAction,
  triggerPrimaryAction,
} from "../hooks/useProjectAction";
import { useScrollLock, useEscapeKey } from "../hooks/useOverlay";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  useScrollLock();
  useEscapeKey(onClose);

  if (!project) return null;
  const action = getPrimaryAction(project);
  const TypeIcon = project.project_type === "app" ? Smartphone : Globe;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-panel"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>

          <div className="modal-media">
            <img src={project.cover_image} alt={project.name} />
          </div>

          <div className="modal-body">
            <div className="modal-head">
              <span className="pill modal-type-pill">
                <TypeIcon size={12} />{" "}
                {project.project_type === "app" ? "Mobile App" : "Web App"}
              </span>
              <h2>{project.name}</h2>
              <p className="modal-tagline">{project.tagline}</p>
            </div>

            <div className="modal-meta-row">
              <div className="modal-meta-item">
                <Gauge size={15} />
                <div>
                  <span className="modal-meta-label">Level</span>
                  <span className="modal-meta-value">{project.level}</span>
                </div>
              </div>
              <div className="modal-meta-item">
                <Clock size={15} />
                <div>
                  <span className="modal-meta-label">Build time</span>
                  <span className="modal-meta-value">{project.build_time}</span>
                </div>
              </div>
              <div className="modal-meta-item">
                <CheckCircle2 size={15} />
                <div>
                  <span className="modal-meta-label">Status</span>
                  <span className="modal-meta-value">{project.status}</span>
                </div>
              </div>
            </div>

            <p className="modal-description">{project.description}</p>

            <div className="modal-tech-row">
              {project.tech_stack.map((t) => (
                <span key={t} className="tech-chip">
                  {t}
                </span>
              ))}
            </div>

            {project.steps?.length > 0 && (
              <div className="modal-section">
                <h4>How it was built</h4>
                <div className="modal-steps">
                  {project.steps.map((step, i) => (
                    <div className="modal-step" key={i}>
                      <span className="modal-step-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h5>{step.title}</h5>
                        <p>{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.documents?.length > 0 && (
              <div className="modal-section">
                <h4>Documentation</h4>
                <div className="modal-docs">
                  {project.documents.map((doc, i) => (
                    <div className="modal-doc-card" key={i}>
                      <FileText size={16} />
                      <div>
                        <span className="modal-doc-label">{doc.label}</span>
                        <span className="modal-doc-desc">
                          {doc.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="modal-actions">
              <button
                className="btn btn-primary"
                onClick={() => triggerPrimaryAction(project)}
                disabled={action.type === "none"}
              >
                {action.type === "download" ? (
                  <Download size={16} />
                ) : (
                  <ArrowUpRight size={16} />
                )}
                {action.label}
              </button>
              {project.links.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  <GithubIcon size={16} /> Source
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
