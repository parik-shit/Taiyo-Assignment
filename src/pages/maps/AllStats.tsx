import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchWorldwideData } from '../../services/api';
import { AllData } from '../../types/AllData';
import { FaVirus, FaProcedures, FaHeartbeat, FaSkullCrossbones, FaFlask, FaGlobe } from 'react-icons/fa';

const AllStats: React.FC = () => {
  const { data, error, isLoading } = useQuery<AllData, Error>({
    queryKey: ['allData'],
    queryFn: fetchWorldwideData,
  });

  if (isLoading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center p-4 text-red-500">Error fetching data</div>;

  return (
    <div className=" space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Global COVID-19 Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-blue-100 shadow-md rounded-lg p-4 flex flex-col items-center text-center">
          <FaVirus className="text-blue-500 text-4xl mb-2" />
          <div>
            <h3 className="text-xl font-semibold mb-1">Total Cases</h3>
            <p className="text-2xl font-bold">{data?.cases.toLocaleString()}</p>
          </div>
        </div>
        <div className="bg-yellow-100 shadow-md rounded-lg p-4 flex flex-col items-center text-center">
          <FaProcedures className="text-yellow-500 text-4xl mb-2" />
          <div>
            <h3 className="text-xl font-semibold mb-1">Active Cases</h3>
            <p className="text-2xl font-bold">{data?.active.toLocaleString()}</p>
          </div>
        </div>
        <div className="bg-green-100 shadow-md rounded-lg p-4 flex flex-col items-center text-center">
          <FaHeartbeat className="text-green-500 text-4xl mb-2" />
          <div>
            <h3 className="text-xl font-semibold mb-1">Recovered</h3>
            <p className="text-2xl font-bold">{data?.recovered.toLocaleString()}</p>
          </div>
        </div>
        <div className="bg-red-100 shadow-md rounded-lg p-4 flex flex-col items-center text-center">
          <FaSkullCrossbones className="text-red-500 text-4xl mb-2" />
          <div>
            <h3 className="text-xl font-semibold mb-1">Deaths</h3>
            <p className="text-2xl font-bold">{data?.deaths.toLocaleString()}</p>
          </div>
        </div>
        <div className="bg-purple-100 shadow-md rounded-lg p-4 flex flex-col items-center text-center">
          <FaFlask className="text-purple-500 text-4xl mb-2" />
          <div>
            <h3 className="text-xl font-semibold mb-1">Tests Conducted</h3>
            <p className="text-2xl font-bold">{data?.tests.toLocaleString()}</p>
          </div>
        </div>
        <div className="bg-pink-100 shadow-md rounded-lg p-4 flex flex-col items-center text-center">
          <FaGlobe className="text-pink-500 text-4xl mb-2" />
          <div>
            <h3 className="text-xl font-semibold mb-1">Affected Countries</h3>
            <p className="text-2xl font-bold">{data?.affectedCountries}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStats;

