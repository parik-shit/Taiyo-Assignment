// src/components/pages/LineGraph.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchHistoricalData } from '../../services/api';
import { HistoricalData } from '../../types/HistoricalData';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph: React.FC = () => {
  const { data, error, isLoading } = useQuery<HistoricalData>({
    queryKey: ['historicalData'],
    queryFn: fetchHistoricalData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  const chartData = {
    labels: data ? Object.keys(data.cases) : [],
    datasets: [
      {
        label: 'Cases',
        data: data ? Object.values(data.cases) : [],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.1)',
        fill: true,
        tension: 0.3, // Smooth line
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend for minimal design
      },
      title: {
        display: true,
        text: 'Historical Data Line Graph',
        color: '#333',
        font: {
          size: 18,
          weight: 'bold' as 'bold',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines for a cleaner look
        },
        ticks: {
          maxTicksLimit: 10,
          color: '#666',
        },
      },
      y: {
        grid: {
          display: false,
          color: '#e0e0e0',
        },
        ticks: {
          color: '#666',
        },
      },
    },
  };

  return (
    <div className="h-full">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineGraph;

