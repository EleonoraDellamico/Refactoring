'use strict';

//Examples of DOM MANIPULATION
/* console.log(document.querySelector('.message').textContent); //reading the content
document.querySelector('.message').textContent = 'eli lo vas a conseguir'; // changed the text it's a dom manipulation
document.querySelector('.secretNumber').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 34;
console.log(document.querySelector('.guess').value); */
const secretNumber = Math.trunc(Math.random() * 20) + 1;
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
	} else if (guess < secretNumber) {
		document.querySelector('.message').textContent = '📉 Too low ... try again';
	}
});
//LOGIC
//First step to define the secret secretNumber outside the function see the line 11 and 12
//Implement the second if line 21
