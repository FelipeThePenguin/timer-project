import { useState } from 'react'
import './App.css'
import { Timer } from './components/Timer';
import { Controls } from './components/Controls';

function App() {
  const [totalMs, setTotalMs] = useState(0);
  const [timerPlaying, setTimerPlaying] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);
  const [allowTimer, setAllowTimer] = useState(true);
  
  return (
    <div className="app-container">
      <Timer 
      totalMs={totalMs}
      setTotalMs={setTotalMs}
      timerPlaying={timerPlaying}
      timerFinished={timerFinished}
      setAllowTimer={setAllowTimer}
      />
      <Controls 
       totalMs={totalMs}
       setTotalMs={setTotalMs}
       setTimerPlaying={setTimerPlaying}
       timerPlaying={timerPlaying}
       setTimerFinished={setTimerFinished}
       timerFinished={timerFinished}
       allowTimer={allowTimer}
      />
    </div>
  );
}

export default App
