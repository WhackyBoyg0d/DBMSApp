import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Welcome from './Welcome'
import UpcomingLecture from './UpcomingLecture'
import Calendar from './Calendar'


const Dashboard = () => {
  return (
    
      

      <div className="flex flex-col flex-1 bg-gray-100" >
        <Navbar />

        <div className="flex flex-1 p-4">
          <div className="w-1/3 ">
            {/* <UpcomingClasses /> */}
            <Sidebar/>
          </div>  
          <div className="w-2/3 mr-4 flex flex-col h-screen ">
            {/* <UpcomingClasses /> */}
            <Welcome />
            <UpcomingLecture />
          </div>
          <div className="w-1/3 flex flex-col h-screen">
            {/* <Welcome /> */}
            <Calendar />
          </div>
        </div>
      </div>
  );
};

export default Dashboard;

