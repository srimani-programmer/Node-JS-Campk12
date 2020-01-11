
const fs = require("fs");

fs.readFile("Data.txt",function(err,data){	// Asynchronous Calls.
	if(!err){
		console.log("Data From Server: " + data.toString());
	}
});

console.log("This is Additional Javascript code");

/*
	1. Synchronous Data Transfer.
	2. Asynchronous data Transfer.
	3. Interaction Client and Server.
	4. Various Backend Programming Languages.
	5. DisAdvantages of Multi threaded Environment.
	6. Advantages of NodeJS.
		1. Non Blocking IO
		2. Event Based Handling.
	7. Blocking IO VS Non Blocking IO
	8. Modules in Javascript.
		1. npm
			1. npm install
			2. npm version
			3. node ---> REPL
				1. Python
				2. Java
			4. node debug ---> Operations (Deprecated One)
				1. clearBreakpoint
				2. SetBreakpoint.
				3. cont
			5. node inspect.

*/