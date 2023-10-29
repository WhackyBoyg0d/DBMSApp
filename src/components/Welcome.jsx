import React from 'react';

const Welcome = () => {
  // Replace with the actual user data
  const userName = 'John Doe';
  const loginTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
      <div className="max-w p-6 bg-white shadow rounded-lg ">
        <h1 className="text-2xl font-bold mb-4">Welcome, {userName}!</h1>
        <p className="text-lg mb-2">You have successfully logged in.</p>
        <p className="text-sm text-gray-500">Login time: {loginTime}</p>
      </div>
  );
};

export default Welcome;
