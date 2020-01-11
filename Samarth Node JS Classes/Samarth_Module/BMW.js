
module.exports = {

	isBusinessClass : function (code) {
		if(code == 'BN256'){
			return "Congratulations! You have booked Businees class Ticket.";
		}else{
			return "You are not on the Business Class";
		}
	},

	isEconomicClass : function(code){
		if(code == "EN999"){
			return "Hurray! You have to go the Economic Class";
		}else{
			return "You are not on the Economic Class";
		}
	},

	isLongJourney : function (time) {
		if(time > 8){
			return "You are having a long Journey. Please Equip yourself and Enjoy the Journey";
		}else{
			return "Your journey is going to complete within a shorter period of time. Keep calm and Have a safe Journey";
		}
	}
};