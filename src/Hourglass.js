import React, { useEffect, useState } from 'react';
import './hourglass.css';

const Hourglass = () => {
  const [countdown, setCountdown] = useState(900); // Durasi total countdown (15 menit = 900 detik)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000); // Mengurangi countdown setiap 1 detik

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div>
      <div className="hourglass"></div>
    </div>
  );
};

export default Hourglass;
