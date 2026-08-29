import React, { useRef, useState } from 'react';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);

  // --- 1. FORM STATE MANAGEMENT ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('Ready to send.');

  // Updates state when user types
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handles the actual API submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending message...');

    try {
      // 👉 👉 👉 PUT YOUR FORMSPREE LINK HERE 👈 👈 👈
      // Replace the string below with your actual endpoint URL (e.g., 'https://formspree.io/f/xbjvqzzq')
      const response = await fetch('https://formspree.io/f/xgaevzag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clears the form
        
        // Resets the terminal status after 3 seconds
        setTimeout(() => setStatus('Ready to send.'), 3000);
      } else {
        setStatus('Failed to send. Try again.');
      }
    } catch (error) {
      setStatus('Network error. Check connection.');
    }
  };


  // --- 2. GLOW EFFECT MOUSE TRACKING ---
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    sectionRef.current.style.setProperty('--mouse-x', `${x}px`);
    sectionRef.current.style.setProperty('--mouse-y', `${y}px`);
    sectionRef.current.style.setProperty('--glow-opacity', '1'); 
  };

  const handleMouseLeave = () => {
    if (sectionRef.current) {
      sectionRef.current.style.setProperty('--glow-opacity', '0'); 
    }
  };

  return (
    <section 
      id="contact" 
      className="contact-section"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave} 
    >
      
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

            {/* ✅ CONNECTED THE ONSUBMIT EVENT HERE */}
            <form className="terminal-body" onSubmit={handleSubmit}>
              
              <div className="input-row">
                <div className="input-group">
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Name" 
                    required 
                  />
                </div>
                <div className="input-group">
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email" 
                    required 
                  />
                </div>
              </div>

              <div className="input-group">
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  placeholder="Subject (e.g. Freelance Project)" 
                  required 
                />
              </div>

              <div className="input-group">
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Message..." 
                  rows="2" 
                  required
                ></textarea>
              </div>

              <div className="form-footer">
                {/* The Terminal text above the button */}
                <span className="status-text">{status}</span>
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  /* Disables the button while it is sending OR after it successfully sent */
                  disabled={
                    status === 'Sending message...' || 
                    status === 'Message sent successfully!'
                  }
                >
                  {/* Dynamic Button Text Logic */}
                  {status === 'Sending message...' 
                    ? 'SENDING...' 
                    : status === 'Message sent successfully!' 
                      ? 'SENT ✔' 
                      : 'SEND'}
                </button>
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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/genesis-cuasay" target="_blank" rel="noopener noreferrer"aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <a href="https://www.facebook.com/genisisjim.cuasay/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
          <p className="footer-built">Built with React & ♥</p>
        </div>
      </footer>

    </section>
  );
}