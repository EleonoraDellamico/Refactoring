'use strict';

//Examples of DOM MANIPULATION
/* console.log(document.querySelector('.message').textContent); //reading the content
document.querySelector('.message').textContent = 'eli lo vas a conseguir'; // changed the text it's a dom manipulation
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 34;
console.log(document.querySelector('.guess').value); */

//add an addEventListener
document.querySelector('.check').addEventListener('click', function() {
	//console.log(document.querySelector('.guess').value);
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess); //IT's s tring for this reason we need to changed it put Number after queryselector.
	//LOGIC
	if (!guess) {
		document.querySelector('.message').textContent = '⛔ Not a number';
		//BOOLEAN
	}
});
