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
    <div className="sideCard1 w-full  hover:shadow-[0px_0px_15px_2px_rgba(241,176,176,0.3)] rounded-[30px]">
      <div className="sideCard2">
        <Navbar setActiveComponent={setActiveComponent} />
        {renderComponent()}
      </div>
    </div> 
  );
}

export default Sidebar;
