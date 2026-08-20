import React from 'react';
import './Skills.css';

const techStack = [
  { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Flutter', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  { name: 'Firebase', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg' },
  { name: 'HTML5', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg' },
  { name: 'CSS3', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg' },
  { name: 'C', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-plain.svg' },
  { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'GitHub', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
  { name: 'MySQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
];

export default function Skills() {
  return (
    <section id="skills" className="portfolio-section skills-section">
      
      {/* Centered Heading */}
      <div className="skills-heading">
        <div className="skills-subtitle-wrapper">
          <span className="section-number">02</span>
          <span className="section-kicker">My Tech Stack</span>
        </div>
        <h2>WHAT I USE</h2>
      </div>

      {/* Grid Container (Gray Background Removed) */}
      <div className="skills-grid-container">
        <div className="skills-grid">
          {techStack.map((tech) => (
            <div className="skill-icon-wrapper" key={tech.name} title={tech.name}>
              <img src={tech.url} alt={tech.name} className="skill-icon" draggable="false" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}