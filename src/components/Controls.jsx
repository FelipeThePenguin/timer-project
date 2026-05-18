import { useState } from 'react';

export function Controls({ 
  totalSeconds,
  setTotalSeconds,
  setTimerPlaying,
  timerOngoing,
  setTimerOngoing,
  setTimerFinished,
  timerFinished,
  allowTimer
}) {
  const [intervalId, setIntervalId] = useState(0);
  let interval;
  let currentSeconds = totalSeconds;
  
  function resetValues() {
    
    if (timerFinished) {
      setTimerPlaying(false);
      setTimerFinished(false);
      return;
    }
    
    clearInterval(interval ?? intervalId);
    setTimerOngoing(false);
  }
  
  function toggleButton() {
    if (!allowTimer) {
      alert('Please enter a whole number in the inputs between 0-99');
      return;
    }
    
    if (timerFinished) {
      setTimerPlaying(false);
      setTimerFinished(false);
      return;
    }
    
    setTimerPlaying(true);
    setTimerOngoing(timerOngoing ? false : true);
    
    if (timerOngoing) {
      clearInterval(intervalId);
      return;
    }
    
      interval = setInterval(() => {
      currentSeconds--;
      setTotalSeconds(currentSeconds);
      
      if (currentSeconds === 0) {
        resetValues();
        setTimerFinished(true);
      }
    }, 1000);
    setIntervalId(interval);
  }
  
  function restartTimer() {
    resetValues();
    setTimerPlaying(false);
  }
  
  return (
    <div>
      <button onClick={restartTimer}>Restart</button>
      <button onClick={toggleButton}>Play</button>
      <button>Sound</button>
    </div>
  );
}