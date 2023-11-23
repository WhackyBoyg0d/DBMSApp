import React from 'react';
import Axios from 'axios';



const lectures = JSON.parse(localStorage.getItem("timetable"));
const user = JSON.parse(localStorage.getItem("user"));
var email;
if(user){
  email = user[0].email_address;
  console.log(user);
}
console.log(lectures);


const Lecture = ({lectures}) => {
  const recipientEmail = email;
  const subject = 'Upcoming Lecture Information';
  if(!lectures){
    lectures = [];
  }

  
  
const currentDate = new Date();

  const filteredLecture1 = lectures.find(lecture => {
    const startDate = new Date(lecture.startDate);
    const endDate = new Date(lecture.endDate);

    // Check if the lecture start time is within one hour of the current time
    const timeDiff = Math.abs(startDate.getTime() - currentDate.getTime());
    return timeDiff <= 3600000 && startDate < endDate && currentDate.getDay() === startDate.getDay();
  });

  console.log(filteredLecture1);
  var startTime = null;

  if(filteredLecture1){
    startTime = new Date(filteredLecture1.startDate).toLocaleString()
    Axios.get("http://localhost:3001/moreLectureInfo", {
      params:{
        course_id: filteredLecture1.text
      }
    }).then((response) => {
      console.log(response.data);
      localStorage.setItem("moreLectureInfo", JSON.stringify(response.data));
    })
  }
  else{
 
  }

  var moreLectureInfo = JSON.parse(localStorage.getItem("moreLectureInfo"));

  const handleEmailButtonClick = (e) => {
    e.preventDefault();
    if(filteredLecture1){
      var name = filteredLecture1.text;
      var description = filteredLecture1.description;
      var startDate = new Date(filteredLecture1.startDate).toLocaleString();
      var message = moreLectureInfo.teacher_message;
      var zoomLink = moreLectureInfo.zoom_link;
      var tutorialLectureNotes = moreLectureInfo.tutorial_lecture_notes;
    }
    else{
    name = "TEST123";
    description = "MWT1";
    }
     // Assuming the name field is an input with the name attribute
    const body = `Course Name: ${name} \n Address: ${description} \n startTime: ${startDate} \n Teacher's Message: ${message} \n Zoom Link: ${zoomLink} \n Notes: ${tutorialLectureNotes}  .`;
    // const body = 'Upcoming Lecture Information';
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  if(!moreLectureInfo){
    moreLectureInfo = {
      teacher_message: "No message",
      zoom_link: "No link",
      tutorial_lecture_notes: "No notes"
    }
  }

  

  return (
    <div className="bg-white shadow rounded-lg p-6 ">
      <h2 className="text-2xl font-bold mb-4">Upcoming Lecture</h2>
      {filteredLecture1 ? (
        <div>
          <div className="mb-4">
        <p className="text-gray-700 font-bold">Course:</p>
        <p className="text-gray-900">{filteredLecture1.text}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700 font-bold">Start Time:</p>
        <p className="text-gray-900">{startTime}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700 font-bold">Classroom Address:</p>
        <p className="text-gray-900">{filteredLecture1.description}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700 font-bold">Teacher's Message:</p>
        <p className="text-gray-900">{moreLectureInfo.teacher_message}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700 font-bold">Zoom Link:</p>
        <a href={moreLectureInfo.zoom_Link} className="text-blue-500 hover:underline">{moreLectureInfo.zoom_link}</a>
      </div>
      <div>
        <p className="text-gray-700 font-bold">Tutorial/Lecture Notes: {}</p>
        <a href="#" className="text-blue-500 hover:underline">Dummy Notes</a>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleEmailButtonClick}> Send Email
      </button>
        </div>

      ) : (
        <div>
          <p>No upcoming lecture within one hour.</p>
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleEmailButtonClick}> Send Email
      </button> */}
        </div>
        
      )}
      
    </div>
  );
};

const UpcomingLecture = () => {
  return (
    <Lecture lectures={lectures} />
  )
}

export default UpcomingLecture;