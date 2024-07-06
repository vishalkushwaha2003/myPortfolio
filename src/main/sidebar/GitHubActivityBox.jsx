import React from 'react';

const GitHubContributionGraph = () => {
  // Sample data to represent the contribution counts


 

  const Sep = [
    [-1, -1, -1, -1, -1, 0, 0], // Sep
    [0, 0, 0, 0, 0, 0, 0], // Sep
    [0, 0, 0, 0, 0, 0, 0], // Sep
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0], // Sep
  ];

  const Oct = [
    [0, 0, 0, 0, 0, 0, 0], // Oct
    [0, 0, 0, 0, 0, 0, 0], // Oct
    [0, 0, 0, 0, 0, 0, 0], // Oct
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, -1, -1, -1, -1], // Oct
  ];


  const Nov = [
    [-1, -1, -1, 4, 4, 2, 7], // Nov 
    [7, 4, 5, 7, 8, 3, 0], // Nov 
    [6, 3, 5, 0, 0, 0, 0], // Nov 
    [0, 0, 0, 0, 0, 0, 0], // Nov 
    [0, 0, 0, 0, 0, -1, -1],//Nov
  ];

  const Dec = [
    [-1, -1, -1, -1, -1, 0, 0], // Dec
    [0, 0, 0, 0, 0, 0, 0], // Dec
    [0, 0, 0, 0, 0, 0, 0], // Dec
    [0, 0, 0, 0, 0, 0, 0], // 
    [0, 0, 0, 0, 0, 0, 0], // Dec
    [0, -1, -1, -1, -1, -1, -1],
  ]
  const Jan = [
    [-1, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, -1, -1, -1]
  ]

  const Feb = [
    [-1, -1, -1, -1, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, -1, -1]
  ];
  const Mar = [
    [-1, -1, -1, -1, -1, 0, 0], 
    [0, 0, 0, 4, 8, 5, 6], 
    [5, 8, 4, 5, 8, 4, 3], 
    [8, 2, 4, 3, 1, 5, 0],
    [0, 0, 0, 0, 0, 4, 4],
    [0, -1, -1, -1, -1, -1, -1]
  ];
  const Apr = [
    [-1, 0, 0, 0, 0, 0, 3], 
    [2, 2, 4, 6, 7, 8, 8], 
    [4, 4, 8, 6, 3, 5, 8], 
    [3, 8, 5, 4, 5, 5, 3],
    [3, 3, 2, -1, -1, -1, -1]
  ];

  const May = [
    [-1, -1, -1, 4, 4, 2, 7], // May
    [2, 2, 0, 4, 3, 3, 0], // May
    [0, 0, 0, 0, 8, 6, 5], // May
    [3, 2, 2, 2, 0, 4, 3], //
    [0, 3, 0, 0, 0, 0, -1], // May
  ];

  const Jun = [
    [-1, -1, -1, -1, -1, -1, 0], 
    [0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];

  const JUl = [
    [-1, -1, -1, -1, -1, -1, -1], 
    [-1, -1, -1, -1, -1, -1, -1], 
    [-1, -1, -1, -1, -1, -1, -1], 
    [-1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1]
  ];


  const Aug = [
    [-1, -1, -1, -1, -1, -1, -1], 
    [-1, -1, -1, -1, -1, -1, -1], 
    [-1, -1, -1, -1, -1, -1, -1], 
    [-1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1]
  ];
 

  

  const months = [['Sep',Sep],['Oct',Oct],['Nov',Nov], ['Dec',Dec], ['Jan',Jan], ['Feb',Feb], ['Mar',Mar], ['Apr',Apr], ['May',May], ['Jun',Jun],['Jul',JUl],['Aug',Aug]];
 

  const getColor = (count) => {
    switch(count) {
      case -1: return 'bg-[rgb(26, 26, 26)]';
      case 0: return 'bg-[rgba(251,185,182,0.1)]';
      case 1: return 'bg-[rgba(251,185,182,0.2)]';
      case 2: return 'bg-[rgba(251,185,182,0.3)]';
      case 3: return 'bg-[rgba(251,185,182,0.4)]';
      case 4: return 'bg-[rgba(251,185,182,0.5)]';
      case 5: return 'bg-[rgba(251,185,182,0.6)]';
      case 6: return 'bg-[rgba(251,185,182,0.7)]';
      case 7: return 'bg-[rgba(251,185,182,0.8)]';
      case 8: return 'bg-[rgba(251,185,182,0.9)]';
      default: return 'bg-[rgba(251,185,182,1)]';
    }
  };

  return (
    <div className="flex flex-col w-auto h-full justify-center   animate__animated animate__fadeInDown">
      <div className="flex space-x-3 mb-2">
        {months.map((month, index) => (
          <div key={index} className="text-gray-400 text-xs flex flex-col justify-center items-center space-y-[4px] ">
            <div>{month[0]}</div>

            <div className="flex space-x-[4px]">
              {month[1].map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col space-y-[4px]">
                  {week.map((count, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`w-3 h-3 ${getColor(count)} rounded-sm`}
                    ></div>
                  ))}
                </div>
              ))}
            </div>


          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubContributionGraph;
