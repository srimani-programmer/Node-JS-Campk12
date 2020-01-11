const http = require("http");

let server = http.createServer(function (req,res){
	res.end("Hello World...!");
});

server.listen(4000);

console.log('Server is Running at 127.0.0.1:4000');