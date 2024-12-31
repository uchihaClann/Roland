import React, { useEffect, useRef } from "react";

const EyeTracking = () => {
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const eyes = [leftPupilRef.current, rightPupilRef.current];

      eyes.forEach((eye) => {
        if (eye) {
          const rect = eye.getBoundingClientRect();
          const eyeX = rect.left + rect.width / 2;
          const eyeY = rect.top + rect.height / 2;

          const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
          const distance = Math.min(10, Math.hypot(e.clientX - eyeX, e.clientY - eyeY)); // Limit pupil movement
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;

          eye.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="wrapper relative flex items-center justify-center h-screen">
      {/* Directional Sensors */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
        <div
          key={index}
          className={`btn-sensor absolute`}
          style={{
            transform: `rotate(${angle}deg) translate(100px)`,
          }}
        ></div>
      ))}

      {/* Eye Buttons */}
      <div className="flex space-x-8">
        <button className="btn-button relative w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
          <div className="btn-lid absolute inset-0 bg-gray-200 rounded-full"></div>
          <div
            ref={leftPupilRef}
            className="btn-pupil w-12 h-12 bg-black rounded-full transition-transform"
          ></div>
        </button>
        <button className="btn-button relative w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
          <div className="btn-lid absolute inset-0 bg-gray-200 rounded-full"></div>
          <div
            ref={rightPupilRef}
            className="btn-pupil w-12 h-12 bg-black rounded-full transition-transform"
          ></div>
        </button>
      </div>
    </div>
  );
};

export default EyeTracking;
