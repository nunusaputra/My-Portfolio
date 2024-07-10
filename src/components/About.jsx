import React from "react";
import AboutMe from "../fragments/AboutMe";
import Education from "../fragments/Education";
import Experience from "../fragments/Experience";
import Skills from "../fragments/Skills";

const About = () => {
  return (
    <div className="w-full">
      {/* About Me */}
      <AboutMe />

      {/* Education */}
      <Education />

      {/* Experience */}
      <Experience />

      {/* Skills */}
      <Skills />
    </div>
  );
};

export default About;
