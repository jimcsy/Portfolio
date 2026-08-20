import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo-black.png';

export default function Navbar({ toggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // CHANGED: Increased from 50 to 400. 
      // This ensures the Navbar waits until the Hero card finishes flipping (at 350px)
      // before it sucks in the logo and contact button!
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Forces the window to scroll to absolute 0, ensuring the animation resets
  const scrollToTop = (e) => {
    e.preventDefault(); 
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      
      {/* Left: Main Logo */}
      <div className="navbar-logo">
        <a href="#home" onClick={scrollToTop}>
          <img 
            src={logo} 
            alt="Brand Logo" 
            className="morph-logo" 
          />
        </a>
      </div>

      {/* Center: Pill Navigation */}
      <div className="navbar-center">
        
        {/* The hidden logo */}
        <div className="pill-logo-wrap">
          <a href="#home" onClick={scrollToTop}>
            <img src={logo} alt="Brand Logo" className="pill-logo-img" />
          </a>
          <div className="divider"></div>
        </div>

        <ul className="nav-links">
          <li><a href="#home" onClick={scrollToTop}>Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          
          <li className="pill-contact">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        
        <div className="divider"></div>
        
        <button className="theme-toggle" aria-label="Toggle Dark Mode" onClick={toggleDarkMode}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            stroke="none"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
      </div>

      {/* Right: Contact Button */}
      <div className="navbar-right">
        <a className="contact-btn morph-btn" href="#contact">Contact</a>
      </div>
    </nav>
  );
}