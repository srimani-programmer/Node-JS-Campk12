
function isEligibleToVote (age) {
	if(age > 125 || age < 0){
		return "Please Verify your Birth Certificate";
	}else if (age >= 18) {
		return "Hurray! You can Vote...!";
	}else if(age < 18){
		return "Sorry! You can not Vote";
	}
}

function isTicketBooked(status){
	if(status){
		return "Your Ticket is Confirmed.";
	}else{
		return "Sorry! Your ticket is not yet confirmed.";
	}
}

function isBusinessClass (code) {
	if(code == 'BN256'){
		return "Congratulations! You have booked Businees class Ticket.";
	}
}

function isEconomicClass (code) {
	if(code == "EN999"){
		return "Hurray! You have to go the Economic Class";
	}
}

function isLongJourney (time) {
	if(time > 8){
		return "You are having a long Journey. Please Equip yourself and Enjoy the Journey";
	}else{
		return "Your journey is going to complete within a shorter period of time. Keep calm and Have a safe Journey";
	}
}

// Exporting the Things to the Outside World.
module.exports.isEligibleToVote = isEligibleToVote;
module.exports.isTicketBooked = isTicketBooked;
module.exports.isEconomicClass = isEconomicClass;
module.exports.isLongJourney = isLongJourney;
module.exports.isBusinessClass = isBusinessClass;

