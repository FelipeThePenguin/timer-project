import { useState } from 'react';
import './Header.css';
import { PaintIcon } from './icons/PaintIcon';
import { ModeIcon } from './icons/ModeIcon';
import Hue from '@uiw/react-color-hue';

const moreIcon = (
  <svg
  viewBox="0 0 24 24"
  fill="currentColor"
  className="more-icon"
>
  <path d="M12 16a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM10 6a2 2 0 1 0 2-2 2 2 0 0 0-2 2Zm0 6a2 2 0 1 0 2-2 2 2 0 0 0-2 2Z" />
 </svg>
);

export function Header({hue, setHue}) {
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
     <span className="project-title">Timer Project</span>
     <div 
      className="customization-anchor"
      onClick={customizeTimer}
    >{moreIcon}</div>
     <div className="customization-options">
       <button onClick={() => setIsEditingColor(isEditingColor ? false : true)}>
         <PaintIcon />
         <span>Paint</span>
        </button>
       <button>
         <ModeIcon />
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
         }}>Set</span>
       </div>
       
      </div>
     </div>
   </header>
  )
}