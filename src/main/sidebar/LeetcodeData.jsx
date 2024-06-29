// src/FetchData.js
import React, { useState, useEffect } from 'react';
import Skeleton from './SkeletonLoading';
import RepoInfo from './RepoInfo';

const LeetcodeData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/vishalkushwaha2003');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data)

  if (loading) {
    return <div className='col-span-1 row-span-1 '><Skeleton/></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='grid grid-cols-1 grid-rows-3 w-full px-5 h-full overflow-y-scroll'>
        {data && <div className='col-span-1 row-span-1 grid grid-cols-12 grid-rows-1 w-[80%]'>
             <div className='col-span-3 row-span-1 bg-red-700 flex justify-center items-center '>
                    <img src={data.avatar_url} alt="avatar" className='h-[100%] rounded-full' />
             </div>
             <div className='col-span-7 row-span-1 bg-green-700 flex flex-col justify-center items-center'>
                   <div className='text-[25px] font-bold text-white'>{data.name}</div>
                   <div className='text-[15px] text-gray-400'>{data.login}</div>
                   <div className='flex gap-3'>
                   <div className='text-[15px] text-gray-400'>followers { data.followers} ,</div>
                   <div className='text-[15px] text-gray-400'>following { data.following}</div>
                   </div>
                   <div className='text-[15px] text-gray-400'>vishalkushwaha2003@gmail.com</div>

             </div>
             <div className='col-span-2 row-span-1 bg-red-600'>
                 <RepoInfo repos={data.public_rpos}/>  
             </div>
        
        </div>}
        <div className='col-span-1 row-span-1'>

        </div>
        <div className='col-span-1 row-span-1'>

        </div>
      
    </div>
  );
};

export default LeetcodeData;
