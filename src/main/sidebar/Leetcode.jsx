
// src/FetchData.js
import React, { useState, useEffect } from 'react';
import Skeleton from './SkeletonLoading';
import RepoInfo from './RepoInfo';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import GitHubActivityBox from './GitHubActivityBox';

import DoughnutChartLeetcode from './DoughnutChartLeetcode';


const Leetcode = () => {
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
    <div className='pt-2 flex flex-col gap-3 sm:grid sm:grid-cols-1 sm:grid-rows-3 w-full sm:px-5 sm:h-full h-[100vh]'>
        {data && <div className=' h-[40vh] sm:h-full grid sm:grid-cols-12 grid-cols-1 sm:grid-rows-1 grid-rows-12 sm:w-[80%] w-[98%] rounded-[15px] border-slate-600 border-[0.5px] gap-3 mx-auto'>
             <div className='sm:col-span-3 col-span-1  sm:row-span-1 row-span-4  flex justify-center items-center sm:p-5 pt-2 overflow-hidden'>
                    <img src={data.avatar_url} alt="avatar" className='md:h-[100%] sm:h-[70%] h-[100%]  rounded-full animate__animated animate__fadeInRight' />
             </div>
             <div className='sm:col-span-7 col-span-1 sm:row-span-1  row-span-5 flex flex-col justify-center items-center overflow-hidden '>
                   <div className='text-[25px] font-bold text-white animate__animated animate__fadeInLeft'>{data.name}</div>
                   <div className='text-[15px] text-gray-400 animate__animated animate__fadeInLeft'>{data.login}</div>
                   <div className='flex gap-3 animate__animated animate__fadeInLeft'>
                   <div className='text-[15px] text-gray-400'> <GroupOutlinedIcon/> followers { data.followers} ,</div>
                   <div className='text-[15px] text-gray-400'>following { data.following}</div>
                   </div>
                   <div className='text-[15px] text-gray-400 animate__animated animate__fadeInLeft'><EmailOutlinedIcon/> vishalkushwaha2003@gmail.com</div>

             </div>
             <div className='sm:col-span-2  col-span-1 sm:row-span-1  row-span-3 h-full w-full overflow-hidden '>
                 <RepoInfo number={126} label={'solved'} />  
             </div>
        
        </div>}
        <div className='h-[20vh] sm:h-full w-full p-[2px]  rounded-[5px] overflow-scroll'>
        <GitHubActivityBox/>
        </div>
        <div className='w-full sm:h-full h-[30vh]   '>
          
          <DoughnutChartLeetcode/>
        </div>
      
    </div>
  );
};

export default Leetcode;
