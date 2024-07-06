import React from "react";
import Timeliner from "./Timeliner";
import BarChart from "./BarChart";
import ResumeBackdrop from "./ResumeBackdrop";

function Resume() {
  return (
    <div className="w-full h-full px-5 pb-3 grid sm:grid-cols-2 sm:grid-rows-12 grid-cols-1 grid-rows-12 gap-3">
      <div className="col-span-1 sm:row-span-10  row-span-5 flex items-center justify-center">
        <Timeliner />
      </div>
      <div className="col-span-1 sm:row-span-10  row-span-5 flex flex-col justify-evenly items-center ">
        <div className="text-[20px] font-medium text-white">My Skill</div>
        <BarChart />
      </div>
      <div className="sm:col-span-2 col-span-1 sm:row-span-2  row-span-2 flex justify-center items-center">
      <a  href='https://drive.google.com/file/d/1Lvil80UU-iFYbE89Uo2B1RSZ0O7aH9sq/view?usp=drive_link' target="_blank">
            <button className="resumeButton">See Full Resume</button>
      </a>
      </div>
    </div>
  );
}

export default Resume;
