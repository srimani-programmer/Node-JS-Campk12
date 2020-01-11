
var myName = "Samarth";

function changeMyName(){
	let myName = "Samarth G";	// Local To the Function
	console.log(myName);
}

//console.log(myName);
//changeMyName();

var myAge = 16;

function changeMyAge() {
	let myAge = 5;
	console.log("myAge Value Before Change: " + myAge);
	myAge = myAge + 1; 
	console.log("myAge Value with Change: " + myAge);
}

changeMyAge();
console.log("Global Value Outside Function: " + myAge);