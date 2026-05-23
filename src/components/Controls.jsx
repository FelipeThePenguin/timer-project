import { useState, useRef } from 'react';

export function Controls({ 
    totalMs,
    setTotalMs,
    setTimerPlaying,
    timerPlaying,
    setTimerFinished,
    timerFinished,
    allowTimer
  }) {
  const [intervalId, setIntervalId] = useState(0);
  const [timerOngoing, setTimerOngoing] = useState(false);
  const audioInput = useRef(null);
  const audioElem = useRef(null);
  let interval;
  let currentMs = totalMs;
  
  function resetValues() {
    
    if (timerFinished) {
      setTimerPlaying(false);
      setTimerFinished(false);
      return;
    }
    
    clearInterval(interval ?? intervalId);
    setTimerOngoing(false);
    audioElem.current.currentTime = 0;
  }
  
  function toggleButton() {
    if (currentMs < 5000 && !timerFinished && !timerOngoing && !timerPlaying) {
      alert('Timer must last longer than 5 seconds');
      return;
    }
    
    if (!allowTimer) {
      alert('Please enter a whole number in the inputs between 0-99');
      return;
    }
    
    if (timerFinished) {
      setTimerPlaying(false);
      setTimerFinished(false);
      audioElem.current.play().then(() => {audioElem.current.pause()});
      return;
    }
    
    setTimerPlaying(true);
    setTimerOngoing(timerOngoing ? false : true);
    
    if (timerOngoing) {
      clearInterval(intervalId);
      return;
    }
    
      interval = setInterval(() => {
      currentMs -= 5;
      setTotalMs(currentMs);

      if (currentMs === 0) {
        resetValues();
        setTimerFinished(true);
        audioElem.current.play();
      }
    }, 5);
    setIntervalId(interval);
  }
  
  function restartTimer() {
    resetValues();
    setTimerPlaying(false);
    audioElem.current.play().then(() => {audioElem.current.pause()});
  }
  
  function changeAudio() {
    const audioFile = audioInput.current.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      audioElem.current.src = reader.result;
    };
    reader.readAsDataURL(audioFile);
  };
  
  function setSound() {
    if (timerOngoing) {
      console.log('Pause the timer first before adding an alarm sound');
      return;
    }
    
    audioInput.current.click();
  }
  
  return (
    <div>
      <button onClick={restartTimer}>Restart</button>
      <button onClick={toggleButton}>Play</button>
      <button onClick={setSound}>Sound</button>
      <input 
       type="file" 
       allow="audio/*" 
       style={{display: 'none'}}
       ref={audioInput}
       onChange={changeAudio}
      />
      <audio 
       loop
       ref={audioElem}
      />
    </div>
  );
}