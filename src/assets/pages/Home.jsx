import React from "react";
import About from "./About";
import Skills from "./Skills";
import Achievments from "./Achievments";
import Work from "./Work";
import Contact from "./Contact";
import Projects from "./Projects";

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
