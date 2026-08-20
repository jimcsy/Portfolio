import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import logo from '../assets/logo-black.png'; 
import profile1x1 from '../assets/ID.jpg'; 

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

 // This observer triggers the slide-in animation when the section enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // CHANGED: This resets the animation when you scroll away!
          setIsVisible(false);
        }
      },
      { threshold: 0.25 } // Triggers when 25% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="portfolio-section about-section" ref={sectionRef}>
      
      {/* LEFT COLUMN: Header & The Card */}
      <div className="about-left">
        <div className="section-heading">
          <span className="section-number">01</span>
          <p className="section-kicker">A little context</p>
          <h2>ABOUT ME</h2>
        </div>

        {/* The Slide-In Card */}
        <div className={`about-card-wrapper ${isVisible ? 'slide-in' : ''}`}>
          <div className="about-biz-card">
            
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

      {/* RIGHT COLUMN: Text Copy */}
      <div className="about-right">
        <div className="about-copy">
          <p className="section-lead">Hi, I'm a Developer Who Builds for Impact!</p>
          <p>
            I am a 3rd-year Computer Science student, a Java NC III Certified developer, and an aspiring software engineer. I am passionate about bridging the gap between raw data and operational efficiency, building systems that eliminate bottlenecks and solve real user problems.
          </p>
          <p>
            Whether I am automating enterprise workflows or working on cross-functional teams, I am driven by the belief that great software is measured by its real-world impact.
          </p>
        </div>
      </div>

    </section>
  );
}