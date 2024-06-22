import React, { useState } from "react";

import PhotoSection from "./PhotoSection";
import Sidebar from "./Sidebar";

function MainContent() {
  return (
    <div className="w-full h-full flex space-x-5 rounded-[30px] bg-[#0e0c0c] shadow-[0px_0px_30px_10px_rgb(25,25,25)] p-5">
      <PhotoSection />

      <Sidebar />
    </div>
  );
}

export default MainContent;
