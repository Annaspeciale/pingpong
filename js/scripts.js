//Business Logic//
var pingPong = function(randomNumber) {
	if (randomNumber % 15 === 0) {
		return "pingpong";
	} else if (randomNumber % 3 === 0) {
		return "ping";
	} else if ( randomNumber % 5 === 0) {
		return "pong";
	} else {
		return false;
	}
};



//User Interface Logic//
$(document).ready(function(event) {
	$("form#pingpong").submit(function(event) {
	event.preventDefault();
	var inputNumber = parseInt($("input#number").val());
	var result = pingPong(inputNumber);
	$("#output").text(result);
	
	});
});