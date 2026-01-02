import React from "react";
import freelanceWorks from "../data/freelanceData";
import Lottie from "lottie-react";
import robotaim from "../src/coding.json";
import "../styles/Work.css";

const Work = () => {
  return (
    <div className="freelance-section">
      <div className="heading">Freelance Work</div>
      <div className="freelance-container">
        <div className="freelance-left">
          {freelanceWorks.map((work, index) => (
            <div className="freelance-card" key={index}>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </div>
          ))}
        </div>

        <div className="freelance-right">
          <div className="animation-placeholder">
            <div style={{ width: 300, margin: "auto" }}>
              <Lottie animationData={robotaim} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
 