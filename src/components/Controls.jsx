import { useState } from 'react';

export function Controls({ 
  totalSeconds,
  setTotalSeconds,
  timerPlaying,
  setTimerPlaying,
  timerOngoing,
  setTimerOngoing
}) {
  const [intervalId, setIntervalId] = useState(0);
  let interval;
  let currentSeconds = totalSeconds;
  
  function resetValues() {
    clearInterval(interval ?? intervalId);
    currentSeconds = 0;
    setTotalSeconds(0);
    setTimerPlaying(false);
    setTimerOngoing(false);
    console.log('I have reset:', interval, intervalId);
  }
  
  function toggleButton() {
    setTimerPlaying(true);
    setTimerOngoing(timerOngoing ? false : true);
    
    if (timerOngoing) {
      clearInterval(intervalId);
      console.log('I cleared:', intervalId);
      return;
    }
    
      interval = setInterval(() => {
      currentSeconds--;
      setTotalSeconds(currentSeconds);
      
      if (currentSeconds === 0) {
        resetValues();
        alert('Timer has expired');
      }
    }, 1000);
    setIntervalId(interval);
    console.log("Made interval: ", interval);
  }
  
  function restartTimer() {
    resetValues();
  }
  
  return (
    <div>
      <button onClick={restartTimer}>Restart</button>
      <button onClick={toggleButton}>Play</button>
      <button>Sound</button>
    </div>
  );
}