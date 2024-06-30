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
      backgroundColor: 'rgb(251, 185, 182,0.2)',
      borderColor: 'rgb(251, 185, 182)',
      borderWidth: 0,
      barThickness: 10, // Set the thickness of each bar
      maxBarThickness: 10, // Set the maximum thickness of each bar
    }]
  };

  const options = {
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
    }
  };

  return (
    <div className='w-[80%]  p-2'  > {/* Set the height of the chart container */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default GitHubRepoAnalysis;
