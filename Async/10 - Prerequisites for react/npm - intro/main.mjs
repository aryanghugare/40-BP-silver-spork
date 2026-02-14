// const axios = require("axios")
// by default uses commonjs syntax which uses require
// to use esm modules with import / export syntax
//  you have to change type to module in package.json
// change file extension to .mjs file

// make sure to add node_modules to gitignore file
import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/posts").then(console.log)