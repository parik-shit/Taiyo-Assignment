// src/components/Sidebar.tsx
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Burger Icon */}
      <div className="fixed top-4 left-4 z-50 cursor-pointer" onClick={toggleSidebar}>
        <FaBars size={24} />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-200 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-40`}
      >
        <div className="p-4"><br/>
          <ul>
            <li className="mt-4 group">
              <div className="p-2 rounded group-hover:bg-gray-400">
                <Link
                  to="/"
                  onClick={toggleSidebar}
                  className="text-black group-hover:text-white"
                >
                  Home
                </Link>
              </div>
            </li>
            <li className="mt-4 group">
              <div className="p-2 rounded group-hover:bg-gray-400">
                <Link
                  to="/contact"
                  onClick={toggleSidebar}
                  className="text-black group-hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </li>
            <li className="mt-4 group">
              <div className="p-2 rounded group-hover:bg-gray-400">
                <Link
                  to="/map"
                  onClick={toggleSidebar}
                  className="text-black group-hover:text-white"
                >
                  Maps
                </Link>
              </div>
            </li>
            {/* Add more links here */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

