import React from "react";
import { motion } from "framer-motion";
import data from "../data/experience.json";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="eyebrow">05 — Learning</div>

        <h2 className="section-title">
          My <span className="gradient-text">Education.</span>
        </h2>

        <p className="section-sub">Academic foundation and coursework.</p>

        <div className="education-container">
          {data.education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="education-header">
                <div className="education-info">
                  <h3>{edu.degree}</h3>
                  <p className="institution">{edu.institution}</p>
                </div>

                {edu.score && (
                  <div className="education-meta">
                    <span className="cgpa-badge">{edu.score}</span>
                  </div>
                )}
              </div>

              <div className="education-details">
                <div className="duration-location">
                  <span className="duration">{edu.duration}</span>
                </div>

                {edu.coursework?.length > 0 && (
                  <div className="coursework-section">
                    <label className="coursework-label">Coursework</label>

                    <div className="coursework-list">
                      {edu.coursework.map((course) => (
                        <span key={course} className="coursework-tag">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
