import './ModeIcon.css'

const SunIcon = (
 <svg
  viewBox="0 0 24 24"
  fill="none"
  className="mode-icon"
>
  <path
    d="M12 3v1M12 20v1M4 12H3M6.314 6.314 5.5 5.5m12.186.814.814-.814M6.314 17.69l-.814.81m12.186-.81.814.81M21 12h-1m-4 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
);

export function ModeIcon() {
  return (
   SunIcon
  );
}