import { useRef, useState } from 'react';
import { checkTimer } from '../utils/timerAllowed.js';
import { BellIcon } from './icons/BellIcon.jsx';
import { RestartIcon } from './icons/RestartIcon.jsx';
import { MainIcon } from './icons/MainIcon.jsx';
import { Toast } from './toast/Toast';
import './Controls.css';

export function Controls({ 
    totalMs,
    setTotalMs,
    setTimerPlaying,
    timerValues,
    setTimerValues
  }) {
  const audioInput = useRef(null);
  const audioElem = useRef(null);
  let interval = useRef(undefined);
  let currentMs = useRef(undefined);
  const [currentIcon, setCurrentIcon] = useState('play');
  const [toastActive, setToastActive] = useState(false);
  const toastTimeout = useRef(undefined);
  const toastMessage = useRef(undefined);
  
  function callToast(message) {
    toastMessage.current = message;
    clearTimeout(toastTimeout.current);
    setToastActive(true);
    toastTimeout.current = setTimeout(() => {
      setToastActive(false);
    }, 2750);
  }
  
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
      callToast(timer.reason);
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
      callToast('Pause the timer first before adding an alarm sound');
      
      return;
    }
    audioInput.current.click();
  }
  
  const toastActiveClass = toastActive ? 'toast-active' : '';
  
  return (
    <div className={`button-container ${toastActiveClass}`}>
      <button onClick={resetValues} className="small-button">
        <RestartIcon />
      </button>
      <button onClick={toggleButton} className="main-button">
        <MainIcon current={currentIcon}/>
      </button>
      <button onClick={setSound} className="small-button">
        <BellIcon />
      </button>
      <input 
       type="file" 
       accept="audio/*" 
       style={{display: 'none'}}
       ref={audioInput}
       onChange={changeAudio}
      />
      <audio 
       loop
       ref={audioElem}
      />
      <Toast 
       message={toastMessage.current} 
       toastTimeout={toastTimeout}
       setToastActive={setToastActive}/>
    </div>
  );
}