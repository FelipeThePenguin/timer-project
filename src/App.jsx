import { useState } from 'react'
import './App.css'
import { Timer } from './components/Timer';
import { Controls } from './components/Controls';

function App() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [timerPlaying, setTimerPlaying] = useState(false);
  const [timerOngoing, setTimerOngoing] = useState(false);
  
  return (
    <div>
      <Timer 
      totalSeconds={totalSeconds}
      setTotalSeconds={setTotalSeconds}
      timerPlaying={timerPlaying}
      timerOngoing={timerOngoing}
      />
      <Controls 
       totalSeconds={totalSeconds}
       setTotalSeconds={setTotalSeconds}
       setTimerPlaying={setTimerPlaying}
       timerPlaying={timerPlaying}
       timerOngoing={timerOngoing}
       setTimerOngoing={setTimerOngoing}
      />
    </div>
  );
}

export default App
