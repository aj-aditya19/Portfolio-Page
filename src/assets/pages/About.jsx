import React from "react";
import "../styles/About.css";
import Lottie from "lottie-react";
import robotaim from "../src/coding.json";

const About = () => {
  return (
    <div className="about-section">
      {/* <div className="heading">About Me</div> */}

      <div className="container1 card">
        <div className="person">
          <div className="circle">AJ</div>
          <div className="p">
            <div className="name">Aditya Jaiswal</div>
            <div className="title">Web Developer</div>
          </div>
        </div>
        <div className="quote">
          I just can't code Only
          <h className="makeit"> I'll make it</h>
        </div>
      </div>

      <div className="container-all">
        <div className="container2 card">
          <h3>Introduction</h3>
          <p>
            I love coding, learning new technologies, and building projects that
            make life easier. My goal is to create apps that are useful and
            visually appealing.
          </p>
        </div>
        <div className="container3 card">
          <div className="lottie-box">
            <Lottie animationData={robotaim} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
