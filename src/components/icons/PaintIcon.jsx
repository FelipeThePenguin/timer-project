import './TinyIcon.css';

const PaintSvg = (
<svg
  viewBox="0 0 24 24"
  fill="none"
  className="tiny-icon"
>
  <path
    d="M15.5 8.5H15.51M10.5 7.5H10.51M7.5 11.5H7.51M12 21C7.03 21 3 16.971 3 12S7.03 3 12 3s9 4.029 9 9c0 1.657-1.343 3-3 3h-.6c-.372 0-.557 0-.713.025a2 2 0 0 0-1.662 1.662c-.025.156-.025.341-.025.713V18c0 1.657-1.343 3-3 3ZM16 8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-5-1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-3 4a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
);

export function PaintIcon() {
  return (
   PaintSvg
  );
}