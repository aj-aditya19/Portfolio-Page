import React from "react";
import { resumePdf } from "../data/certificatesData";
import profileAssets from "../data/profileAssets";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-header">
        <h1 className="profile-name">Aditya Jaiswal</h1>
        <p className="profile-title">Full Stack Web Developer & Designer</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a passionate full-stack web developer and designer with a keen
            interest in building scalable, user-friendly applications. My
            expertise spans modern web technologies including React, Node.js,
            TypeScript, and cloud services.
          </p>

          <p>
            As a curious builder with a passion for turning ideas into real
            products, I focus on crafting experiences that solve problems, spark
            curiosity, and (hopefully) make someone's day a little better. I'm
            not just about writing code—I craft experiences that are intuitive,
            visually appealing, and genuinely useful.
          </p>

          <p>
            I'm deeply interested in AI-powered solutions, full-stack
            development, and creating technology that feels human. Always open
            to conversations about new ideas, collaborations, and building
            things that matter.
          </p>

          <div className="about-cta">
            <a href="#contact" className="cta-button">
              Let's Connect
            </a>
            <a
              href={resumePdf}
              download="Aditya_CV.pdf"
              className="cta-button resume-download"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="about-image">
          <div className="image-placeholder">
            <img
              src={profileAssets.profileImage}
              alt="Aditya Jaiswal"
              className="profile-image"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
