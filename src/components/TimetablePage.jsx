import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Timetable from './Timetable'

const TimetablePage = () => {
  return (
    <div className="flex flex-col flex-1 bg-gray-100 h-screen" >
        <Navbar />

        <div className="flex flex-1 p-4">
          <div className="w-1/3 ">
            <Sidebar/>
          </div>  
          <div className="w-2/3 mr-4 flex flex-col h-screen ">
            <Timetable />
          </div>
        </div>
      </div>
  )
}

export default TimetablePage
