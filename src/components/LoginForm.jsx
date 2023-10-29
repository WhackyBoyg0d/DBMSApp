import { useState } from "react";
import icms from "../assets/icms.png";
// import logo from "../assets/logo.svg";


const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [facialData, setFacialData] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFacialDataChange = (e) => {
    const file = e.target.files[0];
    setFacialData(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform facial recognition here
    // You can use the facialData and process it accordingly

    // Clear form fields
    setUsername("");
    setPassword("");
    setFacialData(null);
    console.log(facialData);
  };

  return (
    <div className="bg-primary min-h-screen">
    <div className="flex items-center justify-center  ">
      <img src={icms} alt="" className="h-14 mt-12 shadow-md rounded-lg  "  />
    </div>
    
    <div className="flex items-center justify-center  mt-14">
      
      <div className="w-full max-w-md">
        <form
          className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
            <p className="text-xs text-gray-600 italic">
              Forgot your password?{" "}
              <a href="#" className="text-secondary-100 hover:text-blue-700">
                Reset it here.
              </a>
            </p>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="facial-login"
            >
              Biometrics Login
            </label>
            <div className="mt-4 items-center">
              <input
                type="file"
                id="facial-login"
                className="hidden"
                onChange={handleFacialDataChange}
              />
              <label
                htmlFor="facial-login"
                className="cursor-pointer bg-primary hover:bg-secondary-100 text-white font-bold py-2 px-11 rounded focus:outline-none focus:shadow-outline"
              >
                Tap for Facial Login
              </label>
              {/* <p className="ml-2 text-gray-600 italic">
                Upload your facial data for login.
              </p> */}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-primary hover:bg-secondary-100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-primary hover:text-secondary-100"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
    </div>
    
  );
};

export default LoginForm;