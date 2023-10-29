import React from 'react';
import icms from "../assets/icms.png";
import {
  PresentationChartBarIcon,
  CalendarIcon,
  BookOpenIcon
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div className="bg-secondary-100 h-screen w-80 fixed shadow top-0 left-0 z-20 ">
      {/* Sidebar content */}
      <div className="flex flex-col justify-start h-full p-4">
        {/* Logo */}
        <div className="flex items-center justify-center mb-3">
          <img src={icms} className="h-12 rounded shadow " alt="Logo" />
          
        </div>
        
        {/* Menu */}
        <nav className="text-white">
          <ul className="space-y-2">
            <li>
                
              <a href="#" className="block py-2 px-4 hover:bg-gray-700 flex">
                <PresentationChartBarIcon className="h-5 w-5 mt-1 mr-3" />Dashboard</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700 flex">
                <CalendarIcon className="h-5 w-5 mt-1 mr-3" />Timetable</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700 flex">
                <BookOpenIcon className="h-5 w-5 mt-1 mr-3" />
                Courses</a>
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;