import { useRef, useState } from 'react';
import './Input.css';
import { isFloat } from '../utils/types'

export function Input({ setTotalMs, setAllowTimer }) {
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
    
    for (let i = 0; i < timeValues.length; i++) {
      const time = timeValues[i];
      if (
          Number(time) > 100 || 
          Number(time) < 0 || 
          isFloat(Number(time))
         ) {
        setAllowTimer(false);
        return;
      }
    }
    
    const totalSeconds = Number(hourValue) * 3600 + Number(minuteValue) * 60 + Number(secondValue);
    setTotalMs(totalSeconds * 1000);
    setAllowTimer(true);
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