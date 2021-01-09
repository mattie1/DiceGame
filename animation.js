//Matei's game




//Describe dices
var dice1 = document.querySelectorAll('img')[0];
var dice2 = document.querySelectorAll('img')[1];
//Main h1 
var mainTitle = document.querySelectorAll('h1');
//Random Number
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomPicture1 = 'images/dice' + randomNumber1 + '.png';
var randomPicture2 = 'images/dice' + randomNumber2 + '.png';
//Random dices picture
dice1.setAttribute('src', randomPicture1);
dice2.setAttribute('src', randomPicture2);
//If conditions

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').textContent = 'Player 1 wins.';
} else if (randomNumber1 == randomNumber2) {
    document.querySelector('h1').textContent = 'Draw. Refresh / F5';
} else {
    document.querySelector('h1').textContent = 'Player 2 wins.';
}