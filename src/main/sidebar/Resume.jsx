import React from "react";
import Timeliner from "./Timeliner";
import BarChart from "./BarChart";
import ResumeBackdrop from "./ResumeBackdrop";

function Resume() {
  return (
    <div className="w-full h-full px-5 py-2 grid grid-cols-2 grid-rows-12 gap-1">
      <div className="col-span-1 row-span-10  flex items-center justify-center">
        <Timeliner />
      </div>
      <div className="col-span-1 row-span-10 flex flex-col justify-evenly items-center ">
        <div className="text-[20px] font-medium text-white">My Skill</div>
        <BarChart />
      </div>
      <div className="col-span-2 row-span-2 flex justify-center items-center">
      <a  href='https://drive.google.com/file/d/1Lvil80UU-iFYbE89Uo2B1RSZ0O7aH9sq/view?usp=drive_link' target="_blank">
            <button className="resumeButton">See Full Resume</button>
      </a>
      </div>
    </div>
  );
}

export default Resume;
