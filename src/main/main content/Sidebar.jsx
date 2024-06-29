import React, { useState } from "react";
import Navbar from "../sidebar/Navbar";
import About from "../sidebar/About";
import Resume from "../sidebar/Resume";
import Portfolio from "../sidebar/Portfolio";
import Blog from "../sidebar/Blog";
import Contact from "../sidebar/Contact";

function Sidebar() {
  const [activeComponent, setActiveComponent] = useState("About");
  console.log(activeComponent);
  const renderComponent = () => {
    switch (activeComponent) {
      case "About":
        return <About />;
      case "Resume":
        return <Resume />;
      case "Portfolio":
        return <Portfolio />;
      case "Blog":
        return <Blog />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };
  return (
    <div className="sideCard1 w-full h-full hover:shadow-[0px_0px_15px_2px_rgba(241,176,176,0.6)] rounded-[30px] ">
      <div className="sideCard2 w-full h-full  grid grid-cols-12 grid-rows-12 overflow-hidden">
        <div className="col-span-12 row-span-2 flex justify-center items-center"><Navbar  setActiveComponent={setActiveComponent} /></div>
        <div className="col-span-12 row-span-10">{renderComponent()}</div>
      </div>
    </div> 
  );
}

export default Sidebar;
