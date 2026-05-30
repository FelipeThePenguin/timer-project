import { isFloat } from '../utils/types';

export function checkTimer(inputValues) {
  const hourValue = inputValues[0];
  const minuteValue = inputValues[1];
  const secondValue = inputValues[2];

  if (
    !hourValue &&
    !minuteValue &&
    !secondValue
  ) {
    return {isAllowed: false, reason: "Please enter a number in one of the inputs"};
  }
  
  if (
    Number(hourValue) > 24 ||
    Number(hourValue) < 0 ||
    isFloat(Number(hourValue))
  ) {
   return {isAllowed: false, reason: "The input for the hour value must be between 0-23 and is not a decimal"};
  }
  
if (
    Number(minuteValue) > 60 ||
    Number(minuteValue) < 0 ||
    isFloat(Number(minuteValue))
  ) {
   return {isAllowed: false, reason: "The input for the minute value must be between 0-60 and is not a decimal"};
}

if (
    Number(secondValue) > 60 ||
    Number(secondValue) < 0 ||
    isFloat(Number(secondValue))
  ) {
   return {isAllowed: false, reason: "The input for the second value must be between 0-60 and is not a decimal"};
  }
    
  const totalSeconds = Number(hourValue) * 3600 + Number(minuteValue) * 60 + Number(secondValue);
  
  if (totalSeconds * 1000 < 5000) {
    return {
      isAllowed: false,
      reason: "Timer must last longer than 4 seconds"
    }
  }
  
  return {
    isAllowed: true,
    value: totalSeconds * 1000
  }
}