import { useState, useRef, useEffect } from "react";
import icms from "../assets/icms.png";
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
// import logo from "../assets/logo.svg";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [facialData, setFacialData] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   let videoStream;

  //   const captureFrames = () => {
  //     if (!isCapturing) return; // Stop capturing frames if isCapturing is false

  //     const video = videoRef.current;
  //     const canvas = canvasRef.current;
  //     const context = canvas.getContext('2d');
  //     const captureInterval = 100; // Interval in milliseconds

  //     // Set canvas dimensions to match video dimensions
  //     canvas.width = video.videoWidth;
  //     canvas.height = video.videoHeight;

  //     // Function to capture and encode video frames
  //     const captureFrame = () => {
  //       context.drawImage(video, 0, 0, canvas.width, canvas.height);
  //       const imageData = canvas.toDataURL('image/jpeg'); // Encode frame as JPEG image
  //       // Send imageData to backend (e.g., via HTTP POST or WebSocket)
  //       // ...
  //       Axios.get("http://localhost:3001/facialData", {
  //         params: {
  //           image: imageData,
  //         },
  //       }).then((response) => {
  //         console.log(response.data);
  //         setFacialData(response.data);
  //         if(response.data === "Login failed. Email not found."){
  //           alert(response.data);
  //         }else{
  //           const loginTime = new Date()
  //           localStorage.setItem("user", JSON.stringify(response.data));
  //           localStorage.setItem("loginTime", loginTime);
  //           console.log(localStorage.getItem("user"));
  //           navigate('/dashboard');
  //         }
  //         setIsStart(false);
  //         setIsCapturing(false);
  //       });
  //       console.log(imageData);
  //     };

  //     // Capture frames at the specified interval
  //     const captureTimer = setInterval(captureFrame, captureInterval);

  //     // Clean up timer when component unmounts or when isCapturing becomes false
  //     return () => clearInterval(captureTimer);
  //   };

  //   const startVideoCapture = async () => {
  //     try {
  //       if (videoStream) {
  //         videoStream.getTracks().forEach((track) => track.stop()); // Stop previous video stream
  //       }

  //       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  //       videoRef.current.srcObject = stream;
  //       videoStream = stream;
  //       videoRef.current.play().catch((error) => {
  //         console.error('Error playing video:', error);
  //         setIsCapturing(false); // Set capture status to false if there's an error
  //       });
  //       setIsCapturing(true); // Set capture status to true
  //     } catch (error) {
  //       console.error('Error accessing webcam:', error);
  //     }
  //   };

  //   if (isStart) {
  //     startVideoCapture(); // Start capturing video if isStart is true
  //   }

  //   if (isCapturing) {
  //     captureFrames(); // Start capturing and encoding frames if isCapturing is true
  //   }

  //   return () => {
  //     setIsCapturing(false); // Set capture status to false when the component unmounts
  //   };
  // }, [isCapturing, isStart]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handleFacialDataUpload = (e) => {
    e.preventDefault();
    Axios.get("http://localhost:3001/loginInfo", {
    }).then((response) => {
      console.log(response.data);
      var loginData = response.data;
      var password = loginData.password;
      var email = loginData.email;
      setEmail(email);
      setPassword(password);
      // setFacialData(response.data);
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform facial recognition here
    // You can use the facialData and process it accordingly
    console.log(email);
    Axios.get("http://localhost:3001/login", {
      params: {
        email: email,
        password: password,
      },
    }).then((response) => {
      if (response.data === "Login failed. Email not found.") {
        alert(response.data);
      } else {
        console.log(response.data);
        const loginTime = new Date()
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("loginTime", loginTime);
        console.log(localStorage.getItem("user"));
        navigate('/dashboard');
      }
    });

    // Clear form fields
    setEmail("");
    setPassword("");
    setFacialData(null);
    
    
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
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
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
            {/* <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="facial-login"
            >
              Biometrics Login
            </label> */}
           
            <div className="mt-4 items-center">
              <button  className="cursor-pointer bg-primary hover:bg-secondary-100 text-white font-bold py-2 px-11 rounded focus:outline-none focus:shadow-outline"
        onClick={handleFacialDataUpload}>Biometric Authentication</button>
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