import { useState, useRef } from 'react';

export function Controls({ 
    totalSeconds,
    setTotalSeconds,
    setTimerPlaying,
    timerPlaying,
    timerOngoing,
    setTimerOngoing,
    setTimerFinished,
    timerFinished,
    allowTimer,
    setMilliseconds
  }) {
  const [intervalId, setIntervalId] = useState(0);
  const audioInput = useRef(null);
  const audioElem = useRef(null);
  let interval;
  let loopMs = 0;
  let currentSeconds = totalSeconds;
  
  function resetValues() {
    
    if (timerFinished) {
      setTimerPlaying(false);
      setTimerFinished(false);
      return;
    }
    
    clearInterval(interval ?? intervalId);
    setTimerOngoing(false);
    audioElem.current.currentTime = 0;
    loopMs = 0;
    setMilliseconds(0);
  }
  
  function toggleButton() {
    if (currentSeconds < 5 && !timerFinished && !timerOngoing && !timerPlaying) {
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
      if (loopMs !== 200) {
        loopMs++;
        setMilliseconds(totalSeconds - loopMs * 5);
        return;
      }
        
      currentSeconds--;
      setTotalSeconds(currentSeconds);
      loopMs = 0;
      setMilliseconds(0);
      
      if (currentSeconds === 0) {
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
    // const blob = new Blob([audioFile], {type: "audio/*"});
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