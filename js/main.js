// game variables
var game = true;

// balloon variables
var balloon_height = 200;
var balloon_width = 150;
var rad_height = balloon_height/2;
var rad_width = balloon_width/2;

// random number from 1 to 50
var maxNumber = 49;
var randomNumber = Math.floor((Math.random() * maxNumber) + 1);

// scoreboard variables
var round = 1;
var roundScore = 0;
var totalGameScore = 0;

var destroy_balloon = function() {
		alert("Balloon popped! Click Next Round to continue!");
}

var create_balloon = function(w_inc, h_inc) {
	var balloon = document.getElementById('balloon_top');
	balloon.style.height = balloon_height + w_inc + 'px';
	balloon.style.width = balloon_width + h_inc + 'px';
	balloon.style.borderRadius = rad_width + 'px / ' + rad_height + 'px';
}

var inflate_balloon = function() {
	if(game) {
		rad_height = balloon_height/2;
		rad_width = balloon_width/2;
		create_balloon(20, 20);
		balloon_height+=20;
		balloon_width+=20;
		console.log("randomNumber: "+randomNumber+" maxNumber: "+maxNumber);
		randomNumber = Math.floor((Math.random() * maxNumber));
		maxNumber--;
		roundScore++;
		if(randomNumber == 0) {
			game = false;
			destroy_balloon();
			roundScore = 0;
		}
	}
}

var next_round = function() {
	totalGameScore+=roundScore;
	game = true;
	balloon_height = 200;
	balloon_width = 150;
	rad_height = balloon_height/2;
	rad_width = balloon_width/2;
	round++; // increment round number
	// change round number displayed
	var roundNum = document.getElementById('round');
	roundNum.innerHTML = round;
	// display score
	var totalScore = document.getElementById('score');
	totalScore.innerHTML = "$"+(totalGameScore*0.5).toFixed(2);
	create_balloon(0, 0);
}

var nextRound = document.getElementById('next_round');
var inflate = document.getElementById('inflate');
inflate.addEventListener('click', inflate_balloon);
nextRound.addEventListener('click', next_round);


