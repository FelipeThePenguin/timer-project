import { useState, useEffect } from 'react'
import './App.css'
import { Timer } from './components/Timer';
import { Controls } from './components/Controls';

function App() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [timerPlaying, setTimerPlaying] = useState(false);
  const [timerOngoing, setTimerOngoing] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);
  const [allowTimer, setAllowTimer] = useState(true);
  
  useEffect(() => {
  }, [allowTimer])
  
  return (
    <div>
      <Timer 
      totalSeconds={totalSeconds}
      setTotalSeconds={setTotalSeconds}
      timerPlaying={timerPlaying}
      timerFinished={timerFinished}
      setAllowTimer={setAllowTimer}
      />
      <Controls 
       totalSeconds={totalSeconds}
       setTotalSeconds={setTotalSeconds}
       setTimerPlaying={setTimerPlaying}
       timerOngoing={timerOngoing}
       setTimerOngoing={setTimerOngoing}
       setTimerFinished={setTimerFinished}
       timerFinished={timerFinished}
       allowTimer={allowTimer}
      />
    </div>
  );
}

export default App
