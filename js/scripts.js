//Business Logic//
var pingPong = function(randomNumber) {
	var result = [];
	
	for(var index = 1; index <= randomNumber; index++) {

	if (index % 15 === 0) {
		result.push("pingpong");
	} else if (index % 3 === 0) {
		result.push("ping");
	} else if ( index % 5 === 0) {
		result.push("pong");
	} else {
		result.push(index);

	}
};
	return result;

};


//User Interface Logic// 
$(document).ready(function() {
	$("form#pingpong").submit(function(event) {

		event.preventDefault();
	
	var inputNumber = parseInt($("input#number").val());
	var output = pingPong(inputNumber);

	output.forEach(function(index) {
	$(".numberList").append("<li>" + index + "</li>");
	});

	$("#output").show();
	
	
	});
});