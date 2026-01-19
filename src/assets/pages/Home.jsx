import React from "react";
import About from "./About";
import Skills from "./skills";
import Achievments from "./Achievments";
import Work from "./work";
import Contact from "./Contact";
import Projects from "./projects";

const Home = () => {
  return (
    <div>
      <About />
      <Skills />
      <Projects />
      <Achievments />
      {/* <Work /> */}
      <Contact />
    </div>
  );
};

export default Home;
