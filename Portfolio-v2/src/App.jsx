import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Opener from "./components/Opener";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Global mouse tracker for the background spotlight
  useEffect(() => {
    const handleGlobalMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('pointermove', handleGlobalMove);
    return () => window.removeEventListener('pointermove', handleGlobalMove);
  }, []);

  return (
    // We use a React Fragment (<>) to wrap multiple sibling elements
    <>
      {/* ✅ THE FIX: Opener is now OUTSIDE the app-container. 
          This guarantees it completely takes over the entire viewport! */}
      <Opener />

      {/* Your actual website stays wrapped safely in its own container */}
      <div className={darkMode ? "dark app-container" : "app-container"}>
        
        {/* The Global Background Layer */}
        <div className="global-dot-grid"></div>

        <Navbar toggleDarkMode={() => setDarkMode((prev) => !prev)} />
        <div id="home">
          <Hero />
        </div>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}