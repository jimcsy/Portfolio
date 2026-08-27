import React, { useState, useEffect } from 'react';
import './Opener.css';

export default function Opener() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 4;
        return Math.min(oldProgress + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  // Creates an array of 100 items to build our 10x10 domino grid
  const tiles = Array.from({ length: 100 });

  return (
    <div className={`opener ${progress === 100 ? 'fade-out' : ''}`} aria-live="polite">
      
      {/* 🧱 THE DOMINO TILE BACKGROUND 🧱 */}
      <div className="tile-grid">
        {tiles.map((_, i) => {
          // Calculates the exact row and column for each tile (0-9)
          const row = Math.floor(i / 10);
          const col = i % 10;
          
          // CHANGED: Increased from 0.04 to 0.085 to slow down the cascading wave!
          const delay = (row + col) * 0.085;
          
          return (
            <div 
              key={i} 
              className="tile" 
              style={{ transitionDelay: `${delay}s` }} 
            />
          );
        })}
      </div>

      {/* 📝 THE CONTENT 📝 */}
      <div className="opener-content">
        <h1 
          className="opener-name" 
          data-text="GENESIS JIM"
          style={{ '--progress': `${progress}%` }}
        >
          GENESIS JIM
        </h1>
        
        <div className="opener-counter">
          loading... {progress}%
        </div>
      </div>
      
    </div>
  );
}