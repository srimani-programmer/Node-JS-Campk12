
let sayHi = function(name) {
	console.log('Hi'); 
}

let sayBye = function() {
	console.log('Bye');
}

function commonInterface(fun1,fun2){
	fun1();
	// Some Actions Performed.
	fun2();
}

commonInterface(sayHi,sayBye);