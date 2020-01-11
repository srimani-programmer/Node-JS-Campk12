
function noArgumentFunction() {
	console.log("I am a no Argument Function");
}

noArgumentFunction();

function argumentFunction(arg1,arg2) {
	console.log("I am an argument Function");
}

argumentFunction(3,2);

// Variable Argument Function ===> Var-arg Method.

function addManyValues(){
	let sumResult = 0;

	for(let index = 0;index < arguments.length;index++){
		sumResult += arguments[index];
	}

	console.log(sumResult);
}

addManyValues(1,2,3,4,5,6,7,8,9,10);