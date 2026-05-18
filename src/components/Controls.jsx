import { useState } from 'react';

export function Controls({ 
  totalSeconds,
  setTotalSeconds,
  timerPlaying,
  setTimerPlaying,
  timerOngoing,
  setTimerOngoing,
  setTimerFinished,
  timerFinished
}) {
  const [intervalId, setIntervalId] = useState(0);
  let interval;
  let currentSeconds = totalSeconds;
  
  function resetValues() {
    
    if (timerFinished) {
      console.log('I will go to input');
      setTimerPlaying(false);
      setTimerFinished(false);
      return;
    }
    
    clearInterval(interval ?? intervalId);
    setTimerOngoing(false);
    console.log('Timer has Finished:', timerFinished);
    console.log('I have reset:', interval, intervalId);
  }
  
  function toggleButton() {
    if (timerFinished) {
      setTimerPlaying(false);
      setTimerFinished(false);
      return;
    }
    
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
        setTimerFinished(true);
      }
    }, 1000);
    setIntervalId(interval);
    console.log("Made interval: ", interval);
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