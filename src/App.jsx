import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Splash from "./components/Splash";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import "./styles/tokens.css";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      {loading && <Splash onDone={() => setLoading(false)} />}
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
