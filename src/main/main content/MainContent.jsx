import React from "react";
import PhotoSection from "./PhotoSection";
import Sidebar from "./Sidebar";

function MainContent() {
  return (
    <div
      className="w-full h-full sm:p-5 p-2  bg-[#0c0c0c] shadow-[0px_0px_30px_10px_rgb(25,25,25)] 
                rounded-[30px] md:overflow-y-scroll flex flex-col sm:flex-col md:flex-col lg:flex-row sm:gap-5 gap-2"
    >
      <div className=" h-[30vh] w-full sm:h-[30vh] sm:w-full md:h-[35vh] md:w-full lg:h-full lg:w-[25%] flex gap-0 sm:flex-row md:flex-row lg:flex-col sm:gap-3">
        <div className="h-full w-[100vh]   sm:h-full  sm:w-[40%] md:w-[40%] md:h-full lg:w-full lg:h-[50%] ">
          <PhotoSection />
        </div>
        <div className="sm:border-[0.5px] rounded-3xl sm:border-[rgb(251,185,182)] hover:shadow-[0px_0px_15px_2px_rgba(241,176,176,0.6)] duration-300 border-h-0 w-0 sm:h-full sm:w-[60%] md:w-[60%] md:h-full lg:h-[50%] lg:w-full"></div>
      </div>
      <div className=" h-[100vh] w-full sm:w-full sm:h-[60vh] md:h-[60vh] md:w-full lg:w-[75%] lg:h-full">
        <Sidebar />
      </div>
    </div>
  );
}

export default MainContent;
