
// Path Module --> Enables us to perform various actions on path of a system or server.

const path = require('path');

// Basename

console.log(path.basename(__dirname));

console.log(path.basename(__filename));

// Extension Name

console.log(path.extname(__filename));

// Directory name
console.log('Dir Name: ' +  __dirname);

console.log("File Name: " + __filename);

console.log(path.dirname(__filename));

console.log(path.dirname(__dirname));

// Join Path

console.log(path.join(__dirname, "Temp","index.html"));



