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
// here chartjs-2 is used because chart.js alone is complex to integrate with react
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
  //using fetchHistoricalData service from services/api, it will return an object of type HistoricalData
  const { data, error, isLoading } = useQuery<HistoricalData>({
    queryKey: ['historicalData'],
    queryFn: fetchHistoricalData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;
  //chartData will be passed into the line component 
  const chartData = {
    //Here keys are the Dates over the timeline 
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
  //options will be passed into the Line component
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
          display: false,// Hiding y-axis grid lines as well 
          color: '#e0e0e0',
        },
        ticks: {
          color: '#666',
        },
      },
    },
  };

  return (
    <div style={{height: '480px'}}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineGraph;

