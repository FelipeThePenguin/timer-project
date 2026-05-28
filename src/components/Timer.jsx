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
  timerValues,
  hue
}) {
  const wheel = useRef(null);
  const spinner = useRef(null);
  const color = `hsl(${hue}, 100%, 50%)`;
  let originalTotalMs = useRef(0);
  
  useEffect(() => {
    originalTotalMs.current = checkTimer(timerValues).value;
  }, [timerPlaying]);
  
  useEffect(() => {
    const timeLapsed = totalMs;
    const percentage = 
     totalMs !== undefined 
      ? (timeLapsed / originalTotalMs.current) * 100 
      : 100;
    
    wheel.current.style.backgroundImage = `
     conic-gradient(
      ${color} 0%, ${color} ${percentage}%,
      transparent 0%, transparent ${100 - percentage}%
     )
    `;
    
    spinner.current.style.rotate = `${percentage * 3.6}deg`;
    
    if (totalMs === 0) {
      wheel.current.style.background = 'transparent';
    }
  }, [totalMs, hue]);
    
  return (
  <div className="wheel" ref={wheel}>
   <div className="timer-container" >
     {timerPlaying 
      ? <p className="timer-clock">
         {totalMs == 0
          ? 'Timer has expired!'
          : formatTime(totalMs ?? 0)}
        </p>
      : <Input 
          setTotalMs={setTotalMs}
          setTimerValues={setTimerValues}/>
     }
    </div>
    <div className="circle-container">
      <div className="circle" style={{background: color}}></div>
    </div>
    <div className="circle-container" ref={spinner}>
      <div className="circle" style={{background: color}}></div>
    </div>
   </div>
  );
}