import { useState } from 'react'
import './App.css'
import { Timer } from './components/Timer';
import { Controls } from './components/Controls';
import { Header } from './components/Header';

function App() {
  const [totalMs, setTotalMs] = useState(undefined);
  const [timerPlaying, setTimerPlaying] = useState(false);
  const [timerValues, setTimerValues] = useState({});
  const [hue, setHue] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  
  const onDarkMode = darkMode ? 'dark-mode' : '';
  
  return (
    <div className={`app-container ${onDarkMode}`}>
      <div className="top-row">
      <Header
      hue={hue}
      setHue={setHue}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      />
      <Timer 
      totalMs={totalMs}
      setTotalMs={setTotalMs}
      timerPlaying={timerPlaying}
      setTimerValues={setTimerValues}
      timerValues={timerValues}
      hue={hue}
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
