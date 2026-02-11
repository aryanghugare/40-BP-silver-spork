document.addEventListener("mousemove", throttle(event => {
    console.log(event)
}, 1000))

document.addEventListener("scroll", throttleAdvanced((event) => {
    console.log("advanced", event);
}, 1000))

// timeout based
function throttle(fn, delay) {
    let isRunning = false;

    return function (...args) {
        if (isRunning) return;
        setTimeout(() => {
            fn.apply(this, args);
            isRunning = true;
        }, delay);
    }
}
// time stamp based
function throttleAdvanced(fn, delay) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            fn.apply(this, args)
        }
    }

}



