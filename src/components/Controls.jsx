import { useRef } from 'react';

export function Controls({ 
    totalMs,
    setTotalMs,
    setTimerPlaying,
    timerPlaying,
    setTimerFinished,
    timerFinished,
    allowTimer
  }) {
  const audioInput = useRef(null);
  const audioElem = useRef(null);
  let interval = useRef(undefined);
  let currentMs = totalMs;
  
  function resetValues() {
    if (timerFinished) {
      setTimerPlaying(false);
      setTimerFinished(false);
      return;
    }
    
    clearInterval(interval.current);
    console.log(`I cleared interval: ${interval.current} from Reset Function`);
    interval.current = undefined;
    audioElem.current.currentTime = 0;
  }
  
  function toggleButton() {
    const currentInterval = interval.current;
    
    if (currentMs < 5000 && !timerFinished && !currentInterval && !timerPlaying) {
      alert('Timer must last longer than 5 seconds');
      return;
    }
    
    if (!allowTimer) {
      alert('Please enter a whole number in the inputs between 0-99');
      return;
    }
    
    if (timerFinished) {
      setTimerPlaying(false);
      setTimerFinished(false);
      audioElem.current.play().then(() => {audioElem.current.pause()});
      return;
    }
    
    setTimerPlaying(true);
    console.log("Looking for:", interval.current);
    
    if (interval.current) {
      clearInterval(interval.current);
      console.log("I cleared interval:", interval.current, "from If statement");
      interval.current = undefined;
      return;
    }
    
    interval.current = currentInterval ? false : true;
    
    interval.current = setInterval(() => {
      currentMs -= 5;
      setTotalMs(currentMs);

      if (currentMs === 0) {
        resetValues();
        setTimerFinished(true);
        audioElem.current.play();
        interval.current = undefined;
      }
    }, 5);
    console.log("Created interval:", interval.current);
  }
  
  function restartTimer() {
    resetValues();
    setTimerPlaying(false);
    audioElem.current.play().then(() => {audioElem.current.pause()});
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
      console.log('Pause the timer first before adding an alarm sound');
      return;
    }
    audioInput.current.click();
  }
  
  return (
    <div>
      <button onClick={restartTimer}>Restart</button>
      <button onClick={toggleButton}>Play</button>
      <button onClick={setSound}>Sound</button>
      <input 
       type="file" 
       allow="audio/*" 
       style={{display: 'none'}}
       ref={audioInput}
       onChange={changeAudio}
      />
      <audio 
       loop
       ref={audioElem}
      />
    </div>
  );
}