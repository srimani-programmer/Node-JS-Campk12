// os --> operating System
const os = require('os');

// Platform of a System

console.log(os.platform());

// To Display architecture.

console.log(os.arch());

// To display CPU Cores

console.log(os.cpus());

// To Display Hostname

console.log(os.hostname());

// Display Free Memory

console.log('Free Memory: ' + os.freemem());

// Display Total Memory

console.log('Total Memory: ' + os.totalmem());

// Display Home Directory

console.log("Home Directory: " + os.homedir());
