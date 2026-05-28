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
  const wheelShadow = useRef(null);
  const spinner = useRef(null);
  const spinnerShadow = useRef(null);
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
    const spinnerBg = `
     conic-gradient(
      ${color} 0%, ${color} ${percentage}%,
      transparent 0%, transparent ${100 - percentage}%
     )
    `;
    
    wheel.current.style.backgroundImage = spinnerBg;
    wheelShadow.current.style.backgroundImage = spinnerBg;
    
    spinner.current.style.rotate = `${percentage * 3.6}deg`;
    spinnerShadow.current.style.rotate = `${percentage * 3.6}deg`;
    
    if (totalMs === 0) {
      wheel.current.style.background = 'transparent';
    }
  }, [totalMs, hue]);
    
  return (
  <>
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
      <div className="circle circle-1" style={{background: color}}></div>
    </div>
    <div className="circle-container" ref={spinner}>
      <div className="circle circle-2" style={{background: color}}></div>
    </div>
   </div>
   <div className="wheel-shadow" ref={wheelShadow}></div>
   <div className="circle-shadow-1 circle-shadow" style={{backgroundImage: `conic-gradient(transparent 0%, transparent 50%, ${color} 0%, ${color} 50%)`}}></div>
   <div className="circle-shadow-2 circle-shadow" style={{backgroundImage: `conic-gradient(${color} 0%, ${color} 50%, transparent 0%, transparent 50%)`}} ref={spinnerShadow}></div>
   </>
  );
}