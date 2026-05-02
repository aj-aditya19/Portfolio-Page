import React from "react";
import { experienceData } from "../data/experienceData";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <div className="experience-section">
      <div className="section-header">
        <h2>Professional Experience</h2>
        <div className="header-line"></div>
      </div>

      <div className="experience-container">
        <div className="timeline">
          {experienceData.map((exp, index) => (
            <div key={exp.id} className="experience-item">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title">
                    <h3>{exp.position}</h3>
                    <p className="company-name">{exp.company}</p>
                  </div>
                  <div className="experience-meta">
                    <span className="duration">{exp.duration}</span>
                    <span className="location">{exp.location}</span>
                    <span className="type">{exp.type}</span>
                  </div>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="experience-technologies">
                  <span className="tech-label">Technologies</span>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
