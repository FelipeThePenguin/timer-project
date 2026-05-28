import './TinyIcon.css'

const SunIcon = (
 <svg
  viewBox="0 0 24 24"
  fill="none"
  className="tiny-icon"
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

const MoonIcon = (
<svg
  viewBox="0 0 24 24"
  fill="currentColor"
  className="tiny-icon"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M11.017 2.802C6.371 3.292 2.75 7.223 2.75 12A9.25 9.25 0 0 0 12 21.25c4.777 0 8.708-3.621 9.198-8.267A7.214 7.214 0 0 1 15.5 15.75 7.25 7.25 0 0 1 8.25 8.5c0-2.313 1.083-4.372 2.767-5.698ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25c.717 0 1.075.571 1.137 1.026.059.438-.103.995-.606 1.299A5.736 5.736 0 0 0 9.75 8.5a5.75 5.75 0 0 0 5.75 5.75 5.736 5.736 0 0 0 4.925-2.781c.304-.503.861-.665 1.299-.606.455.062 1.026.42 1.026 1.137 0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12Z"
  />
</svg>
);

export function ModeIcon({darkMode}) {
  return (
   <>
     {
       darkMode
        ? MoonIcon
        : SunIcon
     }
   </>
  );
}