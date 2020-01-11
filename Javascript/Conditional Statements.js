
function isEligibleToVote(age) {
	
	if(age < 0 || age > 125){
		console.log("Please Verify your Birth Certificate.!");
	}
	else if(age >= 18){
		console.log("You are Eligible to Vote.");
	}else if(age < 18){
		console.log("You are not Eligible to Vote.");
	}
}

isEligibleToVote(6);

isEligibleToVote(25);

isEligibleToVote(135);