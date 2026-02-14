function first() {
    console.log("a");
}

function second() {
    console.log("b");
}

function third() {
    setTimeout(() => {
        console.log("c");
    }, 0);
}

function fourth() {
    Promise.resolve().then(() => console.log("d"));
}

function fifth() {
    Promise.resolve().then(() => console.log("e"))
}

function sixth() {
    setTimeout(() => {
        console.log("f");
    }, 0);
}

third();
sixth();
fifth();
fourth();
second();
first();
// b a e d c f

// order of execution

// 1. all synchronous code

// Note - queues follow FIFO 
//     - task added first to the queue will be executed first

// 2. microtask queue (First in First Out)

// 3. task queue or macrotask queue (FIFO) 


function infiniteFn() {
    console.log("function called")
    Promise.resolve().then(infiniteFn);
}
// mircrotask starvation
function timer() {

    setTimeout(() => {
        // this function will never be called since microtask queue will 
        // never be empty. event loop will ignore this since its priority is low
        console.log("will never be executed")
    }, 0);
}
// infiniteFn();

// timer();

// task queue callbacks 
// - setTimeout, setInterval, DOM events - click, scroll, input, submit etc

// microtask queue callbacks
//  - Promise.resolve, Promise.reject, queueMicrotask, MutationObserver