import React, { useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';
import heroImage from '../assets/hero.png'; 

export default function Hero() {
  // 1. Reference the outer invisible wrapper, NOT the moving card
  const wrapperRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');

  // 2. The math function that tracks the mouse
  const handleMouseMove = (e) => {
    if (!wrapperRef.current || window.innerWidth < 768) return;
    
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((centerY - y) / 25).toFixed(2); 
    const rotateY = ((x - centerX) / 25).toFixed(2);
    
    // THE PARALLAX MATH: Calculates how far off-center the mouse is
    const moveX = ((x - centerX) / centerX).toFixed(2);
    const moveY = ((y - centerY) / centerY).toFixed(2);
    
    setTransformStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);

    // INJECTS variables into CSS!
    wrapperRef.current.style.setProperty('--move-x', moveX);
    wrapperRef.current.style.setProperty('--move-y', moveY);
  };

  const handleMouseLeave = () => {
    setTransformStyle('rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    if (wrapperRef.current) {
      // RESETS variables when mouse leaves
      wrapperRef.current.style.setProperty('--move-x', 0);
      wrapperRef.current.style.setProperty('--move-y', 0);
    }
  };

  return (
    <section className="hero-container">
      <div className="hero-content">
        
        {/* Top Status Bar */}
        <div className="hero-status">
          <span className="status-line"></span>
          <span className="location">BATANGAS CITY, PHILIPPINES</span>
          <span className="dot">•</span>
          <span className="open-status">OPEN TO WORK</span>
        </div>

        {/* Main Typography */}
        <div className="hero-text">
          <h2 className="greeting">Hey, <span className="text-blue">I am</span></h2>
          <h1 className="name"><span className="text-blue">G</span>enesis Jim</h1>
          
          {/* Animated Subtitle */}
          <p className="subtitle">
            <TypeAnimation
              sequence={[
                'a Computer Science Student',
                2000, 
                'an Aspiring Software Developer',
                2000, 
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
        </div>

        {/* Resume Button */}
        <button className="resume-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Resume
        </button>

        {/* Social Links */}
        <div className="social-links">
          <a href="#github">Github<svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px', verticalAlign: 'middle' }}>
              <line x1="3" y1="9" x2="9" y2="3"></line>
              <polyline points="5 3 9 3 9 7"></polyline>
            </svg></a>
          <a href="#linkedin">LinkedIn<svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px', verticalAlign: 'middle' }}>
              <line x1="3" y1="9" x2="9" y2="3"></line>
              <polyline points="5 3 9 3 9 7"></polyline>
            </svg></a>
          <a href="#facebook">Facebook<svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px', verticalAlign: 'middle' }}>
              <line x1="3" y1="9" x2="9" y2="3"></line>
              <polyline points="5 3 9 3 9 7"></polyline>
            </svg></a>
        </div>
        
      </div>

      {/* Right Column: Image */}
      <div 
        className="hero-image-wrapper"
        ref={wrapperRef}
        onPointerMove={handleMouseMove}   /* CHANGED FROM onMouseMove */
        onPointerLeave={handleMouseLeave} /* CHANGED FROM onMouseLeave */
      >
        <div 
          className="tupperware-card"
          style={{ transform: transformStyle }}
        >
          
          {/* Falling Claw Machine Tech Toys */}
          <div className="falling-toys-container">
            <div className="tech-toy toy-1"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" /></div>
            <div className="tech-toy toy-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" /></div>
            <div className="tech-toy toy-3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" alt="Flutter" /></div>
            <div className="tech-toy toy-4"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" alt="Firebase" /></div>
            <div className="tech-toy toy-5"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" /></div>
            <div className="tech-toy toy-6"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" /></div>
          </div>

          {/* Enlarged Profile Picture */}
          <img src={heroImage} alt="Genesis Jim" className="profile-pic" />
          
        </div>
      </div>

    </section>
  );
}