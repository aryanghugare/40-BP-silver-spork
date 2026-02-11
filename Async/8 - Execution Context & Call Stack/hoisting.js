console.log(a);// variable hoisting- this is possible due to hoisting
// and hoisting behaviour is available due to the way js executes code

var a = 10;

greet(); // function hoisting

function greet() {
    console.log("hello")
    console.log(a)
}

sayHello(); // this will give error

// function expression
var sayHello = function () {
    console.log("hello");
}

sayHello();