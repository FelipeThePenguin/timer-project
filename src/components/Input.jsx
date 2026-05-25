import { useRef, useState } from 'react';
import './Input.css';

export function Input({ 
  setTotalMs, 
  setAllowTimer,
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
     <input 
      type="number"
      placeholder="Hour"
      value={timeValue.hourValue}
      ref={hourInput}
      onChange={getValues}
     />
     <input 
      type="number"
      placeholder="Minute"
      value={timeValue.minuteValue}
      ref={minuteInput}
      onChange={getValues}
     />
     <input 
      type="number"
      placeholder="Seconds"
      value={timeValue.secondValue}
      ref={secondInput}
      onChange={getValues}
     />
   </div>
  );
}