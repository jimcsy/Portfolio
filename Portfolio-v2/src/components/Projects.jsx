import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

// Import your placeholder image here!
import projectImg from '../assets/image.jpg'; 

const projectsData = [
  {
    id: 'beehive',
    tagline: 'Learning Management Tool & IDE',
    title: 'Project Beehive',
    description: 'A collaborative team effort to build a comprehensive learning platform. It features an integrated IDE sandbox, allowing students to write, test, and manage code directly within the application using a modern mobile architecture.',
    stack: ['Flutter', 'Firebase', 'Dart', 'GitHub'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    id: 'handson',
    tagline: 'Computer Vision Application',
    title: 'Project HandsOn',
    description: 'An AI-driven application designed to detect and interpret Filipino Sign Language (FSL). By leveraging computer vision and custom dataset recording, this tool aims to bridge communication gaps through real-time gesture recognition.',
    stack: ['Python', 'Computer Vision', 'Machine Learning'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    id: 'portfolio',
    tagline: 'Web Experience',
    title: 'Personal Portfolio',
    description: 'A living, interactive portfolio built with modern React. Features include custom scroll-linked timelines, scalable SVG animations, and a component-driven UI designed to showcase technical depth and design execution.',
    stack: ['React', 'Vite', 'CSS', 'UI/UX'],
    demoLink: '#',
    codeLink: '#'
  }
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 960) return;

      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      
      const scrollDistance = Math.max(0, -rect.top);
      const scrollableDistance = rect.height - window.innerHeight;

      let progress = scrollDistance / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));

      const currentSlide = Math.round(progress * (projectsData.length - 1));
      setActiveIndex(currentSlide);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (index) => {
    if (window.innerWidth <= 960) {
      setActiveIndex(index);
      return;
    }

    if (!sectionRef.current) return;
    const section = sectionRef.current;
    const scrollableDistance = section.offsetHeight - window.innerHeight;
    const progress = index / (projectsData.length - 1);
    const targetY = section.offsetTop + (progress * scrollableDistance);

    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const swipeThreshold = 50;

    if (distance > swipeThreshold && activeIndex < projectsData.length - 1) {
      scrollToSlide(activeIndex + 1);
    }
    if (distance < -swipeThreshold && activeIndex > 0) {
      scrollToSlide(activeIndex - 1);
    }
  };

  return (
    <section id="projects" className="projects-scroll-section" ref={sectionRef}>
      <div className="sticky-wrapper">
        <div className="portfolio-section projects-content">
          
          <div className="projects-header">
            <div className="projects-heading-left">
              <div className="heading-subtitle-wrapper">
                <span className="section-number">04</span>
                <span className="section-kicker">Things I have made</span>
              </div>
              <h2>PROJECTS</h2>
            </div>
            <div className="projects-heading-right">
              <p>
                A collection of projects I have worked on, showcasing my skills in software engineering, computer vision, and full-stack architecture.
              </p>
            </div>
          </div>

          <div 
            className="carousel-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projectsData.map((project) => (
                <article className="project-feature-card" key={project.id}>
                  
                  <div className="project-content">
                    <span className="project-tagline">{project.tagline}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-tech-stack">
                      {project.stack.map(tech => (
                        <span className="tech-pill" key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      <a href={project.demoLink} className="btn-primary">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Live Demo
                      </a>
                      <a href={project.codeLink} className="btn-secondary">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        View Code
                      </a>
                    </div>
                  </div>

                  <div className="project-visual">
                    <div className="vibrant-bg"></div>
                    <div className="image-placeholder">
                      {/* ✅ THE FIX: The text span is gone, replaced with your image tag! */}
                      <img src={projectImg} alt={`${project.title} Interface`} />
                    </div>
                  </div>

                </article>
              ))}
            </div>

            <button 
              className={`carousel-arrow arrow-left ${activeIndex === 0 ? 'hidden' : ''}`} 
              onClick={() => scrollToSlide(activeIndex - 1)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>

            <button 
              className={`carousel-arrow arrow-right ${activeIndex === projectsData.length - 1 ? 'hidden' : ''}`} 
              onClick={() => scrollToSlide(activeIndex + 1)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

          </div>

          <div className="carousel-dots">
            {projectsData.map((_, index) => (
              <button 
                key={index} 
                className={`dot ${activeIndex === index ? 'active' : ''}`}
                onClick={() => scrollToSlide(index)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}