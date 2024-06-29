import React, { useState, useEffect } from 'react';

const RepoInfo = ({repos}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 13;
    const duration = 1000; // Duration of the animation in ms
    const incrementTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl">
        {count}
      </div>
      <div className="mt-2 text-lg">Repo</div>
    </div>
  );
};

export default RepoInfo;
