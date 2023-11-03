import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import {useState} from 'react';

export default function BasicDateCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // console.log(date);
  

  return (
    <div className="max-w p-6 bg-white shadow rounded-lg ">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar  
      defaultValue = {selectedDate}
      onChange={(newValue) => {
        setSelectedDate(newValue);
      }}
      />
    </LocalizationProvider>
    <div>
      <p>
        Current Date - {selectedDate?.toString() || 'none'}
      </p>
    </div>
    </div>
    
  );
}