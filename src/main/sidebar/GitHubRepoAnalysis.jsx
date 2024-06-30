import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const GitHubRepoAnalysis = () => {
  const labels = ['chrome Ext', 'my portfolio', 'funqrew', 'chat app', 'runner', 'movi world', 'book store', 'drumKit', 'aurh', 'Css style', 'form', 'todoList'];
  const data = {
    labels: labels,
    datasets: [{
      data: [70, 80, 40, 60, 30, 60, 30, 10, 70, 50, 46, 20],
      backgroundColor: 'rgb(251, 185, 182,0.3)',
      borderColor: 'rgb(251, 185, 182)',
      borderWidth: 0,
      barThickness: 10, // Set the thickness of each bar
      maxBarThickness: 10, // Set the maximum thickness of each bar
    }]
  };

  const options = {
    responsive: true, // Ensure responsiveness
    maintainAspectRatio: false, // Disable maintaining aspect ratio
    indexAxis: 'y', // Swap the axes to make bars horizontal
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255,255,255,0.05)', // Grid line color
        },
        ticks: {
          color: 'white', // X-axis label color
        }
      },
      y: {
        grid: {
          color: 'rgba(255,255,255,0.05)', // Grid line color
        },
        ticks: {
          color: 'white', // Y-axis label color
        }
      }
    },
    plugins: {
      legend: {
        display: false 
      }
    },
    onHover: (event, chartElement) => {
      if (chartElement.length) {
        event.native.target.style.cursor = 'pointer';
      } else {
        event.native.target.style.cursor = 'default';
      }
    }
  };

  // Calculate the height based on the number of labels
  const chartHeight = labels.length * 30; // Adjust this multiplier to fit your needs

  return (
    <div className='w-[80%] mx-auto  flex flex-col items-center' style={{ height: chartHeight }}>
      <div className='text-[15px] text-gray-400'>Repos %</div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default GitHubRepoAnalysis;
