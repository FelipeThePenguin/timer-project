import { useRef, useState } from 'react';
import { checkTimer } from '../utils/timerAllowed.js';
import { BellIcon } from './icons/BellIcon.jsx';
import { RestartIcon } from './icons/RestartIcon.jsx';
import { MainIcon } from './icons/MainIcon.jsx';

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
  const [currentIcon, setCurrentIcon] = useState('play');
  
  function resetValues() {
    setTimerPlaying(false);
    setTotalMs(undefined);
    audioElem.current.play().then(() => {audioElem.current.pause()});
    
    clearInterval(interval.current);
    interval.current = undefined;
    currentMs.current = undefined;
    audioElem.current.currentTime = 0;
    setTimerValues({});
    setCurrentIcon('play');
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
      setCurrentIcon('play');
      return;
    }
    
    setCurrentIcon('pause');
    interval.current = setInterval(() => {
      currentMs.current -= 5;
      setTotalMs(currentMs.current);

      if (currentMs.current === 0) {
        setCurrentIcon('reset');
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
      <button onClick={resetValues}>
        <RestartIcon />
      </button>
      <button onClick={toggleButton}>
        <MainIcon current={currentIcon}/>
      </button>
      <button onClick={setSound}>
        <BellIcon />
      </button>
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