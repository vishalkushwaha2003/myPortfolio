import React from 'react';

const GitHubContributionGraph = () => {
  // Sample data to represent the contribution counts
  const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const contributions = [
    [-1, -1, 0, 0, 0, 0, 0], // Aug week 1
    [0, 0, 1, 0, 0, 0, 0], // Aug week 2
    [0, 0, 4, 0, 0, 0, 0], // Aug week 3
    [0, 0, 0, 0, 3, 0, 0], // Aug week 4
    [0, 0, 0, 0, 0, -1, -1], // Aug week 1
    [0, 0, 0, 0, 0, 0, 0], // Aug week 2
    [0, 0, 0, 0, 0, 0, 0], // Aug week 3
    // Add the remaining weeks for each month...
  ];

  const getColor = (count) => {
    switch(count) {
      case -1: return 'bg-red-600';
      case 0: return 'bg-gray-600';
      case 1: return 'bg-green-200';
      case 2: return 'bg-green-400';
      case 3: return 'bg-green-600';
      case 4: return 'bg-green-800';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="flex flex-col w-fill h-full">
      <div className="flex space-x-4 mb-2">
        {months.map((month, index) => (
          <div key={index} className="text-gray-400 text-xs flex flex-col justify-center items-center space-y-[4px] ">
            <div>{month}</div>

            <div className="flex space-x-[4px]">
              {contributions.map((week, weekIndex) => (
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
