import { useState } from 'react'
import './App.css'
import { Timer } from './components/Timer';
import { Controls } from './components/Controls';
import { Header } from './components/Header';

function App() {
  const [totalMs, setTotalMs] = useState(undefined);
  const [timerPlaying, setTimerPlaying] = useState(false);
  const [timerValues, setTimerValues] = useState({});
  
  return (
    <div className="app-container">
      <div className="top-row">
      <Header />
      <Timer 
      totalMs={totalMs}
      setTotalMs={setTotalMs}
      timerPlaying={timerPlaying}
      setTimerValues={setTimerValues}
      timerValues={timerValues}
      />
      </div>
      <Controls 
       totalMs={totalMs}
       setTotalMs={setTotalMs}
       setTimerPlaying={setTimerPlaying}
       timerPlaying={timerPlaying}
       timerValues={timerValues}
       setTimerValues={setTimerValues}
      />
    </div>
  );
}

export default App
