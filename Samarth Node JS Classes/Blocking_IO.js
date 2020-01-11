
const fs = require("fs");	// Includes Modules with the help of require.

// Blocking IO Principle.
let data = fs.readFileSync("Data.txt");	// Synchronous calls.
console.log("My Server Data is: " + data.toString());

console.log("This is Additional Javascript code");


