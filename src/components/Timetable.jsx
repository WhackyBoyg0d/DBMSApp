import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import { useState } from 'react';
 
import { Scheduler } from 'devextreme-react/scheduler';
 
const dataSource = [{
    text: 'Math Class',
    startDate: new Date("2023-11-13T17:30:00.000+0800"),
    endDate: new Date("2023-11-13T19:30:00.000+0800")
  },
  {
    text: 'Physics Class',
    startDate: new Date("2023-11-14T10:00:00.000+0800"),
    endDate: new Date("2023-11-14T12:00:00.000+0800")
  },
  {
    text: 'Chemistry Class',
    startDate: new Date("2023-11-15T09:00:00.000+0800"),
    endDate: new Date("2023-11-15T11:00:00.000+0800")
  },
  {
    text: 'Math Class',
    startDate: new Date("2023-11-16T17:30:00.000+0800"),
    endDate: new Date("2023-11-16T19:30:00.000+0800")
  },
  {
    text: 'Physics Class',
    startDate: new Date("2023-11-17T10:00:00.000+0800"),
    endDate: new Date("2023-11-17T12:00:00.000+0800")
  },
  {
    text: 'Chemistry Class',
    startDate: new Date("2023-11-18T09:00:00.000+0800"),
    endDate: new Date("2023-11-18T11:00:00.000+0800")
  },
// ...
];
 
const currentDate = new Date();


const Timetable = () => {
    const [timeTable, setTimeTable] = useState({
      allowAdding: false,
      allowDeleting: false,
      allowResizing: false,
      allowDragging: false,
      allowUpdating: false,
    });
    return (
            <div className='bg-white shadow rounded-lg p-6 mt-4'>
                <h2 className="text-2xl font-bold mb-4">User Timetable</h2>
                <Scheduler
                dataSource={dataSource}
                defaultCurrentDate={currentDate}
                startDayHour={8}
                endDayHour={19}
                cellDuration={60}
                firstDayOfWeek={1}
                adaptivityEnabled={true}
                editing={timeTable}
            />
            </div>
            
        );
}

export default Timetable;