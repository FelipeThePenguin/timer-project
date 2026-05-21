import { useRef, useEffect } from 'react';
import { Input } from './Input';
import './Timer.css';
import { formatTime } from '../utils/formatTime';

export function Timer({ 
  totalSeconds, 
  setTotalSeconds, 
  timerPlaying,
  timerFinished, 
  setAllowTimer,
  milliseconds}) {
  const wheel = useRef(null);
  const spinner = useRef(null);
  let originalTotalSeconds = useRef(totalSeconds);
  
  useEffect(() => {
    originalTotalSeconds.current = totalSeconds;
  }, [timerPlaying]);
  
  useEffect(() => {
    const timeLapsed = totalSeconds * 1000 + milliseconds;
    const percentage = (timeLapsed / (originalTotalSeconds.current * 1000)) * 100;
    
    wheel.current.style.backgroundImage = `
     conic-gradient(
      red 0%, red ${percentage}%,
      transparent 0%, transparent ${100 - percentage}%
     )
    `;
    
    spinner.current.style.rotate = `${percentage * 3.6}deg`;
    
    if (totalSeconds === 0) {
      wheel.current.style.background = 'transparent';
    }
  }, [milliseconds]);
    
  return (
  <div className="wheel" ref={wheel}>
   <div className="timer-container" >
     {timerPlaying 
      ? <p>
         {timerFinished
          ? 'Timer has expired'
          : formatTime(totalSeconds)}
        </p>
      : <Input 
          setTotalSeconds={setTotalSeconds}
          setAllowTimer={setAllowTimer}/>
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