/* Déclarez des variables. */

var min = Math.min(7, 5, -12, 6, 32, 18, 14, -2);
var max = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
var sum = min + max;

alert(min + ' ' + max + ' ' + sum);

/* Exo 1 */

var floatBateau = 10.4;
var couleBateau = Math.floor(floatBateau);
var voleBateau = Math.ceil(floatBateau);
console.log(voleBateau);    


/* Exo 2 */


function randomNumberBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

var random = randomNumberBetween(50, 100);
console.log(random);

var random = randomNumberBetween(0, 1);
console.log(random);

var random = randomNumberBetween(0, 10);
console.log(random);

/* Exo 3 */

function randomNumberBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

var array = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];

var randomCharacter = array[randomNumberBetween(0, array.length - 1)];
console.log(randomCharacter);