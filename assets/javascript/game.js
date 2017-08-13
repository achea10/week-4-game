var wins = 0;
var losses = 0;
var currentTotal = 0;


document.onkey = function(event) {
 
var number = Math.floor((Math.random()*120) + 19);
var july = Math.floor((Math.random()*12) +1);
var april = Math.floor((Math.random()*12)+1);
var october = Math.floor((Math.random()*12)+1);
var december = Math.flor((Math.random()*12)+1);

$ ("#numberDisplay").html(number);

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

function reset () {
	
	var number = Math.floor((Math.random()*120) + 19);

	$ ("#numberDisplay").html(number);

	var july = Math.floor((Math.random()*12) +1);
	var april = Math.floor((Math.random()*12)+1);
	var october = Math.floor((Math.random()*12)+1);
 	var december = Math.flor((Math.random()*12)+1);

 	currentTotal =0 ;

 	$ ("#currentTotal").html(currentTotal);
}

function update(color) {

	currentTotal += color;

	currentTotal = 0;
	
	$ ("#currentDisplay").append(currentTotal);

	if (currentTotal > number)
		losses++;
		$("#lossesDisplay").html(losses);

	reset();

	if (currentTotal === number)
		wins++;
		$("#winsDisplay").html(losses);

	reset();
}

}







