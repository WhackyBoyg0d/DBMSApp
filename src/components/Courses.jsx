import React, {useState} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const enrolledCourses = JSON.parse(localStorage.getItem("courseInfo"));
console.log(enrolledCourses);

const EnrolledCourses = ({ enrolledCourses }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (courseId) => {
    if (selectedCourse === courseId) {
      setSelectedCourse(null);
    } else {
      setSelectedCourse(courseId);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {enrolledCourses.map((course) => (
        <div
          key={course.course_id}
          className={`bg-white p-4 border rounded shadow  ${
            selectedCourse === course.course_id ? 'bg-blue-200' : ''
          }`}
          onClick={() => handleCourseClick(course.course_id)}
        >
          <h2 className="text-xl font-semibold">{course.course_id}</h2>
          <h2 className="text-xl font-semibold">{course.course_name}</h2>
          {selectedCourse === course.course_id && (
            <div className=' '>
                <p className="text-gray-500 mt-2">Course Description</p>
                <p className="text-gray-500 mt-2">{course.description}</p>
            </div>
            
          )}
        </div>
      ))}
    </div>
  );
};

const Courses = () => {
    console.log(enrolledCourses);
  return (
    <div className="flex flex-col flex-1 bg-gray-100 h-screen" >
        <Navbar />

        <div className="flex flex-1 p-4">
          <div className="w-1/3 ">
            <Sidebar/>
          </div>  
          <div className="w-2/3 mr-4 flex flex-col h-screen ">
            <h1 className="text-2xl font-bold mb-4">Enrolled Courses</h1>
            <EnrolledCourses enrolledCourses={enrolledCourses} />   
          </div>
        </div>
      </div>
  )
}

export default Courses
