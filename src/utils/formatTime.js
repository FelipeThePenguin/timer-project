export function formatTime(totalMs) {
  const msRemainder = (totalMs) % 1000;
  let msValue = (totalMs - msRemainder) / 1000;
  
  if (msRemainder !== 0) {
    msValue++;
  }
  
  const secRemainder = msValue % 60;
  const secValue = (msValue - secRemainder) / 60;
  const minRemainder = (secValue) % 60;
  const minValue = (secValue - minRemainder) / 60;
  const hourValue = minValue;
  
  const secString = String(secRemainder).padStart(2, '0');
  const minString = String(minRemainder).padStart(2, '0');
  const hourString = String(hourValue).padStart(2, '0');
  
  return `${hourString}:${minString}:${secString}`;
}