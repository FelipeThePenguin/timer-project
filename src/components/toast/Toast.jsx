import { useRef } from 'react';
import './Toast.css';

export function Toast({message, toastTimeout, setToastActive}) {
  return (
   <div className="toast-container" onClick={
     () => {
       clearTimeout(toastTimeout.current);
       setToastActive(false);
     }
   }>
     {message}
   </div>
  );
}