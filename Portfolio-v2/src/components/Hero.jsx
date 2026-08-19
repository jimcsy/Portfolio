import React, { useRef, useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';
// Make sure your path to the image is correct!
import heroImage from '../assets/hero.png'; 

export default function Hero() {
  const wrapperRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  
  // NEW: State to track scrolling for the Black Hole exit animation
  const [isScrolled, setIsScrolled] = useState(false);

  // NEW: Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      // Triggers the collapse when you scroll 150px down
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tupperware Mouse Tracking
  const handleMouseMove = (e) => {
    if (!wrapperRef.current || window.innerWidth < 768) return;
    
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((centerY - y) / 25).toFixed(2); 
    const rotateY = ((x - centerX) / 25).toFixed(2);
    
    const moveX = ((x - centerX) / centerX).toFixed(2);
    const moveY = ((y - centerY) / centerY).toFixed(2);
    
    setTransformStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);

    wrapperRef.current.style.setProperty('--move-x', moveX);
    wrapperRef.current.style.setProperty('--move-y', moveY);
  };

  const handleMouseLeave = () => {
    setTransformStyle('rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    if (wrapperRef.current) {
      wrapperRef.current.style.setProperty('--move-x', 0);
      wrapperRef.current.style.setProperty('--move-y', 0);
    }
  };

  return (
    // CHANGED: Adds the scrolled-hero class when triggered
    <section className={`hero-container ${isScrolled ? 'scrolled-hero' : ''}`}>
      
      <div className="hero-content">
        <div className="hero-status">
          <span className="status-line"></span>
          <span className="location">BATANGAS CITY, PHILIPPINES</span>
          <span className="dot">•</span>
          <span className="open-status">OPEN TO WORK</span>
        </div>

        <div className="hero-text">
          <h2 className="greeting">Hey, <span className="text-blue">I am</span></h2>
          <h1 className="name"><span className="text-blue">G</span>enesis Jim</h1>
          
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

        <button className="resume-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Resume
        </button>

        <div className="social-links">
          <a href="#github">Github</a>
          <a href="#linkedin">LinkedIn</a>
          <a href="#facebook">Facebook</a>
        </div>
      </div>

      {/* Right Column: Image */}
      <div 
        className="hero-image-wrapper"
        ref={wrapperRef}
        onPointerMove={handleMouseMove}
        onPointerLeave={handleMouseLeave}
      >
        <div className="tupperware-card" style={{ transform: transformStyle }}>
          {/* Falling Tech Toys */}
          <div className="falling-toys-container">
            <div className="tech-toy toy-1"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" draggable="false"/></div>
            <div className="tech-toy toy-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" draggable="false"/></div>
            <div className="tech-toy toy-3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" alt="Flutter" draggable="false"/></div>
            <div className="tech-toy toy-4"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" alt="Firebase" draggable="false"/></div>
            <div className="tech-toy toy-5"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" draggable="false"/></div>
            <div className="tech-toy toy-6"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" draggable="false"/></div>
          </div>
          {/* Profile Picture */}
          <img src={heroImage} alt="Genesis Jim" className="profile-pic" draggable="false"/>
        </div>
      </div>
    </section>
  );
}