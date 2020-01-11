
function isEligibleToVote(age) {
	
	if(age < 0 || age > 125){
		throw "Your Age is not valid";
	}else if(age >= 18){
		return "You are Eligible to vote";
	}else if(age < 18){
		return "You're not Eligible to Vote";
	}
}

try{
	console.log(isEligibleToVote(13));
	console.log(isEligibleToVote(25));
	console.log(isEligibleToVote(-3));
}

catch(Exception){
	console.log("There is an Exception occured.!");
}