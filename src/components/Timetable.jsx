import React, { useEffect } from 'react';
import 'devextreme/dist/css/dx.light.css';
import { useState } from 'react';
 
import { Scheduler } from 'devextreme-react/scheduler';
import  Axios  from 'axios';

 
// const dataSource = [{
//     text: 'Math Class',
//     startDate: new Date("2023-11-13T17:30:00.000+0800"),
//     endDate: new Date("2023-11-13T19:30:00.000+0800"),
//     recurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TH;COUNT=10',
//     description: 'Location - Room 1',

//   },
//   {
//     text: 'Physics Class',
//     startDate: new Date("2023-11-14T10:00:00.000+0800"),
//     endDate: new Date("2023-11-14T12:00:00.000+0800")
//   },
//   {
//     text: 'Chemistry Class',
//     startDate: new Date("2023-11-15T09:00:00.000+0800"),
//     endDate: new Date("2023-11-15T11:00:00.000+0800")
//   },
//   {
//     text: 'Physics Class',
//     startDate: new Date("2023-11-17T10:00:00.000+0800"),
//     endDate: new Date("2023-11-17T12:00:00.000+0800")
//   },
//   {
//     text: 'Chemistry Class',
//     startDate: new Date("2023-11-18T09:00:00.000+0800"),
//     endDate: new Date("2023-11-18T11:00:00.000+0800")
//   },
// // ...
// ];
 
const currentDate = new Date();

const Timetable = () => {
    const [dataSource, setDataSource] = useState();
    const [timeTable, setTimeTable] = useState([{
      allowAdding: false,
      allowDeleting: false,
      allowResizing: false,
      allowDragging: false,
      allowUpdating: false,
    }]);
    useEffect(() => {
      Axios.get("http://localhost:3001/timetable", {
      params:{
        student_id: JSON.parse(localStorage.getItem("user"))[0].student_id
      }
    }).then((response) => {
      console.log(response.data);
      localStorage.setItem("timetable", JSON.stringify(response.data));
      setDataSource(response.data);
      // setTimeTable(response.data);
    })
    }, []);

    
    return (
            <div className='bg-white shadow rounded-lg p-6 mt-4'>
                <h2 className="text-2xl font-bold mb-4">User Timetable</h2>
                <Scheduler
                dataSource={dataSource}
                defaultCurrentDate={currentDate}
                startDayHour={8}
                endDayHour={21}
                cellDuration={60}
                firstDayOfWeek={1}
                adaptivityEnabled={true}
                editing={false}
            />
            </div>
            
        );
}

export default Timetable;