// Addition Function
"strict"
function addNumber() {
	let number1 =  parseInt(document.getElementById('num1').value);
	let number2 = parseInt(document.getElementById('num2').value);

	document.getElementById('answer').innerHTML = number1 + number2;
}
