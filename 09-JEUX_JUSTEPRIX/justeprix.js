/*  
var minValue = 20;
var maxValue = 80;

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function tryNumber {
    if (tryNumber > maxValue) 
    else if showMessage.alert("That's right!")
}

var random = randomNumberBetween(minValue, maxValue);
console.log(random);
*/

/*
function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function guessNumber() {
    var numberTyped = window.prompt('Enter a number here')[0];
    if (numberTyped <= minNumber) boolean = true;
    if (numberTyped >= maxNumber) boolean = true;
    else boolean = false;
}

var msg = "";
var maxNumber = 80;
var minNumber = 20;
var result = randomNumberBetween();  
*/


var msg = "";
var essai = 0;
var maxNumber = 80;
var minNumber = 20;

function randNumber() {
    return (Math.floor((Math.random() * (maxNumber - minNumber)) + minNumber));
}
var result = randNumber()