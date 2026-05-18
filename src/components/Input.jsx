import { useRef, useState } from 'react';

export function Input({ setTotalSeconds }) {
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
    
    setTimeValue({
      hourValue,
      minuteValue,
      secondValue 
    });
    
    const totalSeconds = Number(hourValue) * 3600 + Number(minuteValue) * 60 + Number(secondValue);
    setTotalSeconds(totalSeconds);
  }
  
  return (
   <>
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
   </>
  );
}