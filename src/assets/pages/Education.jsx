import React from "react";
import { educationData } from "../data/educationData";
import "../styles/Education.css";

const Education = () => {
  return (
    <div className="education-section">
      <div className="section-header">
        <h2>Education</h2>
        <div className="header-line"></div>
      </div>

      <div className="education-container">
        {educationData.map((edu) => (
          <div key={edu.id} className="education-card">
            <div className="education-header">
              <div className="education-info">
                <h3>{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
              </div>
            </div>

            <div className="education-details">
              <div className="duration-location">
                <span className="duration">{edu.duration}</span>
                <span className="separator">•</span>
                <span className="location">{edu.location}</span>
              </div>
              <p className="description">{edu.description}</p>
            </div>

            {edu.achievements && (
              <div className="education-highlights">
                {edu.achievements.map((achievement, idx) => (
                  <span key={idx} className="highlight-badge">
                    {achievement}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
