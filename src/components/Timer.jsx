import { Input } from './Input'

function formatTime(totalSeconds) {
  let secondValue = totalSeconds % 60;
  const secondString = String(secondValue).padStart(2, '0');
  secondValue = (totalSeconds - secondValue) / 60;
  
  let minuteValue = (secondValue) % 60;
  const minuteString = String(minuteValue).padStart(2, '0');
  minuteValue = (secondValue - minuteValue) / 60;
  
  let hourValue = (minuteValue);
  const hourString = String(hourValue).padStart(2, '0');
  
  return `${hourString}:${minuteString}:${secondString}`;
}

export function Timer({ totalSeconds, setTotalSeconds, timerPlaying, timerOngoing, timerFinished }) {
  return (
   <div>
     {timerPlaying 
      ? <p>
         {timerFinished
          ? 'Timer has expired'
          : formatTime(totalSeconds)}
        </p>
      : <Input setTotalSeconds={setTotalSeconds}/>
     }
   </div>
  );
}