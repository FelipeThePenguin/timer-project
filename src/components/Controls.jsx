import { useRef } from 'react';
import { checkTimer } from '../utils/timerAllowed.js';

export function Controls({ 
    totalMs,
    setTotalMs,
    setTimerPlaying,
    timerPlaying,
    setTimerFinished,
    timerFinished,
    timerValues
  }) {
  const audioInput = useRef(null);
  const audioElem = useRef(null);
  let interval = useRef(undefined);
  let currentMs = useRef(undefined);
  
  function resetValues() {
    if (timerFinished) {
      setTimerPlaying(false);
      setTimerFinished(false);
      return;
    }
    
    clearInterval(interval.current);
    interval.current = undefined;
    currentMs.current = undefined;
    audioElem.current.currentTime = 0;
  }
  
  function toggleButton() {
    const currentInterval = interval.current;
    const timer = checkTimer(timerValues);
    
    if (!timer.isAllowed) {
      alert(timer.reason);
      return;
    }
    
    currentMs.current = currentMs.current ?? timer.value;
    setTimerPlaying(true);
    
    if (timerFinished) {
      setTimerPlaying(false);
      setTimerFinished(false);
      audioElem.current.play().then(() => {audioElem.current.pause()});
      return;
    }
    
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = undefined;
      return;
    }
    
    interval.current = setInterval(() => {
      currentMs.current -= 5;
      setTotalMs(currentMs.current);

      if (currentMs.current === 0) {
        resetValues();
        setTimerFinished(true);
        audioElem.current.play();
        interval.current = undefined;
      }
    }, 5);
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
    if (interval.current) {
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