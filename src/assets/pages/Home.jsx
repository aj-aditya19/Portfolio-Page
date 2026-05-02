import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import ProfessionalCertificates from "./ProfessionalCertificates";
import Contact from "./Contact";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <main>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="certificates">
        <ProfessionalCertificates />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
