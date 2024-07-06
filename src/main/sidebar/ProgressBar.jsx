import React from "react";

function ProgressBar({progress}) {
  return (
    <div className="px-2 flex flex-col">
      <div className="w-full bg-[rgba(64,65,66,0.46)] rounded-full h-1 p">
        <div
          className="bg-[rgba(251,185,182,0.81)] h-1 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 sm:text-xs text-[10px] text-[rgba(221,201,201,0.65)]">
        <div className=" col-span-1 row-span-1  text-left ">Beg</div>
        <div className=" col-span-1 row-span-1 text-right">Adv</div>
      </div>
    </div>
  );
}

export default ProgressBar;
