import React, { useEffect, useRef } from 'react';
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
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const itemRefs = useRef([]); 
  
  // NEW: Refs for the HTML5 Canvas Particle Engine
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const isScrollingRef = useRef(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    // --- 1. CANVAS SETUP & PHYSICS ENGINE ---
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Syncs the canvas size perfectly with the timeline container
    const setCanvasSize = () => {
      if (containerRef.current) {
        canvas.width = 100; // 100px wide area for sparks to scatter
        canvas.height = containerRef.current.offsetHeight - 10;
      }
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle Spawner Function
    const createParticles = (amount, x, y, isIdle) => {
      for (let i = 0; i < amount; i++) {
        particlesRef.current.push({
          x: x,
          y: y,
          // If active, shoot sparks wider and higher. If idle, gentle spread.
          vx: (Math.random() - 0.5) * (isIdle ? 0.8 : 2.5), 
          vy: (Math.random() - 1) * (isIdle ? 0.8 : 3.5) - 0.5,
          size: Math.random() * 2 + 0.5,
          // Mixes your theme Blue and Gold!
          color: Math.random() > 0.5 ? '0, 123, 255' : '135, 123, 26',
          life: 1,
          decay: Math.random() * 0.02 + 0.015
        });
      }
    };

    // The 60FPS Animation Loop
    let animationId;
    const renderSparks = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Idle State: Emits a slow, gentle spark occasionally when not scrolling
      if (!isScrollingRef.current && Math.random() < 0.1) {
        const currentProgress = parseFloat(trackRef.current.style.height || 0);
        const tipY = (currentProgress / 100) * canvas.height;
        if (tipY > 5 && tipY < canvas.height - 5) {
          createParticles(1, canvas.width / 2, tipY, true);
        }
      }

      // Physics Math for every single particle
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08; // Gravity pulls them down
        p.life -= p.decay; // They slowly burn out

        if (p.life <= 0) {
          particlesRef.current.splice(i, 1); // Delete dead sparks
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color}, ${p.life})`;
          ctx.fill();
        }
      }
      animationId = requestAnimationFrame(renderSparks);
    };
    renderSparks();


    // --- 2. SCROLL TRACKER ---
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const startScroll = rect.top - windowHeight / 2;
      const totalHeight = rect.height;
      let progress = (Math.abs(Math.min(startScroll, 0)) / totalHeight) * 100;
      progress = Math.max(0, Math.min(100, progress));

      trackRef.current.style.height = `${progress}%`;

      // ACTIVE FIREWORKS: Spawn multiple aggressive sparks matching the scroll height!
      const tipY = (progress / 100) * canvas.height;
      if (progress > 2 && progress < 98) {
        createParticles(2, canvas.width / 2, tipY, false);
      }

      // Toggle scrolling state
      isScrollingRef.current = true;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 100); 
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // --- 3. BLUR REVEAL OBSERVER ---
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view'); 
        } else {
          entry.target.classList.remove('in-view'); 
        }
      });
    }, { 
      threshold: 0.25, 
      rootMargin: "-10% 0px -10% 0px" 
    });

    itemRefs.current.forEach(item => {
      if (item) observer.observe(item);
    });

    // Cleanup Engine
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="experience" className="portfolio-section experience-section">
      
      <div className="section-heading">
        <div className="heading-subtitle-wrapper">
          <span className="section-number">03</span>
          <span className="section-kicker">The road so far</span>
        </div>
        <h2>EXPERIENCE</h2>
      </div>

      <div className="timeline-container" ref={containerRef}>
        
        <div className="timeline-track-empty"></div>
        <div className="timeline-track-filled" ref={trackRef}></div>
        
        {/* NEW: The Transparent Overlay Canvas that renders the sparks! */}
        <canvas className="sparkle-canvas" ref={canvasRef}></canvas>

        {experiences.map((item, index) => (
          <div 
            className="timeline-item" 
            key={index} 
            ref={el => itemRefs.current[index] = el} 
          >
            <div className="timeline-dot"></div>
            
            <div 
              className="experience-content"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
              }}
            >
              <h3 className="experience-role">{item.role}</h3>
              <div className="experience-company-wrapper">
                <span className="experience-company">{item.company}</span>
                <svg className="external-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>

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