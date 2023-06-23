import React, { useEffect, useState } from 'react';
import './App.css'

const Countdown = () => {
    const [countdown, setCountdown] = useState(15 * 60); // Durasi total countdown (15 menit = 900 detik)
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 0) {
            return 15 * 60; // Jika countdown mencapai 0, ulangi dari awal
          } else {
            return prevCountdown - 1;
          }
        });
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
  
      return { minutes: formattedMinutes, seconds: formattedSeconds };
    };

  const { minutes, seconds } = formatTime(countdown);

  return (
    <span className="countdown font-mono text-xl mt-8">
    <span style={{"--value":minutes}}></span>m
    <span style={{"--value":seconds}}></span>s
    </span>
  );
};

export default Countdown;
