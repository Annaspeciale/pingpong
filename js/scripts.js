//Business Logic//
var pingPong = function(randomNumber) {
	var result = [];
	var = index;
	for (var index = 1; index <= randomNumber; index += 1) {
	if (randomNumber % 15 === 0) {
		result.push("pingpong");
	} else if (randomNumber % 3 === 0) {
		result.push("ping");
	} else if ( randomNumber % 5 === 0) {
		result.push("pong");
	} else {
		return push(index);
	}
};

return result;

//User Interface Logic//
$(document).ready(function(event) {
	$("form#pingpong").submit(function(event) {
	event.preventDefault();

	var inputNumber = parseInt($("input#number").val());

	result.forEach(function(index) {
		$(".numberList").append("<li>" + index + </li>);
			$("#output").show();
	}
	
	
	});
});