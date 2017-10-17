var langue = "fr";
var hello;
if (langue = "fr") { hello === "Bonjour tout le monde" }
if (langue = "es") { hello === "Hola, Mundo" }
if (langue = "en") { hello === "Hello world" }
console.log(hello);

var score = 100;
var result;
if (score >= 90) { result === "rank A" }
if (score < 90) { result === "rank B" }
if (score <= 50) { result === "rank C" }
console.log(result);

var singulier = "pomme"; 
var nombre = 15; 
var result = 'Je possède ' + nombre + ' ' + singulier;
if (nombre > 1) { result += 's.' }
console.log(result);