import React, { useRef } from 'react';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);

  // Tracks the mouse position and sends coordinates to the CSS
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Updates custom CSS properties in real-time
    sectionRef.current.style.setProperty('--mouse-x', `${x}px`);
    sectionRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section 
      id="contact" 
      className="contact-section"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      
      {/* --- NEW: The Interactive Glowing Background --- */}
      <div className="contact-background"></div>

      <div className="contact-container">
        <div className="contact-grid">
          
          {/* --- LEFT SIDE: Compact Info & Links --- */}
          <div className="contact-info-column">
            
            <div className="contact-heading-compact">
              <span className="section-number">05</span>
              <h2>GET IN TOUCH</h2>
            </div>
            
            <p className="contact-lead">
              I am open to new opportunities, freelance projects, and collaborative builds. Drop a message and I will reply within 24 hours.
            </p>

            <div className="contact-links-grid">
              
              <a href="mailto:your.email@gmail.com" className="contact-link-item">
                <div className="contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
                <div className="contact-text">
                  <span className="contact-label">EMAIL</span>
                  <span className="contact-value">your.email@gmail.com</span>
                </div>
              </a>

              <a href="https://github.com/jimcsy" className="contact-link-item" target="_blank" rel="noreferrer">
                <div className="contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></div>
                <div className="contact-text">
                  <span className="contact-label">GITHUB</span>
                  <span className="contact-value">github.com/jimcsy</span>
                </div>
              </a>

              <a href="#" className="contact-link-item">
                <div className="contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></div>
                <div className="contact-text">
                  <span className="contact-label">LINKEDIN</span>
                  <span className="contact-value">Connect</span>
                </div>
              </a>

              <a href="/Resume.pdf" download className="contact-link-item">
                <div className="contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></div>
                <div className="contact-text">
                  <span className="contact-label">RESUME</span>
                  <span className="contact-value">Download PDF</span>
                </div>
              </a>

            </div>
          </div>

          {/* --- RIGHT SIDE: Compact Terminal Form --- */}
          <div className="terminal-form-wrapper">
            <div className="terminal-header">
              <div className="mac-dots">
                <span className="mac-dot red"></span><span className="mac-dot yellow"></span><span className="mac-dot green"></span>
              </div>
              <span className="terminal-title">NEW MESSAGE</span>
              <div className="spacer"></div>
            </div>

            <form className="terminal-body" onSubmit={(e) => e.preventDefault()}>
              
              <div className="input-row">
                <div className="input-group">
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="input-group">
                  <input type="email" placeholder="Email" required />
                </div>
              </div>

              <div className="input-group">
                <input type="text" placeholder="Subject (e.g. Freelance Project)" required />
              </div>

              <div className="input-group">
                <textarea placeholder="Message..." rows="2" required></textarea>
              </div>

              <div className="form-footer">
                <span className="status-text">Ready to send.</span>
                <button type="submit" className="submit-btn">SEND</button>
              </div>

            </form>
          </div>

        </div>
      </div>

      {/* --- FOOTER AREA --- */}
      <footer className="portfolio-footer">
        <div className="footer-content">
          <p className="copyright">© 2026 Genesis Jim Cuasay</p>
          <div className="footer-socials">
            <a href="#" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
          </div>
          <p className="footer-built">Built with React & ♥</p>
        </div>
      </footer>

    </section>
  );
}