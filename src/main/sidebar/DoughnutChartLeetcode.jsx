import React, { useRef, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChartLeetcode = ({ onSegmentClick }) => {
  const chartRef = useRef(null);
  const [total, setTotal] = useState(0);
  const totalRef = useRef(total);
  const [hoveredIndex, setHoveredIndex] = useState(null);
 

  const data = {
    labels: ["easy", "medium", "hard"],
    datasets: [
      {
        
        data: [52, 68, 6],
        backgroundColor: [
          "rgba(45, 176, 212, 0.8)",
          "rgba(230, 212, 11, 0.8)",
          "rgba(219, 0, 48, 0.8)",
          
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)"
         
        ],
        borderWidth: 0.1,
      },
    ],
  };

  useEffect(() => {
    const chart = chartRef.current;
    const totalValue = chart.data.datasets[0].data.reduce(
      (acc, curr) => acc + curr,
      0
    );

    const incrementTotal = (start, end, duration) => {
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const animatedTotal = Math.round(start + (end - start) * progress);
        setTotal(animatedTotal);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setTotal(end); // Ensure the final value is set
        }
      };

      requestAnimationFrame(animate);
    };

    const handleAnimation = () => {
      incrementTotal(0, totalValue, 1000); // Animate over 1 second
    };

    chart.options.animation = {
      duration: 1000,
      onProgress: handleAnimation,
    };

    chart.update();
  }, []);

  useEffect(() => {
    totalRef.current = total;
  }, [total]);

  const totalCenterPlugin = {
    id: "totalCenterPlugin",
    beforeDraw: function (chart) {
      const {
        ctx,
        chartArea: { top, bottom, left, right },
      } = chart;
      ctx.save();

      // Calculate positions
      const centerX = (left + right) / 2;
      const centerY = (top + bottom) / 2;

      // Draw the total value
      ctx.font = "bold 20px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "white";
      ctx.fillText(totalRef.current, centerX, centerY - 8); // Adjust y-position for spacing

      // Draw the "min" label
      ctx.font = "12px Arial";
      ctx.fillStyle = "green"; // Change color for "min"
      ctx.fillText("solved", centerX, centerY + 12); // Adjust y-position for spacing

      ctx.restore();
    },
  };



  const options = {
    responsive: true,
    cutout: "80%", // Adjusted cutout percentage for more visible padding
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true, // Disable the default tooltip
      },
    },
    onClick: (e, activeElements) => {
      if (activeElements.length > 0) {
        const index = activeElements[0].index;
        handleSegmentClick(index);
      }
    },

    animation: {
      animateRotate: true,
      animateScale: true,
    },
    elements: {
      arc: {
        hoverOffset: 15, // Increase the hover offset to scale the segment
      },
    },
  };

  const handleSegmentClick = (index) => {
    onSegmentClick(index);
    setInfo({ label: data.labels[index], value: data.datasets[0].data[index] }); // Set info state
    setShowInfo(true); // Show info box
  };

  return (
    <div className="flex flex-col items-center justify-center bg-transparent pb-4 ">
      
        <div className="h-[200px] ">
          <Doughnut
            data={data}
            options={options}
            plugins={[totalCenterPlugin]}
            ref={chartRef}
          />
        </div>
        
      
      <div className=" w-full flex space-x-6   justify-center">
        
          {data.labels.map((label, index) => (
            <div
              key={index}
              className="flex items-center space-x-1 hover:cursor-pointer"
              
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: data.datasets[0].backgroundColor[index],
                }}
              ></span>
              <span
                className="text-white text-md"
                style={{
                  color:
                    hoveredIndex === index
                      ? data.datasets[0].backgroundColor[index]
                      : "white", // Change text color dynamically based on chart color
                }}
              >
                {label} {data.datasets[0].data[index]}
              </span>
            </div>
          ))}
       
      </div>
    </div>
  );
};

export default DoughnutChartLeetcode;


