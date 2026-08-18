import React from 'react';
import './Navbar.css';
import logo from '../assets/logo-black.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Left: Logo Placeholder */}
      <div className="navbar-logo">
        <img 
          src={logo} 
          alt="Brand Logo" 
        />
      </div>

      {/* Center: Pill Navigation */}
      <div className="navbar-center">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
        
        {/* Vertical Divider line */}
        <div className="divider"></div>
        
        {/* Dark Mode Toggle */}
        <button className="theme-toggle" aria-label="Toggle Dark Mode">
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
        <button className="contact-btn">Contact</button>
      </div>
    </nav>
  );
}