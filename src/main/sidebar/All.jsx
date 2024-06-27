import React from "react";
import PortfolioChard from "./PortfolioChard";

function All() {
  const data = ["chat App", "Activity Tracker", "FunQrew", "Runner"];

  return (
    <div className="w-full h-full p-5 justify-evenly flex items-center">
      <div className="animate__animated animate__fadeInLeft">
        <PortfolioChard data={data[0]} />
      </div>
      <div className="animate__animated animate__fadeInUp">
        <PortfolioChard data={data[1]} />
      </div>

      <div className="animate__animated animate__fadeInUp">
        <PortfolioChard data={data[2]} />
      </div>
      <div className="animate__animated animate__fadeInRight">
        <PortfolioChard data={data[3]} />
      </div>
    </div>
  );
}

export default All;
