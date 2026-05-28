import './SmallIcon.css';

const RestartSvg = (
<svg
  viewBox="0 0 24 24"
  fill="currentColor"
  className="small-icon"
>
  <path d="M18.258 3.508a.75.75 0 0 1 .463.693v4.243a.75.75 0 0 1-.75.75h-4.243a.75.75 0 0 1-.53-1.28l1.603-1.603A7.218 7.218 0 0 0 6.873 7.873a7.25 7.25 0 1 0 12.32 4.22.75.75 0 0 1 1.488-.186 8.75 8.75 0 1 1-14.868-5.094 8.717 8.717 0 0 1 10.118-1.633l1.51-1.51a.75.75 0 0 1 .816-.162Z" />
</svg>
);

export function RestartIcon() {
  return (
   <>
    {RestartSvg}
   </>
  )
}