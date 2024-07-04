import React from "react";

function ProgressBar() {
  return (
    <div className="px-2">
      <div className="w-full bg-[rgba(50,52,57,0.46)] rounded-full h-1 p">
        <div
          className="bg-[rgba(251,185,182,1)] h-1 rounded-full"
          style={{ width: `20%` }}
        ></div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 text-xs text-[rgba(221,201,201,0.9)]">
        <div className=" col-span-1 row-span-1 text-left ">Beg</div>
        <div className=" col-span-1 row-span-1 text-right">Adv</div>
      </div>
    </div>
  );
}

export default ProgressBar;
