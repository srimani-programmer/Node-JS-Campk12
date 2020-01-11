let time = 0;
let myTime = setInterval(function () {
	time = time + 3;
	if(time >= 9){
		clearInterval(myTime);
	}
	console.log('I am waited for ' + time + " Seconds.");
}, 3000);