import React from "react";
import icms from "../assets/icms.png";
import user from "../assets/user.png"


const Navbar = () => {

  return (
    <div className="relatiive z-10">
      <nav className="bg-primary border-gray-200  border-b-2 ">
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center ">
            {/* <img src={icms} className="h-12 mr-6 rounded " alt="CareerHackers Logo" /> */}
          </div>
          <div className="flex items-center ">
      <img  src= {user} className="h-8 w-8 rounded-full mr-2" alt="User Profile" />
      <span>John Doe</span>
    </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;