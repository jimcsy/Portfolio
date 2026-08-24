import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Research Development Software Engineer',
    company: 'Center of Technopreneurship and Innovation - BatStateU Alangilan',
    location: 'Batangas City, Batangas',
    date: 'July 2026 - August 2026',
    bullets: [
      'Co-engineered a responsive, public-facing tourism web application using React and Vite, implementing a component-driven UI and global theming framework.',
      'Optimized UI rendering performance and maintained cross-browser stability by systematically debugging complex CSS layouts and React state inconsistencies.'
    ],
    skills: ['React', 'Vite', 'CSS', 'UI/UX']
  },
  {
    role: 'CX Governance Intern',
    company: 'GCash (Mynt - Globe Fintech Innovation Inc.)',
    location: 'Taguig City, Metro Manila',
    date: 'May 2026 - July 2026',
    bullets: [
      'Engineered an automation PoC to resolve a 78% error rate in training requests, targeting 0% process discrepancies.',
      'Developed data pipelines and scripts to fully automate the manual processing of user responses.',
      'Built dynamic reporting dashboards to consolidate CX governance data and ensure 100% accuracy.'
    ],
    skills: ['Automation', 'Python', 'Data Pipelines', 'Dashboards']
  },
  {
    role: 'Information Technology Intern',
    company: 'Knowles Training Institute Pte Ltd',
    location: 'Singapore (Remote)',
    date: 'August 2025 - Sept 2025',
    bullets: [
      'Spearheaded the development of WordPress-based content management systems during a 120-hour remote internship.',
      'Optimized site navigation and streamlined cross-border digital collaboration workflows for distributed teams.'
    ],
    skills: ['WordPress', 'CMS', 'Web Development']
  },
  {
    role: 'Java Development Trainee',
    company: 'BCRV - Tech-Voc, Inc.',
    location: 'Calapan City, Oriental Mindoro',
    date: 'July 2025 - Sept 2025',
    bullets: [
      'Executed an intensive 240-hour development sprint, culminating in the TESDA Programming Java NC III certification.',
      'Engineered Java applications by rigorously applying core OOP concepts, clean code architecture, and exception handling.'
    ],
    skills: ['Java', 'OOP', 'Software Architecture']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="portfolio-section experience-section">
      
      {/* Centered Heading exactly matching About & Skills */}
      <div className="section-heading">
        <div className="heading-subtitle-wrapper">
          <span className="section-number">03</span>
          <span className="section-kicker">The road so far</span>
        </div>
        <h2>EXPERIENCE</h2>
      </div>

      <div className="timeline-container">
        {experiences.map((item, index) => (
          <div className="timeline-item" key={index}>
            {/* The Gradient Dot on the Timeline */}
            <div className="timeline-dot"></div>
            
            <div className="experience-content">
              
              {/* Role & Company */}
              <h3 className="experience-role">{item.role}</h3>
              <div className="experience-company-wrapper">
                <span className="experience-company">{item.company}</span>
                <svg className="external-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>

              {/* Meta Data: Location & Date */}
              <div className="experience-meta">
                <div className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {item.location}
                </div>
                <div className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {item.date}
                </div>
              </div>

              {/* Custom Arrow Bullets */}
              <ul className="experience-bullets">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx}>
                    <svg className="bullet-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="experience-tags">
                {item.skills.map((skill, idx) => (
                  <span className="tag" key={idx}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    </svg>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}