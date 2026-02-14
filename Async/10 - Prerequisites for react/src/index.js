import { add as addition, factorial, multiply } from "./math.js";
// here we are using an alias by using as keyword
// addition is alias for add since add function already exists in index.js file
// this will resolve ambiguity - which add function to call exported one or the one
// present in index.js

// named exports can be renamed using alias

// default export can be named anything
import x, * as math from "./math.js" // all named exported members will become available on
// math object

// here x is default export from math.js i.e subtraction

import { log } from "./helper.js";
const sum = math.add(2, 4);

const diff = x(4, 3);

log(diff);

function add(a, b) {
    return a + b.toString();
}
log(sum)