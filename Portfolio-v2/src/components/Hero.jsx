import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';
import heroImage from '../assets/hero.png'; 

export default function Hero() {
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
                2000, // Waits 2 seconds
                'an Aspiring Software Developer',
                2000, // Waits 2 seconds before repeating
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
        </div>

        {/* Resume Button */}
        <button className="resume-btn">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
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
            </svg>
          </a>
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
      <div className="hero-image-wrapper">
        <div className="image-container">
          <img src={heroImage} alt="Genesis Jim" />
        </div>
      </div>

    </section>
  );
}