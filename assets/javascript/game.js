

var wins = 0;
var losses = 0;
var currentTotal = 0;


$(document).ready(function() {
 
var number = Math.floor((Math.random()*121) + 19);
var july = Math.floor((Math.random()*13) +1);
var april = Math.floor((Math.random()*13)+1);
var october = Math.floor((Math.random()*13)+1);
var december = Math.floor((Math.random()*13)+1);

$ (".numberDisplay").html(number);

$ (".julycrystal").on("click", function(){
	update(july)
});

$ (".aprilcrystal").on("click", function() {
	update(april)
});

$ (".octobercrystal").on("click", function() {
	update(october)
});

$ (".decembercrystal").on("click", function() {
	update(december)
});


function update(color) {

	currentTotal += color;

	$ (".currentDisplay").empty();
	$ (".currentDisplay").append(currentTotal);


	if (currentTotal > number) {
		losses++;
		$(".lossesDisplay").html(losses);
		alert("Damn you loose!");

	reset();
};

	if (currentTotal === number) {
		wins++;
		$(".winsDisplay").html(losses);
		alert("Ay you won!");
	
	reset();

};

function reset () {
	
	var number = Math.floor((Math.random()*121) + 19);

	$ (".numberDisplay").html(number);

	var july = Math.floor((Math.random()*13) +1);
	var april = Math.floor((Math.random()*13) +1);
	var october = Math.floor((Math.random()*13) +1);
 	var december = Math.floor((Math.random()*13) +1);

 	currentTotal = 0;
 	$ ("#currentDisplay").html(currentTotal);
};

};

});







