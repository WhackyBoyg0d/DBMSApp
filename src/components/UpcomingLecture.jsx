import React from 'react';

const UpcomingLecture = () => {
  const lecture = {
    course: 'Mathematics',
    address: '123 Main St, City',
    message: 'Please make sure to review the previous chapter before the lecture.',
    zoomLink: 'https://zoom.us/join',
    notes: 'https://example.com/lecture-notes',
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 ">
      <h2 className="text-2xl font-bold mb-4">Upcoming Lecture</h2>
      <div className="mb-4">
        <p className="text-gray-700 font-bold">Course:</p>
        <p className="text-gray-900">{lecture.course}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700 font-bold">Classroom Address:</p>
        <p className="text-gray-900">{lecture.address}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700 font-bold">Teacher's Message:</p>
        <p className="text-gray-900">{lecture.message}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700 font-bold">Zoom Link:</p>
        <a href={lecture.zoomLink} className="text-blue-500 hover:underline">{lecture.zoomLink}</a>
      </div>
      <div>
        <p className="text-gray-700 font-bold">Tutorial/Lecture Notes:</p>
        <a href={lecture.notes} className="text-blue-500 hover:underline">{lecture.notes}</a>
      </div>
    </div>
  );
};

export default UpcomingLecture;