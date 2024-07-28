import React from 'react';
import LineGraph from './LineGraph';
import Map from './Map';
import AllStats from './AllStats';

const MapsPage: React.FC = () => {
  return (
    <div className="space-y-8 p-8 max-w-full h-screen bg-gray-100 flex flex-col">
      {/* Display AllStats at the top */}
      <div className="w-full ">
        <AllStats />
      </div>

      {/* For large devices, display the components side by side */}
      <div className="hidden md:flex md:space-x-8 flex-1">
        <div className="w-full md:w-1/2 p-4 h-max bg-white shadow-md rounded-lg overflow-y-auto">
          <LineGraph />
        </div>
        <div className="w-full md:w-1/2 p-4  h-max bg-white shadow-md rounded-lg overflow-y-auto">
          <Map />
        </div>
      </div>

      {/* For small devices, display the components in two rows */}
      <div className="flex flex-col space-y-8 md:hidden flex-1">
        <div className="w-full h-full overflow-y-auto">
          <div className="w-full p-4 bg-white shadow-md rounded-lg">
            <LineGraph />
          </div>
          <div className="w-full p-4 bg-white shadow-md rounded-lg">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapsPage;
