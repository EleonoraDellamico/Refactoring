'use strict';

//Examples of DOM MANIPULATION
/* console.log(document.querySelector('.message').textContent); //reading the content
document.querySelector('.message').textContent = 'eli lo vas a conseguir'; // changed the text it's a dom manipulation
document.querySelector('.secretNumber').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 34;
console.log(document.querySelector('.guess').value); */
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;
//add an addEventListener
document.querySelector('.check').addEventListener('click', function() {
	//console.log(document.querySelector('.guess').value);
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess); //IT's s tring for this reason we need to changed it put Number after queryselector.
	if (!guess) {
		document.querySelector('.message').textContent = '⛔ Not a number ... insert a number';
		//BOOLEAN
	} else if (guess === secretNumber) {
		document.querySelector('.message').textContent = '🎉 You rock!🎉';
	} else if (guess > secretNumber) {
		document.querySelector('.message').textContent = '📈 Too heigh ... try again';
		score--;
		document.querySelector('.score').textContent = score;
	} else if (guess < secretNumber) {
		document.querySelector('.message').textContent = '📉 Too low ... try again';
		score--;
		document.querySelector('.score').textContent = score;
	}
});
//LOGIC SECRET NUMBER
//First step to define the secret secretNumber outside the function see the line 11 and 12
//Implement the second if line 21

//LOGIC DECREASE SCORE
//First step: to creat a variable score
// put score-- to decrease
//to pint we have to added document.querySelector('.score').textContent = score see line 26
