
const fs = require('fs');

fs.readFile('Data.txt', function(err,data){
    if(err){
        throw err;
     //   console.log(err);    
    } 
    console.log(data.toString());
    
})