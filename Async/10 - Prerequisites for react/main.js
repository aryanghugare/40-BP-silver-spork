// barrel import 
import { intersection } from "./lib";


export function hello() {
    console.log("hello world");
}

export function increment() {
    counter++;
}

export function status() {
    log(counter)
}

function log(value) {
    console.log(value);
}

let counter = 1;

// export { counter, status, increment} these are all names exports
// there can be multiple named exports

// default export - there is only a single default export per module

export default counter;

// comparsion default vs named exports

// default                         named

// - one per module                multiple

// - any name can be given         has to be used with the exported name
// while importing.


// - value at the time of          live/latest value
// import



