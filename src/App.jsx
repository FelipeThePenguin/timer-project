import { useState } from 'react'
import './App.css'
import { Timer } from './components/Timer';
import { Controls } from './components/Controls';

function App() {
  const [totalMs, setTotalMs] = useState(0);
  const [timerPlaying, setTimerPlaying] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);
  const [timerValues, setTimerValues] = useState({});
  
  return (
    <div className="app-container">
      <Timer 
      totalMs={totalMs}
      setTotalMs={setTotalMs}
      timerPlaying={timerPlaying}
      timerFinished={timerFinished}
      setTimerValues={setTimerValues}
      timerValues={timerValues}
      />
      <Controls 
       totalMs={totalMs}
       setTotalMs={setTotalMs}
       setTimerPlaying={setTimerPlaying}
       timerPlaying={timerPlaying}
       setTimerFinished={setTimerFinished}
       timerFinished={timerFinished}
       timerValues={timerValues}
       setTimerValues={setTimerValues}
      />
    </div>
  );
}

export default App
