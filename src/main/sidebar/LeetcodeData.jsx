// src/FetchData.js
import React, { useState, useEffect } from 'react';

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='grid grid-cols-1 grid-rows-3 w-full'>
        {data && <div className='col-span-1 row-span-1 grid grid-cols-12 grid-rows-1'>
             <div className='col-span-3 row-span-1'>
                 
             </div>
             <div className='col-span-7 row-span-1 '>

             </div>
             <div className='col-span-2 row-span-1'>
                   
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
