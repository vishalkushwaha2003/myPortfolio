import React, { useState, useEffect } from 'react';

const RepoInfo = ({repos}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end =repos;
    const duration = 1200; // Duration of the animation in ms
    const incrementTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  h-full w-full p-4">
      <div className="w-16 h-16 bg-[#fbb9b67b] rounded-full border-[1px] flex items-center justify-center text-white text-2xl font-bold">
        {count}
      </div>
      <div className="text-gray-400 text-md">Repos</div>
    </div>
  );
};

export default RepoInfo;
