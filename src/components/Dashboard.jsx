import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Welcome from './Welcome'
import UpcomingLecture from './UpcomingLecture'
import Timetable from './Timetable'
import TestLecture from '../stash/TestLecture'


const Dashboard = () => {
  // const lectures = JSON.parse(localStorage.getItem("timeTable"));
  // console.log(lectures);
  return (
    
      

      <div className="flex flex-col flex-1 bg-gray-100 h-screen" >
        <Navbar />

        <div className="flex flex-1 p-4">
          <div className="w-1/3 ">
            <Sidebar/>
          </div>  
          <div className="w-2/3 mr-4 flex flex-col h-screen ">
            {/* <UpcomingClasses /> */}
            <Welcome />
            {/* <UpcomingLecture /> */}
            <Timetable />
          </div>
          <div className="w-1/3 flex flex-col h-screen">
            <UpcomingLecture />
            {/* <Welcome /> */}
            {/* <Calendar /> */}
            {/* <TestLecture lectures={lectures}/> */}
            
          </div>
        </div>
      </div>
  );
};

export default Dashboard;

