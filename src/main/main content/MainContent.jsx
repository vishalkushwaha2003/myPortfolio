import React from "react";
import PhotoSection from "./PhotoSection";
import Sidebar from "./Sidebar";

function MainContent() {
  return (
    <div
      className="w-full h-full sm:p-5 p-2  bg-[#0c0c0c] shadow-[0px_0px_30px_10px_rgb(25,25,25)] 
                rounded-[30px] md:overflow-y-scroll flex flex-col sm:flex-col md:flex-col lg:flex-row gap-5"
    >
      <div className=" h-[30vh] sm:h-[30vh] sm:w-full md:h-[35vh] md:w-full lg:h-full lg:w-[25%] flex  sm:flex-row md:flex-row lg:flex-col gap-3">
        <div className="h-full w-[100%]   sm:h-full  sm:w-[40%] md:w-[40%] md:h-full lg:w-full lg:h-[50%]">
          <PhotoSection />
        </div>
        <div className="bg-slate-600 h-0 w-0 sm:h-full sm:w-[60%] md:w-[60%] md:h-full lg:h-[50%] lg:w-full"></div>
      </div>
      <div className=" h-[100vh] w-full sm:w-full sm:h-[60vh] md:h-[60vh] md:w-full lg:w-[75%] lg:h-full">
        <Sidebar />
      </div>
    </div>
  );
}

export default MainContent;
