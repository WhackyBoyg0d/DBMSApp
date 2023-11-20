import React, { useRef, useEffect, useState } from 'react';

const VideoCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCapturing, setIsCapturing] = useState(false);

  useEffect(() => {
    let videoStream;

    const captureFrames = () => {
      if (!isCapturing) return; // Stop capturing frames if isCapturing is false

      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      const captureInterval = 100; // Interval in milliseconds

      // Set canvas dimensions to match video dimensions
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Function to capture and encode video frames
      const captureFrame = () => {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL('image/jpeg'); // Encode frame as JPEG image
        // Send imageData to backend (e.g., via HTTP POST or WebSocket)
        // ...
      };

      // Capture frames at the specified interval
      const captureTimer = setInterval(captureFrame, captureInterval);

      // Clean up timer when component unmounts or when isCapturing becomes false
      return () => clearInterval(captureTimer);
    };

    const startVideoCapture = async () => {
      try {
        if (videoStream) {
          videoStream.getTracks().forEach((track) => track.stop()); // Stop previous video stream
        }

        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        videoStream = stream;
        videoRef.current.play().catch((error) => {
          console.error('Error playing video:', error);
          setIsCapturing(false); // Set capture status to false if there's an error
        });
        setIsCapturing(true); // Set capture status to true
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };

    if (isCapturing) {
      captureFrames(); // Start capturing and encoding frames if isCapturing is true
    }

    return () => {
      setIsCapturing(false); // Set capture status to false when the component unmounts
    };
  }, [isCapturing]); // Trigger effect when isCapturing changes

  const handleStartCapture = () => {
    setIsCapturing(true);
  };

  return (
    <div>
      <video ref={videoRef} />

      {/* Add button to start capturing */}
      {!isCapturing && (
        <button onClick={handleStartCapture}>Start Capture</button>
      )}

      {isCapturing && (
        <div>
          <canvas ref={canvasRef} style={{ display: 'none' }} />

          {/* Add UI elements for displaying video and authentication result */}
          {/* ... */}
        </div>
      )}
    </div>
  );
};

export default VideoCapture;