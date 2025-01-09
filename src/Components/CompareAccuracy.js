import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const CompareAccuracy = () => {
  const data = {
    labels: ['Slot 1', 'Slot 2', 'Slot 3', 'Slot 4', 'Slot 5', 'Slot 6', 'Slot 7'],
    datasets: [
      {
        label: 'Accuracy (%)',
        data: [78, 82, 75, 88, 90, 85, 92],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h3 className="text-lg font-semibold mb-4">Compare Accuracy</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CompareAccuracy;
