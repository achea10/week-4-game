var wins = 0;
var looses = 0;
var guessTotal = 0;

document.onkey = function(event) {
 
var number = Math.floor((Math.random()*120) + 19);
var july = Math.floor((Math.random()*12) +1);
var april = Math.floor((Math.random()*12)+1);
var october = Math.floor((Math.random()*12)+1);
var december = Math.flor((Math.random()*12)+1);

$ (".numberdisplay").html(number);

$ (".julycrystal").click(function()) {
	update(july)};

$ (".aprilcrystal").click(function()){
	update(april)};

$ (".octobercrystal").click(function()) {
	update(october)};

$ (".decembercrystal").click(function()) {
	update(december)};

function reset () {
	
	var number = Math.floor((Math.random()*120) + 19);

	$ (".numberdisplay").html(number);

	var july = Math.floor((Math.random()*12) +1);
	var april = Math.floor((Math.random()*12)+1);
	var october = Math.floor((Math.random()*12)+1);
 	var december = Math.flor((Math.random()*12)+1);

 	guessTotal =0 ;

 	$ (".guessTotal").html(guessTotal);
}





}