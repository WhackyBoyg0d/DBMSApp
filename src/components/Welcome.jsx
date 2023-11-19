import React from 'react';

const Welcome = () => {
  var name = localStorage.getItem("user");
  name  = JSON.parse(name)[0].name

  // Replace with the actual user data
  const userName = name;
  const loginTime = localStorage.getItem("loginTime");
  const parsedTime = new Date(loginTime).toLocaleString()
  console.log(parsedTime)
  // const loginTime = localStorage.getItem("loginTime");

  return (
      <div className="max-w p-6 bg-white shadow rounded-lg ">
        <h1 className="text-2xl font-bold mb-4">Welcome, {userName}!</h1>
        <p className="text-lg mb-2">We are happy to see you again !</p>
        <p className="text-sm text-gray-500">Login time: {parsedTime}</p>
      </div>
  );
};

export default Welcome;
