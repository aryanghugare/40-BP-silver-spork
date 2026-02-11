var a;
function one() {
    var x = 10;
    two();
}

function two() {
    three();
}
function three() {
    let a = 10;
    four();
}
function four() {
    console.log(a)
    console.log("completed")
    let b = 10;
    function five() {
        console.log(b)
    }
    five();
}

one();


// call stack order - last in first out
// gloabal execution context load
//     one - 
//         two
//             three
//                 four
//                     five

// pop out

// five remove 
//     four
//         three
//             two
//                 one


// function recursive() {
//     recursive();
// }

function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}

factorial(3);