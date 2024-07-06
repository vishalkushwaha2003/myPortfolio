import React, { useState, useEffect } from 'react';

const RepoInfo = ({number,label}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end =number;
    const duration = 1500; // Duration of the animation in ms
    const incrementTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  h-full w-full p-4 animate__animated animate__fadeInRight">
      <div className="md:w-16 md:h-16 sm:w-12 sm:h-12 h-full w-[35%] bg-[#fbb9b67b] rounded-full border-[1px] flex items-center justify-center text-white md:text-2xl sm:text-lg text-lg font-bold">
        {count}
      </div>
      <div className="text-gray-400 md:text-md sm:text-sm">{label}</div>
    </div>
  );
};

export default RepoInfo;
