console.log(a);// variable hoisting- this is possible due to hoisting
// and hoisting behaviour is available due to the way js executes code

var a = 10;

greet(); // function hoisting

function greet() {
    console.log("hello")
    console.log(a)
}




// there are two phases of execution

// 1. creation phase

// functions are loaded in memory
// for variables space is reserved and default value is set to undefined

// 2. execution phase

// code is executed line by line


// Global exection context(there is only one)

// Memory(variable + function)
// code
// this

console.log(this)
// global level what is the value of this - window object in case of browser
// Node.js = global object


function sum(x, y) {
    // var a = 22;
    console.log(a)
    var result = x + y;
    return result;
}

sum(6, 9)

// scope chain

// a function remembers where it was lexically written, not where it was called

// inner scope -> outer scope -> global scope 


