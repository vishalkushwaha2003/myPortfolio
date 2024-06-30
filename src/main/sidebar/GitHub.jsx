// src/FetchData.js
import React, { useState, useEffect } from 'react';
import Skeleton from './SkeletonLoading';
import RepoInfo from './RepoInfo';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import GitHubActivityBox from './GitHubActivityBox';
import GitHubRepoAnalysis from './GitHubRepoAnalysis';


const GitHub = () => {
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
    <div className='grid grid-cols-1 grid-rows-3 w-full px-5 h-full overflow-y-scroll gap-3'>
        {data && <div className='col-span-1 row-span-1 grid grid-cols-12 grid-rows-1 w-[80%] rounded-[15px] border-slate-600 border-[0.5px]  mx-auto'>
             <div className='col-span-3 row-span-1  flex justify-center items-center p-5 overflow-hidden'>
                    <img src={data.avatar_url} alt="avatar" className='h-[100%] rounded-full animate__animated animate__fadeInRight' />
             </div>
             <div className='col-span-7 row-span-1  flex flex-col justify-center items-center overflow-hidden '>
                   <div className='text-[25px] font-bold text-white animate__animated animate__fadeInLeft'>{data.name}</div>
                   <div className='text-[15px] text-gray-400 animate__animated animate__fadeInLeft'>{data.login}</div>
                   <div className='flex gap-3 animate__animated animate__fadeInLeft'>
                   <div className='text-[15px] text-gray-400'> <GroupOutlinedIcon/> followers { data.followers} ,</div>
                   <div className='text-[15px] text-gray-400'>following { data.following}</div>
                   </div>
                   <div className='text-[15px] text-gray-400 animate__animated animate__fadeInLeft'><EmailOutlinedIcon/> vishalkushwaha2003@gmail.com</div>

             </div>
             <div className='col-span-2 row-span-1 overflow-hidden '>
                 <RepoInfo repos={data.public_repos}/>  
             </div>
        
        </div>}
        <div className='col-span-1 row-span-1  p-[2px] rounded-[5px] overflow-scroll'>
        <GitHubActivityBox/>
        </div>
        <div className='col-span-1  w-full'>
          <GitHubRepoAnalysis/>
        </div>
      
    </div>
  );
};

export default GitHub;
