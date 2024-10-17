function debounce(func, wait) {
    let timeout;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}



function opDebounce(func, wait, options = {}) {
    let timeout;
    let lastCallTime = 0;

    return function executedFunction(...args) {
        const currentTime = Date.now();
        const isLeadingCall = options.leading && (currentTime - lastCallTime >= wait);

        const later = () => {
            timeout = null;
            lastCallTime = Date.now();
            if (!options.leading) func(...args);
        };

        if (isLeadingCall) {
            lastCallTime = currentTime;
            func(...args);
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        }
    };
}

const logMessage = (msg) => {
    console.log(`Message: ${msg}`);
  };
  
  const debouncedLog = debounce(logMessage, 1000);
  const opDebouncedLog = opDebounce(logMessage, 1000, { leading: true });
  
  // Simulating rapid calls
  debouncedLog('Hello 1');
  debouncedLog('Hello 2');
  setTimeout(() => debouncedLog('Hello 3'), 500);
  setTimeout(() => debouncedLog('Hello 4'), 1500);
  
  // Simulating calls for opDebounce
  opDebouncedLog('World 1');
  setTimeout(() => opDebouncedLog('World 2'), 500);
  setTimeout(() => opDebouncedLog('World 3'), 1500);
  