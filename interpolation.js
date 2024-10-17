function interpolation({
    step = 0,
    start = 0,
    end = 0,
    callback = () => {},
    duration = 0
  } = {}) {
    const stepSize = (end - start) / step;
    let currentValue = start;
    let currentStep = 0;
  
    const intervalId = setInterval(() => {
      if (currentStep < step) {
        const x = currentValue;
        const y = (duration / step) * (currentStep + 1);
        
        callback([x, y]);
        
        currentValue += stepSize;
        currentStep++;
      } else {
        clearInterval(intervalId);
      }
    }, duration / step);
  }

  // Example callback function to handle interpolated values
const logInterpolatedValue = (value) => {
    console.log(`Interpolated value: x = ${value[0]}, y = ${value[1]}`);
  };
  
  // Using the interpolation function
  interpolation({
    step: 5,
    start: 0,
    end: 100,
    callback: logInterpolatedValue,
    duration: 1000
  });
  