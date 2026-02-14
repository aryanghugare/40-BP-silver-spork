import xzy from "./main.js";
import { hello, increment, status } from "./main.js";
function greet() {
    hello();
    console.log("wasssup!!!")
}

greet();

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    // modification is not allowed directly
    // button.addEventListener("click", () => {
    //     counter++;
    // });

    // button you can call functionality that will do it

    button.addEventListener("click", increment);

    document.querySelector("#status").addEventListener("click", () => {
        // named exports are readonly - they will return the latest/live value
        // default export variables are not live
        console.log(xzy);
        // log - not accessible since it is not exported
        status();
    })
})

