import { useRef, useEffect } from 'react';
import { Input } from './Input';
import './Timer.css';
import { formatTime } from '../utils/formatTime';
import { checkTimer } from '../utils/timerAllowed.js';

export function Timer({ 
  totalMs, 
  setTotalMs, 
  timerPlaying,
  timerFinished, 
  setTimerValues,
  timerValues
}) {
  const wheel = useRef(null);
  const spinner = useRef(null);
  let originalTotalMs = useRef(0);
  
  useEffect(() => {
    originalTotalMs.current = checkTimer(timerValues).value;
  }, [timerPlaying]);
  
  useEffect(() => {
    const timeLapsed = totalMs;
    const percentage = (timeLapsed / originalTotalMs.current) * 100;
    
    wheel.current.style.backgroundImage = `
     conic-gradient(
      red 0%, red ${percentage}%,
      transparent 0%, transparent ${100 - percentage}%
     )
    `;
    
    spinner.current.style.rotate = `${percentage * 3.6}deg`;
    
    if (totalMs === 0) {
      wheel.current.style.background = 'transparent';
    }
  }, [totalMs]);
    
  return (
  <div className="wheel" ref={wheel}>
   <div className="timer-container" >
     {timerPlaying 
      ? <p>
         {timerFinished
          ? 'Timer has expired'
          : formatTime(totalMs)}
        </p>
      : <Input 
          setTotalMs={setTotalMs}
          setTimerValues={setTimerValues}/>
     }
    </div>
    <div className="circle-container">
      <div className="circle"></div>
    </div>
    <div className="circle-container" ref={spinner}>
      <div className="circle"></div>
    </div>
   </div>
  );
}