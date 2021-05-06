'use strict';

//Examples of DOM MANIPULATION
/* console.log(document.querySelector('.message').textContent); //reading the content
document.querySelector('.message').textContent = 'eli lo vas a conseguir'; // changed the text it's a dom manipulation
document.querySelector('.secretNumber').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 34;
console.log(document.querySelector('.guess').value); */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//add an addEventListener
document.querySelector('.check').addEventListener('click', function() {
	//console.log(document.querySelector('.guess').value);
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess); //IT's s tring for this reason we need to changed it put Number after queryselector.
	// WHEN PLAYERS DON'T INSERT THE NUMBER
	if (!guess) {
		document.querySelector('.message').textContent = '⛔ Not a number ... insert a number';
		//WHEN PALYERS WIN
	} else if (guess === secretNumber) {
		document.querySelector('.message').textContent = '🎉 You rock!🎉';
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}
		// WHEN THE NUMBER IS TOO HIGH
	} else if (guess > secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = '📈 Too heigh ... try again';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = '💣 You lost the game';
			document.querySelector('.score').textContent = 0;
		}
		//WHEN TE NUMBER IS TOO LOW
	} else if (guess < secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = '📉 Too low ... try again';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = '💣 You lost the game';
			document.querySelector('.score').textContent = 0;
		}
	}
});
//LOGIC SECRET NUMBER
//First step to define the secret secretNumber outside the function see the line 11 and 12
//Implement the second if line 21

//LOGIC DECREASE SCORE
//First step: to creat a variable score
// put score-- to decrease
//to pint we have to added document.querySelector('.score').textContent = score see line 26

//LOGIC SCORE === 0 YOU LOOS THE GAME

// IMPLEMENT AGAIN
document.querySelector('.again').addEventListener('click', function() {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	document.querySelector('.message').textContent = 'Start guessing...';
	document.querySelector('.score').textContent = score;
	document.querySelector('.guess').value = '';
	document.querySelector('.number').textContent = '?';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
});

//IMPLEMENT THE HIGH SCORE
//store hiscore in a variable
//set in page 29
