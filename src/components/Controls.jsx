import { useRef } from 'react';
import { checkTimer } from '../utils/timerAllowed.js';

export function Controls({ 
    totalMs,
    setTotalMs,
    setTimerPlaying,
    timerPlaying,
    timerValues,
    setTimerValues
  }) {
  const audioInput = useRef(null);
  const audioElem = useRef(null);
  let interval = useRef(undefined);
  let currentMs = useRef(undefined);
  
  function resetValues() {
    setTimerPlaying(false);
    setTotalMs(undefined);
    audioElem.current.play().then(() => {audioElem.current.pause()});
    
    clearInterval(interval.current);
    interval.current = undefined;
    currentMs.current = undefined;
    audioElem.current.currentTime = 0;
    setTimerValues({});
  }
  
  function toggleButton() {
    if (totalMs == 0) {
      resetValues();
      return;
    }

    const timer = checkTimer(timerValues);
    
    if (!timer.isAllowed) {
      alert(timer.reason);
      return;
    }
    
    currentMs.current = currentMs.current ?? timer.value;
    setTimerPlaying(true);
    
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = undefined;
      return;
    }
    
    interval.current = setInterval(() => {
      currentMs.current -= 5;
      setTotalMs(currentMs.current);

      if (currentMs.current === 0) {
        audioElem.current.play();
        clearInterval(interval.current);
        interval.current = undefined;
      }
    }, 5);
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
      <button onClick={resetValues}>Restart</button>
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