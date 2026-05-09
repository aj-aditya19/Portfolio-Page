import React from "react";
import "../styles/Skills.css";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      {
        name: "React.js",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "JavaScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Flask",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      },
      {
        name: "Django",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      },
    ],
  },
  {
    title: "Database",
    items: [
      {
        name: "MongoDB",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
];

const languages = ["JavaScript", "Python", "Java", "C++", "SQL"];
const technologies = ["Docker", "Git", "GitHub", "VS Code", "Postman", "Linux"];
const tools = [
  {
    name: "Postman",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "GitHub",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Git",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "VS Code",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Canva",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  },
  {
    name: "Flutter",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Docker",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="section-header">
        <h2>Skills & Technologies</h2>
        <div className="header-line"></div>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.items.map((s) => (
                <div className="skill-item" key={s.name}>
                  <img src={s.img} alt={s.name} />
                  <span className="skill-name">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="languages-section">
        <h3>Technologies & Tools</h3>
        <div className="languages-grid">
          {tools.map((tool) => (
            <div key={tool.name} className="language-card">
              <img
                src={tool.img}
                alt={tool.name}
                className="language-icon-img"
              />
              <div className="language-name">{tool.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="languages-section">
        <h3>Languages</h3>
        <div className="languages-grid">
          {languages.map((lang) => (
            <div key={lang} className="language-card">
              <div className="language-icon">{lang[0]}</div>
              <div className="language-name">{lang}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
