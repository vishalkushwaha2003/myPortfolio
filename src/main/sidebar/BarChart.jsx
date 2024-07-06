import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const BarChart = () => {
  const labels = ['web Design', 'web Dev.', 'chrome Ext.', 'DSA', 'AWS'];
  const data = {
    labels: labels,
    datasets: [{
      data: [70, 80, 40, 60, 30],
      backgroundColor: [
        'rgba(251, 185, 182, 0.2)',
      ],
      borderColor: [
        'rgb(251, 185, 182)',
      ],
      borderWidth: 1,
    }]
  };

  const options = {
    maintainAspectRatio: false, // Prevents the aspect ratio from being maintained
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // Grid line color
        },
        ticks: {
          color: 'white', // Y-axis label color
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Grid line color
        },
        ticks: {
          color: 'white', // X-axis label color
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
    <div className="h-[40vh] w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
