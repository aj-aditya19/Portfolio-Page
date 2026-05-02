import React from "react";
import { certificateAchievements } from "../data/certificatesData";
import "../styles/ProfessionalCertificates.css";

const ProfessionalCertificates = () => {
  return (
    <div className="professional-certificates-section">
      <div className="section-header">
        <h2>Professional Certificates</h2>
        <div className="header-line"></div>
      </div>

      <div className="certificates-grid">
        {certificateAchievements.map((cert, index) => (
          <div className="certificate-item" key={index}>
            <h4>{cert.title}</h4>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-view-btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalCertificates;
