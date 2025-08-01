import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  // TODO: Add your state variables here using useState
  // const [inputSeconds, setInputSeconds] = useState<number>(0);
  // const [timeLeft, setTimeLeft] = useState<number>(0);
  // const [isRunning, setIsRunning] = useState<boolean>(false);
  // const [originalTime, setOriginalTime] = useState<number>(0);

  // TODO: Implement time formatting function
  // const formatTime = (seconds: number): string => {
  //   // Format seconds to mm:ss
  // };

  // TODO: Implement input change handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle input change
    console.log('Input changed:', e.target.value);
  };

  // TODO: Implement start button handler
  const handleStart = () => {
    // Start the countdown
    console.log('Start clicked');
  };

  // TODO: Implement reset button handler
  const handleReset = () => {
    // Reset the timer
    console.log('Reset clicked');
  };

  // TODO: Implement useEffect for countdown logic
  // useEffect(() => {
  //   // Add your countdown logic here
  // }, [dependencies]);

  return (
    <div className="timer-container">
      <input
        type="number"
        placeholder="Enter seconds"
        onChange={handleInputChange}
        // TODO: Add value and disabled props
        min="0"
      />
      <div className="time-display">
        {/* TODO: Display formatted time or "Time's up!" message */}
        00:00
      </div>
      <div className="buttons">
        <button
          onClick={handleStart}
        // TODO: Add disabled prop
        >
          Start
        </button>
        <button
          onClick={handleReset}
        // TODO: Add disabled prop
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;