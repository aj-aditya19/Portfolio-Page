import React from "react";
import projects from "../data/projectData";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects-section">
      <div className="heading">My Projects</div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.about}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
      <div className="view-more">
        <a href="#" className="view-more-btn">
          View More
        </a>
      </div>
    </div>
  );
};

export default Projects;
