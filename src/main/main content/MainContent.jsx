import React from "react";
import PhotoSection from "./PhotoSection";
import Sidebar from "./Sidebar";

function MainContent() {
  return (
    <div
      className="w-full h-full p-5 bg-[#0c0c0c] shadow-[0px_0px_30px_10px_rgb(25,25,25)] 
                rounded-[30px] md:overflow-y-scroll flex md:flex-col lg:flex-row gap-5"
    >
      <div className="bg-red-800 md:h-[40vh] md:w-full lg:h-full lg:w-[25%] flex md:flex-row lg:flex-col gap-3">
        <div className="md:w-[30%] md:h-full lg:w-full lg:h-[50%]">
          <PhotoSection />
        </div>
        <div className="bg-slate-600 md:w-[70%] md:h-full lg:h-[50%] lg:w-full"></div>
      </div>
      <div className="bg-green-700 md:h-[100vh] md:w-full lg:w-[75%] lg:h-full">
        <Sidebar />
      </div>
    </div>
  );
}

export default MainContent;
