import React from 'react';

const TestLecture = ({ lectures }) => {
  const currentDate = new Date();

  const filteredLecture = lectures.find(lecture => {
    const startDate = new Date(lecture.startDate);
    const endDate = new Date(lecture.endDate);

    // Check if the lecture start time is within one hour of the current time
    const timeDiff = Math.abs(startDate.getTime() - currentDate.getTime());
    return timeDiff <= 3600000 && startDate < endDate && currentDate.getDay() === startDate.getDay();
  });

  return (
    <div>
      {filteredLecture ? (
        <div>
          <h2>Upcoming Lecture</h2>
          <p>Course: {filteredLecture.course}</p>
          <p>Start Time: {filteredLecture.startDate}</p>
          <p>End Time: {filteredLecture.endDate}</p>
        </div>
      ) : (
        <p>No upcoming lecture within one hour.</p>
      )}
    </div>
  );
};

export default TestLecture;