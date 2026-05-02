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
              {edu.badge && (
                <div className="education-meta">
                  <span className="cgpa-badge">{edu.badge}</span>
                </div>
              )}
            </div>

            <div className="education-details">
              {edu.duration ? (
                <div className="duration-location">
                  <span className="duration">{edu.duration}</span>
                  <span className="separator">•</span>
                  <span className="location">{edu.location}</span>
                </div>
              ) : (
                <div className="duration-location">
                  <span className="location">{edu.location}</span>
                </div>
              )}

              {edu.relevantCoursework && edu.relevantCoursework.length > 0 && (
                <div className="coursework-section">
                  <label className="coursework-label">
                    Relevant Coursework
                  </label>
                  <div className="coursework-list">
                    {edu.relevantCoursework.map((course, idx) => (
                      <span key={idx} className="coursework-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {edu.stream && (
                <div className="stream-section">
                  <label className="stream-label">Stream</label>
                  <p className="stream-value">{edu.stream}</p>
                </div>
              )}
            </div>

            {edu.achievements && edu.achievements.length > 0 && (
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
