// src/components/pages/MapsPage.tsx
import React from 'react';
import LineGraph from './LineGraph';
import Map from './Map';

const MapsPage: React.FC = () => {
  return (
    <div className="space-y-8 p-4 max-w-full overflow-hidden h-screen bg-gray-100">
      {/* For large devices, display the components side by side */}
      <div className="hidden md:flex md:space-x-8 h-full">
        <div className="w-full md:w-1/2 h-full p-4 bg-white shadow-md rounded-lg">
          <LineGraph />
        </div>
        <div className="w-full md:w-1/2 h-full p-4 bg-white shadow-md rounded-lg">
          <Map />
        </div>
      </div>

      {/* For small devices, display the components in two rows */}
      <div className="flex flex-col space-y-8 md:hidden h-full overflow-hidden">
        <div className="w-full h-1/2 p-4 bg-white shadow-md rounded-lg overflow-hidden">
          <LineGraph />
        </div>
        <div className="w-full h-1/2 p-4 bg-white shadow-md rounded-lg overflow-hidden">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default MapsPage;

