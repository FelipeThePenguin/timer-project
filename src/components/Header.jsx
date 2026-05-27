import './Header.css'

const moreIcon = (
  <svg
  viewBox="0 0 24 24"
  fill="currentColor"
  className="more-icon"
>
  <path d="M12 16a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM10 6a2 2 0 1 0 2-2 2 2 0 0 0-2 2Zm0 6a2 2 0 1 0 2-2 2 2 0 0 0-2 2Z" />
 </svg>
);

export function Header() {
  return (
   <header className="timer-header">
     <span className="project-title">Timer Project</span>
     <div>{moreIcon}</div>
   </header>
  )
}