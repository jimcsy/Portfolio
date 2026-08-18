import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark app-container" : "app-container"}>
      <Navbar toggleDarkMode={() => setDarkMode((prev) => !prev)} />
      <Hero />
    </div>
  );
}