import { useState } from 'react';
import './Header.css';
import { PaintIcon } from './icons/PaintIcon';
import { ModeIcon } from './icons/ModeIcon';
import Hue from '@uiw/react-color-hue';

const moreIcon = (
  <svg
  viewBox="0 0 24 24"
  fill="currentColor"
  className="header-icon"
>
  <path d="M12 16a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM10 6a2 2 0 1 0 2-2 2 2 0 0 0-2 2Zm0 6a2 2 0 1 0 2-2 2 2 0 0 0-2 2Z" />
 </svg>
);

const closeIcon = (
  <svg
  viewBox="0 0 24 24"
  fill="currentColor"
  className="header-icon"
>
  <path d="M20.746 3.329a1 1 0 0 0-1.414 0L12.037 10.623 4.743 3.329a1 1 0 1 0-1.414 1.414l7.294 7.294-7.294 7.294a1 1 0 1 0 1.414 1.414l7.294-7.294 7.294 7.294a1 1 0 1 0 1.414-1.414l-7.294-7.294 7.294-7.294a1 1 0 0 0 0-1.414Z" />
 </svg>
);

const githubLink = (
<a
 href="https://github.com/FelipeThePenguin/timer-project.git"
 target="_blank"
 className="github-link"
>
  <svg
  viewBox="0 0 1024 1024"
  fill="currentColor"
  className="github-icon"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
    transform="scale(64)"
  />
</svg>
</a>
);

export function Header({hue, setHue, darkMode, setDarkMode}) {
  const [isCustomizingTimer, setIsCustomizingTimer] = useState(false);
  const [isEditingColor, setIsEditingColor] = useState(false);
  const [selectedHue, setSelectedHue] = useState(hue);
  
  function customizeTimer() {
   setIsCustomizingTimer(isCustomizingTimer ? false : true);
  }
  
  const customizingTimer = isCustomizingTimer ? 'is-customizing' : '';
  const editingColor = isEditingColor ? 'editing-color' : '';
  
  return (
   <header className={`timer-header ${customizingTimer} ${editingColor}`}>
     <p className="project-title">
       <span>Timer Project</span> {githubLink}
     </p>
     <div 
      className="customization-anchor"
      onClick={customizeTimer}
    >{isCustomizingTimer ? closeIcon : moreIcon}</div>
     <div className="customization-options">
       <button onClick={() => setIsEditingColor(isEditingColor ? false : true)}>
         <PaintIcon />
         <span>Paint</span>
        </button>
       <button onClick={() => {
       setDarkMode(darkMode ? false : true)
       setIsCustomizingTimer(false);
       }}>
         <ModeIcon darkMode={darkMode} />
         <span>Mode</span>
       </button>
     </div>
     <div className="modal-container">
      <div className="modal-color">
       <p className="color-message">Select a Color</p>
       
       <div className="color-display">
       <Hue hue={selectedHue} onChange={(newHue) => setSelectedHue(newHue.h)} width={200} height={16}/>
       <div className="selected-color" style={{background: `hsl(${selectedHue}, 100%, 50%)`}}></div>
       </div>
       
       <div className="color-buttons">
         <span onClick={() => setIsEditingColor(false)}>Cancel</span>
         <span onClick={() => 
         {setIsEditingColor(false);
          setHue(selectedHue);
          setIsCustomizingTimer(false);
         }}>Set</span>
       </div>
       
      </div>
     </div>
   </header>
  )
}