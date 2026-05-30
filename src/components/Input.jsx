import { useRef, useState } from 'react';
import './Input.css';

export function Input({ 
  setTimerValues
}) {
  const [timeValue, setTimeValue] = useState({
    hourValue: '',
    minuteValue: '',
    secondValue: ''
  });
  const hourInput = useRef(null);
  const minuteInput = useRef(null);
  const secondInput = useRef(null);
  
  function getValues() {
    const hourValue = hourInput.current.value;
    const minuteValue = minuteInput.current.value;
    const secondValue = secondInput.current.value;
    
    const timeValues = [hourValue, minuteValue, secondValue];
    
    setTimeValue({
      hourValue,
      minuteValue,
      secondValue 
    });
    
    setTimerValues(timeValues);
  }
  
  return (
   <div className="input-container">
    <div>
     <input 
      type="number"
      placeholder="Hour"
      value={timeValue.hourValue}
      ref={hourInput}
      onChange={getValues}
      className="timer-input"
     />
     <span>h</span>
    </div>
    <div>
     <input 
      type="number"
      placeholder="Minute"
      value={timeValue.minuteValue}
      ref={minuteInput}
      onChange={getValues}
      className="timer-input"
     />
     <span>m</span>
     </div>
     <div>
     <input 
      type="number"
      placeholder="Seconds"
      value={timeValue.secondValue}
      ref={secondInput}
      onChange={getValues}
      className="timer-input"
     />
     <span>s</span>
     </div>
   </div>
  );
}