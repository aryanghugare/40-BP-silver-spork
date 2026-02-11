///////////////
console.log(a)//
var a = 10;   // temporal dead zone
//
// console.log(x); // this variable has not been initialized because declaration type is let/const
////////////////
const x = 5;


// with var declaration initialization happens with default value as undefined in the creation phase.
// in case of let/const initialization doesn't happen in the creation phase



function abc() {
    var d = 30; // 
    if (true) {
        let f = 30;
        var e = 20;
    }
    console.log(e); // will give output as 20 
    console.log(f) // wiil give error since let/const is block scoped
}

abc();

console.log(d)// this will give error since d is var => function scope
if (true) {
    var b = 10;
}

console.log(b);

// function scope


if (true) {
    let c = 20;

}
console.log(c);
// let & const is block scoped


// Summary

// execution context 
//     local variables 
//     scope chain
//     this 

// 1. GEC(Global exection context)
// 2. memory allocation(creation phase)
// 3. code is executed line by line(execution phase)
// 4. function call(new FEC - function execution context)
// 5. context is pushed to call stack
// 6. after return -> context is popped from stack