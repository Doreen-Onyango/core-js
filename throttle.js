function throttle(fn, delay) {
    let last = 0;
    return function () {
        const now = +new Date();
        if (now - last > delay) {
            fn.apply(this, arguments);
            last = now;
        }
    };
}

function opThrottle(fn, delay, { leading = false, trailing = true } = {}) {
    let last = 0;
    let timer = null;
    return function () {
        const now = +new Date();
        if (!last && leading === false) {
            last = now;
        }
        if (now - last > delay) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            fn.apply(this, arguments);
            last = now;
        } else if (!timer && trailing !== false) {
            timer = setTimeout(() => {
                fn.apply(this, arguments);
                last = +new Date();
                timer = null;
            }, delay);
        }
    };
}

const logMessage = (msg) => {
    console.log(`Message: ${msg}`);
};

const throttledLog = throttle(logMessage, 1000);
const opThrottledLog = opThrottle(logMessage, 1000, { leading: true, trailing: true });

// Simulating rapid calls for throttle
throttledLog('Hello 1');
throttledLog('Hello 2');
setTimeout(() => throttledLog('Hello 3'), 500);
setTimeout(() => throttledLog('Hello 4'), 1500);

// Simulating calls for opThrottle
opThrottledLog('World 1');
setTimeout(() => opThrottledLog('World 2'), 500);
setTimeout(() => opThrottledLog('World 3'), 1500);
