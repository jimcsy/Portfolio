import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../assets/logo-black.png';

export default function Navbar({ toggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isClickScrolling = useRef(false); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 } 
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false); // Closes menu automatically
    
    isClickScrolling.current = true;
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
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
          <img src={logo} alt="Brand Logo" className="morph-logo" />
        </a>
      </div>

      {/* Center: Dropdown Menu */}
      <div className={`navbar-center ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        
        <div className="pill-logo-wrap">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
            <img src={logo} alt="Brand Logo" className="pill-logo-img" />
          </a>
          <div className="divider desktop-only"></div>
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
          
          {/* Now integrated directly into the mobile menu! */}
          <li className="mobile-contact-item">
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
        
        <button type="button" className="theme-toggle" aria-label="Toggle Dark Mode" onClick={toggleDarkMode}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
      </div>

      {/* Right: Hamburger / Button */}
      <div className="navbar-right">
        <a 
          className="contact-btn morph-btn" 
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Contact
        </a>

        <button 
          type="button"
          className="hamburger" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
}