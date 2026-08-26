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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const openerTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => clearTimeout(openerTimeout);
  }, []);

  // NEW: Global mouse tracker for the background spotlight
  useEffect(() => {
    const handleGlobalMove = (e) => {
      // Injects the exact mouse coordinates into the absolute root of the website
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('pointermove', handleGlobalMove);
    return () => window.removeEventListener('pointermove', handleGlobalMove);
  }, []);

  if (isLoading) {
    return <Opener />;
  }

  return (
    <div className={darkMode ? "dark app-container" : "app-container"}>
      
      {/* NEW: The Global Background Layer */}
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
  );
}