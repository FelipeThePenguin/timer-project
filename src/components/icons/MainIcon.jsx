import { useRef } from 'react';
import './MainIcon.css';

const PlayIcon = (
 <svg
  viewBox="0 0 6 7"
  fill="currentColor"
  className="mainIcon"
>
  <path d="M5.495 2.573 1.501.142C.832-.265 0 .25 0 1.069V5.93c0 .82.832 1.334 1.501.928l3.994-2.43c.673-.41.673-1.444 0-1.855" />
</svg>
);

const PauseIcon = (
 <svg
  viewBox="0 0 24 24"
  fill="currentColor"
  className="mainIcon"
>
  <path d="M2 6c0-1.886 0-2.828.586-3.414C3.172 2 4.114 2 6 2s2.828 0 3.414.586C10 3.172 10 4.114 10 6v12c0 1.886 0 2.828-.586 3.414C8.828 22 7.886 22 6 22s-2.828 0-3.414-.586C2 20.828 2 19.886 2 18V6Z" />
  
  <path d="M14 6c0-1.886 0-2.828.586-3.414C15.172 2 16.114 2 18 2s2.828 0 3.414.586C22 3.172 22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414C20.828 22 19.886 22 18 22s-2.828 0-3.414-.586C14 20.828 14 19.886 14 18V6Z" />
</svg>
);

const ResetIcon = (
 <svg
  viewBox="0 0 483.48 483.48"
  fill="currentColor"
  className="mainIcon"
>
  <path d="M361.08 0H122.4C54.799 0 0 54.798 0 122.4v238.68c0 67.602 54.799 122.4 122.4 122.4h238.68c67.602 0 122.4-54.799 122.4-122.4V122.4C483.48 54.798 428.682 0 361.08 0Z" />
</svg>
);

const icons = {
  "play": PlayIcon,
  "pause": PauseIcon,
  "reset": ResetIcon
}

export function MainIcon({
  current
}) 
{
  let currentIcon = icons[current];
  
  return (
   <>
     {currentIcon}
   </>
  );
}