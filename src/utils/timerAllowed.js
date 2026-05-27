import { isFloat } from '../utils/types';

export function checkTimer(inputValues) {
  
  for (let i = 0; i < inputValues.length; i++) {
      const time = inputValues[i];
      if (
          Number(time) > 61 || 
          Number(time) < 0 || 
          isFloat(Number(time))
         ) {
        return {isAllowed: false, reason: "All inputs must have a value that is between 0-60 and is not a float value"};
      }
  }
    
  const totalSeconds = Number(inputValues[0]) * 3600 + Number(inputValues[1]) * 60 + Number(inputValues[2]);
  
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