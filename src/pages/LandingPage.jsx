import React from "react";
import Sidebar from "../layouts/Sidebar";
import Content from "../layouts/Content";


const LandingPage = () => {
  return (
    <div className="w-full py-16 relative bg-marble">
      <div className="max-w-[1280px] mx-auto px-10 lg:flex lg:gap-14 lg:px-12">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default LandingPage;
