// src/FetchData.js
import React, { useState, useEffect } from 'react';
import Skeleton from './SkeletonLoading';
import RepoInfo from './RepoInfo';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';


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
        {data && <div className='col-span-1 row-span-1 grid grid-cols-12 grid-rows-1 w-[80%] rounded-lg border-[0.1px]'>
             <div className='col-span-3 row-span-1  flex justify-center items-center p-5'>
                    <img src={data.avatar_url} alt="avatar" className='h-[100%] rounded-full' />
             </div>
             <div className='col-span-7 row-span-1  flex flex-col justify-center items-center'>
                   <div className='text-[25px] font-bold text-white'>{data.name}</div>
                   <div className='text-[15px] text-gray-400'>{data.login}</div>
                   <div className='flex gap-3'>
                   <div className='text-[15px] text-gray-400'> <GroupOutlinedIcon/> followers { data.followers} ,</div>
                   <div className='text-[15px] text-gray-400'>following { data.following}</div>
                   </div>
                   <div className='text-[15px] text-gray-400'><EmailOutlinedIcon/> vishalkushwaha2003@gmail.com</div>

             </div>
             <div className='col-span-2 row-span-1 '>
                 <RepoInfo repos={data.public_repos}/>  
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
