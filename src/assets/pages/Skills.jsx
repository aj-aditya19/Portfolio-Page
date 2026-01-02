import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="heading">My Skills</div>

      <div className="skills-container">
        <div className="skill-card">
          <h3>Front-End</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Flutter</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Back-End</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Flask</li>
            <li>Mongoose</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Tools & Software</h3>
          <ul>
            <li>VS Code</li>
            <li>Git & GitHub</li>
            <li>Figma</li>
            <li>Android Studio</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>
      <div className="languages-section">
        <div className="heading">Languages I Know</div>
        <div className="languages-container">
          <span className="language-pill">C++</span>
          <span className="language-pill">Dart</span>
          <span className="language-pill">C</span>
          <span className="language-pill">Python</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
