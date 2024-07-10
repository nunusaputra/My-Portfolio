import React, { useState } from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Certificate from "../components/Certificate";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Content = () => {
  const [tab, setTab] = useState("about");
  return (
    <div className="w-full bg-white mt-6 shadow-lg shadow-black rounded-lg relative lg:w-3/4 lg:mt-0">
      <Navbar set={setTab}/>
      <div className="py-3 px-3 sm:py-4 sm:px-8">
        {tab === "about" && <About />}
        {tab === "certificate" && <Certificate />}
        {tab === "portfolio" && <Portfolio />}
        {tab === "contact" && <Contact />}
        </div>
    </div>
  );
};

export default Content;
