import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../assets/logo-black.png';

export default function Navbar({ toggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // NEW: A lock to prevent the observer from flickering when you click a link!
  const isClickScrolling = useRef(false); 

  // 1. Controls the Morphing Animation based on Scroll Height
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Intersection Observer to track which section is currently on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // CRITICAL: If the user just clicked a link, ignore the observer completely!
        if (isClickScrolling.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Lowered threshold to 0.25 so taller sections trigger smoothly
      { threshold: 0.25 } 
    );

    // Watch all elements with a <section> tag
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // 3. NEW: Master Click Handler for all links
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    // Instantly update the UI so it feels incredibly responsive
    setActiveSection(sectionId);
    
    // Lock the observer for 1 second while the page physically scrolls
    isClickScrolling.current = true;
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        // Calculates the exact position and offsets by 80px to account for the navbar!
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      
      {/* Left: Main Logo */}
      <div className="navbar-logo">
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
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
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
            <img src={logo} alt="Brand Logo" className="pill-logo-img" />
          </a>
          <div className="divider"></div>
        </div>

        <ul className="nav-links">
          <li>
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#skills"
              onClick={(e) => handleNavClick(e, 'skills')}
              className={activeSection === 'skills' ? 'active' : ''}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#experience"
              onClick={(e) => handleNavClick(e, 'experience')}
              className={activeSection === 'experience' ? 'active' : ''}
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projects
            </a>
          </li>
          
          <li className="pill-contact">
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
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
        <a 
          className="contact-btn morph-btn" 
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}