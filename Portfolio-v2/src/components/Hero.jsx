import React, { useRef, useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';
import heroImage from '../assets/hero.png'; 
import logo from '../assets/logo-black.png'; 
import profile1x1 from '../assets/ID.jpg'; // Ensure this matches your file!

export default function Hero() {
  const wrapperRef = useRef(null);
  
  const isScrolledRef = useRef(false);
  const isAnimatingRef = useRef(false); // NEW: Tracks animation state safely across renders
  const morphTimeoutRef = useRef(null); // NEW: Holds the 1st timer
  const exitTimeoutRef = useRef(null);  // NEW: Holds the 2nd timer
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExiting, setIsExiting] = useState(false); 
  const [transformStyle, setTransformStyle] = useState('');

  // --- BULLETPROOF SCROLL LOCK & EVENT HIJACKING ---
  useEffect(() => {
    // 1. Safe Reset: Clears everything if the user scrolls back to the very top
    const handleScrollReset = () => {
      if (window.scrollY <= 10 && isScrolledRef.current) {
        // KILL the timers so they don't glitch the animation!
        clearTimeout(morphTimeoutRef.current);
        clearTimeout(exitTimeoutRef.current);
        
        setIsScrolled(false);
        setIsExiting(false);
        isScrolledRef.current = false;
        isAnimatingRef.current = false;
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('scroll', handleScrollReset);

    // Skip lock if page is refreshed while already scrolled down
    if (window.scrollY > 10) {
      setIsScrolled(true);
      isScrolledRef.current = true;
      return () => window.removeEventListener('scroll', handleScrollReset);
    }

    document.body.style.overflow = 'hidden';

    // 2. The Trigger Logic
    const triggerAnimation = () => {
      if (isAnimatingRef.current || isScrolledRef.current) return;
      isAnimatingRef.current = true;

      setIsScrolled(true);
      isScrolledRef.current = true;

      morphTimeoutRef.current = setTimeout(() => {
        setIsExiting(true);
      }, 1600);

      exitTimeoutRef.current = setTimeout(() => {
        document.body.style.overflow = '';
        document.getElementById('about')?.scrollIntoView({
          behavior: 'smooth'
        });
        isAnimatingRef.current = false; 
      }, 2200);
    };

    // 3. Hardware Lock (Desktop)
    const handleWheel = (e) => {
      // If at the top and scrolling down, hijack it!
      if (window.scrollY <= 10 && !isScrolledRef.current && e.deltaY > 0) {
        e.preventDefault(); // Physically stops the browser from forcing a scroll
        triggerAnimation();
      } 
      // If the animation is currently playing, block ALL scroll attempts
      else if (isAnimatingRef.current) {
        e.preventDefault(); 
      }
    };

    // 4. Hardware Lock (Mobile/Touch)
    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e) => {
      if (isAnimatingRef.current) {
        e.preventDefault(); // Block swiping while animating
        return;
      }
      if (window.scrollY <= 10 && !isScrolledRef.current && (touchStartY - e.touches[0].clientY > 30)) {
        e.preventDefault();
        triggerAnimation();
      }
    };

    // Attach listeners with { passive: false } so preventDefault() actually works
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScrollReset);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      clearTimeout(morphTimeoutRef.current);
      clearTimeout(exitTimeoutRef.current);
      document.body.style.overflow = ''; 
    };
  }, []);

  // Tupperware Mouse Tracking
  const handleMouseMove = (e) => {
    if (!wrapperRef.current || window.innerWidth < 768 || isScrolled) return;
    
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
    <section className={`hero-container ${isScrolled ? 'scrolled-hero' : ''} ${isExiting ? 'exit-hero' : ''}`}>
      
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

      <div 
        className="hero-image-wrapper"
        ref={wrapperRef}
        onPointerMove={handleMouseMove}
        onPointerLeave={handleMouseLeave}
      >
        <div className="tupperware-card" style={{ transform: transformStyle }}>
          
          <div className="falling-toys-container">
            <div className="tech-toy toy-1"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" draggable="false"/></div>
            <div className="tech-toy toy-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" draggable="false"/></div>
            <div className="tech-toy toy-3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" alt="Flutter" draggable="false"/></div>
            <div className="tech-toy toy-4"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" alt="Firebase" draggable="false"/></div>
            <div className="tech-toy toy-5"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" draggable="false"/></div>
            <div className="tech-toy toy-6"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" draggable="false"/></div>
          </div>
          
          <img src={heroImage} alt="Genesis Jim" className="profile-pic" draggable="false"/>

          <div className="business-card-content">
            <div className="biz-logo-top">
              <img src={logo} alt="Logo" className="white-logo" />
            </div>

            <div className="biz-card-layout">
              <div className="biz-avatar">
                <img src={profile1x1} alt="Genesis Jim" className="avatar-img" />
              </div>
              
              <div className="biz-details">
                <div className="detail-group">
                  <h3>Genesis Jim C. Cuasay</h3>
                  <span className="biz-label">Name</span>
                </div>
                
                <div className="detail-group">
                  <h3>Computer Science Student</h3>
                  <span className="biz-label">Level</span>
                </div>

                <div className="biz-socials">
                  <a href="#github" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="white" fillRule="evenodd" clipRule="evenodd">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#linkedin" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="white" fillRule="evenodd" clipRule="evenodd">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm-4.047 17.552H5.161V9.48h2.792v8.072zM6.557 8.328c-.932 0-1.589-.703-1.589-1.573 0-.89.677-1.573 1.63-1.573.953 0 1.589.682 1.61 1.573 0 .87-.656 1.573-1.651 1.573zm12.474 9.224h-2.791v-4.531c0-1.135-.407-1.906-1.417-1.906-.775 0-1.237.521-1.44 1.026-.074.182-.093.437-.093.693v4.718h-2.792s.037-7.312 0-8.072h2.792v1.145c.371-.573 1.036-1.396 2.531-1.396 1.848 0 3.235 1.208 3.235 3.802v4.519z"/>
                    </svg>
                  </a>
                  <a href="#facebook" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" fill="white" fillRule="evenodd" clipRule="evenodd">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 6.016 4.432 10.984 10.206 11.852v-8.672H7.273v-3.18h2.933V9.499c0-2.898 1.72-4.498 4.364-4.498 1.266 0 2.593.226 2.593.226v2.85h-1.46c-1.44 0-1.892.894-1.892 1.815v2.308h3.21l-.513 3.18h-2.697v8.672C19.568 22.984 24 18.016 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="biz-stripe"></div>
          </div>

        </div>
      </div>
    </section>
  );
}