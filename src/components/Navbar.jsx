import React, {useState} from "react";
import icms from "../assets/icms.png";
import user from "../assets/user.png"
import { useNavigate } from 'react-router-dom';
import Axios from "axios";


const Navbar = () => {
  const navigate = useNavigate();
  const clickDashboard = () => { 
    navigate('/dashboard');
  }

  const clickLogOut = () => {
    var logoutTime = new Date()
    console.log(localStorage.getItem("loginTime"))
    console.log(logoutTime)
    var user = localStorage.getItem("user")
    var student_id = JSON.parse(user)[0].student_id
    console.log(student_id)
     Axios.get("http://localhost:3001/logout", {
      params:{
        login_time: new Date(localStorage.getItem("loginTime")),
        logout_time: logoutTime,
        student_id: JSON.parse(user)[0].student_id
      }}).then((response) => {
        console.log(response.data);
        alert("Session Time:"+response.data.session_time);

      })
    localStorage.clear();
    navigate('/');
  }
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  var name = localStorage.getItem("user");
  name  = JSON.parse(name)[0].name

   const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relatiive z-10">
      <nav className="bg-primary border-gray-200  border-b-2 ">
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center ">
            {/* <img src={icms} className="h-12 mr-6 rounded " alt="CareerHackers Logo" /> */}
          </div>
          <div  className="flex items-center " >
            <button onClick={handleDropdownToggle} className="flex items-center focus:outline-none">
              <img  src= {user} className="h-8 w-8 rounded-full mr-2" alt="User Profile" />
      <span>{name}</span>
            </button>
            {!isDropdownOpen && (
              <div className="absolute right-0 mt-48 mr-1 bg-secondary-100 border border-gray-200 rounded shadow text-white">
                {/* Dropdown content */}
                <ul className="py-2">
                  <li onClick={clickDashboard} className="px-4 py-2">Dashboard</li>
                  <li onClick={clickLogOut} className="px-4 py-2">Log Out</li>
                </ul>
              </div>
            )}
      
    </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;