import React from "react";
import {
  photoAchievements,
  certificateAchievements,
} from "../data/achievementsData";
import "../styles/Achievments.css";

const Achievements = () => {
  return (
    <div className="achievements-section">
      <div className="heading">Achievements</div>

      <div className="achievements-container">
        {/* LEFT */}
        <div className="achievements-left">
          <div className="timeline-line"></div>

          {photoAchievements.map((ach, index) => (
            <div
              className={`photo-achievement ${
                photoAchievements.length <= 2 ? "large-photo" : ""
              }`}
              key={index}
            >
              <div className="photo-circle">
                {ach.photo && <img src={ach.photo} alt={ach.title} />}
              </div>

              <div className="photo-text">
                <h3>{ach.title}</h3>
                <p>{ach.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="achievements-right">
          <h3>Certificates</h3>

          <div className="certificates-list">
            {certificateAchievements.map((cert, index) => (
              <div className="certificate-card" key={index}>
                <p>{cert.title}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
