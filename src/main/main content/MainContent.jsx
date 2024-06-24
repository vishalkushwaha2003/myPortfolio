import React, { useState } from "react";

import PhotoSection from "./PhotoSection";
import Sidebar from "./Sidebar";

function MainContent() {
  return (
    <div  className="w-full h-full grid grid-cols-12 grid-rows-12 gap-5  rounded-[30px] bg-[#0c0c0c] shadow-[0px_0px_30px_10px_rgb(25,25,25)]  p-5">
      <div className="col-span-3 row-span-6"><PhotoSection /></div>

      <div className="col-span-9 row-span-12 "><Sidebar /></div>
    </div>
  );
}

export default MainContent;
